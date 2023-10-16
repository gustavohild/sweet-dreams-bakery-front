import { useQuery } from "@tanstack/react-query"

const useCakeApi = () => {
  const list = () => useQuery({
    queryKey: ['cakeData'],
    queryFn: () =>
      fetch('sweet-dreams-bakery.railway.internal/cake')
        .then((res) => res.json(),
      ),
  })
  
  return {
    list
  }
}

export default useCakeApi;
