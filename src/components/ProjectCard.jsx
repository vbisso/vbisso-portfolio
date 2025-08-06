export default function ProjectCard({
  imgSrc,
  title,
  description,
  viewUrl,
  githubUrl,
}) {
  return (
    <div className="bg-stone-50 px-5 py-5 w-full sm:w-[48%] lg:w-[30%] flex flex-col justify-between rounded-3xl text-center gap-5 shadow-md">
      {imgSrc && (
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-60 object-cover rounded-2xl"
        />
      )}
      <div className="flex-grow">
        <h3 className="font-bold text-lg sm:text-2xl mb-2">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="flex justify-center gap-5">
        {viewUrl && (
          <a
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2"
          >
            <div className="bg-stone-900 px-3 py-2 rounded-3xl text-stone-50 text-center font-bold">
              View
            </div>
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2"
          >
            <div className="bg-stone-900 px-3 py-2 rounded-3xl text-stone-50 text-center font-bold">
              GitHub
            </div>
          </a>
        )}
      </div>
    </div>
  );
}
