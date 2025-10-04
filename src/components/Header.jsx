export default function Header() {
  return (
    <nav className="fixed top-0 mx-auto justify-self-center sm:right-0 z-100 bg-lavander backdrop-blur-sm px-6 py-4 rounded-b-2xl sm:rounded-bl-2xl sm:rounded-br-none shadow-md">
      <ul className="flex flex-row items-center gap-6 sm:gap-10 sm:text-lg font-medium text-stone-900">
        <li>
          <a
            href="#home"
            className="relative px-2 py-1 hover:text-stone-200 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-stone-200 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="relative px-2 py-1 hover:text-stone-200 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-stone-200 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="relative px-2 py-1 hover:text-stone-200 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-stone-200 after:transition-all after:duration-300 hover:after:w-full"
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
