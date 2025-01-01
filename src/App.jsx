import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import { AppShell, Navbar, Header } from '@mantine/core';
    import Navigation from './components/Navigation';
    import Dashboard from './pages/Dashboard';
    import TaskList from './pages/TaskList';
    import ChatAssistant from './pages/ChatAssistant';
    import Settings from './pages/Settings';

    function App() {
      return (
        <AppShell
          padding="md"
          navbar={<Navbar width={{ base: 300 }} p="xs"><Navigation /></Navbar>}
          header={<Header height={60} p="xs">Vectal.ai</Header>}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/chat" element={<ChatAssistant />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </AppShell>
      );
    }

    export default App;
