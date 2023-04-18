package ca.payments.api_sample.kotlin.repository

import ca.payments.api_sample.kotlin.config.ApiProperties
import ca.payments.api_sample.kotlin.model.AccessTokenModel
import ca.payments.api_sample.kotlin.model.BranchResponseModel
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import feign.*
import feign.jackson.JacksonDecoder
import feign.jackson.JacksonEncoder
import feign.okhttp.OkHttpClient
import feign.slf4j.Slf4jLogger
import okhttp3.Credentials

private interface ApiService {

    @Headers("Content-Type: application/x-www-form-urlencoded")
    @RequestLine("POST ${ApiProperties.apiTokenUrl}")
    @Body("grant_type={grantType}")
    fun getAccessToken(@HeaderMap headers: Map<String, Any>, @Param("grantType") body: String = "client_credentials"): AccessTokenModel

    @Headers("Accept: application/vnd.fif.api.v1+json")
    @RequestLine("GET ${ApiProperties.apiBranchesUrl}/{dprn}")
    fun getBranch(@Param("dprn") dprn: String, @HeaderMap headers: Map<String, Any>): BranchResponseModel
}

class ApiRepository {
    private val apiService by lazy {
        val mapper = jacksonObjectMapper()

        Feign.builder()
            .client(OkHttpClient())
            .encoder(JacksonEncoder(mapper))
            .decoder(JacksonDecoder(mapper))
            .logger(Slf4jLogger(this.javaClass))
            .logLevel(Logger.Level.FULL)
            .target(ApiService::class.java, ApiProperties.apiBaseUrl)
    }

    /**
     * Gets an access token using the consumer key and consumer secret
     */
    fun getAccessToken(): AccessTokenModel {
        val basic = Credentials.basic(ApiProperties.apiConsumerKey, ApiProperties.apiConsumerSecret)
        val headers = mapOf("Authorization" to basic)
        return apiService.getAccessToken(headers)
    }

    /**
     * Gets a branch
     * @param dprn: The DPRN for the branch you are looking for
     * @param accessToken: The access token retrieved from [getAccessToken]
     */
    fun getBranch(dprn: String, accessToken: String): BranchResponseModel {
        val headers = mapOf("Authorization" to "Bearer ${accessToken}")
        return apiService.getBranch(dprn, headers)
    }
}
