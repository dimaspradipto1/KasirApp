import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hasil from "./components/Hasil";
import ListCategories from "./components/ListCategories";
import NavbarComponent from "./components/NavbarComponent";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="mt-2">
          <Container fluid>
            <Row>
              <ListCategories />
              <Col>
                <h4>
                  <strong>Daftar Produk</strong>
                </h4>
                <hr />
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
