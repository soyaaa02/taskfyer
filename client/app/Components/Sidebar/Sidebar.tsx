import React from 'react'
import Profile from '../Profile/Profile';
import RadialChart from '../RadialChart/RadialChart';

function Sidebar() {
  return (
    <div className="w-[20rem] mt-[5rem] h-[clac(100%-5rem)] fixed right-0 top-0 bg-[#f9f9f9] flex flex-col justify-between">
        <Profile />
        <div className="mt-4 mx-6">
          <RadialChart />

          <button className="mt-6 mb-6 mx-6 py-4 px-8 bg-[#EB4E31] text-white rounded-[50px] hover:bg-gray-500 transition duration-200 ease-in-out">Sign Out</button>
        </div>
    </div>
  );
}

export default Sidebar
