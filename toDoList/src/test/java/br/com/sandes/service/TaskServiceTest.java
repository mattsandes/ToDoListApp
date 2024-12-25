package br.com.sandes.service;

import br.com.sandes.model.Task;
import br.com.sandes.repositories.TaskRepository;
import br.com.sandes.services.TaskService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class TaskServiceTest {

    @Mock
    private TaskRepository repository;

    @InjectMocks
    private TaskService service;

    private Task task0;

    @BeforeEach
    void setUp(){
        task0 = new Task(
                UUID.randomUUID(),
                "testTask",
                "Test Description",
                new Date(),
                false);
    }

    @DisplayName("Validar que é possivel ter todas as tasks do banco")
    @Test
    void test_canFindAllTasks(){
        //Given (Arrange)
        Task task1 = new Task(
                UUID.randomUUID(),
                "Another task",
                "Another Description",
                new Date(),
                false);

        //When (Act)
        given(repository.findAll()).willReturn(List.of(task0, task1));

        List<Task> taskList = service.findAll();

        //Then (Assert)
        assertNotNull(taskList);
        assertEquals(2, taskList.size());
    }

    @DisplayName("Validar que é possivel criar uma task")
    @Test
    void test_canCreateTasks(){
        given(repository.save(task0)).willReturn(task0);

        Task savedTask = service.create(task0);

        assertNotNull(savedTask);
        assertNotNull(savedTask.getId());
        assertEquals("testTask", savedTask.getTaskName());
        assertEquals("Test Description", savedTask.getDescription());
        assertNotNull(savedTask.getCreateDate());
        assertEquals(false ,savedTask.getDone());
    }

    @DisplayName("Validar que é possivel marcar uma tarefa como completa")
    @Test
    void test_CanMarkTaskAsDone(){
        //Given (Arrange);
        Task task1 = new Task(
                UUID.randomUUID(),
                "New Task Name",
                "Task description",
                new Date(),
                true);

        given(service.doneTask(task1.getTaskName())).willReturn(task1);
        //When (Act)

        var result = service.doneTask(task1.getTaskName());

        System.out.println(result.getDone());

        //Then (Assert)
        assertNotNull(result);
        assertEquals("New Task Name", result.getTaskName());
        assertEquals("Task description", result.getDescription());
        assertNotNull(task1.getCreateDate());
        assertEquals(true, result.getDone());
    }
}
