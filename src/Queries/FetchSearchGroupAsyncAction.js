import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"


const query = `query($pattern: String!, $limit: Int) {
  result: groupPage(limit: $limit, where: {name: {_ilike: $pattern}}) {
    __typename
    id
    name
  }
}`

export const FetchSearchGroupAsyncAction = CreateAsyncActionFromQuery(query)