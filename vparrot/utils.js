// utils.js
import { cache } from 'react';
import axios from 'axios';

export const fetchUserData = cache(async () => {
  const response = await axios.get('/api/auth/profile');
  return response.data;
});


// export const fetchUserData = cache(async () => {
//     const user = await axios.get('/api/auth/profile');    
//     console.log('user.data', user.data);
//     return user.data;
//     }
//     );

