import React from 'react'

interface MainLayoutProps {
    childern: React.ReactNode;
}

function MainLayout({ childern }: MainLayoutProps) {
  return <div className="main-layout flex-1 bg-[#EDEDED] border-2 border-white rounded-[1.5rem] overflow-auto">{childern}</div>
}

export default MainLayout;