import React from "react";
import { Typography ,Box } from "@mui/material";
import { useSelector } from "react-redux";

const TypoGraphy=()=>{
    const count = useSelector((state) => state.counter.counter);
    return(
        <Box>
        <Typography variant='h1'>Ashwarya Saxena</Typography>
        <Typography variant='h2'>Ashwarya Saxena</Typography>
        <Typography variant='h3'>Ashwarya Saxena</Typography>
        <Typography variant='h4'>Ashwarya Saxena</Typography>
        <Typography variant='h5'>Ashwarya Saxena</Typography>
        <Typography variant='h6'>Ashwarya Saxena</Typography>
        </Box>
    )
}
export default TypoGraphy;