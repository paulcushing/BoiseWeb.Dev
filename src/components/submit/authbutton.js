function getAuth() {
  window.location =
    "https://github.com/login/oauth/authorize?client_id=e3a0e0ef82a3ba51b438&redirect_uri=https://www.boiseweb.dev/submit&state&login&allow_signup=true";
}

export default function AuthButton() {
  return (
    <button
      className="shadow bg-blue-700 hover:bg-blue-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      type="button"
      onClick={getAuth}
    >
      Authorize Github
    </button>
  );
}
