import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

export function MainLayout() {
    return (
        <div>
        <Header></Header>
        <main>
            <Outlet/>
        </main>
        </div>
    );
}