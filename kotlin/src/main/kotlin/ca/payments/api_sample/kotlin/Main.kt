package ca.payments.api_sample.kotlin

import ca.payments.api_sample.kotlin.repository.ApiRepository
import kotlinx.coroutines.*
import org.slf4j.LoggerFactory
import retrofit2.HttpException
import kotlin.system.exitProcess

class Main {
    companion object {
        private val logger = LoggerFactory.getLogger(Main::class.java)
    }

    fun run(dprn: String) {
        //run coroutines on main thread
        runBlocking {
            val apiRepository = ApiRepository()

            logger.info("Getting Token")
            val token = try {
                apiRepository.getAccessToken()
            } catch (e: HttpException) {
                logger.error("Failed to retrieve token, check application.properties apiConsumerKey and apiConsumerSecret")
                exitProcess(-1)
            }

            logger.info("Token Received")

            logger.info("Getting Branch")
            val branch = try {
                apiRepository.getBranch(dprn, token.accessToken)
            } catch (e: HttpException) {
                val errorBody = withContext(Dispatchers.IO) { e.response()?.errorBody()?.string() }
                logger.error("Received error ${e.code()} - ${errorBody}")
                exitProcess(-2)
            }

            logger.info("Branch received: ")
            logger.info(branch.toString())
        }


        exitProcess(0)
    }
}

fun main(args: Array<String>) {
    if (args.size < 1) {
        error("Must pass in a DPRN. Format is ./command [dprn]")
    }

    Main().run(args[0])
}
