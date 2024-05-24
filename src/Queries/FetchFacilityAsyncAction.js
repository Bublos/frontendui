import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `{
    result: facilityPage(limit: 100) {
        id
        name
    }
  }`

export const FetchFacilityAsyncAction = CreateAsyncActionFromQuery(query)