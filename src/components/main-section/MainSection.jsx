import React from 'react'
import { BiSearch } from "react-icons/bi";
import { HiOutlineStar } from "react-icons/hi2";

import male from '../../assets/male.png';
import female from '../../assets/female.png';

import './MainSection.css'

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
                    <button type='search'>Find a Developer</button>
                </div>
            </div>
            <div className='review'>
                <div className='review-title'>Trusted by 50k+ users</div>
                <div className='rating'>
                    <div className='stars'>
                        <HiOutlineStar className='star'/><HiOutlineStar className='star'/><HiOutlineStar className='star'/><HiOutlineStar className='star'/><HiOutlineStar className='star'/></div>
                    <div className='review-count'>4.1/5 <span>(14k) Reviews</span></div> 
                </div>
            </div>
        </div>
        <div className='right-section'>
            <div className="blur-background">
                <div className='profiles'>
                    <div className='rotated-div'>
                        <div className='rotated-inside-div'></div>
                    </div>
                    <div className='rotated-blur-div'></div>
                    <div className='profile1'>
                        <div className='profile-name'>Guy Hawkins</div>
                        <div className='job-role'>Software Engineer</div>
                        <div className='profile'>
                                <div className='profile-background'>
                                    <img src={male} alt="male profile" />
                                </div>
                        </div>
                    </div>
                    <div className='profile2'>
                        <div className='profile'>
                                <div className='profile-background' id='female-img'>
                                    <img src={female}  alt="female profile" />
                                </div>
                        </div>
                        <div className='profile-name'>Leslie Alexander</div>
                        <div className='job-role'>HR Manager, Groove</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
