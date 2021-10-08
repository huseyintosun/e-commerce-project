import React from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { deleteProductHandler } from '../function/function'

function Details({ items,updateProductHandler }) {
    const { id } = useParams()
    const history = useHistory()

    const arrById = items?.filter((item) => item?.id == id)[0];
    return (
        <Card style={{ margin: "20px 10%", width: "80%" }} key={arrById?.id}>
            <Carousel style={{ width: "100%", height: "100%" }} variant="top">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={arrById?.image}
                        alt="First slide"
                    />
                </Carousel.Item>
                {arrById?.image2 ? (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={arrById?.image2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                ) : null}
                {arrById?.image3 ? (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={arrById?.image3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                ) : null}
            </Carousel>
            <Card.Body>
                <Card.Title>{arrById?.title}</Card.Title>
                <Card.Subtitle>{arrById?.category}</Card.Subtitle>
                <Card.Text>
                    {arrById?.description}
                </Card.Text>
                <Card.Text>
                    $ {arrById?.price}
                </Card.Text>
                <Button type="button" onClick={() => history.push("/")} variant="primary">Go to Home</Button>
            </Card.Body>
            {arrById?.id === parseInt(arrById?.id) ? null : (
                <div>
                    <Button style={{ width: "40%", margin: "auto 6%" }} variant="primary" size="sm"
                        onClick={() => {
                            history.push("/addproduct")
                            updateProductHandler(arrById)
                        }}
                    >
                        EDIT
                    </Button>
                    <Button style={{ width: "40%" }} variant="danger" size="sm"
                        onClick={() => {
                            deleteProductHandler(arrById?.id)
                            history.push("/")
                        }}>
                        DELETE
                    </Button>
                </div>
            )}
        </Card>
    );
}

export default Details;
