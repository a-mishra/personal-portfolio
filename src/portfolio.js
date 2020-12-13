/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Ashutosh Mishra",
  logo_name: "AshutoshMishra",
  nickname: "a-mishra 👋",
  subTitle:
    "A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.",
  resumeLink:
    "https://drive.google.com/file/d/1LVWbQcvEkq0NfR-dFLt-AsRssAB67Bof/view?usp=sharing",
  portfolio_repository: "https://github.com/a-mishra/masterPortfolio",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/a-mishra",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/a-mishra/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCjEVhaKJ82bOPFq3p3C6TUg",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:ashutosh.m812@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/_a_mishra_",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/ashutosh.m812/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_a_mishra_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Creating application backend in Node, Express & Laravel",
        "⚡ Hands-on with development and workflow tools as npm, webpack, jira, bitbucket & jenkins."
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#44B7D4",
          },
        },
                {
          skillName: "Materail-UI",
          fontAwesomeClassname: "simple-icons:material-ui",
          style: {
            color: "#1481CB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Webpack",
          fontAwesomeClassname: "simple-icons:webpack",
          style: {
            color: "#1C75BA",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#0576C5",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#E84C43",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#25476C",
          },
        },
        // {
        //   skillName: "Jenkins",
        //   fontAwesomeClassname: "simple-icons:jenkins",
        //   style: {
        //     color: "#6A686A",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E84E31",
          },
        }
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Native to Linux enviroment.",
        "⚡ Excellent skills with databases SQL or NoSQL.",
        "⚡ Experience in deploying failover systems."
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#645FA1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#181717",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for web applications",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        // {
        //   skillName: "Adobe XD",
        //   fontAwesomeClassname: "simple-icons:adobexd",
        //   style: {
        //     color: "#FF2BC2",
        //   },
        // },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        // {
        //   skillName: "Adobe Illustrator",
        //   fontAwesomeClassname: "simple-icons:adobeillustrator",
        //   style: {
        //     color: "#FF7C00",
        //   },
        // },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#011E35",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@a_mishra",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/_a_mishra_",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/amishra812",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/a-mishra",
    }
  ],
};

const degrees = {
  degrees: [
    {
      title: "Guru Gobind Singh Indraprashtha University",
      subtitle: "B.Tech. in Electronics & Communication",
      logo_path: "ggsipu_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2013 - 2017",
      descriptions: [
        "⚡ I have studied basic engineering subjects like Networks, Communications (D/A), Maths, Algorithms, DBMS, Linux Administration etc.",
        "⚡ Apart from this, I have done courses on Algorithms, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was also a member of in-house electonics club 'Synergy' and we developed various intresting avionics projects.",
      ],
      website_link: "https://ipu.ac.in",
      score:"72.50 %"
    },
    {
      title: "Saraswati Bal Mandir Sr. Sec. School, Punjabi Bagh, Delhi",
      subtitle: "High School, Science (PCM-CS)",
      logo_path: "ssdsbm_logo.png",
      alt_name: "SBM PB",
      duration: "2012 - 2013",
      descriptions: [
        "⚡ I have studied basic Physics, Chemistry, Mathematics and Fundamentals of Computer Science.",
        "⚡ I was also a member of sports club and did participated in many inter-school sports events.",
      ],
      website_link: "http://www.sbmpb.com/school.html.html",
      score:"82.20 %"
    },
  ],
};

const certifications = {
  // certifications: [
  //   {
  //     title: "Machine Learning",
  //     subtitle: "- Andrew Ng",
  //     logo_path: "stanford_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
  //     alt_name: "Stanford University",
  //     color_code: "#8C151599",
  //   },
  //   {
  //     title: "Deep Learning",
  //     subtitle: "- Andrew Ng",
  //     logo_path: "deeplearning_ai_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
  //     alt_name: "deeplearning.ai",
  //     color_code: "#00000099",
  //   },
  //   {
  //     title: "ML on GCP",
  //     subtitle: "- GCP Training",
  //     logo_path: "google_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
  //     alt_name: "Google",
  //     color_code: "#0C9D5899",
  //   },
  //   {
  //     title: "Data Science",
  //     subtitle: "- Alex Aklson",
  //     logo_path: "ibm_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
  //     alt_name: "IBM",
  //     color_code: "#1F70C199",
  //   },
  //   {
  //     title: "Big Data",
  //     subtitle: "- Kim Akers",
  //     logo_path: "microsoft_logo.png",
  //     certificate_link:
  //       "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
  //     alt_name: "Microsoft",
  //     color_code: "#D83B0199",
  //   },
  //   {
  //     title: "Advanced Data Science",
  //     subtitle: "- Romeo Kienzler",
  //     logo_path: "ibm_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
  //     alt_name: "IBM",
  //     color_code: "#1F70C199",
  //   },
  //   {
  //     title: "Advanced ML on GCP",
  //     subtitle: "- GCP Training",
  //     logo_path: "google_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
  //     alt_name: "Google",
  //     color_code: "#0C9D5899",
  //   },
  //   {
  //     title: "DL on Tensorflow",
  //     subtitle: "- Laurence Moroney",
  //     logo_path: "deeplearning_ai_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
  //     alt_name: "deeplearning.ai",
  //     color_code: "#00000099",
  //   },
  //   {
  //     title: "Fullstack Development",
  //     subtitle: "- Jogesh Muppala",
  //     logo_path: "coursera_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
  //     alt_name: "Coursera",
  //     color_code: "#2A73CC",
  //   },
  //   {
  //     title: "Kuberenetes on GCP",
  //     subtitle: "- Qwiklabs",
  //     logo_path: "gcp_logo.png",
  //     certificate_link:
  //       "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
  //     alt_name: "GCP",
  //     color_code: "#4285F499",
  //   },
  //   {
  //     title: "Cryptography",
  //     subtitle: "- Saurabh Mukhopadhyay",
  //     logo_path: "nptel_logo.png",
  //     certificate_link:
  //       "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
  //     alt_name: "NPTEL",
  //     color_code: "#FFBB0099",
  //   },
  //   {
  //     title: "Cloud Architecture",
  //     subtitle: "- Qwiklabs",
  //     logo_path: "gcp_logo.png",
  //     certificate_link:
  //       "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
  //     alt_name: "GCP",
  //     color_code: "#4285F499",
  //   },
  // ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Proficiency, Work and Volunteership",
  description:
    "I have worked with evolving startups as a Designer and Frontend Developer. I have also worked with well established organisation as a Full Stack Developer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Senior Product Engineer",
          company: "Ameyo",
          company_url: "https://www.linkedin.com/company/ameyocim/about/",
          logo_path: "ameyo_logo.png",
          duration: "Nov 2019 - PRESENT",
          location: "Gurugram, Haryana",
          description:
            "I am working on projects related to Contact Center Solutions. These projects involves Video KYC Solution and Cloud IVR Solution. Both of these projects were very important to breach the market during Covid pandemic.",
          color: "#0879bf",
        },
        {
          title: "Product Engineer",
          company: "Drishti Software Solutions",
          company_url: "https://www.linkedin.com/company/ameyocim/about/",
          logo_path: "drishti_logo.png",
          duration: "Nov 2017 - Oct 2019",
          location: "Gurugram, Haryana",
          description:
            "Worked as a Full Stack Developer. Developed new features to add business capabilities in Ameyo products. Developing new feature includes - discussions with Product Managers, designing [HLD + LLD], implementing it end to end.",
          color: "#9b1578",
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "Nov 2020 - PRESENT",
          location: "Work From Home",
          description:
            "I have started contributions to opensource projects ( This was awaited for a long time!!! ).",
          color: "#181717",
        },
      ],
    },
  ],
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "70%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "65%"
    }
  ]
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ashutosh_dynamic.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, PHP, Cloud and Opensource Development.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle:
      "Sector 23, Gurugram, Haryana - 122017",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/TvVpZmFE8WqkwMN59",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9773965450",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  techStack,
  projectsHeader,
  contactPageData,
};
