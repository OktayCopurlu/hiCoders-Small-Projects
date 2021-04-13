import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import manti from "../img/manti.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

export default function Dolmalar(props) {
  const [sheet, setSheet] = useState(null);

  return (
    <>
      <Container>
        <h1> Stuffed </h1>
        <Row>
          <Col>
            {props.list.map((item) => {
              return item.yemekler.map((yemek, i) => {
                return sheet === null ? (
                  <CardGroup key={i}>
                    <Card>
                      <Card.Body>
                        <Card.Img
                          className="text-muted"
                          variant="top"
                          src={manti}
                        />
                      </Card.Body>
                      <Card.Footer>
                        <a
                          onClick={() => setSheet(yemek.name)}
                          href="#Dolmalar"
                          className="text-muted"
                        >
                          {yemek.name}
                        </a>
                      </Card.Footer>
                    </Card>
                  </CardGroup>
                ) : (
                  <CardGroup key={i}><Card >
                    <Card.Body>
                      <Card.Img
                        className="text-muted"
                        variant="top"
                        src={yemek.resim}
                      />
                      <h3>{yemek.name}</h3> <p> Zaman : {yemek.zaman}</p>
                      <p> Teslimat : {yemek.teslimat}</p>
                      <p> Detaylar : {yemek.aciklama} </p>
                    </Card.Body>
                    <Card.Footer>
                      <h3> {yemek.fiyat}</h3>
                    </Card.Footer>
                  </Card></CardGroup>
                );
              });
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}
