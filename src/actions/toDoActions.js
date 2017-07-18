import _ from 'lodash';

const addToDo = (type, text) => {
    const payload = {
        id: _.uniqueId(),
        text
    }
    return {
      type: type,
      payload
    }
}

const delTodo = (type, id) => {
    return {
      type: type,
      payload: id
    }
}

export { addToDo, delTodo }