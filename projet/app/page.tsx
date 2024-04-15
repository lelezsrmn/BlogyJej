import 'tailwindcss/tailwind.css';
import HeaderNoco from "@/src/components/header/Header-noco";
import Hero from "@/src/components/main/Hero";
import Contact  from "@/src/components/footer/Contact";
import ContenueAddHorizontal from "@/src/components/main/ContenueAdd-horizontal";

export default function home() {
    return (
        <div>
            <HeaderNoco/>
            <main className={"bg-gray-900"}>
                <Hero/>
                <ContenueAddHorizontal/>
            </main>
            <Contact/>
        </div>
    );
}
