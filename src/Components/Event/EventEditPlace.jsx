/* eslint-disable react/prop-types */
import { useFreshItem, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src'
import { UpdateEventAsyncAction } from '../../Queries/UpdateEventAsyncAction'
import { FetchEventTypesAsyncAction } from '../../Queries/FetchEventTypesAsyncAction.js';
import { useState } from 'react';
import { FetchFacilityAsyncAction } from '../../Queries/FetchFacilityAsyncAction.js';

//const {id} = useParams()
    //const [onResolve, onReject] = validator(useDispatch())
    //const [user, userPromise] = useFreshItem({id}, FetchUserByIdAsyncAction)
    //userPromise.then(onResolve, onReject)
const id = "7132701c-574a-41fe-9d52-17d68d20dab1"
export const EventEditPlace = ({event}) => {
    const [facilitytypes, facilityPromise] = useFreshItem({id}, FetchFacilityAsyncAction)
    const [facilitydata, setThem] = useState([])
    facilityPromise.then(json => {
        console.log(json)
        const r = json?.data?.result
        if (r) {
            setThem(r)
            console.log(r)
        }
    })
    const eventEx = {...event, placeId: event?.placeId, place: event?.place};

    return (
        <div>
            <EditableAttributeSelect item={eventEx} attributeName ="placeId" label="Místo" asyncUpdater={UpdateEventAsyncAction}>
                {facilitydata.map(facility => <option key= {facility.id} value={facility.id}>{facility.name}</option>)}
                {/*<option value = "a517c2fd-8dc7-4a2e-a107-cbdb88ba2aa5">Školní rok</option>
                <option value = "69ec2b0b-a39d-40df-9cea-e295b36749c9">Semestr</option>*/}
            </EditableAttributeSelect>
            {/* {JSON.stringify(eventtypesdata)} */}
        </div>
    );
};