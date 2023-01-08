import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {FC} from "react";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type Props = {
    result: number,
    open: boolean,
    setOpen: (b: boolean) => void,
}

export const ResultsModal: FC<Props> = (props: Props) => {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => props.setOpen(true);
    const handleClose = () => props.setOpen(false);

    return (
        <div>
            {/*<Button onClick={handleOpen}>Open modal</Button>*/}
            <Modal
                open={props.open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Výsledok
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Váš výsledok je {props.result}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
