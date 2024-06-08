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
        width: '25px',
        height: '25px',
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
            <span href="#" style={brandStyle}>
                <span className="d-flex align-items-center" style={hamburgerMenuIconStyle}>
                    <RxHamburgerMenu />
                </span>
                <img
                    src="https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg"
                    alt="SAP logo"
                    style={logoStyle}
                />
                <h5>SAP Интеллектуальное Управление Возвратами</h5>
            </span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className="d-flex align-items-center" style={iconStyle}>
                    <img
                        src={NotificationIcon}
                        alt="User profile"
                        style={notificationIconStyle}
                    />
                </span>
                <span className="d-flex align-items-center" style={{ textDecoration: 'none' }}>
                    <img
                        src="https://via.placeholder.com/30"
                        alt="User profile"
                        style={profileStyle}
                    />
                </span>
            </div>
        </header>
    );
};

export default Header;
