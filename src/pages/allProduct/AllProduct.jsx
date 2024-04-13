import { useState } from "react";
import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import Category from "../../components/category/Category";

const AllProduct = () => {
    const navigate = useNavigate();
    const context = useContext(myContext);
    const { loading, getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

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
        window.scrollTo(1, 1); // Scroll to top when component mounts or currentPage changes
    }, [currentPage]);

    // Calculate index range for displaying products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    // Function to change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Slice the products array to display only products for the current page
    const productsToShow = getAllProduct.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calculate total number of pages
    const totalPages = Math.ceil(getAllProduct.length / productsPerPage);

    // Function to handle pagination ellipsis
    const handleEllipsis = (index) => {
        const isWithinRange = Math.abs(currentPage - index) <= 1;
        const isFirstOrLastPage = index === 1 || index === totalPages;
        return isWithinRange || isFirstOrLastPage;
    }

    return (
        <Layout>
            <div className="py-8">
                <div className="">
                    <h1 className="text-center mb-5 text-2xl font-semibold">Select Footwear By Category</h1>
                    <Category />
                </div>
                <br />

                <div className="">
                    <h1 className="text-center mb-5 text-2xl font-semibold">All Footwear</h1>
                </div>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 lg:px-0 py-5 mx-auto">
                        <div className="flex justify-center">
                            {loading && <Loader />}
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {productsToShow.map((item, index) => {
                                const { id, title, price, productSize, productImageUrl } = item;
                                return (
                                    <div key={index} className="p-4 w-full md:w-1/4">
                                        <div className="h-full border border-gray-700 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                            <img
                                                onClick={() => navigate(`/productinfo/${id}`)}
                                                className="lg:h-80 h-96 w-full"
                                                src={productImageUrl}
                                                alt="product"
                                            />
                                            <div className="p-6">
                                                <h2 className="tracking-widest text-xs title-font font-bold text-gray-800 mb-1 text-center">
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
                    </div>
                </section>

                {/* Pagination controls */}
                <div className="flex justify-center mt-8 pagination-controls">
                    <ul className="flex list-none rounded-md border border-gray-50 divide-x divide-gray-50">
                        <li>
                            <button
                                className="px-2 py-1 md:px-2 md:py-2 flex items-center font-semibold bg-indigo-600 text-white rounded-md"
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                <i className="fas fa-chevron-left md:mr-2"></i>
                                Previous
                            </button>
                        </li>
                        {Array(totalPages).fill().map((_, index) => (
                            <li key={index} className="ml-3">
                                {handleEllipsis(index + 1) ? (
                                    <button
                                        className={`px-2 py-1 md:px-4 md:py-2 rounded-full ${currentPage === index + 1 ? 'bg-indigo-600 text-white' : 'bg-cyan-100 text-gray-700'}`}
                                        onClick={() => paginate(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                ) : (
                                    <span>...</span>
                                )}
                            </li>
                        ))}
                        <li className="ml-3">
                            <button
                                className="px-2 py-1 md:px-4 md:py-2 flex items-center font-semibold bg-indigo-600 text-white rounded-md"
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Next
                                <i className="fas fa-chevron-right md:ml-2"></i>
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Up arrow button */}
                <div className="fixed bottom-4 right-4 up-arrow-button">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="bg-indigo-600 hover:bg-cyan-600 w-12 h-12 text-white rounded-full flex items-center justify-center"
                    >
                        <i className="fas fa-arrow-up"></i>
                    </button>
                </div>
            </div>
        </Layout>
    );
}

export default AllProduct;
