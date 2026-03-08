import { motion } from 'framer-motion';

const keywords = [
    'Data Science', 'Data Analytics', 'MERN Stack',
    'Python & SQL', 'Cloud & DevOps', 'AI/ML',
    'ETL Pipelines', 'Problem Solving'
];

const About = () => {
    return (
        <section className="py-32 relative z-10 w-full bg-[#050505] overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row gap-16 items-start justify-between">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-xl sm:text-2xl font-black tracking-widest uppercase text-blue-500 mb-8 flex items-center gap-4">
                            <span className="w-16 h-1 bg-blue-500 rounded-full"></span>
                            About Me
                        </h2>



                        <div className="space-y-4 text-gray-400 leading-relaxed font-light text-base sm:text-lg mb-8">
                            <p>
                                I am a Pre-Final Year B.Tech Computer Science student at Lovely Professional University with a strong interest in Data Science and data-driven systems. I enjoy working with data to build efficient pipelines, extract insights, and support scalable applications.
                            </p>
                            <p>
                                My academic training includes Data Science as a minor, along with hands-on experience in Python, SQL, and Informatica (ETL). Through academic and self-driven projects, I have worked on data transformation, pipeline development, and analytical problem-solving in practical scenarios. I also have foundational exposure to Machine Learning and AI concepts, which complements my data engineering and analytical work.
                            </p>
                            <p>
                                Alongside my data-focused work, I have also developed full-stack applications using the MERN stack. This exposure has strengthened my understanding of backend development, system design, and how modern data and software systems integrate in real-world environments.
                            </p>
                            <p>
                                I also have working knowledge of Data Structures & Algorithms, cloud platforms, and DevOps fundamentals. Additionally, I use visualization tools such as Excel, Power BI, and Tableau to convert complex datasets into meaningful insights for decision-making.
                            </p>
                            <p className="text-gray-200 font-medium border-l-2 border-blue-500 pl-4 mt-6">
                                I am currently seeking internship and entry-level opportunities in Data Science, Analytics, or Software Development roles where I can apply my skills, contribute effectively, and continue growing as a technology professional.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="md:w-1/3 w-full"
                    >
                        <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden transition-all duration-700 pointer-events-none relative">
                            <img
                                src="/profile.jpg"
                                alt="Studio Profile"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 border border-white/10 rounded-2xl"></div>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Infinite Marquee Strip */}
            <div className="mt-32 w-full py-8 border-y border-white/10 bg-white/[0.02] flex overflow-hidden whitespace-nowrap relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                    className="flex gap-16 items-center px-8"
                >
                    {[...keywords, ...keywords, ...keywords].map((keyword, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span className="text-3xl md:text-5xl font-black text-transparent bg-clip-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                                {keyword}
                            </span>
                            <span className="w-3 h-3 rounded-full bg-blue-500/50"></span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
