import React from 'react';
import Theme from './Theme';

import SignInWidget from './SignIn_Widget';
import MainContainer from './MainContainer';
import MainNavbar from './MainNavbar';
import Navbar from './Navbarv2';
import RegisterBook from './RegisterBook';
import ReturnAndBorrow from './ReturnAndBorrow';


const Main =()=> {
    return (

     <div className='flex justify-center content-center h-screen touch-none'>
        <Theme/>
        {/* <MainContainer page='list'/> */}
        <MainNavbar isBig={false} />
        <Navbar/> 
        <RegisterBook isMember={true} isActive={true}/>
        <ReturnAndBorrow isReturn={true} isActive={false}/> 
     </div>
    );
}

export default Main;

