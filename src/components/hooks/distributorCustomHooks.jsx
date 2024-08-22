import { useDispatch, useSelector } from "react-redux";
import {
  fetchProfileStart,
  fetchProfileFailure,
  fetchProfileSuccess,
} from "../../store/slice/distributor/profileSlice";
import { useCallback, useEffect, useState } from "react";
import { $api } from "../../services";
import { addProduct } from "../../store/slice/distributor/ProductSlice";
import axios from "axios";
import toast from "react-hot-toast";

export const useFetchProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const userId = user ? user._id : null;
  const profile = useSelector((state) => state.distributorProfile.data);
  const status = useSelector((state) => state.distributorProfile.status);
  const error = useSelector((state) => state.distributorProfile.error);

  const fetchProfile = useCallback(async () => {
    if (!userId) {
      console.log("No userId provided");
      return;
    }
    dispatch(fetchProfileStart());
    try {
      const response = await $api.fetch(`/api/merchant/${userId}`);

      if ($api.isSuccessful(response)) {
        dispatch(fetchProfileSuccess(response.data.data));
      } else {
        dispatch(fetchProfileFailure(response.data.message || "Unknown error"));
      }
    } catch (err) {
      dispatch(fetchProfileFailure(err.message));
    }
  }, [dispatch, userId]);

  return { fetchProfile, profile, status, error };
};

const useAddProduct = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const { loading, error } = useSelector((state) => state.products);

  const [formData, setFormData] = useState({
    organizationId: "",
    creatorId: "",
    email: "",
    manufacturer: "",
    productNumber: "",
    productName: "",
    productCategory: "",
    productDescription: "",
    quantity: "",
    price: "",
    coverPicture: "",
    manufacturedDate: "",
    expiryDate: "",
  });

  const [preview, setPreview] = useState(null);
  useEffect(() => {
    if (user) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        organizationId: user.organizationId || "",
        creatorId: user._id || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);

      // Upload the image to Cloudinary
      const uploadImage = async () => {
        const formData = new FormData();
        formData.append("file", file[0]);
        formData.append("upload_preset", "merchant");
        formData.append("cloud_name", "dsm0ozjbr");

        try {
          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dsm0ozjbr/image/upload",
            formData
          );
          console.log(response, "image res");

          setFormData((prevFormData) => ({
            ...prevFormData,
            coverPicture: response.data.secure_url,
          }));
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      };

      uploadImage();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addProduct(formData));
  };

  return {
    formData,
    handleChange,
    handleFileChange,
    handleSubmit,
    loading,
    error,
    preview,
  };
};

export default useAddProduct;

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await $api.fetch("/api/products");

        if ($api.isSuccessful(response)) {
          setProducts(response.data.data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { products, setProducts, loading, error };
};

export const useProductDetails = (productId) => {
  const [productItems, setProductItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductById = async () => {
      if (!productId) return;
      try {
        const res = await $api.fetch(`/api/products/${productId}`);
        console.log(res);
        if ($api.isSuccessful(res)) {
          setProductItems(res.data.data);
        }
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    if (productId) {
      fetchProductById();
    }
  }, [productId]);
  return { productItems, loading, error };
};

export const useDeleteProductDetails = (deletedProductId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const user = useSelector((state) => state.auth.user);
  const userEmail = user ? user.email : "Email Null";

  console.log(userEmail);
  console.log(deletedProductId);

  const deletedProductById = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await $api.delete(
        `/api/products/${userEmail}/${deletedProductId}`
      );
      if ($api.isSuccessful(response)) {
        toast.success("Product successfully deleted!");
        return response.data.data;
      } else {
        throw new Error(
          response.data.message || "Failed to delete the product."
        );
      }
    } catch (error) {
      // Check if error.message is defined before accessing it
      const errorMsg =
        error.response?.data.data?.message ||
        error.message ||
        "An error occurred while deleting the product.";
      setErrorMessage(errorMsg);
      toast.error(`Error deleting product: ${errorMsg}`);
      throw new Error(errorMsg); // Re-throw error to handle it in the component
    } finally {
      setIsLoading(false);
    }
  }, [deletedProductId, userEmail]);

  return { deletedProductById, isLoading, errorMessage };
};
