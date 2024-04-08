import {  useQuery } from '@tanstack/react-query';
import { getSettings } from '../../services/apiSettings';

import { useEditSettings } from './useEditSettings';

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Loader from '../../ui/Loader';

function SettingsForm() {
    const {isLoading, data={}} = useQuery({
        queryKey:['settings'],
        queryFn:getSettings
    });

    const {minBookingLength, maxBookingLength,maxGuestsPerBooking,breakfastPrice} = data;

    const {isEdditing, editSettings} = useEditSettings();  

    const handleBlur = (e, field) =>{
        const {value} = e.target;
        editSettings({[field]:value})
    }

    if(isLoading) return <Loader />;

  return (
    <Form>
        <FormRow label="Minium booking length">
            <Input 
            type="number" 
            id="minBookingLength" 
            disabled={isEdditing}
            defaultValue={minBookingLength} 
            onBlur={e=>handleBlur(e,'minBookingLength')}
            />
        </FormRow>
        <FormRow label="Maximum booking length">
            <Input 
            type="number" 
            id="maxBookingLength" 
            disabled={isEdditing} 
            defaultValue={maxBookingLength} 
            onBlur={e=>handleBlur(e,'maxBookingLength')}
            />
        </FormRow>
        <FormRow label="Maximum quests number">
            <Input 
            type="number" 
            id="maxGuestsPerBooking"
            disabled={isEdditing} 
            defaultValue={maxGuestsPerBooking} 
            onBlur={e=>handleBlur(e,'maxGuestsPerBooking')}
            />
        </FormRow>
        <FormRow label="Breakfast price" >
            <Input 
            type="number" 
            id="breakfastPrice" 
            disabled={isEdditing}
            defaultValue={breakfastPrice} 
            onBlur={e=>handleBlur(e,'breakfastPrice')}
            />
        </FormRow>
    </Form>
  )
}

export default SettingsForm