import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Trophy,
    Calendar,
    Award,
    Medal,
    Star,
    Sparkles,
    BookOpen,
    FileText,
    ExternalLink
} from "lucide-react";

/* ---------------- ACHIEVEMENTS DATA ---------------- */

const achievements = [
    {
        id: 1,
        title: "Global Rank 774 – LeetCode Biweekly Contest 169",
        date: "Nov 2025",
        description: "Secured Global Rank 774 among 27,000+ participants in LeetCode Biweekly Contest 169."
    },
    {
        id: 2,
        title: "GirlScript Summer of Code Contributor",
        date: "2025",
        description: "Selected as a Tech Contributor for GirlScript Summer of Code 2025."
    },
    {
        id: 3,
        title: "Solved 1000+ Problems on CodeChef",
        date: "May 2025",
        description: "Reached a milestone of solving 1000+ competitive programming problems."
    },
    {
        id: 4,
        title: "5★ HackerRank Badges",
        date: "Jul 2025",
        description: "Achieved 5-star badges in Problem Solving, Java, Python, C and C++."
    }
];

/* ---------------- AWARDS DATA ---------------- */

const awardsData = [

    { title: "NSTSE 2022", rank: "AIR 9", icon: Trophy, color: "text-amber-500" },

    { title: "NSTSE 2021", rank: "State Rank 19", icon: Award, color: "text-amber-500" },

    { title: "International Commerce Olympiad 2021", rank: "School Rank 1", icon: Medal, color: "text-yellow-500" },

    { title: "International English Olympiad 2021", rank: "School Rank 1", icon: Medal, color: "text-yellow-500" },

    { title: "International Mathematics Olympiad 2021", rank: "School Rank 1", icon: Medal, color: "text-yellow-500" },

    { title: "National Science Olympiad 2021", rank: "School Rank 1", icon: Medal, color: "text-yellow-500" },

    { title: "International General Knowledge Olympiad 2020", rank: "School Rank 2", icon: Star, color: "text-slate-400" },

    { title: "National Science Olympiad 2020", rank: "School Rank 3", icon: Medal, color: "text-orange-500" },

    { title: "International English Olympiad 2019", rank: "School Rank 3", icon: Medal, color: "text-orange-500" },

    { title: "International English Olympiad 2020", rank: "School Rank 4", icon: Award, color: "text-blue-500" },

    { title: "International Mathematics Olympiad 2020", rank: "School Rank 5", icon: Award, color: "text-blue-500" }

];

/* ---------------- PUBLICATIONS DATA ---------------- */

const publicationsData = [

    {
        title: "A Comparative Study of CPU Scheduling Algorithms for Efficient Process Management",
        description: "Published in Volume 13, Issue XI (November 2025) of the International Journal for Research in Applied Science & Engineering Technology (IJRASET).",
        icon: FileText,
        type: "Journal Article",
        link: "https://www.linkedin.com/posts/khushboo0705_article-operatingsystems-cpuscheduling-activity-7424887744650182656-O68e"
    },

    {
        title: "Synergizing Indian Knowledge Systems and Modern Technology: Pathways Toward Viksit Bharat 2047",
        description: "Published and presented research paper at the International Seminar organized by Amity University Uttar Pradesh in collaboration with ICPR, New Delhi.",
        icon: BookOpen,
        type: "Conference Presentation",
        link: "https://www.linkedin.com/posts/khushboo0705_researchpresentation-viksitbharat2047-academicjourney-activity-7418356652476739585-BMss"
    }

];

/* ---------------- COMPONENT ---------------- */

export default function Achievements() {

    const [hovered, setHovered] = useState(null);

    return (

        <div className="min-h-screen bg-[#0b0b0b] text-white pt-32">

            {/* -------- MAIN ACHIEVEMENTS -------- */}

            <section className="px-6 md:px-16 pb-24">

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
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
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
            </section>

            {/* -------- AWARDS -------- */}

            <section className="px-6 md:px-16 py-24 border-t border-white/10">

                <div className="max-w-6xl mx-auto">

                    <h2 className="text-4xl font-bold mb-16 flex items-center gap-3">
                        <Sparkles className="text-amber-400" />
                        Academic Olympiad Awards
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                        {awardsData.map((award, index) => {

                            const Icon = award.icon;

                            return (

                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.04 }}
                                    onMouseEnter={() => setHovered(index)}
                                    onMouseLeave={() => setHovered(null)}
                                    className="p-6 rounded-xl border border-white/10 bg-[#121212] hover:border-amber-400 transition"
                                >

                                    <div className="flex items-center gap-4">

                                        <div className="p-3 rounded-full bg-white/5">
                                            <Icon className={award.color} />
                                        </div>

                                        <div>
                                            <h4 className="font-semibold">
                                                {award.title}
                                            </h4>
                                            <p className="text-sm text-gray-400">
                                                {award.rank}
                                            </p>
                                        </div>

                                    </div>

                                </motion.div>

                            )

                        })}

                    </div>

                </div>
            </section>

            {/* -------- PUBLICATIONS -------- */}

            <section className="px-6 md:px-16 py-24 border-t border-white/10">

                <div className="max-w-6xl mx-auto">

                    <h2 className="text-4xl font-bold mb-16 flex items-center gap-3">
                        <BookOpen className="text-blue-400" />
                        Academic Publications
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        {publicationsData.map((pub, index) => {

                            const Icon = pub.icon;

                            return (

                                <motion.a
                                    href={pub.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group block p-8 rounded-2xl border border-white/10 bg-[#121212] hover:border-blue-400 transition"
                                >

                                    <div className="flex justify-between mb-6">

                                        <div className="p-3 rounded-xl bg-white/5">
                                            <Icon className="text-blue-400" />
                                        </div>

                                        <ExternalLink className="text-gray-400 group-hover:text-blue-400" />

                                    </div>

                                    <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                                        {pub.type}
                                    </span>

                                    <h3 className="text-xl font-semibold mt-2 mb-4">
                                        {pub.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm">
                                        {pub.description}
                                    </p>

                                </motion.a>

                            )

                        })}

                    </div>

                </div>
            </section>

        </div>

    );

}