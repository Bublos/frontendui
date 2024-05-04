/* eslint-disable react/prop-types */
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const EventLink_ = ({event, children}) => {
    return (
        <Link to={"/event/view/" + event?.id}>{children?children:event?.name}</Link>
    )
}

const UserMenuItems = {
    "Editovat": "local:/event/edit",
    "Zobrazit": "local:/event/view",

}

export const EventLink = ({event, children, menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                <EventLink_ user={user}>
                    {children}
                </EventLink_>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                {/* ⋮ */}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item ><Link to={"/event/view/" + event?.id} >Zobrazit</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to={"/event/edit/" + event?.id} >Editovat</Link></Dropdown.Item>
                    {/* <Dropdown.Item ><Link to={"/eventpresences/view/" + event?.id} >Účast</Link></Dropdown.Item> */}
                </Dropdown.Menu>
            </Dropdown>                
            

            )
    } else {
        return (
            <EventLink_ event={event}>{children}</EventLink_>
        )
    }
}
