import Message from '../models/Message.js';

export const submitMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'Please provide all fields' });
        }

        const newMessage = await Message.create({ name, email, message });

        res.status(201).json({
            success: true,
            data: newMessage,
            message: 'Your message has been sent successfully! I will get back to you soon.'
        });
    } catch (error) {
        console.error('Error in submitMessage:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: messages.length, data: messages });
    } catch (error) {
        console.error('Error in getMessages:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};
