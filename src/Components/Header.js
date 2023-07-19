import React from 'react'
import { Moon, Sun } from 'lucide-react';
import underline from '../img/underline.png'
import Search from './Search';

const Header = ({ handleThemeSwitch, setSearchText }) => {
    return (
        <div className=' px-8 lg:px-10 pt-8 '>
         <div className='flex justify-between pb-5 border-b dark:border-neutral-600'>
         <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:text-white">Notes <img src={underline} alt='' className='absolute top-12 left-3 lg:left-5 w-28 '/></h1> 
           
           <div className='flex gap-x-3 items-center'>
           <Search setSearchText={setSearchText} />           
            <button className='px-2 py-2  shadow-lg  rounded-2xl'
                onClick={() => {
                    handleThemeSwitch()
                }}> <Moon className='dark:hidden w-6 h-6' />
                <Sun className='hidden w-6 h-6 dark:block text-white'/>
            </button>
           </div>
         </div>
           
        </div>
    )
}

export default Header