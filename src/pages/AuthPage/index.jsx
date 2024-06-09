import { useNavigate } from "react-router-dom";
import SapLogo from "../../lib/icons/SapLogo.png";

const Login = () => {
    const navigate = useNavigate();

    const onSubmit = () => {
        navigate('/');
    };

    return (
        <div className="bg-light" style={styles.container}>
            <div style={styles.row}>
                <div style={styles.col}>
                    <div className="bg-white" style={styles.card}>
                        <div style={styles.cardBody}>
                            <div style={styles.logoContainer}>
                                <img src={SapLogo} alt="SAP Logo" style={styles.logo} />
                            </div>
                            <form onSubmit={onSubmit}>
                                <div className="form-group"style={{ marginTop: '40px'}}>
                                    <label className="text-secondary" htmlFor="username">User Name:</label>
                                    <input
                                        type="text"
                                        className="form-control rounded-1"
                                        id="username"
                                        placeholder="Enter your ID or email address"
                                        style={styles.borderInput}
                                    />
                                </div>
                                <div className="form-group" style={{ marginTop: '20px'}}>
                                    <label className="text-secondary" htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        className="form-control rounded-1"
                                        placeholder="Password"
                                        style={styles.borderInput}
                                    />
                                </div>
                                <div className="form-check" style={{ marginTop: '20px'}}>
                                    <input
                                        type="checkbox"
                                        className="form-check-input rounded-0"
                                        id="keepSignedIn"
                                        style={styles.borderInput}
                                    />
                                    <label className="form-check-label text-secondary" htmlFor="keepSignedIn">
                                        Keep me signed in
                                    </label>
                                </div>
                                <div>
                                    <a style={{ marginTop: '20px', color: '#0A6ED1'}} href="#" className="d-block text-decoration-none">
                                        Forgot Password?
                                    </a>
                                    <button type="submit" className="btn w-100 text-white rounded-1" style={{ marginTop: '35px', backgroundColor: '#0A6ED1'}}>
                                        Sign In
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    col: {
        maxWidth: '500px',
        width: '100%',
    },
    card: {
        border: 'none',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        paddingTop: '60px',
        paddingLeft: '100px',
        paddingRight: '100px',
        paddingBottom: '45px'
    },
    cardBody: {
        // padding: '20px',
    },
    logoContainer: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    logo: {
        width: '100px',
    },
    borderInput: { 
        border: '1px solid #89919A'
    },
};

export default Login;
