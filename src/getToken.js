require("../env/user-api.env.js");
const fetch = require("node-fetch");

async function getToken() {
  const oauthCredentials = {
    grant_type: "password",
    username: "dayan",
    password: "pass",
    client_id: "orderup-microservices",
    client_secret: "Q11HgVeV1aJSY4hzyDTUrtjwHYqlvcKV",
  };

  const token = await fetch(
    "https://orderup.homes/auth/realms/orderup-tower/protocol/openid-connect/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(oauthCredentials),
    }
  );
  const tokendata = token.json()
  console.log("fetched token: ",tokendata)

  return tokendata;
}

module.exports = { getToken };
