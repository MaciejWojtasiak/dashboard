import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditCabin as editCabinApi } from "../../services/apiCabins";

export const useEditCabin = () => {

    const queryClient = useQueryClient();

    const { isLoading: isEditing, mutate: editCabin } = useMutation({
        mutationFn: ({ cabinData, id }) => editCabinApi(cabinData, id),
        onSuccess: () => {
            toast.success('Cabin edited successfully.'),
                queryClient.invalidateQueries({
                    queryKey: 'cabins'
                });
        },
        onError: (err) => {
            toast.error(err.message)
        }
    });

    return { isEditing, editCabin }
}
