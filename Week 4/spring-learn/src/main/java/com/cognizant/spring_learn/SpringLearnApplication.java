package com.cognizant.spring_learn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringLearnApplication implements CommandLineRunner {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(SpringLearnApplication.class, args);
    }

    @Override
    public void run(String... args) {
        LOGGER.debug("START");
        displayCountry();
        LOGGER.debug("END");
    }

    public void displayCountry() {
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml")) {
            Country country = context.getBean("country", Country.class);
            LOGGER.debug("Country : {}", country.toString());
        } catch (Exception e) {
            LOGGER.error("Exception while loading country bean: {}", e.getMessage(), e);
        }
    }
}
