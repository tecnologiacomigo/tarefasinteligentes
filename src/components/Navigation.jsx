import React from 'react';
    import { NavLink } from 'react-router-dom';
    import { Stack, Button } from '@mantine/core';
    import { IconDashboard, IconList, IconMessage, IconSettings } from '@tabler/icons-react';

    function Navigation() {
      return (
        <Stack>
          <NavLink to="/" end>
            {({ isActive }) => (
              <Button leftIcon={<IconDashboard size="1rem" />} variant={isActive ? "filled" : "light"} fullWidth>
                Dashboard
              </Button>
            )}
          </NavLink>
          <NavLink to="/tasks">
            {({ isActive }) => (
              <Button leftIcon={<IconList size="1rem" />} variant={isActive ? "filled" : "light"} fullWidth>
                Tarefas
              </Button>
            )}
          </NavLink>
          <NavLink to="/chat">
            {({ isActive }) => (
              <Button leftIcon={<IconMessage size="1rem" />} variant={isActive ? "filled" : "light"} fullWidth>
                Chat
              </Button>
            )}
          </NavLink>
          <NavLink to="/settings">
            {({ isActive }) => (
              <Button leftIcon={<IconSettings size="1rem" />} variant={isActive ? "filled" : "light"} fullWidth>
                Configurações
              </Button>
            )}
          </NavLink>
        </Stack>
      );
    }

    export default Navigation;
