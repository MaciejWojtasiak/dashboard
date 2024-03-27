import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: .8rem;
`
const StyledNavLink = styled(NavLink)`
    &:link,
    &:visited{
        display: flex;
        align-items: center;
        gap: 1.2rem;

        color: var(--color-grey-600);
        font-size: 1.6rem;
        font-weight: 500;
        padding:1.2rem 2.4rem;
        transition: all .3s;
    }
    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        color: var(--color-grey-800);
        background-color: var(--color-grey-50);
        border-radius: var(--border-radius-sm);
    }
`

function MainNav() {
  return (
    <nav>
        <NavList>
            <li><StyledNavLink to={'dashboard'}>Dashboard</StyledNavLink></li>
            <li><StyledNavLink to={'bookings'}>Bookings</StyledNavLink></li>
            <li><StyledNavLink to={'cabins'}>Cabins</StyledNavLink></li>
            <li><StyledNavLink to={'users'}>Users</StyledNavLink></li>
            <li><StyledNavLink to={'settings'}>Settings</StyledNavLink></li>
            <li><StyledNavLink to={'account'}>Account</StyledNavLink></li>
        </NavList>
    </nav>
    
  )
}

export default MainNav