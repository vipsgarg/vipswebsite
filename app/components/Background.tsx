"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Star {
    id: number;
    startX: number;
    startY: number;
    duration: number;
    delay: number;
}

export default function Background() {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        const generateStars = () => {
            const newStars: Star[] = [];
            for (let i = 0; i < 12; i++) {
                newStars.push({
                    id: i,
                    startX: Math.random() * 100,
                    startY: Math.random() * 70,
                    duration: 1.2 + Math.random() * 1.5,
                    delay: Math.random() * 10,
                });
            }
            setStars(newStars);
        };

        generateStars();
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-black">
            {/* Enhanced gradient orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.04, 0.08, 0.04],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -top-1/2 -left-1/4 w-[120%] h-[120%] bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-transparent rounded-full blur-3xl"
            />

            <motion.div
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.03, 0.06, 0.03],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3,
                }}
                className="absolute -bottom-1/2 -right-1/4 w-[120%] h-[120%] bg-gradient-to-tl from-yellow-900/15 via-orange-900/10 to-transparent rounded-full blur-3xl"
            />

            {/* Subtle grid with fade */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                    maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
                }}
            />

            {/* Shooting stars - refined and subtle */}
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    initial={{
                        x: `${star.startX}vw`,
                        y: `${star.startY}vh`,
                        opacity: 0,
                    }}
                    animate={{
                        x: [`${star.startX}vw`, `${star.startX + 20}vw`],
                        y: [`${star.startY}vh`, `${star.startY + 20}vh`],
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: star.duration,
                        delay: star.delay,
                        repeat: Infinity,
                        repeatDelay: 6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute pointer-events-none"
                >
                    <div className="relative flex items-center gap-1">
                        {/* Short trail */}
                        <div className="w-3 h-[1px] bg-gradient-to-r from-white/30 to-transparent" />
                        {/* Star dot */}
                        <div className="w-1 h-1 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    </div>
                </motion.div>
            ))}

            {/* Yellow accent stars - more subtle */}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={`yellow-${i}`}
                    initial={{
                        x: `${15 + i * 25}vw`,
                        y: `${5 + i * 18}vh`,
                        opacity: 0,
                    }}
                    animate={{
                        x: [`${15 + i * 25}vw`, `${35 + i * 25}vw`],
                        y: [`${5 + i * 18}vh`, `${25 + i * 18}vh`],
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: 2.5,
                        delay: 2 + i * 2,
                        repeat: Infinity,
                        repeatDelay: 8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute pointer-events-none"
                >
                    <div className="relative flex items-center gap-1">
                        {/* Short trail */}
                        <div className="w-4 h-[1px] bg-gradient-to-r from-yellow-400/40 to-transparent" />
                        {/* Star dot */}
                        <div className="w-1 h-1 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.7)]" />
                    </div>
                </motion.div>
            ))}

            {/* Ambient floating particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    initial={{
                        x: `${Math.random() * 100}vw`,
                        y: `${Math.random() * 100}vh`,
                        opacity: 0,
                    }}
                    animate={{
                        y: [`${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
                        opacity: [0, 0.3, 0],
                    }}
                    transition={{
                        duration: 8 + Math.random() * 4,
                        delay: Math.random() * 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute w-0.5 h-0.5 rounded-full bg-white/20"
                />
            ))}
        </div>
    );
}
