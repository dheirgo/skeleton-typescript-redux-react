import { createInsuranceAsync, deleteInsuranceAsync, findInsurancesAsync } from "./insuranceServices";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchInsurances = createAsyncThunk(
    'insurances/fetch', 
    async() => await findInsurancesAsync()
);

export const createInsurance = createAsyncThunk(
    'insurances/create', 
    async (name: string) => await createInsuranceAsync(name)
);

export const deleteInsurance = createAsyncThunk(
    'insurances/delete', 
    async (insuranceId: string) => await deleteInsuranceAsync(insuranceId)
);