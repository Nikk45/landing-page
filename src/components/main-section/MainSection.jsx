import React from 'react'
import { BiSearch } from "react-icons/bi";


export default function MainSection() {
  return (
    <div className='main-section'>
        <div className='left-section'>
            <div className='main-heading'>Connecting Devs with Employers</div>
            <div className='main-description'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. 
                Exercitation veniam consequat.
            </div>
            <div className='search-bar'>
                <div className='search'>
                    <BiSearch/>
                    <input type="search" placeholder="Try Java Developer, React Dev etc." />
                    <button>Find a Developer</button>
                </div>
            </div>
            <div className='review'></div>
        </div>
        <div className='right-section'></div>
    </div>
  )
}
