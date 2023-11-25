import React from 'react';

const NewCases = () => {
    const arr =[1,2,3,5,6,7]
  return (
    <div className="mx-7 bg-[#f6f9ff]">
    <table className="w-full mt-8  border-2 rounded-md">
      <thead className=" ">
        <tr className="border-2">
          <th></th>
          <th className="text-base text-[#878787] font-normal text-start p-2">Cases Title</th>
          <th className="text-base text-[#878787] font-normal  p-2">Case Category</th>
          <th className="text-base text-[#878787] font-normal  p-2">Court Category</th>
          <th className="text-base text-[#878787] font-normal  p-2">Consultant by</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          arr.map((item ,i)=>{
            return(
              <tr key={i} className="border-b-2">
              <td className="border-r text-center ">
               <span className="text-[#FFA800] border-2 p-1 text-xs rounded-lg border-[#FFA800] "> New</span>
                </td>
              <td className="border-r text-[#0F2C64] pl-4 py-4">JudgmentCases</td>
                <td className="text-center text-[#0F2C64] py-4">Marriage Lawyer NewCases</td>
                <td className="text-center text-[#0F2C64] py-4">Lorem Ipsum</td>
                <td >
                  <div className="flex flex-row py-4 items-center ">
                    <img src="/assets/user.png" alt="logo not found " className="w-10 h-10 rounded-full" />
                 <div className="text-[#0F2C64]"> Advocate NewCases NewCases Ipsum </div>
                 </div>
                </td>
                <td className=" py-4 ">
                  <div className="flex flex-row gap-5">
                  <span className=" p-2" > <img src="/assets/download.png" alt="download not found" /> </span>
                  <span className=" p-2" > <img src="/assets/delete.png" alt="download not found" /> </span>
                  <span className="bg-[#e6eeff] rounded-full p-2">
                  <img src="/assets/edit.png" alt="download not found" />
                  </span>
                 
                  </div>
                  
                </td>
              </tr>
            )
          })
        }
       
        
      </tbody>
    </table>
  </div>
  );
}

export default NewCases;
