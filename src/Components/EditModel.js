import { useState } from "react";
import { MdClose } from "react-icons/md";
import {FaMinusCircle, FaPlusCircle} from 'react-icons/fa'

const EditModal = ({isEditOpen, handleSend, handleEditCancel, product }) => {

  const [cost, setPrice] = useState(product.price)
  const [quantity, setQuantity] = useState(product.quantity);

  

  const handleYes = () => {
    if(cost != (product.price) && quantity != (product.quantity)){
        handleSend({
            "id": product.id,
            "name": product.name,
            "imageUrl": product.imageUrl,
            "brand": product.brand,
            "price": cost,
            "quantity": quantity,
            "total": product.total,
            "status": "Price & Quantity Updated"
        })
    }
    else if(cost != product.price){
        handleSend({
            "id": product.id,
            "name": product.name,
            "imageUrl": product.imageUrl,
            "brand": product.brand,
            "price": cost,
            "quantity": quantity,
            "total": product.total,
            "status": "Price Updated"
        })
    }
    else if(quantity != product.quantity){
        handleSend({
            "id": product.id,
            "name": product.name,
            "imageUrl": product.imageUrl,
            "brand": product.brand,
            "price": cost,
            "quantity": quantity,
            "total": product.total,
            "status": "Quantity Updated"
        })
    }
    handleEditCancel()
  }

  const handleNo = () => {
    handleEditCancel()
  }

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };
  
  const handleChangeQuantity = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };
  


  if(!isEditOpen) return null


  return (
    <div className="flex justify-center items-center fixed h-screen w-screen top-0 left-0 bg-black opacity-90">
      <div className="bg-white backdrop-opacity-100 p-8 rounded-md flex flex-col gap-5 w-8/12">
        <div className="flex justify-between gap-10 items-start">
          <div className="flex flex-col">
            <h1 className="text-md font-bold">{product.name}</h1>
            <p className="text-xs">is {product.brand}</p>
          </div>
          <MdClose onClick={() => handleEditCancel()} className="cursor-pointer -translate-y-2"/>
        </div>
        <div className="flex gap-2 items-center">
            <img src={product.imageUrl} alt="product" className="h-20 w-20" />
            <div className="flex flex-col gap-1 p-1">
                <div className="flex justify-between gap-4">
                    <p className="text-md">Price</p>
                    <div className="flex items-center">
                    <input type="input" onChange={handleChangePrice} value={cost} className="bg-gray-100 rounded-sm text-black w-[50px]"/>
                    </div>
                </div>
                <div className="flex justify-between gap-4">
                    <p className="text-md">Quantity</p>
                    <div className="flex items-center gap-2">
                        <FaPlusCircle onClick={() => setQuantity(quantity + 1)} className="text-green-500"/>
                        <input type="input" value={quantity} onChange={handleChangeQuantity} className="text-black w-[50px] border-s-slate-50 shadow-sm bg-slate-400 rounded appearance-none remove-arrow"/>
                        <FaMinusCircle onClick={() => setQuantity(quantity - 1)} className="text-green-500"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-end gap-5">

        <button className="bg-slate-50 rounded-md" onClick={() => handleYes()}>Send</button>
        <button className="bg-slate-50 rounded-md" onClick={() => handleNo()}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
