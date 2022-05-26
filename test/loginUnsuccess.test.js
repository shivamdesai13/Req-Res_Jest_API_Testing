const useUrl = ('https://reqres.in/api/login')
const axios = require('axios')

const payload = {
    "email": "peter@klaven"
}

describe("Test For Login Unsuccessful",()=>{
    test("user login unsuccessful",async()=>{
        const res = await axios.post(useUrl,payload)
        console.log(res.data)
        expect(res.status).toBe(400)
    })
})