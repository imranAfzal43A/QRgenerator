import { createContext, useState } from "react";
import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MyAppBar from "./appbar";
import Mybutton from "./button";
import MyDropdown from "./dropDown";
import Input from "./input";
import styles from "./style";
export const ThemeContext = createContext();
const QR = () => {
    const [themeNight, setThemenight] = useState(false);
    const [url, setUrl] = useState('enter something')
    const [showQr, setShowqr] = useState(false)
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Normal', value: 150 },
        { label: 'Large', value: 200 },
        { label: 'Extra Large', value: 250 }
    ]);

    return (
        <ThemeContext.Provider value={themeNight}>
            <SafeAreaProvider>
                <MyAppBar title='QR Generator' onPress={() => setThemenight(!themeNight)} ></MyAppBar>
                <View style={!themeNight ? styles.container : styles.containerN} >
                    <Input style={!themeNight ? styles.textinput : styles.textinputN} title='enter link' onChangeText={(value) => setUrl(value)} />
                    <MyDropdown open={open} value={value} items={items} setOpen={setOpen} setValue={setValue} setItems={setItems} />
                    <Mybutton title='Generate QR' style={!themeNight ? styles.button : styles.buttonN} onPress={() => setShowqr(!showQr)} />
                    {showQr && <QRCode value={url} size={value} />}
                </View>
            </SafeAreaProvider>
        </ThemeContext.Provider>
    )
}
export default QR;