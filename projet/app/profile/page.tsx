import React from 'react';
import HeaderCo from "@/src/components/header/Header-co";
import ContenueAddVerticale from "@/src/components/main/ContenueAdd-verticale";
import User from "@/src/components/main/User";


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
                    <button
                        className={"mt-10 btn-primary bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"}>
                        Ajouter un article
                    </button>
                </section>
            </main>
        </div>
    );
};

export default Page;
