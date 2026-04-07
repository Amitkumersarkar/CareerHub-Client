import { easeInOut, motion } from "motion/react";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96 overflow-hidden">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">

                {/* Image 1 */}
                <motion.img
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: [0, -20, 0], opacity: 1 }}
                    transition={{
                        duration: 4,
                        ease: "easeInOut",
                        repeat: Infinity
                    }}
                    src={team1}
                    className="max-w-sm w-64 rounded-t-[40px] rounded-br-[30px] border-l-4 border-b-4 border-green-500 shadow-2xl"
                />

                {/* Image 2 */}
                <motion.img
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: [0, 20, 0], opacity: 1 }}
                    transition={{
                        duration: 4,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 0.5
                    }}
                    src={team2}
                    className="max-w-sm w-64 rounded-t-[40px] rounded-br-[30px] border-l-4 border-b-4 border-green-500 shadow-2xl"
                />

                {/* Text Section */}
                <div className="flex-1">
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: easeInOut
                        }}
                        className="text-5xl font-bold"
                    >
                        Latest Jobs For You
                    </motion.h1>

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="py-6"
                    >
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
                    </motion.p>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary"
                    >
                        Get Started
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default Banner;