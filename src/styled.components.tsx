import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1110px;
  margin: 0 auto;
`;

export const ImageContainer = styled.div<{
  width: string;
  height: string;
}>`
  max-width: ${({ width }) => width};
  max-height: ${({ height }) => height};
`;
