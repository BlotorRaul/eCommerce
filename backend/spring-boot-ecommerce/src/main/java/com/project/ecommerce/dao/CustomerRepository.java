package com.project.ecommerce.dao;

import com.project.ecommerce.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Long> {

    Customer findByEmail(String theEmail);
}
