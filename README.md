# Responsiveness

Responsive style tools for ReactJS

[Demo](https://entria.github.io/responsiveness/)


# Install

```bash
npm i @entria/responsiveness --save
yarn add @entria/responsiveness
```

# Usage

You can define the sizes with their specifics props (`small`, `medium`, `large`).

```js
import React from 'react';
import { Grid } from '@entria/responsiveness';

const Example = () => (
  <Grid.Row>
    <Grid.Col large={3} medium={6}>1</Grid.Col>
    <Grid.Col large={3} medium={6}>2</Grid.Col>
    <Grid.Col large={3} medium={6}>3</Grid.Col>
    <Grid.Col large={3} medium={6}>4</Grid.Col>
  </Grid.Row>
);

export default Example;
```

Or with the `sizes` prop (The parameters is from smaller to greater breakpoints).

```js
import React from 'react';
import { Grid } from '@entria/responsiveness';

const Example = () => (
  <Grid.Row>
    <Grid.Col sizes={[12, 6, 3]}>1</Grid.Col>
    <Grid.Col sizes={[12, 6, 3]}>2</Grid.Col>
    <Grid.Col sizes={[12, 6, 3]}>3</Grid.Col>
    <Grid.Col sizes={[12, 6, 3]}>4</Grid.Col>
  </Grid.Row>
);

export default Example;
```

### Grid.Col props

- **cols**: number of columns (default: 12)
- **large**: size of the column on large devices (default: 12)
- **medium**: size of the column on medium devices (default: 12)
- **small**: size of the column on small devices (default: 12)
- **sizes**: An array containing all column sizes. (default: [12, 12, 12])
