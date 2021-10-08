import React, { useState } from 'react';
import { Badge, Form } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { deleteCategoryHandler } from '../function/function'
import { useFetch } from '../function/function';
import { useHistory } from 'react-router-dom';

export default function CheckBox({ categories, handleFilters, categoriesDef,updateCategoryHandler }) {
    const [check, setCheck] = useState([])
    const handleToggle = (value) => {
        const currentIndex = check.indexOf(value)
        const newCheck = [...check]
        if (currentIndex === -1) {
            newCheck.push(value)
        } else {
            newCheck.splice(currentIndex, 1)
        }
        setCheck(newCheck)
        handleFilters(newCheck)
    }
    const { categoryList } = useFetch();
    const history = useHistory();

    return (
        <Form className="m-2 mt-5">
            <Badge style={{ width: "80%", marginLeft: "10%", fontSize: "1rem" }} pill bg="light" text="dark">
                CATEGORIES
            </Badge>
            {categories?.map((item, index) => (
                <Form.Group key={index} className="mt-3" controlId="formBasicCheckbox">
                    <Form.Check
                        checked={check.indexOf(item) === -1 ? false : true}
                        id={index}
                        style={{ fontSize: "14px" }}
                        type="checkbox"
                        name={item}
                        value={item}
                        label={item?.toUpperCase()}
                        onChange={() => handleToggle(item)}
                    />
                    {categoriesDef?.includes(item) ? null : (
                        <>
                            <Icon.Pencil color="blue" style={{ margin: "auto 10px" }} onClick={() => {
                                updateCategoryHandler(categoryList?.filter((category) => category?.category === item)[0])
                                history.push("/addcategory")
                            }} />
                            <Icon.Archive color="red" style={{ margin: "auto 10px" }} onClick={() => {
                                categoryList?.map((category) =>
                                    category?.category === item ? deleteCategoryHandler(category?.id) : null
                                )
                                history.push("/")
                            }} />
                        </>
                    )}
                </Form.Group>
            ))}
        </Form>
    )
}
