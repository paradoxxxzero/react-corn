import { Button as MuiButton } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Form = styled('form')(({ theme }) => ({
  '& .MuiFormControl-root': {
    display: 'block',
    margin: theme.spacing(4),
  },
}))

export const Button = styled(MuiButton)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginLeft: theme.spacing(4),
}))
