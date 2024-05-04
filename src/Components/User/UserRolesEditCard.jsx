/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText, TableHeaderWithFilters } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UserLink } from './UserLink'
import { UpdateUserAsyncAction } from '../../Queries'


const UserRoleRow = ({index, role}) => {
    
    return (
        <tr>
            <td>{index}</td>
            <td>{role?.group?.name}</td>
            <td>{role?.roletype?.name}</td>
            <td>{role?.valid}</td>
            <td>{role?.startdate}</td>
            <td>{role?.enddate}</td>
        </tr>
    )
}

export const UserRolesEditCard = ({user}) => {
    return (       
        <CardCapsule title={<>Role <UserLink user={user } /></>} >
            <Row>
                <table className='table table-bordered'>
                    <thead>
                        {/* <TableHeaderWithFilters filter={{_and: []}} columns={[
                            {type: "str", label: "id", property: "id"}, 
                            {type: "str", label: "id", property: "id"}, 
                            {type: "str", label: "id", property: "id"}
                        ]}/> */}
                        <tr>
                            <th>#</th>
                            <th>Skupina</th>
                            <th>Typ role</th>
                            <th>Platná</th>
                            <th>Od</th>
                            <th>Do</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user?.roles.map(
                            (r, index) => <UserRoleRow key={r.id} index={index + 1} role={r} />
                        )}
                        <tr>
                            <td colSpan={6}>
                                <button className='btn btn-outline-success form-control'>Přidat</button>            
                            </td>
                        </tr>
                    </tbody>
                </table>

            </Row>
            
        </CardCapsule>
    )
}
