export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-20 text-stone-900 py-16 bg-stone-200"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/assets/img/profile.jpg"
            alt="Profile"
            className="w-3/4 md:w-[90%] rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text */}
        <div className="px-4">
          <h2 className="text-3xl sm:text-6xl font-bold">Hello!</h2>
          <p className="leading-relaxed">
            I'm Valeria, a web developer with a love for UI/UX design and clean,
            modern code. I love turning ideas into intuitive, beautiful digital
            experiences. Outside of coding, you might catch me with a good book
            or experimenting with new ways to entertain my cat!
          </p>

          <ul className="mt-5 space-y-2">
            <p className="mb-2 font-semibold">Technologies I've worked with:</p>

            <li>
              <strong>Languages:</strong> HTML, CSS, JavaScript, TypeScript, C#,
              Python, SQL
            </li>
            <li>
              <strong>Frameworks & Libraries:</strong> React, Next.js, React
              Native, Express.js, Tailwind CSS
            </li>
            <li>
              <strong>Platforms & Tools:</strong> Node.js, Vite, Git/GitHub,
              npm, VS Code, JetBrains Rider, Vercel, Render
            </li>
            <li>
              <strong>Databases:</strong> PostgreSQL, MongoDB
            </li>
            <li>
              <strong>Practices:</strong> Agile (Scrum), Extreme Programming
              (XP), DevOps principles
            </li>
            <li>
              <strong>Certifications:</strong> AWS Certified Cloud Practitioner
            </li>
          </ul>

          <p>
            Download my latest resume{" "}
            <a
              className="font-bold text-blue-600 hover:underline"
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
