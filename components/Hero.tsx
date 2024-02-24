import Image from "next/image";
import Container from "./providers/Container";

const Hero = () => {
    return (
        <div>
            <Container>
                <section className="py-20 md:px-0 background">
                    <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                        <div className="flex flex-wrap items-center sm:-mx-3">
                            <div className="w-full md:w-1/2 md:px-3" data-aos="fade-up" data-aos-delay="300">
                                <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                        <span className="block xl:inline">Get Medical </span><br />
                                        <span className="block text-indigo-600 xl:inline">Care early</span>
                                    </h1>
                                    <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Its never been easier to build beautiful websites that convey your message and tell your story.</p>
                                    <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                                        <a href="#contact" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
                                            AI SUPPORT
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </a>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2" data-aos="fade-down" data-aos-delay="600">
                                <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                    <Image
                                        src="https://thumbs.dreamstime.com/b/ai-medical-background-concept-155234616.jpg"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }} // optional
                                        alt="Image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>

        </div>
    )
}

export default Hero;