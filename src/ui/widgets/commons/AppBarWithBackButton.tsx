import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import {ArrowBack as ArrowBackIcon} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

interface AppBarWithBackButtonProps {
    title: string
}

const AppBarWithBackButton = ({title}: AppBarWithBackButtonProps) => {
  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate(-1);
  }

  return (
    <AppBar position="static">
    <Toolbar variant="dense">
      <IconButton onClick={onClickBackButton} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" component="div">
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
)
  }

export default AppBarWithBackButton;