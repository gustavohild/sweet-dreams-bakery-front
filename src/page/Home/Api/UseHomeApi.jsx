import { useQuery } from "@tanstack/react-query"

const useHomeApi = () => {
  const list = () => useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('sweet-dreams-bakery.railway.internal/cake')
        .then((res) => res.json(),
      ),
  })
  
  return {
    list
  }
}

export default useHomeApi;
