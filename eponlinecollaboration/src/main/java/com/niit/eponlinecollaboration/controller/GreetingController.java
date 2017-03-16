package com.niit.eponlinecollaboration.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.niit.eponlinecollaboration.model.DomainResponse;

@RestController
public class GreetingController {
	
	
	@RequestMapping("/greeting")
	public ResponseEntity<DomainResponse> greeting()
	{
		return new ResponseEntity<>(new DomainResponse("Welcome from Spring RestController", 200),HttpStatus.OK);
	}
	

}
