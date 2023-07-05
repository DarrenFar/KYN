package educlass.com.Stdudent.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import educlass.com.Stdudent.entity.LoginRequest;
import educlass.com.Stdudent.entity.User;
import educlass.com.Stdudent.service.StudentImp;

@RestController
//@RequestMapping("/api/login")
public class LoginController {

    private final AuthenticationManager authenticationManager;
    
	@Autowired
	StudentImp stservice;

    @Autowired
    public LoginController(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/api/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            System.out.println("Login successful");
            return "Login successful";
        } catch (BadCredentialsException ex) {
        	System.out.println("Login failed");
            return "Username or password is incorrect";
        }
    }
    
	//register 
	
    @PostMapping(value = "/adduser")
    public String addProduct(@RequestBody User user) {
        // Encrypt the password using BCryptPasswordEncoder
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);
        
        System.out.println(user.getName());
        stservice.AddCustomer(user);
        return "Data Added";
    }
}