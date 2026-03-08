import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Award, Search, ChevronRight, GraduationCap, Link2 } from 'lucide-react';
import { cn } from '../components/common/Navbar';

// Standardized list without extraneous icons to keep it ultra-clean
const ALL_CERTS = [
    // AI & Cloud
    { id: 1, title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional", category: "AI & Cloud", issuer: "Oracle" },
    { id: 2, title: "Machine Learning Internship", category: "AI & Cloud", issuer: "Acmegrade" },
    { id: 3, title: "AI and Prompt Engineering Intern", category: "AI & Cloud", issuer: "VaultofCodes" },
    { id: 4, title: "Data Analytics Intensive Program", category: "AI & Cloud", issuer: "Jobaaj Learnings" },
    { id: 5, title: "Quantium Job Simulation", category: "AI & Cloud", issuer: "Forage", desc: "Deloitte, Tata, British Airways" },

    // Core Programming
    { id: 6, title: "Logic Building, Programming & Data Structures", category: "Core Programming", issuer: "Learn How to Think" },
    { id: 7, title: "Learn C programming", category: "Core Programming", issuer: "CodeChef" },
    { id: 8, title: "Learn C++", category: "Core Programming", issuer: "CodeChef" },
    { id: 9, title: "Learn Java", category: "Core Programming", issuer: "CodeChef" },
    { id: 10, title: "Learn NumPy", category: "Core Programming", issuer: "CodeChef" },
    { id: 11, title: "Python (Basic)", category: "Core Programming", issuer: "HackerRank" },
    { id: 12, title: "Java Maestro", category: "Core Programming", issuer: "Institution", desc: "Developing GUI Applications" },
    { id: 13, title: "Java Programming", category: "Core Programming", issuer: "iamneo" },
    { id: 14, title: "GFG 160 Days", category: "Core Programming", issuer: "GeeksforGeeks", desc: "22-week course completion" },
    { id: 15, title: "DSA", category: "Core Programming", issuer: "iamneo" },
    { id: 16, title: "Object Oriented Programming", category: "Core Programming", issuer: "iamneo" },
    { id: 17, title: "Computer Programming", category: "Core Programming", issuer: "iamneo" },
    { id: 18, title: "Discrete Mathematics", category: "Core Programming", issuer: "NPTEL" },

    // Web & Software
    { id: 19, title: "Web Development Intern", category: "Web & Software", issuer: "Prodigy InfoTech" },
    { id: 20, title: "Responsive Web Design", category: "Web & Software", issuer: "freeCodeCamp" },
    { id: 21, title: "Software Engineering 101", category: "Web & Software", issuer: "Udemy", desc: "Plan & Execute Better Software" },
    { id: 22, title: "Flipkart GRID 6.0", category: "Web & Software", issuer: "Flipkart", desc: "Software Development Track" },

    // Core Tech & Security
    { id: 23, title: "Digital Systems", category: "Core Tech & Security", issuer: "Coursera", desc: "From Logic Gates to Processors" },
    { id: 24, title: "Hardware and Operating Systems", category: "Core Tech & Security", issuer: "Coursera" },
    { id: 25, title: "Computer Communications", category: "Core Tech & Security", issuer: "Coursera" },
    { id: 26, title: "Ethical Hacking", category: "Core Tech & Security", issuer: "Rising Tech Pro" },

    // Events & Hackathons
    { id: 27, title: "Code-A-Haunt", category: "Events & Hackathons", issuer: "Hackathon", desc: "24-hour programming marathon" },
    { id: 28, title: "Pragati: Path to Future Cohort 5", category: "Events & Hackathons", issuer: "Cohort" },
    { id: 29, title: "GSSOC'25 Contributor", category: "Events & Hackathons", issuer: "Open Source" },
    { id: 30, title: "VibeCode India 2025", category: "Events & Hackathons", issuer: "Event" },
    { id: 31, title: "RCSCTF24", category: "Events & Hackathons", issuer: "CTF", desc: "Capture The Flag Event" },
    { id: 32, title: "Achal Welfare Foundation", category: "Events & Hackathons", issuer: "Foundation", desc: "Volunteer Certificate" },
    { id: 33, title: "Green Olympiad for Youth", category: "Events & Hackathons", issuer: "GO4Youth" },
    { id: 34, title: "Women in Technology Conference", category: "Events & Hackathons", issuer: "Cadence", desc: "Attendee" },
    { id: 35, title: "Youth Speak Forum", category: "Events & Hackathons", issuer: "AIESEC" },
    { id: 36, title: "Color Palette ADVITIYA'24", category: "Events & Hackathons", issuer: "IIT Ropar" },

    // Soft Skills & Design
    { id: 37, title: "English Proficiency Course", category: "Soft Skills & Design", issuer: "Bluehawks", desc: "One year course" },
    { id: 38, title: "Voice and Accent", category: "Soft Skills & Design", issuer: "Skill Development" },
    { id: 39, title: "NLLP Fundamentals", category: "Soft Skills & Design", issuer: "Infosys SpringBoard" },
    { id: 40, title: "Design Thinking", category: "Soft Skills & Design", issuer: "Infosys SpringBoard" },
    { id: 41, title: "Introduction to Digital Marketing", category: "Soft Skills & Design", issuer: "Infosys SpringBoard" },
    { id: 42, title: "IELTS Pro: Reading | Writing", category: "Soft Skills & Design", issuer: "Udemy" },
    { id: 43, title: "Social Networks (Elite)", category: "Soft Skills & Design", issuer: "NPTEL" }
];

const CATEGORIES = ["AI & Cloud", "Core Programming", "Web & Software", "Core Tech & Security", "Events & Hackathons", "Soft Skills & Design"];

const Certifications = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [searchQuery, setSearchQuery] = useState("");

    // Group certificates by category, applying search filter
    const groupedCerts = useMemo(() => {
        const filtered = ALL_CERTS.filter(cert => {
            const query = searchQuery.toLowerCase();
            return cert.title.toLowerCase().includes(query) ||
                cert.issuer.toLowerCase().includes(query) ||
                cert.category.toLowerCase().includes(query);
        });

        const groups = {};
        CATEGORIES.forEach(cat => {
            groups[cat] = filtered.filter(c => c.category === cat);
        });

        // Remove empty categories if searching
        if (searchQuery) {
            Object.keys(groups).forEach(key => {
                if (groups[key].length === 0) delete groups[key];
            });
        }

        return groups;
    }, [searchQuery]);

    const totalResults = useMemo(() => {
        return Object.values(groupedCerts).reduce((sum, current) => sum + current.length, 0);
    }, [groupedCerts]);

    return (
        <div className={cn(
            "min-h-screen pt-32 pb-24 px-4 sm:px-8 md:px-16 transition-colors duration-300",
            isDark ? "bg-[#0a0a0a]" : "bg-[#fcfcfc]"
        )}>
            <div className="max-w-4xl mx-auto">

                {/* Minimal Header */}
                <div className="mb-12">
                    <h1 className={cn(
                        "text-3xl md:text-4xl font-semibold tracking-tight mb-3 flex items-center gap-3",
                        isDark ? "text-gray-100" : "text-gray-900"
                    )}>
                        <GraduationCap className="opacity-50" size={32} />
                        Certifications
                    </h1>
                    <p className={cn(
                        "text-base mt-2",
                        isDark ? "text-gray-400" : "text-gray-500"
                    )}>
                        A consolidated record of {ALL_CERTS.length} professional achievements, courses, and event participations.
                    </p>
                </div>

                {/* Refined Search Bar */}
                <div className="relative mb-16 max-w-xl">
                    <Search className={cn("absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4", isDark ? "text-gray-500" : "text-gray-400")} />
                    <input
                        type="text"
                        placeholder="Search by title, issuer, or category..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={cn(
                            "w-full pl-11 pr-4 py-3 rounded-xl text-[15px] outline-none transition-all border",
                            isDark
                                ? "bg-[#111] border-white/10 text-white placeholder-gray-500 focus:border-white/20 focus:bg-[#161616]"
                                : "bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-gray-300 shadow-sm"
                        )}
                    />
                </div>

                {/* Empty State */}
                {totalResults === 0 && (
                    <div className="py-20 text-center">
                        <p className={cn("text-lg", isDark ? "text-gray-500" : "text-gray-400")}>
                            No matching certifications found for "{searchQuery}".
                        </p>
                        <button
                            onClick={() => setSearchQuery("")}
                            className="mt-4 text-sm font-medium text-blue-500 hover:text-blue-600 underline"
                        >
                            Clear search
                        </button>
                    </div>
                )}

                {/* Grouped List Content */}
                <div className="space-y-16">
                    {Object.entries(groupedCerts).map(([category, certs]) => (
                        <motion.section
                            key={category}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="flex items-end justify-between mb-4 border-b pb-3 border-gray-200 dark:border-white/10">
                                <h2 className={cn(
                                    "text-sm font-bold uppercase tracking-widest",
                                    isDark ? "text-gray-400" : "text-gray-500"
                                )}>
                                    {category}
                                </h2>
                                <span className={cn(
                                    "text-xs font-mono rounded px-2 py-0.5",
                                    isDark ? "bg-white/10 text-gray-400" : "bg-gray-100 text-gray-500"
                                )}>
                                    {certs.length}
                                </span>
                            </div>

                            <div className="flex flex-col gap-1">
                                {certs.map((cert) => (
                                    <div
                                        key={cert.id}
                                        className={cn(
                                            "group flex flex-col sm:flex-row sm:items-center justify-between py-3 px-3 -mx-3 rounded-lg transition-colors border-b border-transparent sm:border-b-0",
                                            isDark ? "hover:bg-white/5 sm:border-white/5" : "hover:bg-black/5 sm:border-gray-100"
                                        )}
                                    >
                                        <div className="flex items-start gap-4">
                                            {/* Minimal Bullet */}
                                            <div className="mt-[6px] flex-shrink-0">
                                                <div className={cn(
                                                    "w-1.5 h-1.5 rounded-full transition-colors",
                                                    isDark ? "bg-white/30 group-hover:bg-white/80" : "bg-black/30 group-hover:bg-black/80"
                                                )} />
                                            </div>

                                            <div className="flex flex-col">
                                                <h3 className={cn(
                                                    "text-[15px] font-medium leading-snug mb-1",
                                                    isDark ? "text-white/90 group-hover:text-white" : "text-black/90 group-hover:text-black"
                                                )}>
                                                    {cert.title}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-2 text-[13px]">
                                                    <span className={isDark ? "text-white/50" : "text-black/60"}>
                                                        {cert.issuer}
                                                    </span>
                                                    {cert.desc && (
                                                        <>
                                                            <span className={isDark ? "text-white/20" : "text-black/20"}>•</span>
                                                            <span className={isDark ? "text-white/40" : "text-black/50"}>
                                                                {cert.desc}
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Footer simple space */}
                <div className="h-12" />
            </div>
        </div>
    );
};

export default Certifications;
