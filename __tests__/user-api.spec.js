// import { getToken } from "../src/getToken";
const apiUtils = require("../src/getToken");
const frisby = require("frisby");

const host = "localhost";
const port = "6070";
const tokenEndpoint = process.env.AUTH_SERVER_TOKEN_ENDPOINT || "";

const url = `http://${host}:${port}`;

it("user-service is up", () => {
  return frisby
    .get(`${url}/actuator/health`)
    .expect("status", 200)
    .expect("json", "status", "UP");
});

// it("can register user", () => {
//   const postData = {
//     username: "dayaneam",
//     name: "dayan",
//     email: "eam.dayan@gmail.com",
//     profileImage:
//       "https://hips.hearstapps.com/esquire/assets/16/28/1468416014-rami-mr-robot.JPG",
//     gender: "male",
//     phoneNumber: "068400678",
//     role: "USER",
//     password: "password",
//     isActivated: true,
//   };
//   return frisby.post(`${url}/api/v1/users`, postData).expect("status", 200);
// });

it("should get user by email", () => {
  const token = apiUtils.getToken();
  console.log("token", token);
  return frisby
    // .setup({
    //   request: {
    //     headers: {
    //       // "Content-Type": "application/x-www-form-urlencoded",
    //       Authorization: "Bearer " + token,
    //     },
    //   },
    // })
    .get(`${url}/api/v1/users?email=eam.dayan@gmail.com`)
    .expect("status",200);
});

it("should get ")