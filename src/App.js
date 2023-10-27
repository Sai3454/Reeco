import { useEffect, useState } from 'react';
import Items from './Items.json'
import {MdDone, MdClose} from 'react-icons/md'
import './App.css';
import Header from './Components/Header';
import { setApproved, setProducts, setStatus, updateProduct } from './store/productsCart';
import { useDispatch, useSelector } from 'react-redux';
import MissingModal from './Components/MissingModal';
import EditModal from './Components/EditModel';

const App = () => {
  const [isOpen, setOpen] = useState(false)
  var [product, setProduct] = useState({})
  const [isEditOpen, setEdit] = useState(false)

  const dispatch = useDispatch()
  const {products, supplier} = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(setProducts({products: Items.products, supplier: Items.order}))
  }, [dispatch])

  const handleApproveOrder = () => {
    dispatch(setApproved())
  }

  const handleDone = (product) => {
    dispatch(setStatus({id:product.id, status: "Approved"}))
  }

  const handleMissing = (product) => {
    dispatch(setStatus({status: "Missing", id: product.id}))
  }

  const handleUrgentMissing = (product) => {
    dispatch(setStatus({status: "urgent-missing", id: product.id}))
  }

  const handleClickMiss = (product) => {
    setProduct(product)
    setOpen(true)
  }

  const handleEdit = (product) => {
    setProduct(product)
    setEdit(true)
  }

  const handleEditCancel = () => {
    setEdit(false)
  }

  const handleSend = (updatedProduct) => {
    dispatch(updateProduct(updatedProduct))
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <div className="">
      <Header />
      <div className='flex justify-center items-center p-3 bg-slate-50 shadow-lg'>
        <div className='flex justify-between w-10/12 items-center'>
          <h1 className='text-2xl font-semibold'>Order {supplier.id}</h1>
          <div className='flex gap-3'>
            <button type='button' className='rounded-lg border-2 border-solid border-green-800 text-green-800 text-sm px-3 py-1'>Back</button>
            <button onClick={handleApproveOrder} type='button' className='rounded-lg px-3 py-1 text-sm text-white bg-green-800'>Approve order</button>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center bg-slate p-5 '>
        <div className='w-9/12 flex flex-col gap-5 '>
          <div className='flex justify-around items-center gap-2 bg-white border-2 border-s-slate-200 shadow-sm'>
            <div className='flex flex-col p-3 '>
              <p className='text-xs'>Supplier</p>
              <p className='text-md font-bold'>{supplier.name}</p>
            </div>
            <div className='flex flex-col justify-start p-3'>
              <h1 className='text-xs'>Shipping Date</h1>
              <p className='text-md font-bold'>{supplier.shipping}</p>
            </div>
            <div className='flex flex-col justify-start p-3'>
              <h1 className='text-xs'>Total</h1>
              <p className='text-md font-bold'>{supplier.total}</p>
            </div>
            <div className='flex flex-col justify-start p-3 '>
              <h1 className='text-xs'>Category</h1>
              <p className='text-md font-bold'>{supplier.category}</p>
            </div>
            <div className='flex flex-col justify-start p-3 '>
              <h1 className='text-xs'>Department</h1>
              <p className='text-md font-bold'>{supplier.department}</p>
            </div>
            <div className='flex flex-col justify-start p-3 '>
              <h1 className='text-xs'>Status</h1>
              <p className='text-md font-bold'>{supplier.status}</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 bg-white border-2 border-s-slate-200 shadow-sm'>
            <div className='flex flex-col'>
              <div className='flex justify-around p-2 shadow-md items-center'>
                  <div className='w-1/12'> </div>
                  <p className='text-xs w-[100px]'>Product name</p>
                  <p className='text-xs w-[70px]'>Brand</p>
                  <p className='text-xs w-[50px]'>Price</p>
                  <p className='text-xs w-[50px]'>Quantity</p>
                  <p className='text-xs w-[50px]'>Total</p>
                  <p className='text-xs w-[100px]'>Status</p>
                  <div className='w-2/12'> </div>
              </div>
              <ul>
                {products.map(product => (
                  <li key={product.id} className='flex justify-around items-center p-2 text-xs shadow-md'>
                    <div className='w-1/12 flex justify-center items-center'>
                      <img src={product.imageUrl} className='w-6 h-6' alt="product"/>
                    </div>
                    <p className='text-xs w-[100px]'>{product.name}</p>
                    <p className='text-xs w-[70px]'>{product.brand}</p>
                    <p className='text-xs w-[50px]'>{product.price}</p>
                    <p className='text-xs w-[50px]'>{product.quantity}</p>
                    <p className='text-xs w-[50px]'>{product.total}</p>
                    <p className={`text-xs w-[100px] text-center ${product.status === "Approved" ? 'bg-green-500 text-white rounded-md px-1 py-1': ''} ${product.status === "Missing" || product.status === "urgent-missing" ? 'bg-red-500 text-white rounded-md px-1 py-1': ''}`}>{product.status}</p>
                    <div className='w-2/12 flex items-center justify-center gap-2'>
                      <div className={`cursor-pointer ${product.status === "Approved" ? 'text-green-500': ''}`} onClick={() => handleDone(product)} >
                        <MdDone/>
                      </div>
                      <div className={`cursor-pointer ${product.status === "Missing" || product.status === "urgent-missing" ? 'text-red-500': ''}`} onClick={() => handleClickMiss(product)} >
                        <MdClose/>
                      </div>
                      <p className='cursor-pointer' onClick={() => handleEdit(product)}>Edit</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {isOpen ? (
        <MissingModal handleUrgentMissing= {handleUrgentMissing} handleMissing={handleMissing} onClose={onClose} product={product} />
      ):
      (<p></p>)
      }
      {<EditModal isEditOpen={isEditOpen} handleEditCancel={handleEditCancel} handleSend={handleSend} product={product}/>}
    </div>
  );
}

export default App;
