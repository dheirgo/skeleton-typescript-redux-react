import { InsuranceList } from '../widgets/insurance/InsuranceList';
import CreateInsuranceForm from '../widgets/insurance/CreateInsuranceForm';
import { Fragment, useEffect } from 'react';
import AppBarWithBackButton from '../widgets/commons/AppBarWithBackButton';
import { Button, Container } from '@material-ui/core';
import Loading from '../widgets/commons/Loading';
import { useInsurances } from '../hooks/useInsurances';

const InsurancePage = () => {  
    const {
        filter, 
        status,
        initInsurances,
        onClickChangeFilterButton, 
    } = useInsurances();

    useEffect(() => {
        initInsurances();
        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <AppBarWithBackButton title={"Insurances"} />
            <Container>
                <InsuranceList />
                <CreateInsuranceForm />
                <div>
                    <p>{JSON.stringify(filter, undefined, 3)}</p>
                    <Button fullWidth onClick={onClickChangeFilterButton}>Cambiar Filtro</Button>
                </div>
                <Loading status={status} />
            </Container>
        </Fragment>
    );
}

export default InsurancePage;