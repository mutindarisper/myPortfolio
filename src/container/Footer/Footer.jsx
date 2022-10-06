import React, {useState} from 'react'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import './Footer.scss'

import {client } from '../../client'

const Footer = () => {

  const [formData, setFormData] = useState({name: '', email: '', message: ''})

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  //object destructuring

  const { name, email, message } = formData


  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({...formData, [name]: value }); 
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }
  
  //use frontend to upload data to cms 
    client.create(contact)
    .then( () => {
      setLoading(false)
      setIsFormSubmitted(true)
    })
  }


  
  return (
   <>
   <h2 className='head-text'> Take a coffee & chat wih me </h2>

   <div className='app__footer-cards'> 
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:mutindarisper@gmail.com"
          className='p-text'>mutindarisper@gmail.com</a>

        </div>


        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +(254) 705-305-613 "
          className='p-text'>+(254) 705-305-613</a>

        </div>
   
   </div>


   {!isFormSubmitted ? 

   <div className='app__footer-form app__flex'>

        <div className='app__flex'>
          <input className='p-text' 
          type="text" 
          placeholder='Your name'
          value={name}
          name="name"
          onChange={handleChangeInput} />
        </div>

        <div className='app__flex'>
          <input className='p-text' 
          type="email" 
          placeholder='Your email'
          value={email}
          name="email"
          onChange={handleChangeInput} />
        </div>

          <div>
            <textarea
              className='p-text'
              placeholder='Your message'
             name='message'
             value={message}
             onChange={handleChangeInput}
             id="" cols="30" rows="10" />
          </div>

          <button 
          type='button'
          className='p-text'
          onClick={handleSubmit}
          >{ loading ? 'Sending...' : 'Send Message' } </button>

     </div>
     :
     <div>
      <h3 className='head-text'>Thank you for getting in touch!</h3>
     </div>
}
   </>
  )
}

export default AppWrap( MotionWrap(Footer,
  'app__footer'),
  'contact',
  'app__whitebg')