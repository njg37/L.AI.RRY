import React, { useEffect, useState } from 'react';

const BackgroundVideo = () => {
    const fullText = ' AI-Powered';
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    // Typing effect
    useEffect(() => {
        const typingSpeed = 150;
        const deletingSpeed = 75;
        const delayAfterFullText = 5000;

        let timeout;

        if (!isDeleting && index <= fullText.length) {
            timeout = setTimeout(() => {
                setTypedText(fullText.slice(0, index));
                setIndex(index + 1);
                if (index === fullText.length) {
                    setTimeout(() => setIsDeleting(true), delayAfterFullText);
                }
            }, typingSpeed);
        } else if (isDeleting && index >= 0) {
            timeout = setTimeout(() => {
                setTypedText(fullText.slice(0, index));
                setIndex(index - 1);
                if (index === 0) {
                    setIsDeleting(false);
                }
            }, deletingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [index, isDeleting, fullText]);

    return (
        <div className="relative w-full h-screen overflow-hidden shadow-xl">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source
                    src="../../public/video/HeroSection5video.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight
                    md:text-4xl sm:text-3xl xs:text-2xl max-w-4xl"
                >
                    L.<span className="text-green-500">AI</span>.RRY:{' '} is an intelligent,
                    <span className="text-green-500">
                        {typedText}
                        <span className="border-r-2 border-green-500 animate-pulse ml-1"></span>
                    </span>
                    <span className="text-white"> mock-test platform</span>
                </h1>

                <button className="mt-20 px-8 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-600 transition
                    sm:px-10 sm:py-4 sm:text-xl
                ">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default BackgroundVideo;
