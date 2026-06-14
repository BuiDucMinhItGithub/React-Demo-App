import axios from "axios";

// Read base URL from Vite environment variables. Vite exposes env vars that
// start with `VITE_` on `import.meta.env` at build time. Fallback to localhost
// for local development if the variable is not set.
const BASE_URL = (import.meta.env as any).VITE_API_URL ?? "http://localhost:3000";

export const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    console.log("Attaching token to request:", token);
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    console.log("Outgoing request config:", config);
    return config;
}, (error) => {
    return Promise.reject(error);
});

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401) {
    //    localStorage.removeItem("accessToken");
    //    window.location.href = '/login';
    const refreshToken = localStorage.getItem("refreshToken");
    const res = axios.post(`${BASE_URL}/refresh-token`, { token: refreshToken }).then((response) => {
        const newAccessToken = response.data.accessToken;
        localStorage.setItem("accessToken", newAccessToken);
        console.log(res);
        return axiosClient(originalRequest);
    }).catch((refreshError) => {
        console.error("Refresh token failed:", refreshError);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        // window.location.href = '/login';
        return Promise.reject(refreshError);
    });
    }
    return Promise.reject(error);
});
