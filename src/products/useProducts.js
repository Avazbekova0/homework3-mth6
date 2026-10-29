import { useQuery } from '@tanstack/react-query';
import { $api } from '../api/api';

const getProducts = async () => {
  const response = await $api.get('/products');
  return response.data;
};

const getProductById = async (id) => {
  const response = await $api.get(`/products/${id}`);
  return response.data;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
};

export const useProduct = (id) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
  });
};
