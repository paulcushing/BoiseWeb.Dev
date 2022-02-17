async function getAccessToken(code) {
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_API_SECRET}&code=${code}&redirect_uri=https://www.boiseweb.dev/submit`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
}

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      const code = req.query.code;
      if (!code) {
        res.status(405).end();
      } else {
        getAccessToken(code)
          .then((result) => {
            const ghResponse = JSON.parse(result);
            console.log(ghResponse);
            if (ghResponse.error) {
              res.status(400).json({ error: ghResponse.error });
            } else {
              res.status(200).json({
                access_token: ghResponse.access_token,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
      break;
    default:
      res.status(405).end();
      break;
  }
}
