'use client';

export default function JsonLd() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "PS Building s.r.o.",
        "image": "https://psbuilding.sk/next.svg", // Replace with actual logo URL when available
        "@id": "https://psbuilding.sk",
        "url": "https://psbuilding.sk",
        "telephone": "+421 902 120 001",
        "email": "sramcikbuilding@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Slavkovská 203",
            "addressLocality": "Nová Lesná",
            "postalCode": "059 86",
            "addressCountry": "SK"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 49.1226,
            "longitude": 20.2647
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "16:00"
        },
        "sameAs": [
            "https://www.facebook.com/PSBuild"
        ],
        "description": "Profesionálne stavebné služby so zameraním na zatepľovanie, obklady, dlažby a rekonštrukcie interiérov."
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
