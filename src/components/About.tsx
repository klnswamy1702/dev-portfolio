'use client';

import { services } from '@/constants';
import ButtonLink from "../components/ButtonLink"
import { motion } from 'framer-motion';

interface ServiceCardProps {
    service: {
        title: string;
        icon: string;
    };
}

const ServiceCard = ({ service }: ServiceCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="sm:w-[250px] w-full"
    >
        <div className="w-full bg-gradient-to-br from-green-400 via-pink-400 to-purple-500 p-[1px] rounded-2xl">
            <div className="rounded-2xl py-5 px-6 min-h-[280px] flex flex-col items-center justify-center bg-[#151030]">
                <img src={service.icon} alt="service-icon" className="w-16 h-16 object-contain mb-4" />
                <h3 className="text-white text-lg font-semibold text-center">{service.title}</h3>
            </div>
        </div>
    </motion.div>
);

export default function About() {
    return (
        <section className="bg-black text-white py-16 px-4 sm:px-12">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Introduction</h2>
                    <p className="text-lg leading-relaxed max-w-3xl mb-6">
                        👨‍💻 Hi, I'm <strong>Manda Swamy</strong>, a 2023 graduate🎓 with a passion for crafting robust backend systems and captivating mobile applications. As a seasoned{' '}
                        <a
                            href="https://www.linkedin.com/in/Swamy-manda-728019214/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-300 hover:text-green-500 duration-300"
                        >
                            Software Developer
                        </a>{' '}
                        I specialize in both MEAN and MERN stacks🚀.
                        <br />
                        ✍️ Beyond coding, I love sharing insights through engaging blogs on{' '}
                        <a
                            href="https://medium.com/@goudSwamy77"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-300 hover:text-purple-400 duration-300"
                        >
                            Medium
                        </a>
                        , diving into software development & tech trends.
                        <br />
                        📸 I'm also into photography — a way to capture moments🌟 and tell stories.
                    </p>

                    <ButtonLink
                        url="https://drive.google.com/file/d/19Vh0nx5JF9G_sgawb_dUIFlGSHtjp_dw/view?usp=drive_link"
                        text="View Resume →"
                        padding="p-3"
                    />
                </motion.div>

                <div className="mt-16 flex justify-center flex-wrap gap-7">
                    {services.map((service, i) => (
                        <ServiceCard key={i} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
