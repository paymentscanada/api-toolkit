package ca.payments.api_sample.kotlin.model

import com.fasterxml.jackson.annotation.JsonIgnoreProperties

@JsonIgnoreProperties(ignoreUnknown = true)
class BranchResponseModel(
    val branchClassification: String?,
    val branchDomicile: String?,
    val civicAddress: String?,
    val crossReferenceNumber: String?,
    val effectiveDate: String?,
    val englishInstitutionName: String?,
    val exchangePoint: String?,
    val frenchInstitutionName: String?,
    val identificationNumber: String?,
    val indirectCreditsAcctNumber: String?,
    val indirectCreditsBranchIDNumber: String?,
    val indirectMICRAcctNumber: String?,
    val indirectMICRBranchIDNumber: String?,
    val languageCode: String?,
    val postalAddress: String?,
    var postalCode: String?,
    val provinceCode: String?,
    val servicabilityCode: String?,
    val status: String?,
    val townCity: String?
) {
    override fun toString(): String {
        return """BranchResponseModel(
                  |  branchClassification=$branchClassification, 
                  |  branchDomicile=$branchDomicile, 
                  |  civicAddress=$civicAddress, 
                  |  crossReferenceNumber=$crossReferenceNumber, 
                  |  effectiveDate=$effectiveDate, 
                  |  englishInstitutionName=$englishInstitutionName, 
                  |  exchangePoint=$exchangePoint, 
                  |  frenchInstitutionName=$frenchInstitutionName, 
                  |  identificationNumber=$identificationNumber, 
                  |  indirectCreditsAcctNumber=$indirectCreditsAcctNumber, 
                  |  indirectCreditsBranchIDNumber=$indirectCreditsBranchIDNumber, 
                  |  indirectMICRAcctNumber=$indirectMICRAcctNumber, 
                  |  indirectMICRBranchIDNumber=$indirectMICRBranchIDNumber, 
                  |  languageCode=$languageCode, 
                  |  postalAddress=$postalAddress, 
                  |  postalCode=$postalCode, 
                  |  provinceCode=$provinceCode, 
                  |  servicabilityCode=$servicabilityCode, 
                  |  status=$status, 
                  |  townCity=$townCity
                  |)""".trimMargin()
    }
}
