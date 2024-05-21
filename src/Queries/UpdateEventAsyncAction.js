import {CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `
mutation($id: UUID!, $lastchange: DateTime!,
  $name: String, $startdate: DateTime, $enddate: DateTime,
	$eventType_id: UUID
) {
  result: eventUpdate(event:{
    id: $id, lastchange: $lastchange,
    name: $name, startdate: $startdate, enddate:$enddate,
  	typeId: $eventType_id
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
      eventType{
        id
        name
      }
    }
  }
}`

  export const UpdateEventAsyncAction = CreateAsyncActionFromMutation(mutation)