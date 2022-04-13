package com.clickhouse.tutorial.simplesqlquery

import com.alibaba.fastjson.JSONObject
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*
import javax.annotation.Resource


@Controller
@RequestMapping("/sql")
class SQLQueryController {

    @Resource
    lateinit var clickHouseClient: ClickHouseClient

    @RequestMapping(path = ["/query"], method = [RequestMethod.POST])
    @ResponseBody
    fun query(@RequestBody query: QueryRequest): List<JSONObject> {
        val s = System.currentTimeMillis()
        val result = clickHouseClient.query(query.sql)
        val e = System.currentTimeMillis()
        val executeTime = JSONObject()
        executeTime.put("_EXECUTE_TIME", "${e - s}ms")
        result.add(executeTime)
        return result
    }

}

data class QueryRequest(var sql: String)