import vpn from '@/assests/vpn.png'
import copeople from '@/assests/copeople.png';

export const name = 'Swamy';

export const services = [
    {
        title: "Technology Enthusiast",
        icon: "https://csgeeek.github.io/web.png",
    },
    {
        title: "Software Engineer",
        icon: "https://csgeeek.github.io/web.png",
    },
    {
        title: "Photographer",
        icon: "https://csgeeek.github.io/web.png",
    },
];

export const experiences = [
    {
        company: 'Inncircles Technologies',
        role: 'Product Developer',
        duration: 'April 2023 - Present',
        logo: 'https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/e5gz1yggdy8sc1umna3e',
        points: [
            'Involved in dynamic contributions to web and mobile📱 development projects, actively influencing and improving project outcomes.',
            'Developed multiple shared components to simplify tasks for fellow developers, boosting efficiency and teamwork.',
            'Enhanced product performance through significant contributions to backend development, optimizing essential components for improved efficiency 📈.',
            'Implemented data security for the companys product to provide role-based access control ⚙️.',
        ],
        url: 'https://inncircles.com/#home',
    },
    {
        company: 'AT & T',
        role: 'Technical Intern',
        duration: 'Jan 2023 - March 2023',
        logo: 'https://www.att.com/ecms/dam/att/consumer/global/logos/att_globe_500x500.jpg',
        points: [
            'Gained experience with Git version control contributing to the development and maintenance of code repositories.',
            'Worked on the application dashboard, making it more user-friendly and improving its overall functionality📱.',
        ],
        url: 'https://www.att.com/',
    },
];

export const projects = [
    {
        title: 'Co People',
        description:
            'Co People is a dynamic web app built with React and Node.js. A modern social platform that allows users to connect, share content, and interact seamlessly.',
        image: copeople,
        git: 'https://github.com/Swamygooud/CoPeople',
        technologies: ['MongoDB', 'ReactJS', 'NodeJS'],
    },
    {
        title: 'Snap Shot',
        description:
            'SnapShot is a stunning portfolio site for photographers, designed using ReactJS and Tailwind CSS. It showcases services and work beautifully.',
        image: vpn,
        git: 'https://github.com/Swamygooud/vpn_studios',
        technologies: ['ReactJS', 'Tailwind CSS'],
    },
];

// ✅ EmailJS ENV exports
export const EMAIL_JS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!;
export const EMAIL_JS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!;
export const EMAIL_JS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY!;
