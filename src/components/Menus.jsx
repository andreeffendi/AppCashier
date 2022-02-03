import React from "react";
import { Col, Card } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

const Menus = ({ menu, masukKeranjang }) => {
  return (
    <Col md={4} xs={6} className="mb-4">
      <Card className="shadow" onClick={() => masukKeranjang(menu)}>
        <Card.Img style= {{width: '100%', height: '12em'}}
          variant="top"
          src={  "assets/images/" + menu.category.nama.toLowerCase() + "/" + menu.gambar  } 
        />
        <Card.Body>
          <Card.Title style={{fontSize: '14px' , fontStyle: 'italic', }} >{menu.nama} <strong style={{fontSize: '13.5px'}} >({menu.kode})</strong></Card.Title>
          <Card.Text>Rp. {numberWithCommas(menu.harga)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;