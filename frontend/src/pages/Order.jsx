import Navbar from "./N";
import { useState,useEffect } from "react";
import axios from "axios";
import { Card} from "react-bootstrap";
function Order() {
const [order, setOrder] = useState([]);
useEffect(() => {
    axios.get("http://localhost:3006/order/getorder")
  .then((res) => {
    console.log(res.data);
    setOrder(res.data.data);
  })
  .catch((err) => {
    console.log(err);
  });
}, []);

  return (
    <div>
      <Navbar/>
      <p>


      </p>
      {order.map((item) => (
      <Card key={item._id} className="mb-3">
        <Card.Body>
              <div className="d-flex gap-4 align-items-center">
                <img src={`http://localhost:3006/uploads/${item.productId.images?.filename}`}
                style={{width: "150px",
                        height: "150px",
                        objectFit: "cover"}}/>                 
                    <div>
                        <h5>{item.productId?.name}</h5>
                          <p>Price: ₹{item.price}</p>
                          <p>Payment Method: {item.paymentMethod}</p>
                          <p>Arriving Soon</p>
                          <p>Order By:{item.userId.name}</p>
                    </div>
                </div>
        </Card.Body>
      </Card>
      ))}
    </div>
  )
}

export default Order
