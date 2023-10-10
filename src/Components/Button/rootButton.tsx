import React, {ReactElement}from "react"
import { Pressable, TouchableOpacityProps } from "react-native"
import { colors } from "../../Style/colors"
import { styleInitialButton} from "../../Style/buttonStyle"

interface rootButton extends TouchableOpacityProps{
    children: ReactElement
    onPress?: () => void
    styleTw?: string
}


const RootButton: React.FC<rootButton> = ({children,  onPress, styleTw = styleInitialButton,...props }) => {

 return(
    <Pressable {...props} onPress={onPress}>{children}</Pressable>
 )
}

export default RootButton