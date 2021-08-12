import Head from "next/head";
import People from "../components/people";

export default function Home() {
  return (
    <div id="body-container" className="w-full">
      <Head>
        <title>
          BoiseWeb.Dev - Discover the internet intellects of the Boise area
        </title>
        <link rel="stylesheet" href="/fa/css/all.min.css" />
        <meta name="description" content="The Web Developers of Boise, Idaho" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative mt-10 z-10 text-gray-100">
        <header className="mb-8">
          <h1 className="text-4xl text-center">
            Welcome to{" "}
            <a
              className="text-blue-700 hover:text-blue-900"
              href="https://boiseweb.dev"
            >
              BoiseWeb.Dev
            </a>
          </h1>
        </header>

        <div className="mx-auto mb-20 px-8">
          <p className="text-center text-lg">
            Learn about some of the amazing Web Developers in Boise.</p>
          <p className="text-center">If YOU are
            a dev and would like to join this list, submit your name via Github.{" "}
            <a
              className="text-blue-700 hover:text-blue-900"
              href="https://github.com/paulcushing/BoiseWeb.Dev"
            >
              Learn more &rarr;
            </a>
          </p>
        </div>

        <div className="flex flex-row flex-wrap justify-center">
          <People />
        </div>
      </main>

      <footer className="mt-40 mb-10 text-center text-gray-100">
        <a
          href="https://www.thepaulcushing.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg"
        >
          Brought to you by{" "}
          <span className="text-blue-700 hover:text-blue-900">
            Paul Cushing
          </span>
        </a>
      </footer>
    </div>
  );
}
