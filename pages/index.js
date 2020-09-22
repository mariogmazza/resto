import { Button } from '@material-ui/core';
import React from 'react'
import Link from '../src/Link';


export default function Index() {
  return (
    <>
      <Link href="/about" color="secondary">
        Go to the about page
    </Link>
      <Button variant="contained" color='primary' >PEPE</Button>
    </>
  )
}
