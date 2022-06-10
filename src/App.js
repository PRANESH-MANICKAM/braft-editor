import BraftEditor from "braft-editor";
import React, { useEffect, useState } from "react";
import "braft-editor/dist/index.css";
import "./App.css";
import { Button, Form } from "antd";

function App() {
  const [update, setUpdate] = useState(BraftEditor.createEditorState(''));
  const htmlValues = update.toHTML();
  useEffect(() => {
    setUpdate(
      BraftEditor.createEditorState(
        `<p>Here is your braft editor , You can add or delete values..</p>`
      )
    );
  }, []);
  const onFinish = (values) => {
    console.log("values", values);
  };
  return (
    <>
      <Form onFinish={onFinish}>
        <div className="braft-container">
          <BraftEditor
            value={update}
            onChange={(event) => {
              setUpdate(BraftEditor.createEditorState(event));
            }}
          ></BraftEditor>
        </div>
        <div className="output">
          <h1>YOU CAN SEE THE OUTPUT IN BELOW CONTAINER</h1>
        </div>
        <div className="button">
          <Button type="primary" htmlType="submit">
            Click Here
          </Button>
        </div>
        <div className="outputvalue">{htmlValues}</div>
      </Form>
    </>
  );
}

export default App;
