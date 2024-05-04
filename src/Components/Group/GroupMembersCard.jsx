/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { UserLink } from '../User/UserLink'
import { GroupLink } from './GroupLink'


const UserShort = ({user}) => {
    return (
        <>
            <UserLink user={user} /> <br/>
        </>
    )
}

export const GroupMembersCard = ({group, valid=true}) => {
    const membership = group?.memberships || []
    const filtered = (valid===null)?membership:membership.filter(m => m?.valid === valid)
    const mapped = filtered.map(m => m?.user)
    return (
        <CardCapsule title={<>Členové <GroupLink group={group} /></>}>
            {mapped.map(
                u => <UserShort key={u.id} user={u} />
            )}
        </CardCapsule>

    )
}
