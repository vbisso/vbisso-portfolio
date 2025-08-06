export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-15 sm:scroll-mt-20 bg-stone-200 text-stone-900 pb-15 md:pb-0"
    >
      <div className="w-3/4 md:w-9/10 lg:w-3/4 mx-auto lg:pt-10 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div>
          <img
            src="/assets/img/profile.jpg"
            alt="Profile"
            className="w-3/4 md:w-9/10"
          />
        </div>
        <div>
          <h2 className="text-3xl sm:text-6xl">Hello!</h2>
          <p>
            I'm Valeria, a web developer with a love for UI/UX design and clean,
            modern code. I’m all about making the internet a more beautiful
            place. Outside of coding, you might catch me with a good book or
            experimenting with new ways to entertain my cat!
          </p>
          <ul className="list-disc list-outside">
            <li>
              <strong>Languages:</strong> HTML, CSS, JavaScript, TypeScript, C#,
              Python, SQL
            </li>
            <li>
              <strong>Frameworks:</strong> React, React Native, Node.js,
              Express, TailwindCSS
            </li>
            <li>
              <strong>Tools:</strong> Git/GitHub, npm, VS Code, JetBrains Rider,
              Vite
            </li>
            <li>
              <strong>Methodologies:</strong> Agile (Scrum), XP, DevOps
            </li>
          </ul>
          <p>
            Download my resume{" "}
            <a
              className="font-bold"
              href="/assets/docs/Valeria Bisso - Resume.pdf"
              download
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
