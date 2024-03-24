import React, { useState } from 'react';
import { Card, RadioButton } from "react-native-paper";
import { View, ScrollView, Text, Button, TextInput } from 'react-native';
import { styles } from '../styles/scheduleManagment';
import DateTimePicker from '@react-native-community/datetimepicker';

const ScheduleManagment = () => {
    const [checked, setChecked] = useState("Daily");
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [duration, setDuration] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios'); // Hide the picker on iOS
        setDate(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const handleSave = () => {
        // Implement logic to save the schedule data
    };

    return (
        <View style={styles.main}>
            <ScrollView>
                <Text style={styles.text1}>Schedule Form</Text>
                <Text style={styles.text3}>Water Frequence</Text>
                <View style={styles.main1}>
                    <View style={styles.radio1}>
                        <RadioButton
                            value="Daily"
                            status={checked === "Daily" ? "checked" : "unchecked"}
                            onPress={() => setChecked("Daily")}
                        />
                    </View>
                    <Text style={styles.text2}>Daily</Text>
                    <View style={styles.radio1}>
                        <RadioButton
                            value="Weekly"
                            status={checked === "Weekly" ? "checked" : "unchecked"}
                            onPress={() => setChecked("Weekly")}
                        />
                    </View>
                    <Text style={styles.text2}>Weekly</Text>
                    <View style={styles.radio1}>
                        <RadioButton
                            value="Monthly"
                            status={checked === "Monthly" ? "checked" : "unchecked"}
                            onPress={() => setChecked("Monthly")}
                        />
                    </View>
                    <Text style={styles.text2}>Monthly</Text>
                </View>
                <View>
                    <Text style={styles.text3}>Watering Duration</Text>
                    <TextInput
                        style={styles.imputs}
                        value={duration}
                        onChangeText={setDuration}
                        placeholder="Enter duration in minutes"
                    />
                    <Text style={styles.text3}>Time of Day</Text>
                    {/* Time picker components for start and end time */}
                    <View>
                        <View>
                            <Button onPress={showDatepicker} title="Show date picker!" />
                        </View>
                        <View>
                            <Button onPress={showTimepicker} title="Show time picker!" />
                        </View>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                    </View>
                 
                    <Button title="Save" onPress={handleSave} />
               
                
                </View>

                <Text style={styles.text1}>Existing Schedules</Text>
                <Card>

                    <Text>Morning Watering</Text>
                    <Text>Frequence</Text>
                    <Text>Duration</Text>
                    <Text>Time</Text>
                    <Button title="Edit" onPress={handleSave} />
                    <Button title="Delete" onPress={handleSave} />
               
            </Card> 
            <Card>

                    <Text>Morning Watering</Text>
                    <Text>Frequence</Text>
                    <Text>Duration</Text>
                    <Text>Time</Text>
                    <Button title="Edit" onPress={handleSave} />
                    <Button title="Delete" onPress={handleSave} />
               
            </Card> 
            </ScrollView>
           
        </View>
    );
}

export default ScheduleManagment;
