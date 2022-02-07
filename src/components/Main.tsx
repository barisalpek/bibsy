import React from 'react';
import Theme from './Theme';

import SignInWidget from './SignIn_Widget';
import MainContainer from './MainContainer';
import Navbar from './Navbar';
import SignInMobile from './mobile/Mobile_Widget'

const Main =()=> {
    return (

     <div className='flex justify-center content-center h-screen touch-none'>
        <Theme/>
        <MainContainer page='list' isAdmin={true}/>
        {/* <SignInWidget/> */}
        {/* <SignInMobile/> */}
     </div>
    );
}

export default Main;