import { useEffect, useState } from "react";
import { getCabins } from "../services/apiCabins";
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import Filter from "../ui/Filter";

function Cabins() {
  const [cabins,setCabins] = useState([]);

  useEffect(()=>{
    const getData = async () =>{
      const data = await getCabins(); 
      setCabins(data);
      console.log(data)
    }
    getData()    
  },[]);
  
  return (
    <div>
      <Row type="horizontal">
        <Heading>All Cabins</Heading>
        <Filter />
      </Row>
      <Row>
      <Row type="horizontal">
        <p>cabin</p>
        <p>capacity</p>
        <p>price</p>
        <p>discount</p>
      </Row>
        {cabins.map((cabin)=>{
          return (<Row type="horizontal" key={cabin.id}>
            <img src={cabin.image} width={80}/>
            <p>{cabin.name}</p>
            <p>{cabin.maxCapacity}</p>  
            <p>{cabin.regularPrice}</p>  
            <p>{cabin.discount}</p>  
          </Row>)
        })}
      </Row>
    </div>
  )
}

export default Cabins