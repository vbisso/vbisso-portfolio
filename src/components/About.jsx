import {
  FaCode,
  FaCogs,
  FaDatabase,
  FaTools,
  FaCertificate,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-1 text-stone-900 bg-stone-200 py-10"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* image + Bio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="/assets/img/profile.jpg"
              alt="Profile"
              className="w-3/4 md:w-[90%] rounded-lg shadow-lg object-cover border-4 border-white"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl sm:text-6xl font-bold">
              👋 Hi, I’m Valeria
            </h2>
            <p className="leading-relaxed text-stone-700">
              I’m a web developer passionate about transforming UI/UX designs
              into reality . I love creating intuitive human-centered digital
              experiences that are both clean and modern. For me, building is
              more than code—it’s about turning ideas into products people enjoy
              using.
            </p>

            <a
              href="/assets/docs/Valeria Bisso-2025.pdf"
              download
              className="inline-block mt-4 px-6 py-3 bg-lavander text-stone-900 font-semibold rounded-lg shadow hover:-translate-y-1 hover:shadow-lg transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-stone-800">
              <FaCode /> Languages
            </h3>

            <p className="text-stone-600">
              HTML, CSS, JavaScript, TypeScript, C#, Python, SQL
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-stone-800">
              <FaCogs /> Frameworks
            </h3>

            <p className="text-stone-600">
              React, Angular, Next.js, React Native, Express.js, Tailwind CSS
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-stone-800">
              <FaTools /> Tools
            </h3>

            <p className="text-stone-600">
              Node.js, Vite, Git/GitHub, npm, VS Code, JetBrains Rider,Postman,
              Swagger, Vercel, Render
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-stone-800">
              <FaDatabase /> Databases
            </h3>
            <p className="text-stone-600">PostgreSQL, MongoDB, MySQL</p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-stone-800">
              ⚡ Practices
            </h3>

            <p className="text-stone-600">
              RESTful API design, Automated testing (Jest), Continuous
              Integration (CI/CD), Agile (Scrum), Extreme Programming (XP),
              DevOps principles
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-stone-800">
              <FaCertificate /> Certifications
            </h3>

            <p className="text-stone-600">AWS Certified Cloud Practitioner</p>
          </div>
        </div>
      </div>
    </section>
  );
}
