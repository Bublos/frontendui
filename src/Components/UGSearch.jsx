/* eslint-disable react/prop-types */
import { CardCapsule, TextInput, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { useEffect, useState } from "react"
import { FetchSearchAsyncAction } from "../Queries/FetchSearchAsyncAction"
import { Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { UserLink } from "./User/UserLink"
import { GroupLink } from "./Group"
import { useSearchParams } from "react-router-dom"

const ShowUser = ({user}) => {
    return (
        <>
            <UserLink user={user} />
            <br />
        </>
    )
}

const ShowGroup = ({group}) => {
    return (
        <>
            <GroupLink group={group} />
            <br />
        </>
    )
}

const Nevim = ({item}) => {
    return (
        <>
            Nalezl jsem toto : {JSON.stringify(item)}
        </>
    )
}

const LinkMap = {
    GroupGQLModel: ({item}) => <GroupLink group={item} />,
    UserGQLModel: ({item}) => <UserLink user={item} />,
}

const ShowResult = ({item}) => {
    const Component = LinkMap[item?.__typename] || Nevim
    return (
        <>  
            <Component item={item} />
            <br />
        </>
    )
}

export const UGSearch = ({phrase}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams)
    console.log(searchParams.get("term"))
    const [phrase_, setPhrase] = useState(phrase || searchParams.get("term") || "")
    const [results, setResults] = useState([])
    const dispatch = useDispatch()
    const onChange = (newValue) => {
        setPhrase(oldvalue => {
            const lowercase = newValue.toLowerCase()
            // if (lowercase.length > 2) {
            //     dispatch(FetchSearchAsyncAction({str: lowercase}))
            // }
            setSearchParams({term : newValue})
            return lowercase
        })
    }

    useEffect( () => {
        const lowercase = phrase_.toLowerCase()
        if (lowercase.length > 2) {
            console.log("useEffect with " + lowercase)
            dispatch(FetchSearchAsyncAction({str: lowercase}))
            .then(
                (json) => {
                    console.log("useEffect end", json)
                    const r = json?.data?.resultall
                    if (r) {
                        setResults(r)
                    }
                }
            )
        }
    }, [dispatch, phrase_])
    
    // if (phrase || searchParams.get("term")) {
    //     let lowercase = phrase || searchParams.get("term")
    //     lowercase = lowercase.toLowerCase()
    //     // onChange(phrase)
    //     // dispatch(FetchSearchAsyncAction({str: lowercase}))
    // }

    const items = useSelector(state => state["items"])
    // const anys = (phrase_.length > 2)?Object.values(items).filter(
    //     i => (i?.fullname || i?.name || '').toLowerCase().includes(phrase_)
    // ):[]
    const anys = results
    console.log(anys)
    return (
        <>
            <CardCapsule title="Hledání">
                <TextInput value={phrase_} onChange={onChange} />
            </CardCapsule>
            <CardCapsule title="Výsledky">
                {anys.map(i => <ShowResult key={i.id} item={i} />)}
            </CardCapsule>
        </>        
    )
}