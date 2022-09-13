import styled from "styled-components"

const Input = styled.input`
    width: 100%;
    height: 2rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    font-size: 1rem;
    text-align: start;
    color: #495057;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-radius: 0,
    border-bottom-width: 2px,
    border-color: ${(props) => !props.error ? "#ced4da": "#dc3545"};

    &:focus {
        border-color: ${(props) => !props.error ? "#80bdff": "#dc3545"};
        outline: 0;
    }
`

export default Input