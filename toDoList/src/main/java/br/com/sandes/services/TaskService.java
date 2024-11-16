package br.com.sandes.services;

import br.com.sandes.model.Task;
import br.com.sandes.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository repository;

    public List<Task> findAll(){
        return repository.findAll();
    }

    public Task create(Task task){

        if(task.getTaskName() == null &&
                task.getTaskName().isEmpty() ||
                task.getDescription() == null &&
                task.getDescription().isBlank()){
            throw new IllegalArgumentException("Não é possivel criar tasks com campos vazios");
        }

        return repository.save(task);
    }

    public Task findByTaskName(String taskName){
        if(taskName.isEmpty()) {
            throw new IllegalArgumentException("Informe algo para realizar a pesquisa!");
        }
        var task = repository.findByTaskName(taskName);

        if(task == null) {
            throw new RuntimeException("Tarefa não encontrada");
        }

        return task;
    }
}
