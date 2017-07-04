import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Grid } from '../../src';

const stories = storiesOf('Grid', module);

stories.add('default', () => (
  <Grid.Row>
    <Grid.Col large={3} medium={6}>
      <div style={styles.box}>
        1
      </div>
    </Grid.Col>

    <Grid.Col large={3} medium={6}>
      <div style={styles.box}>
        2
      </div>
    </Grid.Col>

    <Grid.Col large={3} medium={6}>
      <div style={styles.box}>
        3
      </div>
    </Grid.Col>

    <Grid.Col large={3} medium={6}>
      <div style={styles.box}>
        4
      </div>
    </Grid.Col>
  </Grid.Row>
));

stories.add('using sizes', () => (
  <Grid.Row>
    <Grid.Col sizes={[12, 6, 4]}>
      <div style={styles.box}>
        1
      </div>
    </Grid.Col>
    <Grid.Col sizes={[6, 3, 4]}>
      <div style={styles.box}>
        2
      </div>
    </Grid.Col>
    <Grid.Col sizes={[6, 3, 4]}>
      <div style={styles.box}>
        3
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
