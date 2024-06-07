package com.intersoft.occupancy.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="AssetOccupancy")

public class AssetOccupancy {
	@Id
	@Column
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column
	private String Status;
	
	@Column(name="not_secure")
	private String NotSecure;
	
	@Column
	private String NotSecure_SpecifyOther;
	
	@Column
	private String VerifiedBy;
	
	@Column
	private String OccupancyVerifiedWithID;
	
	@Column
	private String VerifiedWithName;
	
	@Column
	private String VerifiedWithAddress;
	
	@Column
	private int PhoneNumber;
	
	@Column
	private String AttitudeID;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNotSecure_SpecifyOther() {
		return NotSecure_SpecifyOther;
	}
	public void setNotSecure_SpecifyOther(String notSecure_SpecifyOther) {
		NotSecure_SpecifyOther = notSecure_SpecifyOther;
	}
	public AssetOccupancy(int id, String status, String notSecure, String notSecure_SpecifyOther,
			String verifiedBy, String occupancyVerifiedWithID, String verifiedWithName, String verifiedWithAddress,
			int phoneNumber, String attitudeID, String visualEvidence, String specifyOtherVerifiedBy) {
		super();
		this.id = id;
		Status = status;
		NotSecure = notSecure;
		NotSecure_SpecifyOther = notSecure_SpecifyOther;
		VerifiedBy = verifiedBy;
		OccupancyVerifiedWithID = occupancyVerifiedWithID;
		VerifiedWithName = verifiedWithName;
		VerifiedWithAddress = verifiedWithAddress;
		PhoneNumber = phoneNumber;
		AttitudeID = attitudeID;
		VisualEvidence = visualEvidence;
		SpecifyOtherVerifiedBy = specifyOtherVerifiedBy;
	}
	private String VisualEvidence;
	private String SpecifyOtherVerifiedBy;

	public String getStatus() {
		return Status;
	}
	public void setStatus(String status) {
		this.Status = status;
	}
	public String getNotSecure() {
		return NotSecure;
	}
	public void setNotSecure(String NotSecure) {
		this.NotSecure = NotSecure;
	}
	public String getNotSecureOther() {
		return NotSecure_SpecifyOther;
	}
	public void setNotSecureOther(String NotSecure_SpecifyOther) {
		this.NotSecure_SpecifyOther = NotSecure_SpecifyOther;
	}
	public String getVerifiedBy() {
		return VerifiedBy;
	}
	public void setVerifiedBy(String VerifiedBy) {
		this.VerifiedBy = VerifiedBy;
	}
	public String getOccupancyVerifiedWithID() {
		return OccupancyVerifiedWithID;
	}
	public void setOccupancyVerifiedWithID(String OccupancyVerifiedWithID) {
		this.OccupancyVerifiedWithID = OccupancyVerifiedWithID;
	}
	public String getVerifiedWithName() {
		return VerifiedWithName;
	}
	public void setVerifiedWithName(String VerifiedWithName) {
		this.VerifiedWithName = VerifiedWithName;
	}
	public String getVerifiedWithAddress() {
		return VerifiedWithAddress;
	}
	public void setVerifiedWithAddress(String VerifiedWithAddress) {
		this.VerifiedWithAddress = VerifiedWithAddress;
	}
	public int getPhoneNumber() {
		return PhoneNumber;
	}
	public void setPhoneNumber(int PhoneNumber) {
		this.PhoneNumber = PhoneNumber;
	}
	public String getAttitudeID() {
		return AttitudeID;
	}
	public void setAttitudeID(String AttitudeID) {
		this.AttitudeID = AttitudeID;
	}
	public String getVisualEvidence() {
		return VisualEvidence;
	}
	public void setVisualEvidence(String VisualEvidence) {
		this.VisualEvidence = VisualEvidence;
	}
	public String getSpecifyOtherVerifiedBy() {
		return SpecifyOtherVerifiedBy;
	}
	public void setSpecifyOtherVerifiedBy(String SpecifyOtherVerifiedBy) {
		this.SpecifyOtherVerifiedBy = SpecifyOtherVerifiedBy;
	}
}
