import React from 'react'

const NavigationDots = ({active}) => { //prop to tell us which section we are in
  return (
    <div className='app__navigation'>
            {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map( (item, index) => (
          
            <a
             href={`#${item}`}
              key={item + index} 
              className= "app__navigation-dot"
              style={active === item ? {backgroundColor: '#313BAC'} : {}}
              >
 
              </a>
          
          ))}
    </div>
  )
}

export default NavigationDots