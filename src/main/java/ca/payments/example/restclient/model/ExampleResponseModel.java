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

}
