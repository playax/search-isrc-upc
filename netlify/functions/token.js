exports.handler = async function () {

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        `Basic ${process.env.SPOTIFY_TOKEN}`,
    },
    body: new URLSearchParams({ grant_type: "client_credentials" }),
  };

  console.log({options})

  const response = await (await fetch("https://accounts.spotify.com/api/token", options)).json()

  console.log({response})

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
