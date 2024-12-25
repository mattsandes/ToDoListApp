package br.com.sandes.model;

import jakarta.persistence.*;

import java.util.Date;
import java.util.Objects;
import java.util.UUID;

@Table(name = "task_tb")
@Entity
public class Task {

    @Id
    @GeneratedValue
    private UUID id;

    @Column(nullable = false)
    private String taskName;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Date createDate;

    @Column(nullable = false)
    private Boolean done;

    public Task(){
        this.id = UUID.randomUUID();
    }

    public Task(String taskName, String description, Date createDate, Boolean done) {
        this.taskName = taskName;
        this.description = description;
        this.createDate = createDate;
        this.done = done;
    }

    public Task(UUID id, String taskName, String description, Date createDate, Boolean done) {
        this.id = id;
        this.taskName = taskName;
        this.description = description;
        this.createDate = createDate;
        this.done = done;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Boolean getDone() {
        return done;
    }

    public void setDone(Boolean done) {
        this.done = done;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Task task = (Task) o;
        return Objects.equals(id, task.id) && Objects.equals(taskName, task.taskName) && Objects.equals(description, task.description) && Objects.equals(createDate, task.createDate) && Objects.equals(done, task.done);
    }

    @Override
    public int hashCode() {
        int result = Objects.hashCode(id);
        result = 31 * result + Objects.hashCode(taskName);
        result = 31 * result + Objects.hashCode(description);
        result = 31 * result + Objects.hashCode(createDate);
        result = 31 * result + Objects.hashCode(done);
        return result;
    }
}