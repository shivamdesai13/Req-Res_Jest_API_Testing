const axios = require("axios");
const userURL = "https://reqres.in/api/users/2";  

describe.only("Test For Delete a User", () => {
  it("Should return res Deleted Object", async () => {

    const result = await axios.delete(userURL);

    expect(result.status).toEqual(204);
    console.log(result.status)
  });
});