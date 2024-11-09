package br.com.sandes.controllers;

import br.com.sandes.model.Task;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.UUID;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    @GetMapping
    public Task findAll(){
        return new Task(
                UUID.randomUUID(),
                "Estudar java ate 13:40",
                "Estudar os assuntos de generics e collections",
                new Date(),
                false);
    }
}
