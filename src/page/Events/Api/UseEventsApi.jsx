import { useQuery } from "@tanstack/react-query"

const useEventsApi = () => {
  const list = () => useQuery({
    queryKey: ['eventsData'],
    queryFn: () =>
      fetch('https://sweet-dreams-bakery-sweet-dreams-bakery-pr-4.up.railway.app//combo')
        .then((res) => res.json(),
      ),
  })
  
  return {
    list
  }
}

export default useEventsApi;
