import { useContext, useEffect, useState } from "react";
import myContext from "../../context/myContext";
import { useNavigate, useParams } from "react-router-dom";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import Navbar from "../../components/navbar/Navbar";

const categoryList = [
    {
      name: 'Men Sports'
    },
    {
      name: 'Men Formal'
    },
    {
      name: 'Men Sandal'
    },
    {
      name: 'Men Casual'
    },
    {
      name: 'Men Ethnic'
    },
    {
      name: 'Women Sports'
    },
    {
      name: 'Women Heel'
    },
    {
      name: 'Women Sandal'
    },
    {
      name: 'Women Formal'
    },
    {
      name: 'Women Casual'
    }
  ]

const productSize = [
    {
      name: '6'
    },
    {
      name: '7'
    },
    {
      name: '8'
    },
    {
      name: '9'
    },
    {
      name: '10'
    },
  ]

const UpdateProductPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading, getAllProductFunction } = context;

  // navigate 
  const navigate = useNavigate();
  const { id } = useParams()
  console.log(id)

  // product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    color:"",
    size: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString(
        "en-US",
        {
            month: "short",
            day: "2-digit",
            year: "numeric",
        }
    )
});

// Get Single Product Function
const getSingleProductFunction = async () => {
  setLoading(true);
  try {
      const productTemp = await getDoc(doc(fireDB, "product", id))
      //   console.log(product.data())
      const product = productTemp.data();
      setProduct({
          title: product?.title,
          price: product?.price,
          productImageUrl: product?.productImageUrl,
          category: product?.category,
          color: product?.color,
          productSize: product?.productSize,
          description: product?.description,
          quantity : product?.quantity,
          time: product?.time,
          date: product?.date
      })
      setLoading(false);

  } catch (error) {
      console.log(error);
      setLoading(false);
  }
}

//Update Product
const updateProduct = async () => {
  setLoading(true)
  try {

      await setDoc(doc(fireDB, 'product', id), product)
      toast.success("Footwear Updated successfully")
      getAllProductFunction();
      setLoading(false)
      navigate('/admin-dashboard')

  } catch (error) {
      console.log(error)
      setLoading(false)
  }
}

useEffect(() => {
  getSingleProductFunction();
}, []);

  return (
      <div>
        <Navbar/>
          <div className='flex justify-center items-center h-screen'>
              {/* Login Form  */}
              <div className="login_Form bg-indigo-50 px-1 lg:px-8 py-6 border border-cyan-600 rounded-xl shadow-md">

                  {/* Top Heading  */}
                  <div className="mb-5">
                      <h2 className='text-center text-2xl font-bold text-indigo-600 '>
                          Update Footwear
                      </h2>
                  </div>

                  {/* Input One  */}
                  <div className="mb-3">
                      <input
                          type="text"
                          name="title"
                          value={product.title}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    title: e.target.value
                                })
                            }}
                          placeholder='Footwear Title'
                          className='bg-indigo-50 border border-indigo-600 px-2 py-2 w-96 rounded-md outline-none placeholder-indigo-600'
                      />
                  </div>

                  {/* Input Two  */}
                  <div className="mb-3">
                      <input
                          type="number"
                          name="price"
                          value={product.price}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    price: e.target.value
                                })
                            }}
                          placeholder='Footwear Price'
                          className='bg-indigo-50 border border-indigo-600 px-2 py-2 w-96 rounded-md outline-none placeholder-indigo-600'
                      />
                  </div>

                  {/* Input Three  */}
                  <div className="mb-3">
                      <input
                          type="text"
                          name="productImageUrl"
                          value={product.productImageUrl}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    productImageUrl: e.target.value
                                })
                            }}
                          placeholder='Footwear Image Url'
                          className='bg-indigo-50 border border-indigo-600 px-2 py-2 w-96 rounded-md outline-none placeholder-indigo-600'
                      />
                  </div>

                  {/* Input Four  */}
                  <div className="mb-3">
                      <select
                      value={product.category}
                      onChange={(e) => {
                          setProduct({
                              ...product,
                              category: e.target.value
                          })
                      }}
                          className="w-full px-1 py-2 text-indigo-600 bg-indigo-50 border border-indigo-600 rounded-md outline-none  ">
                          <option disabled>Select Footwear Category</option>
                          {categoryList.map((value, index) => {
                              const { name } = value
                              return (
                                  <option className=" first-letter:uppercase" key={index} value={name}>{name}</option>
                              )
                          })}
                      </select>
                  </div>
                  {/* Input Color  */}
                  <div className="mb-3">
                    <input
                      type="text"
                      value={product.color}
                      onChange={(e) => {
                        setProduct({
                          ...product,
                          color: e.target.value
                        })
                      }}
                      placeholder='Footwear Color'
                      className='bg-indigo-50 border border-indigo-600 px-2 py-2 w-96 rounded-md outline-none placeholder-indigo-600'
                    />
                  </div>

                  {/* Input Size  */}
                  <div className="mb-3">
                      <select
                      value={product.productSize}
                      onChange={(e) => {
                          setProduct({
                              ...product,
                              productSize: e.target.value
                          })
                      }}
                          className="w-full px-1 py-2 text-indigo-600 bg-indigo-50 border border-indigo-600 rounded-md outline-none  ">
                          <option disabled>Select Footwear Size</option>
                          {productSize.map((value, index) => {
                              const { name } = value
                              return (
                                  <option className=" first-letter:uppercase" key={index} value={name}>{name}</option>
                              )
                          })}
                      </select>
                  </div>

                  {/* Input Five  */}
                  <div className="mb-3">
                      <textarea
                      value={product.description}
                      onChange={(e) => {
                          setProduct({
                              ...product,
                              description: e.target.value
                          })
                      }}
                          name="description" placeholder="Footwear Description" rows="5" className=" w-full px-2 py-1 text-indigo-600 bg-indigo-50 border border-indigo-600 rounded-md outline-none placeholder-indigo-600 ">
                      </textarea>
                  </div>

                  {/* Update Product Button  */}
                  <div className="mb-3">
                      <button
                      onClick={updateProduct}
                          type='button'
                          className='bg-indigo-600 hover:bg-cyan-600 w-full text-white text-center py-2 font-bold rounded-md '
                      >
                          Update Product
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default UpdateProductPage;