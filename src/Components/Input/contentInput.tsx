import React from "react"
import { TextInput, TextInputProps } from "react-native"
import styles from "./style"

type TypeContentInput = TextInputProps  

const ContentInput: React.FC<TypeContentInput> = (props) =>{
    return <TextInput style={styles.contentInput} {...props}/>
}

export default ContentInput