import { LiaHomeSolid } from "react-icons/lia";

const Sidebar = () => {
    const sidebarStyle = {
        maxWidth: '330px',
        borderRight: '1px solid #f0f0f0'
    };

    return(
        <div className=" h-100" style={sidebarStyle}>
            <SidebarItem
                icon={<LiaHomeSolid className="me-2" style={{ fontSize: "30px"}} />}
                name='Home'
            />
            <div className="p-3">Manage Returns</div>
        </div>
    )
};

const SidebarItem = ({ icon, name }) => (
    <div className="d-flex align-items-center p-3 sidebar__item--border-bottom">
        {icon} {name}
    </div>
);

export default Sidebar;