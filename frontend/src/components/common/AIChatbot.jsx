import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareText, X, Send, Bot, User } from 'lucide-react';

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Hi! I'm Khushboo's AI Assistant. Ask me anything about her experience, skills, or projects!" }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input.trim();
        setMessages(prev => [...prev, { type: 'user', text: userMsg }]);
        setInput('');
        setIsTyping(true);

        // Simple mock of AI logic based on keywords
        setTimeout(() => {
            let reply = "I'm still learning about that! You can check the PDF resume for more details.";
            const lowerMsg = userMsg.toLowerCase();

            if (lowerMsg.includes('skill') || lowerMsg.includes('tech')) {
                reply = "Khushboo specializes in Python, SQL, the MERN stack (MongoDB, Express, React, Node.js), and ETL tools like Informatica. She also has experience with DevOps and Data Analytics.";
            } else if (lowerMsg.includes('experience') || lowerMsg.includes('work')) {
                reply = "She has a strong background working as a Full Stack Developer and doing Data Analyst internships. She has successfully led web development teams and optimized database queries.";
            } else if (lowerMsg.includes('project')) {
                reply = "Some of Khushboo's key projects include standardizing datasets for mental health tracking, building ML models to predict exam outcomes, and creating full-stack web applications.";
            } else if (lowerMsg.includes('contact') || lowerMsg.includes('hire') || lowerMsg.includes('email')) {
                reply = "You can reach out to Khushboo via the designated Contact section on this site. She is actively open for new opportunities!";
            } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
                reply = "Hello there! How can I help you learn more about Khushboo's portfolio today?";
            }

            setMessages(prev => [...prev, { type: 'bot', text: reply }]);
            setIsTyping(false);
        }, 1500); // Simulate network delay
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center hover:bg-blue-500 transition-colors ${isOpen ? 'hidden' : 'block'}`}
            >
                <MessageSquareText size={24} />
            </motion.button>

            {/* Chatbot Window Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2 } }}
                        className="fixed bottom-6 right-6 z-[60] w-[90vw] md:w-[350px] h-[500px] bg-[#121212] border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                            <div className="flex items-center gap-2 font-semibold">
                                <Bot size={20} />
                                AI Assistant
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full text-white transition-colors">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages Body */}
                        <div className="flex-1 p-4 overflow-y-auto bg-[#0a0a0a] flex flex-col gap-3">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex gap-2 max-w-[85%] ${msg.type === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}>
                                    <div className={`p-2 rounded-xl text-sm ${msg.type === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-gray-800 text-gray-200 rounded-tl-none'}`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex gap-2 max-w-[85%] self-start">
                                    <div className="bg-gray-800 p-3 rounded-xl rounded-tl-none flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-3 bg-[#121212] border-t border-gray-800 flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about Khushboo..."
                                className="flex-1 bg-gray-900 border border-gray-700 text-sm text-white px-4 py-2 rounded-full focus:outline-none focus:border-blue-500"
                            />
                            <button type="submit" disabled={!input.trim()} className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                                <Send size={16} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIChatbot;
