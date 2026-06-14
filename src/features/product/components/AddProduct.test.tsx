import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Mock axiosClient before importing the component
vi.mock('../../../services/axiosClient', () => ({
  axiosClient: {
    post: vi.fn(),
  },
}));

// Mock useNavigate
const navigateMock = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

import { AddProduct } from './AddProduct';
import { ROUTES } from '../../../constants/route.constants';

describe('AddProduct', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('submits name and price then navigates to product list', async () => {
    const mocked = await vi.importMock('../../../services/axiosClient') as any;
    mocked.axiosClient.post.mockResolvedValue({ data: { id: 1, name: 'X', price: 9.99 } });
    render(
      <MemoryRouter>
        <AddProduct />
      </MemoryRouter>
    );

    const nameInput = screen.getByLabelText(/product name/i) as HTMLInputElement;
    const priceInput = screen.getByLabelText(/price/i) as HTMLInputElement;
    const submit = screen.getByRole('button', { name: /create product/i });

    fireEvent.change(nameInput, { target: { value: 'New Product' } });
    fireEvent.change(priceInput, { target: { value: '12.34' } });
    fireEvent.click(submit);

    // wait for promise microtasks and for the mocked post to be called
    await new Promise((r) => setTimeout(r, 0));
    expect(mocked.axiosClient.post).toHaveBeenCalledTimes(1);
    expect(mocked.axiosClient.post).toHaveBeenCalledWith('/products', { productname: 'New Product', price: 12.34 });
    expect(navigateMock).toHaveBeenCalledWith(ROUTES.PRODUCT_LIST);
  });
});
