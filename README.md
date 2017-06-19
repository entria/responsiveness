# Responsiveness

Responsive style tools for ReactJS

[Demo](https://entria.github.io/responsiveness/)


# Install

`npm install responsiveness --save` or `yarn add responsiveness`

# Usage

```js
import React from 'react';
import { Grid } from 'responsiveness';

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

### Grid.Col props

- **cols**: number of columns (default: 12)
- **large**: size of the column on large devices (default: 12)
- **medium**: size of the column on medium devices (default: 12)
- **small**: size of the column on small devices (default: 12)