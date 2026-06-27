import Navbar from "./N";
import { useState } from "react";
import axios from "axios";

import "../App.css";

function Addproduct() {

    const [product, setProduct] = useState({
        name: "",
        slug: "",
        description: "",
        price: "",
        discountPrice: "",
        stock: "",
        category: "",
        images: null
    });

    const handleChange = (e) => {

        if (e.target.name === "images") {

            setProduct({
                ...product,
                images: e.target.files[0]
            });

        } else {

            setProduct({
                ...product,
                [e.target.name]: e.target.value
            });

        }

    };

    const addProduct = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            const formData = new FormData();

            formData.append("name", product.name);
            formData.append("slug", product.slug);
            formData.append("description", product.description);
            formData.append("price", product.price);
            formData.append("discountPrice", product.discountPrice);
            formData.append("stock", product.stock);
            formData.append("category", product.category);
            formData.append("images", product.images);

            const res = await axios.post(
                "http://localhost:3006/product/addproduct",
                formData,
                {
                    headers: {
                        Authorization: token,
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            alert(res.data.msg);

            setProduct({
                name: "",
                slug: "",
                description: "",
                price: "",
                discountPrice: "",
                stock: "",
                category: "",
                images: null
            });

        } catch (err) {

            console.log(err);

            alert(
                err.response?.data?.msg ||
                "Unable to add product."
            );

        }

    };

    return (

        <>
            <Navbar />

            <div className="register-container">

                <div className="form-box">

                    <h2 className="register-title">
                        Add Product
                    </h2>

                    <form onSubmit={addProduct}>

                        <table align="center" cellPadding={8} cellSpacing={8}>

                            <tbody>

                                <tr>
                                    <td>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Product Name"
                                            value={product.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input
                                            type="text"
                                            name="slug"
                                            placeholder="Slug"
                                            value={product.slug}
                                            onChange={handleChange}
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <textarea
                                            name="description"
                                            placeholder="Description"
                                            value={product.description}
                                            onChange={handleChange}
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input
                                            type="number"
                                            name="price"
                                            placeholder="Price"
                                            value={product.price}
                                            onChange={handleChange}
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input
                                            type="number"
                                            name="discountPrice"
                                            placeholder="Discount Price"
                                            value={product.discountPrice}
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input
                                            type="number"
                                            name="stock"
                                            placeholder="Stock"
                                            value={product.stock}
                                            onChange={handleChange}
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input
                                            type="text"
                                            name="category"
                                            placeholder="Category"
                                            value={product.category}
                                            onChange={handleChange}
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td align="center">
                                        <input
                                            type="file"
                                            name="images"
                                            accept="image/*"
                                            onChange={handleChange}
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td align="center">
                                        <button type="submit">
                                            Add Product
                                        </button>
                                    </td>
                                </tr>

                            </tbody>

                        </table>

                    </form>

                </div>

            </div>

        </>

    );

}

export default Addproduct;