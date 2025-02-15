import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting Large scale enterprise web applications. With 2 years of hands-on experience primarily on Back-end Development, I have honed my skills mainly in Back-end technologies like SpringBoot, Node.js, MySQL and MongoDb as well as front-end technologies like Javascript, React, Tailwind CSS and Angular.`;

export const ABOUT_TEXT = `I am a dedicated and Aspiring full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience majorly in Backend technology, I have worked with a variety of technologies, including Java, SpringBoot, Node.js, MySQL, Oracle Databases, and MongoDB. Also personally developed interest in front-end technologies building personal projects mentioned below. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions and working on Cutting edge Technologies.`;

export const EXPERIENCES = [
  {
    year: "Oct 2022 - Oct 2024",
    role: "Systems Engineer",
    company: "Infosys",
    description: `Contributed as team member in developing and maintaining Ebanking Enterprise applications  for Islamic Banks -Bank Muscat, Meethaq bank and Sharjha Bank using Java, Node.js and Oracle Database. Implemented RESTful APIs and integrated with third party vendors Such as T24 Systems and some AML(Anti Money Laundering) Services. Collaborated with stakeholders to define project requirements and timelines through out the Development life Cycle.`,
    technologies: ["Java","Node.js", "SpringBoot", "MySQL", "RESTful API's"],
  }
];

export const PROJECTS = [
  {
    url:"#",
    title: "Personal Portfolio",
    image: project1,
    description:
      "A fully Resopnsive portfolio website showcasing the Frontend Development Skills and Hosted on AWS EC2 Instance",
    technologies: ["React","Tailwind CSS","Javascript"],
  },
  {
    url:"http://13.61.9.132/",
    title: ".Connect",
    image: project2,
    description:
    "A Tinder inspired FullStack Application deployed on AWS EC2 Instance, with features such as SignUp, Login, Feed, Sending and Managing Connection requests, Updating profile. Through this project I became familiar with Redux store, React form handling, JWT athentications, Middleware, Using third party Image Storage SDK's (Cloudinary) Concepts.",
    technologies: ["React", "Redux Toolkit", "Node.js", "MongoDb"],
  }
];

export const CONTACT = {
  address: "Kaggaladu, Sira Taluk, Tumakuru District, karnataka, India",
  phoneNo: "+91 7975490341",
  email: "sathishk1632@gmail.com ",
};
