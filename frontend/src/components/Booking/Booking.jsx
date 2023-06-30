import React, { useState } from 'react'
import './booking.css'
import { Form, FormGroup, Button } from 'reactstrap'
// import { ListGroup, ListGroupItem } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const Booking = ({ work, avgRating }) => {

    const { price, reviews } = work;

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        userId: "01",
        userEmail: "example@gmail.com",
        fullName: "",
        location: "",
        phone: "",
        bookAt: "",

    });

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))

    };

    const handleClick = e => {
        e.preventDefault();


        navigate("/thank-you")
        console.log(credentials);
    }



    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>${price} <span>per day</span></h3>
                <span className="worker__rating d-flex align-items-center ">
                    <i class="ri-star-fill" ></i>
                    {avgRating === 0 ? null : avgRating} ({reviews?.length})


                </span>

            </div>

            {/*  ============booking form start====================== */}
            <div className="booking__form">

                <h5>Information</h5>
                <Form className="booking__info-form " onSubmit={handleClick}>


                    <FormGroup>
                        <input
                            type="text"
                            placeholder="FullName"
                            id="fullName"
                            required
                            onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input
                            type="text"
                            placeholder="Location"
                            id="location"
                            required
                            onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input
                            type="number"
                            placeholder="Phone"
                            id="phone"
                            required
                            onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input
                            type="date"
                            placeholder=""
                            id="bookAt"
                            required
                            onChange={handleChange} />
                    </FormGroup>
                </Form>

            </div>





            {/*  ============booking form end====================== */}

            <div className="booking__bottom">
                {/* <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                        
                    </ListGroupItem>
                </ListGroup> */}

                <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Book Now</Button>
                <Button className="btn primary__btn w-100 mt-4">Negotiate</Button>
            </div>
        </div>


    )
}

export default Booking