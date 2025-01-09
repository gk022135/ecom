import { NavLink} from "react-router-dom";

function Cart(){
   
    return(
        <div>

            <button onClick={ () => (navigate(-1))}>back</button>
            <h1>Cart is here</h1>
            <NavLink 
            to={`/cart/${naem}`}
            >hello</NavLink>
        </div>
    )
};
export default Cart;