import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './style';

import {useSelector, useDispatch} from 'react-redux';
import {getDueDates, trimCoursesData} from '../../../Api/moodle/courses';
import {getCourses, getTimeline} from '../../../redux/actions/course';

function Timeline({navigation}) {
  const userToken = useSelector(state => state.userState.userToken);
  const coursesData = useSelector(state => state.courseState.courses);
  const timelineData = useSelector(state => state.courseState.timeline);
  const dispatch = useDispatch();

  const fetchTimeline = async () => {
    const timelineReq = await getDueDates(userToken, coursesData);
    dispatch(getTimeline(timelineReq)); // ini di copy
  };

  useEffect(() => {
    fetchTimeline();
  }, [coursesData]);

  const getdeadline = dueDate => {
    const deadline = new Date(dueDate * 1000);

    const hari = deadline.getDate();
    const bulan = deadline.getMonth() + 1;
    const tahun = deadline.getFullYear();
    return `${hari}/${bulan}/${tahun}`;
  };

  const Timelinelist = ({item, index}) => {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: '#000000',
              justifyContent: 'flex-start',
              marginLeft: 13,
              fontSize: 12,
              fontWeight: 'normal',
              marginTop: 10,
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: '#B7B1B1',
              fontSize: 12,
              marginLeft: 150,
              fontWeight: 'normal',
            }}>
            {getdeadline(item.dueDate)}
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginTop: 9,
              fontFamily: 'Poppins-Medium',
              fontSize: 12,
              color: '#000000',
              fontWeight: 'normal',
              marginLeft: 13,
            }}>
            {item.courseName}
          </Text>
        </View>
        <View
          style={{
            width: 320,
            height: 1,
            backgroundColor: '#7B7878',
            marginTop: 10,
            marginLeft: 13,
          }}></View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: '#B01116', flex: 2}}>
      <Text style={styles.container}>Timeline</Text>
      <View style={styles.container1}>
        {timelineData.length !== 0 ? (
          <FlatList
            data={timelineData}
            renderItem={Timelinelist}
            keyExtractor={item => item.cmid} //cmid
          />
        ) : (
          <Text>tidak ada </Text>
        )}
      </View>
    </View>
  );
}
export default Timeline;
