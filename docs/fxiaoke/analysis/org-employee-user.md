---
title: 员工统计
location: '../../../../json/emeployee/index.json'
---

# {{$frontmatter.title}}

<p align="center">
    <a href="https://www.shields.io" target="_blank">
    <img src="https://img.shields.io/static/v1?label=员工统计&message=数据链接&color=orange&style=social&logo=appveyor">
    </a>
</p>

## 一丶指标

- 表格

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

- ER模型图

![员工统计指标ER模型图](/fxiaoke/analysis/emeployee.png)

## 二丶维度

- 表格

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