import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form submitted:", data);
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 4000);
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black/50">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-3">Get In Touch</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Have a project in mind? Let's work together to create something amazing
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Left: Form */}
                    <div className="bg-white dark:bg-darkCard rounded-lg shadow-md p-8 border border-gray-200 dark:border-gray-800">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-semibold mb-3">Name</label>
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    placeholder="Your name"
                                    maxLength={50}
                                    className="w-full px-4 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-primary focus:outline-none transition-colors"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold mb-3">Email</label>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address",
                                        },
                                    })}
                                    placeholder="your.email@example.com"
                                    maxLength={254}
                                    className="w-full px-4 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-primary focus:outline-none transition-colors"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-semibold mb-3">Message</label>
                                <textarea
                                    {...register("message", { required: "Message is required" })}
                                    placeholder="Tell me about your project..."
                                    rows={4}
                                    maxLength={1200}
                                    className="w-full px-4 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                                )}
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-900 text-white font-semibold py-3 rounded-md hover:bg-blue-800 transition"
                            >
                                Send Message
                            </button>

                            {/* Success Message */}
                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-3 bg-green-100 text-green-700 text-center font-semibold rounded-md"
                                >
                                    Thank you! Your message has been sent.
                                </motion.div>
                            )}
                        </form>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="bg-white dark:bg-darkCard rounded-lg shadow-md p-8 border border-gray-200 dark:border-gray-800">
                        <h3 className="text-2xl font-semibold mb-3">Contact Information</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities.
                        </p>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                                <p className="text-sm text-gray-500 mb-1">Email</p>
                                <div className="flex items-center gap-3">
                                    <FaEnvelope className="text-blue-600" />
                                    <span className="font-medium">akowalczuk@emkacz.pl</span>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                                <p className="text-sm text-gray-500 mb-1">Phone</p>
                                <div className="flex items-center gap-3">
                                    <FaPhone className="text-blue-600" />
                                    <span className="font-medium">+48 514 330 520</span>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                                <p className="text-sm text-gray-500 mb-1">Location</p>
                                <div className="flex items-center gap-3">
                                    <FaMapMarkerAlt className="text-blue-600" />
                                    <span className="font-medium">Warsaw, PL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
