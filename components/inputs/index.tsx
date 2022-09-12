import {View, TextInput} from 'react-native'
import {Ionicons as Icon} from '@expo/vector-icons'
import { styles } from './style'

type InputProps = {
    icon:string ,
    placeholder: string,
    onChange: (text: string) => void
}
export const InputWithIcon = ({icon, placeholder, onChange}: InputProps) => (
    <View style={styles.input}>
        <Icon name={icon} size={25} style={styles.inputIcon}/> 
        <TextInput style={styles.textInput} placeholder={placeholder} onChangeText={onChange} />
    </View>
)