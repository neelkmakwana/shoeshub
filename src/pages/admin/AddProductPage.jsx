import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router-dom";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
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
const AddProductPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // navigate 
  const navigate = useNavigate();

  // product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    color:"",
    productSize:"",
    description: "",
    quantity: 1,
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

  // Add Product Function
  const addProductFunction = async () => {
    //validation
    if (product.title == "" || product.price == "" || product.productImageUrl == "" || product.category == "" || product.color == "" || product.productSize == "" || product.description == "") {
      return toast.error("all fields are required")
    }

    setLoading(true);
    try {
      const productRef = collection(fireDB, 'product');
      await addDoc(productRef, product)
      toast.success("Add Footwear successfully");
      navigate('/admin-dashboard')
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
      toast.error("Add Footwear failed");
    }

  }




  return (
    <div>
      <Navbar/>
      <div className='flex justify-center items-center h-screen'>
      {loading && <Loader />}
        {/* Login Form  */}
        <div className="login_Form bg-indigo-50 px-1 lg:px-8 py-6 border border-cyan-600 rounded-xl shadow-md">

          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className='text-center text-2xl font-bold text-indigo-600 '>
              Add Footwear
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
              placeholder='Footwear Image Url'
              value={product.productImageUrl}
              onChange={(e) => {
                setProduct({
                  ...product,
                  productImageUrl: e.target.value
                })
              }}
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

          {/* Input Size */}
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

          {/* Add Product Button  */}
          <div className="mb-3">
            <button
              onClick={addProductFunction}
              type='button'
              className='bg-indigo-600 hover:bg-cyan-600 w-full text-white text-center py-2 font-bold rounded-md '
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductPage;