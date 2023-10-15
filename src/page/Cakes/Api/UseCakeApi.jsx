import { useQuery } from "@tanstack/react-query"

const useCakeApi = () => {
  const list = () => useQuery({
    queryKey: ['cakeData'],
    queryFn: () =>
      fetch('https://sweet-dreams-bakery-sweet-dreams-bakery-pr-4.up.railway.app//cake')
        .then((res) => res.json(),
      ),
  })
  
  return {
    list
  }
}

export default useCakeApi;
