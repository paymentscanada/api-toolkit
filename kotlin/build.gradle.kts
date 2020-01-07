val okhttp_version: String by project
val retrofit_version: String by project
val coroutines_version: String by project
val jackson_version: String by project


plugins {
    kotlin("jvm") version "1.3.61"
    application
}

group = "ca.payments"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

application {
    mainClassName = "ca.payments.api_sample.kotlin.MainKt"
}

dependencies {
    implementation(kotlin("stdlib-jdk8"))
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:$coroutines_version")
    implementation("com.squareup.okhttp3:okhttp:$okhttp_version")
    implementation("com.squareup.retrofit2:retrofit:$retrofit_version")
    implementation("com.squareup.retrofit2:converter-jackson:$retrofit_version")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin:$jackson_version")
}

tasks {
    compileKotlin {
        kotlinOptions.jvmTarget = "1.8"
    }
    compileTestKotlin {
        kotlinOptions.jvmTarget = "1.8"
    }
}
