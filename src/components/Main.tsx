import React from 'react';
import Theme from './Theme';

import SignInWidget from './SignIn_Widget';
import MainContainer from './MainContainer';
import MainNavbar from './MainNavbar';
import NavbarV2 from './Navbarv2';
import RegisterBook from './RegisterBook';
import ReturnAndBorrow from './ReturnAndBorrow';
const Main =()=> {
    return (
     <div className='flex justify-center content-center h-screen touch-none'>
        <Theme/>
        {/* <MainContainer page='list'/> */}
        <MainNavbar isBig={false} />
        <NavbarV2/> 
        <RegisterBook isMember={false} isActive={true}/>
        <ReturnAndBorrow isReturn={false} isActive={false}/> 
        {/* <MainContainer isAdmin={true}/> */}
        {/* <SignInWidget/> */}
        {/* <SignInMobile/> */}
     </div>
    );
}
export default Main;