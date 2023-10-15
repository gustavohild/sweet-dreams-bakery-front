import { useMutation } from "@tanstack/react-query"

const useCartApi = () => {
  //const post = useMutation(create, {
    //onSuccess: () => {

    //}
  //})

  const post = async (token, pedido, id) => {
    console.log('AQUI', token, pedido, id)
    const response = await fetch(`https://sweet-dreams-bakery.railway.internal/order?customer_id=${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(pedido),
    }); if (!response.ok) {
      throw new ResponseError('Failed to insert new todo', response);
    }
    return await response.json();
  };

  return {
    post
  }
}

export default useCartApi;
