import React from 'react';
import { Parallax } from 'react-parallax';
import hiredPic from './hired-pic.png'
import rainbow from './rainbow.jpeg'
import { ReferralLink } from './ReferralLink';

const ReferralsSection = () =>{
 return (
     <Parallax bgImage={rainbow}>
         <h4 style={{ color: `darkblue` }}>These are the services I have used myself and can recommend. </h4>
         <ReferralLink
             imgUrl={hiredPic}
             alt="Hired.com referral link"
             descr="Hired.com - job platform for technologists"
            refUrl="https://hired.com/x/7aae075f31f1c37d5084d0bda822ab5fß"
         />
    </Parallax>
 )
}

export default ReferralsSection;