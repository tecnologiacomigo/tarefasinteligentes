import React, { useState } from 'react';
    import { Title, Button, TextInput, Textarea, Stack, Card, Text, Group, Badge } from '@mantine/core';

    function TaskList() {
      const [tasks, setTasks] = useState([]);
      const [newTask, setNewTask] = useState({ name: '', context: '' });

      const addTask = async () => {
        // Simulating API call
        const importance = Math.floor(Math.random() * 10) + 1;
        const task = { ...newTask, id: Date.now(), importance, completed: false };
        setTasks([...tasks, task]);
        setNewTask({ name: '', context: '' });
      };

      return (
        <div>
          <Title order={2} mb="md">Gerenciar Tarefas</Title>
          <Stack spacing="md">
            <TextInput
              placeholder="Nome da Tarefa"
              value={newTask.name}
              onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
            />
            <Textarea
              placeholder="Contexto da Tarefa"
              value={newTask.context}
              onChange={(e) => setNewTask({ ...newTask, context: e.target.value })}
            />
            <Button onClick={addTask}>Adicionar Tarefa</Button>
          </Stack>
          <Stack mt="xl">
            {tasks.map(task => (
              <Card key={task.id} shadow="sm" p="lg">
                <Group position="apart">
                  <Text weight={500}>{task.name}</Text>
                  <Badge color={task.importance > 5 ? "red" : "blue"}>
                    Importância: {task.importance}
                  </Badge>
                </Group>
                <Text size="sm" mt="sm">{task.context}</Text>
              </Card>
            ))}
          </Stack>
        </div>
      );
    }

    export default TaskList;
