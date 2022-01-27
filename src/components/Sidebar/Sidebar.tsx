import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as GiIcons from 'react-icons/gi'
import { BsBucketFill } from "react-icons/bs";

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
        icon: <BsBucketFill/>, 
        cName: 'nav-text'
    },
    {
        title: 'Favorites',
        path: '/favorites',
        icon: <AiIcons.AiFillHeart/>,
        cName: 'nav-text'
    },
    {
        title: 'Reviews',
        path: '/reviews',
        icon: <AiIcons.AiFillStar/>,
        cName: 'nav-text'
    }
];