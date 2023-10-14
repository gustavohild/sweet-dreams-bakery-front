import { useQuery } from "@tanstack/react-query"

const useEventsApi = () => {
  const list = () => useQuery({
    queryKey: ['eventsData'],
    queryFn: () =>
      fetch('http://localhost:8080/combo')
        .then((res) => res.json(),
      ),
  })
  
  return {
    list
  }
}

export default useEventsApi;
