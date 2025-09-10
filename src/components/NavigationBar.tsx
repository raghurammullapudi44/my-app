 function NavigationBar({ isLoggedIn, performLogout, onHome, onLogin, performLogin, retrieveAllCakes }) {
    const topLeftStyle = {
        position: "absolute",
        top: "10px",
        left: "10px",
        zIndex: 100
    }
    const topRightStyle = {
        position: "absolute",
        top: "10px",
        right: "10px",
        zIndex: 100
    }
    const buttonSpacing = {
        marginLeft: "10px"
    }

    return (
        <>
        <div className="d-flex" style={topLeftStyle}>
            <button className="btn btn-primary" onClick={onHome}>Home</button>
            {!isLoggedIn && (
                <button className="btn btn-success" onClick={onLogin} style={buttonSpacing}>Login</button>
            )}
            <button className="btn btn-secondary" onClick={retrieveAllCakes} style={buttonSpacing}>View Cakes Catalog</button>
        </div>
        <div className="d-flex" style={topRightStyle}>
            {isLoggedIn && (
                <button className="btn btn-danger" onClick={performLogout} style={topRightStyle}>Logout</button>
            )}
        </div>
        </>
    )
}

export default NavigationBar;