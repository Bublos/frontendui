/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateEventAsyncAction } from '../../Queries/UpdateEventAsyncAction'


export const EventEditCard = ({event}) => {

    const eventEx = {...event, eventType_id: event?.eventType.id}
    return (
        <CardCapsule  title={"Událost - atributy: " + event?.name}>
            
            <Row>
                <Col>Název</Col>
                <Col>{event?.name}</Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={event} attributeName ="name" label="Název" asyncUpdater={UpdateEventAsyncAction}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeSelect item={event} attributeName ="eventType_id" label="typ" asyncUpdater={UpdateEventAsyncAction}>
                        <option value = "a517c2fd-8dc7-4a2e-a107-cbdb88ba2aa5">Školní rok</option>
                        <option value = "69ec2b0b-a39d-40df-9cea-e295b36749c9">Semestr</option>
                    </EditableAttributeSelect>
                </Col>
            </Row>
            <Row>
                <Col>Konec</Col>
                <Col>{event?.enddate}</Col>
            </Row>
        </CardCapsule>
    )
}
