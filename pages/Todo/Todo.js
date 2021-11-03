import React, { useCallback, useState } from "react";
import {
  ListItem,
  ListItemText,
  InputBase,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

const Todo = () => {
  return (
    <div className={"Todo"}>
      <input type={"checkbox"} id={"todo0"} name={"todo0"} value={"todo0"} />
      <label form={"todo0"}>투두 컴포넌트 만들기</label>
    </div>
  );
};

export default Todo;
