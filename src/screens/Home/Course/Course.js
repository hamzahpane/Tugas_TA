import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Touchable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getDueDates, trimCoursesData} from '../../../Api/moodle/courses';
import {getCourses, getTimeline} from '../../../redux/actions/course';
import styles from '../Course/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Progress from 'react-native-progress';
function Course({navigation}) {
  const coursesData = useSelector(state => state.courseState.courses);
  const userToken = useSelector(state => state.userState.userToken);
  const userID = useSelector(state => state.userState.userID);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const fetchCourses = async () => {
    const coursesReq = await trimCoursesData(userToken, userID);
    dispatch(getCourses(coursesReq));
    setIsLoading(true);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // const course = coursesData[0].name;

  const courselist = ({item, index}) => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginLeft: 16,
          marginRight: 16,
          backgroundColor: '#FFFFFF',
          elevation: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginTop: 20}}>
            <AntDesign name="clockcircle" size={24} color="#B7B1B1" />
          </View>

          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              color: '#B7B1B1',
              marginLeft: 20,
              marginTop: 20,
              fontWeight: '600',
            }}>
            24/07/2021
          </Text>
        </View>
        {/* <Touchable onpress {() =>{
          navigation.navigate("Infocourse", {
            item.id
          }

          )


        }}> */}
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 16,
            color: '#000000',
            marginLeft: 0,
            marginTop: 20,
            fontWeight: '600',
          }}>
          {item.name}
        </Text>
        {/* </Touchable> */}
        <View style={{marginTop: 10}}>
          <Progress.Bar progress={0.5} width={340} color="#CE181C" />
        </View>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 16,
            color: '#000000',
            marginLeft: 0,
            marginTop: 10,
            fontWeight: '600',
          }}>
          50 %
        </Text>
        <View
          style={{
            borderBottomColor: '#7B7878',
            borderBottomWidth: 1,
          }}></View>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.container1}>Course</Text>
        <View style={styles.container5}>
          <Text style={styles.container6}>All (axcept removed from view)</Text>
          <MaterialIcons name="arrow-drop-down" size={36} color="#000000" />
        </View>
      </View>
      <FlatList
        data={coursesData}
        renderItem={courselist}
        keyExtractor={item => item.id} //cmid
      />
      {/* <View
        style={{
          paddingHorizontal: 20,
          marginLeft: 16,
          marginRight: 16,
          backgroundColor: '#FFFFFF',
          elevation: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginTop: 20}}>
            <AntDesign name="clockcircle" size={24} color="#B7B1B1" />
          </View>

          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              color: '#B7B1B1',
              marginLeft: 20,
              marginTop: 20,
              fontWeight: '600',
            }}>
            24/07/2021
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 16,
            color: '#000000',
            marginLeft: 0,
            marginTop: 20,
            fontWeight: '600',
          }}>
          Desain antar Muka aplikasi MBKM MITRA [REE]
        </Text>
        <View style={{marginTop: 10}}>
          <Progress.Bar progress={0.5} width={340} color="#CE181C" />
        </View>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 16,
            color: '#000000',
            marginLeft: 0,
            marginTop: 10,
            fontWeight: '600',
          }}>
          50 %
        </Text>
        <View
          style={{
            borderBottomColor: '#7B7878',
            borderBottomWidth: 1,
          }}></View>
      </View> */}
    </View>
  );
}

export default Course;
