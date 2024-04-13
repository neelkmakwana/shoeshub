import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";

const UserDashboard = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    const context = useContext(myContext);
    const { loading, getAllOrder } = context;

    // Filter out duplicate orders based on their IDs
    const uniqueOrders = getAllOrder.filter((order, index, self) =>
        index === self.findIndex((o) => o.id === order.id)
    );

    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return function cleanup() {
            window.removeEventListener('scroll', checkScrollTop);
        }
    });

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Layout>
            <div className=" container mx-auto px-4 py-5 lg:py-8">
                <div className="top mb-5 px-5 mt-5 ">
                    <div className=" bg-cyan-100 py-5 border border-indigo-600 rounded-lg">
                        <h1 className=" text-center text-2xl font-bold text-indigo-600">{user?.name && user.name.charAt(0).toUpperCase() + user.name.substring(1).toLowerCase()} Dashboard</h1>
                    </div>
                    <br />
                    <div className=" bg-cyan-100 py-5 rounded-xl border border-indigo-600">
                        <div className="flex justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/1759/1759311.png" alt="" />
                        </div>
                        <div className="">
                            <h1 className=" text-center text-lg text-indigo-600"><span className=" font-bold">Name :</span> {user?.name && user.name.charAt(0).toUpperCase() + user.name.substring(1).toLowerCase()}</h1>
                            <h1 className=" text-center text-lg text-indigo-600"><span className=" font-bold">Email :</span> {user?.email}</h1>
                            <h1 className=" text-center text-lg text-indigo-600"><span className=" font-bold">Account Create Date :</span> {user?.date}</h1>
                            <h1 className=" text-center text-lg text-indigo-600"><span className=" font-bold">Role :</span> {user?.role && user.role.charAt(0).toUpperCase() + user.role.substring(1).toLowerCase()}</h1>
                        </div>
                    </div>
                </div>

                <div className="bottom">
                    <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
                        <h2 className=" text-2xl lg:text-3xl font-bold text-indigo-600">Order Details :</h2>
                        {uniqueOrders.filter((obj) => obj.userid === user?.uid).map((order, index) => {
                            const totalAmount = order.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
                            return (
                                <div key={index} className="my-5 flex flex-col md:flex-row overflow-hidden rounded-xl border border-indigo-600">
                                    <div className="p-8 flex-1 border-r border-indigo-600">
                                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                                            <div className="mb-4">
                                                <div className="text-sm font-semibold text-indigo-600">Order ID :</div>
                                                <div className="text-sm font-medium text-gray-900">{order.id}</div>
                                            </div>
                                            <div className="mb-4">
                                                <div className="text-sm font-semibold text-indigo-600">Date :</div>
                                                <div className="text-sm font-medium text-gray-900">{order.date}</div>
                                            </div>
                                            <div className="mb-4">
                                                <div className="text-sm font-semibold text-indigo-600">Total Amount :</div>
                                                <div className="text-sm font-medium text-gray-900">₹{totalAmount}</div>
                                            </div>
                                            <div className="mb-4">
                                                <div className="text-sm font-semibold text-indigo-600">Address :</div>
                                                <div className="text-sm font-medium text-gray-900 max-w-xs break-words">{order.addressInfo.address} - {order.addressInfo.pincode}</div>
                                            </div>
                                            <div className="mb-4">
                                                <div className="text-sm font-semibold text-indigo-600 ">Order Status :</div>
                                                <div className="text-sm font-medium text-green-800 first-letter:uppercase">{order.status}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-8 flex-1">
                                        <ul className="-my-7 divide-y divide-indigo-600">
                                            {order.cartItems.map((item, itemIndex) => {
                                                const { id, quantity, price, title, productImageUrl,productSize,color, category } = item;
                                                return (
                                                    <li key={itemIndex} className="flex flex-col justify-between space-x-5 py-7 md:flex-row">
                                                        <Link to={`/productinfo/${id}`} className="flex flex-1 items-stretch">
                                                            <div className="flex flex-1 items-stretch">
                                                                <div className="flex-shrink-0">
                                                                    <img
                                                                        className="h-40 w-30 rounded-lg border border-gray-200 object-contain"
                                                                        src={productImageUrl}
                                                                        alt='image'
                                                                    />
                                                                </div>
                                                                <div className="ml-5 flex flex-col justify-between">
                                                                    <div className="flex-1">
                                                                        <p className="text-sm font-bold text-gray-900">{title}</p>
                                                                        <p className="text-sm font-bold text-gray-900">Size : {productSize}</p>
                                                                        <p className="text-sm font-bold text-gray-900">Color : {color}</p>
                                                                        <p className="mt-1.5 text-sm font-bold text-gray-900">Category: {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}</p>
                                                                    </div>
                                                                    <p className="mt-4 text-base font-medium text-gray-1000">x {quantity}</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <div className="ml-auto flex flex-col items-end justify-between">
                                                            <p className="text-right text-sm font-bold text-gray-900">₹ {price}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {showScroll && (
                    <button onClick={scrollTop} className="fixed bottom-4 right-4 bg-indigo-600 hover:bg-cyan-600 w-12 h-12 text-white rounded-full flex items-center justify-center">
                        <i className="fas fa-arrow-up"></i>
                    </button>
                )}
            </div>
        </Layout>
    );
}

export default UserDashboard;
