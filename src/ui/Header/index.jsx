import { RxHamburgerMenu } from "react-icons/rx";
import notification from "../../lib/icons/notification.svg";

const Header = () => {
    const headerStyle = {
        backgroundColor: '#354a5f',
        padding: '0.5rem 2rem 0.5rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    };

    const brandStyle = {
        display: 'flex',
        alignItems: 'center',
        color: '#ffffff',
        textDecoration: 'none',
    };

    const logoStyle = {
        width: '70px',
        height: '70px',
        marginRight: '0.5rem'
    };

    const iconStyle = {
        color: '#ffffff',
        fontSize: '30px',
        marginLeft: '1rem',
        textDecoration: 'none'
    };

    const hamburgerMenuIconStyle = {
        color: '#ffffff',
        fontSize: '28px',
        marginRight: '1rem',
        textDecoration: 'none'
    };
    const notificationIconStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        marginLeft: '1rem'
    };

    const profileStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginLeft: '1rem'
    };

    return (
        <header style={headerStyle}>
            <a href="#" style={brandStyle}>
                <a href="#" className="d-flex align-items-center" style={hamburgerMenuIconStyle}>
                    <RxHamburgerMenu />
                </a>
                <img
                    src="https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg"
                    alt="SAP logo"
                    style={logoStyle}
                />
                <h5>SAP Intelligent Returns Management</h5>
            </a>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <a href="#" className="d-flex align-items-center" style={iconStyle}>
                    <img
                        src={notification}
                        alt="User profile"
                        style={notificationIconStyle}
                    />
                </a>
                <a href="#" style={{ textDecoration: 'none' }}>
                    <img
                        src="https://via.placeholder.com/60"
                        alt="User profile"
                        style={profileStyle}
                    />
                </a>
            </div>
        </header>
    );
};

export default Header;
