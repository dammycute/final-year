import TaskProgress from "./TaskProgress";

const TasksBoard = () => {
  const components = [
    {
      title: "Backlog",
      data: [
        {
          title: "Food Research",
          details:
            "Food design is required for our new project let’s research the best practices.",
          attachments: "75",
          messages: "8",
          duration: 12,
        },
        {
          title: "Mockups",
          details: "Create a 12 mockups for mobile iphone 13pro max",
          attachments: "7",
          messages: "4",
          duration: 12,
        },
        {
          title: "UI Animation",
          details:
            "Micro interaction loading and progress, story telling, Navigation",
          attachments: "7",
          messages: "4",
          duration: 12,
        },
      ],
    },

    {
      title: "In Progress",
      data: [
        {
          title: "User interface",
          details: "Design new user interface design for food delivery app",
          attachments: "7",
          messages: "4",
          duration: 12,
        },
        {
          title: "Usability Testing",
          details: "Perform the usability testing for the newly develop app",
          attachments: "7",
          messages: "4",
          duration: 12,
        },
        {
          title: "Food Research",
          details:
            "Food design is required for our new project let’s research the best practices.",
          attachments: "7",
          messages: "4",
          duration: 12,
        },
      ],
    },

    {
      title: "Completed",
      data: [
        {
          title: "Mind Mapping",
          details:
            "Mind mapping for the food delivery app for by targeting young users",
          attachments: "7",
          messages: "4",
          duration: 12,
        },
        {
          title: "Food Research",
          details:
            "Food design is required for our new project let’s research the best practices.",
          attachments: "7",
          messages: "4",
          duration: 12,
        },
        {
          title: "User Feedback",
          details:
            "Perform the user survey and take necessary steps to solve their problem with existing one",
          attachments: "7",
          messages: "4",
          duration: 12,
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-5 mx-8">
      {components.map((component) => (
        <TaskProgress
          key={component.title}
          title={component.title}
          data={component.data}
        />
      ))}
    </div>
  );
};

export default TasksBoard;
