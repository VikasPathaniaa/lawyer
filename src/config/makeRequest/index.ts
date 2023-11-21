import axios from "axios";



const axiosInstance = axios.create({
    baseURL: "https://shlok-mittal-lawyer-backend.vercel.app/api/v1",
    headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGZlMTc4MjMyMzIwNmVmMjViOWJiOSIsImlhdCI6MTcwMDU3NzI5NiwiZXhwIjoxNzAwODM2NDk2fQ.E9MQyEP1vkjYZjnTySMmLreyU1r9BmYM98Ii8Lsc9dg"
    }
})


export const postRequest = (slug: string, data:any) => {
    return axiosInstance.post(slug, data)
}

export const getRequest = (slug: string) => {
    return axiosInstance.get(slug)
}

export const deleteRequest = (slug: string) => {
    return axiosInstance.delete(slug)
}

export const putRequest = (slug: string , data:any) => {
    return axiosInstance.put(slug , data)
}