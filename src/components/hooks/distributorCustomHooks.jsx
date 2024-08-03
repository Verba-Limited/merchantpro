import { useDispatch, useSelector } from "react-redux";
import {
  fetchProfileStart,
  fetchProfileFailure,
  fetchProfileSuccess,
} from "../../store/slice/distributor/profileSlice";
import { useCallback } from "react";
import { $api } from "../../services";

export const useFetchProfile = (userId) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.distributorProfile.data);
  const status = useSelector((state) => state.distributorProfile.status);
  const error = useSelector((state) => state.distributorProfile.error);

  const fetchProfile = useCallback(async () => {
    console.log("fetchProfile started with userId:", userId);
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
