package educlass.com.Stdudent.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import educlass.com.Stdudent.entity.Store;


public interface StoreRepo extends JpaRepository<Store, Integer>{


}
