
const Header = () => {
  const headerTabs = [{
    icon: "/assets/settings.png",
    title: "Settings"
  },
  {
    icon: "/assets/history.png",
    title: "History"
  },
  {
    icon: "/assets/filter.png",
    title: "Filter"
  },
  ]
  return (
    <div className='flex flex-row py-4 justify-between shadow-[12px_1px_6px_gray] items-center px-8'>
      <div className='flex'>
        <img src="/assets/user.png" alt="user Not Found" />
        <div>
          <p className='text-[#000000] font-medium'>Mr Admin</p>
          <p className='text-[#363740] font-light'>Loreum Ipsum</p>
        </div>
      </div>
      <div className=' gap-8 hidden lg:flex '>
        <div className='flex items-center border-2 border-gray-50  bg-white'>
          <span className='bg-[#0F2C64] p-3 rounded'><img src="/assets/search.png" /></span>
          <input className='outline-none pl-3 ' type='text' placeholder='Search in admin Panel' />
        </div>
        <div className='flex  gap-4 items-center text-center justify-center'>


          {
            headerTabs.map((item, index) => {
              return (
                <div key={index} className='flex flex-col  items-center text-center justify-center'>
                  <img src={item.icon} alt="image not found" />
                  <p className='text-[#363740]'>{item.title}</p>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  );
}

export default Header;
