package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookService;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
       // Load the Spring container
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve the service bean
        BookService bookService = (BookService) context.getBean("bookService");

        // Call method to test DI
        bookService.addBook("Spring in Action");
    }
}
