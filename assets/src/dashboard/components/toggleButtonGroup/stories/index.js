/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */
import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import ToggleButtonGroup from '../';
import { STORY_STATUSES } from '../../../constants';

export default {
  title: 'Dashboard/Components/ToggleButtonGroup',
  component: ToggleButtonGroup,
};

const Container = styled.div`
  height: 60px;
`;

export const _default = () => {
  const [status, setStatus] = useState(STORY_STATUSES[0].value);
  return (
    <Container>
      <ToggleButtonGroup
        buttons={STORY_STATUSES.map((storyStatus) => {
          return {
            handleClick: () => {
              setStatus(storyStatus.value);
              action('button clicked ', storyStatus.value);
            },
            key: storyStatus.value,
            isActive: status === storyStatus.value,
            disabled: storyStatus.status === 'publish',
            text: storyStatus.label,
          };
        })}
      />
    </Container>
  );
};