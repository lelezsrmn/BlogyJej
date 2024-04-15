import Image from "next/image";
import 'tailwindcss/tailwind.css';

const HeaderCo = () => {
    return (
        <header className="w-full h-24 bg-neutral-950 text-white flex justify-between  px-96 items-center">
            <Image src="/img/logo.png" width={140} height={170} alt={'yhea'} quality={100}/>
        </header>
    );
};

export default HeaderCo;
