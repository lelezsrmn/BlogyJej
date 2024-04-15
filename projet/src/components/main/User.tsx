import React from 'react';
import Image from "next/image";

const User = () => {
    return (
        <div className={"flex flex-col max-w-md p-6 bg-gray-800 text-gray-200 rounded"}>

            <Image
                src="/path/to/your/image.jpg"
                alt="Image description"
                width={620}
                height={340}
                className="bg-neutral-600 mb-10"
            />

            <div>
                <h2 className={"text-xl font-semibold"}>Nom Prénom</h2>
                <span className={"block pb-2 text-sm dark:text-gray-600"}>Développeur Front-end</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi
                    illum qui unde aspernatur non deserunt</p>
            </div>
        </div>
    );
};

export default User;
