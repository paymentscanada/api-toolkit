package ca.payments.api_sample.kotlin.config

import java.io.FileReader
import java.util.*

object ApiProperties {
    private val properties = Properties()

    val apiConsumerKey: String
    val apiConsumerSecret: String
    val apiBaseUrl: String
    const val apiTokenUrl: String = "/accesstoken"
    const val apiBranchesUrl: String = "/fif-branch-sandbox/branches/"

    init {
        val reader = FileReader(javaClass.classLoader.getResource("application.properties").toURI().path)
        properties.load(reader)

        apiConsumerKey = properties.getProperty("api-consumer-key")
        apiConsumerSecret = properties.getProperty("api-consumer-secret")
        apiBaseUrl = properties.getProperty("api-base-url")
    }
}
