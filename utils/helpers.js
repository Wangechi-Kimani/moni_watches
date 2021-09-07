import { useEffect, useState } from 'react';
import { useCart } from "react-use-cart";

export async function fetchProducts(page) {
    const response = await fetch(`/api/products?page=${page}`);
    const products = await response.json();
    return products;
}

export const useMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return { hasMounted };
};
