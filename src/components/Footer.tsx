'use client';

import { FiMail } from 'react-icons/fi';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { AiFillMediumCircle, AiFillLinkedin } from 'react-icons/ai';

export default function Footer() {
    const year = new Date().getFullYear();

    const links = [
        {
            icon: <FiMail className="text-xl" />,
            href: 'mailto:goudSwamy77@gmail.com',
        },
        {
            icon: <FaTwitter className="text-xl" />,
            href: 'https://twitter.com/Swamy80875999',
        },
        {
            icon: <AiFillLinkedin className="text-xl" />,
            href: 'https://www.linkedin.com/in/Swamy-manda-728019214/',
        },
        {
            icon: <FaGithub className="text-xl" />,
            href: 'https://github.com/Swamygooud',
        },
        {
            icon: <AiFillMediumCircle className="text-xl" />,
            href: 'https://medium.com/@goudSwamy77',
        },
    ];

    return (
        <footer className="bg-slate-900 py-4 px-6 text-white">
            <div className="flex justify-between items-center flex-wrap gap-4 max-w-6xl mx-auto">
                <p className="text-sm font-light w-full sm:w-auto text-center sm:text-left">
                    © {year} Swamy. All rights reserved.
                </p>

                <div className="flex justify-center sm:justify-end gap-5 w-full sm:w-auto">
                    {links.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition transform hover:scale-110 hover:-translate-y-1"
                            aria-label="Social link"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
