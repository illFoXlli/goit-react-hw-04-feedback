import Statistics from './Statistics';
import { Box } from './Box';

export const App = () => {
  return (
    <Box
      width="800px"
      height="300px"
      bg="tomato"
      m="auto"
      mt="50px"
      borderRadius={8}
    >
      <Statistics
        valueGood={0}
        valueNeutral={0}
        valueBad={0}
        valueTotal={0}
        valuePositive={0}
      />
    </Box>
  );
};
