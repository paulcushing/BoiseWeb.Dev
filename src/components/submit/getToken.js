import Cookies from "js-cookie";

export default function getToken(props) {
  const { code, setToken } = props;
  let hasRun = false;
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  if (code && !hasRun) {
    hasRun = true;
    console.log("Running");
    fetch(`/api/auth?code=${code}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        Cookies.set("ghUserToken", result.access_token, {
          expires: 7,
        });
        setToken(result.access_token);
      })
      .catch((error) => {
        console.log(error);
        return <p>Error: {error}</p>;
      });

    return <p>Loading...</p>;
  } else {
    return;
  }
}
