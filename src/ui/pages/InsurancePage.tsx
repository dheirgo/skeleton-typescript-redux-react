import { InsuranceList } from '../widgets/insurance/InsuranceList';
import CreateInsuranceForm from '../widgets/insurance/CreateInsuranceForm';
import { Container } from '@mui/material';
import { Fragment } from 'react';
import AppBarWithBackButton from '../widgets/commons/AppBarWithBackButton';

const InsurancePage = () => {
    return (
        <Fragment>
            <AppBarWithBackButton title={"Insurances"} />
            <Container>
                <InsuranceList />
            <CreateInsuranceForm />
        </Container>
        </Fragment>
    );
}

export default InsurancePage;