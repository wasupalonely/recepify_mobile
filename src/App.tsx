import './../gesture-handler';

import React from 'react';

import MainAppNavigator from './presentation/routes/MainAppNavigator';
import {ThemeContextProvider} from './presentation/context/ThemeContext';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <MainAppNavigator />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
};

export default App;
