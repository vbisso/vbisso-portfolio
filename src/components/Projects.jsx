import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Alpine Trail Co.",
    imgSrc: "/assets/img/alpinetrailco.png",
    description:
      "Built a modern, responsive website for a premium off-road accessories company using React, TypeScript, Tailwind, and deployed on Vercel.",
    viewUrl: "https://alpinetrailco.com/",
    githubUrl: "https://github.com/vbisso/soap-shop-cse340",
  },
  {
    title: "Kitchen Keeper",
    imgSrc: "/assets/img/kitchen-keeper.png",
    description:
      "Full-stack React Native app with Express and MongoDB backend, barcode scanning via external API, and AI-powered data cleaning pipeline.",
    githubUrl: "https://github.com/vbisso/kitchen-keeper",
  },
  {
    title: "Soap Shop Web Application",
    imgSrc: "/assets/img/soap_shop.png",
    description:
      "Full-stack e-commerce site built with Node.js, Express, PostgreSQL, and EJS.",
    viewUrl: "https://soap-shop-cse340.onrender.com/",
    githubUrl: "https://github.com/vbisso/soap-shop-cse340",
  },
  {
    title: "To-Do List",
    imgSrc: "/assets/img/to-do.png",
    description:
      "Clean and dynamic React app with full CRUD functionality and modern UI.",
    viewUrl: "https://vbisso.github.io/to-do-list/",
    githubUrl: "https://github.com/vbisso/to-do-list",
  },
  {
    title: "Island Park Expeditions",
    imgSrc: "/assets/img/ipe.png",
    description:
      "Static web app with modular JS and EJS templating for local tour company.",
    viewUrl: "https://ip-expeditions.netlify.app/",
    githubUrl: "https://github.com/vbisso/IPE",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen scroll-mt-10 bg-stone-200 text-stone-900 py-10"
    >
      <h2 className="text-3xl sm:text-5xl text-center font-bold mb-20">
        Check out some of my projects!
      </h2>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
