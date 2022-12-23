import React from "react";

const Footer = () => {
    return(
        <div className="container-fluid footer">
        <div className="conatier py-5">
                <hr />
            <div className="row">
                <div className="col-md-6">
                    <img src="/images/logo.webp" alt="logo" width={150}/>

                </div>

                <div className="col-md-6 text-end">
                    <p>
                        <a href="#" target={"_blank"}><img src={"/images/facebook.webp"} alt="facebook" width={24} className="me-3"/></a>
                        <a href="#" target={"_blank"}><img src={"/images/instagram.webp"} alt="instragram" width={24}/></a>
                    </p>

                </div>
            </div>
        </div>
        </div>


    )
}
export default Footer