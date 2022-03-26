import React from 'react';
import { StyledSkillsContainer } from './skills.styled';

export interface Stats {
  intelligence: number;
  reflexes: number;
  agility: number;
  technics: number;
  will: number;
  luck: number;
  movement: number;
  body: number;
  emp: number;
}

const defaultStats: Stats = {
  intelligence: Math.round(Math.random() * 10),
  reflexes: Math.round(Math.random() * 10),
  agility: Math.round(Math.random() * 10),
  technics: Math.round(Math.random() * 10),
  will: Math.round(Math.random() * 10),
  luck: Math.round(Math.random() * 10),
  movement: Math.round(Math.random() * 10),
  body: Math.round(Math.random() * 10),
  emp: Math.round(Math.random() * 10)
};

export const Skills = ({ stats = defaultStats }: { stats?: Stats }) => (
  <StyledSkillsContainer>
    {stats &&
      Object.entries(stats).map(([key, value]) => (
        <div key={key}>
          <label htmlFor={key}>{key.toUpperCase()}</label>:
          <input name={key} value={value} />
        </div>
      ))}
  </StyledSkillsContainer>
);
