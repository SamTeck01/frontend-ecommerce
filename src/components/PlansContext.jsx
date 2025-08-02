/* eslint-disable react/prop-types */
// PlansContext.js
import { createContext, useEffect, useState } from 'react';

export const PlansContext = createContext([]);

export const PlansProvider = ({ children }) => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
        try {
            const response = await fetch('https://app.nocodb.com/api/v2/tables/ma88xwy2lm6vso6/records?offset=0&limit=25&where=&viewId=vwi7dvlktu2ek5sm', {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'xc-token': 'mqtJCDv1JtwM_2rl7m3kKRqCkwojiUKq_RlrWCxr' // 🔐 Include this if your data needs auth
                }
            });
            const data = await response.json();
            setPlans(data.list); // adjust if data format is different
            console.log('Plans fetched successfully:');
        } catch (error) {
            console.error('Failed to fetch plans:', error);
        }
    };
    fetchPlans();
  }, []);

  return (
    <PlansContext.Provider value={{ plans, setPlans }}>
      {children}
    </PlansContext.Provider>
  );
};
