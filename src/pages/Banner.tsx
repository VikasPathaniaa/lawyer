import React from 'react';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

const Banner = () => {
    return (
        <>
            <div className="flex justify-between px-8 mt-11">
                <p className="font-medium text-4xl">Banners</p>
                <div className="flex items-center bg-white">
                    <span className="bg-[#0F2C64] p-4 text-white rounded-2xl">
                        Create Banners +
                    </span>

                </div>
            </div>

            <div className="mt-8 h-[50rem] overflow-y-auto">
                <table className="w-full ">
                    <thead>
                        <tr className='border-2  border-[#6D6D6D]-100 '>
                            <th className="p-3 pl-32 text-[#6D6D6D] font-normal text-xs text-start">Banner Image</th>
                            <th className="p-3 text-[#6D6D6D] font-normal text-xs text-start"> Title</th>
                            <th className="p-3 text-[#6D6D6D] font-normal text-xs text-start">url Link</th>
                            <th className="p-3 text-[#6D6D6D] font-normal text-xs text-start">Banner Info</th>
                            <th className="p-3 text-[#6D6D6D] font-normal text-xs text-start"></th>
                        </tr>
                    </thead>
                    <tbody className="">

                        {
                            arr.map((item) => {
                                return (
                                    <React.Fragment key={item}>
                                        <tr className=" border-2  border-[#6D6D6D]-100 mt-4">


                                            <td className=" p-3 flex flex-row items-center gap-4  capitalize">
                                                <div className='ml-24 h-16 flex justify-center items-center w-32 rounded-lg border-2 border-[#6D6D6D]-100'>
                                                    <img className="" src="/assets/coverImage.png" alt="user not found " />


                                                </div>


                                            </td>
                                            <td className="p-3 text-[#101828] font-normal text-base">
                                                Loreum Ipsum
                                            </td>
                                            <td className="p-3 text-[#101828] font-normal text-base">
                                                Loreum Ipsum
                                            </td>
                                            <td className="p-3 text-[#101828] font-normal text-base">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut suscipit eros.
                                            </td>
                                            <td className="p-3  ">
                                                <div className="flex flex-row items-center gap-4">
                                                    <span className="cursor-pointer p-3"> <img src="/assets/notify.png" alt="Image not found" /> </span>
                                                    <span className="cursor-pointer p-3"> <img src="/assets/delete.png" alt="Image not found" /> </span>
                                                    <span >  <img src="/assets/edit.png" alt="edit Image not found" className="cursor-pointer bg-[#e6eeff] rounded-full p-3" /></span>
                                                </div>
                                            </td>

                                        </tr>
                                    </React.Fragment>
                                )
                            })
                        }



                    </tbody>
                </table>
            </div>

        </>
    );
}

export default Banner;
