"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function ProgressBar({ target = 80 }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (isInView) {
            const timeout = setTimeout(() => setProgress(target), 500);
            return () => clearTimeout(timeout);
        }
    }, [isInView, target]);

    return (
        <div
            ref={ref}
            className="bg-[#ffffff1a] rounded-full h-5 overflow-hidden relative mb-4"
        >
            <div
                className="progressbar-bg-gradient h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_4s_infinite]" />
        </div>
    );
}
