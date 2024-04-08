import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditCabin as createCabinApi } from "../../services/apiCabins";

export const useCreateCabin = () => {

    const queryClient = useQueryClient();

    const { isLoading: isCreating, mutate: createCabin } = useMutation({
        mutationFn: (cabin) => createCabinApi(cabin),
        onSuccess: () => {
            toast.success('Cabin added successfully.'),
                queryClient.invalidateQueries({
                    queryKey: 'cabins'
                });
        },
        onError: (err) => {
            toast.error(err.message)
        }
    });

    return { isCreating, createCabin }
}
