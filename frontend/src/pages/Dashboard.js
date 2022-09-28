import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MessageForm from "../components/MessageForm";
import MessageItem from "../components/MessageItem";
import Spinner from "../components/Spinner";
import { getMessages, reset } from "../features/messages/messageSlice";
import { useState } from "react";

function Dashboard() {
  const [uNames, setNniqueNames] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { messages, isLoading, isError, message } = useSelector(
    (state) => state.messages
  );
  const userData = {
    name: user,
  };
  const uniqueNames = (messages) => {
    let un = [];
    for (let i = 0; i < messages.length; i++) {
      un.push(messages[i].recipent);
    }
    function setID(item) {
      let f = { name: item };
      return f;
    }
    let u = [...new Set(un)];
    let o = u.map(setID);
    console.log(o);
    return o;
  };
  console.log(" userData= { name:user}", userData);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getMessages(userData));
    uniqueNames(messages);
    console.log(messages);

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section class="d-flex p-2 justify-content-center">
        <h1>Welcome {user}</h1>
      </section>

      <MessageForm uniq={uniqueNames(messages)} />

      {messages.length ? (
        <>
          {messages.map(({ message, _id, name }, key) =>
            messages[key].recipent === user ? (
              <MessageItem key={messages[key]._id} message={messages[key]} />
            ) : (
              <></>
            )
          )}
        </>
      ) : (
        <h3>You do not have any messages yet</h3>
      )}
    </>
  );
}

export default Dashboard;
