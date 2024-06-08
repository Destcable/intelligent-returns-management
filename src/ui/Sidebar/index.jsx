import { LiaHomeSolid } from "react-icons/lia";
import { BsBoxSeam } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";

const Sidebar = () => {
    const sidebarStyle = {
        maxWidth: '330px',
        borderRight: '1px solid #f0f0f0'
    };

    return (
        <div className=" h-100" style={sidebarStyle}>
            <SidebarItem
                icon={<LiaHomeSolid className="me-2" style={{ color: "#0854A0", fontSize: "25px" }} />}
                name='Home'
            />
            <SidebarItem
                icon={<BsBoxSeam className="me-2" style={{ color: "#0854A0", fontSize: "25px" }} />}
                name='Manage Returns'
            />
            <SidebarItem
                icon={<MdDashboard className="me-2" style={{ color: "#0854A0", fontSize: "25px" }} />}
                name='Dashboards'
            />
            <SidebarItem
                icon={<HiOutlineDocumentReport className="me-2" style={{ color: "#0854A0", fontSize: "25px" }} />}
                name='Reports'
            />
        </div>
    )
};

const SidebarItem = ({ icon, name, onClick }) => (
    <div
        onClick={onClick} 
        className="d-flex align-items-center p-3 sidebar__item--border-bottom"
        style={{ cursor: 'pointer' }}
    >
        {icon} {name}
    </div>
);



export default Sidebar;