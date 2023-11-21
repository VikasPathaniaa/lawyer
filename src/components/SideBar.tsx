import { Link } from "react-router-dom";
import { navItems } from "./index";
const SideBar = () => {
  return (
    <>
        <div className='font-medium text-3xl text-center text-white mt-7 mb-7'>Admin</div>
        <div className='flex  flex-col justify-between min-h-screen pl-4'>
        {
            navItems.map((item:any , index:any)=>{
                return (
                  <Link to={item?.path}>
                   <div key={index} className='flex items-center gap-3 cursor-pointer'>
                        <img src={item.icon} alt="icon not Found "/>
                        <div className='text-white font-normal'>{item.title}</div>
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
