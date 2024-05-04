/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeSelect, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GroupLink } from './GroupLink'
import { UpdateGroupAsyncAction } from '../../Queries'
import { RoleTypeSearch } from '../RoleTypeSearch'

export const GroupEditCard = ({group}) => {
    const mastergroup_id = group?.mastergroup?.id
    const grouptype_id = group?.grouptype?.id
    const groupEx = {...group, mastergroup_id, grouptype_id}
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

            <Row>
                <Col>
                    <EditableAttributeText item={groupEx} attributeName="name" label="Jméno" asyncUpdater={UpdateGroupAsyncAction} />
                </Col>
            </Row>

            <Row>
                <Col>
                    <RoleTypeSearch />
                </Col>
            </Row>            
            <Row>
                <Col>
                    <EditableAttributeSelect item={groupEx} attributeName="mastergroup_id" label="Nadřízený" asyncUpdater={UpdateGroupAsyncAction} >
                        <option value={mastergroup_id}>Univerzita</option>
                        <option value={mastergroup_id}>Fakulta</option>
                    </EditableAttributeSelect>
                </Col>
            </Row>
            {/* EditableAttributeSelect */}

        </CardCapsule>

    )
}
