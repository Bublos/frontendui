import { useFreshItem, EditableAttributeSelect, SearchInput, useDispatch, CardCapsule } from '@hrbolek/uoisfrontend-shared/src';
import { UpdateEventAsyncAction } from '../../Queries/UpdateEventAsyncAction';
import { useState, useEffect } from 'react';
import { EventLink } from './EventLink';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FetchSearchFacilityAsyncAction } from '../../Queries/FetchSearchFacilityAsyncAction';

const id = "7132701c-574a-41fe-9d52-17d68d20dab1";

export const EventEditPlace = ({ event }) => {
    const dispatch = useDispatch();
    const [facilityData, setFacilityData] = useState([]);
    const [facility, facilityPromise] = useFreshItem({ id }, FetchSearchFacilityAsyncAction);

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

    const handleUpdate = async (placeId) => {
        const selectedFacility = facilityData.find(facility => facility.id === placeId);
        const updatedEvent = {
            ...event,
            placeId,
            place: selectedFacility ? selectedFacility.name : ''
        };

        try {
            await dispatch(UpdateEventAsyncAction(updatedEvent));
        } catch (error) {
            console.error("Failed to update event:", error);
        }
    };

        return (
            <CardCapsule title={<>Místo < EventLink event={event }/></>}>
                <Row>
                    <Col>
                    <SearchInput
                label="Výběr Místa"
                FetchByPatternAsyncAction={FetchSearchFacilityAsyncAction}
                onSelect={handleUpdate}
            />
                    </Col>
                </Row>
                
            </CardCapsule>
        );
};
