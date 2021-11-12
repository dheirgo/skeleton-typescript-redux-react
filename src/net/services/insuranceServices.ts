import { getRequest, postRequest } from "../http";
import { Insurance } from "../../domain/Insurance";

export async function findInsurancesAsync(): Promise<Insurance[]> {
    const response: any[] = await getRequest('/insurances');
    return response.map(insuranceJson => Insurance.fromJson(insuranceJson));
}

export async function createInsuranceAsync(name: string): Promise<Insurance> {
    return Insurance.fromJson(await postRequest('/insurances', {name}));
}