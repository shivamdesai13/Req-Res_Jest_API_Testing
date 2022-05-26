const baseUrl = "https://reqres.in/api/login";
const AXIOS = require("axios");

const payload = {
  email: "eve.holt@reqres.in",  
  password: "cityslicka",
};

describe("Test For Login Success", () => {
  test("user login successful", async () => {
    const response = await AXIOS.post(baseUrl, payload);
    console.log(response.data);
    expect(response.status).toBe(200);
  });
});
