import Link from "next/link";
import Image from 'next/image';


const Header = () => {
    return (
        <header className="bg-gray-200 shadow-sm h-20">
            <div className="container py-3 px-20 flex justify-between">
                <nav>
                    <ul className="flex gap-8 py-2">
                        <li className="py-1 px-5 transition-all duration-300 hover:border-b hover:border-orange-500 hover:scale-105 font-semibold">
                            <Link href={"/"} >Home</Link>
                        </li>
                        <li className=" py-1 px-5 transition-all duration-300 hover:border-b hover:border-orange-500 hover:scale-105 font-semibold ">
                            <Link href={"./movies"}>Movies</Link>
                        </li>
                    </ul>
                </nav>
                <Link href={"/"} className="hover:scale-105 transition-all duration-100">
                <Image width={60} height={60} src={"/loading.svg"} alt="loading"/>
                </Link>
            </div>
        </header>
    );
}

export default Header;