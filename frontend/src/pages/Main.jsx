import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "./N";
//bootstrap
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";


import img1 from "../assets/item6.avif";
import img2 from "../assets/item7.jpg";
import img3 from "../assets/item8.jpg";
import img4 from "../assets/item9.jpg";
import img5 from "../assets/item10.jpg";
import img6 from "../assets/item11.jpg";
import img7 from "../assets/item12.jpg";

function Main() {
const navigate =useNavigate();
const [product, setProduct] = useState([]);
useEffect(() => {
    axios.get("http://localhost:3006/product/getproduct")
        .then((res) => {
            console.log("API Response:",res.data);
            setProduct(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);

const detail = (id) => {
    navigate(`/product/${id}`);
}

  return (
    <div>
      <div >
      <Navbar />
        <Col>
            <Carousel>
        <Carousel.Item interval={150}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            style={{height: "650px", objectFit:"cover"}}
          />
        </Carousel.Item>
        <Carousel.Item interval={150}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
            style={{height: "650px", objectFit:"cover"}}
          />
        </Carousel.Item>
        <Carousel.Item interval={150}>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
            style={{height: "650px", objectFit:"cover"}}
          />
        </Carousel.Item>
        <Carousel.Item interval={150}>
          <img
            className="d-block w-100"
            src={img4}
            alt="Third slide"
            style={{height: "650px", objectFit:"cover"}}
          />
        </Carousel.Item>
        <Carousel.Item interval={150}>
          <img
            className="d-block w-100"
            src={img5}
            alt="Third slide"
            style={{height: "650px", objectFit:"cover"}}
          />
        </Carousel.Item><Carousel.Item interval={150}>
          <img
            className="d-block w-100"
            src={img6}
            alt="Third slide"
            style={{height: "650px", objectFit:"cover"}}
          />
        </Carousel.Item><Carousel.Item interval={150}>
          <img
            className="d-block w-100"
            src={img7}
            alt="Third slide"
            style={{height: "650px", objectFit:"cover"}}
          />
        </Carousel.Item>
      </Carousel>
        </Col>
      </div>
<Row xs={1} md={2} className="g-4">
        {product.slice(0, 4).map((item) => (
          <Col key={item._id}>
            <Card>
              <Card.Img variant="top" src={`http://localhost:3006/uploads/${item?.images?.filename}` } 
              style={{height: "300px",objectFit: "cover",}}/>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <Card.Text>
                  ₹ {item.price}
                </Card.Text>
                <Card.Text>
                  Stock: {item.stock}
                </Card.Text>
                <Card.Text>
                  Category: {item.category}
                </Card.Text>
                <Button variant="primary" onClick={()=>detail(item._id)}>View more</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Main
