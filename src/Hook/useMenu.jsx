import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

const useMenu = () => {
  const axiosCommon = useAxiosCommon();

  const { data: menu = [], loading } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosCommon.get("/menu");
      return res.data;
    },
  });

  return [menu, loading];
};

export default useMenu;
