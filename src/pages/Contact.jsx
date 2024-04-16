import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white p-8">Contact Page</h1>
            <form className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" action="https://formspree.io/f/xpzvolkv" method="POST">
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="email">
                        Votre Email:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" name="_replyto" required />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="message">
                        Votre Message:
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" required />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Envoyer
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;