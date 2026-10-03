import React from 'react';

const Headrer = ({data}) => {
    const logOutUser = ()=>{
      localStorage.setItem('LoggedInUser','')
      window.location.reload()

    }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-3xl font-semibold'>Hello <br /> <p className='mt-3 text-3xl font-bold'> {data?.firstName || 'Admin'} 👏 </p></h1>
      <button onClick={logOutUser} className='px-6 py-1 cursor-pointer text-lg font-bold rounded-lg bg-red-500 text-black'>log Out </button>
    </div>
  );
}

export default Headrer;
