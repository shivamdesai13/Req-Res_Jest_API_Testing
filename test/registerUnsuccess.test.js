const baseUrl = 'https://reqres.in/api/register';   
const AXIOS = require ('axios');

const payload = {
    "email": "sydney@fife"
}

describe("Test To Register Unsuccessful",()=>{
    it("user register unsuccessful", async()=>{
        const response = await AXIOS.post(baseUrl,payload)
    //     console.log(response)
    //     expect(response.status).toBe(400)
    //     var  temp=1
    //     temp++
    //     temp++
    //     temp++
    //     expect(response.status).toBe(400)
    //     expect(response.status).toBe(400)
    //     expect(response.status).toBe(400)

    })
})