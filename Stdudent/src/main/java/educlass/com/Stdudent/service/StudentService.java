package educlass.com.Stdudent.service;

import java.util.List;

import org.springframework.stereotype.Service;


import educlass.com.Stdudent.entity.Customer;
import educlass.com.Stdudent.entity.Store;
import educlass.com.Stdudent.entity.User;


public interface StudentService  {
 void AddCustomer(User user);
 void AddStore(Store store);
 void DeleteCustomer(User user);
 public List<User> ShowCustomer();
 public List<Store> ShowStore();

 
}
