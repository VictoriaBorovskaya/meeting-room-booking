import { ButtonContainer } from 'components/StyledComponents';
import Button from '@mui/material/Button';

const ButtonComponent = ({ clearForm }) => {
  return (
    <ButtonContainer>
      <Button variant="contained" size="large" fullWidth type="submit">
        Отправить
      </Button>
      <Button variant="contained" size="large" onClick={() => clearForm()} fullWidth>
        Очистить
      </Button>
    </ButtonContainer>
  );
};

export default ButtonComponent;
