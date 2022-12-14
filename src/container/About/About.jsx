import React, {useState, useEffect} from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'

import {urlFor, client } from '../../client'

// const abouts = [ {
//   title: 'GIS/Web Development',
//   description: 'I am a great frontend Developer with skills in Vue JS, JavaScript, HTML5, CSS3, Leaflet, MapBox GL',
//   imgUrl: images.about01

// },
// {
//   title: 'Geospatial Analysis',
//   description: 'I am good at geospatial analysis with the use of ArcMap, QGIS, Google Earth Engine',
//   imgUrl:  images.about02

// },
// {
//   title: 'GIS/Web Development',
//   description: 'I am a great GIS/Web Developer',
//   imgUrl:  images.about03

// }
// ]

const About = () => {

  //replace abouts with content from sanity dynamically

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
   //query to fetch about section
   const query = '*[_type == "abouts"]';
   client.fetch(query)
   .then((data) => setAbouts(data))

  }, []);



  
  return (   
   <>
   <h2 className='head-text'> I Build Web Apps using <br /><span>State-of-the-art</span>  Technology
    </h2>

    <div className='app__profiles'>
      {abouts.map( (about, index) => (
        <motion.div
        whileInView={{ opacity:1}}
        whileHover={{ scale:1.1}}
        transition={{ duration:0.5, type:'tween'}}
        className="app__profile-item"
        key={about.title + index}
        >
            <img src={urlFor(about.imgUrl)} alt={about.title}/>
            <h2 className='bold-text' style={{marginTop: 20}} >
                {about.title}
            </h2>
            <p className='p-text' style={{marginTop: 10}} >
                {about.description}
            </p>
            
        </motion.div>
      ))}
    </div>
   
   </>
  )
}

export default AppWrap(About, 'about')
// export default AppWrap(
//   MotionWrap(About, 'app__about'),
//   'about',
//   "app__whitebg");