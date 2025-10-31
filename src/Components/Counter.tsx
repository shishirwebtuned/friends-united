"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate, useInView } from "framer-motion";

interface CounterProps {
    from?: number;
    to: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}

const Counter: React.FC<CounterProps> = ({
    from = 0,
    to,
    duration = 2.5,
    prefix = "",
    suffix = "",
    className = "",
}) => {
    const ref = useRef<HTMLSpanElement | null>(null);
    const count = useMotionValue(from);
    const isInView = useInView(ref, { once: true, amount: 0.4 });
    const [value, setValue] = useState<number>(from);

    useEffect(() => {
        const unsubscribe = count.on("change", (latest) => {
            setValue(Math.floor(latest));
        });
        return () => unsubscribe();
    }, [count]);

    useEffect(() => {
        let controls: ReturnType<typeof animate> | undefined;
        if (isInView) {
            controls = animate(count, to, { duration, ease: "easeOut" });
        }
        return () => controls?.stop();
    }, [isInView, to, duration, count]);

    return (
        <motion.span
            ref={ref}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={className}
        >
            {prefix}
            {value.toLocaleString()}
            {suffix}
        </motion.span>
    );
};

export default Counter;
