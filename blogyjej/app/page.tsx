import Image from "next/image";
import 'tailwindcss/tailwind.css';
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import ContenueAdd from "@/src/components/ContenueAdd";
import Contact  from "@/src/components/Contact";

export default function home() {
    return (
        <div>
            <Header/>
            <main className={"bg-gray-900"}>
                <Hero/>
                <ContenueAdd/>
            </main>
            <Contact/>
        </div>
    );
}
