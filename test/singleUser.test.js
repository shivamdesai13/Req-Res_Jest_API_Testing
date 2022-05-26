const baseUrl = "https://reqres.in/api/users/2"
const axios = require("axios")

describe("Test to show Single User Detail",()=>{
    test("show user detail",async()=>{
        const response = await axios.get(baseUrl)
        expect(response.status).toEqual(200)
        console.log(response.data)
    })
})