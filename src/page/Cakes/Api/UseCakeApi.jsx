import { useQuery } from "@tanstack/react-query"


export const useCakeApi = () => {
  const list = () => useQuery({
    queryKey: ['cakeData'],
    queryFn: () =>
      fetch('https://sweet-dreams-bakery-production.up.railway.app/cake')
        .then((res) => res.json(),
      ),
  })
  
  return {
    list
  }
}

export const useCustomCakeApi = () => {
  const customCakeList = () => useQuery({
    queryFn: () =>
      fetch('https://sweet-dreams-bakery-production.up.railway.app/cake/property')
        .then((res) => res.json(),
      ),
  })
  
  return {
    customCakeList
  }
}
