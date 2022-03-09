package ca.payments.example.restclient.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class AccessTokenModel {
    private String refreshTokenExpiresIn;
    private String organizationName;
    private String developerEmail;
    private String token_type;
    private String issuedAt;
    private String clientId;
    private String accessToken;
    private String applicationName;
    private String scope;
    private String expiresIn;
    private String refreshCount;
    private String status;

    public String getRefreshTokenExpiresIn() {
        return refreshTokenExpiresIn;
    }

    public void setRefreshTokenExpiresIn(String refreshTokenExpiresIn) {
        this.refreshTokenExpiresIn = refreshTokenExpiresIn;
    }

    public String getOrganizationName() {
        return organizationName;
    }

    public void setOrganizationName(String organizationName) {
        this.organizationName = organizationName;
    }

    public String getDeveloperEmail() {
        return developerEmail;
    }

    public void setDeveloperEmail(String developerEmail) {
        this.developerEmail = developerEmail;
    }

    public String getToken_type() {
        return token_type;
    }

    public void setToken_type(String token_type) {
        this.token_type = token_type;
    }

    public String getIssuedAt() {
        return issuedAt;
    }

    public void setIssuedAt(String issuedAt) {
        this.issuedAt = issuedAt;
    }

    public String getClientId() {
        return clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getApplicationName() {
        return applicationName;
    }

    public void setApplicationName(String applicationName) {
        this.applicationName = applicationName;
    }

    public String getScope() {
        return scope;
    }

    public void setScope(String scope) {
        this.scope = scope;
    }

    public String getExpiresIn() {
        return expiresIn;
    }

    public void setExpiresIn(String expiresIn) {
        this.expiresIn = expiresIn;
    }

    public String getRefreshCount() {
        return refreshCount;
    }

    public void setRefreshCount(String refreshCount) {
        this.refreshCount = refreshCount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "AccessTokenModel{" +
                "refresh_token_expires_in='" + refreshTokenExpiresIn + '\'' +
                ", organization_name='" + organizationName + '\'' +
                ", developerEmail='" + developerEmail + '\'' +
                ", token_type='" + token_type + '\'' +
                ", issued_at='" + issuedAt + '\'' +
                ", client_id='" + clientId + '\'' +
                ", access_token='" + accessToken + '\'' +
                ", application_name='" + applicationName + '\'' +
                ", scope='" + scope + '\'' +
                ", expires_in='" + expiresIn + '\'' +
                ", refresh_count='" + refreshCount + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
