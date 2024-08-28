import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Logo } from "../components"; // Replace with your actual components
import photo from "./Photos/sujjan.jpg"
import photo2 from "./Photos/shruti.jpg"
function Home() {
    return (
        <div className="bg-gradient-to-b from-gray-800 to-black min-h-screen text-white flex flex-col items-center animate-fade-in">

            {/* Main content section */}
            <main className="py-20 flex-1 w-full">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-extrabold mb-8 animate-fade-in tracking-widest">
                            Welcome to Bolgger Drill
                        </h1>
                        <p className="text-xl mb-12 leading-relaxed animate-fade-in-up">
                            Share your story with the world. Create a beautiful, personalized blog that fits your brand. Grow your audience with built-in marketing tools, or transform your passion into revenue by gating access with a paywall.
                        </p>
                        <Link to="/signup">
                            <Button
                                bgColor="bg-green-500"
                                textColor="text-white"
                                className="transition duration-300 transform hover:scale-105 hover:bg-green-600 shadow-lg rounded-full px-8 py-3 animate-fade-in-up"
                            >
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </Container>
            </main>

            {/* Additional content or sections */}
            <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 w-full">
                <Container>
                    <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
                        <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
                        <p className="text-lg mb-10 leading-relaxed">
                            Discover why thousands of writers and readers love using our platform.
                        </p>
                        <div className="flex justify-center space-x-6">
                            <Link to="/features">
                                <Button
                                    bgColor="bg-blue-500"
                                    textColor="text-white"
                                    className="transition duration-300 transform hover:scale-105 hover:bg-blue-600 shadow-lg rounded-full px-8 py-3"
                                >
                                    Features
                                </Button>
                            </Link>
                            <Link to="/about">
                                <Button
                                    bgColor="bg-red-500"
                                    textColor="text-white"
                                    className="transition duration-300 transform hover:scale-105 hover:bg-red-600 shadow-lg rounded-full px-8 py-3"
                                >
                                    About
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Feedback Button */}
            <div className="py-10 flex justify-center w-full bg-gradient-to-b from-gray-900 to-gray-800">
                <Link to="/contact">
                    <Button
                        bgColor="bg-purple-600"
                        textColor="text-white"
                        className="transition duration-300 transform hover:scale-105 hover:bg-purple-700 shadow-lg rounded-full px-8 py-3"
                    >
                        Give Us Feedback
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
