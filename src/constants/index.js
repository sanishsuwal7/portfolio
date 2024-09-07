import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer and AI researcher with a knack for crafting robust and scalable web applications. I love travelling and creating 🚀 I'm a lifelong learner 🎓 and I might have a thing for traditional Neapolitan Pizza 🍕.`;

export const ABOUT_TEXT = `Since my early days at 8 years old, using computers for various stuff has been my passion. It all started with Mario game, where I used to spend most of my days trying to save princess Peach.
As the digital landscape evolved, so did my skills – from playing games to creating websites with my HTML and CSS abilities.That same drive for creation and design has never left me.
My journey has taken me through various creative and technical realms – from making websites to learning about algorithm design and also exploring research landscape in AI field.
I have worked with a variety of technologies, including React, AngularJS, Spring, Node.js, MySQL, MongoDB, AWS and Docker. 
Outside of coding, I enjoy staying active, exploring new technologies, and cooking tasty food. I'm always up for a talk with a great cup of mocha. A food enthusiast at heart, I'm your go-to for the next potluck.I'm eager to connect and collaborate – reach out!`;

export const EXPERIENCES = [
  {
    year: "Oct 2022 - Present",
    role: "CADTech Lab Assisstant",
    company: "Rochester Institute of Technology",
    description: `Led Tier-0 support for academic and research labs, guaranteeing smooth operational status and prompt issue resolution; implemented regular maintenance checks that minimized downtime by 20% and improved equipment efficiency by 15%. Conducted basic physical and IT troubleshooting for cage equipment, identifying and resolving issues.`,
    technologies: ["Keyserver", "Workportal", "Papercut", "Jamf", "Helpdesk"],
  },
  {
    year: "May 2023 - Dec 2023",
    role: "FullStack Engineer Intern",
    company: "Solu Technology Partners",
    description: `Pioneered the development and maintenance of Angular-based frontend application called Surveytool that helps client companies take surveys for employees and candidates; concurrently, managed Kotlin and Spring backend services to drive system functionality and performance. Independently built the user management system and search filters for search features in Surveytool. Designed and deployed an automated testing suite using Selenium, reducing manual testing time by 40% while increasing test coverage. Engineered and containerized in-house employee management applications using Docker, ensuring consistent environments across development and production; reduced configuration errors by 50%. Leveraged AWS services, including EC2, S3, and RDS, to host and scale applications in the cloud.`,
    technologies: ["Angular", "Springboot", "Node.js", "MongoDB","Selenium", "Docker", "AWS", "Kotlin", "TypeScript"],
  },
  {
    year: "Sep 2018 - Jan 2019",
    role: "Software Engineer Intern",
    company: "Featherwebs Private Limited",
    description: `Developed and delivered customized web applications using React Native and PHP and optimized load times by 30%. Orchestrated the development of user interfaces for internal projects using Adobe XD, following in a 40% increase in user engagement. Collaborated with a 4-member team to refine system architecture for internal team-facing platforms, optimizing speed of delivery for client-facing services and projects.`,
    technologies: ["React Native", "PHP", "MySql", "Adobe XD"],
  },
];

export const PROJECTS = [
  {
    title: "Vehicle Routing Problem",
    image: project1,
    description:
      "Implements an optimized Ant Colony Optimization algorithm for the Vehicle Routing Problem, resulting in improved route optimization and enhanced performance.",
    technologies: ["Python", "Panda", "Matplotlib", "Numpy"],
  },
  {
    title: "Fake Face Generation",
    image: project2,
    description:
      "Implementing a Generative Adversarial Network (GAN) to generate fake faces. The project uses a dataset of 70,000 images of celebrities to train the model.",
    technologies: ["Python", "GANs", "Pandas", "Numpy", "Matplotlib"],
  },
  {
    title: "Attendance Management System",
    image: project3,
    description:
      "Attendance management system that uses facial recognition to automate and improve student attendance tracking. The project integrates Convolutional Neural Networks and a Django-powered system to simplify the process and increase accuracy.",
    technologies: ["Python", "Django", "React", "CNN", "Bootstrap", "Numpy", "Pandas"],
  },
  {
    title: "Cardiovascular Disease Prediction",
    image: project4,
    description:
      "Mobile and web platform that predicts cardiovascular disease risk using AI algorithms. The project integrates React Native and Django frameworks to enhance diagnostic accuracy and improve user engagement.",
    technologies: ["React Native", "Django", "Python", "Scikit-learn", "MySql"],
  },
];

export const CONTACT = {
  address: "Rochester, NY 14623",
  phoneNo: "+1 585 350 6121 ",
  email: "sanish.suwal7@gmail.com",
};
