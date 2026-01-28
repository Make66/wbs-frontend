const MyButton = ({ counter, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Clicked {counter} times</button>
    </div>
  );
};

export default MyButton;
