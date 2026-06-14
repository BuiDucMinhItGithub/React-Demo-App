import { useParams } from "react-router-dom";

export function ProductDetailPage() {
    const { id } = useParams();
    return (
        <div>
            <h1>Product Detail Page - {id}</h1>
        </div>
    );
}