import Navbar from "./N";
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function Detail() {
        const { id } = useParams();
    const [product, setProduct] = useState(null);

const[paymentMethod,setPaymentMethod]=useState("")

    useEffect(() => {
        axios
            .get(`http://localhost:3006/product/getproduct/${id}`)
            .then((res) => {
                console.log(res.data)
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);
    
    const purchase=async()=>{
        try {
        const userId = localStorage.getItem("userId");

        const orderData = {
            userId,
            productId: product._id,
            productName: product.name,
            price: product.discountPrice,
            paymentMethod
        };

        const res = await axios.post(
            "http://localhost:3006/order/placeorder",
            orderData
        );

        alert(res.data.msg);
        } catch (error) {
        console.log(error);
        alert("Failed to place order");
    }

    }


  return (
    <div>
      <Navbar />
      <div className="container py-5">
  <div className="row justify-content-center">
    <div className="col-md-10">
      <Card className="shadow border-0">
        <div className="row g-0">

          {/* Product Image */}
          <div className="col-md-6 p-4 text-center">
            <img
              src={`http://localhost:3006/uploads/${product?.images?.filename}`}
              alt={product?.name}
              className="img-fluid rounded"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />

            <h3 className="mt-4">{product?.name}</h3>
            <p className="text-muted">
              High quality product with fast delivery.
            </p>
          </div>

          {/* Product Details */}
          <div className="col-md-6 p-4">

            <h2 className="mb-4">Purchase Item</h2>

            <div className="border-bottom pb-3 mb-3">
              <h5 className="text-muted">Original Price</h5>
              <h3 className="text-decoration-line-through text-secondary">
                ₹ {product?.price}
              </h3>
            </div>

            <div className="border-bottom pb-3 mb-4">
              <h5 className="text-success">After Discount</h5>
              <h2 className="text-success">
                ₹ {product?.discountPrice}
              </h2>
            </div>

            <h4 className="mb-3">Payment Method</h4>

            <div className="form-check border rounded p-3 mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                id="gpay"
                onChange={(e) => setPaymentMethod(e.target.value)}

              />
              <label className="form-check-label ms-2" htmlFor="gpay">
                Google Pay
              </label>
            </div>

            <div className="form-check border rounded p-3 mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                id="paytm"
                onChange={(e) => setPaymentMethod(e.target.value)}

              />
              <label className="form-check-label ms-2" htmlFor="paytm">
                Paytm
              </label>
            </div>

            <div className="form-check border rounded p-3 mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                id="phonepe"
                onChange={(e) => setPaymentMethod(e.target.value)}

              />
              <label className="form-check-label ms-2" htmlFor="phonepe">
                PhonePe
              </label>
            </div>

            <div className="form-check border rounded p-3 mb-4">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                id="cod"
                onChange={(e) => setPaymentMethod(e.target.value)}

              />
              <label className="form-check-label ms-2" htmlFor="cod">
                Cash on Delivery
              </label>
            </div>

            <button
              className="btn btn-success w-100 py-2"
              onClick={purchase}
            >
              Buy Now
            </button>

          </div>
        </div>
      </Card>
    </div>
  </div>
</div>
    </div>
  )
}

export default Detail
