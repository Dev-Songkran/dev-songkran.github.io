import React , { Component } from 'react'
import styled from "styled-components"
import Link from "next/link"
import Chart from "../components/Chart"
const Container = styled.div`
    max-width: 1200px;
    width: 1200px;
    margin: 0 auto;
    padding: 40px;
    min-height: 500px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    position: relative;
`
const Img = styled.img`
    display: block;
    margin: 0 auto;
    border-radius: 100%;
`
const Myname = styled.h3`
    margin: 10px auto;
    display: table;
    font-size: 25px;
    font-weight: 400;
    color: #333;
`
const Detail = styled.p`
    font-size: 14px;
    color: #111;
    display: table;
    margin: 0 auto;
    font-weight: 400;
    margin-bottom: ${props => props.mb ? props.mb : '5'}px;
    margin-top : ${props => props.mt ? props.mt : '0'}px;
    a{
        color: #446594;
        font-weight: 600;
    }
`
const Icon = styled.div`
    background-image: ${props => props.svg ? `url(${props.svg})` : `url('')` };
    background-size: 100%;
    height: 30px;
    width: 30px;
    margin: 0 auto;
    display: inline-block;
`
const Box = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    border-top: 1px solid #f197a3;
    >h3{
        text-align:center;
        font-weight: 500;
    }
`
const Timeline = styled.div`
    display: flex;
    position: relative;
    margin-bottom: 15px;
    &:after,&:before{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;
    }
    &:after{
        width: 30px;
        height: 30px;
        display: flex;
        border-radius: 100%;
        border: 2px solid #f197a3;
        padding: 10px;
        background: #fff;
        background-image: ${props => props.svg ? `url(${props.svg})` : `url('')`};
        background-repeat: no-repeat;
        background-position: center;
    }
    &:before{
        width: 2px; 
        background: #f197a3;
        bottom: auto;
        height: 120%;
    }
`
const Text = styled.div`
    width: 50%;
    display: flex;
    margin-left: ${props => props.left? 'auto' : '30px'};
    margin-right: ${props => props.right? 'auto' : '30px'};
    
    h3{
        margin: 0;
        font-weight:400;
        color: #333;
        width: 100%;
    }
    ${Detail}{
        color: #f197a3;
        margin:0;
        width: 100%;
    }
    
`

const Year = styled.div`
    width: 50%;
    margin-left: ${props => props.left? 'auto' : '30px'};
    margin-right: ${props => props.right? 'auto' : '30px'};
    display: flex;
    padding: 0 15px;

`
const Card = styled.div`
    padding: 15px;
    ${props => props.left ? `margin-left: auto; margin-right:0;text-align:right;` : ``};
    ${props => props.right ? `margin-right: auto; margin-left:0;text-align:left;` : ``};
    &.custom{
        padding: 5px 15px;
        height: 40px;
        border: 2px solid #785892;
        border-radius: 50px;
        position: relative;
        margin-top: auto;
        margin-bottom: auto;
        color: #785892;
    }
    @media (max-width:670px){
        h3{
            font-size: 14px;
        }
        p{
            font-size: 10px;
        }
        &.custom{
            font-size: 13px;
            padding:5px 10px;
            height: 35px;
            font-weight: 400;
        }
    }

`
const Skill = styled.div`
    margin: 15px;

`
const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center
`
class App extends Component {
    render(){
        return (
            <Container>
                <Img width="200" height="200" src="../static/media/my.1bda1d7a.jpg"/>
                <Myname>Songkran Wichitpong</Myname>
                <Detail>I'm a front-end and back-end developer from Thailand</Detail>
                <Detail><b>address</b> 263 , 14 Lane , Rattana Uthit Rd., Hatyai Sub-district, Hatyai District, Songkhla, 90110 ,Thailand.</Detail>
                <Detail mt="20" mb="10"><b>Email : </b>s.Wichitpong@gmail.com , <b>Tel : </b>064-6099309</Detail>
                <Detail mb="10"><b>Github</b> : <Link href="https://github.com/Dev-Songkran"><a>https://github.com/dev-songkran</a></Link></Detail>
                <Detail mb="10"><b>Website</b> : <Link href="https://dev-songkran.github.io"><a>https://dev-songkran.github.io</a></Link></Detail>
                <Box>
                    <h3>EDUCATION AND EXPERIENCE</h3>
                    <Timeline svg="../static/svg/book.svg">
                        <Text left>
                            <Card left>
                                <h3>Bachelor of Science</h3>
                                <Detail>University of Hatyai</Detail>
                                <Detail>Songkhla</Detail>
                            </Card>
                        </Text>
                        <Year right>
                            <Card right className="custom"> 2011 - 2015 </Card>
                        </Year>
                    </Timeline>
                    <Timeline svg="../static/svg/coffe.svg">
                        <Year left>
                            <Card left className="custom"> Jul 2015 - Nov 2015</Card>
                        </Year>
                        <Text right>
                            <Card right>
                                <h3>Freelance</h3>
                                <Detail>Front-End Developer, Graphic Designer</Detail>
                                <Detail>Hatyai</Detail>
                            </Card>
                        </Text>
                    </Timeline>
                    <Timeline svg="../static/svg/coffe.svg">
                        <Text left>
                            <Card left>
                                <h3>Chiangrai Focus</h3>
                                <Detail>Front-End & Back-End Developer.</Detail>
                                <Detail>Chiangrai</Detail>
                            </Card>
                        </Text>
                        <Year right>
                            <Card right className="custom"> MAY 2016 - IN PROGRESS</Card>
                        </Year>
                    </Timeline>
                </Box>
                <Box style={{marginTop: '50px' }}>
                    <h3>SKILLS</h3>
                    <Flex>
                        <Chart percent="96" skillName="HTML5 / CSS3"></Chart>
                        <Chart percent="85" skillName="Javascript"></Chart>
                        <Chart percent="89" skillName="PHP"></Chart>
                    </Flex>
                    <Flex>
                        <Chart percent="40" skillName="React.js / Next.js"></Chart>
                    </Flex>
                </Box>
            </Container>
        )
    }
}

export default App;