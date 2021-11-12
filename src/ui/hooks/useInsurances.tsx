import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/config/hooks";
import { fetchInsurancesAction } from '../../app/actions/insuranceActions';
import { getInsurances } from "../../app/reducers/insuranceSlice";

export const useInsurances = () => {
    const insurances = useAppSelector(getInsurances);
    const dispatch = useAppDispatch();

    const _initInsurances = () => {
        dispatch(fetchInsurancesAction());
    };

    useEffect(() => {
        _initInsurances();
        // eslint-disable-next-line
    }, []);

    return {
        insurances
    };
};