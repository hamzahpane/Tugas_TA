import React, {Component} from 'react';
import {View, Text, AppRegistry, StatusBar} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import styles from './style';

export default class jadwal extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#B01116" />
        <Calendar
          style={{borderWidth: 1, borderColor: 'gray', height: 700}}
          theme={{
            backgroundColor: '#B01116',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: 'blue',
            indicatorColor: 'blue',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
        />
      </View>
    );
  }
}
AppRegistry.registerComponent('navigation', () => jadwal);
