/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GroupLink } from './GroupLink'

export const GroupRolesEditCard = ({group}) => {
    return (
        <CardCapsule title={<>Skupina <GroupLink group={group} /></>}>
            {group?.mastergroup?
                <Row>
                    <Col>Nadřízený</Col>
                    <Col><GroupLink group={group?.mastergroup} /></Col>
                </Row>
            :""}            

            <Row>
                <Col>{group?.grouptype?.name}</Col>
                <Col><GroupLink group={group} /></Col>
            </Row>
        </CardCapsule>

    )
}
