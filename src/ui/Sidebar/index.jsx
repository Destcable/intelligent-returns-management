import { LiaHomeSolid } from "react-icons/lia";

const Sidebar = () => {
    const sidebarStyle = {
        maxWidth: '330px',
        borderRight: '1px solid #f0f0f0'
    };

    const sidebarItemStyle = { 
        borderBottom: '1px solid #f0f0f0'
    };

    return(
        <div className=" h-100" style={sidebarStyle}>
            <div className="d-flex align-items-center p-3" style={sidebarItemStyle}>
                <LiaHomeSolid className="me-2" style={{ fontSize: "30px"}} /> Home
            </div>
            <div className="p-3">Manage Returns</div>
        </div>
    )
};

export default Sidebar;