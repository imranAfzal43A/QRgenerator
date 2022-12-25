import { TextInput } from "react-native";
import styles from "./style";

const Input = (props) => {
    return (
         <TextInput placeholder={props.title} secureTextEntry={props.secure} multiline={true} onChangeText={props.onChangeText} style={props.style}value={props.value} />
    )
}
export default Input;