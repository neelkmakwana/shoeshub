import {
    Button,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <>
            <Button
                type="button"
                onClick={handleOpen}
                className="w-full px-4 py-3 text-center font-bold text-gray-100 bg-indigo-600 border border-transparent dark:border-gray-700 hover:border-indigo-600 hover:text-white-700 hover:bg-cyan-600 rounded-full"
            >
                Order now
            </Button>
            <Dialog open={open} handler={handleOpen} className=" bg-indigo-50">
                <DialogBody className="">
                    <div className="">
                        <h1 className=" text-center mb-5 text-2xl font-semibold"style={{ color: '#3949AB', fontFamily:"-moz-initial"}}>Fill The Details for Placing Order</h1>
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            value={addressInfo.name}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    name: e.target.value
                                })
                            }}
                            placeholder='Enter Your Name'
                            className='bg-indigo-50 border border-indigo-600 px-2 py-2 w-full rounded-md outline-none text-indigo-600 placeholder-indigo-600'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="address"
                            value={addressInfo.address}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    address: e.target.value
                                })
                            }}
                            placeholder='Enter Your Address'
                            className='bg-indigo-50 border border-indigo-600 px-2 py-2 w-full rounded-md outline-none text-indigo-600 placeholder-indigo-600'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="number"
                            name="pincode"
                            value={addressInfo.pincode}
                            onChange={(e) => {
                                const inputPincode = e.target.value;
                                if (inputPincode.length <= 6) {
                                    setAddressInfo({
                                        ...addressInfo,
                                        pincode: inputPincode
                                    });
                                }
                            }}
                            placeholder='Enter Your Pincode'
                            className='bg-indigo-50 border border-indigo-600 px-2 py-2 w-full rounded-md outline-none text-indigo-600 placeholder-indigo-600'
                        />
                    </div>


                    <div className="mb-3">
                        <input
                            type="text"
                            name="mobileNumber"
                            value={addressInfo.mobileNumber}
                            onChange={(e) => {
                                const inputNumber = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
                                if (inputNumber.length <= 10) {
                                    setAddressInfo({
                                        ...addressInfo,
                                        mobileNumber: inputNumber
                                    });
                                }
                            }}
                            placeholder='Enter Your Mobile Number'
                            className='bg-indigo-50 border border-indigo-600 px-2 py-2 w-full rounded-md outline-none text-indigo-600 placeholder-indigo-600'
                        />
                    </div>

                    <div className="">
                    <Button
                type="button"
                onClick={() => {
                    handleOpen();
                    buyNowFunction();
                }}
                className="w-full px-4 py-3 text-center text-white bg-indigo-600 hover:bg-cyan-600 border border-transparent dark:indigo-cyan-600 rounded-full"
            >
                Buy now
            </Button>
                    </div>

                </DialogBody>
            </Dialog>
        </>
    );
}

export default BuyNowModal;