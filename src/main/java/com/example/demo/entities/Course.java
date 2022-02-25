package com.example.demo.entities;

public class Course {
    private long id;
    private String name;
    private String desc;

    public Course(long id, String name, String desc){
        this.id=id;
        this.name=name;
        this.desc=desc;
    }

    public Course(){
        super();
    }

    public void setId(long id){
        this.id=id;
    }

    public void setName(String name){
        this.name=name;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public long getId(){
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDesc() {
        return desc;
    }
}
