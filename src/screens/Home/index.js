import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Timeline from './Timeline/Timeline';
import Course from './Course/Course';
import CardUser from './Course/component/CardUser';
import styles from './style';
// import useAuth from '../../hooks/UseAuth';
// import useCourses from '../../hooks/useCourse';
import {useSelector, useDispatch} from 'react-redux';
import {
  getDueDates,
  trimCoursesData,
  getCourseInfo,
} from '../../Api/moodle/courses';
import {getCourses, getTimeline, getCourse} from '../../redux/actions/course';

function Home({navigation}) {
  const userToken = useSelector(state => state.userState.userToken); // ini juga
  const username = useSelector(state => state.userState.username);
  const loggedIn = useSelector(state => state.userState.loggedIn);
  const userID = useSelector(state => state.userState.userID);
  const coursesData = useSelector(state => state.courseState.courses); // ini juga
  const timelineData = useSelector(state => state.courseState.timeline); //ini juga
  const states = useSelector(state => state);
  const courseInfo = useSelector(state => state.courseState.lihatCourse);
  const dispatch = useDispatch(); //ini juga

  // console.log('States: ', states);

  // const fetchCourses = async () => {
  //   const coursesReq = await trimCoursesData(userToken, userID);
  //   dispatch(getCourses(coursesReq));
  // };
  // const fetchTimeline = async () => {
  //   const timelineReq = await getDueDates(userToken, coursesData);
  //   dispatch(getTimeline(timelineReq)); // ini di copy
  // };

  // // useEffect(() => {
  // //   fetchCourses();
  // // }, []);

  // useEffect(() => {
  //   fetchTimeline();
  // }, [coursesData]); // ini juga

  // console.log('===REDUX===');
  // console.log('Course Info: ');
  // console.log(courseInfo);

  return (
    <View style={{flex: 1, backgroundColor: '#B01116'}}>
      <StatusBar barStyle="light-content" backgroundColor="#B01116" />

      <View style={styles.container}>
        <View>
          <TouchableOpacity>
            <Ionicons
              name="md-notifications"
              size={32}
              color="white"
              style={{marginLeft: 20, marginTop: 22, elevation: 50}}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../assets/images/b3.jpg')}
          style={styles.container1}
          resizeMode="cover"
        />

        <View>
          <TouchableOpacity style={styles.container2}>
            <Text style={styles.container3}>M</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{flex: 1}}>
        <Timeline />
        <View
          style={{
            backgroundColor: 'white',
            marginTop: 32,
            flex: 6,
            height: 200,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View>
              {/* comment */}
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="web"
                  size={24}
                  color="white"
                  style={styles.container5}
                />
              </TouchableOpacity>
              <Text style={styles.container6}>Situs web</Text>
            </View>

            <View>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="newspaper-variant-multiple-outline"
                  size={24}
                  color="white"
                  style={styles.container7}
                />
              </TouchableOpacity>

              <Text style={styles.container8}>Site blog</Text>
            </View>

            <View>
              <TouchableOpacity>
                <Entypo name="news" size={24} color="white" style={styles.b1} />
              </TouchableOpacity>
              <Text style={styles.b2}>Nilai</Text>
            </View>

            <View>
              <TouchableOpacity>
                <AntDesign
                  name="tag"
                  size={24}
                  color="white"
                  style={styles.b3}
                />
              </TouchableOpacity>
              <Text style={styles.b4}>Tag</Text>
            </View>
          </View>
        </View>

        <View style={{backgroundColor: 'white', flex: 6, height: 700}}>
          <Course />
        </View>
      </ScrollView>
    </View>
  );
}
export default Home;
