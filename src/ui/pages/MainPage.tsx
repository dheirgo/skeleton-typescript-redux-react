import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { NavigationRoutes } from '../navigation';

const MainPage = () => {
    return (
        <Container>
            <Box>
            <p>Soy la página principal</p>
            </Box>
            <Box>
                <Link style={{textDecoration: 'none'}} to={NavigationRoutes.Insurances}>
                    <Button variant={"contained"}>Ir a Insurances</Button>
                </Link>
            </Box>
        </Container>
);
    }

export default MainPage;