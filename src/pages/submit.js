import Head from "next/head";
import SubmitForm from "../components/submit/submitform";
import AuthButton from "../components/submit/authbutton";
import { useEffect, useState } from "react";
import GetToken from "../components/submit/getToken";

export default function Home() {
  const [token, setToken] = useState(null);
  const [code, setCode] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setCode(urlParams.has("code") ? urlParams.get("code") : null);
    window.history.replaceState({}, document.title, "/submit");
  }),
    [];

  return (
    <div id="body-container" className="w-full">
      <Head>
        <title>
          BoiseWeb.Dev - Discover the internet builders of the Boise area
        </title>
        <meta name="description" content="The Web Developers of Boise, Idaho" />
      </Head>

      <main className="relative mt-10 z-10 text-gray-100">
        <header className="mb-8">
          <h1 className="text-4xl text-center">
            Ready to join{" "}
            <a
              className="text-blue-700 hover:text-blue-900"
              href="https://www.boiseweb.dev"
            >
              BoiseWeb.Dev
            </a>
            ?
          </h1>
        </header>

        <div className="flex flex-row flex-wrap justify-center">
          {code && !token ? <GetToken code={code} setToken={setToken} /> : null}
          {token ? <SubmitForm /> : <AuthButton />}
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
