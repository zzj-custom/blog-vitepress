---
title: 客户统计
location: /json/customer/index.json
---

# {{$frontmatter.title}}

<p align="center">
  <a href="https://www.shields.io" target="_blank">
    <img src="https://img.shields.io/static/v1?label=客户统计&message=数据链接&color=orange&style=social&logo=appveyor">
  </a>
</p>

## 一丶指标

- 表格

|       fieldName        |     dbFieldName     | refObjName |      crmObjName       |      linkObjName      | dbObjName |  objectDescribeApiName  | objShowName |
| :--------------------: | :-----------------: | :--------: | :-------------------: | :-------------------: | :-------: | :---------------------: | :---------: |
|        合同金额        |   contract_amount   |            |      ContractObj      |                       | agg_data  |      biz_contract       |     Con     |
|         合同数         |        name         |            |      ContractObj      |      ContractObj      | agg_data  |      biz_contract       |     Con     |
|       跟进动态数       |       feed_id       |            | base_crmfeedrelation  |                       | agg_data  |  base_crmfeedrelation   |  跟进动态   |
|        产品合计        |   product_amount    |     ""     |     SalesOrderObj     |                       | agg_data  |     biz_sales_order     |  合同订单   |
|       待回款金额       |  receivable_amount  |     ""     |     SalesOrderObj     |                       | agg_data  |     biz_sales_order     |  合同订单   |
|         订单数         |        name         |            |     SalesOrderObj     |     SalesOrderObj     | agg_data  |     biz_sales_order     |  合同订单   |
|    审核中的订单金额    |    order_amount     |            |     SalesOrderObj     |                       | agg_data  |     biz_sales_order     |  合同订单   |
|     审核中的订单数     |        name         |     ""     |     SalesOrderObj     |     SalesOrderObj     | agg_data  |     biz_sales_order     |  合同订单   |
|    已发货的订单金额    |    order_amount     |            |     SalesOrderObj     |                       | agg_data  |     biz_sales_order     |  合同订单   |
|     已发货的订单数     |        name         |            |     SalesOrderObj     |     SalesOrderObj     | agg_data  |     biz_sales_order     |  合同订单   |
|    已确认的订单金额    |        name         |     ""     |     SalesOrderObj     |                       | agg_data  |     biz_sales_order     |  合同订单   |
|      计划回款金额      | plan_payment_amount |            |    PaymentPlanObj     |                       | agg_data  |      payment_plan       |  回款计划   |
|       计划回款数       |        name         |            |    PaymentPlanObj     |    PaymentPlanObj     | agg_data  |      payment_plan       |  回款计划   |
|       已回款笔数       |        name         |            |    OrderPaymentObj    |    OrderPaymentObj    | agg_data  |      payment_order      |  回款明细   |
|       已回款金额       |   payment_amount    |            |    OrderPaymentObj    |                       | agg_data  |      payment_order      |  回款明细   |
|       开票申请数       |        name         |            | InvoiceApplicationObj | InvoiceApplicationObj | agg_data  | biz_invoice_application |  开票申请   |
|       KP业态客户       |        name         |     ""     |      AccountObj       |      AccountObj       | agg_data  |       biz_account       |    客户     |
| 成交线索（推荐官介绍） |        name         |     ""     |      AccountObj       |      AccountObj       | agg_data  |       biz_account       |    客户     |
|      成交业态客户      |        name         |     ""     |      AccountObj       |      AccountObj       | agg_data  |       biz_account       |    客户     |
|       创建客户数       |        name         |     ""     |      AccountObj       |      AccountObj       | agg_data  |       biz_account       |    客户     |
|     交际客户成交数     |        name         |     ""     |      AccountObj       |      AccountObj       | agg_data  |       biz_account       |    客户     |
|       交接客户数       |        name         |     ""     |      AccountObj       |      AccountObj       | agg_data  |       biz_account       |    客户     |
|       经销商数量       |        name         |     ""     |      AccountObj       |      AccountObj       | agg_data  |       biz_account       |    客户     |
|        客户总数        |        name         |            |      AccountObj       |      AccountObj       | agg_data  |       biz_account       |    客户     |
|        门店数量        |        name         |     ""     |      AccountObj       |      AccountObj       | agg_data  |       biz_account       |    客户     |
|      平台需求数量      |        name         |     ""     |      AccountObj       |      AccountObj       | agg_data  |       biz_account       |    客户     |
|      推荐成交客户      |        name         |     ""     |      AccountObj       |      AccountObj       | agg_data  |       biz_account       |    客户     |
|   推荐官介绍线索总数   |        name         |     ""     |      AccountObj       |      AccountObj       | agg_data  |       biz_account       |    客户     |
|     推荐官客户总数     |        name         |     ""     |      AccountObj       |      AccountObj       | agg_data  |       biz_account       |    客户     |
|      无KP业态客户      |        name         |     ""     |      AccountObj       |      AccountObj       | agg_data  |       biz_account       |    客户     |
|      项目需求数量      |        name         |     ""     |      AccountObj       |      AccountObj       | agg_data  |       biz_account       |    客户     |
|     有竞品业态客户     |        name         |     ""     |      AccountObj       |      AccountObj       | agg_data  |       biz_account       |    客户     |
|        主线索数        |      leads_id       | biz_leads  |      AccountObj       |       LeadsObj        | agg_data  |       biz_account       |    客户     |
|       主业态客户       |        name         |     ""     |      AccountObj       |       LeadsObj        | agg_data  |       biz_account       |    客户     |
|  主业态客户（未分配）  |        name         |     ""     |      AccountObj       |       LeadsObj        | agg_data  |       biz_account       |    客户     |
|  主业态客户（已分配）  |        name         |     ""     |      AccountObj       |       LeadsObj        | agg_data  |       biz_account       |    客户     |
|        转手次数        |   transfer_count    |            |      AccountObj       |                       | agg_data  |       biz_account       |    客户     |
|         完成值         |    achieve_value    |     ""     |                       |                       | agg_data  |     goal_value_obj      |             |
|         目标值         |     month_value     |     ""     |                       |                       | agg_data  |     goal_value_obj      |             |
|        联系人数        |        name         |            |      ContactObj       |      ContactObj       | agg_data  |       biz_contact       |   联系人    |
|   产品合计(不含输单)   |        name         |            |      ContactObj       |      ContactObj       | agg_data  |       biz_contact       |   联系人    |
