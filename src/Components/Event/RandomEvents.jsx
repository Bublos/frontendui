import {useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import {CreateEventAsyncAction } from "../../Queries/CreateEventAsyncAction";
 
const getRandomArbitrary = (min, max) => {
    return Math.trunc(Math.random() * (max - min) + min);
}
 
const times = [["T08:00:00", "T09:30:00"], ["T09:50:00", "T11:20:00"], ["T11:40:00", "T13:10:00"], ["T14:30:00", "T16:00:00"]]
const CreateRandomEvent = ({masterevent_id}) => {
    const today = new Date()
    const randomDate = new Date(today.getFullYear(), today.getMonth(), getRandomArbitrary(1, 28))
    const randomTimes = times[getRandomArbitrary(0, 4)]
    const ISODate = randomDate.toISOString()
    const data = {
        id: crypto.randomUUID(),
        name: "Přednáška",
        type_id: "c0a12392-ae0e-11ed-9bd8-0242ac110002",
        masterevent_id: masterevent_id,
        startdate: ISODate.split("T")[0]+ randomTimes[0],
        enddate: ISODate.split("T")[0]+ randomTimes[1]
    }
    return data
}
 
export const RandomEvents = ({masterevent_id}) => {
    const dispatch = useDispatch()
    const onClick = () => {
        const counter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        const dates = counter.map(() => CreateRandomEvent({masterevent_id}))
        const awaitables = dates.map(d => dispatch(CreateEventAsyncAction(d)))
        console.log("fired creation of events", dates)
    }
    return (
        <button className="btn btn-outline-success" onClick={onClick}>+10 events</button>
    )
}

