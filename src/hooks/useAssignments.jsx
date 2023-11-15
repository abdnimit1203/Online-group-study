import { useQuery } from "@tanstack/react-query";

const useAssignments = (url) => {
    const {data, isLoading , isFetching} = useQuery({
        queryKey: ["assignments"],
        queryFn: async ()=>{
            const data = await fetch(url)
            return await data.json();
        }
    })
    return {data, isLoading , isFetching }
};

export default useAssignments;