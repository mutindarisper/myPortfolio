import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
// import { FaFacebookF} from 'react-icons/gi'
import {  AiFillGithub, AiFillLinkedin } from 'react-icons/ai'


const SocialMedia = () => {

  return (
    <div className='app__social'> 
        <div > 
          <a href="https://twitter.com/MutukuRisper" target="_blank" rel="noopener noreferrer">
            <BsTwitter />
            </a>
        </div>
        <div >
          <a href="https://www.instagram.com/thesmartdev/" target="_blank" rel="noopener noreferrer">
            <BsInstagram />
            </a>
        </div>
        <div  >
          <a href="https://github.com/mutindarisper" target="_blank" rel="noopener noreferrer">
            < AiFillGithub  />
            </a>
        </div>
        <div  >
          <a href="https://www.linkedin.com/in/risper-mutuku-1b5647154/" target="_blank" rel="noopener noreferrer">
            < AiFillLinkedin  />
            </a>
        </div>
    </div>
  )
}

export default SocialMedia