import React, {Fragment, memo, useState}from 'react'
import FsLightbox from 'fslightbox-react';
import { Row, Col, Image, Form, Nav, Dropdown, Tab, Spinner } from 'react-bootstrap'
import Card from '../../components/Card'

import {Link} from 'react-router-dom'
// img

import avatars11 from '../../assets/images/avatars/01.png'
import avatars22 from '../../assets/images/avatars/avtar_1.png'
import avatars33 from '../../assets/images/avatars/avtar_2.png'
import avatars44 from '../../assets/images/avatars/avtar_3.png'
import avatars55 from '../../assets/images/avatars/avtar_4.png'
import avatars66 from '../../assets/images/avatars/avtar_5.png'
import avatars2 from '../../assets/images/avatars/02.png'
import avatars3 from '../../assets/images/avatars/03.png'
import avatars4 from '../../assets/images/avatars/04.png'
import avatars5 from '../../assets/images/avatars/05.png'


import icon1 from '../../assets/images/icons/01.png'
import icon2 from '../../assets/images/icons/02.png'
import icon3 from '../../assets/images/icons/03.png'
import icon4 from '../../assets/images/icons/04.png'
import icon8 from '../../assets/images/icons/08.png'
import icon6 from '../../assets/images/icons/06.png'
import icon7 from '../../assets/images/icons/07.png'

import icon5 from '../../assets/images/icons/05.png'
import shap2 from '../../assets/images/shapes/02.png'
import shap4 from '../../assets/images/shapes/04.png'
import shap6 from '../../assets/images/shapes/06.png'
import pages2 from '../../assets/images/pages/02-page.png'

import Circularprogressbar from '../../components/circularprogressbar';

import ShareOffcanvas from '../../components/partials/components/shareoffcanvas'

const Communities = memo((props) => {
   const [toggler, setToggler] = useState();
  return(
        <Fragment>
            <Row><Col lg="12">
                  <Card>
                        <Card.Header>
                            <h4>
                                Stories
                            </h4>
                        </Card.Header>
                        <Card.Body className="d-flex justify-content-center">
                            
                        <Form.Group className=" d-flex justify-content-center form-group m-0">
                                                    <Form.Control type="email" className="form-control-lg p-3" id="colFormLabelLg" style={{ width:'40rem', borderRadius:"2rem"}} placeholder="Write somethings here"/>
                                                </Form.Group>
                        </Card.Body>
                  </Card>
               </Col>
            </Row>
        </Fragment>
  )

})

export default Communities;