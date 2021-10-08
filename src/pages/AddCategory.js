import React from 'react'
import { Form, Button } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useHistory } from 'react-router-dom'



function AddCategory({category,setCategory,handleCategorySubmit}) {
    const history = useHistory();
    const handleChange = (e) => {
        const { name, value } = e.target
        setCategory({ ...category, [name]: value })
    }
    return (
        <Form style={{ width: '50%', marginLeft: "25%", justifyContent: 'center', height: "75%" }} 
        onSubmit={(e)=>{
            handleCategorySubmit()
            history.push("/");
            e.preventDefault()
        } }>
            <CardHeader style={{ textAlign: 'center', marginTop: "30px", marginBottom: "20px" }}>ADD CATEGORY</CardHeader>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    type="text"
                    name="category"
                    placeholder="Enter category name"
                    value={category?.category}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button style={{ width: '100%' }} variant="primary" type="submit">
            {category?.id ? "UPDATE" : "SUBMIT"}
            </Button>
        </Form>
    )
}

export default AddCategory;
