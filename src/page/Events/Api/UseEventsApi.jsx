import { useQuery } from "@tanstack/react-query"

const useEventsApi = () => {
  const list = () => useQuery({
    queryKey: ['eventsData'],
    queryFn: () =>
      fetch('https://sweet-dreams-bakery-production.up.railway.app/combo')
        .then((res) => res.json(),
      ),
  })
  
  return {
    list
  }
}

export default useEventsApi;
