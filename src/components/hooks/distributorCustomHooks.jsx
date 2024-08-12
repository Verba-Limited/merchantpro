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
      console.log("API response:", response);
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
        console.log(response, "all product response");

        if ($api.isSuccessful(response)) {
          setProducts(response.data.data);
          console.log(response.data.data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { products, loading, error };
};

// export const useProductDetails = () => {
//   const [productItems, setProductItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const products = useSelector((state) => state.products.products);
//   const productId = products.length > 0 ? products[0]._id : null;

//   // console.log(products, "products from store");
//   // console.log(productId, "productId from store");

//   const fetchProductDetails = useCallback(async () => {
//     if (!productId) {
//       console.log("No productId provided");
//       return;
//     }
//     try {
//       const response = await $api.get(`/api/products/${productId}`);
//       console.log(response, "product response");
//       if ($api.isSuccessful(response)) {
//         setProductItems(response.data.data || []);
//       } else {
//         setError("Failed to fetch products");
//       }
//     } catch (error) {
//       setError(error.toString());
//     } finally {
//       setLoading(false);
//     }
//   }, [productId]);

//   useEffect(() => {
//     fetchProductDetails();
//   }, [fetchProductDetails]);

//   return { productItems, loading, error };
// };
