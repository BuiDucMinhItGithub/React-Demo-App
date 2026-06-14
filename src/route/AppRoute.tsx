import { Navigate, Route,Routes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout.js";
import { ROUTES } from "../constants/route.constants.js";
import { HomePage } from "../pages/HomePage.js";
import { LoginPage } from "../features/auth/pages/LoginPage.js";
import { MainLayoutAuth } from "../layouts/MainLayoutAuth.js";
// import { ProductListPage } from "../features/product/page/List.js";
import { ProductDetailPage } from "../features/product/page/Detail.js";
import { ProtectedRoute } from "../components/route/ProtectedRoute.js";
import { lazy, Suspense } from "react";
    const AddProduct = lazy(() => import("../features/product/components/AddProduct.js"));


export function AppRoute() {
    const ProductListPage = lazy(() => import("../features/product/page/List.js"));
    return (
        <Routes>
            <Route element={<MainLayout/>}>
               <Route path={ROUTES.HOME} element={<HomePage />} /> 
               <Route element = {<ProtectedRoute />}>  
                       <Route path={ROUTES.PRODUCT_LIST} element={<Suspense fallback={<div>Loading...</div>}><ProductListPage /></Suspense>} />
                        <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetailPage />} /> 
                        <Route path={ROUTES.PRODUCT_ADD} element={<Suspense fallback={<div>Loading...</div>}><AddProduct /></Suspense>} /> 
               </Route>      
            </Route>
            <Route element={<MainLayoutAuth/>}>
               <Route path={ROUTES.LOGIN}  element={<LoginPage />} /> 
            </Route>
            <Route path="*" element={<Navigate to={ROUTES.HOME}/>}></Route>
        </Routes>
    )
}