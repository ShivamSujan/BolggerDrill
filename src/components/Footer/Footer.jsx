import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
    return (
        <footer className="bg-gray-800 border-t-2 border-t-black">
            <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
                <div className="flex flex-wrap justify-between items-center space-y-6 md:space-y-0">
                    <div className="flex items-center space-x-4">
                        <Logo width="100px" />
                        <p className="text-base text-gray-100">
                            Designed and Developed by Shivam Sujan<br />&copy; Copyright 2023-24 | All Rights Reserved
                        </p>
                    </div>

                </div>

                <hr className="border-gray-700" />

                <div className="flex flex-wrap justify-between items-start gap-8">
                    <div>
                        <h3 className="mb-2 text-xs font-semibold uppercase text-gray-500">Company</h3>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li>
                                <Link className="text-base font-medium text-gray-300 hover:text-gray-100" to="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium text-gray-300 hover:text-gray-100" to="/features">
                                    Features
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-2 text-xs font-semibold uppercase text-gray-500">Support</h3>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li>
                                <Link className="text-base font-medium text-gray-300 hover:text-gray-100" to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium text-gray-300 hover:text-gray-100" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full text-center">
                    <form className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                        <input
                            type="email"
                            className="w-full md:w-auto px-4 py-2 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Subscribe to our newsletter"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
