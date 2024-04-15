import React from 'react';
import HeaderNoco from "@/src/components/header/Header-noco";
import Image from "next/image";
import ContenueAddHorizontal from "@/src/components/main/ContenueAdd-horizontal";
import ContenueArticle from "@/src/components/main/ContenueArticle";
import Contact from "@/src/components/footer/Contact";

const Page = () => {
    return (
        <div className={'bg-gray-900'}>
            <HeaderNoco/>
            <main className={"container max-w-6xl mx-auto space-y-8 pb-20"}>
                <ContenueArticle/>
                <ContenueAddHorizontal/>
            </main>
            <Contact/>
        </div>
    );
};

export default Page;
