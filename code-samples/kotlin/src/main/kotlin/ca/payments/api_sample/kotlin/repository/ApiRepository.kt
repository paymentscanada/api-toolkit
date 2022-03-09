package ca.payments.api_sample.kotlin.repository

import ca.payments.api_sample.kotlin.config.ApiProperties
import ca.payments.api_sample.kotlin.model.AccessTokenModel
import ca.payments.api_sample.kotlin.model.BranchResponseModel
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.KotlinModule
import okhttp3.Credentials
import retrofit2.Retrofit
import retrofit2.converter.jackson.JacksonConverterFactory
import retrofit2.http.*

private interface ApiService {
    @FormUrlEncoded
    @Headers("Content-Type: application/x-www-form-urlencoded")
    @POST(ApiProperties.apiTokenUrl)
    suspend fun getAccessToken(@Header("Authorization") authorization: String, @Field("grant_type") body: String = "client_credentials"): AccessTokenModel

    @Headers("Accept: application/vnd.fif.api.v1+json")
    @GET(ApiProperties.apiBranchesUrl + "/{dprn}")
    suspend fun getBranch(@Path("dprn") dprn: String, @Header("Authorization") authorization: String): BranchResponseModel
}

class ApiRepository {
    private val objectMapper by lazy {
        val om = ObjectMapper()
        om.registerModule(KotlinModule())
    }

    private val apiService by lazy {
        Retrofit.Builder()
            .baseUrl(ApiProperties.apiBaseUrl)
            .addConverterFactory(JacksonConverterFactory.create(objectMapper))
            .build().create(ApiService::class.java)
    }

    /**
     * Gets an access token using the consumer key and consumer secret
     */
    suspend fun getAccessToken(): AccessTokenModel {
        val basic = Credentials.basic(ApiProperties.apiConsumerKey, ApiProperties.apiConsumerSecret)
        return apiService.getAccessToken(basic)
    }

    /**
     * Gets a branch
     * @param dprn: The DPRN for the branch you are looking for
     * @param accessToken: The access token retrieved from [getAccessToken]
     */
    suspend fun getBranch(dprn: String, accessToken: String): BranchResponseModel {
        return apiService.getBranch(dprn, "Bearer ${accessToken}")
    }
}
