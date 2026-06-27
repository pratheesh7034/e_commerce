import Navbar from "./N";
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Detail() {
        const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:3006/product/getproduct/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);
      const navigate = useNavigate();
      const buy = () => {
    navigate(`/buy/${id}`);
    }
    

  return (
    <div>
      <Navbar />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <Card style={{ width: '18rem', alignItems: 'center' }}>
      <Card.Img variant="top" src={`http://localhost:3006/uploads/${product?.images?.filename}`} />
      <Card.Body>
        <Card.Title>Product Detail</Card.Title>
        <Card.Text>
          <h1>{product?.description}</h1>
        </Card.Text>
        <Card.Text>
            <h3>₹ {product?.price}original price</h3>
        </Card.Text>
        <Card.Text>
            <h3>₹ {product?.discountPrice}after discount</h3>
        </Card.Text>
        <Card.Text>
            <h3>₹{product?.category}category</h3>
        </Card.Text>
        <Card.Text>
            <h3>{product?.stock}available</h3>
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <button onClick={buy}>Buy Now</button>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default Detail
