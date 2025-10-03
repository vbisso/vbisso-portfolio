import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Alpine Trail Co.",
    imgSrc: "/assets/img/alpinetrailco.png",
    description:
      "I helped Alpine Trail Co. build their online presence by developing a modern, responsive website for their premium off-road accessories. The project involved creating reusable UI components with React + TypeScript, styling with Tailwind CSS, and deploying on Vercel.",
    viewUrl: "https://alpinetrailco.com/",
    githubUrl: "https://github.com/vbisso/soap-shop-cse340",
  },
  {
    title: "Kitchen-Keeper",
    imgSrc: "./public/assets/img/kitchen-keeper.png",
    description:
      "Full-stack React Native app with Express and MongoDB backend, barcode scanning via external API, and AI-powered data cleaning pipeline.",
    githubUrl: "https://github.com/vbisso/kitchen-keeper",
  },
  {
    title: "Soap Shop Web Application",
    imgSrc: "/assets/img/soap_shop.png",
    description:
      "A full-stack e-commerce site using Node.js, Express, PostgreSQL, and EJS.",
    viewUrl: "https://soap-shop-cse340.onrender.com/",
    githubUrl: "https://github.com/vbisso/soap-shop-cse340",
  },
  {
    title: "To-Do List",
    imgSrc: "/assets/img/to-do.png",
    description: "A clean and dynamic React app with full CRUD functionality.",
    viewUrl: "https://vbisso.github.io/to-do-list/",
    githubUrl: "https://github.com/vbisso/to-do-list",
  },
  {
    title: "Island Park Expeditions",
    imgSrc: "/assets/img/ipe.png",
    description: "Static web app with modular JS and EJS templating.",
    viewUrl: "https://ip-expeditions.netlify.app/",
    githubUrl: "https://github.com/vbisso/IPE",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen scroll-mt-15 sm:scroll-mt-20 bg-stone-200 text-stone-900 pb-15 md:pb-0"
    >
      <h2 className="text-3xl sm:text-5xl text-center mb-10">
        Check out some of my projects!
      </h2>
      <div className="my-5 flex flex-col sm:flex-row flex-wrap justify-center gap-10 sm:gap-8 lg:gap-10 sm:w-11/12 mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
