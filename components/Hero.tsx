import Image from "next/image";
import Container from "./providers/Container";
import { ArrowUpRightIcon } from "lucide-react";

const Hero = () => {
    const dataHero = [
        {
            img: "/image.png",
            text: "Image Ai Assistant"
        },
        {
            img: "/text.png",
            text: "Text Ai Assistant"
        },
        {
            img: "/voice.png",
            text: "Speech Consulting"
        },

    ]
    return (
        <div >
            <Container>
                <section className="py-10 sm:py-24 md:px-0 bg-white">
                    <div className=" items-center max-w-6xl px-8 mx-auto xl:px-5">
                        <div className="flex flex-wrap items-center sm:-mx-3">
                            <div className="w-full md:w-2/5 md:px-3" data-aos="fade-up" data-aos-delay="300">
                                <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                    <h1 className=" font-extrabold tracking-tight text-gray-900">
                                        <span className="text-3xl sm:text-4xl">Your Trusted Medical </span><br />
                                        <span className="text-4xl sm:text-5xl text-green-400">AI Companion</span>
                                    </h1>
                                    <p className="mx-auto text-base text-black sm:max-w-md lg:text-xl md:max-w-3xl">24/7 Access to AI Expertise</p>
                                    <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                                        <a href="#!" className="transition duration-300 transform hover:scale-110 flex items-center w-full px-6 py-3 mb-3 text-lg text-black bg-green-300 rounded-3xl sm:mb-0 font-semibold tracking-wide hover:bg-green-400 hover:text-white sm:w-auto">
                                            Consulting Now
                                        </a>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4  justify-between items-center">
                                {dataHero.map((item, i) => (
                                    <div key={i} className="overflow-hidden relative   rounded-3xl" data-aos="fade-up" data-aos-delay={`${(i + 1) * 200}`} data-aos-duration="800">
                                        <div className="z-10 cursor-pointer hover:scale-110 duration-500 absolute top-0 right-0 text-center px-3 py-1 bg-green-300  rounded-bl-3xl rounded-tr-3xl">
                                            <ArrowUpRightIcon />
                                        </div>
                                        <div>

                                            <Image
                                                src={item.img}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                className="transition duration-300 transform hover:scale-110"
                                                style={{ width: '100%', height: 'auto' }} // optional
                                                alt="Image"
                                            />
                                        </div>
                                        <div className=" text-base cursor-pointer hover:scale-110 duration-500 absolute bottom-0 text-center py-3 bg-green-300 w-full rounded-2xl sm:rounded-bl-3xl sm:rounded-tr-3xl">
                                            {item.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </Container>

        </div>
    )
}

export default Hero;