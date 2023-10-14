import { useQuery } from "@tanstack/react-query"

const useCakeApi = () => {
  const list = () => useQuery({
    queryKey: ['cakeData'],
    queryFn: () =>
      fetch('http://localhost:8080/cake')
        .then((res) => res.json(),
      ),
  })
  
  return {
    list
  }
}

export default useCakeApi;
