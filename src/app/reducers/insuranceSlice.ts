import { Insurance } from '../../domain/Insurance';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/config/store';

export interface InsuranceState {
    insurances: Insurance[];
}

const initialState: InsuranceState = {
    insurances: []
};

const insuranceSlice = createSlice({
    name: 'insurance',
    initialState,
    reducers: {
        changeInsurances: (state, action: PayloadAction<Insurance[]>) => {
            state.insurances = action.payload;
        },

        addInsurance: (state: InsuranceState, action: PayloadAction<Insurance>) => {
            state.insurances.push(action.payload);
        },

        deleteInsurance: (state: InsuranceState, action: PayloadAction<string>) => {
            state.insurances = state.insurances.filter(insurance => insurance.id !== action.payload);
        }
    }
});

const getInsurances = (state: RootState) => state['insurance'].insurances;

const { changeInsurances, addInsurance, deleteInsurance } = insuranceSlice.actions;

export { getInsurances, changeInsurances, addInsurance, deleteInsurance };

export default insuranceSlice.reducer;