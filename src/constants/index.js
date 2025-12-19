import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.jpg";

export const HERO_CONTENT = `I am a passionate Software Engineer and AI researcher with a knack for crafting robust and scalable web applications and research interest in Explainable AI. I love travelling and creating 🚀 I'm a lifelong learner 🎓 and I might have a thing for traditional Neapolitan Pizza 🍕.`;

export const ABOUT_TEXT = `Since I was 8 years old, computers have been my passion. It all started with the Mario game, where I used to spend most of my days trying to save princess Peach.
As the digital landscape evolved, so did my skills – from playing games to creating websites to exploring research landscape in AI field. That same drive for creation and design has never left me. `

export const ABOUT_TEXT2 = `Outside of coding, I enjoy staying active by playing soccer, gym and hiking, exploring new technologies, and cooking tasty food. I'm always up for a talk with a great cup of mocha. A food enthusiast at heart, I'm your go-to for the next potluck. I'm eager to connect and collaborate – reach out!`;


export const EXPERIENCES = [
  {
    year: "March 2025 - Present",
    role: "Software Engineer Associate",
    company: "IoTFier Inc",
    description: `Developed reusable React component libraries with high visual accuracy using Storybook and Chromatic, automated CI/CD pipelines for faster deployments, and enabled cross-framework integration with Blazor through TypeScript automation. Improved delivery timelines through effective offshore collaboration and tool evaluation.`,
    technologies: ["React", "Storybook", "TypeScript", "Azure", "Agile"],
  },
  {
    year: "Aug 2024- Feb 2025",
    role: "Research Engineer",
    company: "AI4SEC Research Lab, Rochester Institute of Technology",
    description: `Developed and optimized deep learning pipelines in Python/PyTorch to evaluate interpretability of image classification models using post-hoc explanation tools (Captum, Quantus) and benchmark datasets. Proposed pruning-based strategies to improve model transparency across architectures like LeNet, VGG-16, and ResNet.`,
    technologies: ["Quantus", "Captum", "PyTorch", "Python"],
  },
  {
    year: "Oct 2022 - Present",
    role: "CADTech Lab Assisstant",
    company: "Rochester Institute of Technology",
    description: `Led Tier-0 support for academic research labs, ensuring minimal downtime through proactive maintenance and prompt troubleshooting of both physical and IT issues in lab equipment.`,
    technologies: ["Keyserver", "Workportal", "Papercut", "Jamf", "Helpdesk"],
  },
  {
    year: "May 2023 - Dec 2023",
    role: "FullStack Engineer Intern",
    company: "Solu Technology Partners",
    description: `Built a full-stack web application using Angular and Spring Boot with secure, role-based access. Accelerated development and testing workflows by automating tests with Selenium, containerizing services with Docker, and deploying test suites on AWS EC2.`,
    technologies: ["Angular", "Springboot", "Node.js", "MongoDB","Selenium", "Docker", "AWS", "Kotlin", "TypeScript"],
  },
  {
    year: "Sep 2018 - Jan 2019",
    role: "Software Engineer Intern",
    company: "Featherwebs Private Limited",
    description: `Developed high-performance cross-platform mobile apps using React Native and Laravel, enhancing user experience across iOS and Android. Improved user satisfaction by 25% through user-centric UI design and streamlined design-to-development workflows.`,
    technologies: ["React Native", "PHP", "MySql", "Adobe XD"],
  },
];

export const PROJECTS = [
  {
    title: "Evaluating Post hoc Explanation Methods for Model Training Strategies",
    image: project6,
    description:
      "This research provides a comprehensive analysis of post-hoc explanation methods to address the transparency issues of AI models for image classification tasks.",
    technologies: ["Python", "PyTorch", "Captum", "Quantus"],
  },
  {
    title: "Real-time Chat Application",
    image: project5,
    description:
      "A real-time chat application utilizing Socket.io for seamless real-time messaging with dynamic theme switching functionality.",
    technologies: ["React.js", "Express.js", "Tailwind CSS", "MongoDB"],
  },
  {
    title: "Vehicle Routing Problem",
    image: project1,
    description:
      "Implements an optimized Ant Colony Optimization algorithm for the Vehicle Routing Problem, resulting in improved route optimization and enhanced performance.",
    technologies: ["Python", "Pandas", "Matplotlib", "Numpy"],
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
  address: "Indianapolis, IN",
  phoneNo: "+1 585 350 6121 ",
  email: "sanish.suwal7@gmail.com",
};
