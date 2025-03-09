import Link from "next/link";

export default async function Navbar() {
        return (
            <nav className="sticky top-0 left-0 z-50 w-full bg-gray-800 text-white md:px-8 py-4">
            <div className="w-full flex justify-between items-center md:px-8 py-2">
                <Link href="/dashboard/settings" className="hover:underline">
                  Settings
                </Link>
                <Link href="/dashboard/products" className="hover:underline">
                  Products
                </Link>

            </div>
          </nav>
        )
    }