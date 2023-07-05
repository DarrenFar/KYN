package educlass.com.Stdudent.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



import educlass.com.Stdudent.entity.Customer;
import educlass.com.Stdudent.entity.Store;
import educlass.com.Stdudent.entity.User;
import educlass.com.Stdudent.service.StudentImp;

@RestController
@RequestMapping("/api/private")
public class StudentRestController {
	@Autowired
	StudentImp stservice;
	
	@GetMapping("/testrest")
	public String testmethod()
	{
		return "hello";
	}
		 
	//show all the records
	 @GetMapping("/showcust")
		public List<User> showcust()
		{
			return stservice.ShowCustomer();
		}
	 
	 @GetMapping("/showstore")
		public List<Store> showstore()
		{
			return stservice.ShowStore();
		}
	 
	    @PostMapping(value = "/addstore")
	    public String addStore(@RequestBody Store store) {
	        stservice.AddStore(store);
	        return "Data Added";
	    }
	 
	
	
}
