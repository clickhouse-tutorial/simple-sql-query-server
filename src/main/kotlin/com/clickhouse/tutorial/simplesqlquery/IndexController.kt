package com.clickhouse.tutorial.simplesqlquery

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class IndexController {

    @GetMapping(path = ["/", ""])
    fun index() = "index"

}