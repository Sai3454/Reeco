import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";

const MissingModal = ({handleUrgentMissing, handleMissing, onClose, product }) => {
  const dispatch = useDispatch()

  const handleYes = () => {
    handleUrgentMissing()
    onClose()
  }

  const handleNo = () => {
    handleMissing()
    onClose()
  }

  return (
    <div className="flex justify-center items-center fixed h-screen w-screen top-0 left-0 bg-black opacity-90">
      <div className="bg-white backdrop-opacity-100 p-8 rounded-md flex flex-col gap-5">
        <div className="flex justify-between gap-10 items-start">
          <div className="flex flex-col">
            <h1 className="text-md font-bold">Missing</h1>
            <p className="text-xs">is {product.name} is urgent-missing?</p>
          </div>
          <MdClose onClick={() => onClose()} className="cursor-pointer"/>
        </div>
        <div className="flex justify-end gap-5">

        <button className="bg-slate-50 rounded-md" onClick={() => handleYes()}>Yes</button>
        <button className="bg-slate-50 rounded-md" onClick={() => handleNo()}>No</button>
        </div>
      </div>
    </div>
  );
};

export default MissingModal;
