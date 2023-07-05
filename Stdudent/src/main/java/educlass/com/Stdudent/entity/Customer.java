package educlass.com.Stdudent.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="customer")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="customer_Id")
	private Integer customerId;
	@Column(name="customer_Name")
	private String customerName;
	@Column(name="customer_Email")
	private String customerEmail;
	@Column(name="customer_Phone")
	private String customerPhone;
	@Column(name="customer_Message")
	private String customerMessage;

	public Customer() {
		
	}

	public Integer getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Integer customerId) {
		this.customerId = customerId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerEmail() {
		return customerEmail;
	}

	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}

	public String getCustomerPhone() {
		return customerPhone;
	}

	public void setCustomerPhone(String customerPhone) {
		this.customerPhone = customerPhone;
	}

	public String getCustomerMessage() {
		return customerMessage;
	}

	public void setCustomerMessage(String customerMessage) {
		this.customerMessage = customerMessage;
	}

	public Customer(Integer customerId, String customerName, String customerEmail, String customerPhone,
			String customerMessage) {
		super();
		this.customerId = customerId;
		this.customerName = customerName;
		this.customerEmail = customerEmail;
		this.customerPhone = customerPhone;
		this.customerMessage = customerMessage;
	}

	@Override
	public String toString() {
		return "Customer [customerId=" + customerId + ", customerName=" + customerName + ", customerEmail="
				+ customerEmail + ", customerPhone=" + customerPhone + ", customerMessage=" + customerMessage + "]";
	}


	

}
