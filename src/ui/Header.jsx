
import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import Username from "../features/user/Username"
export default function Header() {
  return (
    <header className="bg-yellow-500 uppercase py-3 border border-b border-stone-200 px-4 sm:px-6 flex items-center justify-between font-sans">
      <Link to="/" className="tracking-widest">Fast Pizza Co.</Link>
      <SearchOrder />
    <Username />
    </header>
  )
}
