package br.com.sandes.services;

import br.com.sandes.exceptions.EmptyFieldException;
import br.com.sandes.exceptions.EmptySearchException;
import br.com.sandes.exceptions.TaskNotFoundException;
import br.com.sandes.model.Task;
import br.com.sandes.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Logger;

@Service
public class TaskService {

    @Autowired
    private TaskRepository repository;
    private Logger logger = Logger.getLogger(Task.class.getName());

    public List<Task> findAll(){
        logger.info("Tasks encontradas!");

        return repository.findAll();
    }

    public Task create(Task task){

        logger.info("Tarefa criada!");

        if(task.getTaskName() == null &&
                task.getTaskName().isEmpty() ||
                task.getDescription() == null &&
                task.getDescription().isBlank()){
            throw new IllegalArgumentException("Não é possivel criar tasks com campos vazios");
        }

        return repository.save(task);
    }

    public Task findByTaskName(String taskName){
        logger.info("Task encontrada!");

        if(taskName.isEmpty()) {
            throw new EmptySearchException("Informe algo para realizar a pesquisa!");
        }

        var task = repository.findByTaskName(taskName);

        if(task == null) {
            throw new TaskNotFoundException("Tarefa não encontrada");
        }

        return task;
    }

    public Task doneTask(String task){
        logger.info("Tarefa concluida!");

        if(task == null) {
            throw new EmptyFieldException("Informe o nome de uma tarefa!");
        }

        Task foundTask = repository.findByTaskName(task);

        if(foundTask == null){
            throw new TaskNotFoundException("Tarefa não encontrada!");
        }

        foundTask.setDone(true);

        return repository.save(foundTask);
    }
}
