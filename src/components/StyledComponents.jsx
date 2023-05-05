import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  height: 100vh;
`;

export const FormContainer = styled.div`
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  margin: auto;
  height: 100%;
  padding: 0 10px;

  @media (max-width: 1024px) {
    padding: 0px 10px;
    gap: 50px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 40px 0;
  }
`;

export const FormInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 80%;
    text-align: center;
  }
`;

export const FormTitle = styled.h1`
  font-weight: 400;
  font-size: 50px;
  line-height: 1.1em;
  font-weight: 500;
  margin-bottom: 18px;

  @media (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }

  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

export const FormDescription = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.5em;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
    padding-bottom: 40px;
  }
`;

export const DatePickerContainer = styled.div`
    width: 100%:
`;
