// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
//import { UserLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { EventLargeCard } from "../Components/Event/EventLargeCard"
import { EventsSVG } from "../Components/Event/EventsSVG"
import { FetchSubEventsByIdAsyncAction } from "../Queries/FetchSubEventsByIdAsyncAction"
import { SubEventsCard } from "../Components/Event/SubEventCard"
import { RandomEvents } from "../Components/Event/RandomEvents"

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
                {event.subEvents && event.subEvents.length > 0 ? (
                <>
                    <EventsSVG events={event.subEvents} />
                    <SubEventsCard event={event} />
                    
                </>
                ) : (
                <p>Tento Event nemá žádné subEvents.</p>
                )}
                {/* <RandomEvents masterevent_id={event.id} /> */}
            </EventLargeCard>


        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}