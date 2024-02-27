import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Cart = () => {

    // const [totalCart, setTotalCart] = useState(0)

    const {cart} = useSelector(state => state)
    // const cart =  useSelector(state => state.cart)

    
    
    console.log(cart)


    return (
      <div>
        <h2>Shopping Cart</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <p>Name: {item.title}</p>
                <p>Price: ${item.price}</p>
                {/* Add more details if needed */}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty</p>
        )}
        <Link to="/">Proceed to Checkout</Link>
      </div>
    );
  }

export default Cart