import React, {useState, useEffect} from 'react'
import ReactTooltip from 'react-tooltip'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import {urlFor, client } from '../../client'

import './Skills.scss'

const Skills = () => {
  const [skills, setSkills] = useState([])
  const [experiences, setExperiences] = useState([])
  


  useEffect(() => {
    //fetch data from sanity
    const skillsQuery = '*[_type == "skills"]';
    const query = '*[_type == "experiences"]';


    client.fetch(query)
    .then( (data) => {
      console.log(data, 'experiences data ')
      setExperiences(data)
      
    })

    client.fetch(skillsQuery)
    .then( (data) => {
      setSkills(data)
      
    })
   
  }, [])

  return (
   <>

   <h2 className='head-text'> Skills and Experience </h2>
   <div className='app__skills-container'>
        <motion.div 
        className="app__skills-list"
        >
          {skills?.map( (skill) =>(
            <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5}}
            className="app__skills-item app_flex"
            key={skill.name}
            >
              <div className='app__flex' 
              style={{ backgroundColor: skill.bgColor}}>
                  <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>

              <p className='p-text'>{skill.name}</p>

            </motion.div>
          ))}

        </motion.div>

        <motion.div className='app__skills-exp'>
          {/* {console.log(experiences.works, 'here')} */}
              {experiences?.map( (experiences) => (
                <motion.div className='app__skills-exp-item'
                key={experiences.year}
                >
                  <div className='app__skills-exp-year'>
                      <p className='bold-text'>
                        {experiences.year}
                      </p>
                  </div>

                  <motion.div className='app__skills-exp-works'>
                      {
                        experiences.works.map( (work) => (
                          <>

                              <motion.div
                              whileInView={{ opacity: [0, 1] }}
                              transition={{ duration: 0.5}}
                              className="app__skills-exp-work app_flex"
                              data-tip
                              data-for={work.name}
                              key={work.name}
                              >
                                <h4 className='bold-text'>{work.name} </h4>
                                <p className='p-text'>{work.company}</p>

                              </motion.div>

                              <ReactTooltip
                              id={work.name}
                              effect="solid"
                              arrowColor='#fff'
                              className='skills-tooltip'
                              >
                                {work.desc}

                              </ReactTooltip>

                              </>

                        ))
                      }
                  </motion.div>

                </motion.div>
                // work.year
                
              ))}
        </motion.div>
   </div>
   </>
  )
}

// export default  AppWrap(Skills, 'skills')

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  "app__whitebg");