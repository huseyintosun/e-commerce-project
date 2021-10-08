import React from 'react'
import { Form, Row, Button } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useHistory } from 'react-router-dom';


function AddProduct({ categories, product, setProduct, handleProductSubmit }) {

    const history = useHistory()
    const handleChange = (e) => {
        const { name, value } = e.target
        setProduct({ ...product, [name]: value })
    }

    return (
        <Form style={{ width: '50%', marginLeft: "25%", justifyContent: 'center', height: "75%" }}
            onSubmit={() => {
                handleProductSubmit()
                history.push("/")
            }}
        >
            <CardHeader style={{ textAlign: 'center', marginTop: "30px" }}>ADD PRODUCT</CardHeader>
            <Row className="mb-3 mt-3">
                <Form.Group
                    controlId="validationFormik101"
                    className="position-relative mb-3"
                >
                    <Form.Label>Category</Form.Label>
                    <Form.Select name="category" onChange={handleChange} aria-label="Default select example">
                        <option>Open this select menu</option>
                        {categories?.map((category) => (
                            <option value={category}>{category?.toUpperCase()}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group
                    controlId="validationFormik102"
                    className="position-relative"
                >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={product?.description}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group
                    controlId="validationFormik103"
                    className="position-relative mb-3"
                >
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Price"
                        name="price"
                        value={parseFloat(product?.price)}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group
                    controlId="validationFormik104"
                    className="position-relative"
                >
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={product?.title}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Row>
            <Form.Group className="position-relative mb-3">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Image URL"
                    name="image"
                    value={product?.image}
                    onChange={handleChange}
                />
            </Form.Group>
            {product?.image ? (
                <Form.Group className="position-relative mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Image-2 URL"
                        name="image2"
                        value={product?.image2}
                        onChange={handleChange}
                    />
                </Form.Group>
            ) : null}
            {product?.image2 ? (
                <Form.Group className="position-relative mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Image-3 URL"
                        name="image3"
                        value={product?.image3}
                        onChange={handleChange}
                    />
                </Form.Group>
            ) : null}
            <Button style={{ width: '100%' }} type="submit">{product?.id ? "UPDATE" : "SUBMIT"}</Button>
        </Form>
    )
}

export default AddProduct;

// function AddProduct({ categories, items }) {

//     const history = useHistory();
//     const formik = useFormik({
//         initialValues: {
//             category: '',
//             description: '',
//             price: 0,
//             title: '',
//             image: "",
//             image2: "",
//             image3: "",
//         },
//         onSubmit: values => {
//             addNewProduct(values)
//             history.push("/")
//         }
//     })
//     return (

//         <Form style={{ width: '50%', marginLeft: "25%", justifyContent: 'center', height: "75%" }} noValidate onSubmit={formik.handleSubmit}>
//             {console.log(`values`, formik.values)}
//             <CardHeader style={{ textAlign: 'center', marginTop: "30px" }}>ADD PRODUCT</CardHeader>
//             <Row className="mb-3 mt-3">
//                 <Form.Group
//                     controlId="validationFormik101"
//                     className="position-relative mb-3"
//                 >
//                     <Form.Label>Category</Form.Label>
//                     <Form.Select name="category" onChange={formik.handleChange} aria-label="Default select example">
//                         <option>Open this select menu</option>
//                         {categories?.map((category) => (
//                             <option value={category}>{category}</option>
//                         ))}
//                     </Form.Select>
//                 </Form.Group>
//                 <Form.Group
//                     controlId="validationFormik102"
//                     className="position-relative"
//                 >
//                     <Form.Label>Description</Form.Label>
//                     <Form.Control
//                         type="text"
//                         name="description"
//                         placeholder="Description"
//                         value={formik.values.description}
//                         onChange={formik.handleChange}
//                     />
//                 </Form.Group>
//             </Row>
//             <Row className="mb-3">
//                 <Form.Group
//                     controlId="validationFormik103"
//                     className="position-relative mb-3"
//                 >
//                     <Form.Label>Price</Form.Label>
//                     <Form.Control
//                         type="number"
//                         placeholder="Price"
//                         name="price"
//                         value={formik.values.price}
//                         onChange={formik.handleChange}
//                     />
//                 </Form.Group>
//                 <Form.Group
//                     controlId="validationFormik104"
//                     className="position-relative"
//                 >
//                     <Form.Label>Title</Form.Label>
//                     <Form.Control
//                         type="text"
//                         placeholder="Title"
//                         name="title"
//                         value={formik.values.title}
//                         onChange={formik.handleChange}
//                     />
//                 </Form.Group>
//             </Row>
//             <Form.Group className="position-relative mb-3">
//                 <Form.Label>Image URL</Form.Label>
//                 <Form.Control
//                     type="text"
//                     placeholder="Image URL"
//                     name="image"
//                     value={formik.values.image}
//                     onChange={formik.handleChange}
//                 />
//             </Form.Group>
//             {formik.values.image ? (
//                 <Form.Group className="position-relative mb-3">
//                     <Form.Label>Image URL</Form.Label>
//                     <Form.Control
//                         type="text"
//                         placeholder="Image-2 URL"
//                         name="image2"
//                         value={formik.values.image2}
//                         onChange={formik.handleChange}
//                     />
//                 </Form.Group>
//             ) : null}
//             {formik.values.image2 ? (
//                 <Form.Group className="position-relative mb-3">
//                     <Form.Label>Image URL</Form.Label>
//                     <Form.Control
//                         type="text"
//                         placeholder="Image-3 URL"
//                         name="image3"
//                         value={formik.values.image3}
//                         onChange={formik.handleChange}
//                     />
//                 </Form.Group>
//             ) : null}
//             <Button style={{ width: '100%' }} type="submit">{items?.id ? "UPDATE" : "SUBMIT"}</Button>
//         </Form>
//     )
// }

// export default AddProduct;
