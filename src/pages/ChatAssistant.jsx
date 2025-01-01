import React, { useState } from 'react';
    import { Title, TextInput, Button, Stack, Card, Text } from '@mantine/core';

    function ChatAssistant() {
      const [messages, setMessages] = useState([]);
      const [input, setInput] = useState('');

      const sendMessage = async () => {
        if (input.trim() === '') return;

        // Simulating API call
        const response = "Esta é uma resposta simulada do assistente.";
        setMessages([...messages, { text: input, sender: 'user' }, { text: response, sender: 'assistant' }]);
        setInput('');
      };

      return (
        <div>
          <Title order={2} mb="md">Assistente de Chat</Title>
          <Stack spacing="md">
            {messages.map((message, index) => (
              <Card key={index} shadow="sm" p="sm" style={{ alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                <Text>{message.text}</Text>
              </Card>
            ))}
          </Stack>
          <Group mt="xl">
            <TextInput
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ flex: 1 }}
            />
            <Button onClick={sendMessage}>Enviar</Button>
          </Group>
        </div>
      );
    }

    export default ChatAssistant;
