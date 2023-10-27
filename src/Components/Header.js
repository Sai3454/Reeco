import {FaShoppingCart} from "react-icons/fa"
const Header = () => (
    <div className="flex justify-center items-center bg-green-800 text-white px-10 py-2">
        <div className="flex justify-between items-center w-11/12">
            <div className="flex justify-around items-center">
                <h1 className="text-xl font-bold m-1 p-1">Recoo</h1>
                <h1 className="text-md m-1 p-1">Store</h1>
                <h1 className="text-md m-1 p-1">Orders</h1>
                <h1 className="text-md m-1 p-1">Aalytics</h1>
            </div>
            <div className="flex justify-between items-center w-2/12">
                <div className="flex">
                        <p className="text-xs bg-green-500 rounded-full px-1 font-bold translate-x-2 -translate-y-2 self-start">3</p>
                        <FaShoppingCart className="text-white"/>
                </div>
                <p className="text-md">Hello, Janes</p>
            </div>
        </div>
    </div>
)

export default Header