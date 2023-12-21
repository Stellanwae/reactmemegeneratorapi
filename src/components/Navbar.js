import React from "react"

export default function Navbar(props) {
    const styles = {
        backgroundColor: props.darkMode ? "#b5179e" : "#240046"
    }

    const toggleStyle = {
        justifyContent: props.darkMode ? "start" : "end"
    }
    return (
        <div className="navbar" style={styles}>
            <img src="./images/troll-face.png" className="navbar--img" />
            <div className="toggle--container">
                <p className={props.darkMode ? "dark" : ""}>Light</p>
                <div className="toggle--cover" style={toggleStyle}  >
                    <div className="toggle--slider"  onClick={props.toggleMode}></div>
                </div>
                <p className={props.darkMode ? "" : "dark"}>Dark</p>
            </div>
        </div>
    )
}