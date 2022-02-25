package com.example.demo.services;

import com.example.demo.dao.CourseDao;
import com.example.demo.entities.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    private CourseDao courseDao;

    //    List<Course> list;
    public CourseServiceImpl() {
//        list=new ArrayList<>();
//        list.add(new Course(134, "Java", "khassi"));
//        list.add(new Course(133, "SpringBoot","khassi2"));
//        list.add(new Course(2, "Javascript", "bestt"));

    }


    @Override
    public List<Course> getCourses() {
//        return list;
        return courseDao.findAll();
    }

    @Override
    public Course getCourse(long courseId) {
//        Course c=null;
//        for(Course course:list){
//            if(course.getId()==courseId){
//                c=course;
//                break;
//            }
//        }
//        return c;
        Course foundCourse = courseDao.getById(courseId);
        return foundCourse;
    }

    @Override
    public Course addCourse(Course course) {
//        list.add(course);
//        return course;
        courseDao.save(course);
        return course;
    }

    @Override
    public Course updateCourse(Course course) {
//        list.forEach(e ->{
//            if(e.getId()==course.getId()){
//                e.setDesc(course.getDesc());
//                e.setName(course.getName());
//            }
//        });
//        return course;
        courseDao.save(course);
        return course;
    }


    @Override
    public void deleteCourse(long id) {
//        Course c=null;
//     for(Course course:list){
//         if(course.getId()==id){
//             c=course;
//             list.remove(course);
//         }
//     }
//       return c;
//    }
        courseDao.deleteById(id);
    }

}
