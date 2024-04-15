import React from 'react';

const Contact = () => {
    return (
        <footer className="w-full bg-neutral-900 py-5 px-96">
            <div className="py-8 px-4 max-w-screen-md">

                <form className="space-y-8">
                    <h2 className="mb-4 text-2xl text-gray-900 dark:text-white">NousContacter</h2>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-900 dark:text-gray-300">Your
                            email</label>
                        <input type="email" id="email"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                               placeholder="name@flowbite.com" required/>
                    </div>
                    <div>
                        <label htmlFor="subject"
                               className="block mb-2 text-sm text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                               placeholder="Let us know how we can help you" required/>
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm text-gray-900 dark:text-gray-300">Your
                            message</label>
                        <textarea id="message"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit"
                            className="bg-neutral-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Send
                        message
                    </button>
                </form>

            </div>
        </footer>
    );
};

export default Contact;
