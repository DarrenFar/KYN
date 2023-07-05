package educlass.com.Stdudent.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import educlass.com.Stdudent.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}