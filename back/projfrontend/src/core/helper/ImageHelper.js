import React from "react";

const ImageHelper = ({product}) => {
    const Imageurl = product ? product.image
    : `https://www.puratos.ng/en/recipes/lemon-meringue-muffin`
    return (
        <div className="rounded border border-success p-2">
            <img
            src="{imageurl}"
            style={{maxHeight:"100%", maxWidth:"100%"}}
            className="mb-3 rounded"
            alt=""
            />
        </div>
    )
}