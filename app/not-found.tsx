import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl font-bold text-[#c8652b] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Stránka nebola nájdená</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Ospravedlňujeme sa, ale stránka, ktorú hľadáte, neexistuje alebo bola presunutá.
      </p>
      <Link 
        href="/" 
        className="bg-[#c8652b] text-white px-6 py-3 rounded font-semibold hover:bg-[#a04e1f] transition-colors"
      >
        Späť na domovskú stránku
      </Link>
    </div>
  );
}
