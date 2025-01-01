import React from 'react';
    import { Title, Grid, Card, Text } from '@mantine/core';

    function Dashboard() {
      return (
        <div>
          <Title order={2} mb="md">Dashboard</Title>
          <Grid>
            <Grid.Col span={4}>
              <Card shadow="sm" p="lg">
                <Text weight={500}>Tarefas Pendentes</Text>
                <Text size="xl" weight={700}>5</Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={4}>
              <Card shadow="sm" p="lg">
                <Text weight={500}>Tarefas Concluídas</Text>
                <Text size="xl" weight={700}>12</Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={4}>
              <Card shadow="sm" p="lg">
                <Text weight={500}>Produtividade</Text>
                <Text size="xl" weight={700}>85%</Text>
              </Card>
            </Grid.Col>
          </Grid>
        </div>
      );
    }

    export default Dashboard;
