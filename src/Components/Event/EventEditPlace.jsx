import { useFreshItem, EditableAttributeSelect, SearchInput, useDispatch, CardCapsule, ProxyLink } from '@hrbolek/uoisfrontend-shared/src';
import { UpdateEventAsyncAction } from '../../Queries/UpdateEventAsyncAction';
import { useState, useEffect } from 'react';
import { EventLink } from './EventLink';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FetchSearchFacilityAsyncAction } from '../../Queries/FetchSearchFacilityAsyncAction';
import { FetchFacilityAsyncAction } from '../../Queries/FetchFacilityAsyncAction';
import { FetchFacilityByIdAsyncAction } from '../../Queries/FetchFacilityByIdAsyncAction';
import { FetchEventByIdAsyncAction } from '../../Queries/FetchEventByIdAsyncAction';

const id = "7132701c-574a-41fe-9d52-17d68d20dab1";

export const EventEditPlace = ({ event }) => {
    const dispatch = useDispatch();
    const [facilityData, setFacilityData] = useState(null);

    const handleUpdate = async (placeId) => {
        const response = await dispatch(FetchFacilityByIdAsyncAction({ id: placeId }));
        const selectedFacility = response?.data?.result;
        setFacilityData(selectedFacility);
        await dispatch(UpdateEventAsyncAction({...event,placeId, place: selectedFacility.name}));
        await dispatch(FetchEventByIdAsyncAction({id: event.id}));
    };

        return (
            <CardCapsule title={<>Místo: <ProxyLink to={`/facilities/facility/view/${event.placeId}`}>{event.place}</ProxyLink></>}>
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
