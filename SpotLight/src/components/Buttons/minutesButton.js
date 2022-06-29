/**
 * Button component that displays concentration time options in minutes
 * Created by gparap (c) 2022
 */

import React from "react";
import { TouchableOpacity, Text } from 'react-native';
import Styles from "../../theme/styles";

const MinuteButton = ({ minutes, onPress }) => {
    return (
        <TouchableOpacity style={Styles.button}
            onPress={onPress}>
            <Text>{minutes}</Text>
        </TouchableOpacity>
    );
}

export default MinuteButton;
