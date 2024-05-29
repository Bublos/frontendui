import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `{
    result: planPage(limit: 100) {
      lessons {
        id
        name
    }
  }`

export const FetchLessonsAsyncAction = CreateAsyncActionFromQuery(query)