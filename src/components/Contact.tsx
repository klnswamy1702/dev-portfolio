'use client';

import { useRef, useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    EMAIL_JS_PUBLIC_KEY,
    EMAIL_JS_SERVICE_ID,
    EMAIL_JS_TEMPLATE_ID,
} from '@/constants';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const username = form.name.trim();
        const user_email = form.email.trim();
        const user_message = form.message.trim();

        if (!username || !user_email || !user_message) {
            setLoading(false);
            toast.error('Please fill all the fields.', { position: 'bottom-right' });
            return;
        }

        emailjs
            .send(
                EMAIL_JS_SERVICE_ID,
                EMAIL_JS_TEMPLATE_ID,
                {
                    from_name: username,
                    to_name: 'Swamy',
                    reply_to: user_email,
                    to_email: 'goudSwamy77@gmail.com',
                    message: user_message,
                },
                EMAIL_JS_PUBLIC_KEY
            )
            .then(() => {
                setLoading(false);
                toast.success('Message sent successfully!', { position: 'bottom-right' });
                setForm({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
                toast.error('Uh oh! Something went wrong.', { position: 'bottom-right' });
            });
    };

    return (
        <section className="relative bg-black text-white w-screen pt-28 px-4 min-h-screen" id="contact">
            <div className="max-w-xl mx-auto p-8 rounded-2xl">
                <p className="text-gray-400 uppercase text-sm tracking-wide">Reach out to me</p>
                <h2 className="text-4xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-pink-500">
                    Contact
                </h2>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-10 flex flex-col gap-6"
                >
                    <label className="flex flex-col">
                        <span className="font-medium mb-2">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="py-3 px-5 rounded-lg bg-gray-900 text-white focus:outline-none"
                            required
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="font-medium mb-2">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Ex: abc@gmail.com"
                            className="py-3 px-5 rounded-lg bg-gray-900 text-white focus:outline-none"
                            required
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="font-medium mb-2">Your Message</span>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Do you have anything to say?"
                            rows={6}
                            className="py-3 px-5 rounded-lg bg-gray-900 text-white focus:outline-none"
                            required
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-gray-900 hover:bg-white hover:text-black border border-white transition-all px-6 py-3 rounded-xl font-bold w-fit"
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>

                <ToastContainer />
            </div>
        </section>
    );
}
