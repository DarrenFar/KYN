package educlass.com.Stdudent.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import educlass.com.Stdudent.entity.Customer;
import educlass.com.Stdudent.entity.User;

public interface StudentRepo extends JpaRepository<User, Integer>{


}
