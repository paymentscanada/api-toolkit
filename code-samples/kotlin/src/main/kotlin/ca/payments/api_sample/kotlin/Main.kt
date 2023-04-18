package ca.payments.api_sample.kotlin

import ca.payments.api_sample.kotlin.repository.ApiRepository
import feign.FeignException
import org.slf4j.LoggerFactory
import kotlin.system.exitProcess

class Main {
    companion object {
        private val logger = LoggerFactory.getLogger(Main::class.java)
    }

    fun run(dprn: String) {
        val apiRepository = ApiRepository()

        logger.info("Getting Token")
        val token = try {
            apiRepository.getAccessToken()
        } catch (e: FeignException) {
            logger.error("Failed to retrieve token, check application.properties and ensure you have the correct apiConsumerKey and apiConsumerSecret")
            exitProcess(-1)
        }

        logger.info("Token Received")

        logger.info("Getting Branch")
        val branch = try {
            apiRepository.getBranch(dprn, token.accessToken)
        } catch (e: FeignException) {
            logger.error("Received error ${e.status()} - ${e.contentUTF8()}")
            exitProcess(-2)
        }

        logger.info("Branch received: ")
        logger.info(branch.toString())


        exitProcess(0)
    }
}

fun main(args: Array<String>) {
    if (args.isEmpty()) {
        error("Must pass in a DPRN. Format is ./command [dprn]")
    }

    Main().run(args[0])
}
