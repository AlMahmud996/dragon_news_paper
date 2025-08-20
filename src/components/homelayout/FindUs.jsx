import React from 'react';
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { PiInstagramLogo } from "react-icons/pi";



const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us On</h2>
            <div>
                <div className="join join-vertical w-full">
                    <button className="btn bg-base-100 justify-start join-item"><IoLogoFacebook />Facebook</button>
                    <button className="btn bg-base-100 justify-start join-item"><AiFillTwitterCircle />Twitter</button>
                    <button className="btn bg-base-100 justify-start join-item"><PiInstagramLogo />Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;