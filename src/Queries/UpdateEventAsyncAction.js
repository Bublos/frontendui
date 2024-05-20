import {CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `
mutation($id: UUID!, $lastchange: DateTime!,
  $name: String, $startdate: DateTime, $enddate: DateTime,
	$eventType_id: UUID, $place: String
) {
  result: eventUpdate(event:{
    id: $id, lastchange: $lastchange,
    name: $name, startdate: $startdate, enddate:$enddate,
  	typeId: $eventType_id, place: $place
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
      place
      eventType{
        id
        name
      }
    }
  }
}`

  export const UpdateEventAsyncAction = CreateAsyncActionFromMutation(mutation)