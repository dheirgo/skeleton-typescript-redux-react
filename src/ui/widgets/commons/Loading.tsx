import { CircularProgress } from "@mui/material";

interface LoadingProps {
    status: string;
}

const Loading = ({status}: LoadingProps) => (
    <div>
        {
            status === 'loading' ? <CircularProgress /> : undefined
        }
    </div>
);

export default Loading;