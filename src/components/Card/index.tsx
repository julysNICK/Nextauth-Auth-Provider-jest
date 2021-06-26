import * as Styled from './styles';
import Link from 'next/link';
export type CardProps = {
  Levelcolor?: number;
  imageCard: string;
  titleMovie?: string;
};

export const Card = ({ Levelcolor, imageCard, titleMovie }: CardProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Image_card src={`${imageCard}`} />
      <Styled.Wrapper_avaliation>
        <Styled.Title>
          <Styled.LINK_NEXT href="#">
            <Styled.Title_link href="#">{titleMovie}</Styled.Title_link>
          </Styled.LINK_NEXT>
        </Styled.Title>
        <Styled.Avaliation>IMDB: {Levelcolor}</Styled.Avaliation>
      </Styled.Wrapper_avaliation>
    </Styled.Wrapper>
  );
};
