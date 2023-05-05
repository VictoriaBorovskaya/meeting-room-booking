import Form from 'components/Form';
import {
  AppContainer,
  FormContainer,
  FormInfo,
  FormTitle,
  FormDescription,
} from 'components/StyledComponents';

function App() {
  return (
    <AppContainer>
      <FormContainer>
        <FormInfo>
          <FormTitle>Экономьте время, бронируя переговорную не отходя от устройства.</FormTitle>
          <FormDescription>
            Заполните форму - и мы закрепим за Вами выбранное помещение.
          </FormDescription>
        </FormInfo>
        <Form />
      </FormContainer>
    </AppContainer>
  );
}

export default App;
