import React from 'react';
import { View,Text,ImageBackground,StatusBar,Pressable} from 'react-native';
import styles from './style';

const Stylesbutton = (props) => {

    const type=props.type
    const backgroundcolor= type==='primary'?'red':'white'
    const fontcolor= type==='primary'?'white':'black'
    const content=props.content
    const onPress=props.onPress
    const marginTop=props.marginTop
    return (
        <View style={styles.container}>
           <Pressable style={[styles.button,{backgroundColor:backgroundcolor},{marginTop:marginTop}]} onPress={
               () => onPress()
           }>
               <Text style={[styles.text,{color:fontcolor}]}>
                   {content}
               </Text>
           </Pressable>
        </View>

    );
};

export default Stylesbutton