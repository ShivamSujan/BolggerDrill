import React from "react";
import { Container, Button } from "./index";
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <main className="py-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-8">About</h1>
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-blue-400">About the Blog Application</h2>
                            <p className="text-lg mb-4 text-justify">
                                Our blog application is designed to empower users to share their thoughts, experiences, and expertise through well-crafted blog posts. It provides a user-friendly interface for managing content, ensuring seamless interaction and engagement with readers.
                            </p>
                            <p className="text-lg mb-4 text-justify">
                                Whether you're a seasoned writer, a hobbyist blogger, or someone looking to start sharing your ideas online, our application offers the tools you need to create, edit, and share compelling content.
                            </p>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-blue-400">About Me</h2>
                            <p className="text-lg mb-4 text-justify">
                                My name is Shivam Sujan, and I'm currently pursuing Computer Science at Delhi Technological University (formerly Delhi College of Engineering). As a pre-final year student, I have a passion for technology and web development.
                            </p>
                            <p className="text-lg mb-4 text-justify">
                                This blog application is a culmination of my interest in creating meaningful and impactful software solutions. I believe in the power of blogging to share knowledge, connect with others, and contribute to the online community.
                            </p>
                        </div>

                        <div className="mt-6 flex justify-center">


                        </div>
                        <br />
                        <Link to='/'>
                            <Button
                                bgColor="bg-gray-600"
                                textColor="text-white"
                                className="transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700"
                            >
                                Go Back to Home
                            </Button>
                        </Link>

                    </div>
                </Container>
            </main>
        </div>
    );
};

export default AboutPage;
