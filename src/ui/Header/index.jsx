import { RxHamburgerMenu } from "react-icons/rx";
import NotificationIcon from "../../lib/icons/notification.svg";

const Header = () => {
    const headerStyle = {
        backgroundColor: '#354a5f',
        padding: '0.1rem 2rem 0.1rem 1rem',
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
        width: '60px',
        height: '60px',
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
        fontSize: '26px',
        marginRight: '1.3rem',
        textDecoration: 'none'
    };
    const notificationIconStyle = {
        width: '27px',
        height: '27px',
        borderRadius: '50%',
        marginLeft: '1rem'
    };

    const profileStyle = {
        width: '40px',
        height: '40px',
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
                        src={NotificationIcon}
                        alt="User profile"
                        style={notificationIconStyle}
                    />
                </a>
                <a href="#" className="d-flex align-items-center" style={{ textDecoration: 'none' }}>
                    <img
                        src="https://via.placeholder.com/30"
                        alt="User profile"
                        style={profileStyle}
                    />
                </a>
            </div>
        </header>
    );
};

export default Header;
