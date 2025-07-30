
import Image from 'next/image';
import logo from '../wayprint.svg';
import { User2 } from 'lucide-react'; // 'User' ni olib tashladik
import Link from 'next/link';

const Header = () => {
    return (
        <div className="container py-4">
            <header className="px-6 py-4 flex items-center justify-between ">
                <Image src={logo} alt="logo" className="w-40" />

                <div className="flex items-center gap-10">

                    <nav className="space-x-6 hidden md:flex">
                        <a href="#" className="text-gray-700 hover:text-gray-500 releway-sm text-base transition">uy</a>
                        <a href="#" className="text-gray-700 hover:text-gray-500 releway-sm text-base transition">mahsulotlar</a>
                        <a href="#" className="text-gray-700 hover:text-gray-500 releway-sm text-base transition">haqida</a>
                        <a href="#" className="text-gray-700 hover:text-gray-500 releway-sm text-base transition">bog&apos;lanish</a> {/* ← bu yerda fix */}
                    </nav>

                    <Link href="/auth/login" className="w-10 h-10 bg-[#536451] text-white rounded-full flex items-center justify-center font-medium hover:bg-emerald-600 transition">
                        <User2 />
                    </Link>

                </div>
            </header>
        </div>
    );
};

export default Header;