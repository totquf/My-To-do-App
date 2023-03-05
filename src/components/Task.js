import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import IconButton from "./IconButtom";
import { images } from "../images";
import Input from "./Input";

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.itemBackground};
    border-radius: 10px;
    padding: 5px;
    margin: 3px 0px;
    `
const Contents = styled.Text`
    flex: 1;
    font-size: 24px;
    color: ${({ theme, completed }) => completed ? theme.done : theme.text};
    text-decoration-line: ${({completed}) => completed ? 'line-through' : 'none'}
    `
const Task = ({ deleteTask, item, toggleTask, updateTask }) => {
    
    //state
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(item.text);

    //수정버튼 클릭시 수정중으로 상태 변경하는 함수
    const _handleUpdateButtonPress = () => {
        setIsEditing(true)
    }

    //일정 수정하는 함수
    const _onSubmitEditing = () => {
        if (isEditing) { //수정중상태라면
            //item = { id: '1', text: '가나다라', completed: false}
            //item객체와 text객체를 합쳐서(text는 중복 키이므로 뒤에 있는 값으로 교체됨) 빈 객체에 넣음 -> editedTask에 넣음
            const editedTask = Object.assign({}, item, { text }) //{ text } -> text : text가 갖고있던 값
            setIsEditing(false) //수정중아님으로 변경
            updateTask(editedTask) //updateTask함수 실행
        }
    }

    return (
        isEditing ? ( //수정중이라면
            <Input
                value={text}
                onChangeText={text => setText(text)}
                onEndEditing={_onSubmitEditing}
            />
        ) : ( //수정중이 아니라면
            <Container>
                <IconButton
                    type={item.completed ? images.conpleted : images.uncompleted}
                    onPressOut={toggleTask}
                    id={item.id}
                    completed={item.completed}
                />
                <Contents completed={item.completed}>
                    {item.text}
                </Contents>

                    {item.completed ||
                        <IconButton
                            type={images.update}
                            onPressOut={_handleUpdateButtonPress}
                        />
                    }
                <IconButton
                    type={images.delete}
                    onPressOut={deleteTask}
                    id={item.id}
                    completed={item.completed}
                />
            </Container >
        )
    )
}

Task.propTypes = {
    text: PropTypes.string.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
}

export default Task;