import React from 'react';

import { grommet, Box, Button, Grommet, Text, Tip } from 'grommet';

export const Children = () => (
  // Uncomment <Grommet> lines when using outside of storybook
  // <Grommet theme={...}>
  <Box align="center" pad="xlarge" gap="xlarge" fill>
    <Text>Tooltip will be displayed once hovering on the Tip child</Text>
    <Tip
      content={
        <Box align="center">
          <Text>Hello</Text>
        </Box>
      }
    >
      String Child
    </Tip>
    <Tip
      plain
      dropProps={{ align: { right: 'left' } }}
      content={
        <Box
          animation="slideLeft"
          align="center"
          background="light-4"
          round={{ size: 'medium', corner: 'left' }}
          pad="small"
          margin="small"
        >
          <Text color="brand">Tooltip</Text>
        </Box>
      }
    >
      <Box background="brand" pad="small" flex={false}>
        Box Child
      </Box>
    </Tip>
    <Tip
      plain
      dropProps={{ align: { left: 'right' } }}
      content={
        <Box
          align="center"
          background="accent-1"
          margin="xsmall"
          pad="xsmall"
          round="medium"
          flex={false}
        >
          <Text color="brand">Tooltip</Text>
        </Box>
      }
    >
      <Button label="Button Child" />
    </Tip>
  </Box>
  // </Grommet>
);

Children.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Controls/Tip/Children',
};
