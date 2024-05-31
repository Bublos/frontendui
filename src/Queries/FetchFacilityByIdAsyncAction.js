import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: facilityById(id: $id) {
      id
      name
      }
    }`

export const FetchFacilityByIdAsyncAction = CreateAsyncActionFromQuery(query)