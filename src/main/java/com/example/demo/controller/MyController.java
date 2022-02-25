package com.example.demo.controller;

import com.example.demo.entities.Course;
import com.example.demo.services.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MyController {
    @Autowired
    private CourseService courseService;
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/home")
    public String get(){
        return "this is home";
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/courses")
    // get the courses
    public List<Course> getCourses(){

        return this.courseService.getCourses();
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/courses/{courseId}")
    public Course getCourse(@PathVariable String courseId){
        return this.courseService.getCourse(Long.parseLong(courseId));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/courses")
    public Course addCourse(@RequestBody Course course){
        return this.courseService.addCourse(course);

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/courses")
    public Course updateCourse(@RequestBody Course course){
        return this.courseService.updateCourse(course);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/courses/{id}")
    public void deleteCourse(@PathVariable String id){
        this.courseService.deleteCourse(Long.parseLong(id));
    }

}
















