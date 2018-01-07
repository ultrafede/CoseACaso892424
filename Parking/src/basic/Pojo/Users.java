package basic.Pojo;

import java.io.Serializable;

//prova commento per commit
/**
 * 
 * @author user
 *
 */
public class Users implements Cloneable
{
	private String fname;
	private String lname;
	private String gender;
	private String username;
	private String password;
	private String dob;
	private String area;
	private String state;
	private String city;
	private String country;
	private String usertype;
	private int id;
	private int pincode;
	private float latitude;
	private float longitude;
	
	public final Users clone() throws CloneNotSupportedException{
		return super.clone();
	}

	public String getFname() {
		return fname;
	}
	
	public void setUser(String fname,String lname,String gender, String usertype){
		this.fname = fname;
		this.lname = lname;
		this.gender = gender;
		this.usertype = usertype;
	}

	public String getLname() {
		return lname;
	}

	public String getGender() {
		return gender;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDob() {
		return dob;
	}
	
	public void setLocation(String dob, String area, String state, String city, String country){
		this.dob = dob;
		this.area = area;
		this.state = state;
		this.city = city;
		this.country = country;
		
	}

	public String getArea() {
		return area;
	}

	public String getState() {
		return state;
	}

	public String getCity() {
		return city;
	}

	public String getCountry() {
		return country;
	}

	public String getUsertype() {
		return usertype;
	}

	public int getId() {
		return id;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public float getLatitude() {
		return latitude;
	}
	
	public void setCoordinates(float latitude,float longitude){
		this.latitude = latitude;
		this.longitude = longitude;
	}

	public float getLongitude() {
		return longitude;
	}

	public Users(String fname, String lname, String gender, String username, String password, String dob, String area,
			String state, String city, String country, String usertype, int id, int pincode, float latitude,
			float longitude) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.gender = gender;
		this.username = username;
		this.password = password;
		this.dob = dob;
		this.area = area;
		this.state = state;
		this.city = city;
		this.country = country;
		this.usertype = usertype;
		this.id = id;
		this.pincode = pincode;
		this.latitude = latitude;
		this.longitude = longitude;
	    this.unique = id;
	}

	public Users() {
		super();
		this.fname = null;
		this.lname = null;
		this.gender = null;
		this.username = null;
		this.password = null;
		this.dob = null;
		this.area = null;
		this.state = null;
		this.city = null;
		this.country = null;
		this.usertype = null;
		this.id = 0;
		this.pincode = 0;
		this.latitude = 0.0f;
		this.longitude = 0.0f;
		this.unique = id;
	}

	@Override
	public String toString() {
		return "Users [fname=" + fname + ", lname=" + lname + ", gender=" + gender + ", username=" + username
				+ ", password=" + password + ", dob=" + dob + ", area=" + area + ", state=" + state + ", city=" + city
				+ ", country=" + country + ", usertype=" + usertype + ", id=" + id + ", pincode=" + pincode
				+ ", latitude=" + latitude + ", longitude=" + longitude + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
	
		result = prime * result + unique;		
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + ((username == null) ? 0 : username.hashCode());
		result = prime * result + ((usertype == null) ? 0 : usertype.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (obj == null) 
			{return false;}
		if (getClass() != obj.getClass()) 
			{return false;}
		Users other = (Users) obj;
		if (username == null) {
			if (other.username != null) 
				{return false;}
		} else if (!username.equals(other.username))
			{return false;}
		if ((usertype == null && other.usertype != null))
			{return false;}
		return (usertype.equals(other.usertype)); // da togliere eventualmente

	}
	
}
