1. Using react-native-paper (Material Design)

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const RadioButtonExample = () => {
  const [value, setValue] = useState('first');

  return (
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View>
        <Text>First</Text>
        <RadioButton value="first" />
      </View>
      <View>
        <Text>Second</Text>
        <RadioButton value="second" />
      </View>
    </RadioButton.Group>
  );
};

export default RadioButtonExample;
 
                        OR

import React, { useState } from 'react';
import { View } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const App = () => {
  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1',
      label: 'Option 1',
      value: 'option1',
      selected: true,
    },
    {
      id: '2',
      label: 'Option 2',
      value: 'option2',
    },
  ]);

  const onPressRadioButton = radioButtonsArray => {
    setRadioButtons(radioButtonsArray);
  };

  return (
    <View>
      <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} />
    </View>
  );
};

export default App;
    
                           OR
3. Creating Custom Radio Buttons (Full Control)
 
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomRadioButton = ({ label, selected, onPress }) => {
  return (
    <TouchableOpacity style={styles.radioButtonContainer} onPress={onPress}>
      <View style={styles.radioButton}>
        {selected ? <View style={styles.radioButtonSelected} /> : null}
      </View>
      <Text style={styles.radioButtonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  return (
    <View>
      <CustomRadioButton
        label="Option 1"
        selected={selectedOption === 'option1'}
        onPress={() => setSelectedOption('option1')}
      />
      <CustomRadioButton
        label="Option 2"
        selected={selectedOption === 'option2'}
        onPress={() => setSelectedOption('option2')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  radioButtonLabel: {
    marginLeft: 10,
  },
});

export default App;
