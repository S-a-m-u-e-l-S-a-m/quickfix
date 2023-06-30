import React,{useRef} from 'react'
import './search-bar.css'
import { Col ,Form , FormGroup } from 'reactstrap'

const SearchBar = () => {

  const locationRef =useRef('')
  const serviceRef = useRef('')
  const ratingRef =useRef(0)


  const searchHandler = () =>{
    const location =locationRef.current.value
    const service =serviceRef.current.value
    const rating =ratingRef.current.value

    if (location === "" || service === "" || rating ===""){
      return alert("All Fields are Required !");
    }
  };




  return (
    <Col lg ='12'>
        <div className="search__bar">
            <Form className="d-flex align-items-center gap-4">
                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <span><i class="ri-map-pin-line"></i></span>
                    <div>
                      <h6>
                        Location
                      </h6>
                      <input type="text" placeholder="Place ? " ref={locationRef}/>
                    </div>
                </FormGroup>


                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <span><i class="ri-tools-fill"></i></span>
                    <div>
                      <h6>
                        Service
                      </h6>
                      <input type="text" placeholder="Specify the Work.." ref={serviceRef}/>
                    </div>
                </FormGroup>


                <FormGroup className="d-flex gap-3 form__group form__group-last">
                    <span><i class="ri-star-s-line"></i></span>
                    <div>
                      <h6>
                        Rating
                      </h6>
                      <input type="number" placeholder="0" max="5" min="0" ref={ratingRef}/>
                    </div>
                </FormGroup>

                <span className="search__icon" type='submit' onClick={searchHandler}>
                <i class="ri-search-2-line"></i>
                </span>
            </Form>
        </div>
    
    </Col>
  )
}

export default SearchBar

