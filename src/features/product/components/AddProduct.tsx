import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { axiosClient } from '../../../services/axiosClient';
import { ROUTES } from '../../../constants/route.constants';
import styles from './AddProduct.module.css';
import { useMutation } from '@tanstack/react-query';

type FormValues = {
  productname: string;
  price: number;
};

export function AddProduct() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: { productname: 'minh', price: 123 },
  });

//   useMutation({
//   mutationFn: addTodo,
//   onSuccess: async () => {
//     console.log("I'm first!")
//   },
//   onSettled: async () => {
//     console.log("I'm second!")
//   },
// })

  const onSubmit = async (values: FormValues) => {
    try {
      // Send JSON body with name and price
      console.log('Submitting product:', values);
      const resp = await axiosClient.post('/products', values);
      console.log('Create product response', resp.data);
      reset();
      // navigate back to product list; the list will re-fetch on mount
      navigate(ROUTES.PRODUCT_LIST);
    } catch (err) {
      console.error('Failed to create product', err);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="productname">Product name</label>
          <input className={styles.input} id="productname" {...register('productname', { required: true })} />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="price">Price</label>
          <input className={styles.input} type="number" id="price" step="0.01" {...register('price', { valueAsNumber: true })} />
        </div>

        <div className={styles.actions}>
          <button className={styles.submitButton} type="submit">Create product</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
