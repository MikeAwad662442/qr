export interface NavLinkType{
    path: string,
    title: string,
    icon?: JSX.Element, // to insert icons from react-icons 🔥
    submenu?: boolean,
    subMenuItems?: NavLinkType[],
}

export interface UserType{
    userName: string,
    password: string
}

export interface QRcodeType{
    data: string,
    images: any
}