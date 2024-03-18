/* Notes:
* If You want to use React-Icons in any File it MUST to be .tsx NOt .ts 😄
* and be Notes to add in TypeScript as "icon?: JSX.Element" 🔥
*/

import { NavLinkType } from '@/types'
import { IoHome } from "react-icons/io5";
import { IoIosWifi } from "react-icons/io";
import { FaRegAddressCard } from "react-icons/fa";
import { ImQrcode } from "react-icons/im";
export const NavLinks: NavLinkType[] = [
    {
        path: '/',
        title: 'Home',
        // icon:'./assets/icons/home.svg'
        // icon: <IoHome className='text-red' />
        icon: <IoHome />
    }, {
        path: '/wifi',
        title: 'Wifi',
        // icon:'./assets/icons/wifi.svg'
        icon: <IoIosWifi />
    }, {
        path: '/vcard',
        title: 'Vcard',
        // icon:'./assets/icons/vcard.svg'
        icon: <FaRegAddressCard />
    }, {
        path: '/',
        title: 'URL Link',
        // icon: './assets/icons/qr-code.svg'
        icon: <ImQrcode />
    }
]