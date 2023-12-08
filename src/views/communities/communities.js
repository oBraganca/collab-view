import React, {Fragment, memo, useState}from 'react'
import FsLightbox from 'fslightbox-react';
import CardCommunity from '../../components/CardCommunity'
import topHeader2 from '../../assets/images/dashboard/top-header2.png'
import photo from '../../assets/images/avatars/avtar_2.png'
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
import Buttons from "../uikit/button";

const Communities = memo((props) => {
   const [toggler, setToggler] = useState();
  return(
      <CardCommunity communityName="Beautiful People" numberOfPosts={7} numberOfMembers={77}></CardCommunity>
  )

})

export default Communities;