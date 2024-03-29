import { TodoItem } from "./data";

type ItemCount = {
    total: number,
    incomplete: number
}

export class TodoCollection {
    private nextId: number = 1;
    private itemMap: Map<number, TodoItem> = new Map<number, TodoItem>();

    constructor(public username: string, todoItems: TodoItem[] = []) {
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }

    public getTodoById(id: number) : TodoItem {
        return this.itemMap.get(id);
    }

    public markComplete(id: number, complete: boolean) : void {
        const todoItem = this.getTodoById(id);

        if (todoItem) {
            todoItem.complete = complete;
        }
    }

    public addTodo(task: string) : number {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }

        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));


        return this.nextId;
    }

    public getTodoItems(includeCompleted: boolean) : TodoItem[] {
        return [...this.itemMap.values()].filter(item => includeCompleted || !item.complete);
    }

    public removeComplete() : void {
        this.itemMap.forEach(item => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        });
    }

    public getItemCounts() : ItemCount {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        }
    }


}