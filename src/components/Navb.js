import React from "react";
import Nav from "react-bootstrap/Nav";
import Figure from "react-bootstrap/Figure";
import "./Navb.css"
const Navb = () => {
    return (

        <Nav className="justify-content-between" activeKey="/form">
            <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="logo.png"
                />
            </Figure>
            <Nav className="justify-content-around">
                <Nav.Item>
                    <Nav.Link>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/form">Form</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link >Shopping Cart</Nav.Link>
                </Nav.Item>
            </Nav>
        </Nav>
    );
}

export default Navb;