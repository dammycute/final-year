import heapq

class MaintenanceTask:
    def __init__(self, task_id, processing_time):
        self.task_id = task_id
        self.processing_time = processing_time

def prioritize_tasks(tasks):
    # Use the Shortest Processing Time (SPT) rule for task prioritization
    return heapq.nlargest(len(tasks), tasks, key=lambda x: x.processing_time)

def main():
    # Example maintenance tasks with task_id and processing_time
    tasks = [
        MaintenanceTask(1, 3),
        MaintenanceTask(2, 2),
        MaintenanceTask(3, 5),
        MaintenanceTask(4, 1),
    ]

    # Prioritize tasks using the SPT rule
    prioritized_tasks = prioritize_tasks(tasks)

    # Display the prioritized tasks
    print("Prioritized Tasks:")
    for task in prioritized_tasks:
        print(f"Task {task.task_id}: Processing Time {task.processing_time}")

if __name__ == "__main__":
    main()
