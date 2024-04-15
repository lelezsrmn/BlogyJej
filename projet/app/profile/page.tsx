import React from 'react';
import HeaderCo from "@/src/components/header/Header-co";
import ContenueAddVerticale from "@/src/components/main/ContenueAdd-verticale";

const Page = () => {
    return (
        <div>
            <HeaderCo/>
            <main className={"bg-gray-900"}>
                <ContenueAddVerticale/>
            </main>
        </div>
    );
};

export default Page;
