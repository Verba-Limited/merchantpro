// src/services/axios.js
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useLoading } from "src/context/loadingContext";

// Set the base URL from environment variables
export const baseURL = process.env.REACT_APP_API_URL;

// Configuration for Axios instance
const axiosConfig = {
  withCredentials: false,
  headers: {
    Accept: "application/json",
  },
};

// Create Axios instance with the given configuration
const axiosClient = axios.create(axiosConfig);

// Function to setup interceptors
const setupInterceptors = (setLoading) => {
  axiosClient.interceptors.request.use((config) => {
    setLoading(true);
    return config;
  });

  axiosClient.interceptors.response.use(
    (response) => {
      setLoading(false);
      return response;
    },
    (error) => {
      setLoading(false);
      if (!error.response) {
        toast.error("Network error: Please check your internet connection.");
      }
      return Promise.reject(error);
    }
  );
};

// ServiceApi class to handle API requests
class ServiceApi {
  constructor() {
    this.url = baseURL;
  }

  // Method to append endpoint to base URL
  appendToURL(url) {
    return `${this.url}${url}`;
  }

  // Method to setup headers for requests
  setupHeaders() {
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("prime_chefs_user_access_token")}`,
      },
    };
  }

  // Method to handle GET requests with authentication
  async fetch(url, data) {
    try {
      const response = await axiosClient.get(this.appendToURL(url), {
        data,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get(
            "prime_chefs_user_access_token"
          )}`,
        },
      });
      return response;
    } catch (err) {
      return err;
    }
  }

  // Method to handle GET requests without authentication
  async fetchWithoutAuth(url, data) {
    try {
      const response = await axiosClient.get(this.appendToURL(url), {
        data,
      });
      return response;
    } catch (err) {
      return err;
    }
  }

  // Method to handle POST requests
  async post(url, data) {
    try {
      const response = await axiosClient.post(
        this.appendToURL(url),
        data,
        this.setupHeaders()
      );
      return response;
    } catch (err) {
      return err;
    }
  }

  // Method to handle DELETE requests
  async delete(url) {
    try {
      const response = await axiosClient.delete(
        this.appendToURL(url),
        this.setupHeaders()
      );
      return response;
    } catch (err) {
      return err;
    }
  }

  // Method to handle PATCH requests
  async update(url, data) {
    try {
      const response = await axiosClient.patch(
        this.appendToURL(url),
        data,
        this.setupHeaders()
      );
      return response;
    } catch (err) {
      return err;
    }
  }

  // Method to check if the response is successful
  isSuccessful(response) {
    const codes = [200, 201, 202, 204];
    const statusCode =
      response?.status || response?.statusCode || response?.code;
    const message = response?.response?.data?.message;

    if (!codes.includes(statusCode)) {
      if (Array.isArray(message) && message.length > 0) {
        toast.error(message[0]);
      } else {
        toast.error(message);
      }
    }
    return codes.includes(statusCode);
  }
}

// Hook to setup the interceptors
export const useAxiosInterceptors = () => {
  const { setLoading } = useLoading();
  setupInterceptors(setLoading);
};

// Export an instance of ServiceApi
export default new ServiceApi();
