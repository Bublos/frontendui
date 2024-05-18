import React, { useState } from 'react';
const heightUnit = 24
const widthUnit = 25
const defaultwidth_half = widthUnit << 1
const defaultheight_half = (heightUnit << 1) + heightUnit
const defaultwidth = defaultwidth_half * 3
const defaultheight = defaultheight_half * 2




const EventRectangle = ({X, Y, L1, L2, L3, L4, width=defaultwidth, height=defaultheight}) => {
    return (
        <>
            <rect width={width} height={height} x={X} y={Y} rx="2" ry="2" fill={"#7f7f7f7f"} stroke="black" />
            <text x={X} y={Y} fontSize="2em" fontFamily="serif">
                <tspan dy={28} x={X+10}>{L1}</tspan>
                <tspan dy={40} x={X+10}>{L2}</tspan>
                <tspan dy={40} x={X+10}>{L3}</tspan>
                <tspan dy={40} x={X+10}>{L4}</tspan>
            </text>
        </>
    )
}

const EventDayHeader = ({day, Y}) => {
    return (
        <g>
            {/* <EventRectangle X={-200} Y={Y} L1={day} L2={day} L3={day} L4={day} height="600"/> */}
            <EventRectangle X={-defaultwidth * 2} Y={Y} L4={day} height={defaultheight * 4}/>
            <EventRectangle X={-defaultwidth} Y={Y + 0} L2={"1-2"} />
            <EventRectangle X={-defaultwidth} Y={Y + defaultheight} L2={"3-4"} />
            <EventRectangle X={-defaultwidth} Y={Y + defaultheight * 2} L2={"5-6"} />
            <EventRectangle X={-defaultwidth} Y={Y + defaultheight * 3} L2={"7-8"} />
        </g>
        // <EventRectangle X={-100} Y={Y} L2={day} />
    )
}

const WeekHeader = ({week, X}) => {
    return (
        <g>
            <rect width={defaultwidth} height={defaultheight_half} x={X} y={-defaultheight_half} rx="2" ry="2" fill={"#7f7f7f7f"} stroke="black" />
            <text x={X} y={-defaultheight_half} fontSize="2em" fontFamily="serif">
                <tspan dy={28} x={X+10}>{week}</tspan>
            </text>
        </g>
    )
}

const days = [
    "Po", "Út", "St", "Čt", "Pá"
]
/* const weeks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] */
const weeks = Array.from({length: 52}, (_, i) => i + 1); // weeks from 1 to 52

const EventWeekHeader = () => {
    return (
        <g>
            {days.map( (v, i) => <EventDayHeader key={v} X={0} Y={defaultheight * 4 * i} day={v}/>)}
            {weeks.map( (w, i) => <WeekHeader key={w} X={defaultwidth * i} week={w} />)}
        </g>
    )
}



export function getWeekNumber(dateString) {
    const date = new Date(dateString);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    const week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

const Event = ({referenceMonday, event}) => {
    const diffTime = Math.abs(new Date(event.startdate) - referenceMonday);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    const weekNumber = getWeekNumber(event.startdate);
    const X_week = weekNumber * defaultwidth;
    /* const X = weekNumber * defaultwidth; */
    return (
        <g>
            <clipPath id="myClip">
                <rect width={defaultwidth} height={defaultheight * 4 * 4} x={0} y={0}  />
            </clipPath>
            <g clipPath="url(#myClip)">
                <EventRectangle X={75} Y={0} L2={event?.name} /> 
            </g>
        </g>

    )
}

/* export const EventsSVG = ({events}) => {
    const now = new Date()
    const prevMonday = new Date(now.getFullYear(), now.getMonth(), (now.getDate()-now.getDay() + 1))
    return (
        <svg viewBox={"-200 -150 2000 3200"} width="100vmin" height="100vmin" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow" />
            <EventWeekHeader />
            {events.map(e => <Event key={e.id} referenceMonday={prevMonday} event={e}/>)}
        </svg>
    )
} */

export const EventsSVG = ({events}) => {
    const [scroll, setScroll] = useState(0);
    const now = new Date()
    const prevMonday = new Date(now.getFullYear(), now.getMonth(), (now.getDate()-now.getDay() + 1))

    const handleScroll = (event) => {
        setScroll(parseInt(event.target.value, 10));
    };

    return (
        <div>
            <input type="range" min="0" max={weeks.length - 16} value={scroll} onChange={handleScroll} />
            <svg viewBox={"-200 -150 2000 3200"} width="100vmin" height="100vmin" xmlns="http://www.w3.org/2000/svg">
                <g transform={`translate(${-scroll * defaultwidth}, 0)`}>
                    <EventWeekHeader />
                    {events.map(e => <Event key={e.id} referenceMonday={prevMonday} event={e}/>)}
                </g>
            </svg>
        </div>
    )
}