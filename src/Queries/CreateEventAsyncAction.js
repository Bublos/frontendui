import { CreateAsyncActionFromMutation} from "@hrbolek/uoisfrontend-shared/src"
 
const mutation = `
mutation($id: UUID!,
    $name: String!, $startdate: DateTime, $enddate: DateTime,
    $type_id: UUID!, $masterevent_id: UUID
  ) {
    result: eventInsert(event: {
      id: $id,
      name: $name, startdate: $startdate, enddate: $enddate,
      typeId: $type_id, mastereventId: $masterevent_id
    })
    {
      id
      msg
      result: event {
        id
        lastchange
        name
        startdate
        enddate
        eventType {
          id
          name
        }
      }
    }
  }
`
 
export const CreateEventAsyncAction = CreateAsyncActionFromMutation(mutation)