import React from 'react'

const Header = () => {
    return (
        <div>
            <div style={{
                width: "100%",
                height: "10vh",
                backgroundColor: "lightcoral",
                display: "flex",
                alignItems: 'center',
                flexDirection: "row"

            }}>
                <ul
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        listStyleType: 'none',
                        justifyContent: 'space-evenly',
                        width: "100%",
                        cursor: "pointer",
                        "&:hover": {
                            color: "lightblue"
                        }
                    }}
                >
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact Us</li>
                    <li>Ask a Query</li>
                </ul>
            </div>
        </div>
    )
}

export default Header


