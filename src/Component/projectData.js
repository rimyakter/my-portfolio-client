// projectData.js
import bloodbank from "../assets/projects/bloodbank.png";
import b2b from "../assets/projects/B2BWholesale.png";
import roommate from "../assets/projects/roommateFinder.png";
export const projects = [
  {
    id: 1,
    name: "Blood Bridge",
    image: bloodbank,
    techStack: [
      "React",
      "TailwindCSS",
      "Firebase",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    description:
      "A full-stack Blood Management Application with (Admin,Volunteer,Donor) Three Dashboard and funding feature using Stripe integration.",
    liveLink: "https://blood-bridge-63fb5.web.app",
    githubLink: "https://github.com/rimyakter/my_assignment_12_client",
    challenges:
      "Managing global state and handling 3 users dashboard securely.",
    improvements: "Add user reviews and wishlist functionality.",
  },
  {
    id: 2,
    name: "B2B Wholesale",
    image: b2b,
    techStack: [
      "React",
      "TailwindCSS",
      "Firebase",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    description:
      "A E-commerce platform where users can choose and Buy Products.",
    liveLink: "https://b2b-wholesale-d8558.web.app",
    githubLink: "https://github.com/rimyakter/my_assignment_11_client",
    challenges: "Authentication and real-time data synchronization.",
    improvements: "Implement payment gateway section integration.",
  },

  {
    id: 3,
    name: "Roommate Finder",
    image: roommate,
    techStack: [
      "React",
      "TailwindCSS",
      "Firebase",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    description: "A platform where users can find there roommates.",
    liveLink: "https://roommate-finder-256be.web.app",
    githubLink: "https://github.com/rimyakter/my_assignment_10_client",
    challenges: "Authentication and real-time data synchronization.",
    improvements: "Implement blog section and wishlist",
  },
];
