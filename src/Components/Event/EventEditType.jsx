/* eslint-disable react/prop-types */
import { useFreshItem, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src'
import { UpdateEventAsyncAction } from '../../Queries/UpdateEventAsyncAction'
import { FetchEventTypesAsyncAction } from '../../Queries/FetchEventTypesAsyncAction';
import { useState } from 'react';

//const {id} = useParams()
    //const [onResolve, onReject] = validator(useDispatch())
    //const [user, userPromise] = useFreshItem({id}, FetchUserByIdAsyncAction)
    //userPromise.then(onResolve, onReject)
const id = "7132701c-574a-41fe-9d52-17d68d20dab1"
export const EventEditType = ({event}) => {
    const [eventtypes, eventtypesPromise] = useFreshItem({id}, FetchEventTypesAsyncAction)
    const [eventtypesdata, setThem] = useState([])
    eventtypesPromise.then(json => {
        console.log(json)
        const r = json?.data?.result
        if (r) {
            setThem(r)
            console.log(r)
        }
    })
    const eventEx = {...event, eventType_id: event?.eventType.id};

    return (
        <div>
            <EditableAttributeSelect item={eventEx} attributeName ="eventType_id" label="Typ" asyncUpdater={UpdateEventAsyncAction}>
                <option value = "a517c2fd-8dc7-4a2e-a107-cbdb88ba2aa5">Školní rok</option>
                <option value = "69ec2b0b-a39d-40df-9cea-e295b36749c9">Semestr</option>
            </EditableAttributeSelect>
            {JSON.stringify(eventtypesdata)}
        </div>
    );
};