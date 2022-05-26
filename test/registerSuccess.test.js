const useUrl = "https://reqres.in/api/register";
const axios = require("axios");
const payload = {
  email: "eve.holt@reqres.in",
  password: "pistol",
};

describe("Test For Register User", () => {

  test("register success", async () => {
    const result = await axios.post(useUrl, payload);
    console.log(result.data);
    expect(result.status).toBe(200);
    console.log(result.status)
    
  });

  test.only("register unsuccess",()=>{
    //const result = await axios.post(useUrl,{email:payload.email})
    //console.log(result)
     axios.post(useUrl,{email:payload.email})
     .then()
     .catch(err=>{
       expect(response.status).toBe(200)
       
       console.log(response.status)
      //  console.log(err.data)
     })
  })
});
