import { axiosClient } from "../../../services/axiosClient";

export async function login(usernameInput: string, passwordInput: string) {
    const resultLogin = await axiosClient.post("/auth/login", { username: usernameInput, password: passwordInput });
    const {accessToken, role} = resultLogin.data;
    return {accessToken, role};
}