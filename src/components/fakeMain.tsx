import React, { useState } from 'react';
import Theme from './Theme';
import Table from "./Table"
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";

import SignInWidget from './SignIn_Widget';
import MainNavbar from './MainNavbar';
import Navbar from './Navbar';
import RegisterBook from './RegisterBook';
import ReturnAndBorrow from './ReturnAndBorrow';
import DocumentMeta from "react-document-meta";
import ListStudent from './ListStudent';

const FakeMain = () => {
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

    const [isAdmin, setIsAdmin] = useState<boolean>(true);

    return (       
    <div className='flex justify-center content-center h-screen touch-none'>
    <DocumentMeta {...meta} />
    {/* <Theme/> */}
        {/* Displays all members */}
       
            <div className='h-[100%] w-[100%] flex flex-row z-10'>
                <div className='w-full h-[100%] flex flex-col content-between'>
                    <div className='h-[10%] mb-[3%]'>
                    </div>
                    <div className='h-[85%] w-full'>
                        {/* List component, takes mainColor and listColor as params to dynamicly change color between pages, typeOf determines if the component displays the memberstyle list or bookstyle, there is also two types of bookdisplays named bookType, "available" and "borrowed", this can be greatly improved for simplicity by changing typeof to three different types like member, available and borrowed */}
                        {/* <ListStudent/> */}
                       <Table/>
                    </div>
                </div> 
            </div>
        
</div>
);
}
export default FakeMain;