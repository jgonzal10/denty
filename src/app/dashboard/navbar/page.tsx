import Link from "next/link";

export default async function Navbar() {
        return (
            <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-start">
            <Link href="/dashboard/products" className="mr-4 hover:text-gray-400 transition duration-300">
                  Overview
                </Link>
                <Link href="/dashboard/settings" className="mr-4 hover:text-gray-400 transition duration-300">
                  Settings
                </Link>
            </div>
          </nav>
        )
    }