import { IconButton } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { Insurance } from "../../../domain/Insurance";
import { useAppDispatch } from '../../../app/config/hooks';
import { deleteInsurance } from '../../../app/features/insurance/insuranceThunks';

interface Props {
    insurance: Insurance
};

const InsuranceListItem = ({insurance}: Props) => {
    const dispatch = useAppDispatch();

    const onClickDeleteButton = () => {
        dispatch(deleteInsurance(insurance.id));
    }

    return (
        <div>
        <p>{insurance.name}</p>
        <IconButton onClick={onClickDeleteButton}>
            <DeleteIcon />
        </IconButton>
        </div>
    )
}

export default InsuranceListItem;