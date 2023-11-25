import { Link } from "react-router-dom";
import { navItems } from "./index";
const SideBar = () => {
  return (
    <>
        <div className=' text-sm font-light md:font-medium md:text-3xl text-center text-white mt-7 mb-7'>Admin</div>
        <div className='flex  flex-col justify-between min-h-screen md:pl-4'>
        {
            navItems.map((item:any , index:any)=>{
                return (
                  <Link to={item?.path}>
                   <div key={index} className='flex justify-center md:justify-start items-center gap-3 cursor-pointer'>
                        <img src={item.icon} alt="icon not Found "/>
                        <div className='hidden md:block text-white font-normal '>{item.title}</div>
                    </div>
                    </Link> 
                )

            })
        }
     </div>
    </>
  );
}

export default SideBar;
