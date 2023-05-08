import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Modal = ({ isBooking, setIsBooking, clearForm, tower, floor, room, startDate, startTime, endTime }) => {
  const closeModal = () => {
    setIsBooking(false);
    clearForm();
  };

  return (
    <>
      <Dialog
        open={isBooking}
        onClose={() => closeModal()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{'Переговорная успешно забронирована'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вами забронирована переговорная №{room || ''} в {tower.replace(/Б/, 'б').replace(/я/, 'е')} на {floor} этаже
            на {format(startDate, 'dd MMMM yyyy', { locale: ru })} c{' '}
            {startTime === null ? 0 : startTime.toLocaleTimeString().slice(0, 5)} до{' '}
            {endTime === null ? 0 : endTime.toLocaleTimeString().slice(0, 5)}
            {'.'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => closeModal()}>
            Ок
          </Button>
        </DialogActions>
      </Dialog>
    </>
    // </Tooltip>
  );
};
export default Modal;
