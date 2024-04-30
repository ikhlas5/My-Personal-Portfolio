import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import {motion} from'framer-motion'
import { fadeIn,  staggerContainer } from '../../utils/motion'
const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <motion.section  initial="hidden" 
    whileInView="show" 
    variants={ staggerContainer}
    viewport={{once:false, amount:0.25}}>

    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'android app' ?
            <ToggleButton active value="android app" onClick={() => setToggle('E-commarce')}>E-commarce</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('E-commarce')}>E-commarce</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('others')}>Other's</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('others')}>Other's</ToggleButton>
          }
        </ToggleButtonGroup>

        <motion.div   variants={fadeIn("up", "tween" ,0.3, 1)}   >
          
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
        </motion.div>
      </Wrapper>
    </Container>
    </motion.section>
   
  )
}

export default Projects