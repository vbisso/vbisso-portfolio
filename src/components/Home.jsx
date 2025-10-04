import { motion } from "framer-motion";
export default function Home() {
  return (
    <section
      id="home"
      className="bg-stone-900 px-4 section-container w-screen relative h-screen scroll-mt-14 flex flex-col justify-center items-center rounded-b-3xl text-stone-200"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-6xl font-bold"
      >
        Welcome to my Portfolio.
      </motion.h1>
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#e7e5e4"
            fillOpacity="1"
            d="M0,128L48,160C96,192,192,256,288,234.7C384,213,480,107,576,74.7C672,43,768,85,864,128C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192L1440,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}
