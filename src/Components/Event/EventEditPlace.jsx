import { useFreshItem, EditableAttributeSelect, SearchInput, useDispatch, CardCapsule } from '@hrbolek/uoisfrontend-shared/src';
import { UpdateEventAsyncAction } from '../../Queries/UpdateEventAsyncAction';
import { useState, useEffect, useCallback } from 'react';
import { EventLink } from './EventLink';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FetchSearchFacilityAsyncAction } from '../../Queries/FetchSearchFacilityAsyncAction';
import { FetchEventByIdAsyncAction } from '../../Queries/FetchEventByIdAsyncAction';

export const EventEditPlace = ({ event }) => {
    const dispatch = useDispatch();
    const [facilityData, setFacilityData] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState({}); // State to store selected place
    const currentDate = new Date().toISOString();

    const onChange = async (place) => {
        // Update selected place state
        setSelectedPlace(place);
        
        // Dispatch actions to update event
        await dispatch(UpdateEventAsyncAction({ id: event.id, lastchange: currentDate, placeId: place.id, place: place.name }));
        await dispatch(FetchEventByIdAsyncAction({ id: event.id }));
    }

    return (
        <CardCapsule title={<>Místo <EventLink event={event} /></>}>
            <Row>
                <Col>
                    <SearchInput
                        label="Výběr Místa"
                        FetchByPatternAsyncAction={FetchSearchFacilityAsyncAction}
                        onSelect={onChange}
                    />
                </Col>
            </Row>
        </CardCapsule>
    );
};
