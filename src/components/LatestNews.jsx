import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={100}>
            <p className='font-bold'>Bangladesh is win Today's match. Against Sri Lanka.</p>
            <p className='font-bold'>One spot dead on mawa highway today by riding the bike in DHAKA-MAWA highway</p>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;