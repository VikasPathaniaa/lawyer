import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import ConfirmDialog from "../components/ConfirmDialog";
import { getUserList, removeUser } from "../config/allUser/allUsers";
import { Link } from "react-router-dom";


interface userInfo {
  _id: string;
  phone: string;
  firstName: string;
  email: string;
  consultancyCost: number;
  image: string

}


const TotalUsers = () => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [userToDelete, setUserToDelete] = useState('');


  const getData = async () => {
    try {
      setIsLoading(true)
      const response = await getUserList()
      const finalResult = await response.data
      if (finalResult.status == 200) {
        setData(finalResult?.data)
        setIsLoading(false)
      }

    } catch (error) {
      setIsLoading(false)
      console.log(error, "error");
    }
  }


  useEffect(() => {
    getData()
  }, [])

  const removeHandler = (id: string) => {
    setUserToDelete(id);
    setConfirmDelete(true);
  };

  const handleDeleteConfirmation = async (confirmation: boolean) => {
    if (confirmation) {
      try {
        setIsLoading(true);
        let response = await removeUser(userToDelete);
        if (response.status === 200) {
          getData();
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    setConfirmDelete(false);
  };
  return (
    <>
      <div className="flex justify-between px-8 mt-11">
        <p className="font-medium text-4xl">All Users</p>
        <div className="flex items-center bg-white border-gray-50 ">
          <span className="bg-[#0F2C64] p-4 rounded-l-full">
            <img src="/assets/search.png" />
          </span>
          <input
            className="outline-none pl-3 border-gray-50"
            type="text"
            placeholder="Search in admin Panel"
          />
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <PacmanLoader color="#0F2C64" />
        </div>
      ) : (
        <div className="mt-8 h-[45rem] overflow-y-auto">
          <table className="w-full">
            <ConfirmDialog handleDeleteConfirmation={handleDeleteConfirmation} confirmDelete={confirmDelete} />
            <thead>
              <tr>
                <th className="p-3 text-[#6D6D6D] font-normal text-xs text-start"></th>
                <th className="p-3 text-[#6D6D6D] font-normal text-xs text-start"> User Name</th>
                <th className="p-3 text-[#6D6D6D] font-normal text-xs text-start">Email</th>
                <th className="p-3 text-[#6D6D6D] font-normal text-xs text-start">Phone No.</th>
                <th className="p-3 text-[#6D6D6D] font-normal text-xs text-start">
                  Total Consultants
                </th>
                <th className="p-3 text-[#6D6D6D] font-normal text-xs text-start"></th>
              </tr>
            </thead>
            <tbody className="">

              {
                isLoading && (<div className="flex justify-center items-center"> <PacmanLoader color="#36d7b7" />
                </div>
                )
              }
              {
                data?.map((item: userInfo) => {
                  return (
                    <>
                      <tr className="shadow-md" key={item?._id}>
                        <td className="p-3">
                          <span className=" text-[#007AFF] border-2 border-[#007AFF] rounded-lg px-1">
                            New
                          </span>
                        </td>
                        <td className=" p-3 flex flex-row items-center gap-4 capitalize">
                          {item?.image ? (
                            <img className="rounded-full  h-14 w-14" src={item?.image} alt="user" />
                          ) : (
                            <img className="rounded-full  h-14 w-14" src="/assets/user.png" alt="user not found" />
                          )}
                          <p className="text-[#101828] font-normal text-lg">{item?.firstName}</p>
                        </td>
                        <td className="p-3 text-[#101828] font-normal text-base">
                          {" "}
                          {item?.email}
                        </td>
                        <td className="p-3 text-[#101828] font-normal text-base">
                          {" "}
                          {item?.phone}
                        </td>
                        <td className="p-3 text-[#101828] font-normal text-base"> {item?.consultancyCost}</td>
                        <td className="p-3  ">
                          <div className="flex flex-row items-center gap-4">
                            <span onClick={() => removeHandler(item._id)} className="cursor-pointer"> <img src="/assets/delete.png" alt="Image not found" /> </span>
                          <Link to="/edit-user">  <span >  <img src="/assets/edit.png" alt="edit Image not found" className="cursor-pointer" /></span> </Link>
                          </div>
                        </td>
                      </tr>
                    </>
                  )
                })
              }
               </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default TotalUsers;
