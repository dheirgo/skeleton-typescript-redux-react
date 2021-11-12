import { useInsurances } from '../hooks/useInsurances';

export function Insurance() {

    const { insurances } = useInsurances();

    return (
        <div>
            {
                insurances.map(insurance => (<p>{insurance.name}</p>))
            }
        </div>
    )
}