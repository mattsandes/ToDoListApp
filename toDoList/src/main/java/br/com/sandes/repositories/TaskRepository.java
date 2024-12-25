package br.com.sandes.repositories;

import br.com.sandes.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TaskRepository extends JpaRepository<Task, UUID> {

    @Query("SELECT task FROM Task task WHERE task.taskName = :taskName")
    public Task findByTaskName(@Param("taskName") String taskName);

    @Override
    @Query("SELECT task FROM Task task ORDER BY task.createDate ASC")
    public List<Task> findAll();

    @Modifying
    @Transactional
    @Query("UPDATE Task task SET task.done = true WHERE task.taskName = :task")
    public void doneTask(@Param("task") String task);
}
