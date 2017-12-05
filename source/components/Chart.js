import styled from 'styled-components'
import React , { Component } from 'react'

const ChartCircle = styled.div`
justify-content: space-around;
max-width: 230px;
width: 100%;
min-width: 150px;
margin: auto;
.circular-chart {
    display: block;
    margin: 10px auto;
    .circle-bg {
        fill: none;
        stroke: #eee;
        stroke-width: 2;
    }
    .circle {
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        animation: progress 1s ease-out backwards;
    }
    .percentage {
        fill: #785892;
        font-family: athiti,"sans-serif";
        font-size: 0.5em;
        text-anchor: middle;
    }
}
.circular-chart.color .circle {
    stroke: #f197a3;
}
.skill{
    text-align: center;
    font-size: 1em;
    font-weight: 400;
    color: #785892;
}
@keyframes progress {
    0% { stroke-dasharray: 0 100;}
}
`
class Chart extends Component {
    render(){
        const { percent, skillName } = this.props
        let color = null
        return (
            <ChartCircle>
                <svg viewBox="0 0 36 36" className="circular-chart color">
                <path className="circle-bg"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="circle"
                    strokeDasharray={`${percent},100`}
                    d="M18 2.0845 a -15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                <text x="18" y="20.35" className={`percentage ${color}`} >{percent}%</text>
                </svg>
                <div className="skill">{skillName}</div>
            </ChartCircle>
        )
    }
}
export default Chart