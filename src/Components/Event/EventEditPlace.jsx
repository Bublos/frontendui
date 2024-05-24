import { useFreshItem, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src';
import { UpdateEventAsyncAction } from '../../Queries/UpdateEventAsyncAction';
import { FetchFacilityAsyncAction } from '../../Queries/FetchFacilityAsyncAction';
import { useState, useEffect } from 'react';

const id = "7132701c-574a-41fe-9d52-17d68d20dab1";

export const EventEditPlace = ({ event }) => {
    const [facilitydata, setFacilityData] = useState([]);
    const [facility, facilityPromise] = useFreshItem({ id }, FetchFacilityAsyncAction);

    useEffect(() => {
        if (facilityPromise && typeof facilityPromise.then === 'function') {
            facilityPromise.then(json => {
                const facilities = json?.data?.result;
                if (facilities) {
                    setFacilityData(facilities);
                }
            }).catch(error => {
                console.error("Failed to fetch facilities:", error);
            });
        } else {
            console.error("facilityPromise is not a valid promise:", facilityPromise);
        }
    }, [facilityPromise]);

    const eventEx = { ...event, placeId: event?.placeId, place: event?.place };

    const handleUpdate = (updatedEvent) => {
        const selectedFacility = facilitydata.find(facility => facility.id === updatedEvent.placeId);
        const updatedEventWithPlace = {
            ...updatedEvent,
            place: selectedFacility ? selectedFacility.name : ''
        };
        return UpdateEventAsyncAction(updatedEventWithPlace);
    };

    return (
        <div>
            <EditableAttributeSelect item={eventEx} attributeName="placeId" label="Místo" asyncUpdater={handleUpdate}>
                {facilitydata.map(facility => (
                    <option key={facility.id} value={facility.id}>{facility.name}</option>
                ))}
            </EditableAttributeSelect>
        </div>
    );
};
