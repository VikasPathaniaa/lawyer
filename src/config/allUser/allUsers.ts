import { deleteRequest, getRequest, putRequest } from "../makeRequest"

export const getUserList = async ()=>{
    return getRequest("/admin/users")
}
export const removeUser = async (id:string)=>{
    return deleteRequest(`/admin/User/${id}`)
}
export const updateUser = async (id:string , data:any)=>{
    return putRequest(`/admin/update` , data)
}