import styled from "styled-components";
import {formatPrice} from '../../utils/formatPrice';
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiPencil, HiTrash } from 'react-icons/hi2'


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
const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

function CabinRow({cabin}) {
  const [showForm, setShowForm] = useState(false);
  const {id:cabinId, image, name, maxCapacity, regularPrice, discount} = cabin;
  const {isDeleting, deleteCabin} = useDeleteCabin();
  
  const closeForm = () => {
    setShowForm(false);
  }

  return (<>
    <TableRow>
        <Img src={image}></Img>
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatPrice(regularPrice)}</Price>
        {discount ? <Discount>{formatPrice(discount)}</Discount> : <span>&mdash;</span>}        
        <Options>
            <button onClick={()=>setShowForm(state=>!state)}><HiPencil/></button>
            <button onClick={()=>deleteCabin(cabinId)} disabled={isDeleting}><HiTrash/></button>
        </Options>
    </TableRow>
    {showForm && <CreateCabinForm cabinToEdit={cabin} closeForm={closeForm}/>}
    </>
  )
}

export default CabinRow