import React from 'react'
import Profile from '../Profile/Profile';

function Sidebar() {
  return (
    <div className="w-[20rem] mt-[5rem] h-[clac(100%-5rem)] fixed right-0 top-0">
        <Profile />
        <div className="mt-4 mx-6"></div>
    </div>
  );
}

export default Sidebar
