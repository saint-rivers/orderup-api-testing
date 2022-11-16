const frisby = require('frisby');
const apiUtils = require("../src/getToken")
const fetch = require("node-fetch");

const url = "http://154.26.130.185:8080"

it("should fail authentication", function () {
    return frisby.get(`${url}/api/v1/groups`)
        .expect("status", 401)
})

it("should get groups", function () {
    const oauthCredentials = {
        grant_type: "password",
        username: "dayan",
        password: "pass",
        client_id: "orderup-microservices",
        client_secret: "Q11HgVeV1aJSY4hzyDTUrtjwHYqlvcKV",
    };

    const token = fetch(
        "https://orderup.homes/auth/realms/orderup-tower/protocol/openid-connect/token",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(oauthCredentials),
        }
    ).then(response => response.json())
    // const tokendata = token.json()
    // console.log("fetched token: ", tokendata)

    console.log(token);
    return frisby
        .setup({
            request: {
                headers: {
                    Authorization: "Bearer " + token,
                },
            },
        })
        .get(`${url}/api/v1/groups`)
        .expect("status", 200)
    // .expect("jsonTypes", frisby.Joi.array())
})

