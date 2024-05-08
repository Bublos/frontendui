// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { EventLargeCard } from "../Components/Event/EventLargeCard"
import { FetchEventPresencesByIdAsyncAction } from "../Queries/FetchEventPresencesByIdAsyncAction"
import { EventPresencesCard } from "../Components/Event/EventPresencesCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst událost", success: "Načtení události se povedlo"})
export const EventPresencesPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [event, eventPromise] = useFreshItem({id}, FetchEventPresencesByIdAsyncAction)
    eventPromise.then(onResolve, onReject)

    if (event) {
        return (
            <EventLargeCard event={event} >
                {event.presences && event.presences.length > 0 ? (
                <EventPresencesCard event={event} />
                ) : (
                <p>Tato událost nemá žádné přítomnosti.</p>
                )}
            </EventLargeCard>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}