import React from 'react';
import HeaderCo from "@/src/components/header/Header-co";
import ContenueAddVerticale from "@/src/components/main/ContenueAdd-verticale";
import User from "@/src/components/main/User";
import Contact from "@/src/components/footer/Contact";
import Addpost from "@/src/components/main/editarticle";


const Page = () => {
    return (
        <div className={'bg-gray-900'}>
            <HeaderCo/>
            <main className={"container max-w-6xl mx-auto py-10 flex justify-between"}>

                <section>
                    <h1 className={'title-font text-3xl sm:text-4xl mb-4 font-medium text-gray-100'}>Profile</h1>
                    <ContenueAddVerticale/>
                </section>

                <section className={'mt-20'}>
                    <User/>
                    <section className={'mt-8'}>
                        <Addpost/>
                    </section>
                </section>
            </main>
            <Contact/>
        </div>
    );
};

export default Page;
