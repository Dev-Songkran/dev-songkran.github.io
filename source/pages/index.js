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
const Icon = styled.i`
    padding: 10px;
    width: 35px;
    height: 35px;
    display: inline-block;
    text-align: center;
    border-radius: 100%;
    border: 1px solid ${props => props.color ? props.color : '#fff'};
    color: ${props => props.color ? props.color : '#fff'};
    transition: all 0.2s;
    margin: 0 5px;
    
    &:hover{
        background: ${props => props.color ? props.color : '#fff'};
        color: #fff;
    }
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
const Language = styled.div`
    position: fixed;
    right: 20px;
    padding: 10px;
    border: 1px solid #f197a3;
    border-radius: 100%;
    background:#fff;
    height: 40px;
    width: 40px;
    line-height: 18px;
    transition: all 0.2s;
    cursor: pointer;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
    z-index: 999999999;
    &:hover{
        background: #f197a3;
        color: #fff;
    }
`
class App extends Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
      this.state = {TH : 
                        {
                            name: 'สงกรานต์ วิชิตพงษ์',
                            introduce: 'เป็น Front-end และ Back-end Developer จากประเทศไทย',
                            address: { a: 'ที่อยู่' ,b:'263 ซ. 14 รัตนอุทิศ ต.หาดใหญ่ อ.หาดใหญ่ จ.สงขลา 90110 ประเทศไทย' },
                            email: 'อีเมล',
                            tel: 'เบอร์โทรฯ',
                            website : 'เว็บไซต์',
                            ene : {
                                    topic : 'การศึกษาและประสบการณ์',
                                    edu : { bac:'ปริญญาตรีสาขาวิชาวิทยาศาสตร์และเทคโนโลยี',university:'มหาวิทยาลัยหาดใหญ่',province:'สงขลา',year:'2554 - 2558'},
                                    work : { 
                                                1 : {job: 'รับจ้างอิสระ',position:'รับทำเว็บไซต์, ออกแบบกราฟฟิก',year : 'กค. 2558 - พย. 2558',at:'สงขลา'}, 
                                                2 : {job:'เชียงรายโฟกัส',position:'Front-End & Back-End Developer.',year : 'พค. 2016 - IN PROGRESS',at:'เชียงราย'}
                                            }
                                },
                        },
                    EN : 
                        {
                            name : 'Songkran Wichitpong',
                            introduce :"I'm a front-end and back-end developer from Thailand",
                            address : {a:'address',b:' 263 , 14 Lane , Rattana Uthit Rd., Hatyai Sub-district, Hatyai District, Songkhla, 90110 ,Thailand.'},
                            email: 'Email',
                            tel: 'Tel',
                            website : 'Website',
                            ene : {
                                    topic : 'EDUCATION AND EXPERIENCE',
                                    edu : { bac:'Bachelor of Science & Technology.',university:'Hatyai University',province:'Songkhla',year:'2011 - 2015'},
                                    work : { 
                                                1 : { job:'Freelance',position:'Front-End Developer, Graphic Designer',year : 'Jul 2015 - Nov 2015',at:'Songkhla'}, 
                                                2 : { job:'Chiangraifocus',position:'Front-End & Back-End Developer.',year : 'May 2016 - IN PROGRESS',at:'Chiangrai'}
                                            }
                                },
                        }
                    };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
    render(){
        const {isToggleOn,TH,EN} = this.state
        return (
            <Container>
                <Language onClick={this.handleClick}>{isToggleOn ? 'TH' : 'EN'}</Language>
                <Img width="200" height="200" src="../static/media/my.1bda1d7a.jpg?310000"/>
                <Myname>{isToggleOn ? TH.name : EN.name}</Myname>
                <Detail>{isToggleOn ? TH.introduce : EN.introduce}</Detail>
                <Detail><b>{isToggleOn ? TH.address.a : EN.address.a} : </b>{isToggleOn ? TH.address.b : EN.address.b}</Detail>
                <Detail mt="20" mb="10"><b>{isToggleOn ? TH.email : EN.email} : </b> s.wichitpong@gmail.com, <b>{isToggleOn ? TH.tel : EN.tel} : </b>064-6099309</Detail>
                <Detail mb="10"><b>{isToggleOn ? TH.website : EN.website} : </b><Link href="https://dev-songkran.github.io"><a>https://dev-songkran.github.io</a></Link></Detail>
                <Detail>
                    <Link href="https://facebook.com/k.crono">
                        <a target="_blank"><Icon color="#3b5998" className="fa fa-facebook"></Icon></a>
                    </Link>
                    <Link href="https://twitter.com/@dev_Songkran">
                        <a target="_blank"><Icon color="#00b2ff" className="fa fa-twitter"></Icon></a>
                    </Link>
                    <Link href="https://github.com/dev-songkran">
                        <a target="_blank"><Icon color="#333333" className="fa fa-github-alt"></Icon></a>
                    </Link>
                </Detail>
                <Box>
                    <h3>{isToggleOn ? TH.ene.topic : EN.ene.topic}</h3>
                    <Timeline svg="../static/svg/book.svg">
                        <Text left>
                            <Card left>
                                <h3>{isToggleOn ? TH.ene.edu.bac : EN.ene.edu.bac}</h3>
                                <Detail>{isToggleOn ? TH.ene.edu.university : EN.ene.edu.university}</Detail>
                                <Detail>{isToggleOn ? TH.ene.edu.province : EN.ene.edu.province}</Detail>
                            </Card>
                        </Text>
                        <Year right>
                            <Card right className="custom"> {isToggleOn ? TH.ene.edu.year : EN.ene.edu.year} </Card>
                        </Year>
                    </Timeline>
                    <Timeline svg="../static/svg/coffe.svg">
                        <Year left>
                            <Card left className="custom"> {isToggleOn ? TH.ene.work[1].year : EN.ene.work[1].year }</Card>
                        </Year>
                        <Text right>
                            <Card right>
                                <h3>{isToggleOn ? TH.ene.work[1].job : EN.ene.work[1].job}</h3>
                                <Detail>{isToggleOn ? TH.ene.work[1].position : EN.ene.work[1].position}</Detail>
                                <Detail>{isToggleOn ? TH.ene.work[1].at : EN.ene.work[1].at}</Detail>
                            </Card>
                        </Text>
                    </Timeline>
                    <Timeline svg="../static/svg/coffe.svg">
                        <Text left>
                            <Card left>
                                <h3>{isToggleOn ? TH.ene.work[2].job : EN.ene.work[2].job}</h3>
                                <Detail>{isToggleOn ? TH.ene.work[2].position : EN.ene.work[2].position}</Detail>
                                <Detail>{isToggleOn ? TH.ene.work[2].at : EN.ene.work[2].at}</Detail>
                            </Card>
                        </Text>
                        <Year right>
                            <Card right className="custom"> {isToggleOn ? TH.ene.work[2].year : EN.ene.work[2].year }</Card>
                        </Year>
                    </Timeline>
                </Box>
                <Box style={{marginTop: '50px' }}>
                    <h3>SKILLS</h3>
                    <Flex style={{marginBottom:'30px'}}>
                        <Chart percent="96" skillName="HTML5 / CSS3"></Chart>
                        <Chart percent="89" skillName="PHP"></Chart>
                        <Chart percent="85" skillName="mySQL"></Chart>
                    </Flex>
                    <Flex>
                        <Chart percent="85" skillName="javascript / jQuery"></Chart>
                        <Chart percent="40" skillName="React.js / Next.js"></Chart>
                    </Flex>
                </Box>
            </Container>
        )
    }
}

export default App;