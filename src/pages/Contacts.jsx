import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
    const formRef = useRef();
    
    const variants = {
        initial: { x: 0, opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, staggerChildren: 0.2 },
        },
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_yfu2moa', 'template_ibn1m1k', formRef.current, {
                publicKey: 'MNSEq5oU0PxR8GkCO',
            })
            .then(
                () => {
                    toast.success("Message sent successfully!");
                    formRef.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Failed to send message.");
                }
            );
    };

    return (
        <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            // Replaced text-white with standard layout padding/sizing
            className="min-h-[85vh] w-full flex flex-col lg:flex-row items-center justify-center gap-16 py-12 px-4 lg:px-8"
        >
            <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-16 items-center">
                
                {/* Contact Info (Left Side) */}
                <motion.div variants={variants} className="w-full lg:w-1/2 flex flex-col gap-8">
                    <motion.h1 variants={variants} className="text-5xl lg:text-7xl font-extrabold text-zinc-50 tracking-tight">
                        Let's work <br className="hidden lg:block"/> together
                    </motion.h1>
                    
                    <motion.div variants={variants} className="space-y-6 mt-4">
                        <motion.div variants={variants} className="flex flex-col gap-1">
                            {/* Updated from purple to zinc-100 */}
                            <h2 className="font-semibold text-zinc-100 text-lg uppercase tracking-wider">Mail</h2>
                            {/* Updated from white/80 to zinc-400 */}
                            <p className="text-zinc-400 text-lg">sumrasamir27@gmail.com</p>
                        </motion.div>
                        
                        <motion.div variants={variants} className="flex flex-col gap-1">
                            <h2 className="font-semibold text-zinc-100 text-lg uppercase tracking-wider">Address</h2>
                            <p className="text-zinc-400 text-lg">Bhavnagar, Gujarat</p>
                        </motion.div>
                        
                        <motion.div variants={variants} className="flex flex-col gap-1">
                            <h2 className="font-semibold text-zinc-100 text-lg uppercase tracking-wider">Phone</h2>
                            <p className="text-zinc-400 text-lg">9316102936</p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Contact Form (Right Side) */}
                <div className="w-full lg:w-1/2 relative z-0 flex justify-center">
                    
                    {/* SVG Animation Background */}
                    <motion.div
                        initial={{ opacity: 1 }}
                        whileInView={{ opacity: 0 }}
                        transition={{ delay: 3, duration: 1 }}
                        viewport={{ once: true }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    >
                        <svg width="350px" height="350px" viewBox="0 0 24 24" fill="none">
                            <motion.path
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 4, ease: 'easeInOut' }}
                                viewport={{ once: true }}
                                d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
                                // Changed from stroke-purple-500 to a clean zinc-500
                                className="stroke-zinc-500 stroke-1"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </motion.div>

                    <div className="z-50 w-full max-w-md">
                        <motion.form
                            ref={formRef}
                            onSubmit={sendEmail}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 4, duration: 1 }}
                            className="w-full flex flex-col gap-5"
                        >
                            {/* Updated Input Styling */}
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                required
                                className="w-full px-5 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl placeholder-zinc-500 text-zinc-100 focus:outline-none focus:border-zinc-600 focus:bg-zinc-900 transition-colors"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                required
                                className="w-full px-5 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl placeholder-zinc-500 text-zinc-100 focus:outline-none focus:border-zinc-600 focus:bg-zinc-900 transition-colors"
                            />
                            <textarea
                                rows={6}
                                placeholder="Message"
                                name="message"
                                required
                                className="w-full px-5 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl placeholder-zinc-500 text-zinc-100 resize-none focus:outline-none focus:border-zinc-600 focus:bg-zinc-900 transition-colors"
                            ></textarea>
                            
                            {/* Updated Button Styling */}
                            <button
                                type="submit"
                                className="w-full bg-zinc-100 text-zinc-900 py-4 rounded-xl font-bold text-lg hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-lg"
                            >
                                Send Message
                            </button>
                        </motion.form>
                    </div>
                </div>
            </div>
            
            {/* Toast Container */}
            <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
        </motion.div>
    );
};

export default Contacts;