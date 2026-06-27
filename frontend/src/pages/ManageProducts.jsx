import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import N from "./N";

function ManageProducts() {
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    // ==========================
    // Get All Products
    // ==========================
    const getProducts = async () => {
        try {
            const res = await axios.get(
                "http://localhost:3006/product/getproduct"
            );

            // Handles both response formats
            if (res.data.data) {
                setProducts(res.data.data);
            } else {
                setProducts(res.data);
            }

        } catch (err) {
            console.log(err);
        }
    };

    // ==========================
    // Load Products
    // ==========================
    useEffect(() => {

        const loadProducts = async () => {
            await getProducts();
        };

        loadProducts();

    }, []);

    // ==========================
    // Delete Product
    // ==========================
    const deleteProduct = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) return;

        try {

            const res = await axios.delete(
                `http://localhost:3006/product/deleteproduct/${id}`,
                {
                    headers: {
                        Authorization: token
                    }
                }
            );

            alert(res.data.msg);

            getProducts();

        } catch (err) {

            console.log(err);

            alert(
                err.response?.data?.msg ||
                "Unable to delete product."
            );

        }
    };

    return (
        <>
            <N />

            <div className="container mt-4">

                <h2 className="text-center mb-4">
                    Manage Products
                </h2>

                <Table striped bordered hover responsive>

                    <thead>

                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {products.length === 0 ? (

                            <tr>
                                <td colSpan="6" className="text-center">
                                    No Products Found
                                </td>
                            </tr>

                        ) : (

                            products.map((item) => (

                                <tr key={item._id}>

                                    <td>

                                        {item.images ? (

                                            <img
                                                src={`http://localhost:3006/uploads/${item.images.filename}`}
                                                alt={item.name}
                                                width="80"
                                                height="80"
                                                style={{
                                                    objectFit: "cover"
                                                }}
                                            />

                                        ) : (

                                            "No Image"

                                        )}

                                    </td>

                                    <td>{item.name}</td>

                                    <td>{item.category}</td>

                                    <td>₹ {item.price}</td>

                                    <td>{item.stock}</td>

                                    <td>

                                        <Button
                                            variant="warning"
                                            className="me-2"
                                            onClick={() =>
                                                navigate(`/editproduct/${item._id}`)
                                            }
                                        >
                                            Edit
                                        </Button>

                                        <Button
                                            variant="danger"
                                            onClick={() =>
                                                deleteProduct(item._id)
                                            }
                                        >
                                            Delete
                                        </Button>

                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </Table>

            </div>

        </>
    );
}

export default ManageProducts;