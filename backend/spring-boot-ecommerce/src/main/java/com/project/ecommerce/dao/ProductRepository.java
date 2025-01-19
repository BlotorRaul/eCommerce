package com.project.ecommerce.dao;

import com.project.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@RepositoryRestResource
public interface ProductRepository extends JpaRepository<Product,Long> {

    //behind the scenes: select * from product where category_id = ?
    Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);

    //select * from Product p where
    //p.name like concat('%', :name, '%')
    Page<Product>findByNameContaining(@RequestParam("name") String name, Pageable pageable);
}
