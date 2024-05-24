import { useFreshItem, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src'
import { UpdateEventAsyncAction } from '../../Queries/UpdateEventAsyncAction.js'
import { FetchFacilityAsyncAction } from '../../Queries/FetchFacilityAsyncAction.js';
import { useState } from 'react';

const id = "7132701c-574a-41fe-9d52-17d68d20dab1"
export const EventEditPlace = ({event}) => {
    const [facilities, facilitiesPromise] = useFreshItem({id}, FetchFacilityAsyncAction)
    const [facilitiesData, setFacilitiesData] = useState([])
    facilitiesPromise.then(json => {
        const r = json?.data?.result
        if (r) {
            setFacilitiesData(r)
        }
    })
    const eventEx = {...event, place: event?.place, placeId: event?.placeId};
    

    return (
        <div>
            <EditableAttributeSelect item={eventEx} attributeName ="placeId" label="Place" asyncUpdater={UpdateEventAsyncAction}>
                {facilitiesData.map(facility => <option key={facility.id} value={facility.id}>{facility.name}</option>)}
            </EditableAttributeSelect>
        </div>
    );
};