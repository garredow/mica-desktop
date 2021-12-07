import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { SettingsProvider } from '../contexts/SettingsProvider';
import { Home } from '../routes/Home';
import styles from './App.module.css';
import { Sidebar } from './Sidebar';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 600000,
    },
  },
});

export function AppWrapper(): JSX.Element {
  return (
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </QueryClientProvider>
    </HashRouter>
  );
}

export function App(): JSX.Element {
  return (
    <div className={styles.root}>
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);
