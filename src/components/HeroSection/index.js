import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import {motion} from'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion'
const HeroSection = () => {
    return (
       
        <motion.section
        initial="hidden" 
        whileInView="show" 
        variants={ staggerContainer}
        viewport={{once:false, amount:0.25}}
        id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <motion.div variants={fadeIn("right", "tween" ,0.2, 1)}>

                    <HeroLeftContainer id="Left">
                          <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HeroLeftContainer>
                    </motion.div>

                    <HeroRightContainer  id="Right">
                        <motion.div variants={fadeIn("up", "tween" ,0.3, 1)}>

                        <Img src={HeroImg}   variants={slideIn("up", "tween" ,0.5, 1.3)}alt="hero-image" />
                        </motion.div>
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </motion.section>
    )
}

export default HeroSection