import { useMutation, useQuery } from "@tanstack/react-query"

const urlApi = import.meta.env.APP_API;

const useAuthApi = () => {
  const post = (credential) => {
    return fetch(`sweet-dreams-bakery.railway.internal/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, body: JSON.stringify(credential),
    }).then(data => data.text()).then(token => token)
  }
  return {
    post
  }
}

export default useAuthApi;

