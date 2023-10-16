import { useQuery } from "@tanstack/react-query"


export const useCakeApi = () => {
  const list = () => useQuery({
    queryKey: ['cakeData'],
    queryFn: () =>
      fetch('https://sweet-dreams-bakery-sweet-dreams-bakery-pr-4.up.railway.app/cake')
        .then((res) => res.json(),
      ),
  })
  
  return {
    list
  }
}

export const useCustomCakeApi = () => {
  const customCakeList = () => useQuery({
    queryKey: ['cakeData'],
    queryFn: () =>
      fetch('https://sweet-dreams-bakery-sweet-dreams-bakery-pr-4.up.railway.app/cake/property?names=flavor,filling,size,topping')
        .then((res) => res.json(),
      ),
  })
  
  return {
    customCakeList
  }
}
