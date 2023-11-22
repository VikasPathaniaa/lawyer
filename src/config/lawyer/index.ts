import { getRequest } from "../makeRequest"

export const getLawyerList = async ()=>{
    return getRequest("admin/lawyer")
}