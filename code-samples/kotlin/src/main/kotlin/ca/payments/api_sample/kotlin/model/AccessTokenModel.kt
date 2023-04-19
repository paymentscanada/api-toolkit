package ca.payments.api_sample.kotlin.model

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.databind.PropertyNamingStrategies
import com.fasterxml.jackson.databind.PropertyNamingStrategy.SnakeCaseStrategy
import com.fasterxml.jackson.databind.annotation.JsonNaming

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy::class)
data class AccessTokenModel(
    val refreshTokenExpiresIn: String?,
    val organizationName: String?,
    val developerEmail: String?,
    val token_type: String?,
    val issuedAt: String?,
    val clientId: String?,
    val accessToken: String,
    val applicationName: String?,
    val scope: String?,
    val expiresIn: String?,
    val refreshCount: String?,
    val status: String? = null
) {
    override fun toString(): String {
        return "AccessTokenModel(refreshTokenExpiresIn=$refreshTokenExpiresIn, organizationName=$organizationName, developerEmail=$developerEmail, token_type=$token_type, issuedAt=$issuedAt, clientId=$clientId, accessToken='$accessToken', applicationName=$applicationName, scope=$scope, expiresIn=$expiresIn, refreshCount=$refreshCount, status=$status)"
    }
}
