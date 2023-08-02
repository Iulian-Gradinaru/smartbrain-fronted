import React from 'react';

import { RankProps } from './Rank.types';

export const Rank: React.FC<RankProps> = ({ name, entries }) => {
  return (
    <div className="Iulian">
      <div className="center white f3">
        {`${name}, your current entry count is ...`}
      </div>
      <div className="center white f1">{entries}</div>
    </div>
  );
};
