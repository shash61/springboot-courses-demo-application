package com.example.demo.dao;

import com.example.demo.entities.Course;
import org.springframework.data.jpa.repository.JpaRepository;
// for entity and its primary key
public interface CourseDao extends JpaRepository<Course, Long> {

}
