import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
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
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Have a project or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-darkCard rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-800"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name *
              </label>
              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-primary focus:outline-none transition-colors"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email *
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-primary focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                Subject *
              </label>
              <input
                {...register('subject', { required: 'Subject is required' })}
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-primary focus:outline-none transition-colors"
                placeholder="What's this about?"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message *
              </label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-primary transition-all hover:scale-[1.02] shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-lg text-center font-semibold"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
