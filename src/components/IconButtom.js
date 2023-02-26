import React from "react";
import { Pressable, TouchableOpacity } from "react-native";
import styled from "styled-components";
import PropTypes from 'prop-types';
//이미지 파일의 경로나 url를 이용하여 이미지를 렌더링 할 수 있음
import { images } from "../images";

//tint-color => 아이콘 색상
const Icon = styled.Image`
    tint-color: ${({ theme }) => theme.text}; 
    width: 30px;
    height: 30px;
    margin: 10px;
    `
const IconButton = ({ type, onPressOut }) => {
    return (
        <Pressable
            onPressOut={onPressOut}
            pressRetentionOffset='10px'
        >
            <Icon source={type}/>
        </Pressable>
    )
}

IconButton.propTypes = {
    //oneOf => 배열에 포함된 값 중에서 하나를 만족
    type: PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropTypes.func,
}

export default IconButton;