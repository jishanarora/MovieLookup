import React from 'react';
import {HomePageContainer, VideoContainer, Content,H1,P,ButtonWrap,ArrowForward,ArrowRight, Button} from './homepage.styles.jsx'
import {withRouter} from 'react-router-dom'


class Homepage extends React.Component{
    constructor(props)
    {
        super(props)

        this.state={
            hover:false,
        }
    }
    componentDidMount()
    {
        const {videoUrl}=this.props;
        console.log(videoUrl);
    }
     onHover= ()=>
    {
        this.setState(prevState => ({
            hover: !prevState.hover
          }));
    }

    render()
    {
        const {history, videoUrl}=this.props;
        return(
            <HomePageContainer>
            <VideoContainer autoPlay loop muted key={videoUrl}>
                <source src={videoUrl} type='video/mp4' />  
                 </VideoContainer>
            <Content>
                <H1>Looking For Movies Made Easy</H1>
                <P>Sign Up to save your selections for future nomination</P>
                <ButtonWrap>
         <Button onMouseEnter={this.onHover} onMouseLeave={this.onHover} onClick={()=>{history.push('/search')}}>Get Started {this.state.hover ? <ArrowForward/> : <ArrowRight/>}</Button>
                </ButtonWrap>
            </Content>
            </HomePageContainer>
        )
    }
}
export default withRouter(Homepage);