import { useMutation, useQuery } from "@tanstack/react-query"

const urlApi = import.meta.env.APP_API;

const useAuthApi = () => {
  const post = (credential) => {
    return fetch(`https://sweet-dreams-bakery-sweet-dreams-bakery-pr-4.up.railway.app/auth/login`, {
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

