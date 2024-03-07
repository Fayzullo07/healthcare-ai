import Image from "next/image";
import Container from "./providers/Container";

const VoiceAI = () => {
    return (
        <div>

            <Container>

                <section className="py-0 md:px-0">
                    <div className=" items-center max-w-6xl px-8 mx-auto xl:px-5">
                        <div className="flex flex-wrap items-center sm:-mx-3">
                            <div className="w-full md:w-1/3 md:px-3" data-aos="fade-up" data-aos-delay="300">
                                <div className="w-full flex flex-col justify-between pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                    <h1 className=" font-extrabold tracking-tight text-gray-900">
                                        <span className="text-4xl sm:text-4xl text-green-400">AI Voice</span>
                                    </h1>
                                    <div>


                                        <p className=" text-base= text-black lg:text-2xl w-64">Sick people can record their voice and get advise form AI Chat</p>

                                    </div>
                                    <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                                        <a href="#!" className="transition duration-300 transform hover:scale-110 flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-green-400 rounded-3xl sm:mb-0 font-semibold tracking-wide hover:bg-green-400 hover:text-white sm:w-auto">
                                            AI Scanning
                                        </a>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3 flex  justify-center items-center">
                                <div className="overflow-hidden" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">

                                    <div>

                                        <Image
                                            src="/voice_ai.png"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="transition duration-300 transform hover:scale-110"
                                            style={{ width: '100%', height: 'auto' }} // optional
                                            alt="Image"
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>

        </div>
    )
}

export default VoiceAI;