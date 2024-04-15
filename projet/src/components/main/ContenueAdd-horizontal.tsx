import Image from "next/image";
import 'tailwindcss/tailwind.css';

const ContenueAddVerticale = () => {
    return (
        <section className="container max-w-6xl mx-auto space-y-8 pb-20">
            <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 my-5">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                    <a key={index} href="#"
                       className="group bg-gray-800 rounded text-gray-200 max-w-sm mx-auto hover:no-underline focus:no-underline">
                        <div className="p-6 space-y-4">
                            <Image
                                src="/path/to/your/image.jpg"
                                alt="Image description"
                                width={640}
                                height={360}
                                className="rounded bg-amber-50"
                            />
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In
                                usu laoreet repudiare legendos</h3>
                            <span className="text-xs">January 21, 2021</span>
                            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has
                                tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu
                                patrioque mea, ei vocent delicata indoctum pri.
                            </p>
                            <button
                                className="btn-primary bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                Voir Plus...
                            </button>
                        </div>
                    </a>
                ))}
            </section>
            <div className="flex justify-end">
                <button
                    className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 border border-gray-500 rounded shadow focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50">
                    Plus darticle...
                </button>
            </div>
        </section>
    );
};

export default ContenueAddVerticale;
