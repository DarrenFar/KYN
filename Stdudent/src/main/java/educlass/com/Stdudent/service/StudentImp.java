package educlass.com.Stdudent.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import educlass.com.Stdudent.entity.Customer;
import educlass.com.Stdudent.entity.Store;
import educlass.com.Stdudent.entity.User;
import educlass.com.Stdudent.repos.StoreRepo;
import educlass.com.Stdudent.repos.StudentRepo;

@Service("StudentService")
public class StudentImp implements StudentService {
	@Autowired
	StudentRepo st;
	
	@Autowired
	StoreRepo sr;
	
	
	@Override
	public void AddCustomer(User user) {
		
		st.save(user);
		System.out.println("added");
		// TODO Auto-generated method stub
		
	}
	
	@Override
	public void AddStore(Store store) {
		
		sr.save(store);
		System.out.println("added");
		// TODO Auto-generated method stub
		
	}
	
	@Override
	public void DeleteCustomer(User user) {
	st.delete(user);
	
	}
	@Override
	public List<User> ShowCustomer() {
		// TODO Auto-generated method stub
		
		return st.findAll();
	}
	
	@Override
	public List<Store> ShowStore() {
		// TODO Auto-generated method stub
		
		return sr.findAll();
	}
	




}
