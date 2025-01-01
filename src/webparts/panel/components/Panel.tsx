import * as React from 'react';
import styles from './Panel.module.scss';
import type { IPanelProps } from './IPanelProps';
import { Text, Panel, PrimaryButton, Stack } from '@fluentui/react';
import { useState } from 'react';

export default function PanelBase(props:IPanelProps):JSX.Element {
  const [isPanelOpen, setPanelOpen ] = useState(false);
  return (
    <section className={`${styles.panel}`}>
      <Stack>
        <Stack.Item>
          <PrimaryButton 
            text='button text'
            onClick={()=>setPanelOpen(true)}
          />
        </Stack.Item>
      </Stack>
      <Panel
        isLightDismiss
        headerText="Sample panel"
        isOpen={isPanelOpen}
        onDismiss={()=>setPanelOpen(false)}
        closeButtonAriaLabel="Close"
      >
        <Stack>
          <Stack.Item>
            <Text>Panel Content</Text>
          </Stack.Item>
        </Stack>
      </Panel>
    </section>
  );
}
