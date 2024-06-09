import SapLogo from "../../lib/icons/SapLogo.png";

const Login = () => {
    return (
        <div className="bg-light" style={styles.container}>
            <div style={styles.row}>
                <div className="bg-white" style={styles.col}>
                    <div style={styles.card}>
                        <div style={styles.cardBody}>
                            <div style={styles.logoContainer}>
                                <img src={SapLogo} alt="SAP Logo" style={styles.logo} />
                            </div>
                            <form>
                                <div className="form-group">
                                    <label className="text-secondary" htmlFor="username">User Name:</label>
                                    <input
                                        type="text"
                                        className="form-control rounded-1"
                                        id="username"
                                        placeholder="Enter your ID or email address"
                                        style={styles.borderInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="text-secondary" htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        className="form-control rounded-1"
                                        id="password"
                                        placeholder="Password"
                                        style={styles.borderInput}
                                    />
                                </div>
                                <div className="form-check mb-2">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="keepSignedIn"
                                        style={styles.borderInput}
                                    />
                                    <label className="form-check-label" htmlFor="keepSignedIn">
                                        Keep me signed in
                                    </label>
                                </div>
                                <div className="text-center">
                                    <a href="#" className="d-block mb-3">
                                        Forgot Password?
                                    </a>
                                    <button type="submit" className="btn btn-primary">
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
        maxWidth: '400px',
        width: '100%',
    },
    card: {
        border: 'none',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    cardBody: {
        padding: '30px',
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
