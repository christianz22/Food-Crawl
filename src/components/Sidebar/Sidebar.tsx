import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as GiIcons from 'react-icons/gi'
import { BsBucket } from "react-icons/bs";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Bucketlist',
        path: '/bucketlist',
        icon: <BsBucket/>, 
        cName: 'nav-text'
    },
    {
        title: 'Favorites',
        path: '/favorites',
        icon: <AiIcons.AiOutlineHeart/>,
        cName: 'nav-text'
    },
    {
        title: 'Reviews',
        path: '/reviews',
        icon: <AiIcons.AiOutlineStar/>,
        cName: 'nav-text'
    }
];