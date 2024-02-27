import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
// import { addToCart } from "../store/reducer/CounterSlice"
// import ProductCard from "./ProductCard"
// import ProductCard from "./ProductCard"


const ProductListing = () => {
  const products = useSelector((state) => state.products.products)





  return (
    <div>

      <div className="relative w-[94vw] h-[85vh] bg-green-500 rounded-[6px] ml-8 overflow-hidden">

        <img className="w-[100%] h-[100%] object-cover" src="https://images.unsplash.com/photo-1609788994700-73eda149ffb8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        <div className="text-white absolute top-[20%] z-10">
          <h1 className="text-[4vw] ml-3 font-['monument'] w-[65%]">Get the best Product at your Home</h1>

          <input className="w-[29vw] h-[6.5vh] rounded-full px-[10px] mt-8 ml-3" type="text" placeholder="Search Your Product" />
        </div>

        <div className="absolute left-[80%] top-[20%] w-[3px] h-[25vh] bg-white"></div>
        <div className="absolute top-[25%] left-[75.5%] text-white text-[20px]  transform rotate-[-90deg]">Products</div>
      </div>


      <div className="flex items-center justify-center">
        <div className="w-[98%] h-[90%]">

          <div className="flex flex-wrap" >
            {products && products.map((product, index) => {

              return (
                <Link to={`/product/${product.id}`} key={index}>

                  <div className="card-item ml-3 mt-4 bg-gray-300 w-[23vw] h-[30vw] rounded-[7px] overflow-hidden">
                    <div className="card-inner">
                      <div className="card-top">
                        <img src={product.images} alt="" className="h-[20vw] w-[30vw] object-cover" />

                      </div>

                      <div className="card-bottom ml-2">
                        <div className="card-info text-black">
                          <h4 className=" text-[19px]">{product.title}</h4>

                          <p className="font-semibold mt-1">Price: ${product.price}</p>

                          <button className="bg-[#36A790] mt-4 font-[600] w-[7vw] h-[5vh] text-white rounded-tl-lg rounded-br-lg">Buy Now</button>
                          {/* <p>{product.description}</p> */}

                        </div>
                      </div>

                    </div>

                  </div>

                </Link>
              )

              // return <h1 style={{background:"green",border:"2px solid black",minHeight:"5vh"}}>{index}</h1>


            })}


          </div>

        </div>

      </div>
    </div>
  )
}

export default ProductListing