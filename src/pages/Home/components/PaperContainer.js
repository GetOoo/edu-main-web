import { Box, Paper, Snackbar, Alert } from '@mui/material'
import { CourseCard } from './CourseCard'
import { PageNum } from './PageNum'
import classes from './PaperContainer.module.css'
import { useCallback, useState, useEffect } from 'react'

// const DUMMY_COURSES = [
//   { id: 'c1', title: 'Course 1', name: 'A' },
//   { id: 'c2', title: 'Course 2', name: 'B' },
//   { id: 'c3', title: 'Course 3', name: 'C' },
//   { id: 'c4', title: 'Course 4', name: 'D' },
//   { id: 'c5', title: 'Course 5', name: 'E' },
// ]

export const PaperContainer = () => {
  const [courses, setCourses] = useState([]);
  const [pendedCourses, setPendedCourses] = useState([]);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const subscribeHandler = (course) => {
    if (pendedCourses.includes(course)) {
      setAlertMessage('Already add to the cart!');
      setOpen(true);
    } else {
      const loadedCourses = pendedCourses;
      loadedCourses.push(course);
      setPendedCourses(loadedCourses);
      setAlertMessage('Success!');
      setOpen(true);
    }
    console.log('pendedCourses:' + pendedCourses);
  }


  const fetchCourses = useCallback(async () => {
    const response = await fetch(
      "https://course-enrollment-370ed-default-rtdb.firebaseio.com/courses.json");
    const data = await response.json();
    const loadedCourses = [];
    Object.keys(data).forEach((key) => {
      loadedCourses.push({
        id: key,
        title: data[key].title,
        name: data[key].name,
      })
    })
    setCourses(loadedCourses);
    // set state when the data received
  }, []);

  // console.log('showedCourses:' + courses.length);

  const [pageInfo, setPageInfo] = useState({
    fromIndex: 0,
    toIndex: 0,
    currPage: 1
  });

  const pageChangeHandler = (page) => {
    setPageInfo({
      fromIndex: page * 3 - 3,
      toIndex: page * 3,
      currPage: page
    })
  }

  useEffect(() => {
    fetchCourses();
    pageChangeHandler(1);
  }, [fetchCourses]);

  return (
    <Box className={classes.Box}>
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '5vh',
          marginBottom: '2vh',
          width: '0.9',
          height: '0.8',
          borderRadius: '30px',
        }}
        elevation={20}
      >
        {courses.slice(pageInfo.fromIndex, pageInfo.toIndex).map((course) =>
          <CourseCard
            course={course} key={course.id} subscribeHandler={subscribeHandler}
          />)
        }
      </Paper>
      <PageNum totalCourse={courses.length} pageChangeHandler={pageChangeHandler} />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  )
}
