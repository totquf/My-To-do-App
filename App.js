import { func } from "prop-types";
import React, { useState } from "react";
import { Text } from "react-native";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./src/components/theme";
import Input from "./src/components/Input";
import IconButton from "./src/components/IconButtom";
import { images } from "./src/images"


const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.background}
    `
const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main}
  align-self: felx-start;
  margin: 10px 20px;
  `

const App = () => {

    const [newTask, setNewTask] = useState('')

    const _addTask = () => {
        alert(`${newTask} 일정이 등록되었습니다!`)
    }

    const _handleTextChange = (text) => {
        setNewTask(text)
    }
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Title>TODO List</Title>
                <Input
                    placeholder={'할 일을 입력해주세요'}
                    value={newTask}
                    onChangeText={_handleTextChange}
                    onEndEditing={_addTask}
                />
                <IconButton type={images.uncompleted}/>
                <IconButton type={images.conpleted}/>
                <IconButton type={images.delete}/>
                <IconButton type={images.update}/>
            </Container>
        </ThemeProvider>
    )
}

export default App;