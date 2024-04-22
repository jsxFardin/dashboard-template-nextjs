import React from 'react'
import { ModeToggle } from './micro-components/mode-toggle'
import { IoMdSettings } from "react-icons/io";
import { TypographyH3 } from './micro-components/TypographyH3';
import { Input } from './ui/input';
import { ImageIcon } from './micro-components/ImageIcon';


const Header = ({ pageName }) => {
  return (
    <>
      <header className="m-5 p-4 flex justify-between ">
        <div className="left flex gap-5">
          <TypographyH3 text={pageName} />
        </div>
        <div className="right flex gap-5">
          <Input className=" rounded-full p-5" placeholder="Search" />
          <IoMdSettings size={45} className='p-1 rounded-full' />
          <ModeToggle />
          <ImageIcon src={"https://github.com/shadcn.png"} alt={"My Image"} />
        </div>
      </header>
    </>
  )
}

export default Header