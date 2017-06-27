import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Grid } from '../../src';

const stories = storiesOf('Sizes', module);

stories.add('Using sizes', () => (
  <Grid.Row>
    <Grid.Col sizes={[12, 6]}>
      <div style={styles.box}>
        1
      </div>
    </Grid.Col>
    <Grid.Col sizes={[6, 3]}>
      <div style={styles.box}>
        1
      </div>
    </Grid.Col>
    <Grid.Col sizes={[6, 3]}>
      <div style={styles.box}>
        1
      </div>
    </Grid.Col>
  </Grid.Row>
));

const styles = {
  box: {
    padding: 10,
    border: '1px solid #000',
    textAlign: 'center',
  },
};
