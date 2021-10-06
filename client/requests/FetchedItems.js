/*
File for testing the API
*/

const Tasks = (props) => {
  let taskList = <h2>No items found. Start adding some!</h2>;

  if (props.items.length > 0) {
    taskList = (
      <div>{props.items}</div>
    );
  }

  let content = taskList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = 'Loading items...';
  }

  return (
    <div>{content}</div>
  );
};

export default Tasks;
