/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hafijul Hoque Chowdhury",
  title: "Hi all, I'm Hafijul!",
  subTitle: emoji(
    "I am Hafijul Hoque Chowdhury, currently in my final semester at BUET, majoring in Computer Science and Engineering. I have a strong passion for machine learning, especially large language models (LLMs), and a deep interest in backend development. I'm currently looking for job or internship opportunities in backend development, machine learning, or database fields."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1el09MVZdjTLf4CCz837_gnSYMEwD9kRL?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Nabidbhai12",
  linkedin: "https://www.linkedin.com/in/nabid-hasan-82a41923a/",
  gmail: "nabid.hasan9870@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle:
    "During my undergraduate years at BUET, I worked on diverse projects ranging from game development to web applications, showcasing my expertise in various frameworks and technologies.",
  skills: [
    emoji(
      "⚡ Developed a complete game **CATCH THE EGG** in C using OpenGL, implementing game mechanics, user interaction, and graphics rendering"
    ),
    emoji(
      "⚡ Built a real-time interactive project using **JavaFX** with networking essentials, facilitating client-server communication"
    ),
    emoji(
      "⚡ Designed and implemented a comprehensive database project using **Node.js**, **Oracle DB**, and **EJS**, focusing on database management and dynamic web content"
    ),
    emoji(
      "⚡ Developed threading mechanisms and memory management for the **xv6 operating system**, improving multitasking and process synchronization"
    ),
    emoji(
      "⚡ Created a complete **ray tracing and rasterization pipeline** using **OpenGL** for advanced 3D graphics rendering"
    ),
    emoji(
      "⚡ Built **UrbanNest**, a full-stack web application for buying and selling apartments using **Node.js**, **PostgreSQL**, and **React**"
    ),
    emoji(
      "⚡ Developed a subset of a **C compiler**, implementing lexical analysis, parsing, and code generation"
    ),
    emoji(
      "⚡ Built a doctor appointment booking system using **Spring Boot** with integrated scheduling and management functionalities"
    )
  ],
  softwareSkills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    // Removing Svelte as Font Awesome does not support its icon
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "springboot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bangladesh University of Engineering and Technology (BUET)",
      subHeader: "Bachelor of Science in Computer Science and Engineering",
      duration: "March 2020 - January 2025",
      desc: "CGPA: 3.81"
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development (Node.js, Spring Boot, Python, C, C++)", // Insert stack or technology you have experience in
      progressPercentage: "85%" // Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend Development (React, Svelte, JavaFX)",
      progressPercentage: "75%"
    },
    {
      Stack: "Databases (PostgreSQL, MongoDB, Oracle)",
      progressPercentage: "75%"
    },
    {
      Stack: "Machine Learning & LLMs (PyTorch)",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section
};

// Open Source Section
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

// Contact Info Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+8801760830558", // Update this to your real number
  email_address: "nabid.hasan987@gmail.com" // Update this to your real email
};
//kkk

const isHireable = true; // Set false if you are not looking for a job

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  openSource,
  contactInfo,
  isHireable,
  resumeSection
};
