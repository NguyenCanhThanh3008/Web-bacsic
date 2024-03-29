package fa.training.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class UserProduct implements Serializable{
	/**
	 * @author 	Nguyen Ngoc Tuan
	 * @birthDay	01/01/2001
	 * @file 	UserProduct.java
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_product_id")
	private int userProductId;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private AppUser userId;
	
	@ManyToOne
	@JoinColumn(name = "product_id")
	private Product productId;
	
	private int quantity;
	
	@ManyToOne
	@JoinColumn(name = "bill_id")
	private Bill billId;
}
