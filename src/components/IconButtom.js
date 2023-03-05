import React from "react";
import { Pressable, TouchableOpacity } from "react-native";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { images } from "../images";

//<Image>컴포넌트 => 이미지 파일의 경로나 url를 이용하여 이미지를 렌더링 할 수 있음
//tint-color => 아이콘 색상
const Icon = styled.Image`
    tint-color: ${({ theme, completed }) => completed ? theme.done : theme.text}; 
    width: 30px;
    height: 30px;
    margin: 10px;
    `
const IconButton = ({ type, onPressOut, id, completed }) => {
    
    //현재 할일목록의 id
    const _onPressOut = () => {
        onPressOut(id);
    }

    return (
        <TouchableOpacity onPressOut={_onPressOut}>
            <Icon
                source={type}
                completed={completed}
            />
        </TouchableOpacity>
    )
}

//props로 onpressOut이 전달되지 않아도 문제가 안생기도록 onPressOut의 기본값 지정
IconButton.defailtProps = {
    onPressOut: () => {},
}

IconButton.propTypes = {
    //oneOf => 배열에 포함된 값 중에서 하나를 만족
    type: PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropTypes.func,
    id: PropTypes.string,
    completed: PropTypes.bool,

}

export default IconButton;