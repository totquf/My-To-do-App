import { func } from "prop-types";
import React, { useState } from "react";
import { Dimensions, Text } from "react-native";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./src/components/theme";
import Input from "./src/components/Input";
import IconButton from "./src/components/IconButtom";
import { images } from "./src/images"
import Task from "./src/components/Task";

//스타일
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
const width = Dimensions.get('window').width

const List = styled.ScrollView`
    flex: 1;
    width: ${({ width }) => width - 40}px;
    `

//컴포넌트
const App = () => {

    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState({
        '1': { id: '1', text: '가나다라', completed: false},
        '2': { id: '2', text: '마바사아', completed: true},
        '3': { id: '3', text: '자차카타', completed: false},
        '4': { id: '4', text: '파하', completed: false},
    })

    //할일 추가
    const _addTask = () => {
        const ID = Date.now().toString();
        const newTaskObject = {
            [ID]: { id: ID, text: newTask, completed: false },
        }
        setTasks({ ...tasks, ...newTaskObject })
        setNewTask('')
    }

    //할일 삭제          //id => 현재 onPress가 일어난 할일목록의 id값이 들어옴
    const _deleteTask = (id) => {
        //tasks의 속성(키+값)들을 빈 객체에 깊은복사(메모리주소공유)
        //currentTask = '1': { id: '1', text: '가나다라', completed: false} * N
        const currentTask = Object.assign({}, tasks);
        //currentTask의 리스트 중에서 받아온 id값과 일치하는 key를 가진 항목을 삭제
        delete currentTask[id]
        setTasks(currentTask)
    }

    //할일 완료
    const _toggleTask = (id) => {
        //tasks의 속성(키+값)들을 빈 객체에 깊은복사(메모리주소공유)
        const currentTask = Object.assign({}, tasks);
        //currentTask리스트중 받아온 id값과 일치하는 key값의 value에 접근, value값중 completed라는 key의 항목에 접근
        //그 값을 반대로 바꿈(false->true / true->false)
        currentTask[id]['completed'] = !currentTask[id]['completed']
        setTasks(currentTask)
    }

    //할일수정           //item에 들어오는 값 = { id: '1', text: 사용자가 수정한 text, completed: false}
    const _updateTask = (item) => {
        //tasks의 속성(키+값)들을 빈 객체에 깊은복사(메모리주소공유)
        const currentTask = Object.assign({}, tasks)
        //currentTask의 리스트 중 item.id로 받아온 값과 일치하는 key의 value값을 item으로 교체
        currentTask[item.id] = item
        setTasks(currentTask)
    }

    //이벤트
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

                <List width={width}>
                    {Object.values(tasks) //객체의 Value만 뽑아서 배열로 반환해줌(value가 객체인경우 = [{a:하이},{b:바이}])
                        .reverse() //뽑은 배열을 역순정렬(최신 항목이 가장 앞에보이도록)
                        .map(item => //역순정렬된 배열을 map을 돌려 item에 하나씩 넣고 <Task/>컴포넌트 생성
                            <Task
                                item={item}
                                key={item.id}
                                text={item.text}
                                deleteTask={_deleteTask}
                                toggleTask={_toggleTask}
                                updateTask={_updateTask}
                            />
                        )
                    }
                </List>

            </Container>
        </ThemeProvider>
    )
}

export default App;