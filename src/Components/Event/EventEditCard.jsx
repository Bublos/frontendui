/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateEventAsyncAction } from '../../Queries/UpdateEventAsyncAction'
import { EventEditType } from './EventEditType'
import { EventLink } from './EventLink'

// const changedAsyncActioj = (item)=> {
//     const changedItem = {...item, value: Number(item.value)}
//     return UpdateEventAsyncAction(changedItem)
// }

export const EventEditCard = ({event}) => {

    /* const onCancel = () => {}
    const onOk = () => {}
    const [visible, setVisible] = useState(true) */
    /* const event_={...event,place:event?.place||""} */
    let event_ = {...event};
    if (event_.place === null) {
        event_.place = '';
    }
    return (
        <CardCapsule  title={<>Událost <EventLink event={event } /></>}>
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
            <Row>
                <Col>
                    <EditableAttributeText item={event} attributeName="startdate" label="Počátek" asyncUpdater={UpdateEventAsyncAction} type="datetime-local" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={event} attributeName="enddate" label="Konec" asyncUpdater={UpdateEventAsyncAction} type="datetime-local" />
                </Col>
            </Row>
            {/* <Row>
                <Col>
                    <EditableAttributeText item={event_} attributeName="place" label="Místo" asyncUpdater={UpdateEventAsyncAction} />
                </Col>
            </Row> */}
        </CardCapsule>
    )
}
