import styled , {css} from "styled-components";

const sizes = {
   small:css`
      font-size: 1.2rem;
      padding: .4rem .8rem;
      text-transform: uppercase;
      font-weight: 600;
      text-align: center;
   `,
   medium:css`
      font-size: 1.4rem;
      padding: 1.2rem 1.6rem;
      font-weight: 500;
   `,
   large: css`
      font-size: 1.6rem;
      padding: 1.2rem 2.4rem;
      font-weight: 500;
   `
}

const Button = styled.button`
   border: none;
   border-radius: var(--border-radius-sm);
   background-color:var(--color-brand-600);
   color: var(--color-brand-50);
   box-shadow:var(--shadow-sm);
   cursor: pointer;
   &:hover {
        background-color: var(--color-brand-700);
   }
   ${props => sizes[props.size]}
  
`

Button.defaultProps ={
   size:'medium'
}

export default Button