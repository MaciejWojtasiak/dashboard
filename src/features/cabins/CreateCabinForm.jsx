import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useForm } from "react-hook-form";
import { createEditCabin } from "../../services/apiCabins";

function CreateCabinForm({cabinToEdit = {}}) {
    const {id:editId, ...editValues} = cabinToEdit;
    const isEditSession = Boolean(editId);

    const { register, handleSubmit, reset , getValues, formState} = useForm({
        defaultValues: isEditSession ? editValues : {},
    });
    const {errors} = formState;
    const queryClient = useQueryClient();

    const {isLoading:isCreating, mutate:createCabin} = useMutation({
        mutationFn:(cabin)=>createEditCabin(cabin),
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
    });

    const {isLoading:isEditing, mutate:editCabin} = useMutation({
        mutationFn:({cabinData, id})=>createEditCabin(cabinData, id),
        onSuccess:()=>{
            toast.success('Cabin edited successfully.'),
            queryClient.invalidateQueries({
                queryKey:'cabins'
            });
            reset();
        },
        onError:(err)=>{
            toast.error(err.message)
        }
    });

    const isWorking = isCreating || isEditing;

    function onSubmit(data){
        const image = typeof data.image === 'string' ? data.image : data.image[0];

        if(isEditSession){
            editCabin({cabinData:{...data, image},id:editId});
        } else {
            createCabin({...data, image:image})
        }
    }

 
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow label="Cabin name" error={errors?.name?.message}>
                <Input type="text" id="name" 
                    {...register('name',{
                    required:"This field is required."
                })}/>              
            </FormRow>

            <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
                <Input type="number" id="maxCapacity" 
                {...register('maxCapacity',{
                    required:"This field is required.",
                    min:{
                        value:1,
                        message:"Capacity should be at least 1"
                    }
                })}/>
            </FormRow>

            <FormRow label="Regular price" error={errors?.regularPrice?.message}>
                <Input type="number" id="regularPrice" {...register('regularPrice',{
                    required:"This field is required.",
                    min:{
                        value:1,
                        message:"Capacity should be at least 1"
                    }
                })}/>
            </FormRow>

            <FormRow label="Discount" error={errors?.discount?.message}>
                <Input type="number" defaultValue={0} id="discount" {...register('discount',{
                    required:"This field is required.",
                    validate:(value) => value <= getValues().regularPrice || 
                    "Discount should be less than regular price"                    
                })}/>
            </FormRow>

            <FormRow label="Description">
                <Textarea id="description" {...register('description',{
                    required:"This field is required."
                })}/>
            </FormRow>

            <FormRow label="Cabin photo">
                <FileInput id="image" accept="image/*" {...register('image',{
                    required:isEditSession ? false : 'This field is required'
                })}/>
            </FormRow>

            <FormRow>
                <Button variation="secondary" type="reset">Cancel</Button>
                <Button disabled={isWorking}>{isEditSession ? 'Edit cabin' : 'Add cabin'}</Button>
            </FormRow>
        </Form>
    )
}

export default CreateCabinForm;