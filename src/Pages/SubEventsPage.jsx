// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
//import { UserLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchEventByIdAsyncAction } from "../Queries/FetchEventByIdAsyncAction"
import { EventLargeCard } from "../Components/Event/EventLargeCard"
import { EventsSVG } from "../Components/Event/EventsSVG"
import { FetchSubEventsByIdAsyncAction } from "../Queries/FetchSubEventsByIdAsyncAction"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst uživatele", success: "Načtení uživatele se povedlo"})
export const SubEventsPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [event, eventPromise] = useFreshItem({id}, FetchSubEventsByIdAsyncAction )
    eventPromise.then(onResolve, onReject)

    if (event) {
        return (
            //<UserLargeCard user={user} />
            //<div>
            //    Eventy nahrány
            //    {JSON.stringify(event)}
            //</div>
            <EventLargeCard event={event}>
                <EventsSVG events = {event.subEvents} />
            </EventLargeCard>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}