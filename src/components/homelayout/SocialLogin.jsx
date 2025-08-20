import React from 'react';
import { FcGoogle } from "react-icons/fc"
import { FaGithubSquare } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className='space-y-3'>
            <h2 className='font-bold'>LOGIN WITH</h2>
            <div className='gap-3 space-y-2'>
                <button className='btn w-full btn-outline btn-secondary'><FcGoogle size={24}/> Login with Google</button>
                <button className='btn w-full btn-outline btn-primary'><FaGithubSquare size={24} />Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;