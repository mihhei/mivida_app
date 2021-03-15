import React from 'react';
import { LinkTo } from './linkto';

export const Links = () => {
  return (
    <div className="links">
      <div className="link">Etusivu</div>
      <LinkTo linkName="Meistä" toBlock="bl1" scrollTime="1500" />
      <LinkTo linkName="Palvelut" toBlock="bl2" scrollTime="2000" />
      <LinkTo linkName="Tuotteet" toBlock="bl3" scrollTime="2500" />
      <LinkTo linkName="Lahjakortti" toBlock="bl4" scrollTime="3000" />
      <LinkTo linkName="Yhteystiedot" toBlock="bl5" scrollTime="3500" />
    </div>
  );
};
