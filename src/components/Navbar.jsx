import React from 'react'
import VanceLogo from '../media/Navbar/VanceLogo.png'
import Arrow from '../media/Navbar/DownloadButtonArrow.png'

function Navbar() {
  return (
    <div className="bg-[#111] px-[200px] flex flex-col items-center gap-2 border-b border-b-[rgba(255,255,255,0.1)] py-5">
        <div className="w-full bg-[#0B0B0B] flex flex-row justify-between items-center">
            <img src={VanceLogo} alt="" />
            <button className='bg-[#81EBAB] rounded-[100px] h-12 px-[16px] flex flex-row items-center gap-2'>
                <span className='text-[#0B0B0B] text-base font-semibold'>Download app</span>
                <img src={Arrow} alt="" />
            </button>
        </div>
    </div>
  )
}

export default Navbar