import React, {useState, useEffect} from "react";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";



const Cart = () => {
    const [reload, setReload] = useState(false)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(loadCart()); 
    },[reload]);

    const loadAllProducts = (products) => {
        return(
            <div>
                { products.map((product,index) =>{
                    <Card
                    key={index}
                    product={product}
                    removeFromCart={true}
                    addtoCart={false}
                    reload={reload}
                    setReload={setReload}
                    />
                })}
            </div>
        );
    };
    const loadAllCheckout= () => {
        return(
            <div>
                <h1>Checkout</h1>
            </div>
        );
    };
    return(
        <Base title="Cart page" description="welcome to checkout">
            <div className="row text-center text-white">
                <div className="col-6">
                    {loadAllProducts(products)}
                </div>
                <div className="col-6">
                    {loadAllCheckout()}
                </div>
            </div>
        </Base>
    );
};

export default Cart;
