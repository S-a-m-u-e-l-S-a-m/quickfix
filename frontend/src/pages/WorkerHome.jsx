import React from 'react'
import WorkerHeader from '../components/Header/WorkerHeader'
import "../styles/work.css"
import { Container, Row, Col } from 'reactstrap'
import userbookingData from '../assets/data/userbooking'
import UserBookingCard from '../shared/UserBookingCard'


const WorkerHome = () => {
  return (
    <>
    <WorkerHeader/>

    <section className="pt-0 ">
        <Container>
          <Row>
            {
              userbookingData?.map(userbooking => (
                <Col lg='6' className="mb-4" key={userbooking.id}>
                  <UserBookingCard userbooking={userbooking} />
                </Col>
              )
              )
            }

            {/* <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {
                  [...Array(pageCount).keys()].map(number => (
                    <span key={number} onClick={() => setPage(number)}
                    className={page ===number ? "active__page" : " "}
                    >
                      {number + 1}
                    </span>
                  ))
                }
              </div>
            
            </Col> */}
          </Row>
        </Container>
      </section>
    
    </>
  )
}

export default WorkerHome