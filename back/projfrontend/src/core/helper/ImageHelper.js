import React from "react";

const ImageHelper = ({product}) => {
    const Imageurl = product ? product.image
    : `https://sasanzare.ir/img/about2.jpg`
    
    return (
        <div className="rounded border border-success p-2">
            <img
            src={Imageurl}
            style={{maxHeight:"100%", maxWidth:"100%"}}
            className="mb-3 rounded"
            alt=""
            />
        </div>
    )
}
export default ImageHelper;