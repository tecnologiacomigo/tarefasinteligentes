import React, { useState } from 'react';
    import { Title, TextInput, Textarea, Button, Stack } from '@mantine/core';

    function Settings() {
      const [settings, setSettings] = useState({
        shortTermGoals: '',
        longTermGoals: '',
        jobDescription: ''
      });

      const handleChange = (e) => {
        setSettings({ ...settings, [e.target.name]: e.target.value });
      };

      const saveSettings = () => {
        // Aqui você implementaria a lógica para salvar as configurações
        console.log('Configurações salvas:', settings);
      };

      return (
        <div>
          <Title order={2} mb="md">Configurações</Title>
          <Stack spacing="md">
            <TextInput
              label="Objetivos de Curto Prazo"
              name="shortTermGoals"
              value={settings.shortTermGoals}
              onChange={handleChange}
            />
            <TextInput
              label="Objetivos de Longo Prazo"
              name="longTermGoals"
              value={settings.longTermGoals}
              onChange={handleChange}
            />
            <Textarea
              label="Descrição do Trabalho"
              name="jobDescription"
              value={settings.jobDescription}
              onChange={handleChange}
            />
            <Button onClick={saveSettings}>Salvar Configurações</Button>
          </Stack>
        </div>
      );
    }

    export default Settings;
