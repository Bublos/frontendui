// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
//import { UserLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { EventLargeCard } from "../Components/Event/EventLargeCard"
import { FetchSubEventsByIdAsyncAction } from "../Queries/FetchSubEventsByIdAsyncAction"
import { SubEventsEditCard } from "../Components/Event/SubEventsEditCard"
import { EventCreateButton } from "../Components/Event/EventCreateButton"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst subEvents", success: "Načtení subEvents se povedlo"})
export const EventsEditPage = ()  => {
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
                <SubEventsEditCard subEvents={event.subEvents} />
            </EventLargeCard>


        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}