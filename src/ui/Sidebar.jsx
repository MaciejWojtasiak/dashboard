import styled from "styled-components";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
    background-color: var(--color-grey-0);
    padding: 3.2rem 2.4rem;
    border-bottom: 1px solid var(--color-grey-100);
    grid-row: 1 / -1;
    
    display: flex;
    flex-direction: column;
    gap:3.2rem;
`;


function Sidebar() {
  return (
    <StyledSidebar>
       <MainNav />
    </StyledSidebar>
  )
}



{/* <Route path='dashboard' element={<Dashboard />}/> 
<Route path='bookings' element={<Bookings />}/> 
<Route path='cabins' element={<Cabins />}/> 
<Route path='users' element={<Users />}/> 
<Route path='settings' element={<Settings />}/> 
<Route path='account' element={<Account />}/>             
</Route>          
<Route path='login' element={<Login />}/> 
<Route path='*' element={<PageNotFound />}/> */}

export default Sidebar