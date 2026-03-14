import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Rocket, BookOpen, Award, Code, Briefcase, ArrowUpRight } from 'lucide-react';

const timelineData = [
    {
        year: 'Apr 2020 - Mar 2021',
        title: 'Secondary School',
        company: 'Ch. Chhabil Dass Public School, Ghaziabad',
        description: 'Active in extracurriculars and leadership. Part of the Student Council serving as a Discipline Coordinator.',
        icon: <BookOpen className="text-blue-400 group-hover:text-cyan-400 transition-colors" size={24} />,
        type: 'Education'
    },
    {
        year: 'Apr 2021 - Mar 2023',
        title: 'Senior Secondary School',
        company: 'Ch. Chhabil Dass Public School, Ghaziabad',
        description: 'Active in extracurriculars and leadership. Part of the Student Council serving as a Discipline Coordinator.',
        icon: <BookOpen className="text-blue-400 group-hover:text-cyan-400 transition-colors" size={24} />,
        type: 'Education'
    },
    {
        year: 'Aug 2023 - Jul 2027',
        title: 'B.Tech, Computer Science Engineering',
        company: 'Lovely Professional University',
        description: 'Activities and societies: Public Relation Manager at Drive Dev Club. Honing skills like Leadership, JavaScript, and more.',
        icon: <Award className="text-yellow-400 group-hover:text-yellow-300 transition-colors" size={24} />,
        type: 'Education'
    },
    {
        year: 'Oct 2023 - Present',
        title: 'Public Relation Manager',
        company: 'Drive Dev',
        description: 'Managing communications, outreach, and fostering community engagement for the Drive Dev organization.',
        icon: <Briefcase className="text-purple-400 group-hover:text-purple-300 transition-colors" size={24} />,
        type: 'Experience'
    },
    {
        year: 'Jun 2025 - Jul 2025',
        title: 'AI & Prompt Engineering Intern',
        company: 'VaultofCodes',
        description: 'Focused on Artificial Intelligence (AI), deep learning concepts, and advanced Prompt Engineering education.',
        icon: <Code className="text-green-400 group-hover:text-green-300 transition-colors" size={24} />,
        type: 'Internship'
    }
];

const TimelineCard = ({ item, isEven }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="glass p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] group relative overflow-hidden backdrop-blur-md w-full max-w-lg"
        >

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
                    {item.icon}
                </div>

                <div>
                    <span className="text-sm font-bold text-cyan-400 tracking-wider uppercase block">
                        {item.year}
                    </span>
                    <span className="text-xs text-purple-300 font-medium uppercase tracking-widest">
                        {item.type}
                    </span>
                </div>
            </div>

            <h4 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors text-gray-100 relative z-10">
                {item.title}
            </h4>

            <h5 className="text-lg text-cyan-300/80 mb-3 font-medium relative z-10">
                {item.company}
            </h5>

            {/* Percentage */}
            {item.percentage && (
                <div className="inline-block mb-3 px-4 py-1 rounded-lg bg-green-500/10 border border-green-400/30 text-green-400 font-semibold text-sm">
                    Percentage: {item.percentage}
                </div>
            )}

            {/* CGPA */}
            {item.cgpa && (
                <div className="inline-block mb-3 px-4 py-1 rounded-lg bg-yellow-500/10 border border-yellow-400/30 text-yellow-400 font-semibold text-sm">
                    CGPA: {item.cgpa}
                </div>
            )}

            <p className="text-gray-400 leading-relaxed text-sm md:text-base group-hover:text-gray-300 transition-colors relative z-10">
                {item.description}
            </p>

        </motion.div>
    );
};

const Education = () => {

    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        bounce: 0
    });

    const yPosStr = useTransform(lineProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="py-24 relative overflow-hidden flex flex-col items-center">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl font-extrabold tracking-tight mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Timeline & Journey
                        </span>
                    </h2>

                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        Tracing the path from foundational learning to cutting-edge development.
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto" ref={containerRef}>

                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 bg-white/5 rounded-full" />

                    <motion.div
                        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10"
                        style={{ scaleY: lineProgress }}
                    />

                    <motion.div
                        className="absolute left-4 md:left-1/2 md:-translate-x-[50%] -translate-x-[50%] z-30 flex flex-col items-center pointer-events-none"
                        style={{ top: yPosStr }}
                    >
                        <div className="relative flex flex-col items-center justify-center translate-y-[-50%]">

                            <motion.div
                                animate={{ height: [20, 35, 20], opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-6 w-4 bg-gradient-to-t from-orange-500 via-yellow-300 to-transparent rounded-full blur-[2px]"
                            />

                            <div className="w-12 h-12 bg-[#020617] rounded-full border border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.6)] flex items-center justify-center z-10 backdrop-blur-md">
                                <Rocket size={24} className="rotate-180 text-cyan-400" />
                            </div>

                        </div>
                    </motion.div>

                    <div className="relative z-20 w-full pt-12 pb-24">

                        {timelineData.map((item, index) => {

                            const isEven = index % 2 === 0;

                            return (
                                <div key={index} className="relative flex flex-col md:flex-row items-center w-full mb-16 md:mb-32">

                                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#020617] border-2 border-cyan-500/80 shadow-[0_0_10px_rgba(34,211,238,0.5)] z-20" />

                                    <div className={`hidden md:flex w-full md:w-1/2 justify-end pr-16 ${isEven ? '' : 'invisible'}`}>
                                        {isEven && <TimelineCard item={item} isEven={isEven} />}
                                    </div>

                                    <div className={`hidden md:flex w-full md:w-1/2 justify-start pl-16 ${!isEven ? '' : 'invisible'}`}>
                                        {!isEven && <TimelineCard item={item} isEven={isEven} />}
                                    </div>

                                    <div className="flex md:hidden w-full pl-12 sm:pl-16">
                                        <TimelineCard item={item} isEven={false} />
                                    </div>

                                </div>
                            );

                        })}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Education;
