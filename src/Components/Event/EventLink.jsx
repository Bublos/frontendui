/* eslint-disable react/prop-types */
import { Dropdown } from "react-bootstrap";
//import { Link } from "react-router-dom";
import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src"
import { base } from "../../config"

export const EventLink_ = ({event, children}) => {
    return (
        <ProxyLink to={base + "/event/view/" + event?.id}>{children?children:event?.name}</ProxyLink>
    )
}

const EventMenuItems = {
    "Editovat": "local:/event/edit",
    "Zobrazit": "local:/event/view",

}

export const EventLink = ({event, children, menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                <EventLink_ event={event}>
                    {children}
                </EventLink_>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                {/* ⋮ */}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as={"div"}><ProxyLink to={base + "/event/view/" + event?.id} >Zobrazit</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as={"div"}><ProxyLink to={base + "/event/edit/" + event?.id} >Editovat</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as={"div"}><ProxyLink to={base + "/eventpresences/view/" + event?.id} >Účast</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as={"div"}><ProxyLink to={base + "/events/edit/" + event?.id} >SubEvents</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>                
            

            )
    } else {
        return (
            <EventLink_ event={event}>{children}</EventLink_>
        )
    }
}
