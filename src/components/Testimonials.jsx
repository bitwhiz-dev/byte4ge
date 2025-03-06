import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialsSlider() {
    const [testimonials, setTestimonials] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://byte4ge.com/admin/SiteAPI/v1/testimonials")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (!data?.testimonials || !Array.isArray(data.testimonials)) {
                    throw new Error('Invalid data format received from API');
                }
                setTestimonials(data.testimonials);
                setError(null);
            })
            .catch((error) => {
                console.error("Error fetching testimonials:", error);
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const CustomPrevArrow = (props) => (
        <button
            {...props}
            className="slick-prev absolute left-[-80px] top-1/2 transform -translate-y-1/2 inline-flex items-center justify-center whitespace-nowrap rounded-full border border-orange-500/50 px-6 py-4 text-sm font-medium shadow-sm transition-colors hover:text-orange-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50 text-white"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
            >
                <path d="m15 18-6-6 6-6" />
            </svg>
        </button>
    );

    const CustomNextArrow = (props) => (
        <button
            {...props}
            className="slick-next absolute right-[-80px] top-1/2 transform -translate-y-1/2 inline-flex items-center justify-center whitespace-nowrap rounded-full border border-orange-500/50 px-6 py-4 text-sm font-medium shadow-sm transition-colors hover:text-orange-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50 text-white"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
            >
                <path d="m9 18 6-6-6-6" />
            </svg>
        </button>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 8000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        cssEase: "linear",
        pauseOnHover: false,
        swipe: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    autoplay: true,
                    autoplaySpeed: 0,
                    speed: 8000,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 0,
                    speed: 8000,
                },
            },
        ],
        centerMode: true,
        centerPadding: '20px',
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-6xl relative">
                <div className="text-center mb-8">
                    <p className="text-green-500 text-xl font-semibold">Here's</p>
                    <h2 className="text-4xl font-bold text-white">What Our Clients Say</h2>
                    <p className="text-gray-300 text-lg">Trusted by businesses </p>
                </div>

                {isLoading ? (
                    <div className="text-center text-white">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mx-auto mb-4"></div>
                        <p>Loading testimonials...</p>
                    </div>
                ) : error ? (
                    <div className="text-center text-orange-500 p-8 border border-orange-500 rounded-lg">
                        <p className="text-xl mb-2">Oops! Something went wrong</p>
                        <p className="text-sm">{error}</p>
                    </div>
                ) : testimonials.length === 0 ? (
                    <div className="text-center text-white p-8 border border-gray-500 rounded-lg">
                        <p>No testimonials available at the moment.</p>
                    </div>
                ) : (
                    <div className="px-2.5">
                        <style>
                            {`
                            .slick-prev:before,
                            .slick-next:before {
                                display: none !important;
                            }
                            .custom-scrollbar::-webkit-scrollbar {
                                width: 6px;
                            }
                            .custom-scrollbar::-webkit-scrollbar-track {
                                background: rgba(75, 85, 99, 0.1);
                                border-radius: 3px;
                            }
                            .custom-scrollbar::-webkit-scrollbar-thumb {
                                background: rgba(249, 115, 22, 0.5);
                            }
                            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                                background: rgba(249, 115, 22, 0.7);
                            }
                            .slick-track {
                                transition: transform 8000ms linear !important;
                            }
                            `}
                        </style>
                        <Slider {...settings}>
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="px-2.5">
                                    <div className="bg-[#00040f] p-4 sm:p-6 rounded-lg text-white flex flex-col h-[400px] border border-gray-900 hover:border-gray-600 transition-colors">
                                        <div className="flex flex-col items-center">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover mb-3 sm:mb-4"
                                            />
                                            <h3 className="text-2xl font-bold text-green-500 mb-3">{testimonial.name}</h3>
                                        </div>

                                        <div className="flex-1 overflow-y-auto custom-scrollbar mb-4">
                                            <div className="w-full max-w-[90%] mx-auto">
                                                <p className="text-center text-gray-300 text-base leading-relaxed">
                                                    {testimonial.message}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="w-full pt-4 border-t border-gray-900">
                                            <div className="flex items-center justify-center gap-2">
                                                <span className="text-gray-500 text-sm font-medium">Rating:</span>
                                                <div className="flex">
                                                    {[...Array(parseInt(testimonial.rating))].map((_, i) => (
                                                        <svg
                                                            key={i}
                                                            className="w-5 h-5 text-green-500 fill-current"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                )}
            </div>
        </div>
    );
}