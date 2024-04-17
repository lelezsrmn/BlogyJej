import React from 'react';
import Image from "next/image";

const Hero = () => {
    return (
        <section className="text-gray-200 body-font mb-40 pt-20 container max-w-6xl mx-auto space-y-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8">
                <div className="lg:w-1/2 flex flex-col items-center md:items-start md:text-left mb-8 md:mb-0">
                    <h1 className="title-font text-3xl sm:text-4xl mb-4 font-medium text-gray-100">
                        Lorem ipsum dolor sit amet
                        <br className="hidden lg:inline-block"/>readymade gluten
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                    </p>
                    <div className="flex justify-center">
                        <button
                            className="btn-primary bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            <a href={"/article"}>Voir Plus...</a>
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <Image
                        src=""
                        alt="Hero Image"
                        width={640}
                        height={480}
                        className="rounded bg-amber-50"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
