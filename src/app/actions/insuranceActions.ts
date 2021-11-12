import { createInsuranceAsync, deleteInsuranceAsync, findInsurancesAsync } from "../../net/services/insuranceServices";
import { Insurance } from '../../domain/Insurance';
import { addInsurance, changeInsurances, deleteInsurance } from "../reducers/insuranceSlice";
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

export function deleteInsuranceAction(insuranceId: string) {
    return async (dispatch: Dispatch) => {
        const deletedInsurance: Insurance = await deleteInsuranceAsync(insuranceId);
        dispatch(deleteInsurance(deletedInsurance.id));
    }
}