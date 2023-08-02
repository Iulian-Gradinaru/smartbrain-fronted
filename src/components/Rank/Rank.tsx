import React from 'react';

import { RankProps } from './Rank.types';

import { Container, Current, Entries } from './Rank.styles';

export const Rank: React.FC<RankProps> = (props) => {
  const { name, entries } = props;
  return (
    <Container className="Iulian">
      <Current className="center f3">
        {`${name}, your current entry count is ...`}
      </Current>
      <Entries className="center f1">{entries}</Entries>
    </Container>
  );
};
