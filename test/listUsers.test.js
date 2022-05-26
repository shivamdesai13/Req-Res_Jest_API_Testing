const baseUrl = "https://reqres.in/api/users?page=2";
const AXIOS = require ('axios');

describe("Test To Show All User List",()=>{
    it("should return user list", async()=>{

        const response = await AXIOS.get(baseUrl)
        expect(response.status).toEqual(200)
        console.log(response.data)
        expect(response.data).toBeInstanceOf(Object)
        //expect(response.data.email).toEqual(expect.any(String))

    })
})