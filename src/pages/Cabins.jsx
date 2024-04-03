import Heading from '../ui/Heading';
import Row from '../ui/Row';
// import Filter from "../ui/Filter";
import CabinsTable from "../features/cabins/CabinsTable";

function Cabins() {
  
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinsTable />
      </Row>
    </>
  )
}

export default Cabins