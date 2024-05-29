import {useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import {CreateEventAsyncAction } from "../../Queries/CreateEventAsyncAction";

const CreateRandomEvent = ({masterevent_id}) => {
    let currentDate = new Date();
    let startDate = new Date(currentDate.setHours(8, 0, 0)).toISOString().split('T')[0];
    let endDate = new Date(currentDate.setHours(9, 30, 0)).toISOString().split('T')[0];
    const data = {
        id: crypto.randomUUID(),
        name: "Přednáška",
        type_id: "c0a12392-ae0e-11ed-9bd8-0242ac110002",
        masterevent_id: masterevent_id,
        startdate: startDate,
        enddate: endDate
    }
    return data
}
 
export const EventCreateButton = ({masterevent_id}) => {
    const dispatch = useDispatch()
    const onClick = () => {
        const data = CreateRandomEvent({masterevent_id});
        dispatch(CreateEventAsyncAction(data));
        console.log("fired creation of event", data);
    }
    return (
        <button className="btn btn-outline-success" onClick={onClick}>Přidej event</button>
    )
}