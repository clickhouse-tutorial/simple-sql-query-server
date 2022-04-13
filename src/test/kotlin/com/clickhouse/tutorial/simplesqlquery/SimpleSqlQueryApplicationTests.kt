package com.clickhouse.tutorial.simplesqlquery

import com.alibaba.fastjson.JSON
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest
import javax.annotation.Resource

@SpringBootTest
class SimpleSqlQueryApplicationTests {
    @Resource
    lateinit var clickHouseClient: ClickHouseClient

    @Test
    fun testQuery() {
        val list = clickHouseClient.query("""
			select uniqExact(UserID) cnt, Age age
			from tutorial.hits_v1
			where EventDate = '2014-03-18'
			group by Age
			order by cnt desc
			limit 10;
		""".trimIndent())
        println(JSON.toJSONString(list))
        assertTrue(list.size > 0)
    }
}

// [{"cnt":"15965","age":"0"},{"cnt":"10648","age":"16"},{"cnt":"4152","age":"55"},{"cnt":"3556","age":"22"},{"cnt":"3398","age":"39"},{"cnt":"1214","age":"26"}]