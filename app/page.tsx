import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "PS Building - Profesionálne stavebné služby",
  description: "Individuálny prístup, profesionalita a kvalita. Realizujeme zatepľovanie budov, obklady, dlažby, sadrokartóny a murárske práce s dôrazom na detail.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Gallery />
    </main>
  );
}