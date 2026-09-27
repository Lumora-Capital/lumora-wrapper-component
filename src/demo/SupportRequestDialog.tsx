import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	MenuItem,
	Stack,
	TextField
} from '@mui/material';

/** Stand-in for the host app's existing "submit a support request" popup. */
const SupportRequestDialog = ({
	open,
	onClose
}: {
	open: boolean;
	onClose: () => void;
}) => (
	<Dialog open={open} onClose={onClose} fullWidth maxWidth='sm'>
		<DialogTitle>Submit a request</DialogTitle>
		<DialogContent>
			<Stack spacing={2} sx={{ pt: 1 }}>
				<TextField
					select
					label='Type'
					defaultValue='question'
					fullWidth
				>
					<MenuItem value='question'>Question</MenuItem>
					<MenuItem value='bug'>Something is broken</MenuItem>
					<MenuItem value='access'>Access request</MenuItem>
				</TextField>
				<TextField label='Subject' fullWidth />
				<TextField label='Details' fullWidth multiline minRows={4} />
			</Stack>
		</DialogContent>
		<DialogActions>
			<Button onClick={onClose}>Cancel</Button>
			<Button variant='contained' disableElevation onClick={onClose}>
				Submit
			</Button>
		</DialogActions>
	</Dialog>
);

export default SupportRequestDialog;
