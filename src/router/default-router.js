import React from 'react'
import Newsfeed from '../views/newsfeed/newsfeed';
import Index from '../views/dashboard/index'
// import { Switch, Route } from 'react-router-dom'
// user
import UserProfile from '../views/app/user-profile';
import UserAdd from '../views/app/user-add';
import UserList from '../views/app/user-list';
// import userProfileEdit from '../views/dashboard/app/user-privacy-setting';
// widget
import Widgetbasic from '../views/widget/widgetbasic';
import Widgetcard from '../views/widget/widgetcard';
import Widgetchart from '../views/widget/widgetchart';
// icon
import Solid from '../views/icons/solid';
import Outline from '../views/icons/outline';
import DualTone from '../views/icons/dual-tone';
// Form
import FormElement from '../views/from/form-element';
import FormValidation from '../views/from/form-validation';
import FormWizard from '../views/from/form-wizard';
// table
import BootstrapTable from '../views/table/bootstrap-table';
import TableData from '../views/table/table-data';

// map
import Vector from '../views/maps/vector';
import Google from '../views/maps/google';

//extra
// import PrivacyPolicy from '../views/dashboard/extra/privacy-policy';
// import TermsofService from '../views/dashboard/extra/terms-of-service';

//TransitionGroup
// import { TransitionGroup, CSSTransition } from "react-transition-group";
//Special Pages

import Communities from '../views/communities/communities';
import Billing from '../views/special-pages/billing';
import Kanban from '../views/special-pages/kanban';
import Pricing from '../views/special-pages/pricing';
import Timeline from '../views/special-pages/timeline';
import Calender from '../views/special-pages/calender';
import RtlSupport from '../views/special-pages/RtlSupport'

//admin
import Admin from '../views/admin/admin';
import Default from '../layouts/default';


export const DefaultRouter = [
    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: '/newsfeed',
                element: <Newsfeed />
            },
            {
                path: 'dashboard',
                element: <Index />
            },
            {
                path: '/communities',
                element: <Communities />
            },
            {
                path: 'dashboard/special-pages/billing',
                element: <Billing />
            },
            {
                path: 'dashboard/special-pages/calender',
                element: <Calender />
            },
            {
                path: 'dashboard/special-pages/kanban',
                element: <Kanban />
            },
            {
                path: 'dashboard/special-pages/pricing',
                element: <Pricing />
            },
            {
                path: 'dashboard/special-pages/timeline',
                element: <Timeline />
            },
            {
                path: 'dashboard/special-pages/rtl-support',
                element: <RtlSupport/>,
            },
            {
                path: 'app/user-profile',
                element: <UserProfile />
            },
            {
                path: 'app/user-add',
                element: <UserAdd />
            },
            {
                path: 'app/user-list',
                element: <UserList />
            },
            {
                path: 'dashboard/admin/admin',
                element: <Admin />
            },
            // Widget
            {
                path: 'dashboard/widget/widgetbasic',
                element: <Widgetbasic />
            },
            {
                path: 'dashboard/widget/widgetchart',
                element: <Widgetchart />
            },
            {
                path: 'dashboard/widget/widgetcard',
                element: <Widgetcard />
            },
            // Map
            {
                path: 'dashboard/map/google',
                element: <Google />
            },
            {
                path: 'dashboard/map/vector',
                element: <Vector />
            },
            // Form
            {
                path: 'dashboard/form/form-element',
                element: <FormElement />
            },
            {
                path: 'dashboard/form/form-wizard',
                element: <FormWizard />
            },
            {
                path: 'dashboard/form/form-validation',
                element: <FormValidation />
            },
            // Table
            {
                path: 'dashboard/table/bootstrap-table',
                element: <BootstrapTable />
            },
            {
                path: 'dashboard/table/table-data',
                element: <TableData />
            },
            // Icon
            {
                path: 'dashboard/icon/solid',
                element: <Solid />
            },
            {
                path: 'dashboard/icon/outline',
                element: <Outline />
            },
            {
                path: 'dashboard/icon/dual-tone',
                element: <DualTone />
            }
        ]
    }
]
// const DefaultRouter = () => {
//     return (
//         <TransitionGroup>
//             <CSSTransition classNames="fadein" timeout={300}>
//                 <Switch>
//                     <Route path="/dashboard" exact component={Index} />
//                     {/* user */}
//                     <Route path="/dashboard/app/user-profile"     exact component={UserProfile} />
//                     <Route path="/dashboard/app/user-add"         exact component={UserAdd}/>
//                     <Route path="/dashboard/app/user-list"        exact component={UserList}/>
//                     <Route path="/dashboard/app/user-privacy-setting" exact component={userProfileEdit}/>
//                      {/* widget */}
//                      <Route path="/dashboard/widget/widgetbasic"   exact component={Widgetbasic}/>
//                      <Route path="/dashboard/widget/widgetcard"    exact component={Widgetcard}/>
//                      <Route path="/dashboard/widget/widgetchart"   exact component={Widgetchart}/>
//                      {/* icon */}
//                      <Route path="/dashboard/icon/solid"           exact component={Solid}/>
//                      <Route path="/dashboard/icon/outline"         exact component={Outline}/>
//                      <Route path="/dashboard/icon/dual-tone"       exact component={DualTone}/>
//                      {/* From */}
//                      <Route path="/dashboard/form/form-element"    exact component={FormElement}/>
//                      <Route path="/dashboard/form/form-validation" exact component={FormValidation}/>
//                      <Route path="/dashboard/form/form-wizard"     exact component={FormWizard}/>
//                      {/* table */}
//                      <Route path="/dashboard/table/bootstrap-table" exact component={BootstrapTable}/>
//                      <Route path="/dashboard/table/table-data"      exact component={TableData}/>
//                      {/*special pages */}
//                      <Route path="/dashboard/special-pages/billing" exact component={Billing}/>
//                      <Route path="/dashboard/special-pages/kanban" exact component={Kanban}/>
//                      <Route path="/dashboard/special-pages/pricing" exact component={Pricing}/>
//                      <Route path="/dashboard/special-pages/timeline" exact component={Timeline}/>
//                      <Route path="/dashboard/special-pages/calender" exact component={Calender}/>
//                      {/* map */}
//                      <Route path="/dashboard/map/vector" exact component={Vector}/>
//                      <Route path="/dashboard/map/google" exact component={Google}/>
//                      {/* extra */}
//                      <Route path="/dashboard/extra/privacy-policy" exact component={PrivacyPolicy}/>
//                      <Route path="/dashboard/extra/terms-of-service" exact component={TermsofService}/>
//                      {/*admin*/}
//                      <Route path="/dashboard/admin/admin" exact component={Admin}/>
//                 </Switch>
//             </CSSTransition>
//         </TransitionGroup>
//     )
// }

// export default DefaultRouter
