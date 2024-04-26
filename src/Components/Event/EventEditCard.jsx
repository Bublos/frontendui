/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateEventAsyncAction } from '../../Queries/UpdateEventAsyncAction'
import { EventEditType } from './EventEditType'

// const changedAsyncActioj = (item)=> {
//     const changedItem = {...item, value: Number(item.value)}
//     return UpdateEventAsyncAction(changedItem)
// }

export const EventEditCard = ({event}) => {
    return (
        <CardCapsule  title={"Událost - atributy: " + event?.name}>
            <Row>
                <Col>
                    <EditableAttributeText item={event} attributeName ="name" label="Název" asyncUpdater={UpdateEventAsyncAction}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <EventEditType event = {event}/>
                </Col>
            </Row>
        </CardCapsule>
    )
}
