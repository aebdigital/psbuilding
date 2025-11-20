// Structured Data for PS Building Website
// This file contains reusable structured data objects

const structuredData = {
    // Organization data
    organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "PS Building s.r.o.",
        "url": "https://psbuilding.sk",
        "logo": "https://psbuilding.sk/logo.png",
        "description": "Mladá ambiciózna stavebná spoločnosť so skúsenosťami zo zahraničia. Špecializujeme sa na dokončovacie stavebné práce v interiéri a exteriéri s dôrazom na profesionalitu a kvalitu.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Slavkovská 203",
            "addressLocality": "Nová Lesná",
            "postalCode": "05986",
            "addressCountry": "SK",
            "addressRegion": "Prešovský kraj"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+421902120001",
            "contactType": "customer service",
            "availableLanguage": ["Slovak"],
            "areaServed": "SK"
        },
        "sameAs": [
            "https://www.facebook.com/PSBuild"
        ],
        "founder": {
            "@type": "Person",
            "name": "PS Building Team"
        },
        "foundingDate": "2018",
        "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "value": 15
        }
    },

    // Local Business data
    localBusiness: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "PS Building s.r.o.",
        "image": "https://psbuilding.sk/sources/IMG_20200508_125444.webp",
        "telephone": "+421902120001",
        "email": "sramcikbuilding@gmail.com",
        "url": "https://psbuilding.sk",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Slavkovská 203",
            "addressLocality": "Nová Lesná",
            "postalCode": "05986",
            "addressCountry": "SK"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 49.2833,
            "longitude": 20.2833
        },
        "openingHours": "Mo-Fr 09:00-16:00",
        "priceRange": "€€",
        "paymentAccepted": "Cash, Bank transfer",
        "currenciesAccepted": "EUR"
    },

    // Website data
    website: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "PS Building",
        "url": "https://psbuilding.sk",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://psbuilding.sk/galeria.html?filter={search_term_string}",
            "query-input": "required name=search_term_string"
        },
        "publisher": {
            "@type": "Organization",
            "name": "PS Building s.r.o."
        }
    },

    // Breadcrumb data (can be customized per page)
    breadcrumb: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Domov",
                "item": "https://psbuilding.sk/"
            }
        ]
    },

    // Service area
    serviceArea: {
        "@type": "State",
        "name": "Prešovský kraj"
    }
};

// Export for use in HTML pages
if (typeof module !== 'undefined' && module.exports) {
    module.exports = structuredData;
}