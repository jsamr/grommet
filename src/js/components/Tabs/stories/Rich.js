import React from 'react';
import PropTypes from 'prop-types';

import { Box, FormField, Tab, Tabs, Text, TextInput } from 'grommet';
import { CircleInformation, Currency } from 'grommet-icons';

const RichTabs = () => (
  // Uncomment <Grommet> lines when using outside of storybook
  // <Grommet theme={...}>
  <Tabs>
    <Tab
      title={
        <RichTabTitle
          icon={<CircleInformation color="accent-2" />}
          label="Personal Data"
        />
      }
    >
      <FormField label="Name">
        <TextInput placeholder="Enter your name..." />
      </FormField>
    </Tab>
    <Tab
      title={
        <RichTabTitle icon={<Currency color="neutral-2" />} label="Payment" />
      }
    >
      <FormField label="Card Number">
        <TextInput placeholder="Enter your card number..." />
      </FormField>
    </Tab>
  </Tabs>
  // </Grommet>
);

const RichTabTitle = ({ icon, label }) => (
  <Box direction="row" align="center" gap="xsmall" margin="xsmall">
    {icon}
    <Text size="small">
      <strong>{label}</strong>
    </Text>
  </Box>
);

RichTabTitle.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export const Rich = () => <RichTabs />;

export default {
  title: 'Controls/Tabs/Rich',
};
