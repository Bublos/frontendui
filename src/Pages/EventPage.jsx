// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
//import { UserLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchEventByIdAsyncAction } from "../Queries/FetchEventByIdAsyncAction"
import { EventLargeCard } from "../Components/Event/EventLargeCard"
import { SubEventsViewCard } from "../Components/Event/SubEventsViewCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst uživatele", success: "Načtení uživatele se povedlo"})
export const EventPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [event, eventPromise] = useFreshItem({id}, FetchEventByIdAsyncAction )
    eventPromise.then(onResolve, onReject)

    if (event) {
        console.log("Event", event.subEvents);
        return (
            //<UserLargeCard user={user} />
            //<div>
            //    Eventy nahrány
            //    {JSON.stringify(event)}
            //</div>
            <EventLargeCard event={event}>
                <SubEventsViewCard subEvents={event.subEvents} />
            </EventLargeCard>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}