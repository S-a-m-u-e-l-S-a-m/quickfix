import React from 'react'
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom'
import './worker-card.css'


const UserBookingCard = ({userbooking}) => {

    const { /*id,*/ fullname, location, phoneno, date } = userbooking;

    return (
        <>
            <div className='worker__card'>
                <Card>



                    <CardBody>



                        {/* <h3 className="worker__title"><Link to={`/works/${id}`}>{worktype}</Link></h3> */}

                        <h6 className="worker__name">Name :{fullname}</h6>

                        <div className="card__top d-flex align-items-center justify-content-between">
                            <span className="worker__location d-flex align-items-center gap-1">
                                <i class="ri-map-pin-line"></i>{location}
                            </span>

                            {/* <span className="worker__rating d-flex align-items-center gap-1">
                            <i class="ri-star-fill"></i> {avgRating}
                            <span>({reviews.length})</span>
                        </span> */}

                        </div>


                        <div className="card__top d-flex align-items-center justify-content-between">
                            <span className="worker__location d-flex align-items-center gap-1">
                            <i class="ri-phone-fill"></i>{phoneno}
                        </span>

                            

                        </div>

                        <div className="card__top d-flex align-items-center justify-content-between">
                            <span className="worker__location d-flex align-items-center gap-1">
                            <i class="ri-calendar-line"></i>{date}
                        </span>

                            

                        </div>










                        

                        <div className="card__bottom d-flex align-items-center justify-content-between mt-3" >


                            <button className="btn booking__btn">
                                <h5> <Link to={`/chat`}>Chat With User</Link></h5>
                            </button>


                            
                        </div>



                    </CardBody>

                </Card>
            </div>
        </>
    )
}

export default UserBookingCard