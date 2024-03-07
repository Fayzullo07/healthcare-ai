"use client"
import Image from "next/image";
import React, { useState } from "react";
import Container from "./providers/Container";
import { toast } from "react-toastify";

const Contact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [desc, setDesc] = useState("");

    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!name || !phone || !desc) {
            toast.warning("Fill it completely!");
            return
        }
        setLoading(true);
        setTimeout(() => {
            toast.success("Sent, we will contact you, thank you!");
            setName("");
            setPhone("");
            setDesc("");
            setLoading(false);
        }, 1000)


    };

    return (
        <div id="contact" className="py-6">
            <Container>
                <div className="text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">
                    <h2 className=" text-4xl font-semibold py-6 text-green-500">Contact</h2>
                </div>
                <div>
                    <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" className="max-w-screen-xl px-4 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-green-100 text-gray-900 rounded-3xl shadow-lg">
                        <div className="flex flex-col justify-between">
                            <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">
                                <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-green-500">Send us your contact information!</h2>
                            </div>
                            <div className="mt-8 text-start">
                                <Image
                                    src="/contact.png"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }} // optional
                                    alt="Image"
                                />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" className="text-green-500 mt-8">
                                {"Leave a message and we'll get back to you."}
                            </div>
                        </div>
                        <div className="">
                            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">
                                <span className="text-sm text-green-600 font-bold">{"What's your name?"}</span>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-green-200 focus:bg-green-300 text-green-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="" />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" className="mt-8">
                                <span className="text-sm text-green-600 font-bold">Your phone number</span>
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full bg-green-200 focus:bg-green-300 text-green-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="tel" />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" className="mt-8">
                                <span className="text-sm text-green-600 font-bold">You can write some comments you have</span>
                                <textarea
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    className="w-full h-32 bg-green-200 focus:bg-green-300 text-green-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" className="mt-8">
                                <button
                                    className="text-sm font-bold tracking-wide bg-green-500 hover:bg-green-600 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                                    onClick={handleSubmit}
                                >
                                    {loading ? "Loading. . . " : "Send"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contact;