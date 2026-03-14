import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Award, Calendar, X } from "lucide-react";

/* ---------------- CERTIFICATES DATA ---------------- */

const ALL_CERTS = [
    {
        id: 1,
        title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
        category: "AI & Cloud",
        issuer: "Oracle",
        date: "2025",
        badge: "Professional Certification",
        skills: ["Cloud", "Data Science", "OCI"],
        image: "/certificates/oracle-cloud.png"
    },

    {
        id: 2,
        title: "Machine Learning Internship",
        category: "AI & Cloud",
        issuer: "Acmegrade",
        date: "2024",
        badge: "Internship",
        skills: ["Machine Learning", "Python", "AI"],
        image: "/certificates/ml-internship.png"
    },

    {
        id: 3,
        title: "AI and Prompt Engineering Intern",
        category: "AI & Cloud",
        issuer: "VaultofCodes",
        date: "2025",
        badge: "Internship",
        skills: ["Prompt Engineering", "LLMs", "AI"],
        image: "/certificates/prompt-engineering.png"
    },

    {
        id: 4,
        title: "Data Analytics Intensive Program",
        category: "AI & Cloud",
        issuer: "Jobaaj Learnings",
        date: "2024",
        badge: "Training",
        skills: ["Data Analytics", "Excel", "SQL"],
        image: "/certificates/data-analytics.png"
    },

    {
        id: 5,
        title: "Quantium Job Simulation",
        category: "AI & Cloud",
        issuer: "Forage",
        date: "2024",
        badge: "Simulation",
        skills: ["Data Analytics", "Business Analytics"],
        image: "/certificates/quantium.png"
    },

    /* ---------------- CORE PROGRAMMING ---------------- */

    {
        id: 6,
        title: "Logic Building, Programming & Data Structures",
        category: "Core Programming",
        issuer: "Learn How to Think",
        date: "2023",
        badge: "Course",
        skills: ["Problem Solving", "DSA"],
        image: "/certificates/logic-building.png"
    },

    {
        id: 7,
        title: "Learn C Programming",
        category: "Core Programming",
        issuer: "CodeChef",
        date: "2023",
        badge: "Course",
        skills: ["C Programming"],
        image: "/certificates/c.png"
    },

    {
        id: 8,
        title: "Learn C++",
        category: "Core Programming",
        issuer: "CodeChef",
        date: "2023",
        badge: "Course",
        skills: ["C++", "OOP"],
        image: "/certificates/cpp.png"
    },

    {
        id: 9,
        title: "Learn Java",
        category: "Core Programming",
        issuer: "CodeChef",
        date: "2023",
        badge: "Course",
        skills: ["Java", "OOP"],
        image: "/certificates/java.png"
    },

    {
        id: 10,
        title: "Learn NumPy",
        category: "Core Programming",
        issuer: "CodeChef",
        date: "2024",
        badge: "Course",
        skills: ["NumPy", "Python"],
        image: "/certificates/numpy.png"
    },

    {
        id: 11,
        title: "Python (Basic)",
        category: "Core Programming",
        issuer: "HackerRank",
        date: "2024",
        badge: "Verified",
        skills: ["Python"],
        image: "/certificates/python.png"
    },

    {
        id: 12,
        title: "Java Maestro",
        category: "Core Programming",
        issuer: "Institution",
        date: "2024",
        badge: "Advanced",
        skills: ["Java", "GUI", "Swing"],
        image: "/certificates/java-maestro.png"
    },

    {
        id: 13,
        title: "Java Programming",
        category: "Core Programming",
        issuer: "iamneo",
        date: "2024",
        badge: "Course",
        skills: ["Java", "OOP"],
        image: "/certificates/java-programming.png"
    },

    {
        id: 14,
        title: "GFG 160 Days",
        category: "Core Programming",
        issuer: "GeeksforGeeks",
        date: "2024",
        badge: "Intensive Program",
        skills: ["DSA", "Algorithms"],
        image: "/certificates/gfg160.png"
    },

    {
        id: 15,
        title: "DSA",
        category: "Core Programming",
        issuer: "iamneo",
        date: "2024",
        badge: "Course",
        skills: ["Data Structures", "Algorithms"],
        image: "/certificates/dsa.png"
    },

    {
        id: 16,
        title: "Object Oriented Programming",
        category: "Core Programming",
        issuer: "iamneo",
        date: "2024",
        badge: "Course",
        skills: ["OOP", "Design Principles"],
        image: "/certificates/oop.png"
    },

    {
        id: 17,
        title: "Computer Programming",
        category: "Core Programming",
        issuer: "iamneo",
        date: "2023",
        badge: "Course",
        skills: ["Programming Fundamentals"],
        image: "/certificates/programming.png"
    },

    {
        id: 18,
        title: "Discrete Mathematics",
        category: "Core Programming",
        issuer: "NPTEL",
        date: "2024",
        badge: "NPTEL",
        skills: ["Mathematics", "Logic"],
        image: "/certificates/discrete-math.png"
    },

    /* ---------------- WEB & SOFTWARE ---------------- */

    {
        id: 19,
        title: "Web Development Intern",
        category: "Web & Software",
        issuer: "Prodigy InfoTech",
        date: "2024",
        badge: "Internship",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        image: "/certificates/web-intern.png"
    },

    {
        id: 20,
        title: "Responsive Web Design",
        category: "Web & Software",
        issuer: "freeCodeCamp",
        date: "2024",
        badge: "Certification",
        skills: ["HTML", "CSS", "Responsive Design"],
        image: "/certificates/fcc.png"
    },

    {
        id: 21,
        title: "Software Engineering 101",
        category: "Web & Software",
        issuer: "Udemy",
        date: "2024",
        badge: "Course",
        skills: ["Software Engineering", "Architecture"],
        image: "/certificates/software-engineering.png"
    },

    {
        id: 22,
        title: "Flipkart GRID 6.0",
        category: "Web & Software",
        issuer: "Flipkart",
        date: "2024",
        badge: "Competition",
        skills: ["Software Development"],
        image: "/certificates/flipkart-grid.png"
    },

    /* ---------------- CORE TECH & SECURITY ---------------- */

    {
        id: 23,
        title: "Digital Systems",
        category: "Core Tech & Security",
        issuer: "Coursera",
        date: "2023",
        badge: "Course",
        skills: ["Digital Logic"],
        image: "/certificates/digital-systems.png"
    },

    {
        id: 24,
        title: "Hardware and Operating Systems",
        category: "Core Tech & Security",
        issuer: "Coursera",
        date: "2023",
        badge: "Course",
        skills: ["OS", "Hardware"],
        image: "/certificates/os.png"
    },

    {
        id: 25,
        title: "Computer Communications",
        category: "Core Tech & Security",
        issuer: "Coursera",
        date: "2023",
        badge: "Course",
        skills: ["Networking"],
        image: "/certificates/networking.png"
    },

    {
        id: 26,
        title: "Ethical Hacking",
        category: "Core Tech & Security",
        issuer: "Rising Tech Pro",
        date: "2023",
        badge: "Security",
        skills: ["Cybersecurity", "Ethical Hacking"],
        image: "/certificates/hacking.png"
    },

    /* ---------------- EVENTS & HACKATHONS ---------------- */

    {
        id: 27,
        title: "Code-A-Haunt",
        category: "Events & Hackathons",
        issuer: "Hackathon",
        date: "2024",
        badge: "Hackathon",
        skills: ["Problem Solving"],
        image: "/certificates/hackathon.png"
    },

    {
        id: 28,
        title: "Pragati Path to Future Cohort 5",
        category: "Events & Hackathons",
        issuer: "Cohort",
        date: "2024",
        badge: "Cohort",
        skills: ["Career Development"],
        image: "/certificates/pragati.png"
    },

    {
        id: 29,
        title: "GSSOC'25 Contributor",
        category: "Events & Hackathons",
        issuer: "Open Source",
        date: "2025",
        badge: "Open Source",
        skills: ["Git", "Collaboration"],
        image: "/certificates/gssoc.png"
    },

    {
        id: 30,
        title: "VibeCode India 2025",
        category: "Events & Hackathons",
        issuer: "Event",
        date: "2025",
        badge: "Event",
        skills: ["Coding"],
        image: "/certificates/vibecode.png"
    },

    {
        id: 31,
        title: "RCSCTF24",
        category: "Events & Hackathons",
        issuer: "CTF",
        date: "2024",
        badge: "Cybersecurity",
        skills: ["CTF", "Security"],
        image: "/certificates/ctf.png"
    },

    {
        id: 32,
        title: "Achal Welfare Foundation",
        category: "Events & Hackathons",
        issuer: "Foundation",
        date: "2024",
        badge: "Volunteer",
        skills: ["Community Work"],
        image: "/certificates/achal.png"
    },

    {
        id: 33,
        title: "Green Olympiad for Youth",
        category: "Events & Hackathons",
        issuer: "GO4Youth",
        date: "2023",
        badge: "Olympiad",
        skills: ["Environment"],
        image: "/certificates/green.png"
    },

    {
        id: 34,
        title: "Women in Technology Conference",
        category: "Events & Hackathons",
        issuer: "Cadence",
        date: "2024",
        badge: "Conference",
        skills: ["Networking"],
        image: "/certificates/women-tech.png"
    },

    {
        id: 35,
        title: "Youth Speak Forum",
        category: "Events & Hackathons",
        issuer: "AIESEC",
        date: "2023",
        badge: "Forum",
        skills: ["Leadership"],
        image: "/certificates/youth.png"
    },

    {
        id: 36,
        title: "Color Palette ADVITIYA'24",
        category: "Events & Hackathons",
        issuer: "IIT Ropar",
        date: "2024",
        badge: "Event",
        skills: ["Creativity"],
        image: "/certificates/advitiya.png"
    },

    /* ---------------- SOFT SKILLS ---------------- */

    {
        id: 37,
        title: "English Proficiency Course",
        category: "Soft Skills & Design",
        issuer: "Bluehawks",
        date: "2023",
        badge: "Course",
        skills: ["Communication"],
        image: "/certificates/english.png"
    },

    {
        id: 38,
        title: "Voice and Accent",
        category: "Soft Skills & Design",
        issuer: "Skill Development",
        date: "2023",
        badge: "Training",
        skills: ["Communication"],
        image: "/certificates/voice.png"
    },

    {
        id: 39,
        title: "NLLP Fundamentals",
        category: "Soft Skills & Design",
        issuer: "Infosys SpringBoard",
        date: "2024",
        badge: "Course",
        skills: ["Leadership"],
        image: "/certificates/nllp.png"
    },

    {
        id: 40,
        title: "Design Thinking",
        category: "Soft Skills & Design",
        issuer: "Infosys SpringBoard",
        date: "2024",
        badge: "Course",
        skills: ["Design Thinking"],
        image: "/certificates/design-thinking.png"
    },

    {
        id: 41,
        title: "Introduction to Digital Marketing",
        category: "Soft Skills & Design",
        issuer: "Infosys SpringBoard",
        date: "2024",
        badge: "Course",
        skills: ["Marketing"],
        image: "/certificates/marketing.png"
    },

    {
        id: 42,
        title: "IELTS Pro Reading Writing",
        category: "Soft Skills & Design",
        issuer: "Udemy",
        date: "2024",
        badge: "Course",
        skills: ["English", "IELTS"],
        image: "/certificates/ielts.png"
    },

    {
        id: 43,
        title: "Social Networks Elite",
        category: "Soft Skills & Design",
        issuer: "NPTEL",
        date: "2024",
        badge: "Elite",
        skills: ["Social Networks"],
        image: "/certificates/social-networks.png"
    }

];

/* ---------------- CATEGORY LIST ---------------- */

const CATEGORIES = [
    "All",
    "AI & Cloud",
    "Core Programming",
    "Web & Software",
    "Events & Hackathons",
    "Soft Skills & Design"
];

/* ---------------- COMPONENT ---------------- */

export default function Certifications() {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState(null);

    const filteredCerts = ALL_CERTS.filter(cert => {

        const matchesCategory =
            selectedCategory === "All" || cert.category === selectedCategory;

        const matchesSearch =
            cert.title.toLowerCase().includes(search.toLowerCase()) ||
            cert.issuer.toLowerCase().includes(search.toLowerCase());

        return matchesCategory && matchesSearch;

    });

    return (

        <div className="min-h-screen bg-[#0b0b0b] text-white px-6 md:px-16 pt-32 pb-24">

            <div className="max-w-6xl mx-auto">

                <h1 className="text-4xl font-bold mb-10 flex items-center gap-3">
                    <Award className="text-cyan-400" />
                    Certifications
                </h1>

                {/* SEARCH */}

                <div className="relative mb-10 max-w-md">

                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search certificates..."
                        className="w-full pl-10 py-3 bg-[#141414] border border-white/10 rounded-xl"
                    />

                </div>

                {/* CATEGORY FILTER */}

                <div className="flex flex-wrap gap-3 mb-12">

                    {CATEGORIES.map(cat => (

                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm transition
${selectedCategory === cat
                                    ? "bg-cyan-500 text-black"
                                    : "bg-white/10 hover:bg-white/20"}`}
                        >

                            {cat}

                        </button>

                    ))}

                </div>

                {/* GRID */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {filteredCerts.map(cert => (

                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.03 }}
                            onClick={() => setSelected(cert)}
                            className="bg-[#121212] border border-white/10 rounded-2xl p-6 cursor-pointer hover:border-cyan-400 transition"
                        >

                            <div className="flex justify-between mb-3">

                                <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                                    {cert.badge}
                                </span>

                                <span className="flex items-center text-xs text-gray-400 gap-1">
                                    <Calendar size={14} />
                                    {cert.date}
                                </span>

                            </div>

                            <h3 className="font-semibold mb-2">
                                {cert.title}
                            </h3>

                            <p className="text-sm text-gray-400 mb-3">
                                {cert.issuer}
                            </p>

                            <div className="flex flex-wrap gap-2">

                                {cert.skills.map((s, i) => (
                                    <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded">
                                        {s}
                                    </span>
                                ))}

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

            {/* MODAL */}

            <AnimatePresence>

                {selected && (

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    >

                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="bg-[#111] p-6 rounded-2xl max-w-3xl w-full relative"
                        >

                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-4 right-4"
                            >
                                <X />
                            </button>

                            <h3 className="text-xl font-semibold mb-4">
                                {selected.title}
                            </h3>

                            <img
                                src={selected.image}
                                alt={selected.title}
                                className="rounded-lg mb-4 w-full"
                            />

                            <p className="text-gray-400">
                                Issued by {selected.issuer} • {selected.date}
                            </p>

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>

        </div>

    );

}
