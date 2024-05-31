import React, { useState } from 'react';
import { EventLink } from './EventLink';
import { base } from '../../config';
const heightUnit = 24
const widthUnit = 25
const defaultwidth_half = widthUnit << 1
const defaultheight_half = (heightUnit << 1) + heightUnit
const defaultwidth = defaultwidth_half * 3
const defaultheight = defaultheight_half * 2




const EventRectangle = ({X, Y, L1, L2, L3,event, width=defaultwidth, height=defaultheight}) => {
    return (
        <>
            <rect width={width} height={height} x={X} y={Y} rx="2" ry="2" fill={"#7f7f7f7f"} stroke="black" /> {/* ff00007f */}
            <text x={X} y={Y} fontSize="2em" fontFamily="serif">
                <tspan dy={28} x={X+10} >
                    <a href={base + "/event/view/" + event?.id} target="_blank" rel="noopener noreferrer">{L1}</a>  {/* L1 slouží pro název subEventu (event.name) */}
                </tspan>
                <tspan dy={40} x={X+10}>{L2}</tspan> {/* L2 slouží pro text */}
                <tspan dy={52} x={X+10} >
                    <a href={"/facilities/facility/view/" + event?.placeId} target="_blank" rel="noopener noreferrer">{L3}</a>  {/* L3 slouží pro místo (event.place) */}
                </tspan> 
                {event?.groups?.map((group, index) => (
                <tspan key={index} dy={64} x={X+10}>
                    <a href={"/ug/group/view/" + group.id} target="_blank" rel="noopener noreferrer">{group.name}</a>
                </tspan>
                ))}
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

//Dny Po-Pá
const days = [
    "Po", "Út", "St", "Čt", "Pá"
]

//Dny Po-Ne (Pokud očekáváme eventy v jiných dnech než Po-Pá)
/* const days = [
    "Po", "Út", "St", "Čt", "Pá", "So", "Ne"
] */
const weeks = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
/* const weeks = Array.from({length: 52}, (_, i) => i + 1); */ // weeks from 1 to 52

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
    /* date.setHours(0, 0, 0, 0); */
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    const week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

function getYHour(startHour, startMinutes) {
    if (startHour < 9 || (startHour === 9 && startMinutes < 50)) {
        return 0; //počátek v 8:00
    } else if (startHour < 11 || (startHour === 11 && startMinutes < 20)) {
        return 1 * defaultheight; //počátek v 9:50
    } else if (startHour < 14 || (startHour === 14 && startMinutes < 30)) {
        return 2 * defaultheight; //počátek v 11:40
    } else {
        return 3 * defaultheight;// počátek v 14:30
    }
}





const Event = ({referenceMonday, event}) => {
    const diffTime = Math.abs(new Date(event.startdate) - referenceMonday);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    const weekNumber = getWeekNumber(event.startdate);
    const refWeekNumber = getWeekNumber(referenceMonday);
    const date = new Date(event.startdate);
    const dayOfWeek = (date.getDay() + 6) % 7; // 0 = Monday, 1 = Tuesday, ..., 4 = Friday
    
    //Zobrazení pouze eventů ve dnech po-pá
    let X_week = 0;
    if (dayOfWeek >= 0 && dayOfWeek <= 4) {
        X_week = ((weekNumber-refWeekNumber + 1) * defaultwidth) - defaultwidth;
    }

    //Zobrazení eventů ve dnech po-ne (Pokud očekáváme eventy v jiných dnech než Po-Pá)
    //const X_week = (weekNumber * defaultwidth) - defaultwidth;
    
    
    const Y_week = dayOfWeek * defaultheight * 4;
    const startHour = date.getHours(); // returns the hour (0-23)
    const startMinutes = date.getMinutes(); // returns the minutes (0-59)
    const Y_hour = getYHour(startHour, startMinutes);
    const time = `${startHour}:${startMinutes < 10 ? '0' : ''}${startMinutes}`;
    return (
        <g>
           {/*  <clipPath id="myClip">
                <rect width={defaultwidth} height={defaultheight * 4 * 4} x={X_week} y={Y_week + Y_hour}  />
            </clipPath>
            <g clipPath="url(#myClip)">
                
            </g> */}
            <g>
            <EventRectangle X={X_week} Y={Y_week + Y_hour} L1={event.name} L3={event.place} event={event}/> 
            </g>
        </g>

    )
}

export const EventsSVG = ({events}) => {
    const now = new Date()
    /* const prevMonday = new Date(now.getFullYear(), now.getMonth(), (now.getDate()-now.getDay() + 1)) */
    const prevMonday = new Date('2023-03-01T00:00:00');

    /* const handleScroll = (event) => {
        setScroll(parseInt(event.target.value, 10));
    }; */

    /* const handleWheel = (event) => {
        const deltaX = Math.sign(event.deltaX);
        const deltaY = Math.sign(event.deltaY);
    
        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
            // Handle horizontal scrolling
            setScrollX(prevScrollX => Math.max(0, prevScrollX + deltaX));
        } else {
            // Handle vertical scrolling
            setScrollY(prevScrollY => Math.max(0, prevScrollY + deltaY));
        }
    }; */


    return (
        <div>
            {/* <input type="range" min="0" max={weeks.length - 16} value={scroll} onChange={handleScroll} /> */}
            <svg viewBox={"400 -150 1400 3200"} width="90vmin" height="100vmin" xmlns="http://www.w3.org/2000/svg" > {/* Přidat pokud chceme scroll pomocí kolečka myši/touchpadu : onWheel={handleWheel} */}
                <g >
                {/* <g transform={`translate(${-scrollX * defaultwidth}, ${-scrollY * defaultwidth})`}> */}  {/* Přidat pokud chceme scroll pomocí kolečka myši/touchpadu */}
                    <EventWeekHeader />
                    {events.map((e) => (
                        <Event key={e.id} referenceMonday={prevMonday} event={e} />
                    ))}
                </g>
            </svg>
        </div>
    )
}