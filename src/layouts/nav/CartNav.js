import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../../reducers/cartSlice";
import { FiShoppingCart } from "react-icons/fi";

const CartNav = () => {
    const { email, nickname } = useSelector(state => state.login);
    const { items } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!email) {
            return;
        }

        dispatch(getCartThunk(email));
    }, [email]);

    return (
        <div className="flex items-center justify-center bg-gray-900 text-white p-4">
            <div className="text-4xl text-red-500 mr-2">
                <FiShoppingCart />
            </div>
            <div className="text-xl">Cart</div>
            <div className="ml-2 text-red-500 text-xl font-bold">{items.length}</div>
        </div>
    );
};

export default CartNav;
