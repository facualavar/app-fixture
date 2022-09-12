import styled from "styled-components"

const colors = {
    light : {
        background: "#e2e3e5",
        border: "#d6d8db",
        color: "#383d41",
        colorLink: "#202326",
    },
    lightBlue : {
        background: "#cce5ff",
        border: "#b8daff",
        color: "#004085",
        colorLink: "#002752",
    },
    green : {
        background: "#d4edda",
        border: "#c3e6cb",
        color: "#155724",
        colorLink: "#0b2e13",
    },
    yellow : {
        background: "#fff3cd",
        border: "#ffeeba",
        color: "#856404",
        colorLink: "#533f03",
    },
    red : {
        background: "#f8d7da",
        border: "#f5c6cb",
        color: "#721c24",
        colorLink: "#491217",
    },
}

const AlertStyled = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid;
    border-radius: 0.25rem;

    color : ${props => colors[props.color].color};
    border-color : ${props => colors[props.color].background};
    background-color : ${props => colors[props.color].border};

    a {
        color : ${props => colors[props.color].colorLink};
        font-weight: 700;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    .close {
        cursor: pointer;
        padding: 0 0 0 0.25rem;
        color: inherit;
        background-color: transparent;
        border: 0;
    }
`

const Alert = ({ isDimisible, closeAlert, children, ...props }) => {
    return (
        <AlertStyled {...props}>
            <span>{children}</span>
            {isDimisible ? <button onClick={closeAlert} className="close"><span aria-hidden="true">&times;</span></button> : null}
        </AlertStyled>
    )
}

export default Alert