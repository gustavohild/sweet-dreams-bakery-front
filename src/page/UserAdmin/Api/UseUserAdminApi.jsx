import { useQuery } from "@tanstack/react-query"

const useUserAdminApi = () => {
  
    const list = async (token) => {
    const response = await fetch('https://sweet-dreams-bakery-production.up.railway.app/order', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, 
      }
    }); if (!response.ok) {
      throw new ResponseError('Servidor em manutenção, contate um administrador.', response);
    }
    return await response.json();
  };

  const get = (token, email) => useQuery({
    queryKey: ['userData'],
    queryFn: () =>
      fetch(`https://sweet-dreams-bakery-production.up.railway.app/customer?email=${email}`, {
        method: 'GET',
        headers: { 
          Authorization: `Bearer ${token}`, 
          'Content-Type': 'application/json' }
      })
        .then((res) => res.json(),
        ),
  })

  const patch = async (token, orderId, status) => {
    const response = await fetch(`https://sweet-dreams-bakery-production.up.railway.app/order/${orderId}/change-status?status=${status}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, 
      }
    }); if (!response.ok) {
      throw new ResponseError('Servidor em manutenção, contate um administrador.', response);
    }
    return await response.json();
  }

  return {
    list,
    get,
    patch
  }
  
}

export default useUserAdminApi;

