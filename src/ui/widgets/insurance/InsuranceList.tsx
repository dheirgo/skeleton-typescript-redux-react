import { useInsurances } from '../../hooks/useInsurances';
import { Insurance } from '../../../domain/Insurance';
import IconButton from '@mui/material/IconButton';
import { Delete as DeleteIcon } from '@mui/icons-material';


export function InsuranceList() {

    const { insurances, onClickDeleteInsurance } = useInsurances();

    return (
        <div>
            {
                insurances.map(insurance => 
                    _InsuranceListItem({insurance: insurance, onClickDeleteButton: onClickDeleteInsurance})
                )
            }
        </div>
    )
}

interface _InsuranceListItemProps {
    insurance: Insurance,
    onClickDeleteButton: (insuranceId: string) => void
}

const _InsuranceListItem = ({insurance, onClickDeleteButton}: _InsuranceListItemProps) => {
    return (
        <div key={insurance.id}>
        <p>{insurance.name}</p>
        <IconButton onClick={() => onClickDeleteButton(insurance.id)}>
            <DeleteIcon />
        </IconButton>
        </div>
    )
}
