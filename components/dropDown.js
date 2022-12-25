import DropDownPicker from 'react-native-dropdown-picker';
const MyDropdown = (props) => {
    return (
        <DropDownPicker
            open={props.open}
            value={props.value}
            items={props.items}
            setOpen={props.setOpen}
            setValue={props.setValue}
            setItems={props.setItems}
            style={{ width: '90%',alignSelf:'center',backgroundColor:'white' }}
        />
    );
}

export default MyDropdown;