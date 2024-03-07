import Image from "next/image";
import Container from "./providers/Container";

const AboutUs = () => {
    return (
        <section id="" className="bg-white">
            <Container> 
                <div className="max-w-6xl grid gap-8 grid-cols-1 md:grid-cols-2 py-16 mx-auto">
                    <div className=" flex justify-center text-xl text-green-500">
                        <div className="w-80 " data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">
                            <Image
                                src="/about.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }} // optional
                                alt="Image"
                            />
                        </div>

                    </div>

                    <div className="px-4 md:p-0 flex items-center justify-center text-xl text-green-500">
                        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">
                            <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-green-400">Why choose us</h1>
                            <div className=" text-gray-500 my-5">Our platform is designed to help
                                sick people using voice, images and text to take
                                their words into account and show them a better
                                problem.
                            </div>
                            <div className=" text-gray-500 my-5">
                                Our team of doctors and specialists strives to find
                                better solutions to diseases by combining technical
                                innovation and human connection.
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col justify-between" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">


                        </div>
                    </div>


                </div>
            </Container>

        </section>
    )
}

export default AboutUs;