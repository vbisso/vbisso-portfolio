export default function Header() {
  return (
    <div className="sm:fixed z-10 w-full top-0 flex flex-row justify-end gap-4 p-4 pt-0 text-stone-200">
      <ul className="flex flex-row bg-lavander rounded-2xl rounded-t-none px-5 py-4 sm:px-10 sm:pt-4 sm:text-xl text-stone-900">
        <li className="px-4">
          <a href="#home">Home</a>
        </li>
        <li className="px-4">
          <a href="#about">About</a>
        </li>
        <li className="px-4">
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </div>
  );
}
