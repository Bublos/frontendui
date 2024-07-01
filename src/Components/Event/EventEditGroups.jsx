/* eslint-disable react/prop-types */
import { CardCapsule, DeleteButton, Dialog, useDispatch, CreateAsyncQueryValidator, SelectInput, SearchInput} from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateEventAsyncAction } from '../../Queries/UpdateEventAsyncAction'
import { EventEditType } from './EventEditType'
import { EventLink } from './EventLink'
import { useCallback, useState } from 'react'
import { EventEditPlace } from './EventEditPlace'
import { FetchSearchGroupAsyncAction } from '../../Queries/FetchSearchGroupAsyncAction'
import {  EventGroupInsertAsyncAction } from '../../Queries/EventGroupInsertAsyncAction'
import { FetchEventByIdAsyncAction } from '../../Queries/FetchEventByIdAsyncAction'
import { EventGroupDeleteAsyncAction } from '../../Queries/EventGroupDeleteAsyncAction'
import { GroupLink } from '@hrbolek/uoisfrontend-users/src'
/* import { FetchSearchGroupAsyncAction } from '../../Queries/FetchSearchGroupAsyncAction'
import { EventEditGroup } from './EventEditGroup' */

// const changedAsyncActioj = (item)=> {
//     const changedItem = {...item, value: Number(item.value)}
//     return UpdateEventAsyncAction(changedItem)
// }


const AddGroupDialog = ({onCreate}) => {
    const [visible, setVisible] = useState(false)
    const [data, setData] = useState({
        groupId:null        
    })
    const onOk = () => {
        setVisible(false)
        onCreate({...data})
    }

    const onCancel = () => {
        setVisible(false)
    }
    const onOpen = () => {
        setVisible(true)
    }
    const onChange = useCallback((atributeName) => (value) => {
        setData(oldData => {
            const newData =  {...oldData}
            newData[atributeName] = value
            console.log(newData)
            return newData
        })
    }, [setData])

    if (visible) {
        return (
            <Dialog title="Výběr skupiny" onOk={onOk} onCancel={onCancel}>
                {/* <div className="form-floating">
                    <TextInput type={"number"} id={"share"} value={data.share} onChange={onChange("share")} />
                    <label htmlFor={"share"}>share</label>
                </div> */}
                <SearchInput title="Výběr skupiny" onSelect={onChange("groupId")} FetchByPatternAsyncAction={FetchSearchGroupAsyncAction} />
            </Dialog>
        )
    } else {
        return (
            <button className='btn btn-success form-control' onClick={onOpen}>+</button>
        )
    }
}


const GroupRow = ({group, event}) => {
    const dispatch = useDispatch()
    const onClick=()=>{
        const updater = async () => {
            const variables={groupId: group.id, eventId: event.id}
            await dispatch(EventGroupDeleteAsyncAction(variables))
            await dispatch(FetchEventByIdAsyncAction(event))
        }
        updater()
    }
    return (
        <tr>
            <td><GroupLink group={group} /></td>
            <td><DeleteButton onClick={onClick}>D</DeleteButton></td>
        </tr>
    )
}

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se přidat skupinu", success: "Přidání skupiny se povedlo"})
export const EventEditGroups = ({groups}) => {
    const dispatch=useDispatch()
    
    
    const onCreate = (data) => {
        const [onResolve, onReject] = validator(dispatch)
        const fullRecord = {...data,eventId: event.id}
        console.log("fullRecord", fullRecord)
        dispatch(
            EventGroupInsertAsyncAction(fullRecord)
        ).then(onResolve, onReject)
        .then(() => {
            // dispatch(GroupAsyncActions.read({id: group.id}))
            dispatch(FetchEventByIdAsyncAction(event))
        })
    }
    
    
    
    return (
        <>
        <CardCapsule title={<>Skupiny </>}>
        <table className='table table-striped table-bordered table-sm'>
            <thead>
                <tr>
                    <th>Název</th>
                    <th>Smazat</th>
                </tr>
            </thead>
            <tbody>
                {groups.map(
                    g => <GroupRow key={g.id} group={g} event={event}/>
                )}
            <tr>
                {/* <td colSpan={5}><button className='btn btn-success form-control' >+</button></td> */}
                <td colSpan={5}><AddGroupDialog event={event} onCreate={onCreate}/></td>
            </tr>
            </tbody>
        </table>
        </CardCapsule>
        </>
    )
}
