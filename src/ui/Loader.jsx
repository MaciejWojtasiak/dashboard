import styled, {keyframes} from "styled-components";

const rotate = keyframes`
    to{
        transform: rotate(1turn);
    }
`;

const Loader = styled.div`
    margin: 4.8rem auto;
    width: 48px;
    height: 48px;
    border: 5px solid #000;
    border-bottom-color: transparent;
    border-radius: 50%;
    animation: ${rotate} 1s  infinite linear;
`

export default Loader;