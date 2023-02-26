import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";
import PropTypes from 'prop-types';

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.text
}))`
    width: ${({width}) => width-40}px;
    height: 60px;
    margin: 3px 0px;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.itemBackground};
    font-size: 22px;
    color: ${({ theme }) => theme.text};
    `
const Input = ({placeholder, value, onChangeText, onEndEditing}) => {

    const width = Dimensions.get('window').width;

    return (
        <StyledInput
            width={width}
            placeholder={placeholder}
            maxLength={50}
            autoCapotalize='none' //첫글자 자동 대문자 전환 없음
            autoCorrect={false} //오타 자동 수정 기능 x
            returnKeyType='done' //키보드의 완료 버튼을 done으로 변경(ios에만 적용)
            keyboardAppearance="dark" //키보드 어둡게(ios에만 적용)
            value={value}
            onChangeText={onChangeText}
            onEndEditing={onEndEditing}
        />
    )
}

//값 타입과 필수값 여부 지정(유지보수용)
Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onEndEditing: PropTypes.func.isRequired,

}

export default Input;