// ../assets/icon에 있는 checkbox.png를 CheckBox라는 이름으로 가져오겠다
import CheckBox from "../assets/icon/checkbox.png";
import CheckBoxOutline from "../assets/icon/outline_checkbox.png";
import DeleteForever from "../assets/icon/outline_delet.png";
import Edit from "../assets/icon/outline_edit.png";

//아이콘 객체 생성
export const images = {
    uncompleted: CheckBoxOutline,
    conpleted: CheckBox,
    delete: DeleteForever,
    update: Edit,
};
