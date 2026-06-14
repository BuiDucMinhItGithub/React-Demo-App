import { useNavigate, useLocation } from "react-router-dom";

// import { useState } from "react";
import { login } from "../service/authService";
import { loginSuccess } from "../store/authSlice";
import { useAppDispatch } from "../../../app/store";
import { ROUTES } from "../../../constants/route.constants";
import { useForm } from "react-hook-form";
import styles from './LoginForm.module.css';
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../types/loginSchame";

export function LoginForm() {
    // navigation hooks must be called at component top level
    const navigate = useNavigate();
    const location = useLocation();

    // const [username, setUsername] = useState('admin');
    // const [password, setPassword] = useState('123456');
    // const [error, setError] = useState('');
    const dispatch = useAppDispatch();

    const {register, handleSubmit, setError, formState: {errors}} = 
    useForm<{
        username: string;
        password: string;
    }>({
        defaultValues: {
            username: 'admin',
            password: '123456'
        },
        resolver: zodResolver(loginSchema),
        mode: 'onTouched'
    });

    const handleLogin = handleSubmit(async (data) => {
        const {username, password} = data;
        try {
            const authData =  await login(username, password);
            dispatch(loginSuccess({token: authData?.accessToken ?? null, isAuthenticated: true}));
            const fromUrl = (location.state as any)?.from?.pathname || ROUTES.HOME;
            navigate(fromUrl, { replace: true });
        } catch (error) {
            // setError("Login failed. Please try again.");
            console.log("Login error:", error);
            setError("root.serverError", { type: "manual", message: "Invalid username or password" });
        }
    });
    return (
        <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Login</h3>
            <form onSubmit={handleLogin}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="username">Username</label>
                    <input className={styles.input}
                        type="text" 
                        {...register("username")}
                        id="username" />
                    {errors.username && <span className={styles.error}>{errors.username.message}</span>}
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="password">Password</label>
                    <input className={styles.input}
                        type="password" 
                        id="password" 
                        {...register("password")}
                    />
                    {errors.password && <span className={styles.error}>{errors.password.message}</span>}
                </div>

                <div>
                    <button className={styles.submitButton} type="submit">Login</button>
                </div>

                {errors.root?.serverError && <p className={styles.error}>{errors.root.serverError.message}</p>}
            </form>
        </div>
    );
}