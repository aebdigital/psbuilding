import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import PageHeader from '@/components/PageHeader';
import GalleryGrid from '@/components/GalleryGrid';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryMap[slug];

  if (!category) return {};

  return {
    title: category.title,
    description: `Prehliadnite si naše referencie v kategórii ${category.title}. Kvalitné stavebné práce a rekonštrukcie v Regióne Poprad a Tatry.`,
  };
}

const categoryMap: Record<string, { folder: string; title: string }> = {
  'zateplovanie': { folder: 'zateplovacie', title: 'Zatepľovacie systémy' },
  'obklady-dlazby': { folder: 'obklady-dlazby', title: 'Obklady a Dlažby' },
  'maliarske-prace': { folder: 'maliarske-prace', title: 'Maliarske práce AIRLESS' },
  'sadrokarton': { folder: 'sadrokarton', title: 'Sadrokartonové systémy' },
  'murarske-prace': { folder: 'murarske', title: 'Murárske práce' },
  'kamenna-dlazba': { folder: 'kamenna-dlazba', title: 'Kamenná dlažba' },
  'ine-prace': { folder: 'ine-prace', title: 'Iné práce' },
};

export async function generateStaticParams() {
  return Object.keys(categoryMap).map((slug) => ({
    slug,
  }));
}

export default async function GalleryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categoryMap[slug];

  if (!category) {
    notFound();
  }

  // Read images from the folder
  const imagesDir = path.join(process.cwd(), 'public', 'sources', category.folder);
  let images: string[] = [];

  try {
    const files = fs.readdirSync(imagesDir);
    images = files
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map((file) => `/sources/${category.folder}/${file}`);
  } catch (error) {
    console.error(`Error reading directory ${imagesDir}:`, error);
    // If folder doesn't exist or empty, images will be empty array
  }

  return (
    <main>
      <PageHeader title="PORTFÓLIO" />
      <GalleryGrid title={category.title} images={images} />
    </main>
  );
}
