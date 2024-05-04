// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { UserEditCard, UserLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchUserByIdAsyncAction } from "../Queries"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst uživatele", success: "Načtení uživatele se povedlo"})
export const UserEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [user, userPromise] = useFreshItem({id}, FetchUserByIdAsyncAction)
    userPromise.then(onResolve, onReject)
        
    if (user) {   
        return (
            <UserLargeCard user={user} >
                <UserEditCard user={user} />
            </UserLargeCard>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}