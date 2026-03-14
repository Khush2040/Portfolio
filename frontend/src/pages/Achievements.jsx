import React from "react";
import { motion } from "framer-motion";
import { Trophy, Calendar } from "lucide-react";

/* -------- ACHIEVEMENTS DATA -------- */

const achievements = [
    {
        id: 1,
        title: "Global Rank 774 – LeetCode Biweekly Contest 169",
        date: "Nov 2025",
        description:
            "Secured Global Rank 774 among 27,000+ participants in LeetCode Biweekly Contest 169."
    },
    {
        id: 2,
        title: "Research Paper Published – IJRASET",
        date: "Nov 2025",
        description:
            "Published research paper titled 'A Comparative Study of CPU Scheduling Algorithms for Efficient Process Management'."
    },
    {
        id: 3,
        title: "Research Paper Published",
        date: "Nov 2025",
        description:
            "Published research paper titled 'Synergizing Indian Knowledge Systems and Modern Technology: Pathways Toward Viksit Bharat 2047'."
    },
    {
        id: 4,
        title: "GirlScript Summer of Code Contributor",
        date: "2025",
        description:
            "Selected as a Tech Contributor for GirlScript Summer of Code 2025."
    },
    {
        id: 5,
        title: "Solved 1000+ Problems on CodeChef",
        date: "May 2025",
        description:
            "Reached a milestone of solving 1000+ competitive programming problems."
    },
    {
        id: 6,
        title: "5★ HackerRank Badges",
        date: "Jul 2025",
        description:
            "Achieved 5-star badges in Problem Solving, Java, Python, C and C++."
    }
];

/* -------- COMPONENT -------- */

export default function Achievements() {
    return (
        <div className="min-h-screen bg-[#0b0b0b] text-white pt-32 pb-24 px-6 md:px-16">
            <div className="max-w-5xl mx-auto">

                <h1 className="text-4xl font-bold mb-16 flex items-center gap-3">
                    <Trophy className="text-yellow-400" />
                    Achievements
                </h1>

                <div className="space-y-8">

                    {achievements.map((ach) => (
                        <motion.div
                            key={ach.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-[#121212] border border-white/10 rounded-xl p-6 hover:border-yellow-400 transition"
                        >

                            <div className="flex justify-between items-center mb-2">

                                <h3 className="text-lg font-semibold">
                                    {ach.title}
                                </h3>

                                <span className="flex items-center gap-1 text-xs text-gray-400">
                                    <Calendar size={14} />
                                    {ach.date}
                                </span>

                            </div>

                            <p className="text-gray-400 text-sm">
                                {ach.description}
                            </p>

                        </motion.div>
                    ))}

                </div>
            </div>
        </div>
    );
}
