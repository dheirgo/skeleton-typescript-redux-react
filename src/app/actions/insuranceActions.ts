import { createInsuranceAsync, findInsurancesAsync } from "../../net/services/insuranceServices";
import { Insurance } from '../../domain/Insurance';
import { addInsurance, changeInsurances } from "../reducers/insuranceSlice";
import { Dispatch } from "redux";

export function fetchInsurancesAction() {
    return async (dispatch: Dispatch) => {
        const insurances: Insurance[] = await findInsurancesAsync();
        dispatch(changeInsurances(insurances));
    }
}

export function createInsuranceAction(name: string) {
    return async (dispatch: Dispatch) => {
        const newInsurance: Insurance = await createInsuranceAsync(name);
        dispatch(addInsurance(newInsurance));
    }
}