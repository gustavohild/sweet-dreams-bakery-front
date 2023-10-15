import { useMutation } from "@tanstack/react-query"

const create = async (user) => {
    const response = await fetch('https://sweet-dreams-bakery.railway.internal/customer', {
      method: 'POST',
      headers: {      'Content-Type': 'application/json',
      },    body: JSON.stringify( user ),
    });  if (!response.ok) {
      throw new ResponseError('Failed to insert new todo', response);
    }
    return await response.json();
  };

const useRegistrationApi = () => {
    const post = useMutation(create,{
        onSuccess: () => {

        }
    })

    return {
        post
    }
}

export default useRegistrationApi;
