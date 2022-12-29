import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Login() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: '#fff', height: '100vh', justifyContent: 'center' }}>
        {' '}
        <Typography align="center" variant="h1" component="h2">
          Success
        </Typography>
      </Box>
    </Container>
  );
}
