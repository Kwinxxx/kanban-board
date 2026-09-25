import type { Column } from "@/entities/column"
import type { Task } from "@/entities/task"
import { ColumnHeader } from "@/entities/column"
import { TaskCard } from "@/entities/task"
import { Button } from "@/shared/ui/button"

const mockTasks: Task[] = [
  {
    id: 'task-1',
    title: 'AST Builder',
    description: 'Create an Abstract Syntax Tree using tokens and TreeSitter',
    labels: [
      { id: 'l1', text: 'Must', variant: 'must' },
      { id: 'l2', text: 'Medium', variant: 'medium' },
    ],
    columnId: 'col-1',
    order: 0,
  },
  {
    id: 'task-2',
    title: 'JavaScript lexer',
    description: 'Research JavaScript grammar and provide an overview',
    labels: [{ id: 'l3', text: 'Huge', variant: 'huge' }],
    columnId: 'col-2',
    order: 0,
  },
]


const mockColumns: Column[] = [
  { id: 'col-1', title: 'New', order: 0 },
  { id: 'col-2', title: 'In progress', order: 1 },
  { id: 'col-3', title: 'Review', order: 2 },
  { id: 'col-4', title: 'Done', order: 3 },
]

function App() {

  return (
    <div className="min-h-screen bg-secondary-bg p-6">
      <div className="flex gap-4 overflow-x-auto pb-4">
        {mockColumns.map((column) => {
          const columnTasks = mockTasks.filter((task) => task.columnId === column.id)

          return (
            <div key={column.id} className="flex-shrink-0 w-72">
              <ColumnHeader title={column.title} tasksCount={columnTasks.length}/>

              <div className="flex flex-col gap-3">
                {columnTasks.map((task) => (
                  <TaskCard key={task.id} task={task}/>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
