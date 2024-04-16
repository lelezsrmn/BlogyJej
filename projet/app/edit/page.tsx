import React from 'react';
import HeaderCo from "@/src/components/header/Header-co";
import Contact from "@/src/components/footer/Contact";
import Editarticle from "@/src/components/main/editarticle";

const Page = () => {
    return (
        <div className={'bg-gray-900'}>
            <HeaderCo/>
            <main className={"container max-w-6xl mx-auto py-10"}>
                <Editarticle/>

            </main>
            <Contact/>
        </div>
    );
};

export default Page;
