import React, {useEffect, useState} from 'react';
import List from './List';
import Navbar from './Navbar';
import getData from './getData';
//import Buttons from './Buttons';

type typeOfPage = {
    page: string;
    isAdmin: boolean;
}

const MainContainer = (props: typeOfPage) => {

    const [pageType, setPageType] = useState<string>('');
    const [navStyle, setNavStyle] = useState<string>('');
    const [bodyStyle, setBodyStyle] = useState<string>('');
    const [isMain, setIsMain] = useState<boolean | null>(null);
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

    useEffect(() => {
        setPageType(props.page);
        setIsAdmin(props.isAdmin);


        if (pageType === 'list') {
            setNavStyle('');
            setBodyStyle('');
            setIsMain(false);
        }
        else if(pageType === 'main') {
            setNavStyle('');
            setBodyStyle('');
            setIsMain(true);
        }
        else {
            setIsMain(null); 
        }
    }, [])

 return(
     <div className="h-[90%] w-5/6 my-auto -z-[0] ">
        {isMain && <>
        {isAdmin && <Navbar/>}
            <div className='h-[100%] w-[100%] bg-white rounded'>
                {/*  */}
                <div>
                    {!isAdmin && <div>
                    
                    </div>}
                </div>
                <div>
                   {/* <MainNavbar */} 
                </div>     
            </div>
        </>}
        {!isMain && 
        <>
            
            <div className='h-[100%] w-[100%] flex  flex-row'>
                {isAdmin && <Navbar/>}
                <div className='w-full h-[100%] flex border-red-500 border-2 flex-col content-between'>
                    <div className='h-[10%] mb-[3%] bg-blue-600 '>
                        {/*<Buttons />*/}
                    </div>
                    
                    <div className='h-[85%] w-full'>
                        <List mainColor='grön' listColor='ljusGrön' typeOf='book' bookType="available"/>
                    </div>    
                </div> 
            </div>
            </>
        }
    </div>
 );
}

export default MainContainer