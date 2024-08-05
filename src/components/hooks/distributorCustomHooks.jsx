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

export const useFetchProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const userId = user ? user._id : null;
  const profile = useSelector((state) => state.distributorProfile.data);
  const status = useSelector((state) => state.distributorProfile.status);
  const error = useSelector((state) => state.distributorProfile.error);

  console.log("fetchProfile started with userId:", user);
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
        console.log("Profile fetch successful:", response.data);
        dispatch(fetchProfileSuccess(response.data));
      } else {
        console.log("Profile fetch failed:", response.data.message);
        dispatch(fetchProfileFailure(response.data.message || "Unknown error"));
      }
    } catch (err) {
      console.log("Profile fetch error:", err.message);
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
  // Automatically set user-related fields when the user data is available
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
        formData.append("file", file);
        formData.append("upload_preset", "merchant");
        formData.append("cloud_name", "dsm0ozjbr");

        try {
          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dsm0ozjbr/image/upload",
            formData
          );
          const imageUrl = response.data.secure_url;
          setFormData((prevFormData) => ({
            ...prevFormData,
            coverPicture: imageUrl,
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
