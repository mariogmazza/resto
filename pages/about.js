import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Link from '../src/Link'
import Example from '../components/example'
import { startClock } from '../redux/actions'

export default function About() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button color='secondary' variant="contained" component={Link} naked href="/">
          Go to the main page
        </Button>
        <Example />
      </Box>
    </Container>
  )
}
