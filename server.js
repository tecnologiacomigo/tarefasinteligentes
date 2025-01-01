import express from 'express';
    import cors from 'cors';
    import { OpenAI } from 'openai';

    const app = express();
    const port = 3001;

    app.use(cors());
    app.use(express.json());

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    let tasks = [];
    let userPreferences = {
      shortTermGoals: [],
      longTermGoals: []
    };

    app.post('/api/tasks', async (req, res) => {
      const { name, context } = req.body;
      
      const prompt = `Classifique a importância desta tarefa com base nas seguintes preferências do usuário:
      Objetivos de curto prazo: ${userPreferences.shortTermGoals.join(', ')}
      Objetivos de longo prazo: ${userPreferences.longTermGoals.join(', ')}
      
      Tarefa: ${name}
      Contexto: ${context}
      
      Retorne apenas um número entre 1 e 10 representando a importância da tarefa.`;

      const importance = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
      });

      const task = {
        id: tasks.length + 1,
        name,
        context,
        importance: parseInt(importance.choices[0].message.content),
        completed: false
      };

      tasks.push(task);
      res.json(task);
    });

    app.post('/api/chat', async (req, res) => {
      const { message } = req.body;
      
      const prompt = `Você é um assistente de gerenciamento de tarefas. Aqui estão as tarefas atuais do usuário:
      ${tasks.map(t => `${t.name} (Importância: ${t.importance})`).join('\n')}
      
      Preferências do usuário:
      Objetivos de curto prazo: ${userPreferences.shortTermGoals.join(', ')}
      Objetivos de longo prazo: ${userPreferences.longTermGoals.join(', ')}
      
      Mensagem do usuário: ${message}`;

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
      });

      res.json({ response: response.choices[0].message.content });
    });

    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
