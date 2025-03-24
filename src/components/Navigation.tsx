import Link from 'next/link';

export default function Navigation() {
  return (
    <div className="space-y-2">
      <Link href="/company/ueber-uns" className="block text-sm text-gray-300 hover:text-white">
        Über uns
      </Link>
      <Link href="/company/werte-kultur" className="block text-sm text-gray-300 hover:text-white">
        Werte & Kultur
      </Link>
      <Link href="/company/team" className="block text-sm text-gray-300 hover:text-white">
        Team
      </Link>
      <Link href="/company/blog" className="block text-sm text-gray-300 hover:text-white">
        Blog & Insights
      </Link>
    </div>
  );
} 