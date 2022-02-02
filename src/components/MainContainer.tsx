import React, {useEffect, useState} from 'react';
import List from './List';

type typeOfPage = {
    page: string;
}

const MainContainer = (props: typeOfPage) => {

    const [pageType, setPageType] = useState<string>('');
    const [navStyle, setNavStyle] = useState<string>('');
    const [bodyStyle, setBodyStyle] = useState<string>('');
    const [isMain, setIsMain] = useState<boolean | null>(null);

    useEffect(() => {
        setPageType(props.page);

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
        {isMain && 
            <div className='h-[100%] w-[100%] bg-white rounded'>
                <div>

                </div>
                <div>
                    
                </div>     
            </div>
        }
        {!isMain && 
            <div className='h-[100%] w-[100%]'>
                <div className='h-[10%] bg-blue-600 mb-10'>

                </div>
                <div className='h-[80%]'>
                    <List mainColor='grön' listColor='ljusGrön' typeOf='book' />
                </div>     
            </div>
        }
    </div>
 );
}

export default MainContainer