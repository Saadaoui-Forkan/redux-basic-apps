import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { calcTotals } from "./features/cart/CartSlice";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((store)=>store.cart)
  const { isOpen } = useSelector((store)=>store.modal)
  // console.log(useSelector((store)=>console.log(store.modal)))

  useEffect(() => {
    dispatch(calcTotals())
  }, [cartItems])
  
  return (
    <main>
      <Navbar />
      {isOpen && <Modal/>}
      <CartContainer/>
    </main>
  );
}
export default App;
