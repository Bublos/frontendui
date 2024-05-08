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
    return (
        <CardCapsule  title={<>Událost <EventLink event={event } /></>}>
            <Row>
                <Col>
                    <EditableAttributeText item={event} attributeName ="name" label="Název" asyncUpdater={UpdateEventAsyncAction}/>
                </Col>
            </Row>
            {/* <Row>
                <Col>
                    <EventEditType event = {event}/>
                </Col>
            </Row> */}
        </CardCapsule>
    )
}
