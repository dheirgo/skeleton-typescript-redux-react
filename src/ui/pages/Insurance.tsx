import { useInsurances } from '../hooks/useInsurances';
import InsuranceListItem from '../widgets/InsuranceListItem';

export function Insurance() {

    const { insurances } = useInsurances();

    return (
        <div>
            {
                insurances.map(insurance => InsuranceListItem({insurance}))
            }
        </div>
    )
}