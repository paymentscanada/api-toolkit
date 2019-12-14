package ca.payments.example.restclient.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class AccessTokenModel {
    private String refresh_token_expires_in;
    private String organization_name;
    private String developerEmail;
    private String token_type;
    private String issued_at;
    private String client_id;
    private String access_token;
    private String application_name;
    private String scope;
    private String expires_in;
    private String refresh_count;
    private String status;

    public String getRefresh_token_expires_in() {
        return refresh_token_expires_in;
    }

    public void setRefresh_token_expires_in(String refresh_token_expires_in) {
        this.refresh_token_expires_in = refresh_token_expires_in;
    }

    public String getOrganization_name() {
        return organization_name;
    }

    public void setOrganization_name(String organization_name) {
        this.organization_name = organization_name;
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

    public String getIssued_at() {
        return issued_at;
    }

    public void setIssued_at(String issued_at) {
        this.issued_at = issued_at;
    }

    public String getClient_id() {
        return client_id;
    }

    public void setClient_id(String client_id) {
        this.client_id = client_id;
    }

    public String getAccess_token() {
        return access_token;
    }

    public void setAccess_token(String access_token) {
        this.access_token = access_token;
    }

    public String getApplication_name() {
        return application_name;
    }

    public void setApplication_name(String application_name) {
        this.application_name = application_name;
    }

    public String getScope() {
        return scope;
    }

    public void setScope(String scope) {
        this.scope = scope;
    }

    public String getExpires_in() {
        return expires_in;
    }

    public void setExpires_in(String expires_in) {
        this.expires_in = expires_in;
    }

    public String getRefresh_count() {
        return refresh_count;
    }

    public void setRefresh_count(String refresh_count) {
        this.refresh_count = refresh_count;
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
                "refresh_token_expires_in='" + refresh_token_expires_in + '\'' +
                ", organization_name='" + organization_name + '\'' +
                ", developerEmail='" + developerEmail + '\'' +
                ", token_type='" + token_type + '\'' +
                ", issued_at='" + issued_at + '\'' +
                ", client_id='" + client_id + '\'' +
                ", access_token='" + access_token + '\'' +
                ", application_name='" + application_name + '\'' +
                ", scope='" + scope + '\'' +
                ", expires_in='" + expires_in + '\'' +
                ", refresh_count='" + refresh_count + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
