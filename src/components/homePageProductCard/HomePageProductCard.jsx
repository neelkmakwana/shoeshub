import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const HomePageProductCard = () => {
    const navigate = useNavigate();
    const context = useContext(myContext);
    const { loading, getAllProduct } = context;
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const [showScrollButton, setShowScrollButton] = useState(false);

    // Add To Cart Function
    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Added to cart");
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Deleted from cart");
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="mt-10">
            {/* Heading */}
            <div className="">
                <h1 className="text-center mb-5 text-2xl font-semibold">Bestselling Footwear</h1>
            </div>

            {/* Main */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex justify-center">
                        {loading && <Loader />}
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {getAllProduct.slice(0, 8).map((item, index) => {
                            const { id, title, price, productSize, productImageUrl } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-700 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img
                                            onClick={() => navigate(`/productinfo/${id}`)}
                                            className="lg:h-80 h-96 w-full"
                                            src={productImageUrl}
                                            alt="img"
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-center text-xs title-font font-bold text-gray-800 mb-1">
                                                NK-SHOES HUB
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3" onClick={() => navigate(`/productinfo/${id}`)}>
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                Size : {productSize}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                Price : ₹ {price}
                                            </h1>
                                            <div className="flex justify-center">
                                                {cartItems.some((p) => p.id === item.id) ?
                                                    <button
                                                        onClick={() => deleteCart(item)}
                                                        className="bg-cyan-700 hover:bg-indigo-600 w-full text-white py-[4px] rounded-full font-bold">
                                                        Delete From Cart
                                                    </button>
                                                    :
                                                    <button
                                                        onClick={() => addCart(item)}
                                                        className="bg-indigo-600 hover:bg-cyan-600 w-full text-white py-[4px] rounded-full font-bold">
                                                        Add To Cart
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <br />
                    <div className="flex justify-center">
                        <button
                            onClick={() => navigate(`/allproduct`)}
                            className="bg-indigo-600 hover:bg-cyan-600 text-white px-10 py-2 rounded-full font-bold text-mm">
                            See More Product
                        </button>
                    </div>
                </div>
            </section>

            {/* Scroll Up Button */}
            {showScrollButton && (
                <div className="fixed bottom-4 right-4">
                    <button
                        onClick={scrollToTop}
                        className="bg-indigo-600 hover:bg-cyan-600 w-12 h-12 text-white rounded-full flex items-center justify-center"
                    >
                        <i className="fas fa-arrow-up"></i>
                    </button>
                </div>
            )}
        </div>
    );
}

export default HomePageProductCard;
