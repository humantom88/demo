import React, { ChangeEvent, useCallback, useState } from 'react';

import { Panel } from '../../components/containers/panel.styled';
import { Skills } from './components/skills';
import { CharacterClass, useCharacters } from '../../__data__/queries/character.query';
import { StyledProfileTopContainer } from './agent.styled';
import {
  StyledAgentContainer,
  StyledArmorContainer,
  StyledWeaponsContainer,
  StyledImplantsContainer,
  StyledEquipmentContainer,
  StyledStoryContainer,
  StyledAvatarContainer,
  StyledStatsContainer,
  StyledCharacterName
} from './agent.styled';
import { Image, ImageName } from '../../components/Image';

const profileTitle = 'Имя:';
const profileClass = 'Класс:';
const profileTitlePlaceholder = 'Введите имя персонажа';
const profileClassPlaceholder = 'Выберите класс персонажа';

export const Agent = () => {
  const { data } = useCharacters();
  const [selectedCharacterClass, setSelectedCharacterClass] = useState<CharacterClass | null>(null);

  const handleChangeClass = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const selectedClass = data.characters.find(
        (character) => character.id === Number(event.target.value)
      );
      setSelectedCharacterClass(selectedClass);
    },
    [data]
  );

  return (
    <StyledAgentContainer>
      <Panel>
        <form>
          <div>
            <StyledProfileTopContainer>
              <StyledAvatarContainer>
                <Image name={ImageName.fakeAvatar} />
              </StyledAvatarContainer>
              <StyledStatsContainer>
                <StyledCharacterName>
                  <h2>{profileTitle}</h2>
                  <input placeholder={profileTitlePlaceholder} name="characterName" />
                  {data && (
                    <>
                      <h2>{profileClass}</h2>
                      <select placeholder={profileTitlePlaceholder} onChange={handleChangeClass}>
                        <option value="" disabled selected>
                          {profileClassPlaceholder}
                        </option>
                        {data.characters.map((character) => (
                          <option value={character.id}>{character.name}</option>
                        ))}
                      </select>
                    </>
                  )}
                </StyledCharacterName>
                {selectedCharacterClass && <p>{selectedCharacterClass.description}</p>}
                <Skills />
              </StyledStatsContainer>
            </StyledProfileTopContainer>
          </div>
          <StyledArmorContainer>StyledArmorContainer</StyledArmorContainer>
          <StyledWeaponsContainer>StyledWeaponsContainer</StyledWeaponsContainer>
          <StyledImplantsContainer>StyledImplantsContainer</StyledImplantsContainer>
          <StyledEquipmentContainer>StyledEquipmentContainer</StyledEquipmentContainer>
          <StyledStoryContainer>StyledStoryContainer</StyledStoryContainer>
        </form>
      </Panel>
    </StyledAgentContainer>
  );
};
