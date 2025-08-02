import {createContext, useEffect, useState} from 'react';

export const ProductsContext = createContext([]);

// eslint-disable-next-line react/prop-types
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://app.nocodb.com/api/v2/tables/meh0l4dpmve5ky4/records?offset=0&limit=25&where=&viewId=vwyl7z11yxn2foxg', {
                    method: 'GET',
                    headers: {
                        'accept': 'application/json',
                        'xc-token': 'mqtJCDv1JtwM_2rl7m3kKRqCkwojiUKq_RlrWCxr' // 🔐 Include this if your data needs auth
                    }
                });
                const data = await response.json();
                setProducts(data.list); // adjust if data format is different
                console.log('Products fetched successfully:', data.list);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{products, setProducts}}>
            {children}
        </ProductsContext.Provider>
    );
}