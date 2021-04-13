import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import CardsMenu from "./homeCooking";
import Tatlilar from "./tatlilar";
import Sarmalar from "./sarmalar";
import Dolmalar from "./dolmalar/dolmalar";
import Yoresel from "./yoresel";
import Pilavlar from "./pilavlar";
import Mantilar from "./mantilar";
import Login from "./login";



export default function TopNavbar(props) {

    const [sheet, setSheet] = useState("home");
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand onClick={() => setSheet("home")} href="#home">
          Home
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => setSheet("Home_Cooking")} href="#home">
            Home Cooking
          </Nav.Link>
          <Nav.Link
            onClick={() => setSheet("Local_Testing")}
            href="#Local_Testing"
          >
            Local Testing
          </Nav.Link>
          <Nav.Link onClick={() => setSheet("Stuffed")} href="#Stuffed">
            Stuffed
          </Nav.Link>
          <Nav.Link onClick={() => setSheet("Desserts")} href="#Desserts">
            Desserts
          </Nav.Link>
          <Nav.Link onClick={() => setSheet("Rice")} href="#Rice">
            Rice
          </Nav.Link>
          <Nav.Link onClick={() => setSheet("Ravioli")} href="#Ravioli">
            Ravioli
          </Nav.Link>
          <Nav.Link onClick={() => setSheet("Sarmalar")} href="#Sarmalar">
            Sarmalar
          </Nav.Link>
          <Nav.Link onClick={() => setSheet("Login")} href="#Login">
            Login
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <Container>
        {sheet === "home" || sheet === "Home_Cooking" ? (<CardsMenu list={props.product} />) : null}
        {sheet === "Desserts" ? <Tatlilar list={props.product} /> : null}
        {sheet === "Stuffed" ? <Dolmalar list={props.product} /> : null}
        {sheet === "Local_Testing" ? <Yoresel list={props.product} /> : null}
        {sheet === "Rice" ? <Pilavlar list={props.product} /> : null}
        {sheet === "Ravioli" ? <Mantilar list={props.product} /> : null}
        {sheet === "Sarmalar" ? <Sarmalar list={props.product} /> : null}
        {sheet === "Login" ? <Login /> : null}
      </Container>
    </>
  );
}
