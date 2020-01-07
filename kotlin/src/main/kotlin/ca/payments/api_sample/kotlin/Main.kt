package ca.payments.api_sample.kotlin

import ca.payments.api_sample.kotlin.services.ApiRepository
import kotlinx.coroutines.runBlocking
import kotlin.system.exitProcess

fun main(args: Array<String>) {
    if (args.size < 1) {
        error("Must pass in a DPRN. Format is ./command [dprn]")
    }

    val dprn = args[0]

    //run coroutine on main thread
    runBlocking {
        val apiRepository = ApiRepository()

        println("Getting Token")
        val token = apiRepository.getAccessToken()
        println("Token Received")

        println("Getting Branch")
        val branch = apiRepository.getBranch(dprn, token.accessToken)

        println("Branch received: ")
        println(branch)
    }

    println("done!")
    exitProcess(0)
}

fun String.isNumeric(): Boolean = try {
    this.toInt()
    true
} catch (e: NumberFormatException) {
    false
}
