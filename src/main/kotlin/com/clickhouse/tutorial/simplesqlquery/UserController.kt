package com.clickhouse.tutorial.simplesqlquery

import com.alibaba.fastjson.JSON
import com.alibaba.fastjson.JSONObject
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseBody
import javax.annotation.Resource


@Controller
@RequestMapping
class UserController {

    @Resource
    lateinit var clickHouseClient: ClickHouseClient

    @RequestMapping(path = ["/api/user/login"], method = [RequestMethod.POST])
    @ResponseBody
    fun login(@RequestBody user: UserRequest): JSONObject {
        return JSON.parseObject("""
            { "status":"ok", "msg":"" }
        """.trimIndent())
    }

    @RequestMapping(path = ["/api/user/userInfo"])
    @ResponseBody
    fun userInfo(@RequestBody user: UserRequest): JSONObject {
        return JSON.parseObject("""
            {
          name: '王立群',
          avatar:
            'https://lf1-xgcdn-tos.pstatp.com/obj/vcloud/vadmin/start.8e0e4855ee346a46ccff8ff3e24db27b.png',
          email: 'wangliqun@email.com',
          job: 'frontend',
          jobName: '前端开发工程师',
          organization: 'Frontend',
          organizationName: '前端',
          location: 'beijing',
          locationName: '北京',
          introduction: '王力群并非是一个真实存在的人。',
          personalWebsite: 'https://www.arco.design',
          verified: true,
          phoneNumber: /177[*]{6}[0-9]{2}/,
          accountId: /[a-z]{4}[-][0-9]{8}/,
          registrationTime: Mock.Random.datetime('yyyy-MM-dd HH:mm:ss'),
          permissions: 'admin',
        }
        """.trimIndent())
    }

}

data class UserRequest(var userName: String, var password: String)