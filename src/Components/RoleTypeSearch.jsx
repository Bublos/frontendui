/* eslint-disable react/prop-types */
import { CreateAsyncActionFromQuery, TextInput, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"



const RoleTypeQuery = `query($phrase: String!) {
    result: roleTypePage(where: {name: {_ilike: $phrase}}) {
      id
      name
    }
  }`
const Clicker = ({item, onClick}) => {
    const onClick_ = () => {
        console.log("clicked", item)
        onClick(item)
    }
    return (
        <span onClick={onClick_}>{item.name}</span>
    )
}

export const SearchBox = ({label, queryAsyncAction, C=Clicker, onSelect}) => {
    const [revealedItems, setRevealedItems] = useState([])
    const [phrase, setPhrase] = useState("")
    const [id] = useState(crypto.randomUUID())

    const dispatch = useDispatch()
    const onChange_ = async (value) => {
        setPhrase(value)
        if (value.length < 3) {
            setRevealedItems([])
            return
        }

        const variables = {phrase: `%${value.toLowerCase()}%`}
        const response = await dispatch(queryAsyncAction(variables))
        const items = response?.data?.result
        if (items) {
            setRevealedItems(items)
        }
    }
    const onSelect_ = (item) => {
        console.log("onSelect", item)
        setPhrase(item.name)
        if (onSelect) {
            onSelect(item.id)
        }
    }

    return (
        <>
            <div className="form-floating">
                <TextInput id={id} value={phrase} onChange={onChange_} />
                <label htmlFor={id}>{label}</label>
            </div>
            <ul>
                {revealedItems.map(r => <li key={r.id}><C item={r} onClick={onSelect_}/><br /></li>)}
            </ul>
            
        </>
    )
}

const RoleTypeFetch = CreateAsyncActionFromQuery(RoleTypeQuery)

export const RoleTypeSearch = ({onSelect}) => {
    
    return (
        <>
            <SearchBox label={"Typ role"} queryAsyncAction={RoleTypeFetch} onSelect={onSelect}/>
        </>        
    )
}