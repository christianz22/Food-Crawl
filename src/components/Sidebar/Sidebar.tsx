import * as AiIcons from "react-icons/ai"
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
];