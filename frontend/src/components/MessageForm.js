import { useState } from "react";
import { useDispatch } from "react-redux";
import { createMessage } from "../features/messages/messageSlice";

function MessageForm({ uniq }) {
  const [text, setText] = useState("");
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text, userName, title);
    dispatch(createMessage({ text, userName, title }));
    setText("");
    setUserName("");
    setTitle("");
  };

  return (
    <div class="container">
      <div class="col-md-6 offset-md-3">
        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <div class="row ">
                <div class="col">
                  <label htmlFor="text">Title of the message</label>
                </div>
                <div class="col mb-4">
                  <input
                    type="text"
                    name="text"
                    id="text"
                    value={title}
                    class="form-control full-width"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div class="w-100"></div>
                <div class="col ">
                  <label htmlFor="text">Message</label>
                </div>
                <div class="col mb-4">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={(e) => setText(e.target.value)}
                  ></textarea>
                </div>
                <div class="w-100"></div>
                <div class="col">
                  <label htmlFor="text">Name of the recipent</label>
                </div>
                <div class="col mb-4">
                  <input
                    type="text"
                    name="text"
                    id="text"
                    value={userName}
                    list="userlist"
                    class="form-control full-width"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <datalist id="userlist">
                    {uniq.map(({ name }, key) => (
                      <option value={uniq[key].name} key={key}></option>
                    ))}
                  </datalist>
                </div>
              </div>
            </div>
            <div class="text-center ">
              <button type="submit" class="btn btn-dark px-5 mb-5 w-100">
                Send a message
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default MessageForm;
