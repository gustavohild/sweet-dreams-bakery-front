import { useQuery } from "@tanstack/react-query"

const useUserApi = () => {
  const put = async (token, user) => {
    const response = await fetch(`sweet-dreams-bakery.railway.internal/customer/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, 
      }, body: JSON.stringify(user),
    }); if (!response.ok) {
      throw new ResponseError('Não foi possível editar o usuário', response);
    }
    return await response.json();
  };

  const get = (token, email) => useQuery({
    queryKey: ['userData'],
    queryFn: () =>
      fetch(`sweet-dreams-bakery.railway.internal/customer?email=${email}`, {
        method: 'GET',
        headers: { 
          Authorization: `Bearer ${token}`, 
          'Content-Type': 'application/json' }
      })
        .then((res) => res.json(),
        ),
  })

  return {
    get,
    put
  }
}

export default useUserApi;

