


import React  from 'react';
import '../styles/worker-register.css'
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Input,
  FormGroup,
  // Form,
  Label,
  Button,
  // CustomInput
} from 'reactstrap';

const WorkerRegister = () => {
  return (
    <div className="main">
    <Container fluid className='h-custom'>
      <Row className='d-flex justify-content-center align-items-center '>
        <Col col='12' className='m-5'>
          <Card className='card-registration card-registration-2' style={{ borderRadius: '15px' }}>
            <CardBody className='p-0'>
              <Row>
                <Col md='6' className='p-5 bg-white'>
                  <h3 className="fw-normal mb-5" style={{ color: '#4835d4' }}>General Information</h3>
                  {/* <Form> */}
                  {/* <Row> */}
                    {/* <Col md='6'> */}
                      <FormGroup className='mb-4'>
                        <Label for='fullname'>Full Name</Label>
                        <Input type='text' id='fullname' size='lg' />
                      </FormGroup>
                    {/* </Col> */}
                    {/* <Col md='6'>
                      <FormGroup className='mb-4'>
                        <Label for='lastName'>Last Name</Label>
                        <Input type='text' id='lastName' size='lg' />
                      </FormGroup>
                    </Col> */}
                  {/* </Row> */}
                  <FormGroup className='mb-4'>
                    <Label for='title'>Work Type</Label>
                    <Input type='select' id='title' size='lg'>
                    <option value='NAN'>Select</option>
                      <option value='1'>Carpenter</option>
                      <option value='2'>Plumber</option>
                      <option value='3'>Painter</option>
                      <option value='4'>Flooring</option>
                      <option value='5'>Home Renovation</option>
                      <option value='6'>Roofing</option>
                      <option value='7'>Electrical Work</option>

                    </Input>
                  </FormGroup>
                  <FormGroup className='mb-4'>
                        <Label for='email'>Email</Label>
                        <Input type='email' id='fullname' size='lg' />
                      </FormGroup>
                  <FormGroup className='mb-4'>
                    <Label for='password'>Password</Label>
                    <Input type='text' id='password' size='lg' />
                  </FormGroup>
                  <FormGroup className='mb-4'>
                    <Label for='employees'>Employees</Label>
                    <Input type='select' id='employees' size='lg'>
                      <option value='1'>Employees</option>
                      <option value='2'>Two</option>
                      <option value='3'>Three</option>
                      <option value='4'>Four</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md='6' className='bg-indigo p-5'>
                  <h3 className="fw-normal mb-5 text-white" style={{ color: '#4835d4' }}>Contact Details</h3>
                  <FormGroup className='mb-4'>
                    <Label className='text-white' for='street'>Street + Nr</Label>
                    <Input type='text' id='street' size='lg' />
                  </FormGroup>
                  <FormGroup className='mb-4'>
                    <Label className='text-white' for='additionalInfo'>Additional Information</Label>
                    <Input type='text' id='additionalInfo' size='lg' />
                  </FormGroup>
                  <Row>
                    <Col md='5'>
                      <FormGroup className='mb-4'>
                        <Label className='text-white' for='zipCode'>Zip Code</Label>
                        <Input type='text' id='zipCode' size='lg' />
                      </FormGroup>
                    </Col>
                    <Col md='7'>
                      <FormGroup className='mb-4'>
                        <Label className='text-white' for='place'>Place</Label>
                        <Input type='text' id='place' size='lg' />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup className='mb-4'>
                    <Label className='text-white' for='country'>Country</Label>
                    <Input type='text' id='country' size='lg' />
                  </FormGroup>
                  <Row>
                    <Col md='5'>
                      <FormGroup className='mb-4'>
                        <Label className='text-white' for='code'>Code +</Label>
                        <Input type='text' id='code' size='lg' />
                      </FormGroup>
                    </Col>
                    <Col md='7'>
                      <FormGroup className='mb-4'>
                        <Label className='text-white' for='phoneNumber'>Phone Number</Label>
                        <Input type='text' id='phoneNumber' size='lg' />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup className='mb-4'>
                    <Label className='text-white' for='email'>Your Email</Label>
                    <Input type='email' id='email' size='lg' />
                  </FormGroup>
                  <FormGroup check className='mb-4'>
                    <Label className='text-white' check>
                      <Input type='checkbox' id='flexCheckDefault' />
                      I do accept the Terms and Conditions of your site.
                    </Label>
                  </FormGroup>
                  
                  <Button color='light' size='lg'>Register</Button>
                  
                </Col>
                
              </Row>
              
            </CardBody>
            
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
export default WorkerRegister