import React from "react";

function navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href=" ">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href=" ">inicio</a>
                            <a className="nav-link" href=" ">trama</a>
                            <a className="nav-link" href=" ">nudo</a>
                            <a className="nav-link" href=" ">desenlace</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default navbar;
