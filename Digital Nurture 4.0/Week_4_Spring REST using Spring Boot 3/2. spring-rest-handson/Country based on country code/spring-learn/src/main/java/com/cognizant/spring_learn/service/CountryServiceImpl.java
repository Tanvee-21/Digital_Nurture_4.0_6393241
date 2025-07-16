package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.model.Country;
import org.springframework.stereotype.Service;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import jakarta.annotation.PostConstruct;

import java.util.List;

@Service
public class CountryServiceImpl implements CountryService {

    private List<Country> countryList;

    // Load the country list from XML after bean initialization
    @PostConstruct
    public void init() {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        // Here we load the countryList defined in XML (note the bean id "countryList")
        countryList = (List<Country>) context.getBean("countryList");
        context.close();
    }

    @Override
    public Country getCountry(String code) {
        // Use a lambda expression to perform a case-insensitive search
        return countryList.stream()
                .filter(country -> country.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
    }
}
