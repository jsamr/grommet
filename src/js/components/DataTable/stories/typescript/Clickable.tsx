import React from 'react';

import { Grommet, Box, Button, DataTable, Layer, Meter, Text } from 'grommet';
import { grommet } from 'grommet/themes';

import { ColumnConfig } from '../..';

// This story uses TypeScript
const amountFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

// Type annotations can only be used in TypeScript files.
// Remove ': ColumnConfig<RowType>[]' if you are not using TypeScript.
const columns: ColumnConfig<RowType>[] = [
  {
    property: 'name',
    header: <Text>Name with extra</Text>,
    primary: true,
    footer: 'Total',
  },
  {
    property: 'location',
    header: 'Location',
  },
  {
    property: 'date',
    header: 'Date',
    render: (datum) =>
      datum.date && new Date(datum.date).toLocaleDateString('en-US'),
    align: 'end',
  },
  {
    property: 'percent',
    header: 'Percent Complete',
    render: (datum) => (
      <Box pad={{ vertical: 'xsmall' }}>
        <Meter
          values={[{ value: datum.percent }]}
          thickness="small"
          size="small"
        />
      </Box>
    ),
  },
  {
    property: 'paid',
    header: 'Paid',
    render: (datum) => amountFormatter.format(datum.paid / 100),
    align: 'end',
    aggregate: 'sum',
    footer: { aggregate: true },
  },
];

const locations = ['Boise', 'Fort Collins', 'Bay Area', 'Houston'];

const data = [];

for (let i = 0; i < 40; i += 1) {
  data.push({
    name: `Name ${i + 1}`,
    location: locations[i % locations.length],
    date: `2018-07-${(i % 30) + 1}`,
    percent: (i % 11) * 10,
    paid: ((i + 1) * 17) % 1000,
  });
}

// 'interface' declarations can only be used in TypeScript files.
// Remove ': 'interface RowType' if you are not using Typescript.
interface RowType {
  name: string;
  location: string;
  date: string;
  percent: number;
  paid: number;
}

// Type annotations can only be used in TypeScript files.
// Remove ': RowType[]' if you are not using TypeScript.
const DATA: RowType[] = [
  {
    name: 'Shimi',
    location: '',
    date: '',
    percent: 0,
    paid: 0,
  },
  {
    name: 'Bryan',
    location: 'Fort Collins',
    date: '2018-06-10',
    percent: 30,
    paid: 1234,
  },
  {
    name: 'Chris',
    location: 'Bay Area',
    date: '2018-06-09',
    percent: 40,
    paid: 2345,
  },
  {
    name: 'Eric',
    location: 'Bay Area',
    date: '2018-06-11',
    percent: 80,
    paid: 3456,
  },
  {
    name: 'Matt',
    location: 'Fort Collins',
    date: '2018-06-10',
    percent: 60,
    paid: 1234,
  },
  {
    name: 'Taylor',
    location: 'Bay Area',
    date: '2018-06-09',
    percent: 40,
    paid: 3456,
  },
  {
    name: 'Mike',
    location: 'Boise',
    date: '2018-06-11',
    percent: 50,
    paid: 1234,
  },
  {
    name: 'Ian',
    location: 'Houston',
    date: '2018-06-10',
    percent: 10,
    paid: 2345,
  },
];

export const ClickableDataTable = () => {
  const [show, setShow] = React.useState(false);
  const [clicked, setClicked] = React.useState({});

  return (
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <DataTable
        columns={columns}
        data={DATA}
        step={10}
        onClickRow={(event) => {
          setShow(true);
          setClicked(event.datum);
        }}
      />
      {show && (
        <Layer
          position="center"
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
        >
          <Box margin="medium">
            <Text>{clicked && JSON.stringify(clicked, null, 2)}</Text>
            <Button
              margin={{ top: 'medium' }}
              label="close"
              onClick={() => setShow(false)}
            />
          </Box>
        </Layer>
      )}
    </Box>
    // </Grommet>
  );
};

ClickableDataTable.storyName = 'Clickable';

export default {
  title: 'Visualizations/DataTable/Clickable',
};
