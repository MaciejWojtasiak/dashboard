import styled from "styled-components";
import {formatPrice} from '../../utils/formatPrice';
import { deleteCabin } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";

const TableRow = styled.div`
    display: grid;

    grid-template-columns: .6fr 1.8fr 2.2fr 1fr 1fr 1fr;
    column-gap: 2.4rem;
    align-items: center;
    padding: 1.4rem 2.4rem;

    background-color: #fff;

    &:not(:last-child){
        border-bottom: 1px solid var(--color-grey-100);
    }
`;

const Img = styled.img`
    display: block;
    width: 6.4rem;
    aspect-ratio: 3/2;
    object-fit: cover;
    object-position: center;
`;

const Cabin = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    font-family: "Sono";
`
const Price = styled.div`
    font-weight: 600;
    font-family: "Sono";
`
const Discount = styled.div`
    font-weight: 500;
    font-family: "Sono";
    color:var(--color-green-700);
`


function CabinRow({cabin}) {
  const [showForm, setShowForm] = useState(false);
  const {id:cabinId, image, name, maxCapacity, regularPrice, discount} = cabin;

  const queryClient = useQueryClient();
  
  const {isLoading:isDeleting, mutate} = useMutation({
    mutationFn:(id)=>deleteCabin(id),
    onSuccess:()=>{
        toast.success('Cabin successfully deleted.')
        queryClient.invalidateQueries({
            queryKey:'cabins'
        })
    },
    onError:err=>toast.error(err.message),
  })

  return (<>
    <TableRow>
        <Img src={image}></Img>
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatPrice(regularPrice)}</Price>
        <Discount>{formatPrice(discount)}</Discount>
        <div>
            <button onClick={()=>setShowForm(state=>!state)}>Edit</button>
            <button onClick={()=>mutate(cabinId)} disabled={isDeleting}>Delete</button>
        </div>
    </TableRow>
    {showForm && <CreateCabinForm cabinToEdit={cabin}/>}
    </>
  )
}

export default CabinRow