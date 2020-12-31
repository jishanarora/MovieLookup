import React, {useState} from 'react';
import {HomePageContainer, VideoContainer, Content,H1,P,ButtonWrap,ArrowForward,ArrowRight, Button} from './homepage.styles.jsx'
import introVideo from '../../assets/movielookup.mp4'
import {withRouter} from 'react-router-dom'


const Homepage = ({history}) =>
{
    const [hover, setHover]= useState(false);

    const onHover=()=>{
        setHover(!hover)
    }
    return(
       <HomePageContainer>
       <VideoContainer autoPlay loop muted>
           <source src={introVideo} type='video/mp4' />  
            </VideoContainer>
       <Content>
           <H1>Looking For Movies Made Easy</H1>
           <P>Sign Up to save your selections for future nomination</P>
           <ButtonWrap>
    <Button onMouseEnter={onHover} onMouseLeave={onHover} onClick={()=>{history.push('/search')}}>Get Started {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
           </ButtonWrap>
       </Content>
       </HomePageContainer>
    )
}

export default withRouter(Homepage);