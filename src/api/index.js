import axios from "../utils/axios";
export function signUp(quary) {
    if (!quary) {
        throw "please";
        
    }
   let url = `auth/sign-up`;
   return axios.post(url,{
    name: `${quary.name}`,
    email: `${quary.email}`,
    password: `${quary.password}`,
    lastName: `${quary.lastName}`,
    phone: `${quary.phone}`,
    role: `user`
   })
}
