import {  useQuery } from '@tanstack/react-query';
import { getSettings } from '../../services/apiSettings';
import { useForm } from "react-hook-form";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Loader from '../../ui/Loader';

function SettingsForm(formData={}) {
    const {isLoading, data} = useQuery({
        queryKey:['settings'],
        queryFn:getSettings
    });

    const { register, handleSubmit, getValues, reset, formState} = useForm({
        defaultValues:data ? data: formData,
    });

    const {errors} = formState;    

    if(isLoading) return <Loader />;

  return (
    <Form>
        <FormRow label="Minium booking length" error={errors?.name?.message}>
            <Input type="number" id="minBookingLength" 
                    {...register('minBookingLength',{
                    required:"This field is required."
                })} />
        </FormRow>
        <FormRow label="Maximum booking length" error={errors?.name?.message}>
            <Input type="number" id="maxBookingLength" 
                    {...register('maxBookingLength',{
                    required:"This field is required."
                })} />
        </FormRow>
        <FormRow label="Maximum quests number" error={errors?.name?.message}>
            <Input type="number" id="maxGuestsPerBooking" 
                    {...register('maxGuestsPerBooking',{
                    required:"This field is required."
                })} />
        </FormRow>
        <FormRow label="Breakfast price" error={errors?.name?.message}>
            <Input type="number" id="breakfastPrice" 
                    {...register('breakfastPrice',{
                    required:"This field is required."
                })} />
        </FormRow>
    </Form>
  )
}

export default SettingsForm