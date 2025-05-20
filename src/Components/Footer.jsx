import React from 'react';
import { NavLink } from 'react-router';
import logo from '/25c50e104102623.Y3JvcCwyOTUyLDIzMDksNTU1LDA.png'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

const Footer = () => {
    return (
        <div className='mx-auto bg-gray-800'>
            <div className='grid grid-cols-4 py-10 md:px-6'>
                <div className='space-y-4 ml-4'>
                    <div className='md:flex justify-baseline items-center gap-2'>
                        <img className='w-15 rounded-full' src={logo} alt="" />
                        <h1 className='font-bold text-white'>HobbyHub</h1>
                    </div>
                    <a href="https://www.google.com/maps/dir//Level-4,+34,+Awal+Centre,+Dhaka+1213/@23.7937461,90.3229605,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3755c7163736e453:0xb12cfac638de13ed!2m2!1d90.4053636!2d23.7936109?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D">
                        <p className='font-medium hover:underline text-white text-balance'>📍 Level-4, 34, Awal Centre, Banani, Dhaka</p>
                    </a>
                    <p className='font-medium  text-white text-balance mt-2'>🕒 Available: 10:00 AM – 07:00 PM</p>
                    <div className='space-y-4'>
                        <button className=' text-white'>📞 Call Us: 61 089 988 8722</button>
                        <button className=' text-white'>💬 Live Chat: Available 24/7</button>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-xl text-white mb-4 md:text-center'>Navigate to </h1>
                    <div className=' md:text-center'>
                        <ul className=' space-y-5'>
                            <li><NavLink to='/' className='hover:underline font-bold text-white'>Home</NavLink>
                            </li>
                            <li><NavLink className='hover:underline font-bold text-white'>All Groups
                            </NavLink></li>
                            <li><NavLink className='hover:underline font-bold text-white'>Create Group</NavLink></li>
                            <li><NavLink className='hover:underline font-bold text-white'>My Groups</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-xl text-white mb-1'> Safety Rules</h1>
                    <div className='space-y-2'>
                        <p className='font-normal text-white text-balance'>1. Meet in public places for first-time group gatherings.</p>
                        <p className='font-normal text-white text-balance'>2. Inform a friend or family member before attending events.</p>
                        <p className='font-normal text-white text-balance'>3. Respect personal boundaries and space at all times.</p>
                        <p className='font-normal text-white text-balance'>4. Report suspicious or inappropriate behavior to group admins.</p>
                        <p className='font-normal text-white text-balance'>5. Avoid sharing sensitive personal information with strangers.</p> <p className='font-normal text-white text-balance'>6 .Follow local health and safety regulations during group activities.</p>
                    </div>
                </div>
                <div className='space-y-2'>
                    <h1 className='font-bold text-xl text-white mb-1'>Group rule</h1>
                    <p className='font-normal text-white text-balance'>1. Respect everyone’s opinions; healthy discussions, not heated arguments allowed.</p>
                    <p className='font-normal text-white text-balance'>2 .Keep things relevant to the hobby; off-topic posts discouraged.
                    </p>
                    <p className='font-normal text-white text-balance'>3. No hate speech, bullying, or discriminatory language will be tolerated.</p>
                    <p className='font-normal text-white text-balance'>4. Meetup plans must be confirmed in group before attending.</p>
                    <p className='font-normal text-white text-balance'>5. Share resources freely, but avoid promoting products or services.</p>
                </div>
            </div>
            <div className='flex justify-around py-6 border-t-1 border-gray-50'>
                <p className='font-semibold text-white'>Copyright © All Right Reserved</p>
                <div>
                    <div className='flex justify-center items-center gap-1 md:gap-3'>
                        <h1 className='font-semibold text-white'>Follow on :</h1>
                        <FaFacebook color='blue'></FaFacebook>
                        <FaInstagram color='red'></FaInstagram>
                        <FaLinkedin color='blue'></FaLinkedin>
                        <IoLogoWhatsapp color='green'></IoLogoWhatsapp>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;