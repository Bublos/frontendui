import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { EventLink } from './EventLink'
import { UserLink } from '../User/UserLink'
import { getWeekNumber } from './EventsSVG'

const SubEventRow = ({subEvent}) => {
    const startstring = new Date(subEvent?.startdate).toDateString()
    const endstring = new Date(subEvent?.enddate).toDateString()
    const weekNumber = getWeekNumber(subEvent.startdate);
    return (
        <tr>
            {/* <td>{subEvent?.id}</td> */}
            <td>{weekNumber}</td>
            <td><EventLink event={subEvent}>{subEvent?.name}</EventLink></td>
            <td>{startstring}</td>
            <td>{endstring}</td>
        </tr>
    )
}

export const SubEventsCard = ({event}) => {
    const subEvents = event?.subEvents || []
    return (
        <CardCapsule  title={<>Událost <EventLink event={event } /></>}>
            <table className='table table-striped table-bordered table-sm'>
                <thead>
                    <tr>
                        {/* <th>ID</th> */}
                        <th>Týden</th>
                        <th>Název</th>
                        <th>Začátek</th>
                        <th>Konec</th>
                    </tr>
                </thead>
                <tbody>
                    {subEvents.map(
                        e => <SubEventRow key={e.id} subEvent={e} />
                    )}
                </tbody>
            </table>
        </CardCapsule>
    )
}