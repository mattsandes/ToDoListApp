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

        if(task == null){
            throw new IllegalArgumentException("Não é possivel persistir objetos nullos");
        }

        return repository.save(task);
    }

    public Task findByTaskName(String taskName){
        return repository.findByTaskName(taskName);
    }
}
