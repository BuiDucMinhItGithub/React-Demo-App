import { useContext } from "react"
import { LangContext } from "../app/context/LangContext"
// import { loginSuccess, logout } from "../features/auth/store/authSlice";
import { useAppDispatch, useAppSelector } from "../app/store";
import { loginSuccess, logout } from "../features/auth/store/authSlice";

export function HomePage() {
    const { lang, setLang } = useContext(LangContext);
    const isAuthen = useAppSelector((state) => state.auth.isAuthenticated);

    const dispatch = useAppDispatch();

    // Do not dispatch during render; provide a button to toggle auth for demo purposes
    return (
        <div>
            <h1>Welcome</h1>
            <p>Current language: {lang}</p>
            <p>Is authenticated: {isAuthen ? 'Yes' : 'Not'}</p>
            <button onClick={() => setLang('en')}>English</button>
            <button onClick={() => setLang('vi')}>Vietnamese</button>
            <button onClick={() => {
                if (isAuthen) {
                    dispatch(logout());
                } else {
                    dispatch(loginSuccess({ token: 'demo-token', isAuthenticated: true }));
                }
            }}>{isAuthen ? 'Logout' : 'Login'}</button>
        </div>
    )
}