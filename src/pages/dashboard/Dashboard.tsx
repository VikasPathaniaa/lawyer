import React from 'react';

const Dashboard = () => {
    const data = [
        {
            id:1,
            title: "Total Lawyers",
            count: 24,
            oldCount: 15,
            oldLawyer: "old Lawyers",
            newCount: 9,
            newLawyer: "new Lawyer",
        },
        {
            id:2,
            title: "Total Lawyers",
            count: 40,
            oldCount: 15,
            oldLawyer: "old Lawyers",
            newCount: 25,
            newLawyer: "new Lawyer",
        },
        {
            id:3,
            title: "Total Lawyers",
            count: 20,
            oldCount: 15,
            oldLawyer: "old Lawyers",
            newCount: 14,
            newLawyer: "new Lawyer",
        },
        {
            id:4,
            title: "Total Lawyers",
            count: 214,
            oldCount: 15,
            oldLawyer: "old Lawyers",
            newCount: 9,
            newLawyer: "new Lawyer",
        },
        {
            id:5,
            title: "Total Lawyers",
            count: 54,
            oldCount: 15,
            oldLawyer: "old Lawyers",
            newCount: 9,
            newLawyer: "new Lawyer",
        },
        {
            id:6,
            title: "Total Lawyers",
            count: 24,
            oldCount: 15,
            oldLawyer: "old Lawyers",
            newCount: 9,
            newLawyer: "new Lawyer",
        },
        {
            id:7,
            title: "Total Lawyers",
            count: 124,
            oldCount: 15,
            oldLawyer: "old Lawyers",
            newCount: 9,
            newLawyer: "new Lawyer",
        },

    ]
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  md:grid-cols-2 gap-6 w-full mt-6  px-5'>
            {
                data?.map((item) => {
                    return (
                        <div key={item.id} className='w-full h-52 shadow-lg rounded-md flex flex-col justify-between'>
                            <div className='border-b-2 p-3 border-gray-200 text-base md:text-lg font-normal text-[#000000]'> {item.title}</div>
                            <div className='text-2xl md:text-5xl text-center'>
                                {item.count}
                            </div>
                            <div className='flex justify-between px-2 md:px-5 pb-2'>
                                <div className='flex gap-2 flex-row items-center'>
                                    <span className='text-[#0F2C64]  bg-[#e6eeff] rounded-full p-2'>{item.oldCount}</span>
                                    <span className='text-[#0F2C64] text-xs capitalize'>{item.oldLawyer}</span>
                                </div>
                                <div className='flex gap-2 flex-row items-center'>
                                    <span className='text-[#0F2C64]  bg-[#e6eeff] rounded-full p-2'>{item.newCount <= 9 ? "0" + item.newCount : item.newCount}</span>
                                    <span className='text-[#0F2C64] text-xs capitalize'>{item.newLawyer}</span>
                                </div>

                            </div>


                        </div>
                    )
                })
            }

        </div>
    );
}

export default Dashboard;
