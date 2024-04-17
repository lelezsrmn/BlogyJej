"use client"

import { useState } from "react";

const Addpost = () => {

    const [data,setData] = useState({
        title:'',
        contained:'',
    })

    const registerArticle = async (e:any) => {
        e.preventDefault()
        const response = await fetch('/api/post', {
            method:'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({data})
        })

    }

    return (

        <form onSubmit={registerArticle} className={"max-w-md mx-auto p-6 bg-gray-800 shadow-md rounded-md space-y-6"}>
            <h2 className="text-2xl font-semibold text-white">Ajouter un article</h2>
            <div>
                <label htmlFor="name"
                       className="block font-medium text-white">
                    Titre
                </label>
                <div>
                    <input
                        id="name"
                        name="title"
                        type="text"
                        required
                        value={data.title}
                        onChange={(e) => {
                            setData({...data, title: e.target.value});
                        }}
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="content"
                       className="block font-medium text-white">
                    Contenue
                </label>
                <div className="mt-2">
                            <textarea
                                id="content"
                                name="contained"
                                required
                                value={data.contained}
                                onChange={(e) => {
                                    setData({...data, contained: e.target.value});
                                }}
                                className="w-full h-64 px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
                            />
                </div>
            </div>

            <div>
                <button type="submit"
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
                    AjouterVotreArticle
                </button>
            </div>
        </form>

    );
};

export default Addpost;
