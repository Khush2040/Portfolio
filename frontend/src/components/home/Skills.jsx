import { motion } from 'framer-motion';
import { Code, Box, Lightbulb, Settings } from 'lucide-react';

const skillCategories = [
    {
        title: "Programming Languages",
        icon: <Code className="text-blue-400 mb-4" size={32} />,
        color: "from-blue-500/20 to-blue-500/5",
        borderColor: "group-hover:border-blue-500/50",
        shadowColor: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
        badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
        highlightColor: "bg-blue-500/30 text-white border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]",
        skills: [
            { name: "Python", highlighted: true },
            { name: "Java", highlighted: true },
            { name: "C++", highlighted: true },
            { name: "JavaScript", highlighted: true },
            { name: "C", highlighted: false }
        ]
    },
    {
        title: "Libraries & Frameworks",
        icon: <Box className="text-purple-400 mb-4" size={32} />,
        color: "from-purple-500/20 to-purple-500/5",
        borderColor: "group-hover:border-purple-500/50",
        shadowColor: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
        badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
        highlightColor: "bg-purple-500/30 text-white border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)]",
        skills: [
            { name: "React.js", highlighted: true },
            { name: "Node.js", highlighted: true },
            { name: "Express.js", highlighted: false },
            { name: "HTML5", highlighted: false },
            { name: "CSS3", highlighted: false },
            { name: "FastAPI", highlighted: false },
            { name: "NumPy", highlighted: true },
            { name: "Pandas", highlighted: true },
            { name: "Scikit-learn", highlighted: true },
            { name: "Matplotlib", highlighted: false },
            { name: "Seaborn", highlighted: false }
        ]
    },
    {
        title: "Tools & Platforms",
        icon: <Settings className="text-pink-400 mb-4" size={32} />,
        color: "from-pink-500/20 to-pink-500/5",
        borderColor: "group-hover:border-pink-500/50",
        shadowColor: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]",
        badgeColor: "bg-pink-500/10 text-pink-300 border-pink-500/20",
        highlightColor: "bg-pink-500/30 text-white border-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.5)]",
        skills: [
            { name: "Git", highlighted: true },
            { name: "GitHub", highlighted: false },
            { name: "MySQL", highlighted: true },
            { name: "SQL Server", highlighted: false },
            { name: "MongoDB", highlighted: true },
            { name: "Power BI", highlighted: true },
            { name: "Jupyter Notebook", highlighted: false },
            { name: "Excel (Advanced)", highlighted: false },
            { name: "Linux", highlighted: false },
            { name: "Windows", highlighted: false },
            { name: "Apache Netbeans", highlighted: false },
            { name: "Apache ANT", highlighted: false },
            { name: "Swing GUI", highlighted: false }
        ]
    },
    {
        title: "Core & Soft Skills",
        icon: <Lightbulb className="text-emerald-400 mb-4" size={32} />,
        color: "from-emerald-500/20 to-emerald-500/5",
        borderColor: "group-hover:border-emerald-500/50",
        shadowColor: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",
        badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
        highlightColor: "bg-emerald-500/30 text-white border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]",
        skills: [
            { name: "End-to-End Data Analysis", highlighted: true },
            { name: "Predictive Analytics", highlighted: true },
            { name: "Learning Agility", highlighted: true },
            { name: "Analytical Observation", highlighted: false },
            { name: "Adaptive Mindset", highlighted: false },
            { name: "Perseverance", highlighted: false },
            { name: "Dataset Validation", highlighted: false },
            { name: "Insight Communication", highlighted: false },
            { name: "Data Visualization", highlighted: false }
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
};

const Skills = () => {
    return (
        <section className="py-24 relative overflow-hidden flex flex-col items-center justify-center bg-[#050505]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center z-10 relative">
                <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-3 block">My Arsenal</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
                    Skills & Categories
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                    A comprehensive overview of my technical expertise and core skills, logically organized to highlight my capabilities.
                </p>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`group relative p-8 rounded-3xl overflow-hidden glass border border-white/5 transition-all duration-500 hover:-translate-y-2 bg-gradient-to-b from-white/[0.03] to-transparent ${category.borderColor} ${category.shadowColor}`}
                        >
                            {/* Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl z-0`}></div>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
                                        {category.title}
                                    </h3>
                                </div>
                                
                                <div className="mt-auto flex overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-2">
                                    <motion.div 
                                        className="flex flex-nowrap gap-3 pr-3 w-max"
                                        animate={{ x: ["0%", "-50%"] }}
                                        transition={{ 
                                            duration: 25 + index * 5, 
                                            repeat: Infinity, 
                                            ease: "linear" 
                                        }}
                                    >
                                        {[...category.skills, ...category.skills, ...category.skills, ...category.skills].map((skill, skillIndex) => (
                                            <span 
                                                key={skillIndex} 
                                                className={`px-4 py-2 text-sm font-medium rounded-xl border whitespace-nowrap transition-colors duration-300 cursor-default ${skill.highlighted ? category.highlightColor : category.badgeColor} hover:bg-white/10 hover:text-white hover:border-white/20 hover:shadow-lg`}
                                            >
                                                {skill.name}
                                            </span>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Ambient Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[400px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
        </section>
    );
};

export default Skills;
