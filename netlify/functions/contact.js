exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const { name, email, phone, message } = JSON.parse(event.body);
    
    console.log('Received form data:', { name, email, phone: phone ? '***' : '', message: message ? 'provided' : 'missing' });

    // Validate required fields
    if (!name || !email || !message) {
      console.error('Validation failed - missing required fields:', { name: !!name, email: !!email, message: !!message });
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          error: 'Všetky povinné polia musia byť vyplnené' 
        }),
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          error: 'Neplatná emailová adresa' 
        }),
      };
    }

    // SMTP2GO API configuration using environment variables
    const smtp2goApiKey = process.env.SMTP2GO_API_KEY;
    const fromEmail = process.env.SMTP2GO_FROM_EMAIL || 'noreply@psbuilding.sk';
    const toEmail = process.env.BUSINESS_EMAIL || 'sramcikbuilding@gmail.com';

    console.log('Environment check:', {
      hasApiKey: !!smtp2goApiKey,
      fromEmail,
      toEmail,
      apiKeyLength: smtp2goApiKey ? smtp2goApiKey.length : 0
    });

    if (!smtp2goApiKey) {
      console.error('SMTP2GO_API_KEY not configured');
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          error: 'Chyba servera. Skúste to neskôr.' 
        }),
      };
    }

    // Create HTML email template with PS Building styling
    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="sk">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nová správa z kontaktného formulára</title>
        <style>
            body {
                font-family: 'Montserrat', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f4f4f4;
            }
            .container {
                background-color: #fff;
                border-radius: 10px;
                padding: 30px;
                box-shadow: 0 0 20px rgba(0,0,0,0.1);
            }
            .header {
                background-color: #c8652b;
                color: white;
                padding: 20px;
                border-radius: 10px 10px 0 0;
                margin: -30px -30px 30px -30px;
                text-align: center;
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 600;
            }
            .field {
                margin-bottom: 20px;
                padding: 15px;
                background-color: #f9f9f9;
                border-left: 4px solid #c8652b;
                border-radius: 5px;
            }
            .field-label {
                font-weight: bold;
                color: #c8652b;
                margin-bottom: 5px;
            }
            .field-value {
                color: #333;
                word-wrap: break-word;
            }
            .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                text-align: center;
                color: #666;
                font-size: 12px;
            }
            .logo-section {
                text-align: center;
                margin-bottom: 20px;
            }
            .logo-text {
                color: #c8652b;
                font-size: 20px;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>PS BUILDING</h1>
                <p style="margin: 5px 0 0 0;">Nová správa z kontaktného formulára</p>
            </div>
            
            <div class="logo-section">
                <div class="logo-text">🏗️ PS BUILDING s.r.o.</div>
            </div>
            
            <div class="field">
                <div class="field-label">Meno:</div>
                <div class="field-value">${name}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Email:</div>
                <div class="field-value">${email}</div>
            </div>
            
            ${phone ? `
            <div class="field">
                <div class="field-label">Telefón:</div>
                <div class="field-value">${phone}</div>
            </div>
            ` : ''}
            
            <div class="field">
                <div class="field-label">Správa:</div>
                <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="footer">
                <p>Táto správa bola odoslaná z kontaktného formulára na stránke psbuilding.sk</p>
                <p>Dátum: ${new Date().toLocaleString('sk-SK')}</p>
            </div>
        </div>
    </body>
    </html>
    `;

    // SMTP2GO API request
    const smtp2goResponse = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Smtp2go-Api-Key': smtp2goApiKey,
      },
      body: JSON.stringify({
        to: [toEmail],
        sender: fromEmail,
        subject: `Nová správa z webu PS Building - ${name}`,
        html_body: htmlTemplate,
        text_body: `
Nová správa z kontaktného formulára PS Building

Meno: ${name}
Email: ${email}
${phone ? `Telefón: ${phone}` : ''}

Správa:
${message}

Odoslané: ${new Date().toLocaleString('sk-SK')}
        `.trim(),
      }),
    });

    const smtp2goData = await smtp2goResponse.json();

    if (!smtp2goResponse.ok) {
      console.error('SMTP2GO Error:', smtp2goData);
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          error: 'Nepodarilo sa odoslať email. Skúste to neskôr.' 
        }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ 
        success: true,
        message: 'Email bol úspešne odoslaný. Ďakujeme za správu!' 
      }),
    };

  } catch (error) {
    console.error('Function Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Vyskytla sa chyba. Skúste to neskôr.' 
      }),
    };
  }
};