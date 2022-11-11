const frisby = require("frisby");
require("../env/keycloak-client.env.js");

console.log("host: " + process.env.HOST);
console.log("port: " + process.env.PORT);

const host = process.env.HOST || "localhost";
const port = process.env.PORT || "8080";

const url = `http://${host}:${port}`;

it("user-service is up", () => {
  return frisby
    .get(`${url}/actuator/health`)
    .expect("status", 200)
    .expect("json", "status", "UP");
});

// it("should fetch all users", () => {
//   return frisby
//     .get(`${url}/api/user`)
//     .expect("status", 200)
//     .expect("jsonTypes", frisby.Joi.array());
// });

// it("should fetch user by email", () => {
//   const testEmail = "eam.dayan@gmail.com";
//   return frisby
//     .get(`${url}/api/user/email/a/${encodeURI(testEmail)}`)
//     .expect("status", 200)
//     .expect("json", "email", "eam.dayan@gmail.com")
//     .expect("json", "username", "dayaneam")
//     .expect("jsonTypes", "id", frisby.Joi.string().uuid())
//     .expect("jsonTypes", "email", frisby.Joi.string().email());
// });

// it("should fetch user by username", () => {
//   const username = "dayaneam";
//   return frisby
//     .get(`${url}/api/user/username/${encodeURI(username)}`)
//     .expect("status", 200)
//     .expect("jsonTypes", frisby.Joi.array())
//     .expect("jsonTypes", "0", {
//       id: frisby.Joi.string().uuid(),
//       username: username,
//       email: frisby.Joi.string().email(),
//       firstName: frisby.Joi.string(),
//       lastName: frisby.Joi.string(),
//     });
// });
