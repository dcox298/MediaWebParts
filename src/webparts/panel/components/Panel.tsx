import * as React from 'react';
import styles from './Panel.module.scss';
import type { IPanelProps } from './IPanelProps';
import { PrimaryButton, Stack } from '@fluentui/react';

export default function PanelBase(props:IPanelProps):JSX.Element {
  return (
    <section className={`${styles.panel}`}>
      <Stack>
        <Stack.Item>
          <PrimaryButton 
            text='button text'
          />
        </Stack.Item>
      </Stack>
    </section>
  );
}
