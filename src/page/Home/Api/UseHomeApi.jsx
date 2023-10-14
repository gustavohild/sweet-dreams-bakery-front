import { useQuery } from "@tanstack/react-query"

const useHomeApi = () => {
  const list = () => useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://localhost:8080/cake')
        .then((res) => res.json(),
      ),
  })
  
  return {
    list
  }
}

export default useHomeApi;
