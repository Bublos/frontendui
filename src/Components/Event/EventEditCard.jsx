/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText, EditableAttributeSelect,SearchInput,useDispatch,CreateAsyncQueryValidator } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateEventAsyncAction } from '../../Queries/UpdateEventAsyncAction'
import { EventEditType } from './EventEditType'
import { EventLink } from './EventLink'
/* import { FetchSearchGroupAsyncAction } from '../../Queries/FetchSearchGroupAsyncAction'
import { EventEditGroup } from './EventEditGroup' */

// const changedAsyncActioj = (item)=> {
//     const changedItem = {...item, value: Number(item.value)}
//     return UpdateEventAsyncAction(changedItem)
// }
const validator = CreateAsyncQueryValidator({error: "Nepovedlo se přidat skupinu", success: "Přidání skupiny se povedlo"})
export const EventEditCard = ({event}) => {

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
        </CardCapsule>
    )
}
