import React from 'react';

/**
 * Imports styles
 */
import { Container, Current, Entries } from './Rank.styles';

/**
 * Imports types
 */
import { RankProps } from './Rank.types';

/**
 * Displays the component
 */
export const Rank: React.FC<RankProps> = (props) => {
  const { name, entries } = props;
  return (
    <Container>
      <Current className="center f3">
        {`${name}, your current entry count is ...`}
      </Current>
      <Entries className="center f1">{entries}</Entries>
    </Container>
  );
};
