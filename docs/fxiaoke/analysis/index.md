---
title: 指标维度数据分析
---

# {{$frontmatter.title}}

## 一丶员工统计

<p align="center">
  <a href="https://www.shields.io" target="_blank">
    <img src="https://img.shields.io/static/v1?label=员工统计&message=数据链接&color=orange&style=social&logo=appveyor">
  </a>
</p>

- 指标表格

|         fieldName         |        dbFieldName        | refObjName |       crmObjName        |       linkObjName       | dbObjName |   objectDescribeApiName    | objShowName |
| :-----------------------: | :-----------------------: | :--------: | :---------------------: | :---------------------: | :-------: | :------------------------: | :---------: |
|         合同金额          |      contract_amount      |            |       ContractObj       |                         | agg_data  |        biz_contract        |     Con     |
|          合同数           |           name            |            |       ContractObj       |       ContractObj       | agg_data  |        biz_contract        |     Con     |
|        产品减少数         |           name            |     ""     |       ProductObj        |       ProductObj        | agg_data  |        biz_product         |    产品     |
|          产品数           |           name            |     ""     |       ProductObj        |       ProductObj        | agg_data  |        biz_product         |    产品     |
|        跟进动态数         |          feed_id          |            |  base_crmfeedrelation   |                         | agg_data  |    base_crmfeedrelation    |  跟进动态   |
| 跟进动态数(销售记录类型)  |          feed_id          |            |  base_crmfeedrelation   |                         | agg_data  |    base_crmfeedrelation    |  跟进动态   |
|         产品合计          |      product_amount       |     ""     |      SalesOrderObj      |                         | agg_data  |      biz_sales_order       |  合同订单   |
|        待回款金额         |     receivable_amount     |     ""     |      SalesOrderObj      |                         | agg_data  |      biz_sales_order       |  合同订单   |
|    订单金额(含审核中)     |       order_amount        |     ""     |      SalesOrderObj      |                         | agg_data  |      biz_sales_order       |  合同订单   |
|          订单数           |           name            |            |      SalesOrderObj      |      SalesOrderObj      | agg_data  |      biz_sales_order       |  合同订单   |
|     订单数(含审核中)      |           name            |     ""     |      SalesOrderObj      |      SalesOrderObj      | agg_data  |      biz_sales_order       |  合同订单   |
|      经销商采购单量       |           name            |     ""     |      SalesOrderObj      |      SalesOrderObj      | agg_data  |      biz_sales_order       |  合同订单   |
|      经销商采购金额       |       order_amount        |     ""     |      SalesOrderObj      |                         | agg_data  |      biz_sales_order       |  合同订单   |
|     审核中的订单金额      |       order_amount        |            |      SalesOrderObj      |                         | agg_data  |      biz_sales_order       |  合同订单   |
|      审核中的订单数       |           name            |     ""     |      SalesOrderObj      |      SalesOrderObj      | agg_data  |      biz_sales_order       |  合同订单   |
|     已发货的订单金额      |       order_amount        |            |      SalesOrderObj      |                         | agg_data  |      biz_sales_order       |  合同订单   |
|      已发货的订单数       |           name            |            |      SalesOrderObj      |      SalesOrderObj      | agg_data  |      biz_sales_order       |  合同订单   |
|     已确认的订单金额      |       order_amount        |     ""     |      SalesOrderObj      |                         | agg_data  |      biz_sales_order       |  合同订单   |
|       最终成交金额        |       order_amount        |     ""     |      SalesOrderObj      |                         | agg_data  |      biz_sales_order       |  合同订单   |
|       计划回款金额        |    plan_payment_amount    |            |     PaymentPlanObj      |                         | agg_data  |        payment_plan        |  回款计划   |
|        计划回款数         |           name            |            |     PaymentPlanObj      |     PaymentPlanObj      | agg_data  |        payment_plan        |  回款计划   |
|         回款金额          |      payment_amount       |            |       PaymentObj        |                         | agg_data  |      payment_customer      |  回款记录   |
|      审核中回款金额       |      payment_amount       |            |       PaymentObj        |                         | agg_data  |      payment_customer      |  回款记录   |
|    回款金额(含审核中)     |      payment_amount       |            |     OrderPaymentObj     |                         | agg_data  |       payment_order        |  回款记录   |
|     回款数(含审核中)      |           name            |            |     OrderPaymentObj     |     OrderPaymentObj     | agg_data  |       payment_order        |  回款记录   |
|     审核中的回款金额      |      payment_amount       |            |     OrderPaymentObj     |                         | agg_data  |       payment_order        |  回款记录   |
|      审核中的回款数       |           name            |            |     OrderPaymentObj     |     OrderPaymentObj     | agg_data  |       payment_order        |  回款记录   |
|        已回款笔数         |           name            |            |     OrderPaymentObj     |     OrderPaymentObj     | agg_data  |       payment_order        |  回款记录   |
|       已开票申请数        |           name            |            |  InvoiceApplicationObj  |  InvoiceApplicationObj  | agg_data  |  biz_invoice_application   |  开票申请   |
|         经销商数          |           name            |     ""     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |    客户     |
|          客户数           |           name            |     ""     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |    客户     |
|         客户总数          |           name            |     ""     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |    客户     |
|          门店数           |           name            |     ""     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |    客户     |
|         新增成交          |           name            |     ""     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |    客户     |
|     转客户的主线索数      |         leads_id          | biz_leads  |       AccountObj        |        LeadsObj         | agg_data  |        biz_account         |    客户     |
|         联系人数          |           name            |            |       ContactObj        |       ContactObj        | agg_data  |        biz_contact         |   联系人    |
|    转联系人的主线索数     |         leads_id          |            |       ContactObj        |        LeadsObj         | agg_data  |        biz_contact         |   联系人    |
|          员工数           |           name            |     ""     |      PersonnelObj       |      PersonnelObj       | agg_data  |     org_employee_user      |    人员     |
|          完成值           |       achieve_value       |     ""     |                         |                         | agg_data  |       goal_value_obj       |             |
|          目标值           |        month_value        |     ""     |                         |                         | agg_data  |       goal_value_obj       |             |
|    产品合计(不含输单)     |       opp_lines_sum       |     ""     |    NewOpportunityObj    |                         | agg_data  |      new_opportunity       |  商机管理   |
|        季度商机值         |          amount           |            |    NewOpportunityObj    |                         | agg_data  |      new_opportunity       |  商机管理   |
|   商机2.0金额(不含输单)   |          amount           |            |    NewOpportunityObj    |                         | agg_data  |      new_opportunity       |  商机管理   |
|    商机2.0数(不含输单)    |           name            |            |    NewOpportunityObj    |    NewOpportunityObj    | agg_data  |      new_opportunity       |  商机管理   |
|     商机金额(商机2.0)     |          amount           |            |    NewOpportunityObj    |                         | agg_data  |      new_opportunity       |  商机管理   |
|      商机数(商机2.0)      |           name            |            |    NewOpportunityObj    |    NewOpportunityObj    | agg_data  |      new_opportunity       |  商机管理   |
|         剩余商机          |          amount           |            |    NewOpportunityObj    |    NewOpportunityObj    | agg_data  |      new_opportunity       |  商机管理   |
|   赢单产品合计(商机2.0)   |       opp_lines_sum       |     ""     |    NewOpportunityObj    |                         | agg_data  |      new_opportunity       |  商机管理   |
|   赢单商机金额(商机2.0)   |          amount           |            |    NewOpportunityObj    |                         | agg_data  |      new_opportunity       |  商机管理   |
|    赢单商机数(商机2.0)    |           name            |            |    NewOpportunityObj    |                         | agg_data  |      new_opportunity       |  商机管理   |
|         预测金额          |    probability_amount     |     ""     |    NewOpportunityObj    |                         | agg_data  |      new_opportunity       |  商机管理   |
| 转商机的主线索数(商机2.0) |         leads_id          | biz_leads  |    NewOpportunityObj    |        LeadsObj         | agg_data  |      new_opportunity       |  商机管理   |
|         退货单数          |           name            |            | ReturnedGoodsInvoiceObj | ReturnedGoodsInvoiceObj | agg_data  | biz_returned_goods_invoice |   退货单    |
|         退货金额          | returned_goods_inv_amount |            | ReturnedGoodsInvoiceObj |                         | agg_data  | biz_returned_goods_invoice |   退货单    |
|     审核中的退款金额      |      refunded_amount      |            |        RefundObj        |                         | agg_data  |         biz_refund         |    退款     |
|    退款金额(含审核中)     |      refunded_amount      |     ""     |        RefundObj        |                         | agg_data  |         biz_refund         |    退款     |
|     退款数(含审核中)      |           name            |     ""     |        RefundObj        |        RefundObj        | agg_data  |         biz_refund         |    退款     |
|         退款总数          |           name            |     ""     |        RefundObj        |        RefundObj        | agg_data  |         biz_refund         |    退款     |
|        已退款笔数         |           name            |     ""     |        RefundObj        |        RefundObj        | agg_data  |         biz_refund         |    退款     |
|         退款总数          |           name            |     ""     |        RefundObj        |        RefundObj        | agg_data  |         biz_refund         |    退款     |
|        已退款金额         |      refunded_amount      |            |        RefundObj        |                         | agg_data  |         biz_refund         |    退款     |
|        总退款金额         |      refunded_amount      |     ""     |        RefundObj        |                         | agg_data  |         biz_refund         |    退款     |
|         跟进方式          |           name            |     ""     |     ActiveRecordObj     |     ActiveRecordObj     | agg_data  |       active_record        |  销售记录   |
|        销售记录数         |           name            |     ""     |     ActiveRecordObj     |     ActiveRecordObj     | agg_data  |       active_record        |  销售记录   |
|          线索数           |           name            |            |        LeadsObj         |        LeadsObj         | agg_data  |         biz_leads          |  销售线索   |
|      已转换的线索数       |           name            |            |        LeadsObj         |        LeadsObj         | agg_data  |         biz_leads          |  销售线索   |

- 指标ER模型图

![ER模型图](/fxiaoke/analysis/emeployee.png)

- 维度表格

|     fieldName      |      dbFieldName       |    refObjName     |  crmObjName  |  dbObjName   | objectDescribeApiName | objShowName |
| :----------------: | :--------------------: | :---------------: | :----------: | :----------: | :-------------------: | :---------: |
|        msn         |          msn           |        ""         | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|     OA-Userid      |      OAUserid__c       |                   | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|       qq号码       |       qq_account       |        ""         | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|      办公电话      |       work_phone       |        ""         | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
| 办公电话扩展分机号 |    extension_number    |        ""         | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|       创建人       |       created_by       | org_employee_user | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|      创建时间      |      create_time       |        ""         | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|    创建时间(年)    |         f_year         |                   |              | dim_sys_date |                       |             |
|   创建时间(季度)   |        f_season        |                   | dim_sys_date |              |                       |             |
|    创建时间(月)    |        f_month         |                   | dim_sys_date |              |                       |             |
|    创建时间(周)    |         f_week         |                   | dim_sys_date |              |                       |             |
|    创建时间(日)    |         f_day          |                   | dim_sys_date |              |                       |             |
|      登录账号      |       user_name        |        ""         | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|      归属部门      |  data_own_department   |     org_dept      | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|      归属组织      | data_own_organization  |     org_dept      | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|    合同归属部门    |     field_3200E__c     |                   | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|      汇报对象      |         leader         | org_employee_user | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|    基本信息描述    |      description       |        ""         | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|        激活        |       is_active        |        ""         | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|      就业日期      | date_of_first_ployment |        ""         | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|    就业日期(年)    |         f_year         |                   |              | dim_sys_date |                       |             |
|   就业日期(季度)   |        f_season        |                   |              | dim_sys_date |                       |             |
|    就业日期(月)    |        f_month         |                   |              | dim_sys_date |                       |             |
|    就业日期(周)    |         f_week         |                   |              | dim_sys_date |                       |             |
|    就业日期(日)    |         f_day          |                   |              | dim_sys_date |                       |             |
|        日期        |      action_date       |                   |              |   agg_data   |                       |             |
|      日期(年)      |         f_year         |                   |              | dim_sys_date |                       |             |
|     日期(季度)     |        f_season        |                   |              | dim_sys_date |                       |             |
|      日期(月)      |        f_month         |                   |              | dim_sys_date |                       |             |
|      日期(周)      |         f_week         |                   |              | dim_sys_date |                       |             |
|      日期(日)      |         f_day          |                   |              | dim_sys_date |                       |             |
|      入职日期      |    date_of_joining     |        ""         | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|    入职日期(年)    |         f_year         |                   |              | dim_sys_date |                       |             |
|   入职日期(季度)   |        f_season        |                   |              | dim_sys_date |                       |             |
|    入职日期(月)    |        f_month         |                   |              | dim_sys_date |                       |             |
|    入职日期(周)    |         f_week         |                   |              | dim_sys_date |                       |             |
|    入职日期(日)    |         f_day          |                   |              | dim_sys_date |                       |             |
|      生命状态      |      life_status       |        ""         | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|        生日        |        birthday        |        ""         | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|        手机        |         phone          |        ""         | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|      锁定状态      |      lock_status       |        ""         | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|      停用时间      |       stop_time        |        ""         | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|     外部负责人     |       out_owner        | org_employee_user | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|      微信号码      |     weixin_account     |                   | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|        心情        |     working_states     |                   | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|        性别        |          sex           |                   | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|      业务类型      |      record_type       |                   | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|        邮箱        |         email          |                   | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|      员工编号      |    employee_number     |                   | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|      员工姓名      |        user_id         | org_employee_user | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|      员工状态      |         status         |                   | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|        职位        |        position        |        ""         | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|      主属部门      |    main_department     |     org_dept      | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|     最后修改人     |    last_modified_by    | org_employee_user | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |
|    最后修改时间    |   last_modified_time   |        ""         | PersonnelObj |   dim_data   |   org_employee_user   |    人员     |

- 维度ER模型图

![ER模型图](/fxiaoke/analysis/emeploye-dimension.png)

## 二丶客户统计

<p align="center">
  <a href="https://www.shields.io" target="_blank">
    <img src="https://img.shields.io/static/v1?label=客户统计&message=数据链接&color=orange&style=social&logo=appveyor">
  </a>
</p>

- 指标表格

|            fieldName             |        dbFieldName        | refObjName  |       crmObjName        |       linkObjName       | dbObjName |   objectDescribeApiName    | objShowName  |       type       |
| :------------------------------: | :-----------------------: | :---------: | :---------------------: | :---------------------: | :-------: | :------------------------: | :----------: | :--------------: |
|             合同金额             |      contract_amount      |             |       ContractObj       |                         | agg_data  |        biz_contract        |     Con      |      number      |
|              合同数              |           name            |             |       ContractObj       |       ContractObj       | agg_data  |        biz_contract        |     Con      |       text       |
|            跟进动态数            |          feed_id          |             |  base_crmfeedrelation   |                         | agg_data  |    base_crmfeedrelation    |   跟进动态   |       " "        |
|             产品合计             |      product_amount       |     " "     |      SalesOrderObj      |                         | agg_data  |      biz_sales_order       |   合同订单   |      count       |
|            待回款金额            |     receivable_amount     |     " "     |      SalesOrderObj      |                         | agg_data  |      biz_sales_order       |   合同订单   |     currency     |
|              订单数              |           name            |             |      SalesOrderObj      |      SalesOrderObj      | agg_data  |      biz_sales_order       |   合同订单   |       text       |
|         审核中的订单金额         |       order_amount        |             |      SalesOrderObj      |                         | agg_data  |      biz_sales_order       |   合同订单   |      number      |
|          审核中的订单数          |           name            |     " "     |      SalesOrderObj      |      SalesOrderObj      | agg_data  |      biz_sales_order       |   合同订单   |   auto_number    |
|         已发货的订单金额         |       order_amount        |             |      SalesOrderObj      |                         | agg_data  |      biz_sales_order       |   合同订单   |       text       |
|          已发货的订单数          |           name            |             |      SalesOrderObj      |      SalesOrderObj      | agg_data  |      biz_sales_order       |   合同订单   |       text       |
|         已确认的订单金额         |       order_amount        |     " "     |      SalesOrderObj      |                         | agg_data  |      biz_sales_order       |   合同订单   |     currency     |
|           计划回款金额           |    plan_payment_amount    |             |     PaymentPlanObj      |                         | agg_data  |        payment_plan        |   回款计划   |     currency     |
|            计划回款数            |           name            |             |     PaymentPlanObj      |     PaymentPlanObj      | agg_data  |        payment_plan        |   回款计划   |       text       |
|            已回款笔数            |           name            |             |     OrderPaymentObj     |     OrderPaymentObj     | agg_data  |       payment_order        |   回款明细   |       text       |
|            已回款金额            |      payment_amount       |             |     OrderPaymentObj     |                         | agg_data  |       payment_order        |   回款明细   |      number      |
|            开票申请数            |           name            |             |  InvoiceApplicationObj  |  InvoiceApplicationObj  | agg_data  |  biz_invoice_application   |   开票申请   |       text       |
|            KP业态客户            |           name            |     " "     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |     客户     |       text       |
|      成交线索（推荐官介绍）      |           name            |     " "     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |     客户     |       text       |
|           成交业态客户           |           name            |     " "     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |     客户     |       text       |
|            创建客户数            |           name            |     " "     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |     客户     |       text       |
|          交际客户成交数          |           name            |     " "     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |     客户     |       text       |
|            交接客户数            |           name            |     " "     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |     客户     |       text       |
|            经销商数量            |           name            |     " "     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |     客户     |       text       |
|             客户总数             |           name            |             |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |     客户     |       text       |
|             门店数量             |           name            |     " "     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |     客户     |       text       |
|           平台需求数量           |           name            |     " "     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |     客户     |       text       |
|           推荐成交客户           |           name            |     " "     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |     客户     |       text       |
|        推荐官介绍线索总数        |           name            |     " "     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |     客户     |       text       |
|          推荐官客户总数          |           name            |     " "     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |     客户     |       text       |
|           无KP业态客户           |           name            |     " "     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |     客户     |       text       |
|           项目需求数量           |           name            |     " "     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |     客户     |       text       |
|          有竞品业态客户          |           name            |     " "     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |     客户     |       text       |
|             主线索数             |         leads_id          |  biz_leads  |       AccountObj        |        LeadsObj         | agg_data  |        biz_account         |     客户     | object_reference |
|            主业态客户            |           name            |     " "     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |     客户     |       text       |
|       主业态客户（未分配）       |           name            |     " "     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |     客户     |       text       |
|       主业态客户（已分配）       |           name            |     " "     |       AccountObj        |       AccountObj        | agg_data  |        biz_account         |     客户     |       text       |
|             转手次数             |      transfer_count       |             |       AccountObj        |                         | agg_data  |        biz_account         |     客户     |      number      |
|              完成值              |       achieve_value       |     " "     |                         |                         | agg_data  |       goal_value_obj       |              |      number      |
|              目标值              |        month_value        |     " "     |                         |                         | agg_data  |       goal_value_obj       |              |      number      |
|             联系人数             |           name            |             |       ContactObj        |       ContactObj        | agg_data  |        biz_contact         |    联系人    |       text       |
|        产品合计(不含输单)        |       opp_lines_sum       |     " "     |    NewOpportunityObj    |                         | agg_data  |      new_opportunity       |   商机管理   |      count       |
|         存在商机业态客户         |           name            |             |    NewOpportunityObj    |    NewOpportunityObj    | agg_data  |      new_opportunity       |   商机管理   |       text       |
|      商机2.0金额(不含输单)       |          amount           |             |    NewOpportunityObj    |                         | agg_data  |      new_opportunity       |   商机管理   |     currency     |
|       商机2.0数(不含输单)        |           name            |             |    NewOpportunityObj    |    NewOpportunityObj    | agg_data  |      new_opportunity       |   商机管理   |       text       |
|        商机金额(商机2.0)         |          amount           |             |    NewOpportunityObj    |                         | agg_data  |      new_opportunity       |   商机管理   |     currency     |
|         商机数(商机2.0)          |           name            |             |    NewOpportunityObj    |    NewOpportunityObj    | agg_data  |      new_opportunity       |   商机管理   |       text       |
|      赢单产品合计(商机2.0)       |       opp_lines_sum       |     " "     |    NewOpportunityObj    |                         | agg_data  |      new_opportunity       |   商机管理   |      count       |
|      赢单商机金额(商机2.0)       |          amount           |             |    NewOpportunityObj    |                         | agg_data  |      new_opportunity       |   商机管理   |     currency     |
|       赢单商机数(商机2.0)        |           name            |             |    NewOpportunityObj    |    NewOpportunityObj    | agg_data  |      new_opportunity       |   商机管理   |       text       |
|   有商机的客户数(预计成交日期)   |        account_id         | biz_account |    NewOpportunityObj    |       AccountObj        | agg_data  |      new_opportunity       |   商机管理   | object_reference |
| 有赢单商机的客户数(预计成交日期) |        account_id         | biz_account |    NewOpportunityObj    |       AccountObj        | agg_data  |      new_opportunity       |   商机管理   | object_reference |
|             预测金额             |    probability_amount     |     " "     |    NewOpportunityObj    |                         | agg_data  |      new_opportunity       |   商机管理   |     formula      |
|             退货单数             |           name            |             | ReturnedGoodsInvoiceObj | ReturnedGoodsInvoiceObj | agg_data  | biz_returned_goods_invoice |    退货单    |       text       |
|             退货金额             | returned_goods_inv_amount |             | ReturnedGoodsInvoiceObj |                         | agg_data  | biz_returned_goods_invoice |    退货单    |      count       |
|            已退款笔数            |           name            |             |        RefundObj        |        RefundObj        | agg_data  |         biz_refund         |     退款     |       text       |
|            已退款金额            |      refunded_amount      |             |        RefundObj        |                         | agg_data  |         biz_refund         |     退款     |      number      |
|              线索数              |         leads_id          |  biz_leads  |   LeadsTransferLogObj   |        LeadsObj         | agg_data  |   biz_leads_transfer_log   | 线索转换日志 | object_reference |
|             销售记录             |           name            |     " "     |     ActiveRecordObj     |     ActiveRecordObj     | agg_data  |       active_record        |   销售记录   |       text       |

- 指标ER模型图

![ER模型图](/fxiaoke/analysis/customer.png)

- 维度表格

|    fieldName     |            dbFieldName            |     refObjName      | crmObjName |    linkObjName     | dbObjName | objectDescribeApiName | objShowName |       type       | refKeyField | refTargetField  |
| :--------------: | :-------------------------------: | :-----------------: | :--------: | :----------------: | :-------: | :-------------------: | :---------: | :--------------: | :---------: | :-------------: |
|       1级        |          industry_level1          |         " "         | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |     " "     |       " "       |
|       2级        |          industry_level2          |         " "         | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |     " "     |       " "       |
|     成交状态     |            deal_status            |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|      创建人      |            created_by             |  org_employee_user  | AccountObj |                    | dim_data  |      biz_account      |    客户     |     employee     |   user_id   |      name       |
|     创建时间     |            create_time            |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |     datetime     |             |                 |
|   单日最高客流   |          field_2F24z__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |       text       |             |                 |
|       电话       |                tel                |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |       text       |             |                 |
|   电话归属国家   | phone_number_attribution_country  |         " "         | AccountObj |                    | dim_data  |      biz_account      |    客户     |     country      |     " "     |       " "       |
|    电话归属省    | phone_number_attribution_province |         " "         | AccountObj |                    | dim_data  |      biz_account      |    客户     |     province     |     " "     |       " "       |
|    电话归属市    |   phone_number_attribution_city   |         " "         | AccountObj |                    | dim_data  |      biz_account      |    客户     |       city       |     " "     |       " "       |
|     调研痛点     |          field_S2uaA__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |   select_many    |             |                 |
|     分配状态     |            biz_status             |         " "         | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |     " "     |       " "       |
|      负责人      |               owner               |  org_employee_user  | AccountObj |                    | dim_data  |      biz_account      |    客户     | object_reference |   user_id   |      name       |
|  负责人变更时间  |        owner_modified_time        |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |     datetime     |             |                 |
|  负责人主属部门  |         owner_department          |  org_employee_user  | AccountObj |                    | dim_data  |      biz_account      |    客户     |      quote       |   user_id   | main_department |
|     工商注册     |           biz_reg_name            |         " "         | AccountObj |                    | dim_data  |      biz_account      |    客户     |  true_or_false   |     " "     |       " "       |
|     归属部门     |        data_own_department        |      org_dept       | AccountObj |                    | dim_data  |      biz_account      |    客户     |    department    |   dept_id   |      name       |
|     归属组织     |       data_own_organization       |      org_dept       | AccountObj |                    | dim_data  |      biz_account      |    客户     |    department    |   dept_id   |      name       |
|       国家       |              country              |         " "         | AccountObj |                    | dim_data  |      biz_account      |    客户     |     country      |     " "     |       " "       |
|     合作伙伴     |            partner_id             |       partner       | AccountObj |     PartnerObj     | dim_data  |      biz_account      |    客户     | object_reference |     id      |      name       |
|   合作伙伴类型   |          field_SOJx2__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|   合作伙伴名称   |          field_5EhT1__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|     合作属性     |          field_mvq72__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|     交接部门     |          field_X0722__c           |      org_dept       | AccountObj |                    | dim_data  |      biz_account      |    客户     |    department    |   dept_id   |      name       |
|     交接人员     |          field_1yFDk__c           |  org_employee_user  | AccountObj |                    | dim_data  |      biz_account      |    客户     |     employee     |   user_id   |      name       |
|     交接日期     |          field_4bfO4__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |       date       |             |                 |
|     交接状态     |          field_lHBP2__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|    介绍方客户    |          field_aotKy__c           |     biz_account     | AccountObj |     AccountObj     | dim_data  |      biz_account      |    客户     | object_reference |     id      |      name       |
|     景区等级     |          field_0ut89__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|    景区关键词    |          field_p9267__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |       text       |             |                 |
|     景区类型     |          field_4H84Y__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|   景区是否收费   |          field_k678b__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |  true_or_false   |             |                 |
|     客户编号     |            account_no             |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |       text       |             |                 |
|     客户层级     |           account_path            |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    tree_path     |             |                 |
|     客户分类     |           account_type            |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|     客户来源     |          account_source           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|     客户类型     |           account_level           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|     客户名称     |               name                |                     | AccountObj |     AccountObj     | dim_data  |      biz_account      |    客户     |       text       |             |                 |
|     客户身份     |          field_IHtfw__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|     客户属性     |          field_41lIW__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|    客户主数据    |       account_main_data_id        |     biz_account     | AccountObj | AccountMainDataObj | dim_data  |      biz_account      |    客户     | object_reference |     id      |      name       |
|    客户转移人    |          field_R1QR3__c           |  org_employee_user  | AccountObj |                    | dim_data  |      biz_account      |    客户     |     employee     |   user_id   |      name       |
|   客户转移时间   |          field_Z4La2__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    date_time     |             |                 |
|     客情关系     |          field_X3542__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|     来源明细     |          field_vre3G__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|    历史创建人    |          field_1oLsM__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |       text       |             |                 |
|   历史创建时间   |          field_jgcP2__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    date_time     |             |                 |
|    历史负责人    |          field_R6i8i__c           |  org_employee_user  | AccountObj |                    | dim_data  |      biz_account      |    客户     |     employee     |   user_id   |      name       |
|   历史负责人1    |          field_r13cs__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |       text       |             |                 |
|     联系状态     |          field_dEOev__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|  领取/分配时间   |           claimed_time            |         " "         | AccountObj |                    | dim_data  |      biz_account      |    客户     |    date_time     |     " "     |       " "       |
|    旅行社客群    |          field_PqsS9__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|    旅行社类型    |          field_5Q3iq__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|     年总客流     |          field_uVa0R__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |       text       |             |                 |
| 平台账号/ID/手机 |          field_0w21l__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |       text       |             |                 |
|     清洗频次     |          field_57egr__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|        区        |             district              |         " "         | AccountObj |                    | dim_data  |      biz_account      |    客户     |     district     |     " "     |       " "       |
|       日期       |            action_date            |                     |            |                    | agg_data  |      biz_account      |    客户     |       date       |             |                 |
|     上级客户     |         parent_account_id         |     biz_account     | AccountObj |     AccountObj     | dim_data  |      biz_account      |    客户     | object_reference |     id      |      name       |
|     生命状态     |            life_status            |         " "         | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |     " "     |       " "       |
|        省        |             province              |         " "         | AccountObj |                    | dim_data  |      biz_account      |    客户     |     province     |     " "     |       " "       |
|      是否KP      |          field_6hP1c__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
| 是否为主业态客户 |          field_85k4h__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|  是否做票旅行社  |          field_XBg91__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|        市        |               city                |         " "         | AccountObj |                    | dim_data  |      biz_account      |    客户     |       city       |     " "     |       " "       |
|   市场活动名称   |          field_vJj2v__c           | biz_marketing_event | AccountObj | MarketingEventObj  | dim_data  |      biz_account      |    客户     | object_reference |     id      |      name       |
|   首签成单日期   |          field_TKX02__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |       date       |             |                 |
|     锁定状态     |            lock_status            |         " "         | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |     " "     |       " "       |
|     所属公海     |           high_seas_id            |         " "         | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |     " "     |       " "       |
| 统一社会信用代码 |    uniform_social_credit_code     |         " "         | AccountObj |                    | dim_data  |      biz_account      |    客户     |       text       |     " "     |       " "       |
|    推荐官公司    |          field_e63kf__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |       text       |             |                 |
|  推荐官联系电话  |          field_7nAj1__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |       text       |             |                 |
|    推荐官姓名    |          field_nd204__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |       text       |             |                 |
|  退回/收回时间   |           returned_time           |         " "         | AccountObj |                    | dim_data  |      biz_account      |    客户     |    date_time     |     " "     |       " "       |
|    外部负责人    |             out_owner             |  org_employee_user  | AccountObj |                    | dim_data  |      biz_account      |    客户     |     employee     |   user_id   |      name       |
|     外部来源     |           out_resources           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|       网址       |                url                |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |       text       |             |                 |
|   下次跟进时间   |        next_followed_time         |         " "         | AccountObj |                    | dim_data  |      biz_account      |    客户     |    date_time     |     " "     |       " "       |
|   线上合作竞品   |          field_t72I6__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |   select_many    |             |                 |
|   线下合作竞品   |          field_3o2h7__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
| 销售人员退回原因 |            back_reason            |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |
|     业务类型     |            record_type            |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |   record_type    |             |                 |
|       邮件       |               email               |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |      email       |             |                 |
|     有效日期     |          field_eejK4__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |       date       |             |                 |
|  与竞品合作原因  |          field_f2192__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |   select_many    |             |                 |
|    预计联系日    |          field_HmG2a__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |       date       |             |                 |
|   预计收回时间   |            expire_time            |         " "         | AccountObj |                    | dim_data  |      biz_account      |    客户     |    date_time     |     " "     |       " "       |
|      源线索      |             leads_id              |      biz_leads      | AccountObj |      LeadsObj      | dim_data  |      biz_account      |    客户     | object_reference |     id      |      name       |
|     主营类目     |          field_nZ4yo__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |   select_many    |             |                 |
|   最后跟进时间   |        last_followed_time         |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |     datetime     |             |                 |
|    最后修改人    |         last_modified_by          |  org_employee_user  | AccountObj |                    | dim_data  |      biz_account      |    客户     |     employee     |   user_id   |      name       |
|   最后修改时间   |        last_modified_time         |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |     datetime     |             |                 |
| 最后一次成交时间 |       last_deal_closed_time       |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |     datetime     |             |                 |
|   最新商机阶段   |          field_dNomd__c           |                     | AccountObj |                    | dim_data  |      biz_account      |    客户     |    select_one    |             |                 |

- 维度ER模型图

![ER模型图](/fxiaoke/analysis/customer-dimension.png)

## 三丶产品统计

<p align="center">
  <a href="https://www.shields.io" target="_blank">
    <img src="https://img.shields.io/static/v1?label=产品统计&message=数据链接&color=orange&style=social&logo=appveyor">
  </a>
</p>

- 指标表格

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


- 维度表格

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