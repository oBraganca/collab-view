import React, { useState, useEffect,Fragment } from 'react'
import { Button, Nav, Collapse, Navbar, Container } from 'react-bootstrap'
import Card from '../../src/components/Card'
import Logo from '../components/partials/components/logo'
import OtherLogo from '../components/partials/components/otherLogo'
import { Link } from 'react-router-dom'
import iconBlack from '../assets/images/icon_black.png'
import iconWhite from '../assets/images/icon_white.png'
//uiKit
import Accordions from './uikit/accordion'
import Alerts from './uikit/alert'
import Badges from './uikit/badge'
import Breadcrumbs from './uikit/breadcrumb'
import Buttons from './uikit/button'
import ButtonGroups from './uikit/buttons-group'
import Calenders from './uikit/calender'
import Cards from './uikit/card'
import Carousels from './uikit/carousel'
import DropDowns from './uikit/dropdowns'
import ListGroups from './uikit/list-group'
import Modals from './uikit/modal'
import Navbars from './uikit/navbar'
import Navs from './uikit/nav'
import OffCanvass from './uikit/off-canvas'
import Paginations from './uikit/pagination'
import Popovers from './uikit/popovers'
import Scrollspys from './uikit/scrollspy'
import Spinnerss from './uikit/spinner'
import Toasts from './uikit/toast'
import Tooltips from './uikit/tooltip'
import Progresss from './uikit/progress'
//form
import DisabledForms from './uikit/disabled-form'
import AFormControls from './uikit/alternate-form-control'
import Sizings from './uikit/sizing'
import InputGroups from './uikit/input-group'
import FloatingLables from './uikit/floating-lable'
import AFloatingLables from './uikit/alternate-floating-lable'
import ToggleBtns from './uikit/toggle-btn'
import Validations from './uikit/validation'
import Overview from './uikit/form-overview'

// content
import Typographys from './uikit/typography'
import Images from './uikit/image'
import Figures from './uikit/figure'
import Tables from './uikit/table'

//img
import topImage from '../assets/images/dashboard/top-image.jpg'
import instagram from '../assets/images/brands/10.png'

//prism
import '../../node_modules/prismjs/prism';
import '../../node_modules/prismjs/themes/prism-okaidia.css'

// SliderTab
import SliderTab from '../plugins/slider-tabs'

// Import selectors & action from setting store
import * as SettingSelector from "../store/setting/selectors";

// Redux Selector / Action
import { useSelector } from "react-redux";



const Index = () => {
  const appName = useSelector(SettingSelector.app_name);
    // collapse
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);


    useEffect(() => {
      return () => {
        setTimeout(() => {
          Array.from(
            document.querySelectorAll('[data-toggle="slider-tab"]'),
            (elem) => {
              return new SliderTab(elem);
            }
          );
        }, 100);
      };
    });

    return (
        <Fragment>
          <span className="uisheet screen-darken"></span>
          <div
            className="header"
            style={{
              background: `url(${topImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              position: "relative",
            }}
          >
            <div className="main-img">
              <div className="container">

                <img
                  style={{width:"10rem"}}
                  src={iconWhite}
                  alt=""
                />
                <h1 className="my-2">
                  <span data-setting="app_name">{appName}</span>
                </h1>
                <h4 className="text-white mb-5">
                  We are in development try <b>LOG IN</b> or <b>GET STARTED</b> for view the DEMO
                </h4>
                <div className="d-flex justify-content-center align-items-center">
                  <div style={{ backgroundColor: "#4f46e5" }}>
                    <Link
                      className="btn d-flex fw-bold"
                      style={{ color:'white' }}
                      to="/auth/sign-in"
                    >
                      <svg
                        width="22"
                        height="22"
                        className="me-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path>
                      </svg>
                      Get Started
                    </Link>
                  </div>
                  <div className="ms-3">
                      <Button bsPrefix=" btn btn-light bg-white d-flex" target="_blank" href="https://github.com/iqonic-design/hope-ui-react-dashboard">
                          <img src={instagram} width="24px" height="24px" alt="instagram"/>
                          <span className="text-danger mx-2 fw-bold">FOLLOW US</span> 
                          <span>ON INSTAGRAM</span>
                      </Button>
                  </div>

              </div>
            </div>
          </div>
          <Container fluid className='p-0'>
            <Nav className=" navbar navbar-expand-lg navbar-light" >
              <Container fluid>
                <Navbar.Brand href="#" className="l-0 mx-2 d-flex align-items-center">
                  <OtherLogo color={true} />
                  <h5 className="logo-title mx-3">{appName}</h5>
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  onClick={() => setOpen3(!open3)}
                />
                <Navbar.Collapse  id="basic-navbar-nav" in={open3}>
                  <ul className="mb-2 navbar-nav ms-auto mb-lg-0 d-flex align-items-start">
                    <Nav.Item as="li">
                      <Nav.Link
                        aria-current="page"
                        href="https://templates.iqonic.design/hope-ui/pro/documentation/react"
                        target="_blank"
                      >
                        Newsletter
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link
                        aria-current="page"
                        href="https://templates.iqonic.design/hope-ui/pro/documentation/react"
                        target="_blank"
                      >
                        Company
                      </Nav.Link>
                    </Nav.Item>
                    <li className="nav-item me-3">
                      <Nav.Link
                        aria-current="page"
                        href="https://templates.iqonic.design/hope-ui/pro/documentation/react/changelog"
                        target="_blank"
                      >
                        Features
                      </Nav.Link>
                    </li>
                    <Nav.Item as="li" className="me-3 mb-2 mb-sm-0">
                      <Button
                        style={{backgroundColor: "#4f46e5", color:'white'}}
                        variant="d-flex align-items-center gap-2"
                        aria-current="page"
                        href="/auth/sign-in"
                      >
                        <svg
                          className="icon-22"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.4274 2.5783C20.9274 2.0673 20.1874 1.8783 19.4974 2.0783L3.40742 6.7273C2.67942 6.9293 2.16342 7.5063 2.02442 8.2383C1.88242 8.9843 2.37842 9.9323 3.02642 10.3283L8.05742 13.4003C8.57342 13.7163 9.23942 13.6373 9.66642 13.2093L15.4274 7.4483C15.7174 7.1473 16.1974 7.1473 16.4874 7.4483C16.7774 7.7373 16.7774 8.2083 16.4874 8.5083L10.7164 14.2693C10.2884 14.6973 10.2084 15.3613 10.5234 15.8783L13.5974 20.9283C13.9574 21.5273 14.5774 21.8683 15.2574 21.8683C15.3374 21.8683 15.4274 21.8683 15.5074 21.8573C16.2874 21.7583 16.9074 21.2273 17.1374 20.4773L21.9074 4.5083C22.1174 3.8283 21.9274 3.0883 21.4274 2.5783Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.4"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.01049 16.8079C2.81849 16.8079 2.62649 16.7349 2.48049 16.5879C2.18749 16.2949 2.18749 15.8209 2.48049 15.5279L3.84549 14.1619C4.13849 13.8699 4.61349 13.8699 4.90649 14.1619C5.19849 14.4549 5.19849 14.9299 4.90649 15.2229L3.54049 16.5879C3.39449 16.7349 3.20249 16.8079 3.01049 16.8079ZM6.77169 18.0003C6.57969 18.0003 6.38769 17.9273 6.24169 17.7803C5.94869 17.4873 5.94869 17.0133 6.24169 16.7203L7.60669 15.3543C7.89969 15.0623 8.37469 15.0623 8.66769 15.3543C8.95969 15.6473 8.95969 16.1223 8.66769 16.4153L7.30169 17.7803C7.15569 17.9273 6.96369 18.0003 6.77169 18.0003ZM7.02539 21.5683C7.17139 21.7153 7.36339 21.7883 7.55539 21.7883C7.74739 21.7883 7.93939 21.7153 8.08539 21.5683L9.45139 20.2033C9.74339 19.9103 9.74339 19.4353 9.45139 19.1423C9.15839 18.8503 8.68339 18.8503 8.39039 19.1423L7.02539 20.5083C6.73239 20.8013 6.73239 21.2753 7.02539 21.5683Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        Log In
                      </Button>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Button
                        variant="success d-flex align-items-center gap-2"
                        aria-current="page"
                        href="https://iqonic.design/item/hope-ui-pro/item-checkout/?coupon_code=DROPBY20"
                        target="_blank"
                      >
                        <svg height="22" width="22" viewBox="0 0 47.94 47.94" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path style={{ fill: '#ffffff' }} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path>
                          </g>
                        </svg>
                        Premium
                      </Button>
                    </Nav.Item>
                  </ul>
                </Navbar.Collapse>
              </Container>
            </Nav>
          </Container>
        </div>
        <div className=" body-class-1 container">
          <div className="bd-cheatsheet container-fluid bg-trasprent mt-n5">

          </div>
        </div>
        <div id="back-to-top" style={{ display: "none" }}>
          <Button size="xs" variant="primary  p-0 position-fixed top" href="#top">
            <svg
              width="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 15.5L12 8.5L19 15.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Button>
        </div>
        </Fragment>
    )
}

export default Index;
