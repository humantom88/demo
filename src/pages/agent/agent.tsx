import React, { ChangeEvent, useCallback, useState } from 'react';

import { Panel } from '../../components/containers/panel.styled';
import { CharacterClass, useCharacters } from '../../__data__/queries/character.query';
import { Image, ImageName } from '../../components/Image';
import { StyledAgentForm } from './agent.styled';
import { StyledAgentContainer, StyledAvatarContainer, StyledCharacterName } from './agent.styled';

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
        <StyledAvatarContainer>
          <Image name={ImageName.fakeAvatar} />
        </StyledAvatarContainer>
        <form>
          <StyledAgentForm>
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
            <div>⚄</div>
          </StyledAgentForm>
        </form>
      </Panel>
    </StyledAgentContainer>
  );
};
