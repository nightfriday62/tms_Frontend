import { useState } from 'react';
import './Tasks.css';

type Priority = 'Low' | 'Medium' | 'High';
type Status = 'To Do' | 'In Progress' | 'Done';

interface Task {
  id: number;
  title: string;
  priority: Priority;
  status: Status;
}

const SAMPLE_TASKS: Task[] = [
  { id: 1, title: 'Set up project repository', priority: 'High', status: 'Done' },
  { id: 2, title: 'Design database schema', priority: 'High', status: 'In Progress' },
  { id: 3, title: 'Build REST API endpoints', priority: 'Medium', status: 'To Do' },
  { id: 4, title: 'Write unit tests', priority: 'Medium', status: 'To Do' },
  { id: 5, title: 'Create deployment pipeline', priority: 'Low', status: 'To Do' },
];

const PRIORITY_COLOR: Record<Priority, string> = {
  Low: '#22c55e',
  Medium: '#f59e0b',
  High: '#ef4444',
};

function Tasks() {
  const [tasks] = useState<Task[]>(SAMPLE_TASKS);
  const [filter, setFilter] = useState<Status | 'All'>('All');

  const visible = filter === 'All' ? tasks : tasks.filter((t) => t.status === filter);

  return (
    <main className="page tasks-page">
      <h2>Tasks</h2>

      <div className="tasks-toolbar">
        {(['All', 'To Do', 'In Progress', 'Done'] as const).map((s) => (
          <button
            key={s}
            className={`filter-btn${filter === s ? ' active' : ''}`}
            onClick={() => setFilter(s)}
          >
            {s}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="empty-state">No tasks found.</p>
      ) : (
        <table className="tasks-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>
                  <span
                    className="badge"
                    style={{ backgroundColor: PRIORITY_COLOR[task.priority] }}
                  >
                    {task.priority}
                  </span>
                </td>
                <td>{task.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

export default Tasks;
