import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/route.constants";
import styles from './List.module.css';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../services/productService";

type Product 
= {
    id: number;
    name: string;
    price: number;
}
export default function ProductListPage () {
    const [searchParams] = useSearchParams();
    const search =  searchParams.get('search');

    // const [products, setProducts] = useState<any[]>(
    //     [
    //         { id: 1, name: 'Product 1' },
    //         { id: 2, name: 'Product 2' },
    //         { id: 3, name: 'Product 3' },
    //     ]);
    // const fetchProducts = async () => {
    //         try {
    //             // Request the backend products endpoint. Using `/products` ensures
    //             // the Vite dev-server proxy (configured in `vite.config.ts`) forwards
    //             // the request to the backend instead of serving `index.html`.
    //             const productResponse = await axiosClient.get('/products');
    //             const data = productResponse.data;
    //             // console.log('productResponse:', productResponse);
    //             // console.log('productResponse.data:', data);
    //             if (Array.isArray(data)) {
    //                 setProducts(data);
    //             } else if (data && Array.isArray((data as any).items)) {
    //                 setProducts((data as any).items);
    //             } else {
    //                 console.warn('Unexpected products response shape, falling back to empty list');
    //                 setProducts([]);
    //             }
    //         } catch (error) {
    //             console.error("Error fetching products:", error);
    //         }
    //     };

    const queryClient = useQueryClient();

    const {
        data: products,
        error, 
        isFetching
        } = useQuery({ 
            queryKey: ['products'], 
            queryFn: getProducts,
            refetchOnWindowFocus: false, // disable automatic refetch on window focus})
            networkMode: 'always' // ensure queries are sent even if navigator is offline (they will be retried when back online)
        });


    // useEffect(() => {
        
    //     fetchProducts();
    // }, []);
    // const products = [
    //     { id: 1, name: 'Product 1' },
    //     { id: 2, name: 'Product 2' },
    //     { id: 3, name: 'Product 3' },
    // ];

    if (isFetching) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error loading products</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Product List{search ? ` - ${search}` : ''}</h1>
                <div className={styles.toolbar}>
                    <div className={styles.addButton}>
                        <button className={styles.refreshButton} onClick={() => queryClient.invalidateQueries({ queryKey: ['products'] })}>Refresh</button>
                    </div>
                    <div className={styles.addButton}>
                        <Link to={ROUTES.PRODUCT_ADD}><button>Add product</button></Link>
                    </div>
                </div>
            </div>

            <ul className={styles.list}>
                {products?.map((product: Product) => (
                    <li key={product.id} className={styles.listItem}>
                        <a className={styles.productLink} href={`/products/${product.id}`}>
                            <span className={styles.productName}>{product.name}</span>
                            <span className={styles.productPrice}>{product.price}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}