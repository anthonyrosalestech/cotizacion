import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { PDFViewer } from "@react-pdf/renderer";
import Pdf from "./MyPdf";

const Register = () => {
  return (
    <Container fluid="md" className="mt-5">
      <Row>
        <Col xs={12} md={12}>
          <Form>
            <Row>
              <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Cantidad</Form.Label>
                  <Form.Control type="text" placeholder="Cantidad" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nombre del articulo</Form.Label>
                  <Form.Control type="text" placeholder="Articulo" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Precio por articulo</Form.Label>
                  <Form.Control type="text" placeholder="Articulo" />
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Precio por total</Form.Label>
                  <Form.Control type="text" placeholder="Articulo" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Detalle</Form.Label>
              <Form.Control type="text" placeholder="Detalle" />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <PDFViewer className="w-100 h100">
            <Pdf />
          </PDFViewer>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
