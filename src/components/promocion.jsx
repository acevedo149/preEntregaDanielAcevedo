import React from "react";

const Promocion =() => {
    return (
        <div className="container-fluid areapublicidad">
            <div className="conatier pt-5">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <img src={"/images/wrench.png"} alt={"wrench"} width={350}/>
                    </div>
                    <div className="col-md-6 d-flex align-item-end">
                        <div>
                            <h3>gran promocion compra una y obten la otra con el 50% off</h3>
                        </div>
                    </div>
                </div> 
            </div>   
        </div>
        );
}

export default Promocion;
