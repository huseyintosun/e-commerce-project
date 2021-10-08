import React, { useState } from 'react';
import { Button, Card, Carousel, Col, Row } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Link } from 'react-router-dom';
import CheckBox from '../components/CheckBox';



function Home({ items, categories, categoriesDef,updateCategoryHandler }) {


    const [filtersCategory, setFiltersCategory] = useState({
        categories: [],
        price: []
    })
    const handleFilters = (filters, category) => {
        const newFiltersCategory = { ...filtersCategory }
        newFiltersCategory[category] = filters
        if (category === "price") {

        }
        setFiltersCategory(newFiltersCategory)
    }
    function filterByCategory(item) {
        if (filtersCategory?.categories.includes(item?.category)) {
            return true;
        }
    }
    const arrByCategory = items?.filter(filterByCategory);

    return (
        <Row >
            <Col xs={2}>
                <CheckBox handleFilters={filters => handleFilters(filters, "categories")} categoriesDef={categoriesDef} categories={categories} updateCategoryHandler={updateCategoryHandler} />
            </Col>
            <Col xs={10}>
                <Row style={{ margin: "10px auto" }} xs={2} md={4} className="g-4">
                    {arrByCategory?.length !== 0 ? arrByCategory?.map((item) => (
                        <Col>
                            <Card style={{ height: "800px" }} key={item?.id}>
                                <Carousel style={{ width: "100%", height: "480px" }} variant="top">
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={item?.image}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    {item?.image2 ? (
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={item?.image2}
                                                alt="Second slide"
                                            />
                                        </Carousel.Item>
                                    ) : null}
                                    {item?.image3 ? (
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={item?.image3}
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>
                                    ) : null}
                                </Carousel>
                                <Card.Body>
                                    <Card.Title>{item?.title}</Card.Title>
                                    <Card.Subtitle><b>{item?.category?.toUpperCase()}</b></Card.Subtitle>
                                    <Card.Text>
                                        {item?.description.length > 100 ? item?.description.substring(0, 100) + "..." : item?.description}
                                    </Card.Text>
                                    <Card.Text>
                                        $ {item?.price}
                                    </Card.Text>
                                    <Link to={`details/${item?.id}`}>
                                        <Button type="button" onClick={null} variant="primary">Go to details</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )) : (
                        <CardHeader style={{ width: '100%', textAlign: 'center', marginTop: "30px", marginBottom: "20px" }}>PLEASE SELECT CATEGORY...</CardHeader>
                    )}
                </Row>
            </Col>
        </Row>
    );
}

export default Home;
