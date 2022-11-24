import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem"
import StoreItems from "../data/items.json";

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row>
        {StoreItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
