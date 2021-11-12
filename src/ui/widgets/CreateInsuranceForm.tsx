import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useAppDispatch } from '../../app/config/hooks';
import { createInsuranceAction } from '../../app/actions/insuranceActions';
import { Formik } from 'formik';
import * as Yup from 'yup';

const CreateInsuranceForm = () => {
    const dispatch = useAppDispatch();

    const createInsuranceSchema = Yup.object({
        name: Yup.string().trim().min(4, 'Debe de tener al menos 4 caracteres').required('Debes introducir un nombre válido'),
    })

    return (
        <div>
            <Formik
                initialValues = {{
                    name: ''
                }}
                validationSchema={
                    createInsuranceSchema
                }
                onSubmit={(values, { resetForm }) => {
                    const form = createInsuranceSchema.cast(values);
                    if (form.name !== undefined) {
                        dispatch(createInsuranceAction(form.name));
                        resetForm();
                    }
                }}
            >
                {
                    props => (
                        <form
                        onSubmit={props.handleSubmit}
                    >
                        <TextField
                            key="name"
                            id="name"
                            fullWidth
                            color="secondary"
                            label="Nombre de la Aseguradora"
                            variant="outlined"
                            {...props.getFieldProps('name')}
                            helperText={props.touched.name && props.errors.name}
                            error={props.touched.name && props.errors.name !== undefined}
                        />

                        <br />

                        <Button fullWidth variant="contained" type="submit">Create Insurance</Button>

                        </form>
                    )
                }
            </Formik>
        </div>
    );
}

export default CreateInsuranceForm;