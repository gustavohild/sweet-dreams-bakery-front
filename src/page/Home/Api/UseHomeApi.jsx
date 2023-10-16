import { useQuery } from "@tanstack/react-query"

const useHomeApi = () => {
  const list = () => useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://sweet-dreams-bakery-production.up.railway.app/cake')
        .then((res) => res.json(),
      ),
  })
  
  return {
    list
  }
}

export default useHomeApi;
