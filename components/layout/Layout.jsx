"use client";
import React from 'react'
import { useContext, useEffect } from 'react';
import VideoPopup from '../popup/VideoPopup';
import ExperiencePopup from '../popup/ExperiencePopup';
import ServicePopup from '../popup/ServicePopup';
import PortfolioPopup from '../popup/PortfolioPopup';
import BlogPopup from '../popup/BlogPopup';
import { context } from '@/contexts/context';
import { MobileMenu } from './MobileMenu';
import { Sidebar } from './Sidebar';
import { Cursor } from './Cursor';
import {eliscUtilits} from '@/utils/util';

// Declare Layout as a constant function component
const Layout = ({children}) => {
    
    useEffect(() => {
        eliscUtilits.dataImage();
        eliscUtilits.customCursor();
        eliscUtilits.imgToSVG();
    }, []);

    const {
    modal,
    experienceModal,
    serviceModal,
    portfolioModal,
    blogModal,
    animation,
    } = useContext(context);

    return (
    <>
        <VideoPopup />
        {modal && experienceModal && <ExperiencePopup />}
        {modal && serviceModal && <ServicePopup />}
        {modal && portfolioModal && <PortfolioPopup />}
        {modal && blogModal && <BlogPopup />}
        <div
        className={animation ? "elisc_tm_all_wrap" : "dodo_tm_one_page_wrapper"}
        data-magic-cursor="show"
        data-enter={animation}
        data-exit
        >
        <MobileMenu />
        <Sidebar />
        <div className="elisc_tm_mainpart w-full min-h-[100vh] clear-both float-left pl-[370px]">
            <div className="mainpart_inner w-full min-h-[100vh] clear-both float-left relative">
            {children}
            </div>
        </div>
        <Cursor />
        </div>
    </>
    );
}

export default Layout;
    
