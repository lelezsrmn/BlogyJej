import React from 'react';

const Editarticle = () => {
    return (
        <form className="max-w-md mx-auto p-6 bg-gray-800 shadow-md rounded-md space-y-6">
            <h2 className="text-2xl font-semibold text-white">Ajouter un article</h2>
            <div>
                <label htmlFor="email" className="block font-medium text-white">Email</label>
                <input type="email" id="email"
                       className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
                       placeholder="ex: LucasMartoto@jej.com" required/>
            </div>
            <div>
                <label htmlFor="nom" className="block font-medium text-white">Nom</label>
                <input type="text" id="nom"
                       className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
                       placeholder="ex: Lucas Marteau" required/>
            </div>
            <div>
                <label htmlFor="message" className="block font-medium text-white">Description</label>
                <textarea id="message"
                          className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
                          placeholder="BlaBla..."></textarea>
            </div>
            <div>
                <label htmlFor="image" className="block font-medium text-white">Image</label>
                <input type="file" id="image" accept="image/*" //onChange={handleImageChange}
                       className="bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-500   "/>
            </div>
            <button type="submit"
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">Ajouter
                article
            </button>
        </form>
    );
};

export default Editarticle;
