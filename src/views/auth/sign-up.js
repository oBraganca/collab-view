import React from 'react'
import { Row, Col, Image, Form, Button, ListGroup } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../components/Card'

// img
import facebook from '../../assets/images/brands/fb.svg'
import google from '../../assets/images/brands/gm.svg'
import instagram from '../../assets/images/brands/im.svg'
import linkedin from '../../assets/images/brands/li.svg'
import auth1 from '../../assets/images/auth/01.png'
import iconBlack from '../../assets/images/icon_black.png'
import iconWhite from '../../assets/images/icon_white.png'
import { useSelector } from "react-redux";
import * as SettingSelector from "../../store/setting/selectors";

import Api from "../../api/api";

const SignUp = () => {
   let history = useNavigate()
   const api = new Api();

   
   const themeScheme = useSelector(SettingSelector.theme_scheme);
   return (
      <>
         <section className="login-content">
            <Row className="m-0 align-items-center bg-white vh-100">
               <Col md="6" className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
                  <Image src={auth1} className="Image-fluid gradient-main animated-scaleX" alt="images" />
               </Col>
               <Col md="6">
                  <Row className="justify-content-center">
                     <Col md="10">
                        <Card className="card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
                           <Card.Body>
                              <Row>
                                 <Col lg="12" className='d-flex justify-content-center animated-scaleX'>
                                    <img
                                       style={{width:"10rem"}}
                                       src={themeScheme == "dark" ? iconWhite : iconBlack}
                                       alt=""
                                    />
                                 </Col>
                              </Row>
                              <h2 className="mb-2 text-center">Sign Up</h2>
                              <p className="text-center">Create your Collab account.</p>
                              <Form>
                                 <Row>
                                    <Col lg="6">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="first-name" className="">First Name</Form.Label>
                                          <Form.Control type="text" className="" id="first-name" placeholder=" " />
                                       </Form.Group>
                                    </Col>
                                    <Col lg="6">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="last-name" className="">Last Name</Form.Label>
                                          <Form.Control type="text" className="" id="last-name" placeholder=" " />
                                       </Form.Group>
                                    </Col>
                                    <Col lg="12">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="email" className="">Email</Form.Label>
                                          <Form.Control type="email" className="" id="email" placeholder=" " />
                                       </Form.Group>
                                    </Col>
                                    <Col lg="6">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="password" className="">Password</Form.Label>
                                          <Form.Control type="password" className="" id="password" placeholder=" " />
                                       </Form.Group>
                                    </Col>
                                    <Col lg="6">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="confirm-password" className="">Confirm Password</Form.Label>
                                          <Form.Control type="text" className="" id="confirm-password" placeholder=" " />
                                       </Form.Group>
                                    </Col>
                                    <Col lg="12" className="d-flex justify-content-center">
                                       <Form.Check className="mb-3 form-check">
                                          <Form.Check.Input type="checkbox" id="customCheck1" />
                                          <Form.Check.Label htmlFor="customCheck1">I agree with the terms of use</Form.Check.Label>
                                       </Form.Check>
                                    </Col>
                                 </Row>
                                 <div className="d-flex justify-content-center">
                                    <Button onClick={() => history.push('/dashboard')} type="button" variant="primary">Sign Up</Button>
                                 </div>
                                 <p className="text-center my-3">or sign in with other accounts?</p>
                                 <div className="d-flex justify-content-center">
                                    <ListGroup as="ul" className="list-group-horizontal list-group-flush">
                                       <ListGroup.Item as="li" className="list-group-item border-0 pb-0">
                                          <Link to="#"><Image src={facebook} alt="fb" /></Link>
                                       </ListGroup.Item>
                                       <ListGroup.Item as="li" className="list-group-item border-0 pb-0">
                                          <Link to="#"><Image src={google} alt="gm" /></Link>
                                       </ListGroup.Item>
                                       <ListGroup.Item as="li" className="list-group-item border-0 pb-0">
                                          <Link to="#"><Image src={instagram} alt="im" /></Link>
                                       </ListGroup.Item>
                                       <ListGroup.Item as="li" className="list-group-item border-0 pb-0">
                                          <Link to="#"><Image src={linkedin} alt="li" /></Link>
                                       </ListGroup.Item>
                                    </ListGroup>
                                 </div>
                                 <p className="mt-3 text-center">
                                    Already have an Account <Link to="/auth/sign-in" className="text-underline">Sign In</Link>
                                 </p>
                              </Form>
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </section>
      </>
   )
}

export default SignUp
