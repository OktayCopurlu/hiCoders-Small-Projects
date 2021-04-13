import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import manti from "./img/manti.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Yoresel(props) {
  return (
    <>
      <Container>
          <h1>Local Tastes</h1>
        <Row>
          <Col>
            <CardGroup>
              
           
                  <Card >
                    <Card.Body>
                      <Card.Img variant="top" src={manti} />
                    </Card.Body>
                    <Card.Footer>
                      <a href="./Sarmalar" className="text-muted">
                        yöresel
                      </a>
                    </Card.Footer>
                  </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}
