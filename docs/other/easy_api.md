---
title: easyApi表格
---

# {{$frontmatter.title}}

## 黄城相府

-  接口信息

|   接口名   |   api描述    |      数据源       | 访问量 | 请求方式 |
| :--------: | :----------: | :---------------: | :----: | :------: |
| sales_top5 | 销售前5 票类 | MySQL / RDS_dataV |  1059  |   POST   |

-  请求参数

|   参数名   | 数据类型 | 必填  | 行级权限 | 说明  |
| :--------: | :------: | :---: | :------: | :---: |
| start_date | DATETIME |  是   |          |       |
|  end_date  | DATETIME |  是   |          |       |
|    uid     |   INT    |  是   |          |       |
| user_auth  | VARCHAR  |  是   |          |       |

- sql语句

:::demo 示例
```sql
SELECT concat(ps.land_name, ' ', ticket_fullname) AS ticket_name, ticket_id
	, SUM(ticket_num) AS order_ticket, SUM(pay_amount) AS order_amount
FROM selling_channel ps
	JOIN datav_auth a ON ps.user_id = a.user_id
WHERE booking_time >= ${start_date}
	AND booking_time < ${end_date}
	AND ps.user_id = ${uid}
	AND a.DataV_token = ${user_auth}
GROUP BY ticket_name, ticket_id
ORDER BY order_ticket DESC
```
:::


### channel_rank

| api描述  |         数据源          | 访问量 |
| :------: | :---------------------: | :----: |
| 渠道排行 | MySQL / RDS_bi_business |   3    |

|  请求参数  |  参数名  | 数据类型 |
| :--------: | :------: | :------: |
| start_date | DATETIME |    是    |
|  end_date  | DATETIME |    是    |
|    uid     |   INT    |    是    |
| user_auth  | VARCHAR  |    是    |

:::demo 请求参数
```sql
SELECT channel, channel_name, SUM(order_ticket) AS order_ticket
	, SUM(order_amount) AS order_amount
FROM channel_rank
WHERE ordertime >= ${start_date}
	AND ordertime < ${end_date}
	AND sellerid = ${uid}
	AND DataV_token = ${user_auth}
GROUP BY channel, channel_name
ORDER BY order_ticket DESC
```
:::


### vertify_h_sum

|   api描述    |        数据源         | 访问量 |
| :----------: | :-------------------: | :----: |
| 各时段验证数 | MySQL / summary_dataV |  1064  |

|   参数名   | 数据类型 | 必填  |
| :--------: | :------: | :---: |
| start_date | DATETIME |  是   |
|  end_date  | DATETIME |  是   |
|    uid     |   INT    |  是   |
| user_auth  | VARCHAR  |  是   |

:::demo 请求参数
```sql
SELECT o.oper_hour AS order_hour, SUM(o.order_ticket) AS order_ticket, SUM(o.sale_money) AS order_amount
	, SUM(o.vertify_order_ticket) AS vertify_ticket, SUM(o.vertify_sale_money) AS vertify_amount
FROM order_h_sum o
	LEFT JOIN datav_auth a ON o.user_id = a.user_id
WHERE o.user_id = ${uid}
	AND a.DataV_token = ${user_auth}
	AND o.oper_date >= ${start_date}
	AND o.oper_date < ${end_date}
GROUP BY o.oper_hour
```
:::


### vertify_d_sum

|     api描述      |        数据源         | 访问量 |
| :--------------: | :-------------------: | :----: |
| 日售检票汇总数据 | MySQL / summary_dataV |  1071  |

|  请求参数  |  参数名  | 数据类型 |
| :--------: | :------: | :------: |
| start_date | DATETIME |    是    |
|  end_date  | DATETIME |    是    |
|    uid     |   INT    |    是    |
| user_auth  | VARCHAR  |    是    |

:::demo 请求参数
```sql
SELECT o.oper_date AS date, SUM(o.vertify_order_ticket) AS vertify_ticket, SUM(o.vertify_sale_money) AS vertify_amount
	, SUM(o.order_ticket) AS order_ticket, SUM(o.sale_money) AS order_amount
FROM order_d_sum o
	LEFT JOIN datav_auth a ON o.user_id = a.user_id
WHERE o.user_id = ${uid}
	AND a.DataV_token = ${user_auth}
	AND o.oper_date >= ${start_date}
	AND o.oper_date < ${end_date}
GROUP BY oper_date
```
:::


### today_sum

|   api描述    |        数据源         | 访问量 |
| :----------: | :-------------------: | :----: |
| 今日预定汇总 | MySQL / summary_dataV |  3199  |

|  请求参数  |  参数名  | 数据类型 |
| :--------: | :------: | :------: |
| start_date | DATETIME |    是    |
|  end_date  | DATETIME |    是    |
|    uid     |   INT    |    是    |
| user_auth  | VARCHAR  |    是    |

:::demo 请求参数
```sql
SELECT SUM(o.order_ticket) AS order_ticket, SUM(o.sale_money) AS order_amount
	, SUM(o.vertify_order_ticket) AS vertify_ticket, SUM(o.vertify_sale_money) AS vertify_amount
FROM order_d_sum o
	LEFT JOIN `BI_DataV`.`datav_auth` a ON o.user_id = a.user_id
WHERE o.user_id = ${uid}
	AND a.DataV_token = ${user_auth}
	AND o.oper_date >= ${start_date}
	AND o.oper_date < ${end_date}
```
:::


## 内部支持（出入园）

### node_inout_stat_by_date

|               api描述               |           数据源            | 访问量 |
| :---------------------------------: | :-------------------------: | :----: |
| 根据node_id统计，按天汇总出入园数据 | MySQL / only_read_RDS_datav |   15   |

|    请求参数    |      参数名      | 数据类型 | 行级权限 |          说明           |
| :------------: | :--------------: | :------: | :------: | :---------------------: |
|      sid       |       INT        |    是    |    否    |        供应商id         |
|    node_id     |       INT        |    否    |    否    | 节点编号：逗号分隔的... |
|   start_date   |       DATE       |    是    |    否    |   开始日期，2022-...    |
|    end_date    |       DATE       |    是    |    否    |   结束日期，2022-...    |
| based_on_order | TINYINT UNSIGNED |    否    |    否    |    是否基于订单，0/1    |

:::demo 请求参数
```sql
SELECT `node_id`, DATE_FORMAT(`date`, '%Y-%m-%d') AS `date`
	, SUM(`in`) AS `in`, SUM(`out`) AS `out`
FROM datav_device_inout_statistics
WHERE `sid` = ${sid}
	AND node_id IN ${node_id}
	AND `date` >= ${start_date}
	AND `date` <= ${end_date}
	AND `based_on_order` = ${based_on_order}
GROUP BY `node_id`, `date`
ORDER BY `date`, `node_id`
```
:::

### ticket_verification

|           api描述           |           数据源            | 访问量 |
| :-------------------------: | :-------------------------: | :----: |
| 根据node_id，票id汇总入园数 | MySQL / only_read_RDS_datav |   1    |

|  请求参数  | 参数名 | 数据类型 | 行级权限 |          说明           |
| :--------: | :----: | :------: | :------: | :---------------------: |
|    sid     |  INT   |    是    |    否    |        供应商id         |
|  node_id   |  INT   |    否    |    否    | 节点编号：逗号分隔的... |
| start_date |  DATE  |    是    |    否    |   开始日期，2022-...    |
|  end_date  |  DATE  |    是    |    否    |   结束日期，2022-...    |

:::demo 请求参数
```sql
SELECT `node_id`, `tid`, SUM(`in`) AS `cnt`
FROM datav_device_ticket_verification
WHERE sid = ${sid}
	AND node_id IN ${node_id}
	AND `date` >= ${start_date}
	AND `date` <= ${end_date}
GROUP BY `node_id`, `tid`
ORDER BY `node_id`, `tid`
```
:::

### sms_mobile

|   api描述    |       数据源        | 访问量 |
| :----------: | :-----------------: | :----: |
| 今日预定汇总 | MySQL / Bi_business |   0    |

|   请求参数   |  参数名  | 数据类型 | 行级权限 | 说明  |
| :----------: | :------: | :------: | :------: | :---: |
| booking_time | DATETIME |    是    |    否    |       |

:::demo 请求参数
```sql
SELECT ticket_taker_mobile, ticket_taker_name, ticket_taker_sex, country_code, province_code
	, city_code, area_code, country_name, province_name, city_name
	, zip_code, booking_time
FROM sms_mobile
WHERE booking_time >= ${booking_time}
```
:::


### node_inout_stat_by_hour

|                api描述                |           数据源            | 访问量 |
| :-----------------------------------: | :-------------------------: | :----: |
| 根据node_id统计，按小时汇总出入园数据 | MySQL / only_read_RDS_datav |   0    |

|    请求参数    |      参数名      | 数据类型 | 行级权限 |          说明           |
| :------------: | :--------------: | :------: | :------: | :---------------------: |
|      sid       |       INT        |    是    |    否    |        供应商id         |
|    node_id     |       INT        |    否    |    否    | 节点编号：逗号分隔的... |
|   start_date   |       DATE       |    是    |    否    |   开始日期，2022-...    |
|    end_date    |       DATE       |    是    |    否    |   结束日期，2022-...    |
| based_on_order | TINYINT UNSIGNED |    否    |    否    |    是否基于订单，0/1    |

:::demo 请求参数
```sql
SELECT `node_id`, DATE_FORMAT(`date`, '%Y-%m-%d') AS `date`, `hour`
	, SUM(`in`) AS `in`, SUM(`out`) AS `out`
FROM datav_device_inout_statistics
WHERE sid = ${sid}
	AND node_id IN ${node_id}
	AND `date` >= ${start_date}
	AND `date` <= ${end_date}
	AND `based_on_order` = ${based_on_order}
GROUP BY `node_id`, `date`, `hour`
ORDER BY `date`, `hour`;
```
:::

### node_inout_stat_by_month

|               api描述               |           数据源            | 访问量 |
| :---------------------------------: | :-------------------------: | :----: |
| 根据node_id统计，按月汇总出入园数据 | MySQL / only_read_RDS_datav |   0    |

|    请求参数    |      参数名      | 数据类型 | 行级权限 |          说明           |
| :------------: | :--------------: | :------: | :------: | :---------------------: |
|      sid       |       INT        |    是    |    否    |        供应商id         |
|    node_id     |       INT        |    否    |    否    | 节点编号：逗号分隔的... |
|   start_date   |       DATE       |    是    |    否    |   开始日期，2022-...    |
|    end_date    |       DATE       |    是    |    否    |   结束日期，2022-...    |
| based_on_order | TINYINT UNSIGNED |    否    |    否    |    是否基于订单，0/1    |

:::demo 请求参数
```sql
SELECT `node_id`, `month`, SUM(`in`) AS `in`
	, SUM(`out`) AS `out`
FROM datav_device_inout_statistics_month
WHERE sid = ${sid}
	AND node_id IN ${node_id}
	AND `month` >= ${start_date}
	AND `month` <= ${end_date}
	AND `based_on_order` = ${based_on_order}
GROUP BY `node_id`, `month`
ORDER BY `month`, `node_id`
```
:::

## 外部数据统一接口

### 楠溪江

- nxj_order

|    api描述     |         数据源          | 访问量 |
| :------------: | :---------------------: | :----: |
| 楠溪江订单明细 | MySQL / RDS_bi_business |  138   |

|  请求参数  | 参数名 | 数据类型 | 行级权限 |        说明        |
| :--------: | :----: | :------: | :------: | :----------------: |
| begin_time |  DATE  |    是    |    否    | 开始日期，2022-... |
|  end_time  |  DATE  |    是    |    否    | 结束日期，2022-... |

:::demo 请求参数
```sql
SELECT id, ordernum, member_id, land_id, land_name
	, ticket_id, ticket_name, member_name, dtype, buyers_id
	, buyers, buyers_cname, buyers_type, tnum, `tprice`
	, `ordername`, ctime AS `ordertel`, `ordertime`, `playtime`, `begintime`
	, `endtime`, ctime, `dtime`, `order_status`, `pay_status`
	, `totalmoney`, `onsale`, `personid`, `oper_name`, paymode
	, update_time
FROM nxj_order
WHERE update_time < ${end_time}
	AND update_time >= ${begin_time}
```
:::

- order_detail

| api描述 |      数据源       | 访问量 |
| :-----: | :---------------: | :----: |
|         | MySQL / RDS_dataV |   90   |

|  请求参数  | 参数名  | 数据类型 | 行级权限 |        说明        |
| :--------: | :-----: | :------: | :------: | :----------------: |
|  user_id   |   INT   |    否    |    否    |                    |
|   token    | VARCHAR |    否    |          |                    |
| begin_time |  DATE   |    是    |    否    | 开始日期，2022-... |
|  end_time  |  DATE   |    是    |    否    | 结束日期，2022-... |

:::demo 请求参数
```sql
SELECT `id`, `ordernum`, `ordermode`, `ifpack`, `sysorder`
	, `pack_order`, `member_id`, d.`land_id`, d.`land_name` AS land_name, `ticket_id`
	, `ticket_name`, `member_name`, `buyers_id`, `buyers`, `buyers_cname`
	, `buyers_type`, `tnum`, `tprice`, `ordername`, `ordertel`
	, `ordertime`, `playtime`, `begintime`, `endtime`, `ctime`
	, `dtime`, `order_status`, `pay_status`, `totalmoney`, `onsale`
	, `personid`, `oper_name`, `dtype`, `paymode`, `main_ordernum`
	, `province`, `city`, `ordertype`, `update_time`
FROM order_detail d
	LEFT JOIN datav_auth da ON d.member_id = da.user_id
WHERE user_id = ${user_id}
	AND DataV_token = ${token}
	AND update_time >= ${begin_time}
	AND update_time <= ${end_time}
```
:::

- nxj_team

| api描述 |      数据源      | 访问量 |
| :-----: | :--------------: | :----: |
|         | MySQL / RDS_myuu |   47   |

|  请求参数  | 参数名 | 数据类型 | 行级权限 |        说明        |
| :--------: | :----: | :------: | :------: | :----------------: |
| begin_time |  DATE  |    是    |    否    | 开始日期，2022-... |
|  end_time  |  DATE  |    是    |    否    | 结束日期，2022-... |

:::demo 请求参数
```sql
SELECT main_ordernum, son_ordernum, province, city
	, FROM_UNIXTIME(updatetime) AS updatetime
FROM `uu_ss_order_team_link` otl
	LEFT JOIN uu_ss_order_team ot ON ot.ordernum = otl.main_ordernum
WHERE aid = 954117
	AND FROM_UNIXTIME(updatetime) < ${end_time}
	AND FROM_UNIXTIME(updatetime) >= ${begin_time}
```
:::

- sales_ticket

| api描述 |      数据源       | 访问量 |
| :-----: | :---------------: | :----: |
|         | MySQL / RDS_dataV |   0    |

|  请求参数  | 参数名  | 数据类型 | 行级权限 |        说明        |
| :--------: | :-----: | :------: | :------: | :----------------: |
|    uid     |   INT   |    是    |    否    |                    |
| user_auth  | VARCHAR |    是    |    否    |                    |
| begin_time |  DATE   |    是    |    否    | 开始日期，2022-... |
|  end_time  |  DATE   |    是    |    否    | 结束日期，2022-... |

:::demo 请求参数
```sql
SELECT s.ticket_name AS ticket_name, s.ticket_id AS ticket_id, SUM(s.order_ticket_num) AS order_ticket
	, SUM(s.order_amount) AS order_amount
FROM channel_d_sum s
	LEFT JOIN dataV_auth a ON s.user_id = a.user_id
WHERE s.user_id = ${uid}
	AND a.DataV_token = ${user_auth}
	AND s.oper_date >= ${start_time}
	AND s.oper_date < ${end_time}
GROUP BY s.ticket_id
ORDER BY order_ticket DESC
```
:::

### 太行山

- taihang_land_gate

|   api描述    |     数据源      | 访问量 |
| :----------: | :-------------: | :----: |
| 太行山出入园 | MySQL / summary |  352   |

| 请求参数 | 参数名 | 数据类型 | 行级权限 | 说明  |
| :------: | :----: | :------: | :------: | :---: |

:::demo 请求参数
```sql
SELECT land_id
	, SUM(if(roll = 0, leave_num, 0)) AS "enter_land"
	, SUM(if(roll = 1, leave_num, 0)) AS "out_land"
	, SUM(if(roll = 0, leave_num, 0)) - SUM(if(roll = 1, leave_num, 0)) AS "in_land"
	, '实时游客数' AS data_name_chinese, '景区闸机累计出入园人数（含退票）' AS data_describe
FROM pft_dc_daycount a
WHERE FROM_UNIXTIME(time) >= CURDATE()
	AND land_id IN ('143147', '143152', '143144')
GROUP BY land_id
```
:::

- land_gate_taihang

|      api描述       |     数据源      | 访问量 |
| :----------------: | :-------------: | :----: |
| 太行山八泉峡出入园 | MySQL / summary |   0    |

|  请求参数  | 参数名  | 数据类型 | 行级权限 |         说明          |
| :--------: | :-----: | :------: | :------: | :-------------------: |
| start_time | VARCHAR |    否    |    否    | 开始时间，格式：20... |
|  end_time  | VARCHAR |    否    |    否    | 结束时间，格式：20... |

:::demo 请求参数
```sql
SELECT land_id
	, SUM(if(roll = 0, leave_num, 0)) AS enter_land
	, SUM(if(roll = 1, leave_num, 0)) AS out_land
	, SUM(if(roll = 0, leave_num, 0)) - SUM(if(roll = 1, leave_num, 0)) AS in_land
	, '实时游客数' AS data_name_chinese, '景区闸机累计出入园人数（含退票）' AS data_describe
FROM pft_dc_daycount a
WHERE `time` >= unix_timestamp(${start_time})
	AND `time` <= unix_timestamp(${end_time})
	AND land_id IN ('143147', '143152', '143144')
GROUP BY land_id
```
:::

## 用户大屏

- travel_age_summary_formal

|     api描述      |      数据源       | 访问量 |
| :--------------: | :---------------: | :----: |
| 商户游客年龄分布 | MySQL / RDS_dataV |   4    |

|     请求参数      | 参数名  | 数据类型 | 行级权限 | 说明  |
| :---------------: | :-----: | :------: | :------: | :---: |
|    start_date     |  DATE   |    是    |    否    |       |
|     end_date      |  DATE   |    是    |    否    |       |
|       token       | VARCHAR |    是    |    否    |       |
| resource_id_start |   INT   |    否    |    否    |       |
|  resource_id_end  |   INT   |    否    |    否    |       |
|      land_id      |   INT   |    否    |    否    |       |
:::demo 请求参数
```sql
SELECT land_publisher_id, age_name, SUM(tnum) AS tnum
	, sum(order_pay_amount) / sum(tnum) AS avg_amount
	, d.data_name_chinese, d.data_describe
FROM (
	SELECT *
		, 'travel_age_summary_formal' AS api_name
	FROM travel_age_gender_summary
) a
	LEFT JOIN `BI_DataV`.`datav_auth` b ON a.land_publisher_id = b.user_id
	LEFT JOIN `bi_business`.`datav_dictionary` d ON a.api_name = d.api_name
WHERE vertify_time >= ${start_date}
	AND vertify_time <= ${end_date}
	AND b.DataV_token = ${token}
	AND resource_id >= ${resource_id_start}
	AND resource_id <= ${resource_id_end}
	AND a.land_id = ${land_id}
GROUP BY land_publisher_id, age_name
```
:::

- OTA_distributor

|     api描述     |      数据源      | 访问量 |
| :-------------: | :--------------: | :----: |
| ota分销渠道排行 | MySQL / BI_DataV |   0    |

|  请求参数  | 参数名  | 数据类型 | 行级权限 | 说明  |
| :--------: | :-----: | :------: | :------: | :---: |
| start_date |  DATE   |    是    |    否    |       |
|  end_date  |  DATE   |    是    |    否    |       |
|    uid     |   INT   |    是    |    否    |       |
| user_auth  | VARCHAR |    是    |    否    |       |

:::demo 请求参数（不存在）
```sql
```
:::

- get_dataV_url

|     api描述      |      数据源       | 访问量 | 请求方式 |
| :--------------: | :---------------: | :----: | :------: |
| 获取用户大屏网址 | MySQL / RDS_dataV |   0    |   POST   |

| 请求参数 | 参数名  | 数据类型 | 行级权限 | 说明  |
| :------: | :-----: | :------: | :------: | :---: |
| account  | VARCHAR |    是    |    否    |       |
| password | VARCHAR |    是    |    否    |       |

:::demo 请求参数
```sql
SELECT DataV_token, `index`, sale, tourist, analyst
FROM datav_auth
WHERE account = ${account}
	AND certificate = ${password}
```
:::

- draw

| api描述  |      数据源       | 访问量 |
| :------: | :---------------: | :----: |
| 游客画像 | MySQL / RDS_dataV |   0    |

|    请求参数    | 参数名  | 数据类型 | 行级权限 |    说明    |
| :------------: | :-----: | :------: | :------: | :--------: |
|  publisher_id  |   INT   |    否    |    否    |  发布商id  |
|   start_time   | VARCHAR |    是    |    否    |            |
|    end_time    | VARCHAR |    是    |    否    |            |
|   start_age    | VARCHAR |    否    |    否    | 取票人年龄 |
|    end_age     | VARCHAR |    否    |    否    | 取票人年龄 |
|      sec       | VARCHAR |    否    |    否    | 取票人性别 |
| ticket_id_list |   INT   |    否    |    否    |            |
| province_list  | VARCHAR |    否    |    否    |            |
|   city_list    | VARCHAR |    否    |    否    |            |
|  order_count   | VARCHAR |    否    |    否    |            |


:::demo 请求参数
```sql
SELECT o.ticket_taker_mobile, ticket_taker_age, ticket_taker_sex, ticket_taker_province, ticket_taker_city
	, ticket_id, ticket_fullname, booking_time, order_id, order_again
FROM (
	SELECT ticket_taker_mobile, ticket_taker_age, ticket_taker_sex, ticket_taker_province, ticket_taker_city
		, ticket_id, ticket_fullname, booking_time, order_id
	FROM order_draw
	WHERE land_publisher_id = ${publisher_id}
		AND booking_time BETWEEN ${start_time} AND ${end_time}
		AND ticket_taker_age >= ${start_age}
		AND ticket_taker_age < ${end_age}
		AND ticket_taker_sex = ${sec}
		AND ticket_id IN ${ticket_id_list}
		AND (ticket_taker_province IN ${province_list}
			OR ticket_taker_city IN ${city_list})
) o
	LEFT JOIN (
		SELECT ticket_taker_mobile, COUNT(*) AS order_again
		FROM order_draw
		WHERE land_publisher_id = ${publisher_id}
			AND booking_time BETWEEN ${start_time} AND ${end_time}
			AND ticket_taker_age >= ${start_age}
			AND ticket_taker_age < ${end_age}
			AND ticket_taker_sex = ${sec}
			AND ticket_id IN ${ticket_id_list}
			AND (ticket_taker_province IN ${province_list}
				OR ticket_taker_city IN ${city_list})
		GROUP BY ticket_taker_mobile
	) ag
	ON o.ticket_taker_mobile = ag.ticket_taker_mobile
WHERE ag.order_again >= ${order_count}
```
:::

## 公司大屏

- plat_map_fly

|       api描述       |      数据源       | 访问量 | 请求方式 |
| :-----------------: | :---------------: | :----: | :------: |
| 公司大屏地图飞线API | MySQL / RDS_dataV |  670   |   POST   |

|  请求参数   | 参数名  | 数据类型 | 行级权限 | 说明  |
| :---------: | :-----: | :------: | :------: | :---: |
| DataV_token | VARCHAR |    否    |    否    |       |

:::demo 请求参数
```sql
SELECT DISTINCT concat('[', from_lng, ',', from_lat, ']') AS from_city
	, from_lng, from_lat, from_city AS `begin`
	, concat('[', to_lng, ',', to_lat, ']') AS to_city
	, to_lng, to_lat, to_city AS `end`
FROM plat_map_fly a
	LEFT JOIN datav_auth b ON a.land_publisher_id = b.user_id
WHERE booking_time BETWEEN DATE_SUB(NOW(), INTERVAL 300 SECOND) AND NOW()
	AND b.DataV_token = ${DataV_token}
```
:::

- micromessage_page_view

|            api描述            |         数据源          | 访问量 | 请求方式 |
| :---------------------------: | :---------------------: | :----: | :------: |
| 微商城页面访问汇总情况(昨日） | MySQL / RDS_bi_business |   46   |   GET    |

| 请求参数 | 参数名  | 数据类型 | 行级权限 |  说明  |
| :------: | :-----: | :------: | :------: | :----: |
| account  | VARCHAR |    是    |    否    | 账户id |

:::demo 请求参数
```sql
SELECT a.user_cnt
FROM micromessage_page_view a
WHERE click_date = date_sub(CURRENT_DATE, INTERVAL 1 DAY)
	AND platid = 'plat005'
	AND business_id = ${account}
```
:::

- zq_company_operate_distribute_rank

|      api描述       |         数据源          | 访问量 | 请求方式 |
| :----------------: | :---------------------: | :----: | :------: |
| 供应商分销相关排名 | MySQL / RDS_bi_business |   2    |   POST   |

| 请求参数 | 参数名 | 数据类型 | 行级权限 |  说明  |
| :------: | :----: | :------: | :------: | :----: |
| user_id  | BIGINT |    是    |    否    | 用户ID |

:::demo 请求参数
```sql
SELECT a.fid, a.rank_id, a.rank_name, a.total_order, a.total_money
	, a.total_ticket, a.rn, a.`name`
FROM zq_company_operate_distribute_rank a
WHERE fid = ${user_id}
```
:::

- get_gmv

|  api描述   |     数据源      | 访问量 | 请求方式 |
| :--------: | :-------------: | :----: | :------: |
| 年交易流水 | MySQL / summary |   0    |   POST   |

|  请求参数  |    参数名    | 数据类型 | 行级权限 | 说明  |
| :--------: | :----------: | :------: | :------: | :---: |
| start_date | INT UNSIGNED |    否    |    否    |       |
|  end_date  | INT UNSIGNED |    否    |    否    |       |

:::demo 请求参数
```sql
SELECT SUM(order_num) AS order_num
FROM pft_report_order_two
WHERE date >= ${start_date}
	AND date < ${end_date}
```
:::

- company_gmv_add_up

|                       api描述                        |         数据源          | 访问量 | 请求方式 |
| :--------------------------------------------------: | :---------------------: | :----: | :------: |
| 本年累计同比去年 ： 订单量、门票数、交易流水（万元） | MySQL / RDS_bi_business |   0    |   POST   |

| 请求参数 | 参数名 | 数据类型 | 行级权限 | 说明  |
| :------: | :----: | :------: | :------: | :---: |

:::demo 请求参数
```sql
SELECT substr(order_date, 1, 4) AS year
	, SUM(order_num) AS order_num, SUM(ticket_num) AS ticket_num
	, round(SUM(amount), 3) AS amount
FROM company_gmv
WHERE order_date >= concat(year(DATE_SUB(now(), INTERVAL 1 YEAR)), '-01')
	AND order_date <= substr(DATE_SUB(now(), INTERVAL 1 YEAR), 1, 7)
GROUP BY substr(order_date, 1, 4)
UNION ALL
SELECT substr(order_date, 1, 4) AS year
	, SUM(order_num) AS order_num, SUM(ticket_num) AS ticket_num
	, round(SUM(amount), 3) AS amount
FROM company_gmv
WHERE order_date >= concat(year(now()), '-01')
GROUP BY substr(order_date, 1, 4)
```
:::

- company_gmv_all

|                    api描述                     |         数据源          | 访问量 | 请求方式 |
| :--------------------------------------------: | :---------------------: | :----: | :------: |
| 月汇总同比 ： 订单量、门票数、交易流水（万元） | MySQL / RDS_bi_business |   0    |   POST   |

| 请求参数 | 参数名 | 数据类型 | 行级权限 | 说明  |
| :------: | :----: | :------: | :------: | :---: |

:::demo 请求参数
```sql
SELECT substr(order_date, 1, 4) AS year
	, substr(order_date, 6, 2) AS month
	, order_date, SUM(order_num) AS order_num, SUM(ticket_num) AS ticket_num
	, round(SUM(amount), 3) AS amount
FROM company_gmv
GROUP BY substr(order_date, 1, 4), substr(order_date, 6, 2)
```
:::

## 12301大数据看板

- land_gate

|                  api描述                   |     数据源      | 访问量 | 请求方式 |
| :----------------------------------------: | :-------------: | :----: | :------: |
| 根据景区闸机实时记录入园数、出园数、在园数 | MySQL / summary |  1169  |   POST   |

| 请求参数 |    参数名    | 数据类型 | 行级权限 |  说明  |
| :------: | :----------: | :------: | :------: | :----: |
| land_id  | INT UNSIGNED |    是    |    否    | 景区id |

:::demo 请求参数
```sql
SELECT SUM(if(roll = 0, if(num > 0, num, 1), 0)) AS "enter_land"
	, SUM(if(roll = 1, if(num > 0, num, 1), 0)) AS "out_land"
	, if(SUM(if(roll = 0, if(num > 0, num, 1), 0)) - SUM(if(roll = 1, if(num > 0, num, 1), 0)) < 0, 0, SUM(if(roll = 0, if(num > 0, num, 1), 0)) - SUM(if(roll = 1, if(num > 0, num, 1), 0))) AS "in_land"
	, '实时游客数' AS data_name_chinese, '景区闸机累计出入园人数（含退票）' AS data_describe
FROM pft_dc_daycount_two
WHERE land_id = ${land_id}
	AND date >= CURRENT_DATE
```
:::

- travel_day_trend

|    api描述     |      数据源       | 访问量 | 请求方式 |
| :------------: | :---------------: | :----: | :------: |
| 订单日趋势情况 | MySQL / RDS_dataV |  1117  |   POST   |

|  请求参数  |    参数名    | 数据类型 | 行级权限 |   说明    |
| :--------: | :----------: | :------: | :------: | :-------: |
|    uid     |     INT      |    否    |    否    |  用户id   |
| user_auth  |   VARCHAR    |    是    |    否    | 用户token |
| start_date |   VARCHAR    |    是    |    否    | 开始日期  |
|  end_date  |   VARCHAR    |    是    |    否    | 结束日期  |
|  land_id   |     INT      |    否    |    否    |           |
|  land_id   | INT UNSIGNED |    是    |    否    |  景区id   |

:::demo 请求参数
```sql
SELECT year(o.oper_date) AS order_year, DATE_FORMAT(o.oper_date, '%Y-%m-%d') AS order_date
	, SUM(CAST(order_ticket AS SIGNED) - CAST(cancel_ticket AS SIGNED) - CAST(revoke_ticket AS SIGNED)) AS order_ticket
	, SUM(CAST(sale_money AS SIGNED) - CAST(cancel_sale_money AS SIGNED) - CAST(revoke_sale_money AS SIGNED)) / 100 AS order_amount
	, SUM(CAST(vertify_order_ticket AS SIGNED) + CAST(vertify_finish_ticket AS SIGNED) - CAST(vertify_revoke_ticket AS SIGNED)) AS vertify_ticket
	, SUM(CAST(vertify_sale_money AS SIGNED) + CAST(vertify_finish_sale_money AS SIGNED) - CAST(vertify_revoke_sale_money AS SIGNED)) / 100 AS vertify_amount
FROM report_order_summary o
	LEFT JOIN datav_auth a ON o.user_id = a.user_id
WHERE o.user_id = ${uid}
	AND a.DataV_token = ${user_auth}
	AND o.oper_date >= DATE_FORMAT(${start_date}, '%Y%m%d')
	AND o.oper_date <= DATE_FORMAT(${end_date}, '%Y%m%d')
	AND o.land_id = ${land_id}
GROUP BY order_year, order_date
```
:::

- travel_vertify_report

|     api描述      |      数据源       | 访问量 | 请求方式 |
| :--------------: | :---------------: | :----: | :------: |
| 报表订单验证汇总 | MySQL / RDS_dataV |  571   |   POST   |

|  请求参数  | 参数名  | 数据类型 | 行级权限 | 说明  |
| :--------: | :-----: | :------: | :------: | :---: |
|   token    | VARCHAR |    是    |    否    |       |
| start_date | VARCHAR |    否    |    否    |       |
|  end_date  | VARCHAR |    否    |    否    |       |

:::demo 请求参数
```sql
SELECT SUM(CAST(vertify_order_ticket AS SIGNED) + CAST(vertify_finish_ticket AS SIGNED) - CAST(vertify_revoke_ticket AS SIGNED)) AS vertify_ticket
	, SUM(CAST(vertify_sale_money AS SIGNED) + CAST(vertify_finish_sale_money AS SIGNED) - CAST(vertify_revoke_sale_money AS SIGNED)) / 100 AS vertify_amount
	, '验证数,验证金额' AS data_name_chinese
	, '1.验证数：不包含今天的近期时间段验证总数（扣除撤销撤改），默认近30天；2.验证金额：不包含今天的近期时间段验证票的金额（扣除退票及撤销撤改），默认近30天' AS data_describe
FROM report_order_summary
WHERE user_id IN (
		SELECT user_id
		FROM BI_DataV.datav_auth
		WHERE DataV_token = ${token}
	)
	AND oper_date >= DATE_FORMAT(${start_date}, '%Y%m%d')
	AND oper_date <= DATE_FORMAT(${end_date}, '%Y%m%d')
```
:::

- travel_order_report

|   api描述    |      数据源       | 访问量 | 请求方式 |
| :----------: | :---------------: | :----: | :------: |
| 报表验证汇总 | MySQL / RDS_dataV |  571   |   POST   |

|  请求参数  | 参数名  | 数据类型 | 行级权限 | 说明  |
| :--------: | :-----: | :------: | :------: | :---: |
|   token    | VARCHAR |    是    |    否    |       |
| start_date | VARCHAR |    否    |    否    |       |
|  end_date  | VARCHAR |    否    |    否    |       |

:::demo 请求参数
```sql
SELECT SUM(CAST(order_ticket AS SIGNED) - CAST(cancel_ticket AS SIGNED) - CAST(revoke_ticket AS SIGNED)) AS order_ticket
	, SUM(CAST(sale_money AS SIGNED) - CAST(cancel_sale_money AS SIGNED) - CAST(revoke_sale_money AS SIGNED)) / 100 AS order_amount
	, '预定数,销售金额' AS data_name_chinese
	, '1.预定数：不包含今天的近期时间段预定总数（扣除撤销撤改），默认近30天；2.销售金额：不包含今天的近期时间预定票的金额（扣除退票及撤销撤改），默认近30天' AS data_describe
FROM report_order_summary
WHERE user_id IN (
		SELECT user_id
		FROM BI_DataV.datav_auth
		WHERE DataV_token = ${token}
	)
	AND oper_date >= DATE_FORMAT(${start_date}, '%Y%m%d')
	AND oper_date <= DATE_FORMAT(${end_date}, '%Y%m%d')
```
:::

- travel_order_h_summary_formal

|       api描述        |     数据源      | 访问量 | 请求方式 |
| :------------------: | :-------------: | :----: | :------: |
| 当日预定检票分时汇总 | MySQL / summary |  556   |   POST   |

| 请求参数  |    参数名    | 数据类型 | 行级权限 |   说明    |
| :-------: | :----------: | :------: | :------: | :-------: |
| user_auth |   VARCHAR    |    是    |    否    | 用户token |
|  land_id  | INT UNSIGNED |    否    |    否    |  产品ID   |

:::demo 请求参数
```sql
SELECT concat(hour(FROM_UNIXTIME(update_time)), ':00') AS stat_hour
	, SUM(CAST(order_ticket AS SIGNED) + CAST(finish_ticket AS SIGNED) - CAST(revoke_ticket AS SIGNED)) AS vertify_ticket
	, '客流量小时验证汇总' AS data_name_chinese, '验证票数按小时汇总(扣除退票及撤销撤改)，默认当天，默认所有产品' AS data_describe
FROM summary.pft_report_checked_two o
	LEFT JOIN BI_DataV.datav_auth a ON o.fid = a.user_id
WHERE a.DataV_token = ${user_auth}
	AND date = date_FORMAT(CURRENT_DATE(), '%Y%m%d')
	AND o.lid = ${land_id}
GROUP BY hour(FROM_UNIXTIME(update_time))
UNION ALL
SELECT concat(hour(FROM_UNIXTIME(update_time)), ':00') AS stat_hour
	, SUM(CAST(order_ticket AS SIGNED) - CAST(cancel_ticket AS SIGNED) - CAST(revoke_ticket AS SIGNED)) AS vertify_ticket
	, '客流量小时预定汇总' AS data_name_chinese, '预定票数按小时汇总(扣除退票及撤销撤改)，默认当天，默认所有产品' AS data_describe
FROM summary.pft_report_order_two q
	LEFT JOIN BI_DataV.datav_auth a ON q.fid = a.user_id
WHERE a.DataV_token = ${user_auth}
	AND date = date_FORMAT(CURRENT_DATE(), '%Y%m%d')
	AND q.lid = ${land_id}
GROUP BY hour(FROM_UNIXTIME(update_time))
```
:::

- travel_order_booking_summary

|           api描述           |     数据源      | 访问量 | 请求方式 |
| :-------------------------: | :-------------: | :----: | :------: |
| 今日-预定门票、订单、金额数 | MySQL / summary |  522   |   POST   |

| 请求参数 | 参数名  | 数据类型 | 行级权限 | 说明  |
| :------: | :-----: | :------: | :------: | :---: |
|  token   | VARCHAR |    是    |    否    |       |

:::demo 请求参数
```sql
SELECT SUM(CAST(order_ticket AS SIGNED) - CAST(cancel_ticket AS SIGNED) - CAST(revoke_ticket AS SIGNED)) AS ticket_num
	, SUM(CAST(order_num AS SIGNED) - CAST(cancel_num AS SIGNED) - CAST(revoke_num AS SIGNED)) AS order_num
	, SUM(CAST(sale_money AS SIGNED) - CAST(cancel_sale_money AS SIGNED) - CAST(revoke_sale_money AS SIGNED)) / 100 AS amount
	, '今日预定数' AS data_name_chinese, '1.今日预订数(扣除退票及撤销撤改);' AS data_describe
FROM pft_report_order_two
WHERE fid IN (
		SELECT user_id
		FROM `BI_DataV`.`datav_auth`
		WHERE DataV_token = ${token}
	)
	AND date >= DATE_FORMAT(CURDATE(), '%Y%m%d')
```
:::

- travel_product_summary_formal

|   api描述    |      数据源       | 访问量 | 请求方式 |
| :----------: | :---------------: | :----: | :------: |
| 产品销量汇总 | MySQL / RDS_dataV |  265   |   POST   |

|  请求参数   |  参数名  | 数据类型 | 行级权限 |    说明     |
| :---------: | :------: | :------: | :------: | :---------: |
| start_date  | DATETIME |    否    |    否    |  起始时间   |
|  end_date   | DATETIME |    否    |    否    |  截止时间   |
|    token    | VARCHAR  |    是    |    否    | 供应商token |
| resource_id |   INT    |    否    |    否    |   资源id    |
|  ticket_id  |   INT    |    否    |    否    |    票ID     |

:::demo 请求参数
```sql
SELECT land_publisher_id, ticket_id, ticket_fullname, SUM(tnum) AS tnum
	, SUM(onum) AS onum, SUM(sale_money) AS sale_money
	, d.data_name_chinese, d.data_describe
FROM (
	SELECT *
		, 'travel_product_summary_formal' AS api_name
	FROM travel_product_summary
) a
	LEFT JOIN BI_DataV.datav_auth b ON a.land_publisher_id = b.user_id
	LEFT JOIN bi_business.datav_dictionary d ON a.api_name = d.api_name
WHERE booking_time >= ${start_date}
	AND booking_time <= ${end_date}
	AND b.DataV_token = ${token}
	AND resource_id = ${resource_id}
	AND a.ticket_id = ${ticket_id}
GROUP BY land_publisher_id, ticket_id, ticket_fullname
ORDER BY SUM(tnum) DESC
```
:::

- selling_channel

|            api描述            |      数据源       | 访问量 | 请求方式 |
| :---------------------------: | :---------------: | :----: | :------: |
| 分销渠道，分为直销、分销、OTA | MySQL / RDS_dataV |  265   |   POST   |

|  请求参数  |  参数名  | 数据类型 | 行级权限 | 说明  |
| :--------: | :------: | :------: | :------: | :---: |
|   token    | VARCHAR  |    是    |    否    |       |
| start_date | DATETIME |    否    |    否    |       |
|  end_date  | DATETIME |    否    |    否    |       |
| ticket_id  |   INT    |    否    |    否    | 票id  |


:::demo 请求参数
```sql
SELECT dimension_methods, channel_name, SUM(ticket_num) AS ticket_num
	, SUM(order_num) AS order_num
	, sum(pay_amount) / 100 AS pay_amount, dic.data_name_chinese
	, dic.data_describe
FROM (
	SELECT *, 'selling_channel' AS api_name
	FROM selling_channel
) s
	JOIN datav_auth d ON s.user_id = d.user_id
	LEFT JOIN `bi_business`.`datav_dictionary` dic ON s.api_name = dic.api_name
WHERE DataV_token = ${token}
	AND booking_time >= ${start_date}
	AND booking_time <= ${end_date}
	AND ticket_id = ${ticket_id}
	AND channel_name IS NOT NULL
GROUP BY dimension_methods, channel_name
ORDER BY dimension_methods, ticket_num DESC
```
:::

- booking_account

|       api描述        |      数据源       | 访问量 | 请求方式 |
| :------------------: | :---------------: | :----: | :------: |
| 提前预定时间票数占比 | MySQL / RDS_dataV |  262   |   POST   |

|  请求参数  |  参数名  | 数据类型 | 行级权限 | 说明  |
| :--------: | :------: | :------: | :------: | :---: |
|   token    | VARCHAR  |    否    |    否    |       |
| start_date | DATETIME |    否    |    否    |       |
|  end_date  | DATETIME |    否    |    否    |       |

:::demo 请求参数
```sql
SELECT SUM(today) AS 'today', SUM(yesterday) AS 'ahead_one_day'
	, SUM(weeks) AS 'ahead_week', SUM(more_week) AS 'ahead_more_week'
	, d.data_name_chinese, d.data_describe
FROM (
	SELECT *, 'booking_account' AS api_name
	FROM booking_sum
) o
	JOIN datav_auth a ON o.user_id = a.user_id
	LEFT JOIN bi_business.datav_dictionary d ON o.api_name = d.api_name
WHERE a.DataV_token = ${token}
	AND booking_date >= ${start_date}
	AND booking_date <= ${end_date}
```
:::

- travel_order_vertify_summary

|            api描述             |     数据源      | 访问量 | 请求方式 |
| :----------------------------: | :-------------: | :----: | :------: |
| 游客验证票数、订单数、金额汇总 | MySQL / summary |  249   |   POST   |

|  请求参数  |  参数名  | 数据类型 | 行级权限 | 说明  |
| :--------: | :------: | :------: | :------: | :---: |
|   token    | VARCHAR  |    否    |    否    |       |
| start_date | DATETIME |    否    |    否    |       |
|  end_date  | DATETIME |    否    |    否    |       |

:::demo 请求参数
```sql
SELECT SUM(CAST(order_ticket AS SIGNED) + CAST(finish_ticket AS SIGNED) - CAST(revoke_ticket AS SIGNED)) AS ticket_num
	, SUM(CAST(order_num AS SIGNED) + CAST(finish_num AS SIGNED) - CAST(revoke_num AS SIGNED)) AS order_num
	, SUM(CAST(sale_money AS SIGNED) + CAST(finish_sale_money AS SIGNED) - CAST(revoke_sale_money AS SIGNED)) / 100 AS amount
	, '验证数,结算金额' AS data_name_chinese
	, '1.验证数：包含今天的近期时间段验证总数（扣除撤销撤改），默认近30天；2.包含今天的近期时间段验证票的金额（扣除退票及撤销撤改），默认近30天' AS data_describe
FROM pft_report_checked_two
WHERE fid IN (
		SELECT user_id
		FROM BI_DataV.datav_auth
		WHERE DataV_token = ${token}
	)
	AND date >= DATE_FORMAT(${start_date}, '%Y%m%d')
	AND date <= DATE_FORMAT(${end_date}, '%Y%m%d')
```
:::

- travel_order_summary_formal

|                 api描述                  |        数据源         | 访问量 | 请求方式 |
| :--------------------------------------: | :-------------------: | :----: | :------: |
| 当日预定验证人数汇总（仅包含指定供应商） | MySQL / summary_dataV |  223   |   POST   |

|  请求参数   | 参数名  | 数据类型 | 行级权限 |    说明     |
| :---------: | :-----: | :------: | :------: | :---------: |
|    token    | VARCHAR |    是    |    否    | 供应商token |
| resource_id |   INT   |    否    |    否    | 景区资源ID  |

:::demo 请求参数
```sql
SELECT a.user_id, SUM(order_ticket - cancel_ticket - revoke_ticket) AS order_num
	, SUM(vertify_order_ticket - vertify_revoke_ticket) AS vertify_num
	, SUM(vertify_sale_money - vertify_revoke_sale_money) AS vertify_money, '销售数据' AS data_name_chinese
	, '1、预定人数：今日有效预订人数(扣除退票及撤销撤改),2、检票总人数：今日有效检票人数(扣除退票及撤销撤改)' AS data_describe
FROM order_d_sum a
	LEFT JOIN datav_auth b ON a.user_id = b.user_id
WHERE a.oper_date >= current_date()
	AND b.DataV_token = ${token}
	AND resource_id = ${resource_id}
GROUP BY a.user_id
```
:::

- travel_product_name_summary_formal

|   api描述    |      数据源       | 访问量 | 请求方式 |
| :----------: | :---------------: | :----: | :------: |
| 产品名称汇总 | MySQL / RDS_dataV |  198   |   POST   |

|  请求参数   | 参数名  | 数据类型 | 行级权限 |    说明     |
| :---------: | :-----: | :------: | :------: | :---------: |
| start_date  | VARCHAR |    否    |    否    |  起始时间   |
|  end_date   | VARCHAR |    否    |    否    |  截止时间   |
|    token    | VARCHAR |    是    |    否    | 供应商token |
| resource_id | VARCHAR |    否    |    否    |   资源id    |
| ticket_name | VARCHAR |    否    |    否    | 标题关键字  |

:::demo 请求参数
```sql
SELECT DISTINCT land_publisher_id, ticket_id, ticket_fullname
FROM travel_product_summary a
	LEFT JOIN BI_DataV.datav_auth b ON a.land_publisher_id = b.user_id
WHERE booking_time >= ${start_date}
	AND booking_time <= ${end_date}
	AND b.DataV_token = ${token}
	AND resource_id = ${resource_id}
	AND ticket_fullname LIKE (${ticket_name})
```
:::

- day_trend

|        api描述         |      数据源       | 访问量 | 请求方式 |
| :--------------------: | :---------------: | :----: | :------: |
| 历史日预定趋势（同比） | MySQL / RDS_dataV |  198   |   POST   |

|  请求参数   |    参数名    | 数据类型 | 行级权限 |       说明       |
| :---------: | :----------: | :------: | :------: | :--------------: |
|     uid     |     INT      |    否    |    否    |      用户id      |
|  user_auth  |   VARCHAR    |    是    |    否    |    用户token     |
| start_date  |   VARCHAR    |    是    |    否    | 开始日期（今年） |
|  end_date   |   VARCHAR    |    是    |    否    | 结束日期（今年） |
|   land_id   |     INT      |    否    |    否    |                  |
|     uid     |     INT      |    否    |    否    |      用户id      |
|  user_auth  |   VARCHAR    |    是    |    否    |    用户token     |
| start_date1 |   VARCHAR    |    是    |    否    | 开始日期（去年） |
|  end_date1  |   VARCHAR    |    是    |    否    | 结束日期（去年） |
|   land_id   | INT UNSIGNED |    是    |    否    |      景区id      |

:::demo 请求参数
```sql
SELECT year(o.oper_date) AS order_year, DATE_FORMAT(o.oper_date, '%Y-%m-%d') AS order_date
	, if(SUM(CAST(order_ticket AS SIGNED) - CAST(cancel_ticket AS SIGNED) - CAST(revoke_ticket AS SIGNED)) IS NULL, 0, SUM(CAST(order_ticket AS SIGNED) - CAST(cancel_ticket AS SIGNED) - CAST(revoke_ticket AS SIGNED))) AS order_ticket
	, if(SUM(CAST(sale_money AS SIGNED) - CAST(cancel_sale_money AS SIGNED) - CAST(revoke_sale_money AS SIGNED)) / 100 IS NULL, 0, SUM(CAST(sale_money AS SIGNED) - CAST(cancel_sale_money AS SIGNED) - CAST(revoke_sale_money AS SIGNED)) / 100) AS order_amount
	, if(SUM(CAST(vertify_order_ticket AS SIGNED) + CAST(vertify_finish_ticket AS SIGNED) - CAST(vertify_revoke_ticket AS SIGNED)) IS NULL, 0, SUM(CAST(vertify_order_ticket AS SIGNED) + CAST(vertify_finish_ticket AS SIGNED) - CAST(vertify_revoke_ticket AS SIGNED))) AS vertify_ticket
	, if(SUM(CAST(vertify_sale_money AS SIGNED) + CAST(vertify_finish_sale_money AS SIGNED) - CAST(vertify_revoke_sale_money AS SIGNED)) / 100 IS NULL, 0, SUM(CAST(vertify_sale_money AS SIGNED) + CAST(vertify_finish_sale_money AS SIGNED) - CAST(vertify_revoke_sale_money AS SIGNED)) / 100) AS vertify_amount
	, c.data_name_chinese, c.data_describe
FROM report_order_summary o
	LEFT JOIN datav_auth a ON o.user_id = a.user_id
	LEFT JOIN (
		SELECT data_name_chinese, data_describe
		FROM bi_business.datav_dictionary
		WHERE api_name = 'day_trend'
	) c
	ON 1 = 1
WHERE o.user_id = ${uid}
	AND a.DataV_token = ${user_auth}
	AND o.oper_date >= DATE_FORMAT(${start_date}, '%Y%m%d')
	AND o.oper_date <= DATE_FORMAT(${end_date}, '%Y%m%d')
	AND o.land_id = ${land_id}
GROUP BY order_year, order_date
UNION ALL
SELECT year(o.oper_date) AS order_year, DATE_FORMAT(o.oper_date, '%Y-%m-%d') AS order_date
	, if(SUM(CAST(order_ticket AS SIGNED) - CAST(cancel_ticket AS SIGNED) - CAST(revoke_ticket AS SIGNED)) IS NULL, 0, SUM(CAST(order_ticket AS SIGNED) - CAST(cancel_ticket AS SIGNED) - CAST(revoke_ticket AS SIGNED))) AS order_ticket
	, if(SUM(CAST(sale_money AS SIGNED) - CAST(cancel_sale_money AS SIGNED) - CAST(revoke_sale_money AS SIGNED)) / 100 IS NULL, 0, SUM(CAST(sale_money AS SIGNED) - CAST(cancel_sale_money AS SIGNED) - CAST(revoke_sale_money AS SIGNED)) / 100) AS order_amount
	, if(SUM(CAST(vertify_order_ticket AS SIGNED) + CAST(vertify_finish_ticket AS SIGNED) - CAST(vertify_revoke_ticket AS SIGNED)) IS NULL, 0, SUM(CAST(vertify_order_ticket AS SIGNED) + CAST(vertify_finish_ticket AS SIGNED) - CAST(vertify_revoke_ticket AS SIGNED))) AS vertify_ticket
	, if(SUM(CAST(vertify_sale_money AS SIGNED) + CAST(vertify_finish_sale_money AS SIGNED) - CAST(vertify_revoke_sale_money AS SIGNED)) / 100 IS NULL, 0, SUM(CAST(vertify_sale_money AS SIGNED) + CAST(vertify_finish_sale_money AS SIGNED) - CAST(vertify_revoke_sale_money AS SIGNED)) / 100) AS vertify_amount
	, c.data_name_chinese, c.data_describe
FROM report_order_summary o
	LEFT JOIN datav_auth a ON o.user_id = a.user_id
	LEFT JOIN (
		SELECT data_name_chinese, data_describe
		FROM bi_business.datav_dictionary
		WHERE api_name = 'day_trend'
	) c
	ON 1 = 1
WHERE o.user_id = ${uid}
	AND a.DataV_token = ${user_auth}
	AND o.oper_date >= DATE_FORMAT(${start_date1}, '%Y%m%d')
	AND o.oper_date <= DATE_FORMAT(${end_date1}, '%Y%m%d')
	AND o.land_id = ${land_id}
GROUP BY order_year, order_date
```
:::

- travel_age_summary_new

|      api描述      |      数据源       | 访问量 | 请求方式 |
| :---------------: | :---------------: | :----: | :------: |
| 新年龄分层统计api | MySQL / RDS_dataV |  178   |   POST   |

|     请求参数      | 参数名  | 数据类型 | 行级权限 |   说明    |
| :---------------: | :-----: | :------: | :------: | :-------: |
|    start_date     |  DATE   |    否    |    否    | 开始时间  |
|     end_date      |  DATE   |    否    |    否    | 结束时间  |
|       token       | VARCHAR |    是    |    否    | 用户TOKEN |
| resource_id_start |   INT   |    否    |    否    |           |
|  resource_id_end  |   INT   |    否    |    否    |           |
|      land_id      |   INT   |    否    |    否    |  产品ID   |
| ticket_taker_sex  | VARCHAR |    否    |    否    | 用户性别  |

:::demo 请求参数(无)
```sql
SELECT land_publisher_id
        , CASE 
                WHEN a.age_id IN (1, 2) THEN '0~15'
                WHEN a.age_id IN (3, 4) THEN '16~21'
                WHEN a.age_id IN (5) THEN '22~30'
                WHEN a.age_id IN (6) THEN '31~40'
                WHEN a.age_id IN (7) THEN '41~50'
                WHEN a.age_id IN (8, 9) THEN '51~60'
                WHEN a.age_id IN (10, 11, 13) THEN '60+'
        END AS new_age_name, SUM(tnum) AS tnum
        , round(SUM(order_pay_amount) / SUM(tnum),2) AS avg_amount
        , d.data_name_chinese, d.data_describe
FROM (
        SELECT *, 'travel_age_summary_formal' AS api_name
        FROM BI_DataV.travel_age_gender_summary
) a
        LEFT JOIN BI_DataV.datav_auth b ON a.land_publisher_id = b.user_id
        LEFT JOIN bi_business.datav_dictionary d ON a.api_name = d.api_name
WHERE vertify_time >= ${start_date}
        AND vertify_time <= ${end_date}
        AND b.DataV_token = ${token}
        AND resource_id >= ${resource_id_start}
        AND resource_id <= ${resource_id_end}
        AND a.land_id = ${land_id}
        AND a.ticket_taker_sex = ${ticket_taker_sex}
GROUP BY land_publisher_id, new_age_name
ORDER BY a.age_id
```
:::

- travel_tourists_source_summary_formal

|    api描述     |      数据源       | 访问量 | 请求方式 |
| :------------: | :---------------: | :----: | :------: |
| 客源地省份汇总 | MySQL / RDS_dataV |   32   |   POST   |

|       请求参数        |  参数名  | 数据类型 | 行级权限 |    说明     |
| :-------------------: | :------: | :------: | :------: | :---------: |
|      start_date       | DATETIME |    否    |    否    |  起始时间   |
|       end_date        | DATETIME |    否    |    否    |  截止时间   |
|         token         | VARCHAR  |    是    |    否    | 供应商token |
|   resource_id_start   |   INT    |    否    |    否    | 起始资源id  |
|    resource_id_end    |   INT    |    否    |    否    | 截止资源id  |
| ticket_taker_province | VARCHAR  |    否    |    否    |             |
|        land_id        |   INT    |    否    |    否    |             |

:::demo 请求参数
```sql
SELECT ticket_taker_province, SUM(tnum) AS tnum, d.data_name_chinese, d.data_describe
FROM (
	SELECT *
		, 'travel_tourists_source_summary_formal' AS api_name
	FROM travel_tourists_source_summary
) a
	LEFT JOIN BI_DataV.datav_auth b ON a.land_publisher_id = b.user_id
	LEFT JOIN bi_business.datav_dictionary d ON a.api_name = d.api_name
WHERE vertify_time >= ${start_date}
	AND vertify_time <= ${end_date}
	AND b.DataV_token = ${token}
	AND resource_id >= ${resource_id_start}
	AND resource_id <= ${resource_id_end}
	AND ticket_taker_province = ${ticket_taker_province}
	AND a.land_id = ${land_id}
GROUP BY ticket_taker_province
ORDER BY SUM(a.tnum) DESC
```
:::

- travel_tourists_source_city_summary_formal

|    api描述     |      数据源       | 访问量 | 请求方式 |
| :------------: | :---------------: | :----: | :------: |
| 客源地城市汇总 | MySQL / RDS_dataV |   30   |   POST   |

|       请求参数        |  参数名  | 数据类型 | 行级权限 |    说明     |
| :-------------------: | :------: | :------: | :------: | :---------: |
|      start_date       | DATETIME |    否    |    否    |  起始时间   |
|       end_date        | DATETIME |    否    |    否    |  截止时间   |
|         token         | VARCHAR  |    是    |    否    | 供应商token |
|   resource_id_start   |   INT    |    否    |    否    | 起始资源id  |
|    resource_id_end    |   INT    |    否    |    否    | 截止资源id  |
|        land_id        |   INT    |    否    |    否    |             |
| ticket_taker_province | VARCHAR  |    否    |    否    |     省      |

:::demo 请求参数
```sql
SELECT ticket_taker_city, SUM(tnum) AS tnum, d.data_name_chinese, d.data_describe
FROM (
	SELECT *
		, 'travel_tourists_source_city_summary_formal' AS api_name
	FROM travel_tourists_source_summary
) a
	LEFT JOIN BI_DataV.datav_auth b ON a.land_publisher_id = b.user_id
	LEFT JOIN bi_business.datav_dictionary d ON a.api_name = d.api_name
WHERE vertify_time >= ${start_date}
	AND vertify_time <= ${end_date}
	AND b.DataV_token = ${token}
	AND resource_id >= ${resource_id_start}
	AND resource_id <= ${resource_id_end}
	AND a.land_id = ${land_id}
	AND a.ticket_taker_province = ${ticket_taker_province}
GROUP BY land_publisher_id, ticket_taker_city
ORDER BY SUM(a.tnum) DESC
```
:::

- land_h_gate

|        api描述         |     数据源      | 访问量 | 请求方式 |
| :--------------------: | :-------------: | :----: | :------: |
| 今日-景区-分时入园人数 | MySQL / summary |   24   |   POST   |

| 请求参数 |    参数名    | 数据类型 | 行级权限 |  说明  |
| :------: | :----------: | :------: | :------: | :----: |
| land_id  | INT UNSIGNED |    是    |    否    | 景区id |

:::demo 请求参数
```sql
SELECT substr(FROM_UNIXTIME(create_time), 12, 2) AS hours
	, SUM(if(roll = 0, if(num > 0, num, 1), 0)) AS "enter_land"
	, '分时游客数' AS data_name_chinese, '景区闸机按小时汇总入园人数（含退票）' AS data_describe
FROM pft_dc_daycount_info
WHERE land_id = ${land_id}
	AND FROM_UNIXTIME(create_time) >= CURDATE()
GROUP BY substr(FROM_UNIXTIME(create_time), 12, 2)
```
:::

- datav_auth_secret_code

| api描述  |      数据源       | 访问量 | 请求方式 |
| :------: | :---------------: | :----: | :------: |
| 账号加密 | MySQL / RDS_dataV |   19   |   POST   |

|  请求参数   | 参数名  | 数据类型 | 行级权限 |   说明   |
| :---------: | :-----: | :------: | :------: | :------: |
| secret_code | VARCHAR |    是    |    否    | 加密code |

:::demo 请求参数
```sql
SELECT DataV_token, land_id
FROM datav_auth
WHERE secret_code = ${secret_code}
```
:::

- travel_togerter_summary_formal

|     api描述      |      数据源       | 访问量 | 请求方式 |
| :--------------: | :---------------: | :----: | :------: |
| 团队人数游玩汇总 | MySQL / RDS_dataV |   17   |   POST   |

|     请求参数      |  参数名  | 数据类型 | 行级权限 |    说明     |
| :---------------: | :------: | :------: | :------: | :---------: |
|    start_date     | DATETIME |    否    |    否    |  起始时间   |
|     end_date      | DATETIME |    否    |    否    |  截止时间   |
|       token       | VARCHAR  |    是    |    否    | 供应商token |
| resource_id_start |   INT    |    否    |    否    | 起始资源id  |
|  resource_id_end  |   INT    |    否    |    否    | 截止资源id  |
|      land_id      |   INT    |    否    |    否    |             |

:::demo 请求参数
```sql
SELECT land_publisher_id, num_type
	, CASE num_type
		WHEN '1人' THEN 1
		WHEN '2~3人' THEN 2
		WHEN '4~9人' THEN 3
		WHEN '10人以上' THEN 4
	END AS oid, SUM(onum) AS onum, d.data_name_chinese, d.data_describe
FROM (
	SELECT *
		, 'travel_togerter_summary_formal' AS api_name
	FROM travel_togerter_summary
) a
	LEFT JOIN `BI_DataV`.`datav_auth` b ON a.land_publisher_id = b.user_id
	LEFT JOIN `bi_business`.`datav_dictionary` d ON a.api_name = d.api_name
WHERE vertify_time >= ${start_date}
	AND vertify_time <= ${end_date}
	AND b.DataV_token = ${token}
	AND resource_id >= ${resource_id_start}
	AND resource_id <= ${resource_id_end}
	AND a.land_id = ${land_id}
	AND num_type IS NOT NULL
GROUP BY land_publisher_id, num_type, oid
ORDER BY oid
```
:::

- travel_tourists_source_county_summary_formal

| api描述 |      数据源       | 访问量 | 请求方式 |
| :-----: | :---------------: | :----: | :------: |
| 游客县  | MySQL / RDS_dataV |   11   |   POST   |

|     请求参数      |  参数名  | 数据类型 | 行级权限 | 说明  |
| :---------------: | :------: | :------: | :------: | :---: |
|    start_date     | DATETIME |    否    |    否    |       |
|     end_date      | DATETIME |    否    |    否    |       |
|       token       | VARCHAR  |    否    |    否    |       |
| resource_id_start |   INT    |    否    |    否    |       |
|  resource_id_end  |   INT    |    否    |    否    |       |

:::demo 请求参数
```sql
SELECT ticket_taker_country, SUM(tnum) AS tnum_county
FROM travel_tourists_source_summary a
	LEFT JOIN datav_auth b ON a.land_publisher_id = b.user_id
WHERE vertify_time >= ${start_date}
	AND vertify_time <= ${end_date}
	AND b.DataV_token = ${token}
	AND resource_id >= ${resource_id_start}
	AND resource_id <= ${resource_id_end}
GROUP BY land_publisher_id, ticket_taker_country
ORDER BY SUM(a.tnum) DESC
```
:::

- travel_gender_summary_formal

|   api描述    |      数据源       | 访问量 | 请求方式 |
| :----------: | :---------------: | :----: | :------: |
| 性别游玩汇总 | MySQL / RDS_dataV |   5    |   POST   |

|     请求参数      |  参数名  | 数据类型 | 行级权限 |  说明  |
| :---------------: | :------: | :------: | :------: | :----: |
|    start_date     | DATETIME |    否    |    否    |        |
|     end_date      | DATETIME |    否    |    否    |        |
|       token       | VARCHAR  |    否    |    否    |        |
| resource_id_start |   INT    |    否    |    否    |        |
|  resource_id_end  |   INT    |    否    |    否    |        |
|      land_id      |   INT    |    否    |    否    | 产品ID |

:::demo 请求参数
```sql
SELECT ticket_taker_sex, SUM(tnum) AS tnum, d.data_name_chinese, d.data_describe
FROM (
	SELECT *, 'travel_gender_summary_formal' AS api_name
	FROM travel_age_gender_summary
) a
	LEFT JOIN BI_DataV.datav_auth b ON a.land_publisher_id = b.user_id
	LEFT JOIN bi_business.datav_dictionary d ON a.api_name = d.api_name
WHERE vertify_time >= ${start_date}
	AND vertify_time <= ${end_date}
	AND b.DataV_token = ${token}
	AND resource_id >= ${resource_id_start}
	AND resource_id <= ${resource_id_end}
	AND a.land_id = ${land_id}
	AND ticket_taker_sex != '未知'
GROUP BY ticket_taker_sex
```
:::

- month_trend

|    api描述     |      数据源       | 访问量 | 请求方式 |
| :------------: | :---------------: | :----: | :------: |
| 月验证趋势比较 | MySQL / RDS_dataV |   3    |   POST   |

|  请求参数   | 参数名  | 数据类型 | 行级权限 |       说明       |
| :---------: | :-----: | :------: | :------: | :--------------: |
|     uid     |   INT   |    否    |    否    |      用户id      |
|  user_auth  | VARCHAR |    是    |    否    |    用户token     |
| start_date  | VARCHAR |    是    |    否    | 开始日期（今年） |
|  end_date   | VARCHAR |    是    |    否    | 结束日期（今年） |
|   land_id   |   INT   |    否    |    否    |                  |
|     uid     |   INT   |    否    |    否    |      用户id      |
|  user_auth  | VARCHAR |    是    |    否    |    用户token     |
| start_date1 | VARCHAR |    是    |    否    | 开始日期（去年） |
|  end_date1  | VARCHAR |    是    |    否    | 结束日期（去年） |
|   land_id   |   INT   |    否    |    否    |                  |


:::demo 请求参数
```sql
SELECT year(o.oper_date) AS order_year, month(o.oper_date) AS order_month
	, SUM(CAST(order_ticket AS SIGNED) - CAST(cancel_ticket AS SIGNED) - CAST(revoke_ticket AS SIGNED)) AS order_ticket
	, SUM(CAST(sale_money AS SIGNED) - CAST(cancel_sale_money AS SIGNED) - CAST(revoke_sale_money AS SIGNED)) / 100 AS order_amount
	, SUM(CAST(vertify_order_ticket AS SIGNED) + CAST(vertify_finish_ticket AS SIGNED) - CAST(vertify_revoke_ticket AS SIGNED)) AS vertify_ticket
	, SUM(CAST(vertify_sale_money AS SIGNED) + CAST(vertify_finish_sale_money AS SIGNED) - CAST(vertify_revoke_sale_money AS SIGNED)) / 100 AS vertify_amount
	, c.data_name_chinese, c.data_describe
FROM report_order_summary o
	LEFT JOIN datav_auth a ON o.user_id = a.user_id
	LEFT JOIN (
		SELECT data_name_chinese, data_describe
		FROM bi_business.datav_dictionary
		WHERE api_name = 'month_trend'
	) c
	ON 1 = 1
WHERE o.user_id = ${uid}
	AND a.DataV_token = ${user_auth}
	AND o.oper_date >= DATE_FORMAT(${start_date}, '%Y%m%d')
	AND o.oper_date < DATE_FORMAT(${end_date}, '%Y%m%d')
	AND o.land_id = ${land_id}
GROUP BY order_year, order_month
UNION ALL
SELECT year(o.oper_date) AS order_year, month(o.oper_date) AS order_month
	, SUM(CAST(order_ticket AS SIGNED) - CAST(cancel_ticket AS SIGNED) - CAST(revoke_ticket AS SIGNED)) AS order_ticket
	, SUM(CAST(sale_money AS SIGNED) - CAST(cancel_sale_money AS SIGNED) - CAST(revoke_sale_money AS SIGNED)) / 100 AS order_amount
	, SUM(CAST(vertify_order_ticket AS SIGNED) + CAST(vertify_finish_ticket AS SIGNED) - CAST(vertify_revoke_ticket AS SIGNED)) AS vertify_ticket
	, SUM(CAST(vertify_sale_money AS SIGNED) + CAST(vertify_finish_sale_money AS SIGNED) - CAST(vertify_revoke_sale_money AS SIGNED)) / 100 AS vertify_amount
	, c.data_name_chinese, c.data_describe
FROM report_order_summary o
	LEFT JOIN datav_auth a ON o.user_id = a.user_id
	LEFT JOIN (
		SELECT data_name_chinese, data_describe
		FROM bi_business.datav_dictionary
		WHERE api_name = 'month_trend'
	) c
	ON 1 = 1
WHERE o.user_id = ${uid}
	AND a.DataV_token = ${user_auth}
	AND o.oper_date >= DATE_FORMAT(${start_date1}, '%Y%m%d')
	AND o.oper_date < DATE_FORMAT(${end_date1}, '%Y%m%d')
	AND o.land_id = ${land_id}
GROUP BY order_year, order_month
```
:::

- travel_team_summary_formal

|   api描述    |      数据源       | 访问量 | 请求方式 |
| :----------: | :---------------: | :----: | :------: |
| 团散游玩汇总 | MySQL / RDS_dataV |   2    |   POST   |

|     请求参数      |  参数名  | 数据类型 | 行级权限 | 说明  |
| :---------------: | :------: | :------: | :------: | :---: |
|    start_date     | DATETIME |    否    |    否    |       |
|     end_date      | DATETIME |    否    |    否    |       |
|       token       | VARCHAR  |    否    |    否    |       |
| resource_id_start |   INT    |    否    |    否    |       |
|  resource_id_end  |   INT    |    否    |    否    |       |
|      land_id      |   INT    |    否    |    否    |       |

:::demo 请求参数
```sql
SELECT land_publisher_id, team_type, SUM(tnum) AS tnum, d.data_name_chinese
	, d.data_describe
FROM (
	SELECT *, 'travel_team_summary_formal' AS api_name
	FROM travel_team_summary
) a
	LEFT JOIN BI_DataV.datav_auth b ON a.land_publisher_id = b.user_id
	LEFT JOIN bi_business.datav_dictionary d ON a.api_name = d.api_name
WHERE vertify_time >= ${start_date}
	AND vertify_time <= ${end_date}
	AND b.DataV_token = ${token}
	AND resource_id >= ${resource_id_start}
	AND resource_id <= ${resource_id_end}
	AND a.land_id = ${land_id}
GROUP BY land_publisher_id, team_type
```
:::

- player_today_plan

|         api描述         |      数据源       | 访问量 | 请求方式 |
| :---------------------: | :---------------: | :----: | :------: |
| 游玩日期=今日的预定总数 | MySQL / RDS_dataV |   2    |   POST   |

| 请求参数 | 参数名  | 数据类型 | 行级权限 | 说明  |
| :------: | :-----: | :------: | :------: | :---: |
|  token   | VARCHAR |    否    |    否    |       |

:::demo 请求参数
```sql
SELECT coalesce(o.ticket_num, 0) + coalesce(op.ticket_num, 0) AS ticket_num
	, dic.data_name_chinese, dic.data_describe
FROM (
	SELECT user_id, 'player_today_plan' AS api_name
	FROM datav_auth
	WHERE DataV_token = ${token}
) d
	LEFT JOIN (
		SELECT *
		FROM order_play
		WHERE play_date = CURRENT_DATE
			AND land_publisher_id = 3385
	) op
	ON d.user_id = op.land_publisher_id
	LEFT JOIN (
		SELECT apply_did, sum(tnum) AS ticket_num
		FROM myuu.uu_ss_order
		WHERE ordertime >= CURRENT_DATE
			AND playtime = CURRENT_DATE
		GROUP BY apply_did
	) o
	ON o.apply_did = d.user_id
	LEFT JOIN bi_business.datav_dictionary dic ON d.api_name = dic.api_name
```
:::

- travel_tourists_num_summary_formal

|   api描述    |      数据源       | 访问量 | 请求方式 |
| :----------: | :---------------: | :----: | :------: |
| 游客总数汇总 | MySQL / RDS_dataV |   0    |   POST   |

|  请求参数   |  参数名  | 数据类型 | 行级权限 |    说明     |
| :---------: | :------: | :------: | :------: | :---------: |
| start_date  | DATETIME |    否    |    否    |  起始时间   |
|  end_date   | DATETIME |    否    |    否    |  截止时间   |
|    token    | VARCHAR  |    是    |    否    | 供应商token |
| resource_id |   INT    |    否    |    否    |   资源id    |


:::demo 请求参数
```sql
SELECT land_publisher_id, SUM(tnum) AS tourists_num, d.data_name_chinese, d.data_describe
FROM (
	SELECT *, 'travel_tourists_num_summary_formal' AS api_name
	FROM travel_team_summary
) a
	LEFT JOIN BI_DataV.datav_auth b ON a.land_publisher_id = b.user_id
	LEFT JOIN bi_business.datav_dictionary d ON a.api_name = d.api_name
WHERE vertify_time >= ${start_date}
	AND vertify_time <= ${end_date}
	AND b.DataV_token = ${token}
	AND resource_id = ${resource_id}
GROUP BY land_publisher_id
```
:::

- travel_sale_money_summary_formal

|  api描述   |      数据源       | 访问量 | 请求方式 |
| :--------: | :---------------: | :----: | :------: |
| 销售额汇总 | MySQL / RDS_dataV |   0    |   POST   |

|  请求参数   |  参数名  | 数据类型 | 行级权限 |    说明     |
| :---------: | :------: | :------: | :------: | :---------: |
| start_date  | DATETIME |    否    |    否    |  起始时间   |
|  end_date   | DATETIME |    否    |    否    |  截止时间   |
|    token    | VARCHAR  |    是    |    否    | 供应商token |
| resource_id |   INT    |    否    |    否    |   资源id    |

:::demo 请求参数
```sql
SELECT land_publisher_id, SUM(order_pay_amount) AS order_pay_amount, d.data_name_chinese, d.data_describe
FROM (
	SELECT *, 'travel_sale_money_summary_formal' AS api_name
	FROM travel_sale_money_summary
) a
	LEFT JOIN BI_DataV.datav_auth b ON a.land_publisher_id = b.user_id
	LEFT JOIN bi_business.datav_dictionary d ON a.api_name = d.api_name
WHERE vertify_time >= ${start_date}
	AND vertify_time <= ${end_date}
	AND b.DataV_token = ${token}
	AND resource_id = ${resource_id}
GROUP BY land_publisher_id
```
:::


- travel_sale_channel_formal

|   api描述    |      数据源       | 访问量 | 请求方式 |
| :----------: | :---------------: | :----: | :------: |
| 分销渠道汇总 | MySQL / RDS_dataV |   0    |   POST   |

|  请求参数   |  参数名  | 数据类型 | 行级权限 |    说明     |
| :---------: | :------: | :------: | :------: | :---------: |
| start_date  | DATETIME |    否    |    否    |  起始时间   |
|  end_date   | DATETIME |    否    |    否    |  截止时间   |
|    token    | VARCHAR  |    是    |    否    | 供应商token |
| resource_id |   INT    |    否    |    否    |   资源id    |

:::demo 请求参数
```sql
SELECT land_publisher_id, channel_name, is_distribution, SUM(tnum) AS tnum
	, SUM(onum) AS onum
FROM travel_sale_channel a
	LEFT JOIN BI_DataV.datav_auth b ON a.land_publisher_id = b.user_id
WHERE booking_time >= ${start_date}
	AND booking_time <= ${end_date}
	AND b.DataV_token = ${token}
	AND resource_id = ${resource_id}
GROUP BY land_publisher_id, channel_name, is_distribution
```
:::

- tourists_num_monny_summary_formal

|      api描述       |      数据源       | 访问量 | 请求方式 |
| :----------------: | :---------------: | :----: | :------: |
| 游客总数和销量汇总 | MySQL / RDS_dataV |   0    |   POST   |

|  请求参数   | 参数名  | 数据类型 | 行级权限 |    说明     |
| :---------: | :-----: | :------: | :------: | :---------: |
|    token    | VARCHAR |    是    |    否    | 供应商token |
| resource_id |   INT   |    否    |    否    |   资源id    |

:::demo 请求参数
```sql
SELECT a.tourists_num, a.tourists_num_lastmonth, a.tourists_num_lastyear, b.order_pay_amount, b.order_pay_amount_lastmonth
	, b.order_pay_amount_lastyear
FROM (
	SELECT land_publisher_id, SUM(CASE 
			WHEN vertify_time >= ${start_date}
			AND vertify_time <= ${end_date} THEN tnum
			ELSE 0
		END) AS tourists_num, SUM(CASE 
			WHEN vertify_time >= date_sub(${start_date}, INTERVAL 30 DAY)
			AND vertify_time <= date_sub(${end_date}, INTERVAL 30 DAY) THEN tnum
			ELSE 0
		END) AS tourists_num_lastmonth
		, SUM(CASE 
			WHEN vertify_time >= date_sub(${start_date}, INTERVAL 1 YEAR)
			AND vertify_time <= date_sub(${end_date}, INTERVAL 1 YEAR) THEN tnum
			ELSE 0
		END) AS tourists_num_lastyear
	FROM travel_team_summary a
		LEFT JOIN BI_DataV.datav_auth b ON a.land_publisher_id = b.user_id
	WHERE b.DataV_token = ${token}
		AND resource_id = ${resource_id}
	GROUP BY land_publisher_id
) c
	JOIN (
		SELECT land_publisher_id, SUM(CASE 
				WHEN vertify_time >= ${start_date}
				AND vertify_time <= ${end_date} THEN order_pay_amount
				ELSE 0
			END) AS order_pay_amount, SUM(CASE 
				WHEN vertify_time >= date_sub(${start_date}, INTERVAL 30 DAY)
				AND vertify_time <= date_sub(${end_date}, INTERVAL 1 MONTH) THEN order_pay_amount
				ELSE 0
			END) AS order_pay_amount_lastmonth
			, SUM(CASE 
				WHEN vertify_time >= date_sub(${start_date}, INTERVAL 1 YEAR)
				AND vertify_time <= date_sub(${end_date}, INTERVAL 1 YEAR) THEN order_pay_amount
				ELSE 0
			END) AS order_pay_amount_lastyear
		FROM travel_sale_money_summary a
			LEFT JOIN BI_DataV.datav_auth b ON a.land_publisher_id = b.user_id
		WHERE b.DataV_token = ${token}
			AND resource_id = ${resource_id}
		GROUP BY land_publisher_id
	) d
	ON c.land_publisher_id = d.land_publisher_id
```
:::

- travel_ticket_sale_channel_formal

|     api描述      |      数据源       | 访问量 | 请求方式 |
| :--------------: | :---------------: | :----: | :------: |
| 票类分销渠道汇总 | MySQL / RDS_dataV |   0    |   POST   |

|  请求参数   | 参数名  | 数据类型 | 行级权限 |    说明     |
| :---------: | :-----: | :------: | :------: | :---------: |
| start_date  | VARCHAR |    否    |    否    |  起始时间   |
|  end_date   | VARCHAR |    否    |    否    |  截止时间   |
|    token    | VARCHAR |    是    |    否    | 供应商token |
| resource_id | VARCHAR |    否    |    否    |   资源id    |
|  ticket_id  |   INT   |    否    |    否    |   产品ID    |

:::demo 请求参数
```sql
SELECT land_publisher_id, channel_name, is_distribution, SUM(tnum) AS tnum
	, SUM(onum) AS onum
FROM travel_ticket_sale_channel a
	LEFT JOIN BI_DataV.datav_auth b ON a.land_publisher_id = b.user_id
WHERE booking_time >= ${start_date}
	AND booking_time <= ${end_date}
	AND b.DataV_token = ${token}
	AND resource_id = ${resource_id}
	AND a.ticket_id = ${ticket_id}
GROUP BY land_publisher_id, channel_name, is_distribution
```
:::

- travel_land_id_summary

|  api描述   |      数据源       | 访问量 | 请求方式 |
| :--------: | :---------------: | :----: | :------: |
| 产品id名称 | MySQL / RDS_dataV |   0    |   POST   |

| 请求参数  | 参数名  | 数据类型 | 行级权限 |          说明           |
| :-------: | :-----: | :------: | :------: | :---------------------: |
|   token   | VARCHAR |    是    |    否    |        用户token        |
| land_name | VARCHAR |    否    |    否    | 模糊产品名称（传入格... |

:::demo 请求参数
```sql
SELECT DISTINCT a.id AS land_id, a.title AS land_name, a.resourceID
FROM myuu.uu_land a
	LEFT JOIN datav_auth b ON a.apply_did = b.user_id
WHERE b.DataV_token = ${token}
	AND a.title LIKE (${land_name})
	AND a.status = 1
```
:::

- travel_month_trend

|  api描述   |      数据源       | 访问量 | 请求方式 |
| :--------: | :---------------: | :----: | :------: |
| 订单月趋势 | MySQL / RDS_dataV |   0    |   POST   |

|  请求参数  | 参数名  | 数据类型 | 行级权限 |   说明    |
| :--------: | :-----: | :------: | :------: | :-------: |
|    uid     |   INT   |    否    |    否    |  用户id   |
| user_auth  | VARCHAR |    是    |    否    | 用户token |
| start_date | VARCHAR |    是    |    否    | 开始日期  |
|  end_date  | VARCHAR |    是    |    否    | 结束日期  |
|  land_id   | VARCHAR |    否    |    否    |  产品id   |

:::demo 请求参数
```sql
SELECT year(o.oper_date) AS order_year, month(o.oper_date) AS order_month
	, SUM(CAST(order_ticket AS SIGNED) - CAST(cancel_ticket AS SIGNED) - CAST(revoke_ticket AS SIGNED)) AS order_ticket
	, SUM(CAST(sale_money AS SIGNED) - CAST(cancel_sale_money AS SIGNED) - CAST(revoke_sale_money AS SIGNED)) / 100 AS order_amount
	, SUM(CAST(vertify_order_ticket AS SIGNED) + CAST(vertify_finish_ticket AS SIGNED) - CAST(vertify_revoke_ticket AS SIGNED)) AS vertify_ticket
	, SUM(CAST(vertify_sale_money AS SIGNED) + CAST(vertify_finish_sale_money AS SIGNED) - CAST(vertify_revoke_sale_money AS SIGNED)) / 100 AS vertify_amount
FROM report_order_summary o
	LEFT JOIN datav_auth a ON o.user_id = a.user_id
WHERE o.user_id = ${uid}
	AND a.DataV_token = ${user_auth}
	AND (o.oper_date >= DATE_FORMAT(${start_date}, '%Y%m%d')
		AND o.oper_date <= DATE_FORMAT(${end_date}, '%Y%m%d'))
	AND o.land_id = ${land_id}
GROUP BY order_year, order_month
```
:::

- travel_year_trend

|  api描述   |      数据源       | 访问量 | 请求方式 |
| :--------: | :---------------: | :----: | :------: |
| 订单年趋势 | MySQL / RDS_dataV |   0    |   POST   |

| 请求参数  |    参数名    | 数据类型 | 行级权限 |   说明    |
| :-------: | :----------: | :------: | :------: | :-------: |
| user_auth |   VARCHAR    |    是    |    否    | 用户token |
|  land_id  | INT UNSIGNED |    是    |    否    |  景区id   |

:::demo 请求参数
```sql
SELECT year(o.oper_date) AS order_year
	, SUM(CAST(order_ticket AS SIGNED) - CAST(cancel_ticket AS SIGNED) - CAST(revoke_ticket AS SIGNED)) AS order_ticket
	, SUM(CAST(sale_money AS SIGNED) - CAST(cancel_sale_money AS SIGNED) - CAST(revoke_sale_money AS SIGNED)) / 100 AS order_amount
	, SUM(CAST(vertify_order_ticket AS SIGNED) + CAST(vertify_finish_ticket AS SIGNED) - CAST(vertify_revoke_ticket AS SIGNED)) AS vertify_ticket
	, SUM(CAST(vertify_sale_money AS SIGNED) + CAST(vertify_finish_sale_money AS SIGNED) - CAST(vertify_revoke_sale_money AS SIGNED)) / 100 AS vertify_amount
	, c.data_name_chinese, c.data_describe
FROM report_order_summary o
	LEFT JOIN datav_auth a ON o.user_id = a.user_id
	LEFT JOIN (
		SELECT data_name_chinese, data_describe
		FROM bi_business.datav_dictionary
		WHERE api_name = 'travel_year_trend'
	) c
	ON 1 = 1
WHERE a.DataV_token = ${user_auth}
	AND o.land_id = ${land_id}
GROUP BY order_year
```
:::

- resource_rank

|   api描述    |      数据源       | 访问量 | 请求方式 |
| :----------: | :---------------: | :----: | :------: |
| 景区排行接口 | MySQL / RDS_dataV |   0    |   POST   |

|  请求参数  |  参数名  | 数据类型 | 行级权限 | 说明  |
| :--------: | :------: | :------: | :------: | :---: |
| start_date | DATETIME |    是    |    否    |       |
|  end_date  | DATETIME |    是    |    否    |       |
|    uid     |   INT    |    是    |    否    |       |
| user_auth  | VARCHAR  |    是    |    否    |       |

:::demo 请求参数
```sql
SELECT if(resource_id = 0, '未知', resource_id) AS resource_id
	, if(resource_name IS NULL, '未知', resource_name) AS resource_name
	, SUM(order_num) AS order_num, SUM(ticket_num) AS order_ticket
FROM selling_channel s
	JOIN datav_auth d ON s.user_id = d.user_id
WHERE booking_time >= ${start_date}
	AND booking_time < ${end_date}
	AND s.user_id = ${uid}
	AND DataV_token = ${user_auth}
GROUP BY resource_id, resource_name
ORDER BY order_num DESC
```
:::

- travel_tourists_source_province_seach

| api描述  |      数据源       | 访问量 | 请求方式 |
| :------: | :---------------: | :----: | :------: |
| 省份搜索 | MySQL / RDS_dataV |   0    |   POST   |

|     请求参数      |  参数名  | 数据类型 | 行级权限 |   说明   |
| :---------------: | :------: | :------: | :------: | :------: |
|    start_date     | DATETIME |    否    |    否    | 下单时间 |
|     end_date      | DATETIME |    否    |    否    | 下单时间 |
|       token       | VARCHAR  |    是    |    否    |          |
| resource_id_start |   INT    |    否    |    否    |  资源id  |
|  resource_id_end  |   INT    |    否    |    否    |  资源id  |
|      land_id      |   INT    |    否    |    否    |  产品ID  |

:::demo 请求参数
```sql
SELECT DISTINCT ticket_taker_province
FROM travel_tourists_source_summary a
	JOIN datav_auth b ON a.land_publisher_id = b.user_id
WHERE vertify_time >= ${start_date}
	AND vertify_time <= ${end_date}
	AND b.DataV_token = ${token}
	AND resource_id >= ${resource_id_start}
	AND resource_id <= ${resource_id_end}
	AND ticket_taker_province IS NOT NULL
	AND ticket_taker_province <> '未知'
	AND a.land_id = ${land_id}
```
:::

- travel_card_management_data_summary

|                  api描述                  |      数据源       | 访问量 | 请求方式 |
| :---------------------------------------: | :---------------: | :----: | :------: |
| 刷卡入园-日数据：卡名称-刷卡日期-刷卡次数 | MySQL / RDS_dataV |   0    |   POST   |

|  请求参数  |  参数名  | 数据类型 | 行级权限 |   说明    |
| :--------: | :------: | :------: | :------: | :-------: |
| start_date | DATETIME |    否    |    否    | 开始日期  |
|  end_date  | DATETIME |    否    |    否    | 结束日期  |
|   token    | VARCHAR  |    否    |    否    | 商户token |

:::demo 请求参数
```sql
SELECT enter_date, card_type, staff_name, enter_count
FROM card_enter p
	LEFT JOIN datav_auth au ON au.user_id = p.user_id
WHERE enter_date >= ${start_date}
	AND enter_date <= ${end_date}
	AND au.DataV_token = ${token}
```
:::

## 资源中心

- resource_center_30d_land_rank

|            api描述            |         数据源          | 访问量 | 请求方式 |
| :---------------------------: | :---------------------: | :----: | :------: |
| 资源中心近30日订单量前100景区 | MySQL / RDS_bi_business |  203   |   POST   |

|    请求参数    | 参数名  | 数据类型 | 行级权限 |     说明     |
| :------------: | :-----: | :------: | :------: | :----------: |
| land_province  | VARCHAR |    否    |    否    |  景区所在省  |
|   land_city    | VARCHAR |    否    |    否    | 景区城市名称 |
| land_type_name | VARCHAR |    否    |    否    |   产品类型   |

:::demo 请求参数
```sql
SELECT land_id, land_name, resource_center_supplier_id, resource_center_supplier_name, land_type
	, COUNT(*) AS order_num, SUM(booking_num) AS ticket_num
FROM resource_center_order
WHERE booking_time < CURRENT_DATE
	AND booking_time >= date_sub(CURRENT_DATE, INTERVAL 30 DAY)
	AND land_province = ${land_province}
	AND land_city = ${land_city}
	AND land_type_name = ${land_type_name}
GROUP BY land_id, resource_center_supplier_id
ORDER BY order_num DESC
```
:::

