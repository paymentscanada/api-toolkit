val openfeign_version: String by project
val jackson_version: String by project
val slf4j_version: String by project
val logback_version: String by project


plugins {
    kotlin("jvm") version "1.8.10"
    application
}

group = "ca.payments"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    implementation(kotlin("stdlib-jdk8"))

    implementation("io.github.openfeign:feign-kotlin:$openfeign_version")
    implementation("io.github.openfeign:feign-okhttp:$openfeign_version")
    implementation("io.github.openfeign:feign-slf4j:$openfeign_version")
    implementation("io.github.openfeign:feign-jackson:$openfeign_version")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin:$jackson_version")

    implementation("ch.qos.logback:logback-classic:$logback_version")
    implementation("ch.qos.logback:logback-core:$logback_version")
}

kotlin {
    jvmToolchain(11)
}

application {
    mainClass.set("ca.payments.api_sample.kotlin.MainKt")
}