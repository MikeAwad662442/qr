export interface NavLinkType{
    path: string,
    title: string,
    icon?: JSX.Element, // to insert icons from react-icons 🔥
    submenu?: boolean,
    subMenuItems?: NavLinkType[],
}