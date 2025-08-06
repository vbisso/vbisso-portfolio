import ProjectCard from "./ProjectCard";

const projects = [
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
  {
    title: "Refridge-alert",
    imgSrc: "/assets/img/refridge-alert.png",
    description:
      "React Native mobile app with local data storage and modular structure.",
    githubUrl: "https://github.com/vbisso/refridge-alert",
  },
  {
    title: "Miami Chamber of Commerce",
    imgSrc: "/assets/img/miami-chamber.png",
    description: "Static website using weather API and interactive forms.",
    viewUrl: "https://vbisso.github.io/wdd230/chamber/index.html",
    githubUrl: "https://github.com/vbisso/wdd230/tree/master/chamber",
  },
  {
    title: "CaliCast",
    imgSrc: "",
    description:
      "Weather data dashboard using Shiny, Python, and a cloud database.",
    githubUrl: "https://github.com/callalilyleaf/CaliCast",
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
