import { Insurance } from '../../../domain/Insurance';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../config/store';
import { fetchInsurances, createInsurance, deleteInsurance } from './insuranceThunks';

export interface InsuranceFilter {
    query: string,
    offset: number,
    limit: number
}

export interface InsuranceState {
    insurances: Insurance[]
    filter: InsuranceFilter,
    status: 'loading' | 'ready'
}

const initialState: InsuranceState = {
    insurances: [],
    filter: {
        query: '',
        offset: 0,
        limit: 50
    },
    status: 'ready'
};

const insuranceSlice = createSlice({
    name: 'insurance',
    initialState,
    reducers: {
        changeFilter: (state: InsuranceState, action: PayloadAction<InsuranceFilter>) => {
            state.filter = action.payload;
        }
    }, extraReducers: (builder) => {
        // Fetch Insurances
        builder.addCase(fetchInsurances.pending, (state: InsuranceState) => {
            state.status = 'loading';
        }).addCase(fetchInsurances.fulfilled, (state: InsuranceState, action: PayloadAction<Insurance[]>) => {
            state.status = 'ready';
            state.insurances = action.payload;            
        }).addCase(createInsurance.pending, (state: InsuranceState) => {
            state.status = 'loading';
        }).addCase(createInsurance.fulfilled, (state: InsuranceState, action: PayloadAction<Insurance>) => {
            state.status = 'ready';
            state.insurances.push(action.payload);
        }).addCase(deleteInsurance.pending, (state: InsuranceState) => {
            state.status = 'loading';
        }).addCase(deleteInsurance.fulfilled, (state: InsuranceState, action: PayloadAction<Insurance>) => {
            state.status = 'ready';
            state.insurances = state.insurances.filter(insurance => insurance.id !== action.payload.id);
        });
    }
});

const getInsurances = (state: RootState) => state['insurance'].insurances;
const getFilter = (state: RootState) => state['insurance'].filter;
const getStatus = (state: RootState) => state['insurance'].status;

const { changeFilter } = insuranceSlice.actions;

export { 
    getFilter, 
    getInsurances,
    getStatus, 
    changeFilter
};

export default insuranceSlice.reducer;