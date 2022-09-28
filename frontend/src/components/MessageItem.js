import { useDispatch } from "react-redux";

function MessageItem({ message }) {
  const dispatch = useDispatch();

  return (
    <div class="container mb-4">
      <div class="row" style={{ border: "1px solid black" }}>
        <div class="col-sm " align="center">
          <div key={message._id}>
            <h2>title: {message.title}</h2>
            <div>{message.text}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageItem;
