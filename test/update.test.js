const baseUrl = "https://reqres.in/api/users/2";
const AXIOS = require ('axios')

const payload = {
    "name": "morpheus",
    "job": "zion resident"
}

describe("test for updating user",()=>{
    test("update successful",async()=>{
        const response = await AXIOS.patch(baseUrl,payload);
        console.log(response.data)
        expect(response.data).not.toBeNull()
        expect(response.data).toBeInstanceOf(Object)
        expect(response.status).toBe(200)
        expect(response.data.name).toEqual(expect.any(String));
        console.log(response.data.name)
        

    })
})