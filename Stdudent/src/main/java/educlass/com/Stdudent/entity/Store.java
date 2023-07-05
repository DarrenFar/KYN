package educlass.com.Stdudent.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Store {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String name;
	private String address;
	private String phone;
	private String description;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	@Override
	public String toString() {
		return "Store [id=" + id + ", name=" + name + ", address=" + address + ", phone=" + phone + ", description="
				+ description + "]";
	}
	public Store(Long id, String name, String address, String phone, String description) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.phone = phone;
		this.description = description;
	}
	public Store() {

	}
	
	
}
