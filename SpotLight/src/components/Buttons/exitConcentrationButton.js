/**
 * Button component that exits the concentration timer screen and return to settings
 * Created by gparap (c) 2022
 */

import React from "react";
import { TouchableOpacity, View, Text } from 'react-native';
import Styles from "../../theme/styles";

const ExitConcentrationButton = ({ text, onPress }) => {
    return (
        <View style={Styles.containerButton}>
            <TouchableOpacity style={Styles.button}
                onPress={onPress}>
                <Text>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ExitConcentrationButton;
