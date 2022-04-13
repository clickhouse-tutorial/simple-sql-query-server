package com.clickhouse.tutorial.simplesqlquery

import com.alibaba.fastjson.JSON
import com.alibaba.fastjson.JSONObject
import com.clickhouse.jdbc.ClickHouseConnection
import com.clickhouse.jdbc.ClickHouseDataSource
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Component
import java.sql.Connection
import java.sql.ResultSet
import java.sql.SQLException
import java.sql.Statement
import java.util.*
import javax.annotation.Resource

@Component
class ClickHouseClient {
    private val log = LoggerFactory.getLogger(ClickHouseClient::class.java)

    @Resource
    private lateinit var clickHouseDataSourceConfig: ClickHouseDataSourceConfig

    /**
     * 执行 SQL 查询
     */
    fun query(sql: String): MutableList<JSONObject> {
        log.info("ClickHouse查询SQL：$sql")
        val connection: Connection = getConn()
        try {
            val statement: Statement = connection.createStatement()
            val results: ResultSet = statement.executeQuery(sql)
            val rsmd = results.metaData
            val list: MutableList<JSONObject> = mutableListOf()
            while (results.next()) {
                val row = JSONObject()
                for (i in 1..rsmd.columnCount) {
                    row.put(rsmd.getColumnName(i), results.getString(rsmd.getColumnName(i)))
                }
                list.add(row)
            }
            return list
        } catch (e: SQLException) {
            log.error("execute sql error, SQL={}", sql, e)
            throw IllegalStateException("execute sql error!SQL=${sql}")
        }
    }

    private fun getConn(): Connection {
        val conn: ClickHouseConnection
        val properties = Properties()
        properties["user"] = clickHouseDataSourceConfig.username
        properties["password"] = clickHouseDataSourceConfig.password
        properties["database"] = clickHouseDataSourceConfig.database
        properties["socketTimeout"] = clickHouseDataSourceConfig.socketTimeout
        val clickHouseDataSource = ClickHouseDataSource(clickHouseDataSourceConfig.url, properties)
        try {
            conn = clickHouseDataSource.connection
            return conn
        } catch (e: SQLException) {
            log.error("getConn properties={}, ERROR:", JSON.toJSONString(properties), e)
            throw IllegalStateException("get ClickHouseConnection error!")
        }
    }

}