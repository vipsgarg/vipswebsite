"use client";

import { motion, Variants } from "framer-motion";
import Background from "./components/Background";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-black overflow-hidden">
      <Background />

      {/* Modern border frame around content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[95vw] max-w-7xl h-[85vh]">
          {/* Top left corner */}
          <motion.svg
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-0"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
          >
            <motion.path
              d="M 0 80 L 0 20 L 0 0 L 20 0 L 60 0"
              stroke="rgba(250, 204, 21, 0.4)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
            />
          </motion.svg>

          {/* Top right corner */}
          <motion.svg
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 right-0"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
          >
            <motion.path
              d="M 80 80 L 80 20 L 80 0 L 60 0 L 20 0"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
            />
          </motion.svg>

          {/* Bottom left corner */}
          <motion.svg
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-0"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
          >
            <motion.path
              d="M 0 0 L 0 60 L 0 80 L 20 80 L 60 80"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
            />
          </motion.svg>

          {/* Bottom right corner */}
          <motion.svg
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 right-0"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
          >
            <motion.path
              d="M 80 0 L 80 60 L 80 80 L 60 80 L 20 80"
              stroke="rgba(250, 204, 21, 0.4)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
            />
          </motion.svg>

          {/* Side accent lines */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-24 bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent"
          />

          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"
          />

          {/* Corner dots */}
          {[
            { top: 0, left: 0, color: 'yellow' },
            { top: 0, right: 0, color: 'white' },
            { bottom: 0, left: 0, color: 'white' },
            { bottom: 0, right: 0, color: 'yellow' },
          ].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.5 + i * 0.1 }}
              className={`absolute w-2 h-2 rounded-full ${pos.color === 'yellow'
                ? 'bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.6)]'
                : 'bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.4)]'
                }`}
              style={pos}
            />
          ))}
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center px-6 -mt-24">
        {/* Top decorative element */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex flex-col items-center gap-4"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[2px] w-72 md:w-96 overflow-hidden rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{
                duration: 3,
                delay: 2,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
              className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent blur-sm"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.3 }}
            className="flex items-center gap-2"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.6)]"
            />
            <span className="text-[10px] font-light tracking-[0.3em] text-white/40 uppercase">
              Launching Soon
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.6)]"
            />
          </motion.div>
        </motion.div>

        {/* Main heading with enhanced animation */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(20px)", scale: 0.9 }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[-0.03em] text-white select-none mb-3 relative"
        >
          <span className="relative inline-block">
            COMING
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"
            />
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(20px)", scale: 0.9 }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[-0.03em] text-white select-none mb-12 relative"
        >
          <span className="relative inline-block">
            SOON
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 2.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"
            />
          </span>
        </motion.h2>

        {/* Tagline with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="flex items-center gap-6"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-[1px] w-16 bg-gradient-to-r from-transparent to-yellow-400/60"
          />
          <p className="text-sm md:text-base font-light tracking-[0.3em] text-white/60 uppercase">
            We will be back soon
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-[1px] w-16 bg-gradient-to-l from-transparent to-yellow-400/60"
          />
        </motion.div>
      </div>


      {/* Elegant scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-yellow-400/40 to-transparent" />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 rounded-full bg-yellow-400/70 shadow-[0_0_10px_rgba(250,204,21,0.5)]"
          />
        </motion.div>
      </motion.div>

      {/* Floating accent elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {/* Orbiting elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute top-0 left-1/2 w-1.5 h-1.5 rounded-full bg-yellow-400/40 shadow-[0_0_10px_rgba(250,204,21,0.4)]" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute bottom-0 right-1/2 w-1 h-1 rounded-full bg-white/30" />
        </motion.div>
      </motion.div>
    </main>
  );
}
