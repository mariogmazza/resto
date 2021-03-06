// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
// import ProTip from '../src/ProTip';
// import Link from '../src/Link';
// import Copyright from '../src/Copyright';
// import Example from '../components/example';
// import { startClock } from '../redux/actions';

// export default function About() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(startClock());
//   }, [dispatch]);

//   return (
//     <Container maxWidth="sm">
//       <Box my={4}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Next.js example
//         </Typography>
//         <Button variant="contained" component={Link} naked href="/">
//           Go to the main page
//         </Button>
//         <ProTip />
//         <Example />
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }
