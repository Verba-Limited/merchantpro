import { useDeleteProductDetails } from "../hooks/distributorCustomHooks";
import Spinner from "../loaders/spinners/Spinner";

const DeleteProduct = ({ productId, onClose, onDelete }) => {
  const { deletedProductById, errorMessage, isLoading } =
    useDeleteProductDetails(productId);

  const handleDelete = async (productId) => {
    try {
      await deletedProductById();
      onDelete(productId);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="fixed w-screen h-screen bg-[rgba(0,0,0,0.5)] top-0 right-0 flex items-center justify-center z-30">
      <div className="bg-white rounded-lg flex flex-col items-center p-6 w-[350px] md:w-[400px]">
        <div className="mb-2">
          <h1 className="text-[36px]">‍️🗑</h1>
        </div>
        <div className="mb-3">
          <h4 className="max-w-[283px] text-center text-base text-black font-medium">
            Are you sure you want to delete this product?
          </h4>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-3 py-2 rounded-lg"
          >
            {isLoading ? <Spinner /> : "Yes, Delete"}
          </button>
          <button
            onClick={onClose}
            className="bg-[#234A75] text-white px-3 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default DeleteProduct;
