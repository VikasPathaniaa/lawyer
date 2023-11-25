import Header from './components/Header';
import SideBar from './components/SideBar';

const layout = ({children}:any) => {
  return (
    <div className='flex flex-row min-h-screen w-full'>
        <div className='w-28 md:w-60 bg-[#0F2C64]'>
           <SideBar/> 
        </div>
        <div className='w-full'>
            <Header/>
            {children}
        </div>
      
    </div>
  );
}

export default layout;
