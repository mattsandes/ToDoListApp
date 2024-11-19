package br.com.sandes.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class EmptySearchException extends RuntimeException {

    public EmptySearchException(String message){
        super(message);
    }
}
