import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineHome, HiCalendarDays , HiOutlineUsers , HiOutlineCog6Tooth, HiOutlineHomeModern  } from 'react-icons/hi2'

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
            <li><StyledNavLink to={'dashboard'}><HiOutlineHome /><span>Dashboard</span></StyledNavLink></li>
            <li><StyledNavLink to={'bookings'}><HiCalendarDays /><span>Bookings</span></StyledNavLink></li>
            <li><StyledNavLink to={'cabins'}><HiOutlineHomeModern/><span>Cabins</span></StyledNavLink></li>
            <li><StyledNavLink to={'users'}><HiOutlineUsers  /><span>Users</span></StyledNavLink></li>
            <li><StyledNavLink to={'settings'}><HiOutlineCog6Tooth /><span>Settings</span></StyledNavLink></li>
        </NavList>
    </nav>
    
  )
}

export default MainNav