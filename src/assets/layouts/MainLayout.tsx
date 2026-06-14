import { Outlet } from "react-router-dom";

export function MainLayout() {
    return (
        <div>
        <header></header>
        <main>
            <Outlet/>
        </main>
        </div>
    );
}