import { InsuranceList } from '../widgets/insurance/InsuranceList';
import CreateInsuranceForm from '../widgets/insurance/CreateInsuranceForm';
import { Container, Theme } from '@mui/material';
import { Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import AppBarWithBackButton from '../widgets/commons/AppBarWithBackButton';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: 64 
    }
}));

const InsurancePage = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <AppBarWithBackButton title={"Insurances"} />
            <Container className={classes.root}>
                <InsuranceList />
            <CreateInsuranceForm />
        </Container>
        </Fragment>
    );
}

export default InsurancePage;