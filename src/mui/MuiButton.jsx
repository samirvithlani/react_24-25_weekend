import { Button, Fab, IconButton } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';

export const MuiButton = () => {
  return (
    <div>
        <Button variant='contained' sx={{backgroundColor:"pink"}}>ADD</Button>
        <IconButton>
            <SendIcon></SendIcon>
        </IconButton>
        <Button variant='outlined' startIcon={<SendIcon/>}>ADD</Button>
        <Button variant='outlined' endIcon={<SendIcon/>}>ADD</Button>
        <Fab color='primary'>
            <SendIcon></SendIcon>
        </Fab>
    </div>
  )
}

