import Image from "next/image";
import 'tailwindcss/tailwind.css';

const HeaderNoco = () => {
    return (
        <header className="w-full h-24 bg-neutral-950 text-white flex justify-between  px-96  items-center">
            <a href={'/#'}>
                <Image src="/img/logo.png" width={140} height={170} alt={'yhea'} quality={100}/>
            </a>
            <button type="button"
                    className="text-sm text-black font-bold bg-neutral-300 hover:bg-blue-400 rounded-full px-4 h-10">
            <a href={'/login'}>SeConnecter</a>
            </button>
        </header>
    );
};

export default HeaderNoco;
