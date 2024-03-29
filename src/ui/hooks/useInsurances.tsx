import { useAppDispatch, useAppSelector } from "../../app/config/hooks";
import { deleteInsurance, fetchInsurances } from '../../app/features/insurance/insuranceThunks';
import { changeFilter, getFilter, getInsurances, getStatus, InsuranceFilter } from "../../app/features/insurance/insuranceSlice";

export const useInsurances = () => {
    const insurances = useAppSelector(getInsurances);
    const dispatch = useAppDispatch();

    const filter: InsuranceFilter = useAppSelector(getFilter);
    const status: string = useAppSelector(getStatus);

    const initInsurances = () => {
        dispatch(fetchInsurances());
    };

    const onClickDeleteInsurance = (insuranceId: string) => {
        dispatch(deleteInsurance(insuranceId));
    }

    const onClickChangeFilterButton = () => {
        dispatch(changeFilter({
            query: 'cambiando',
            offset: 10,
            limit: 40
        }));
    } 

    return {
        filter,
        insurances,
        status,
        initInsurances,
        onClickChangeFilterButton,
        onClickDeleteInsurance
    };
};