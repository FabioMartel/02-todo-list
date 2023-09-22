import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  editableId: number | null = null;
  newTask: string = '';
  searchText: string = '';
  tasks: any[] = [
    {
      title: 'Crear la lista de tareas',
      completed: true,
    },
    {
      title: 'Realizar la estructura HTML',
      completed: true,
    },
    {
      title: 'Desplegar el proyecto en la web',
      completed: false,
    },
  ];

  addTask() {
    const task = {
      title: this.newTask,
      completed: false,
    }
    this.tasks.push(task);
    this.newTask = '';
  }

  updateTask(task: any, title: string) {
    const index = this.tasks.indexOf(task);
    const updateTask = {
      title,
      completed: task.completed
    }
    this.tasks[index] = { ...task, ...updateTask };
  }

  deleteTask(task: any) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  startEdit(id: number): void {
    this.editableId = id;
  }

  stopEdit(task: any, title: string): void {
    this.editableId = null;
    this.updateTask(task, title);
  }

  filteredTasks() {
    if (this.searchText.trim() === '') {
      return this.tasks;
    } else {
      const searchTerm = this.searchText.toLowerCase();
      return this.tasks.filter(task => task.title.toLowerCase().includes(searchTerm));
    }
  }

  searchTasks() {
    // Este método puede usarse para realizar la búsqueda en tiempo real
    // Pero puedes quitarlo si prefieres que la búsqueda se active al presionar Enter en el campo de búsqueda.
  }
}
