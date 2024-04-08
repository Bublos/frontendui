/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateEvenAsyncAction } from '../../Queries/UpdateEventAsyncAction'


export const EventEditCard = ({event}) => {
    return (
        <CardCapsule  title={"Událost - atributy: " + event?.name}>
            
            <Row>
                <Col>Název</Col>
                <Col>{event?.name}</Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={event} attributeName ="name" label="Název" asyncUpdater={UpdateEvenAsyncAction}/>
                </Col>
            </Row>
            <Row>
                <Col>Počátek</Col>
                <Col>{event?.startdate}</Col>
            </Row>
            <Row>
                <Col>Konec</Col>
                <Col>{event?.enddate}</Col>
            </Row>
        </CardCapsule>
    )
}
