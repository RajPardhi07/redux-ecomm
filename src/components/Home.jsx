// import axios from "axios"
import { useEffect } from "react"
import { useDispatch} from "react-redux"
import { addproduct } from "../store/reducer/CounterSlice"
import ProductListing from "./ProductListing"
import axios from "../common/apis/axios"

const Home = () => {


    const dispatch = useDispatch()
    const fetchdata = async () => {
        try {
            const response = await axios.get("/products")
            // console.log(response)
            dispatch(addproduct(response.data))

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=> {
        fetchdata()
    }, [])


  return (
    <div>
        <ProductListing/>
    </div>
  )
}

export default Home