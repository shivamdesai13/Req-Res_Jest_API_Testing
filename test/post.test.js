const userURL = "https://reqres.in/api/users";    
const axios = require("axios");
const tempString = {
  "name": "morpheus",
  "job": "leader"
}
describe("Test For POST User", () => {
  it("Should return status 200", async () => {
    const result = await axios.post(userURL, tempString);
    console.log(result.data)
    expect(result.status).toEqual(201);                 //Check if res status is 200
   
  });
  it("StatusText should be Created", async () => {
    const result = await axios.post(userURL, tempString);
    expect(result.statusText).toEqual("Created");
    expect(result.data.name).toHaveLength(8);
    expect(result.data.id).not.toBeNull()
    
  });
  it("Should return a object as response", async () => {
    const result = await axios.post(userURL, tempString);
    expect(result.data).toBeInstanceOf(Object);         //Check if data is objects
  });
});