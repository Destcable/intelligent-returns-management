import { Link } from 'react-router-dom';
import { LiaHomeSolid } from "react-icons/lia";
// import { BsBoxSeam } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import BoxIcon from '../../lib/icons/BoxIcon';

const Sidebar = () => {
    const sidebarStyle = {
        maxWidth: '330px',
        borderRight: '1px solid #f0f0f0'
    };

    return (
        <div className=" h-100" style={sidebarStyle}>
            <Link to="/" className="text-decoration-none">
                <SidebarItem
                    icon={<LiaHomeSolid className="me-2" style={{ color: "#0854A0", fontSize: "25px" }} />}
                    name='Домой'
                />
            </Link>
            <Link to="/returns" className="text-decoration-none">
                <SidebarItem
                    icon={<BoxIcon color='#0854A0' className='me-2' width='28px' height='28px'/>}
                    // icon={<BsBoxSeam className="me-2" style={{ color: "#0854A0", fontSize: "25px" }} />}
                    name='Управление возвратами'
                />
            </Link>
            <Link to="/dashboards" className="text-decoration-none">
                <SidebarItem
                    icon={<MdDashboard className="me-2" style={{ color: "#0854A0", fontSize: "25px" }} />}
                    name='Dashboards'
                />
            </Link>
            <Link to="/reports" className="text-decoration-none">
                <SidebarItem
                    icon={<HiOutlineDocumentReport className="me-2" style={{ color: "#0854A0", fontSize: "25px" }} />}
                    name='Отчеты'
                />
            </Link>
        </div>
    )
};

const SidebarItem = ({ icon, name, onClick }) => (
    <div
        onClick={onClick}
        className="d-flex align-items-center p-3 sidebar__item--border-bottom text-dark"
        style={{ cursor: 'pointer' }}
    >
        {icon} {name}
    </div>
);



export default Sidebar;