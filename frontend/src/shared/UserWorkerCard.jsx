import React from 'react'
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating';

import './worker-card.css'


const UserWorkerCard = ({ worker }) => {

    const { id, worktype, name, place, price, available, reviews } = worker;


    const {totalRating,avgRating} = calculateAvgRating(reviews)

    


    return (
        <div className='worker__card'>
            <Card>



                <CardBody>

                    <div className="worker__img">
                        {available && <span>Available</span>}
                    </div>

                    <h3 className="worker__title"><Link to={`/user/works/${id}`}>{worktype}</Link></h3>

                    <h6 className="worker__name">Name : {name}</h6>

                    <div className="card__top d-flex align-items-center justify-content-between">
                        <span className="worker__location d-flex align-items-center gap-1">
                            <i class="ri-map-pin-line"></i> {place}
                        </span>

                        {/* <span className="worker__rating d-flex align-items-center gap-1">
                            <i class="ri-star-fill"></i> {avgRating}
                            <span>({reviews.length})</span>
                        </span> */}

                    </div>


                    <div className="card__top d-flex align-items-center justify-content-between">
                        {/* <span className="worker__location d-flex align-items-center gap-1">
                            <i class="ri-map-pin-line"></i> {place}
                        </span> */}

                        <span className="worker__rating d-flex align-items-center gap-1">
                            <i class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
                            {totalRating === 0 ?
                                ('Not rated') :
                                (<span>({reviews.length})</span>)}

                        </span>

                    </div>










                    <div className="card__bottom d-flex align-items-center justify-content-between mt-3" >
                        <h5>Price : ${price} <span>per day</span></h5>


                    </div>

                    <div className="card__bottom d-flex align-items-center justify-content-between mt-3" >


                        <button className="btn booking__btn">
                            <h5> <Link to={`/user/works/${id}`}>Negotiate</Link></h5>
                        </button>


                        <button className="btn booking__btn">
                            <h5> <Link to={`/user/works/${id}`}>Book Now</Link></h5>
                        </button>
                    </div>



                </CardBody>

            </Card>
        </div>




    )
}

export default UserWorkerCard