import Cookies from "js-cookie"
import { url } from "../Utils"

export const getUserDetails = async()=>{
    try{
        const response = await fetch(`${url}/user/profile/v1`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('access_token')}`
            }
        })

        const data = await response.json()
        return data
    }catch(e){
        throw new Error("Error Has Occured")
    }
}
