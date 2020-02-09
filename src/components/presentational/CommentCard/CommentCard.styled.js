import styled from '@emotion/styled';

export const StyledCommentCard = styled.div`
  height: 100%;
  padding: 0 0 30px;

  .card {
    height: 100%;

    &-body {
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
    }

    &-title {
      margin: 0 0 .5rem;
      font-size: 1rem;
    }

    &-subtitle {
      margin: 0 0 auto;
      font-size: .875rem;
      font-style: italic;
    }

    &-text {
      margin: 2rem 0;
    }
  }
`;
