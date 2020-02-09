import styled from '@emotion/styled';
import Row from 'react-bootstrap/Row';

export const StyledCommentsList = styled(Row)`
  .alert {
    position: fixed;
    z-index: 1000;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 400px;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;
