---
title: 产品统计
location: /json/product/index.json
---

# {{$frontmatter.title}}

<p align="center">
  <a href="https://www.shields.io" target="_blank">
    <img src="https://img.shields.io/static/v1?label=产品统计&message=数据链接&color=orange&style=social&logo=appveyor">
  </a>
</p>

## 一丶指标
- 表格

|    fieldName     |  dbFieldName  | refObjName |           crmObjName           | linkObjName | dbObjName |       objectDescribeApiName        |   objShowName    |   type   |
| :--------------: | :-----------: | :--------: | :----------------------------: | :---------: | :-------: | :--------------------------------: | :--------------: | :------: |
|   报价产品数量   |   quantity    |            |         QuoteLinesObj          |             | agg_data  |            quote_lines             |    报价单明细    |  number  |
|   报价产品小计   | total_amount  |            |         QuoteLinesObj          |             | agg_data  |            quote_lines             |    报价单明细    |  number  |
|     产品总数     |     name      |            |           ProductObj           | ProductObj  | agg_data  |            biz_product             |       产品       |   text   |
|     价格(元)     |     price     |            |           ProductObj           |             | agg_data  |            biz_product             |       产品       | currency |
|      完成值      | achieve_value |    " "     |                                |             | agg_data  |           goal_value_obj           |                  |  number  |
|      目标值      |  month_value  |    " "     |                                |             | agg_data  |           goal_value_obj           |                  |  number  |
|     销售金额     |   subtotal    |            |      SalesOrderProductObj      |             | agg_data  |      biz_sales_order_product       |     订单产品     | currency |
|     销售数量     |   quantity    |            |      SalesOrderProductObj      |             | agg_data  |      biz_sales_order_product       |     订单产品     |  number  |
|    跟进动态数    |    feed_id    |            |      base_crmfeedrelation      |             | agg_data  |        base_crmfeedrelation        |     跟进动态     |   " "    |
| 商机明细产品数量 |   quantity    |            |     NewOpportunityLinesObj     |             | agg_data  |       new_opportunity_lines        |     商机明细     |  number  |
|   商机明细小计   | total_amount  |            |     NewOpportunityLinesObj     |             | agg_data  |       new_opportunity_lines        |     商机明细     | currency |
|     退货金额     |   subtotal    |            | ReturnedGoodsInvoiceProductObj |             | agg_data  | biz_returned_goods_invoice_product | 退货单关联的产品 | currency |
|     退货数量     |   quantity    |            | ReturnedGoodsInvoiceProductObj |             | agg_data  | biz_returned_goods_invoice_product | 退货单关联的产品 |  number  |


## 二丶维度
- 表格

|    fieldName     |      dbFieldName      |    refObjName     | crmObjName | linkObjName | dbObjName | objectDescribeApiName | objShowName |       type       | refKeyField | refTargetField  |
| :--------------: | :-------------------: | :---------------: | :--------: | :---------: | :-------: | :-------------------: | :---------: | :--------------: | :---------: | :-------------: |
|       标签       |    commodity_label    |        " "        | ProductObj |             | dim_data  |      biz_product      |    产品     |   select_many    |     " "     |       " "       |
|     产品编码     |     product_code      |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |       text       |             |                 |
|     产品名称     |         name          |                   | ProductObj | ProductObj  | dim_data  |      biz_product      |    产品     |       text       |             |                 |
|      产品线      |     product_line      |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |    select_one    |             |                 |
|  产品型号/版本   |    field_QMJ84__c     |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |       text       |             |                 |
|       厂家       |    field_EmoN9__c     |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |       text       |             |                 |
|      创建人      |      created_by       | org_employee_user | ProductObj |             | dim_data  |      biz_product      |    产品     |     employee     |   user_id   |      name       |
|     创建时间     |      create_time      |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |     datetime     |             |                 |
|       单位       |         unit          |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |    select_one    |             |                 |
|       分类       |       category        |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |    select_one    |             |                 |
|      负责人      |         owner         | org_employee_user | ProductObj |             | dim_data  |      biz_product      |    产品     | object_reference |   user_id   |      name       |
|  负责人主属部门  |   owner_department    | org_employee_user | ProductObj |             | dim_data  |      biz_product      |    产品     |      quote       |   user_id   | main_department |
|     规格属性     |     product_spec      |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |       text       |             |                 |
|     归属部门     |  data_own_department  |     org_dept      | ProductObj |             | dim_data  |      biz_product      |    产品     |    department    |   dept_id   |      name       |
|     归属组织     | data_own_organization |     org_dept      | ProductObj |             | dim_data  |      biz_product      |    产品     |    department    |   dept_id   |      name       |
|    合同产品名    |    field_Rdpcz__c     |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |       text       |             |                 |
|     开票名称     |    field_jc99S__c     |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |       text       |             |                 |
| 批次与序列号管理 |       batch_sn        |        " "        | ProductObj |             | dim_data  |      biz_product      |    产品     |    select_one    |     " "     |       " "       |
|       品牌       |    field_wLj8x__c     |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |       text       |             |                 |
|       日期       |      action_date      |                   |            |             | agg_data  |      biz_product      |    产品     |       date       |             |                 |
|    软件著作权    |    field_IP6hS__c     |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |       text       |             |                 |
|       商品       |        spu_id         |  stand_prod_unit  | ProductObj |   SPUObj    | dim_data  |      biz_product      |    产品     | object_reference |     id      |      name       |
|     上架时间     |    on_shelves_time    |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |     datetime     |             |                 |
|      上下架      |    product_status     |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |    select_one    |             |                 |
|     生命状态     |      life_status      |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |    select_one    |             |                 |
|    是否多单位    |   is_multiple_unit    |        " "        | ProductObj |             | dim_data  |      biz_product      |    产品     |  true_or_false   |     " "     |       " "       |
|     是否共背     |    field_fdm25__c     |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |    select_one    |             |                 |
|     是否赠品     |      is_giveaway      |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |    select_one    |             |                 |
|     锁定状态     |      lock_status      |        " "        | ProductObj |             | dim_data  |      biz_product      |    产品     |    select_one    |     " "     |       " "       |
|   所属产品线1    |    field_9191l__c     |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |    select_one    |             |                 |
|   所属产品线2    |    field_9k065__c     |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |    select_one    |             |                 |
|      条形码      |        barcode        |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |       text       |             |                 |
|    外部负责人    |       out_owner       | org_employee_user | ProductObj |             | dim_data  |      biz_product      |    产品     |     employee     |   user_id   |      name       |
|     下架时间     |   off_shelves_time    |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |     datetime     |             |                 |
|     业务类型     |      record_type      |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |   record_type    |             |                 |
|    最后修改人    |   last_modified_by    | org_employee_user | ProductObj |             | dim_data  |      biz_product      |    产品     |     employee     |   user_id   |      name       |
|   最后修改时间   |  last_modified_time   |                   | ProductObj |             | dim_data  |      biz_product      |    产品     |     datetime     |             |                 |
