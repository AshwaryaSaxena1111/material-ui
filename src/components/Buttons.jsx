import React from "react";
import { Button} from "@mui/material";
import {styled} from "@mui/system";

const StyleMui= styled(Button)`
    && { 
        margin:5px;
        height:100px;
        width:100px;
        background-color: ${(props)=>{
            if(props.variant==="outlined") return "red";
            if(props.variant==="contained") return "blue";
            if(props.variant==="text") return "pink";
        }}
    }
`

const Buttons=()=>{
    return(
        <div>
            <StyleMui variant="outlined">Outlined</StyleMui>
            <StyleMui variant="contained">Container</StyleMui>
            <StyleMui variant="text">Text</StyleMui>
        </div>
    )
}

export default Buttons;