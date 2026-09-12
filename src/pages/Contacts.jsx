import { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
    const formRef = useRef();
    
    const variants = {
        initial: { x: 0, opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.2 },
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
            animate="animate"
            className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden py-8"
        >
            <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-cyan-400/5 blur-3xl" />
            <div className="relative flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
                
                {/* Contact Info (Left Side) */}
                <motion.div variants={variants} className="flex w-full flex-col gap-8 lg:w-1/2">
                    <motion.div variants={variants} className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                        <span className="h-px w-8 bg-cyan-300" />
                        Start a conversation
                    </motion.div>
                    <motion.h1 variants={variants} className="text-5xl font-bold tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
                        Let's work <br className="hidden lg:block"/> together<span className="text-cyan-200">.</span>
                    </motion.h1>
                    <motion.p variants={variants} className="max-w-lg text-base leading-7 text-zinc-400 sm:text-lg">
                        Have a project in mind or just want to say hello? Send a note and I&apos;ll get back to you soon.
                    </motion.p>
                    
                    <motion.div variants={variants} className="mt-3 grid gap-3">
                        <motion.div variants={variants} className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
                            <Mail size={19} className="text-cyan-300" />
                            <div><h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Mail</h2><p className="mt-1 text-sm text-zinc-300">sumrasamir27@gmail.com</p></div>
                        </motion.div>
                        
                        <motion.div variants={variants} className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
                            <MapPin size={19} className="text-amber-200" />
                            <div><h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Based in</h2><p className="mt-1 text-sm text-zinc-300">Vadodara, Gujarat</p></div>
                        </motion.div>
                        
                        <motion.div variants={variants} className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
                            <Phone size={19} className="text-cyan-300" />
                            <div><h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Phone</h2><p className="mt-1 text-sm text-zinc-300">9316102936</p></div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Contact Form (Right Side) */}
                <div className="relative z-0 flex w-full justify-center lg:w-1/2">
                    <div className="z-10 w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 sm:p-7">
                        <div className="mb-6 flex items-center justify-between border-b border-zinc-800 pb-4">
                            <div><p className="text-sm font-semibold text-zinc-100">Send a message</p><p className="mt-1 text-xs text-zinc-500">I&apos;ll reply as soon as I can.</p></div>
                            <ArrowUpRight size={18} className="text-cyan-300" />
                        </div>
                        <form
                            ref={formRef}
                            onSubmit={sendEmail}
                            className="flex w-full flex-col gap-4"
                        >
                            {/* Updated Input Styling */}
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                required
                                className="w-full rounded-lg border border-zinc-700 bg-zinc-950/60 px-4 py-3.5 text-zinc-100 placeholder-zinc-500 transition-colors focus:border-cyan-300/60 focus:bg-zinc-950 focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                required
                                className="w-full rounded-lg border border-zinc-700 bg-zinc-950/60 px-4 py-3.5 text-zinc-100 placeholder-zinc-500 transition-colors focus:border-cyan-300/60 focus:bg-zinc-950 focus:outline-none"
                            />
                            <textarea
                                rows={6}
                                placeholder="Message"
                                name="message"
                                required
                                className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-950/60 px-4 py-3.5 text-zinc-100 placeholder-zinc-500 transition-colors focus:border-cyan-300/60 focus:bg-zinc-950 focus:outline-none"
                            ></textarea>
                            
                            <button
                                type="submit"
                                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-cyan-300 py-3.5 text-base font-bold text-zinc-950 transition-colors duration-300 hover:bg-cyan-200"
                            >
                                Send Message <Send size={17} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
            {/* Toast Container */}
            <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
        </motion.div>
    );
};

export default Contacts;