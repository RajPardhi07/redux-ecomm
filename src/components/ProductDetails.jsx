import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { addToCart, singleproduct } from "../store/reducer/CounterSlice"




const ProductDetails = () => {

  const { product } = useSelector((state) => state.products)
  const { id } = useParams()
  const dispatch = useDispatch()

  // const {cart} = useSelector(state => state)

  


  function handleAddToCart() {
    dispatch(addToCart(product))
  }

  const fetchproductdettail = async () => {
    try {
      const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)

      dispatch(singleproduct(data))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchproductdettail()
  }, [id])

  return product ? <div>

    <div className="flex w-[100%] h-[100vh] ">

      <div className="w-[40%] h-[100%]">
        <img className="w-[35vw] h-[35vw] object-cover m-8" src={product.images} alt="" />

        <div >
          <button className="w-[17vw] text-white text-[20px] font-semibold h-[8vh] ml-8 bg-[#FF9F00]"><i className="text-white m-2 ri-flashlight-fill"></i>Buy Now</button>
          <button onClick={handleAddToCart} className="w-[17vw] text-white text-[20px] font-semibold h-[8vh] ml-2 bg-[#FB641B]"><i className="text-white m-2 ri-shopping-cart-2-fill"></i>Add to Cart</button>
        </div>

      </div>

      <div className="w-[60%] h-[65%]  px-5 border-b-2 border-solid border-black ">
        <h2 className="mt-[2vw] text-[20px] font-semibold text-gray-500">{product.category.name}</h2>
        <h3 className="mt-[12px] text-[25px] ">{product.title}</h3>
        <h4 className="mt-[12px] text-[20px]"><span>Price:</span> ${product.price}</h4>
        <h5 className="mt-[12px] text-[17px]">{product.description}</h5>

        <div className="bg-[#26A541] w-[5vw] gap-2 mt-4 h-[30px] rounded-full flex items-center justify-center text-white">4.3 <i className="ri-star-fill text-white" /></div>

        <div className="w-[40vw] h-[30px] mt-5 gap-8 flex items-center">
          <p>Color -</p>
          <div className="w-[30px] h-[30px] bg-[#F58829] rounded-full"></div>

          <div className="w-[30px] h-[30px] bg-[#0C2135] rounded-full"></div>
          <div className="w-[30px] h-[30px] bg-[#2C72A7] rounded-full"></div>
          <div className="w-[30px] h-[30px] bg-[#48A08A] rounded-full"></div>

        </div>
      </div>


    </div>





  </div> : <h1>Loading....</h1>
}

export default ProductDetails