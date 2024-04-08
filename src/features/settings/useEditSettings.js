import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { editSettings as editSettingsApi } from "../../services/apiSettings";

export const useEditSettings = () => {

    const queryClient = useQueryClient();

    const { isLoading: isEditing, mutate: editSettings } = useMutation({
        mutationFn: editSettingsApi,
        onSuccess: () => {
            toast.success('Settings edited successfully.'),
                queryClient.invalidateQueries({
                    queryKey: 'settings'
                });
        },
        onError: (err) => {
            toast.error(err.message)
        }
    });

    return { isEditing, editSettings }
}
