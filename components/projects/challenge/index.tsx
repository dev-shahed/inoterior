import { Container, Typography } from '@mui/material';
import { Description } from 'components/common/Title';
import React from 'react';

interface Props {
  challenge: string;
}

export default function Challenge({ challenge }: Props) {
  if (!challenge) {
    challenge =
      'Amet cillum ea fugiat eiusmod duis incididunt esse fugiat ipsum. Esse dolore qui ad cillum cupidatat id proident magna enim officia. Sit mollit mollit sit dolore adipisicing. Ipsum quis eiusmod esse cillum excepteur irure. Qui labore labore quis do ex amet. Esse nostrud nulla non voluptate enim proident eiusmod eiusmod labore. Anim proident eu cillum aute reprehenderit non irure ullamco commodo ea eiusmod ipsum ad excepteur. Veniam culpa qui enim aliquip dolor duis aliqua incididunt eiusmod cillum pariatur. Pariatur labore ipsum enim aliqua minim duis id laborum est aute aliqua occaecat exercitation. Officia commodo do nostrud cillum cillum mollit ullamco et officia aliqua ea. Velit incididunt commodo dolore mollit. Consectetur culpa nulla exercitation sint excepteur nostrud dolor cillum tempor proident ipsum. Elit aliquip ea est ad nostrud incididunt in minim cupidatat ullamco ut excepteur. Exercitation ea nisi aliquip esse do elit consequat irure culpa eu exercitation quis sint. Magna voluptate occaecat excepteur ex aliquip tempor laborum non. Magna labore occaecat officia nostrud minim excepteur ea. Do elit ipsum qui adipisicing ea cillum est ipsum velit aliqua.';
  }
  return (
    <>
      <Container sx={{ my: 3 }}>
        <Typography fontWeight="500" variant="h4">
          Project Challenges
        </Typography>
        <Description>
          <div dangerouslySetInnerHTML={{ __html: challenge }} />
        </Description>
      </Container>
    </>
  );
}
