import Image from "next/image";

export default function Person(props) {
  const { person } = props;

  const truncateLength = 300;

  return (
    <div className="p-6 block max-w-md">
      <Image
        alt={person.name}
        src={"/images/" + person.image}
        height={400}
        width={400}
        className="max-w-full rounded-2xl"
      />
      <a href="https://nextjs.org/docs" className="">
        <h2 className="text-xl">{person.name}</h2>
        <p>
          {person.description.substring(0, truncateLength)}
          {person.description.substring(truncateLength, truncateLength + 1)
            ? "..."
            : null}
        </p>
      </a>
      {person.links && person.links.length > 0 ? (
        <div
          className={"flex flex-row flex-wrap justify-center mt-6"}
        >
          {person.links.map((link, index) => {
            return (
              <div key={index} className="text-center text-xl mx-10">
                <a
                  href={link.url}
                  className="text-blue-700 hover:text-blue-900"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={link.icon} />
                </a>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
