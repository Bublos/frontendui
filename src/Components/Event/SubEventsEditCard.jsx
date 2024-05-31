import { CardCapsule, DeleteButton, useDispatch } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { EventLink } from './EventLink'
import { UserLink } from '../User/UserLink'
import { EventsSVG, getWeekNumber } from './EventsSVG'
import { DeleteEventAsyncAction } from '../../Queries/DeleteEventAsyncAction'
import { FetchSubEventsByIdAsyncAction } from '../../Queries/FetchSubEventsByIdAsyncAction'

const SubEventRow = ({subEvent}) => {
    const startstring = new Date(subEvent?.startdate).toDateString()
    const endstring = new Date(subEvent?.enddate).toDateString()
    const dispatch=useDispatch()
    const onClick=()=>{
        const updater = async () => {
            const variables={id: subEvent.id}
            await dispatch(DeleteEventAsyncAction(variables))
            await dispatch(FetchSubEventsByIdAsyncAction(subEvent.masterEvent.id))
        }
        updater()
    }
    /* const weekNumber = getWeekNumber(subEvent.startdate); */
    return (
        <tr>
            {/* <td>{subEvent?.id}</td> */}
            {/* <td>{weekNumber}</td> */}
            <td><EventLink event={subEvent}>{subEvent?.name}</EventLink></td>
            <td>{startstring}</td>
            <td>{endstring}</td>
            <td><DeleteButton onClick={onClick}>D</DeleteButton></td>
        </tr>
    )
}

export const SubEventsEditCard = ({subEvents}) => {
    const sortedSubEvents = [...subEvents].sort((a, b) => new Date(a.startdate) - new Date(b.startdate));
    return (
        <>
        <CardCapsule title={<>SubEvents</>}>
        <table className='table table-striped table-bordered table-sm'>
            <thead>
                <tr>
                    <th>Název</th>
                    <th>Začátek</th>
                    <th>Konec</th>
                    <th>Smazat</th>
                </tr>
            </thead>
            <tbody>
                {sortedSubEvents.map(
                    e => <SubEventRow key={e.id} subEvent={e}/>
                )}
            </tbody>
        </table>
        </CardCapsule>
        </>
    )
}