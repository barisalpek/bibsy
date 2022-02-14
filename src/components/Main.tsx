import React from 'react';
import Theme from './Theme';

import SignInWidget from './SignIn_Widget';
import MainContainer from './MainContainer';
import MainNavbar from './MainNavbar';
import NavbarV2 from './Navbarv2';
import RegisterBook from './RegisterBook';
import ReturnAndBorrow from './ReturnAndBorrow';
import DocumentMeta from "react-document-meta";
const Main =()=> {
    const meta = {
        title: "Bibsy",
        description: "NTI Gymnasiet",
            meta:{
                charset: "utf-8",
                name: {
                    "viewport": "width=device-width, initial-scale=1",
                    "apple-mobile-web-app-capable": "yes",
                    "apple-touch-fullscreen": "yes",
                    "apple-mobile-web-app-status-bar-style": "black-translucent",
                },               
            }
    }
    return (
     <div className='flex justify-center content-center h-screen touch-none'>
        <Theme/>
        <DocumentMeta {...meta} />
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