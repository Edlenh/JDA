import Link from 'next/link';




export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-amber-50">
    
      <div className="flex gap-4">
      
        <Link href="/about" className="hover:text-blue-500">About</Link>
        <Link href="/services" className="hover:text-blue-500">Services</Link>
        <Link href="/contact" className="hover:text-blue-500">Contact</Link>
      </div>
    </nav>
  );
}