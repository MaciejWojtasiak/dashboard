import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useForm } from "react-hook-form";
import { createCabin } from "../../services/apiCabins";

function CreateCabinForm() {
    const { register, handleSubmit, reset } = useForm();

    const queryClient = useQueryClient();

    const {isLoading:isCreating, mutate} = useMutation({
        mutationFn:(cabin)=>createCabin(cabin),
        onSuccess:()=>{
            toast.success('Cabin added successfully.'),
            queryClient.invalidateQueries({
                queryKey:'cabins'
            });
            reset();
        },
        onError:(err)=>{
            toast.error(err.message)
        }
    })


    function onSubmit(data){
        mutate(data);
        console.log(data)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow label="Cabin name">
                <Input type="text" id="name" {...register('name')}/>
            </FormRow>

            <FormRow label="Maximum capacity">
                <Input type="number" id="maxCapacity" {...register('maxCapacity')}/>
            </FormRow>

            <FormRow label="Regular price">
                <Input type="number" id="regularPrice" {...register('regularPrice')}/>
            </FormRow>

            <FormRow label="Discount">
                <Input type="number" defaultValue={0} id="discount" {...register('discount')}/>
            </FormRow>

            <FormRow label="Description">
                <Textarea id="description" {...register('description')}/>
            </FormRow>

            <FormRow label="Photo file">
                <FileInput id="image" defaultValue={null} {...register('image')}/>
            </FormRow>

            <FormRow>
                <Button type="reset">Cancel</Button>
                <Button disabled={isCreating}>Add cabin</Button>
            </FormRow>
        </Form>
    )
}

export default CreateCabinForm;