import Image from "next/image";

export default function Person(props) {
  const { person } = props;

  const truncateLength = 300;

  const myLoader = ({ src, width, quality }) => {
    return `https://boiseweb.dev/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className="p-6 block max-w-md">
      <Image
        loader={myLoader}
        alt="placeholder"
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
          className={"grid grid-cols-" + person.links.length + " gap-4 mt-6"}
        >
          {person.links.map((link, index) => {
            return (
              <div key={index} className="text-center text-xl">
                <a
                  href={link.url}
                  className="text-blue-700 hover:text-blue-900"
                >
                  <i className={link.icon}></i>
                </a>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
