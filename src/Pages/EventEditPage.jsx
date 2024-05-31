// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
//import { UserLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchEventByIdAsyncAction } from "../Queries/FetchEventByIdAsyncAction"
import { EventLargeCard } from "../Components/Event/EventLargeCard"
import { EventEditCard } from "../Components/Event/EventEditCard"
import { EventEditGroup } from "../Components/Event/EventEditGroup"
import { EventEditPlace } from "../Components/Event/EventEditPlace"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst event", success: "Načtení eventu se povedlo"})
export const EventEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [event, eventPromise] = useFreshItem({id}, FetchEventByIdAsyncAction )
    eventPromise.then(onResolve, onReject)

    if (event) {
        return (
            //<UserLargeCard user={user} />
            //<div>
            //    Eventy nahrány
            //    {JSON.stringify(event)}
            //</div>
            <EventLargeCard event={event}>
                <EventEditCard event = {event} />
                <EventEditGroup event = {event} />
                <EventEditPlace event = {event} />
            </EventLargeCard>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}