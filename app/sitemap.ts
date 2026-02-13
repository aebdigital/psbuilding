import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://psbuilding.sk';

    const staticRoutes = [
        '',
        '/kontakt',
        '/bezpecnostne-dvere',
        '/prenajom',
        '/ochrana-osobnych-udajov',
    ];

    const galleryCategories = [
        'zateplovanie',
        'obklady-dlazby',
        'maliarske-prace',
        'sadrokarton',
        'murarske-prace',
        'kamenna-dlazba',
        'ine-prace',
    ];

    const routes = [
        ...staticRoutes.map((route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: route === '' ? 1 : 0.8,
        })),
        ...galleryCategories.map((slug) => ({
            url: `${baseUrl}/galeria/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        })),
    ];

    return routes;
}
