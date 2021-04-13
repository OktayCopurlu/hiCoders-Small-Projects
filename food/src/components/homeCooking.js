import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import manti from "./img/manti.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CardsMenu() {
  return (
    <>
      <Container>
        <h1>Home Cooking</h1>
        <Row>
          <Col>
            <CardGroup className="mt-2">
              <Card>
                <Card.Body>
                  <Card.Img variant="top" src={manti} />
                </Card.Body>
                <Card.Footer>
                  <a href="./Sarmalar" className="text-muted">
                    Home Cooking
                  </a>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Img variant="top" src={manti} />
                </Card.Body>
                <Card.Footer>
                  <a href="./Sarmalar" className="text-muted">
                    Local Testing
                  </a>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Img variant="top" src={manti} />
                </Card.Body>
                <Card.Footer>
                  <a href="./Sarmalar" className="text-muted">
                    Stuffed{" "}
                  </a>
                </Card.Footer>
              </Card>
            </CardGroup>
            <CardGroup className="mt-2">
              <Card>
                <Card.Body>
                  <Card.Img variant="top" src={manti} />
                </Card.Body>
                <Card.Footer>
                  <a href="./Sarmalar" className="text-muted">
                    Desserts
                  </a>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Img variant="top" src={manti} />
                </Card.Body>
                <Card.Footer>
                  <a href="./Sarmalar" className="text-muted">
                    Rice
                  </a>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Img variant="top" src={manti} />
                </Card.Body>
                <Card.Footer>
                  <a href="./Sarmalar" className="text-muted">
                    Ravioli
                  </a>
                </Card.Footer>
              </Card>
            </CardGroup>
            <CardGroup className="mt-2">
              <Card>
                <Card.Body>
                  <Card.Img variant="top" src={manti} />
                </Card.Body>
                <Card.Footer>
                  <a href="./Sarmalar" className="text-muted">
                    Turkish
                  </a>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Img variant="top" src={manti} />
                </Card.Body>
                <Card.Footer>
                  <a href="./Sarmalar" className="text-muted">
                    Meksikan
                  </a>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Img variant="top" src={manti} />
                </Card.Body>
                <Card.Footer>
                  <a href="./Sarmalar" className="text-muted">
                    Assian
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
