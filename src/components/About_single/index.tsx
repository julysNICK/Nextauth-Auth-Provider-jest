import * as Styled from './styles';

export type About_singleProps = {
  title?: string;
};

export const About_single = ({ title }: About_singleProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Wrapper_details>
        <Styled.Sections_name>About</Styled.Sections_name>
        <Styled.Details_movie>Titulo: velozes e furiosos</Styled.Details_movie>
        <Styled.Details_movie>Data de lançamento: 12/12/2</Styled.Details_movie>
        <Styled.Details_movie>Temporadas: 8</Styled.Details_movie>
      </Styled.Wrapper_details>
      <Styled.Wrapper_details>
        <Styled.Sections_name>About</Styled.Sections_name>
        <Styled.Paragraph_single>
          Dominic Toretto (Vin Diesel) é o líder de uma gangue de corridas de
          ruas em Los Angeles que está sendo investigado pela polícia por roubo
          de equipamentos eletrônicos. Para investigá-lo é enviado Brian OConner
          (Paul Walker), que se infiltra na gangue na intenção de descobrir se
          Toretto é realmente o autor dos crimes ou se há alguém mais por trás
          deles.
        </Styled.Paragraph_single>
      </Styled.Wrapper_details>
    </Styled.Wrapper>
  );
};
