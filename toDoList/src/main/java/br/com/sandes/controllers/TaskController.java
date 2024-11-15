package br.com.sandes.controllers;

import br.com.sandes.model.Task;
import br.com.sandes.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskService service;

    @GetMapping
    public List<Task> findAll(){
        return service.findAll();
    }

    @GetMapping("/findByName")
    public Task findByName(@RequestParam("taskName") String taskName){
        return service.findByTaskName(taskName);
    }

    @PostMapping
    public Task create(@RequestBody Task task){
        return service.create(task);
    }
}
