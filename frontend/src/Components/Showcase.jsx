import React from "react";
import styled from "styled-components";

const Model = styled.div`
    padding: 32px 0;
`

const Organizer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    justify-content: center;

`


export default function Showcase(props){
    return <Model>
        <Organizer>
            { props.children }
        </Organizer>
    </Model>
}