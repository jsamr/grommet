import React, { useState } from 'react';

import { Box, Button, Nav, Text } from 'grommet';

const SidebarButton = ({ label, ...rest }) => (
  <Button plain {...rest}>
    {({ hover }) => (
      <Box
        background={hover ? 'accent-1' : undefined}
        pad={{ horizontal: 'large', vertical: 'medium' }}
      >
        <Text size="large">{label}</Text>
      </Box>
    )}
  </Button>
);

const SidebarNav = () => {
  const [active, setActive] = useState();
  return (
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={grommet}>
    <Box fill direction="row">
      <Nav background="neutral-1">
        {['Dashboard', 'Devices', 'Settings'].map((label) => (
          <SidebarButton
            key={label}
            label={label}
            active={label === active}
            onClick={() => setActive(label)}
          />
        ))}
      </Nav>
    </Box>
    // </Grommet>
  );
};

export const Sidebar = () => <SidebarNav />;

Sidebar.args = {
  full: true,
};

export default {
  title: 'Controls/Nav/Sidebar',
};
