import { Link } from "react-router-dom";
import { IoHome,IoSettingsOutline,IoNotifications } from "react-icons/io5";
import { FcBusinessman } from "react-icons/fc";
import { CiMenuKebab } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className="px-8 py-4 sm:px-2 flex justify-between items-center">
<div className="logo">
<h1>Deep <strong className="text-blue-500">Thought</strong></h1>
</div>
<div className="nav-links flex md:gap-4 gap-8 text-2xl">
<Link to="/"><IoHome/></Link>
<Link to="/settings"><IoSettingsOutline/></Link>
<Link to="/notification"><IoNotifications/></Link>
<Link to="/profile"><FcBusinessman/></Link>
<Link to="/menu"><CiMenuKebab/></Link>




</div>

    </nav>
  )
}