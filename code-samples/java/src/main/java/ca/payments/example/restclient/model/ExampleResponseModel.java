package ca.payments.example.restclient.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ExampleResponseModel {
    private String branchClassification;
    private String branchDomicile;
    private String civicAddress;
    private String crossReferenceNumber;
    private String effectiveDate;
    private String englishInstitutionName;
    private String exchangePoint;
    private String frenchInstitutionName;
    private String identificationNumber;
    private String indirectCreditsAcctNumber;
    private String indirectCreditsBranchIDNumber;
    private String indirectMICRAcctNumber;
    private String indirectMICRBranchIDNumber;
    private String languageCode;
    private String postalAddress;
    private String postalCode;
    private String provinceCode;
    private String servicabilityCode;
    private String status;
    private String townCity;

    public String getBranchClassification() {
        return branchClassification;
    }

    public void setBranchClassification(String branchClassification) {
        this.branchClassification = branchClassification;
    }

    public String getBranchDomicile() {
        return branchDomicile;
    }

    public void setBranchDomicile(String branchDomicile) {
        this.branchDomicile = branchDomicile;
    }

    public String getCivicAddress() {
        return civicAddress;
    }

    public void setCivicAddress(String civicAddress) {
        this.civicAddress = civicAddress;
    }

    public String getCrossReferenceNumber() {
        return crossReferenceNumber;
    }

    public void setCrossReferenceNumber(String crossReferenceNumber) {
        this.crossReferenceNumber = crossReferenceNumber;
    }

    public String getEffectiveDate() {
        return effectiveDate;
    }

    public void setEffectiveDate(String effectiveDate) {
        this.effectiveDate = effectiveDate;
    }

    public String getEnglishInstitutionName() {
        return englishInstitutionName;
    }

    public void setEnglishInstitutionName(String englishInstitutionName) {
        this.englishInstitutionName = englishInstitutionName;
    }

    public String getExchangePoint() {
        return exchangePoint;
    }

    public void setExchangePoint(String exchangePoint) {
        this.exchangePoint = exchangePoint;
    }

    public String getFrenchInstitutionName() {
        return frenchInstitutionName;
    }

    public void setFrenchInstitutionName(String frenchInstitutionName) {
        this.frenchInstitutionName = frenchInstitutionName;
    }

    public String getIdentificationNumber() {
        return identificationNumber;
    }

    public void setIdentificationNumber(String identificationNumber) {
        this.identificationNumber = identificationNumber;
    }

    public String getIndirectCreditsAcctNumber() {
        return indirectCreditsAcctNumber;
    }

    public void setIndirectCreditsAcctNumber(String indirectCreditsAcctNumber) {
        this.indirectCreditsAcctNumber = indirectCreditsAcctNumber;
    }

    public String getIndirectCreditsBranchIDNumber() {
        return indirectCreditsBranchIDNumber;
    }

    public void setIndirectCreditsBranchIDNumber(String indirectCreditsBranchIDNumber) {
        this.indirectCreditsBranchIDNumber = indirectCreditsBranchIDNumber;
    }

    public String getIndirectMICRAcctNumber() {
        return indirectMICRAcctNumber;
    }

    public void setIndirectMICRAcctNumber(String indirectMICRAcctNumber) {
        this.indirectMICRAcctNumber = indirectMICRAcctNumber;
    }

    public String getIndirectMICRBranchIDNumber() {
        return indirectMICRBranchIDNumber;
    }

    public void setIndirectMICRBranchIDNumber(String indirectMICRBranchIDNumber) {
        this.indirectMICRBranchIDNumber = indirectMICRBranchIDNumber;
    }

    public String getLanguageCode() {
        return languageCode;
    }

    public void setLanguageCode(String languageCode) {
        this.languageCode = languageCode;
    }

    public String getPostalAddress() {
        return postalAddress;
    }

    public void setPostalAddress(String postalAddress) {
        this.postalAddress = postalAddress;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getProvinceCode() {
        return provinceCode;
    }

    public void setProvinceCode(String provinceCode) {
        this.provinceCode = provinceCode;
    }

    public String getServicabilityCode() {
        return servicabilityCode;
    }

    public void setServicabilityCode(String servicabilityCode) {
        this.servicabilityCode = servicabilityCode;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getTownCity() {
        return townCity;
    }

    public void setTownCity(String townCity) {
        this.townCity = townCity;
    }

    @Override
    public String toString() {
        return "ExampleResponseModel{" +
                "branchClassification='" + branchClassification + '\'' +
                ", branchDomicile='" + branchDomicile + '\'' +
                ", civicAddress='" + civicAddress + '\'' +
                ", crossReferenceNumber='" + crossReferenceNumber + '\'' +
                ", effectiveDate='" + effectiveDate + '\'' +
                ", englishInstitutionName='" + englishInstitutionName + '\'' +
                ", exchangePoint='" + exchangePoint + '\'' +
                ", frenchInstitutionName='" + frenchInstitutionName + '\'' +
                ", identificationNumber='" + identificationNumber + '\'' +
                ", indirectCreditsAcctNumber='" + indirectCreditsAcctNumber + '\'' +
                ", indirectCreditsBranchIDNumber='" + indirectCreditsBranchIDNumber + '\'' +
                ", indirectMICRAcctNumber='" + indirectMICRAcctNumber + '\'' +
                ", indirectMICRBranchIDNumber='" + indirectMICRBranchIDNumber + '\'' +
                ", languageCode='" + languageCode + '\'' +
                ", postalAddress='" + postalAddress + '\'' +
                ", postalCode='" + postalCode + '\'' +
                ", provinceCode='" + provinceCode + '\'' +
                ", servicabilityCode='" + servicabilityCode + '\'' +
                ", status='" + status + '\'' +
                ", townCity='" + townCity + '\'' +
                '}';
    }
}
