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
    if (!userId) {
      console.log("No userId provided");
      return;
    }
    dispatch(fetchProfileStart());
    try {
      const response = await $api.fetch(`/api/merchant/${userId}`);

      if ($api.isSuccessful(response)) {
        console.log("Profile fetch successful:", response.data);
        dispatch(fetchProfileSuccess(response.data));
      } else {
        dispatch(fetchProfileFailure(response.data.message));
      }
    } catch (err) {
      dispatch(fetchProfileFailure(err.message));
    }
  }, [dispatch, userId]);

  return { fetchProfile, profile, status, error };
};
