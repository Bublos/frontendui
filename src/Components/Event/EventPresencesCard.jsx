/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { EventLink } from './EventLink'
import { UserLink } from '../User/UserLink'

const PresenceRow = ({presence}) => {
    return (
        <tr>
            <td><UserLink user={presence?.user} /></td>
            <td>{presence?.invitationType?.name}</td>
            <td>{presence?.presenceType?.name}</td>
        </tr>
    )
}

export const EventPresencesCard = ({event}) => {
    const presences = event?.presences || []
    return (
        <CardCapsule  title={<>Událost <EventLink event={event } /></>}>
            <table className='table table-striped table-bordered table-sm'>
                <thead>
                    <tr>
                        <th>Kdo</th>
                        <th>Pozvánka</th>
                        <th>Účast</th>
                    </tr>
                </thead>
                <tbody>
                    {presences.map(
                        p => <PresenceRow key={p.id} presence={p} />
                    )}
                </tbody>
            </table>
        </CardCapsule>
    )
}