exports.handler = async function (event, context) {

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        `Basic ${process.env.SPOTIFY_TOKEN}`,
    },
    body: new URLSearchParams({ grant_type: "client_credentials" }),
  };

  const response = await fetch("https://accounts.spotify.com/api/token", options)

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
