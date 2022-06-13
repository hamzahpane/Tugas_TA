import axios from 'axios';
import {moodleURL} from '../config';

export const getUserCourses = async (token, userid) => {
  const req = await axios.get(
    `${moodleURL}${token}&moodlewsrestformat=json&wsfunction=core_enrol_get_users_courses&userid=${userid}`,
  );
  const courses = req.data;
  return courses;
};

export const getCourseContents = async (token, courseid) => {
  const req = await axios.get(
    `${moodleURL}${token}&moodlewsrestformat=json&wsfunction=core_course_get_contents&courseid=${courseid}`,
  );
  const contents = req.data;
  return contents;
};

export const trimCoursesData = async (token, userid) => {
  const courses = await getUserCourses(token, userid);
  const coursesData = [];
  for (const course of courses) {
    coursesData.push({
      id: course.id,
      name: course.fullname,
    });
  }

  return coursesData;
};

export const getDueDates = async (token, courses) => {
  const dueDates = [];
  for (const course of courses) {
    const contents = await getCourseContents(token, course.id);
    for (const content of contents) {
      if (!content.modules) continue;
      const modules = content.modules;
      for (const module of modules) {
        if (module.dates) {
          const contentDates = module.dates;
          for (date of contentDates) {
            if (date.label === 'Due:') {
              dueDates.push({
                cmid: module.id,
                name: module.name,
                courseName: course.name,
                dueDate: date.timestamp,
              });
            }
          }
        }
      }
    }
  }
  return dueDates;
};

export default getUserCourses;
