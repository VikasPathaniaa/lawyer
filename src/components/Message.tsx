import React,{useRef , useEffect} from 'react';

const Message = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null)

  const clickHandler = ()=>{
    alert("helloo")
  }

  useEffect(() => {
    const btn = btnRef.current;

    if (btn) {
      btn.addEventListener('click', clickHandler);
    }

    return () => {
      if (btn) {
        btn.removeEventListener('click', clickHandler);
      }
    };
  }, []); 


  return (
    <>
     <div>
      <button ref={btnRef}>Click me </button>
    </div>
    </>
   
  );
}

export default Message;
