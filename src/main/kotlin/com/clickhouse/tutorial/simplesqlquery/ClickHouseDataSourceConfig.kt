package com.clickhouse.tutorial.simplesqlquery

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.stereotype.Component

@Component
@ConfigurationProperties(prefix = "spring.datasource.clickhouse")
class ClickHouseDataSourceConfig {
    var url: String = ""
    var database: String = ""
    var username: String = ""
    var password: String = ""
    var socketTimeout: Int = 0
}