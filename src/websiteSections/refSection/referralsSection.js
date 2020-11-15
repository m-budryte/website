import React from 'react';
import hiredPic from './hired-pic.png'
import { ReferralLink } from './ReferralLink';

const ReferralsSection = () =>{
 return (
     <div>
         <h4>These are the services I have used myself and can recommend. </h4>
         <ReferralLink
             imgUrl={hiredPic}
             alt="Hired.com referral link"
             descr="Hired.com - job platform for technologists"
            refUrl="https://hired.com/x/7aae075f31f1c37d5084d0bda822ab5fß"
         />
    </div>
 )
}

export default ReferralsSection;