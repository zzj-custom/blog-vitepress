---
title: 纷享客
---

# {{$frontmatter.title}}

> 每个商户的主题可能存在不同的情况，新建报表的时候会选择主题，每个主题有存在不同的维度和指标

## 一丶 创建报表

- [接口请求地址](https://www.fxiaoke.com/FHH/EM1HBICRM/rptViewCreateController/getDomainTemplateResult?_fs_token=OM5bPJGuE3ajD3LcD2qqOMOmBM8oEJGjOZ8nPM4rCZLXEJOv&traceId=E-E.pft12301.1171-165338427909)
- 请求参数

| 字段 | 类型 | 说明 |
| ---- | ---- | ---- |

- 返回结果

```json
{
  "Result": {
    "FailureCode": 0,
    "StatusCode": 0,
    "UserInfo": {
      "EmployeeID": 1171,
      "EnterpriseAccount": "pft12301"
    }
  },
  "Value": {
    "subjectDomainAndTemplates": [
      {
        "templates": [
          {
            "templateID": "BI_171726164409384960",
            "templateName": "员工客户数量统计",
            "domainName": "客户分析",
            "source": 1,
            "nodeRelations": "[{\"apiName\":\"#$#PersonnelObj.attribute.self.display_name#$#(#$#AccountObj.attribute.self.display_name#$#.#$#AccountObj.field.owner.label#$#)\",\"id\":\"-1\",\"isI18nRule\":1,\"name\":\"人员(客户.负责人)\",\"parentIds\":[]},{\"apiName\":\"AccountObj.attribute.self.display_name\",\"id\":\"0\",\"isI18nRule\":0,\"isMainNode\":1,\"name\":\"客户\",\"parentIds\":[\"-1\"]}]",
            "isContainTeamMember": 1,
            "domainId": "BI_171726164476493824",
            "badge": 0,
            "toTemplate": 0,
            "subjectDomainMainObjectName": "客户",
            "domainMainObjectNameI18nKey": "bi.subject_domain.main_object.customer",
            "domainNameI18NKey": "bi.subject_domain.domain.customer_analysis",
            "templateNameI18NKey": "bi.report_template.customer_analysis.personnel_customer_count_statistics"
          }
        ],
        "domainName": "客户分析",
        "domainId": "BI_171726164476493824",
        "domainMainObjectName": "客户"
      }
    ]
  }
}
```

## 二丶获取对象结果

- [获取对象关系结果](https://www.fxiaoke.com/FHH/EM1HBIUDF/rptUdfViewEditController/getObjRelationResult?_fs_token=OM5bPJGuE3ajD3LcD2qqOMOmBM8oEJGjOZ8nPM4rCZLXEJOv&traceId=E-E.pft12301.1171-1653385443878)

- 请求参数

|   字段    |  类型  |               说明                |
| :-------: | :----: | :-------------------------------: |
|    id     | string | BI_171726164409384960(templateID) |
|  isView   |  int   |                 3                 |
| tableType |  int   |                                   |

- 返回结果

```json
{
  "Result": {
    "FailureCode": 0,
    "StatusCode": 0,
    "UserInfo": {
      "EmployeeID": 1171,
      "EnterpriseAccount": "pft12301"
    }
  },
  "Value": {
    "objectsAndFields": [
      {
        "fieldInfoList": [
          {
            "fieldNameColumnNameMaps": {},
            "objNameFieldNameColumnNameMaps": {},
            "fieldNameDateTypeMaps": {},
            "fieldNameTimestampTypeMaps": {},
            "objectId": "BI_816e819f92a02a1f11117e0ace6c00ba",
            "dbObjName": "biz_account",
            "fieldID": "BI_9226a4d13521dee4f68fd43dba51c2f8",
            "fieldName": "1级",
            "objectName": "biz_account",
            "objName": "客户",
            "dbFieldName": "industry_level1",
            "fieldLocation": -1,
            "fieldType": "String",
            "subFieldType": "MultiSelectEnum",
            "isKey": 0,
            "isIndex": 1,
            "isPre": 2,
            "isCalc": 0,
            "formatStr": "",
            "columnName": "biz_account_industry_level1$null",
            "isDrill": 0,
            "refObjName": "",
            "refKeyField": "",
            "refTargetField": "",
            "ui": {
              "type": "UI_MultiSelect",
              "justLeafNodeSelect": 0,
              "data": [
                {
                  "nodeName": "金融业",
                  "isSelected": 0,
                  "optionCode": "13cb944990de42a085a4b4896cc4c3a6",
                  "parentID": "-2",
                  "isHaveChild": 0,
                  "enumId": "13cb944990de42a085a4b4896cc4c3a6",
                  "order": 0,
                  "level": 0,
                  "isDisable": 0
                }
              ]
            },
            "type": "select_one",
            "isSingle": 0,
            "operateMenu": ["order", "filter", "group", "aggr"],
            "isRefArrayColumn": false,
            "isRefFixColumn": false,
            "isRefOrgObject": false,
            "orderBy": false,
            "relationObjName": "biz_account",
            "crmObjName": "AccountObj",
            "isPerm": 1,
            "crmFieldName": "industry_level1",
            "objectSequence": 0,
            "objectNodeName": "客户",
            "objectRealNodeName": "AccountObj",
            "isSupportStopEmployeeOption": 0,
            "relationType": 1,
            "whatListForGroupAndAggFlag": false,
            "whatListFilterArrayFlag": false,
            "hierarchyGroupFlag": false,
            "bISupportCalcFieldFlag": false,
            "isMainAttribute": false,
            "calculatedFieldSubitemFlag": false,
            "defaultToZero": false,
            "isCalcFieldFormulaSub": 0,
            "isCustom": 0,
            "isHeadFilterLookUpField": 0
          }
        ],
        "objName": "客户",
        "sequence": 0,
        "relationType": 1,
        "nodeName": "客户",
        "realNodeName": "AccountObj"
      },
      {
        "fieldInfoList": [
          {
            "fieldNameColumnNameMaps": {},
            "objNameFieldNameColumnNameMaps": {},
            "fieldNameDateTypeMaps": {},
            "fieldNameTimestampTypeMaps": {},
            "objectId": "BI_05e82cc20d79895e36f3ae5bcb1cd195",
            "dbObjName": "dt_team",
            "fieldID": "BI_660e5fc9a4892e9de196010a2c9d263b",
            "fieldName": "外部负责人",
            "objectName": "dt_team",
            "objName": "相关团队",
            "dbFieldName": "out_owner",
            "fieldLocation": -1,
            "fieldType": "Number",
            "subFieldType": "Circle",
            "isKey": 0,
            "isIndex": 0,
            "isPre": 2,
            "isCalc": 0,
            "formatStr": "",
            "columnName": "dt_team_out_owner$null",
            "isDrill": 0,
            "refObjName": "org_employee_user",
            "refKeyField": "user_id",
            "refTargetField": "name",
            "ui": {
              "type": "UI_Selection",
              "justLeafNodeSelect": 0,
              "myOrg": {
                "myOwnCircle": [],
                "lowerEmployee": []
              }
            },
            "type": "employee",
            "isSingle": 1,
            "operateMenu": ["group", "aggr"],
            "isRefArrayColumn": false,
            "isRefFixColumn": false,
            "isRefOrgObject": false,
            "orderBy": false,
            "relationObjName": "dt_team",
            "crmObjName": "related_team",
            "isPerm": 1,
            "crmFieldName": "out_owner",
            "objectSequence": 0,
            "objectNodeName": "相关团队",
            "objectRealNodeName": "related_team",
            "isSupportStopEmployeeOption": 0,
            "relationType": 3,
            "whatListForGroupAndAggFlag": false,
            "whatListFilterArrayFlag": false,
            "hierarchyGroupFlag": false,
            "bISupportCalcFieldFlag": false,
            "isMainAttribute": false,
            "calculatedFieldSubitemFlag": false,
            "defaultToZero": false,
            "isCalcFieldFormulaSub": 0,
            "isCustom": 0,
            "isHeadFilterLookUpField": 0
          }
        ],
        "objName": "相关团队",
        "sequence": 0,
        "relationType": 3,
        "nodeName": "相关团队",
        "realNodeName": "related_team"
      },
      {
        "fieldInfoList": [
          {
            "fieldNameColumnNameMaps": {},
            "objNameFieldNameColumnNameMaps": {},
            "fieldNameDateTypeMaps": {},
            "fieldNameTimestampTypeMaps": {},
            "objectId": "BI_ab945a1343b23bb3f074faa8365d0eba",
            "dbObjName": "org_employee_user",
            "fieldID": "BI_111e634aea50f36c3bddfa0e1e424031",
            "fieldName": "msn",
            "objectName": "org_employee_user",
            "objName": "人员",
            "dbFieldName": "msn",
            "fieldLocation": -1,
            "fieldType": "String",
            "subFieldType": "",
            "isKey": 0,
            "isIndex": 1,
            "isPre": 2,
            "isCalc": 0,
            "columnName": "org_employee_user_msn$null",
            "isDrill": 0,
            "refObjName": "",
            "refKeyField": "",
            "refTargetField": "",
            "ui": {
              "type": "UI_Input",
              "format": "String",
              "justLeafNodeSelect": 0
            },
            "type": "text",
            "isSingle": 0,
            "operateMenu": ["order", "filter", "group", "aggr"],
            "isRefArrayColumn": false,
            "isRefFixColumn": false,
            "isRefOrgObject": false,
            "orderBy": false,
            "relationObjName": "org_employee_user",
            "crmObjName": "PersonnelObj",
            "isPerm": 1,
            "crmFieldName": "msn",
            "objectSequence": -1,
            "objectNodeName": "人员",
            "objectRealNodeName": "PersonnelObj",
            "isSupportStopEmployeeOption": 0,
            "relationType": 1,
            "whatListForGroupAndAggFlag": false,
            "whatListFilterArrayFlag": false,
            "hierarchyGroupFlag": false,
            "bISupportCalcFieldFlag": false,
            "isMainAttribute": false,
            "calculatedFieldSubitemFlag": false,
            "defaultToZero": false,
            "isCalcFieldFormulaSub": 0,
            "isCustom": 0,
            "isHeadFilterLookUpField": 0
          },
          {
            "fieldNameColumnNameMaps": {},
            "objNameFieldNameColumnNameMaps": {},
            "fieldNameDateTypeMaps": {},
            "fieldNameTimestampTypeMaps": {},
            "objectId": "BI_ab945a1343b23bb3f074faa8365d0eba",
            "dbObjName": "org_employee_user",
            "fieldID": "BI_19957857d23e0fe4dd704b529fa44df1",
            "fieldName": "最后修改时间",
            "objectName": "org_employee_user",
            "objName": "人员",
            "dbFieldName": "last_modified_time",
            "fieldLocation": -1,
            "fieldType": "Date",
            "subFieldType": "DateTime",
            "isKey": 0,
            "isIndex": 0,
            "isPre": 2,
            "isCalc": 0,
            "formatStr": "yyyy-MM-dd HH:mm",
            "columnName": "org_employee_user_last_modified_time$null",
            "isDrill": 0,
            "refObjName": "",
            "refKeyField": "",
            "refTargetField": "",
            "ui": {
              "type": "UI_Time",
              "group": "DateTime",
              "justLeafNodeSelect": 0
            },
            "type": "date_time",
            "isSingle": 1,
            "operateMenu": ["order", "filter", "group", "aggr"],
            "isRefArrayColumn": false,
            "isRefFixColumn": false,
            "isRefOrgObject": false,
            "orderBy": false,
            "relationObjName": "org_employee_user",
            "crmObjName": "PersonnelObj",
            "isPerm": 1,
            "crmFieldName": "last_modified_time",
            "objectSequence": -1,
            "objectNodeName": "人员",
            "objectRealNodeName": "PersonnelObj",
            "isSupportStopEmployeeOption": 0,
            "relationType": 1,
            "whatListForGroupAndAggFlag": false,
            "whatListFilterArrayFlag": false,
            "hierarchyGroupFlag": false,
            "bISupportCalcFieldFlag": false,
            "isMainAttribute": false,
            "calculatedFieldSubitemFlag": false,
            "defaultToZero": false,
            "isCalcFieldFormulaSub": 0,
            "isCustom": 0,
            "isHeadFilterLookUpField": 0
          }
        ],
        "objName": "人员",
        "sequence": -1,
        "relationType": 1,
        "nodeName": "人员",
        "realNodeName": "PersonnelObj"
      }
    ],
    "viewDisplayName": "员工客户数量统计",
    "businessObjects": [
      {
        "objectId": "BI_ab945a1343b23bb3f074faa8365d0eba",
        "objectName": "org_employee_user",
        "objectShowName": "人员",
        "isPre": 1,
        "sequence": -1,
        "relationType": 1,
        "fieldId": "",
        "fieldName": "",
        "crmObjName": "PersonnelObj",
        "source": 1,
        "nodeName": "人员",
        "realNodeName": "PersonnelObj",
        "rightFlag": false,
        "linkFieldId": "BI_69495a94026b7f3b9112d4eade3bc631",
        "isI18nRule": 0
      },
      {
        "objectId": "BI_816e819f92a02a1f11117e0ace6c00ba",
        "objectName": "biz_account",
        "objectShowName": "客户",
        "isPre": 1,
        "sequence": 0,
        "relationType": 1,
        "fieldId": "",
        "fieldName": "",
        "crmObjName": "AccountObj",
        "source": 1,
        "isContainTeamMember": 1,
        "nodeName": "客户",
        "realNodeName": "AccountObj",
        "rightFlag": false,
        "isI18nRule": 0
      }
    ]
  }
}
```

- 字段解释说明
  1. Value 下面的 fieldInfoList 数组表示整个主题下面的字段 ![字段图](/fxiaoke/topic.png)
  2. fieldInfoList 里面数据

|     所属      |     字段      | 说明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :-----------: | :-----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fieldInfoList |   objectId    | 每一个 `objectsAndFields` 下面的 `fieldInfoList` 的每个数组的 `objectId` 都是相同的，并且和 `businessObjects` 下面的 `objectId`相对应的，注意：上图是有客户，相关团队，人员三个分类，但是 `businessObjects` 只有两个分类                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| fieldInfoList | fieldLocation | 猜测是字段的位置，可能是用来排序, 同一个 `objectId` 下面的相同 `fieldType` 的 `fieldLocation` 还是不相同的                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| fieldInfoList |   fieldType   | 字段类型，目前看到的有： `String` , `Number` , `Date` , `Boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| fieldInfoList | subFieldType  | ui 字段类型：当 ui 下面的 type 为 UI_MultiSelect 的时候，那么值就为：MultiSelectEnum。2. 当 ui 下面的 type 为 UI_Input 的时候，那么值就为：空字符串。3. 当 ui 下面的 type 为 `UI_Input`和 `UI_Lookup`（比`UI_Input`多这几个字段 `"refObjName"` `"refKeyField"` `"refTargetField"` `"urlObj"`）的时候，那么值就为：空字符串。4. 当 ui 下面的 type 为 UI_Selection 的时候，那么值就为：Circle，当是人员选择是这样的时候 ![circle](/fxiaoke/circle.png)。5. 当 ui 下面的 type 为 UI_Time 的时候，那么值就为：DateTime（fieldType 为 DateTime）或者空字符串（fieldType 为 Date）。6. 当 ui 下面的 type 为 UI_MultiSelect 并且 justLeafNodeSelect 为 1 的时候，那么值就为：LevelEnum ，意思就是做多级联动的时候使用这个。 |

---

## 三丶字段结果

- [获取字段结果](https://www.fxiaoke.com/FHH/EM1HBIUDF/rptUdfViewEditController/getFiltersResult?_fs_token=OM5bPJGuE3ajD3LcD2qqOMOmBM8oEJGjOZ8nPM4rCZLXEJOv&traceId=E-E.pft12301.1171-1653385443883)
- 请求参数

|      字段       |  类型  |    说明    |
| :-------------: | :----: | :--------: |
| businessObjects | object |            |
|       id        | string | templateID |
|     isView      |  int   |            |

-- 返回结果

```json
{
  "Result": {
    "FailureCode": 0,
    "StatusCode": 0,
    "UserInfo": {
      "EmployeeID": 1171,
      "EnterpriseAccount": "pft12301"
    }
  },
  "Value": {
    "filterList": [
      {
        "filters": [
          {
            "fieldNameColumnNameMaps": {},
            "objNameFieldNameColumnNameMaps": {},
            "fieldNameDateTypeMaps": {},
            "fieldNameTimestampTypeMaps": {},
            "filterId": "BI_5cac37e5920b050ea6953564",
            "viewId": "BI_171726164409384960",
            "fieldID": "BI_d966db8ec01f575349c55c143c4f6a6b",
            "displayNumber": 1,
            "operator": 26,
            "value1": "[{\"optionCode\":\"allocated\",\"parentID\":\"-2\",\"nodeName\":\"已分配\",\"isHaveChild\":0,\"isSelected\":1}]",
            "value2": "",
            "isDefault": 0,
            "optionId": "0",
            "isLock": 1,
            "fieldName": "分配状态",
            "fieldType": "String",
            "isOutDetailFilter": 0,
            "dbObjName": "biz_account",
            "dbFieldName": "biz_status",
            "fieldLocation": -1,
            "refObjName": "",
            "refKeyField": "",
            "refTargetField": "",
            "formatStr": "",
            "isIndex": 1,
            "isKey": 0,
            "objId": "BI_816e819f92a02a1f11117e0ace6c00ba",
            "objName": "客户",
            "operatorLabel": "属于",
            "ui": {
              "type": "UI_MultiSelect",
              "justLeafNodeSelect": 0,
              "data": [
                {
                  "nodeName": "未分配",
                  "isSelected": 0,
                  "optionCode": "unallocated",
                  "parentID": "-2",
                  "isHaveChild": 0,
                  "enumId": "unallocated",
                  "order": 0,
                  "level": 0,
                  "isDisable": 0
                },
                {
                  "nodeName": "已分配",
                  "isSelected": 0,
                  "optionCode": "allocated",
                  "parentID": "-2",
                  "isHaveChild": 0,
                  "enumId": "allocated",
                  "order": 0,
                  "level": 0,
                  "isDisable": 0
                }
              ]
            },
            "subFieldType": "MultiSelectEnum",
            "isPre": 2,
            "type": "select_one",
            "isSingle": 1,
            "relationObjName": "biz_account",
            "validateDataPermission": false,
            "crmObjName": "AccountObj",
            "crmFieldName": "biz_status",
            "objectSequence": 0,
            "objectNodeName": "客户",
            "objectRealNodeName": "AccountObj",
            "isI18nRule": 0,
            "stopRecursion": false,
            "isSupportStopEmployeeOption": 0,
            "isContainStopEmployeeOption": 0,
            "fromExpandCells": false,
            "drillableRowFieldDrillable": true,
            "drillableColumnFieldDrillable": true,
            "whatListForGroupAndAggFlag": false,
            "whatListFilterArrayFlag": false,
            "hierarchyGroupFlag": false,
            "bISupportCalcFieldFlag": false,
            "defaultToZero": false,
            "isMainAttribute": false,
            "isLeakage": 0
          },
          {
            "fieldNameColumnNameMaps": {},
            "objNameFieldNameColumnNameMaps": {},
            "fieldNameDateTypeMaps": {},
            "fieldNameTimestampTypeMaps": {},
            "filterId": "BI_5cac37e5920b050ea6953565",
            "viewId": "BI_171726164409384960",
            "fieldID": "BI_b15a9d5b285d0e6f6a0372f5278226eb",
            "displayNumber": 2,
            "operator": 23,
            "value1": "",
            "value2": "",
            "isDefault": 0,
            "dateRangeID": "4",
            "optionId": "0",
            "isLock": 0,
            "fieldName": "最后跟进时间",
            "fieldType": "Date",
            "isOutDetailFilter": 0,
            "dbObjName": "biz_account",
            "dbFieldName": "last_followed_time",
            "fieldLocation": -1,
            "refObjName": "",
            "refKeyField": "",
            "refTargetField": "",
            "formatStr": "yyyy-MM-dd HH:mm",
            "isIndex": 1,
            "isKey": 0,
            "objId": "BI_816e819f92a02a1f11117e0ace6c00ba",
            "objName": "客户",
            "operatorLabel": "时间段",
            "ui": {
              "type": "UI_Time",
              "group": "DateTime",
              "justLeafNodeSelect": 0
            },
            "subFieldType": "DateTime",
            "isPre": 2,
            "type": "date_time",
            "isSingle": 0,
            "relationObjName": "biz_account",
            "validateDataPermission": false,
            "crmObjName": "AccountObj",
            "crmFieldName": "last_followed_time",
            "objectSequence": 0,
            "objectNodeName": "客户",
            "objectRealNodeName": "AccountObj",
            "isI18nRule": 0,
            "stopRecursion": false,
            "isSupportStopEmployeeOption": 0,
            "isContainStopEmployeeOption": 0,
            "fromExpandCells": false,
            "drillableRowFieldDrillable": true,
            "drillableColumnFieldDrillable": true,
            "whatListForGroupAndAggFlag": false,
            "whatListFilterArrayFlag": false,
            "hierarchyGroupFlag": false,
            "bISupportCalcFieldFlag": false,
            "defaultToZero": false,
            "isMainAttribute": false,
            "isLeakage": 0
          },
          {
            "fieldNameColumnNameMaps": {},
            "objNameFieldNameColumnNameMaps": {},
            "fieldNameDateTypeMaps": {},
            "fieldNameTimestampTypeMaps": {},
            "filterId": "BI_5cac37e5920b050ea6953566",
            "viewId": "BI_171726164409384960",
            "fieldID": "BI_ba80e7e2193c045006386c10b40160d8",
            "displayNumber": 3,
            "operator": 26,
            "value1": "[{\"optionCode\":\"1\",\"parentID\":\"-2\",\"nodeName\":\"负责人\",\"isHaveChild\":0,\"isSelected\":1}]",
            "value2": "",
            "isDefault": 0,
            "optionId": "0",
            "isLock": 0,
            "fieldName": "团队角色",
            "fieldType": "String",
            "isOutDetailFilter": 0,
            "dbObjName": "dt_team",
            "dbFieldName": "role_type",
            "fieldLocation": -1,
            "refObjName": "",
            "refKeyField": "",
            "refTargetField": "",
            "formatStr": "",
            "isIndex": 0,
            "isKey": 0,
            "objId": "BI_05e82cc20d79895e36f3ae5bcb1cd195",
            "objName": "相关团队",
            "operatorLabel": "属于",
            "ui": {
              "type": "UI_MultiSelect",
              "justLeafNodeSelect": 0,
              "data": [
                {
                  "nodeName": "负责人",
                  "isSelected": 0,
                  "optionCode": "1",
                  "parentID": "-2",
                  "isHaveChild": 0,
                  "enumId": "1",
                  "order": 0,
                  "level": 0,
                  "isDisable": 0
                },
                {
                  "nodeName": "联合跟进人",
                  "isSelected": 0,
                  "optionCode": "2",
                  "parentID": "-2",
                  "isHaveChild": 0,
                  "enumId": "2",
                  "order": 0,
                  "level": 0,
                  "isDisable": 0
                },
                {
                  "nodeName": "售后人员",
                  "isSelected": 0,
                  "optionCode": "3",
                  "parentID": "-2",
                  "isHaveChild": 0,
                  "enumId": "3",
                  "order": 0,
                  "level": 0,
                  "isDisable": 0
                },
                {
                  "nodeName": "普通成员",
                  "isSelected": 0,
                  "optionCode": "4",
                  "parentID": "-2",
                  "isHaveChild": 0,
                  "enumId": "4",
                  "order": 0,
                  "level": 0,
                  "isDisable": 0
                }
              ]
            },
            "subFieldType": "MultiSelectEnum",
            "isPre": 2,
            "type": "select_one",
            "isSingle": 1,
            "relationObjName": "dt_team",
            "validateDataPermission": false,
            "crmObjName": "related_team",
            "crmFieldName": "role_type",
            "objectSequence": 0,
            "objectNodeName": "相关团队",
            "objectRealNodeName": "related_team",
            "isI18nRule": 0,
            "stopRecursion": false,
            "isSupportStopEmployeeOption": 0,
            "isContainStopEmployeeOption": 0,
            "fromExpandCells": false,
            "drillableRowFieldDrillable": true,
            "drillableColumnFieldDrillable": true,
            "whatListForGroupAndAggFlag": false,
            "whatListFilterArrayFlag": false,
            "hierarchyGroupFlag": false,
            "bISupportCalcFieldFlag": false,
            "defaultToZero": false,
            "isMainAttribute": false,
            "isLeakage": 0
          }
        ],
        "filterListFlag": false
      }
    ],
    "filtersLogic": "(1and2and3)",
    "labelAndOptions": [
      {
        "defaultFilterOptionType": "UDF",
        "label": "场景",
        "defaultFilterOptions": [
          {
            "optionName": "全部",
            "isDefault": 0,
            "optionID": "BI_59a3e59333b39e09b44e9db1"
          },
          {
            "optionName": "我负责的",
            "isDefault": 1,
            "optionID": "BI_59a3e59333b39e09b44e9db2"
          },
          {
            "optionName": "我联合跟进的",
            "isDefault": 0,
            "optionID": "BI_171714538838884352"
          },
          {
            "optionName": "我服务的",
            "isDefault": 0,
            "optionID": "BI_171714538872438784"
          },
          {
            "optionName": "我参与的",
            "isDefault": 0,
            "optionID": "BI_59a3e59333b39e09b44e9db3"
          },
          {
            "optionName": "我负责部门的",
            "isDefault": 0,
            "optionID": "BI_59a3e59333b39e09b44e9db4"
          },
          {
            "optionName": "我下属负责的",
            "isDefault": 0,
            "optionID": "BI_59a3e59333b39e09b44e9db5"
          },
          {
            "optionName": "我下属联合跟进的",
            "isDefault": 0,
            "optionID": "BI_171714538939547648"
          },
          {
            "optionName": "我下属服务的",
            "isDefault": 0,
            "optionID": "BI_171714538973102080"
          },
          {
            "optionName": "我下属参与的",
            "isDefault": 0,
            "optionID": "BI_59a3e59333b39e09b44e9db6"
          },
          {
            "optionName": "共享给我的",
            "isDefault": 0,
            "optionID": "BI_59a3e59333b39e09b44e9db7"
          }
        ]
      }
    ],
    "showMode": 1,
    "udfReportAsyncQuery": 1,
    "presetReportAsyncQuery": 0,
    "offlineFieldsTips": {},
    "pivotReportAsyncQuery": 1,
    "pivotGroupFieldCount": 5,
    "statGroupFieldCount": 5,
    "reqId": "bi_rptfiltercache_BI_171726164409384960_fbcba6bbb9b5f90b92c10b481a163fb9"
  }
}
```

## 四丶新建统计图

### 获取模板结果

- [接口请求地址](https://www.fxiaoke.com/FHH/EM1HBISTAT/fs-bi-stat/stat/template/getDomainTemplateResult?_fs_token=OM5bPJGuE3ajD3LcD2qqOMOmBM8oEJGjOZ8nPM4rCZLXEJOv&traceId=E-E.pft12301.1171-1653548781601)

- 请求参数

|   字段    |  类型  |          说明           |
| :-------: | :----: | :---------------------: |
| _fs_token | string | 感觉上是一个 token 验证 |
|  traceId  | string |        模板的 ID        |

- 返回结果

```json
{
  "Result": {
    "FailureCode": 0,
    "StatusCode": 0,
    "UserInfo": {
      "EmployeeID": 1171,
      "EnterpriseAccount": "pft12301"
    }
  },
  "Value": {
    "subjectDomainAndTemplates": [
      {
        "domainName": "员工业绩分析",
        "templates": [
          {
            "templateID": "BI_5d9efdaf37aa1b9ff04a4ce8",
            "templateName": "本月销售简报",
            "subjectDomainName": "员工业绩分析",
            "source": 0,
            "subjectDomainId": "BI_212938227949666304",
            "schemaId": "BI_5bcec11f56fc11160c8c8271",
            "chartType": "card"
          },
          {
            "templateID": "BI_5d9efd8537aa1b9ff04a4cd0",
            "templateName": "各月销售情况",
            "subjectDomainName": "员工业绩分析",
            "source": 0,
            "subjectDomainId": "BI_212938227949666304",
            "schemaId": "BI_5bcec11f56fc11160c8c8271",
            "chartType": "bar"
          },
          {
            "templateID": "BI_5d9efd7137aa1b9ff04a4cb7",
            "templateName": "年度销售总体情况(数量)",
            "subjectDomainName": "员工业绩分析",
            "source": 0,
            "subjectDomainId": "BI_212938227949666304",
            "schemaId": "BI_5bcec11f56fc11160c8c8271",
            "chartType": "bar"
          },
          {
            "templateID": "BI_5cc51bdb37aa1b9ff04a430d",
            "templateName": "订单金额同环比增长率",
            "subjectDomainName": "员工业绩分析",
            "source": 0,
            "subjectDomainId": "BI_212938227949666304",
            "schemaId": "BI_5bcec11f56fc11160c8c8271",
            "chartType": "doubley"
          },
          {
            "templateID": "BI_5cc51ef337aa1b9ff04a4366",
            "templateName": "Top10销售榜(订单金额)",
            "subjectDomainName": "员工业绩分析",
            "source": 0,
            "subjectDomainId": "BI_212938227949666304",
            "schemaId": "BI_5bcec11f56fc11160c8c8271",
            "chartType": "bar"
          },
          {
            "templateID": "BI_5cc5191b37aa1b9ff04a42ef",
            "templateName": "本月人员跟进动态数",
            "subjectDomainName": "员工业绩分析",
            "source": 0,
            "subjectDomainId": "BI_212938227949666304",
            "schemaId": "BI_5bcec11f56fc11160c8c8271",
            "chartType": "bar"
          },
          {
            "templateID": "BI_5e61b5517f08c2935d0899f8",
            "templateName": "各部门销售情况",
            "subjectDomainName": "员工业绩分析",
            "source": 0,
            "subjectDomainId": "BI_212938227949666304",
            "schemaId": "BI_5bcec11f56fc11160c8c8271",
            "chartType": "bar"
          }
        ],
        "subjectDomainId": "BI_212938227949666304"
      },
      {
        "domainName": "客户分析",
        "templates": [
          {
            "templateID": "BI_5cd6a95937aa1b9ff04a4864",
            "templateName": "不同级别客户订单占比",
            "subjectDomainName": "客户分析",
            "source": 0,
            "subjectDomainId": "BI_171726164476493824",
            "schemaId": "BI_5bcebcdc3060e20001e79977",
            "chartType": "pie"
          },
          {
            "templateID": "BI_5d9efd4337aa1b9ff04a4c9f",
            "templateName": "各级别客户交易情况",
            "subjectDomainName": "客户分析",
            "source": 0,
            "subjectDomainId": "BI_171726164476493824",
            "schemaId": "BI_5bcebcdc3060e20001e79977",
            "chartType": "bar"
          },
          {
            "templateID": "BI_5cc566b537aa1b9ff04a448d",
            "templateName": "客户成交排行Top10(按订单金额)",
            "subjectDomainName": "客户分析",
            "source": 0,
            "subjectDomainId": "BI_171726164476493824",
            "schemaId": "BI_5bcebcdc3060e20001e79977",
            "chartType": "bar"
          },
          {
            "templateID": "BI_5cc56d4037aa1b9ff04a44df",
            "templateName": "客户成交状态分布",
            "subjectDomainName": "客户分析",
            "source": 0,
            "subjectDomainId": "BI_171726164476493824",
            "schemaId": "BI_5bcebcdc3060e20001e79977",
            "chartType": "pie"
          },
          {
            "templateID": "BI_5cdbd8b737aa1b9ff04a4980",
            "templateName": "客户订单金额地区分布",
            "subjectDomainName": "客户分析",
            "source": 0,
            "subjectDomainId": "BI_171726164476493824",
            "schemaId": "BI_5bcebcdc3060e20001e79977",
            "chartType": "maphot"
          },
          {
            "templateID": "BI_5cdbc48537aa1b9ff04a4965",
            "templateName": "客户数地区分布",
            "subjectDomainName": "客户分析",
            "source": 0,
            "subjectDomainId": "BI_171726164476493824",
            "schemaId": "BI_5bcebcdc3060e20001e79977",
            "chartType": "mapbubble"
          },
          {
            "templateID": "BI_5f438cb65c7ef04bb268ff76",
            "templateName": "客户目标完成率排行",
            "subjectDomainName": "客户分析",
            "source": 0,
            "subjectDomainId": "BI_171726164476493824",
            "schemaId": "BI_5bcebcdc3060e20001e79977",
            "chartType": "bar"
          },
          {
            "templateID": "BI_5f438d145c7ef04bb268ff93",
            "templateName": "各客户目标完成率增长趋势",
            "subjectDomainName": "客户分析",
            "source": 0,
            "subjectDomainId": "BI_171726164476493824",
            "schemaId": "BI_5bcebcdc3060e20001e79977",
            "chartType": "stackline"
          },
          {
            "templateID": "BI_5f438d295c7ef04bb268ffc3",
            "templateName": "各级别客户目标完成情况",
            "subjectDomainName": "客户分析",
            "source": 0,
            "subjectDomainId": "BI_171726164476493824",
            "schemaId": "BI_5bcebcdc3060e20001e79977",
            "chartType": "doubley"
          },
          {
            "templateID": "BI_5f438d3c5c7ef04bb268ffe0",
            "templateName": "目标完成率",
            "subjectDomainName": "客户分析",
            "source": 0,
            "subjectDomainId": "BI_171726164476493824",
            "schemaId": "BI_5bcebcdc3060e20001e79977",
            "chartType": "gauge"
          },
          {
            "templateID": "BI_5f438d525c7ef04bb268fff4",
            "templateName": "各月客户目标完成情况",
            "subjectDomainName": "客户分析",
            "source": 0,
            "subjectDomainId": "BI_171726164476493824",
            "schemaId": "BI_5bcebcdc3060e20001e79977",
            "chartType": "pivottable"
          }
        ],
        "subjectDomainId": "BI_171726164476493824"
      },
      {
        "domainName": "销售订单分析",
        "templates": [
          {
            "templateID": "BI_5cd6775b37aa1b9ff04a484a",
            "templateName": "近6个月的订单回款情况",
            "subjectDomainName": "销售订单分析",
            "source": 0,
            "subjectDomainId": "BI_171757666652323840",
            "schemaId": "BI_5be1351956fc11448cdde39e",
            "chartType": "bar"
          },
          {
            "templateID": "BI_5cc54d9d37aa1b9ff04a442f",
            "templateName": "过去6个月订单的累计回款",
            "subjectDomainName": "销售订单分析",
            "source": 0,
            "subjectDomainId": "BI_171757666652323840",
            "schemaId": "BI_5be1351956fc11448cdde39e",
            "chartType": "doubley"
          },
          {
            "templateID": "BI_5cc54eec37aa1b9ff04a4446",
            "templateName": "部门订单回款率排行",
            "subjectDomainName": "销售订单分析",
            "source": 0,
            "subjectDomainId": "BI_171757666652323840",
            "schemaId": "BI_5be1351956fc11448cdde39e",
            "chartType": "doubley"
          }
        ],
        "subjectDomainId": "BI_171757666652323840"
      },
      {
        "domainName": "销售线索分析",
        "templates": [
          {
            "templateID": "BI_5d9efdd137aa1b9ff04a4cf1",
            "templateName": "线索转化统计(按来源)",
            "subjectDomainName": "销售线索分析",
            "source": 0,
            "subjectDomainId": "BI_172628080530227200",
            "schemaId": "BI_5caea6dfe1adb40001f81c32",
            "chartType": "table"
          },
          {
            "templateID": "BI_5d9efde737aa1b9ff04a4d10",
            "templateName": "线索转化统计(按线索池)",
            "subjectDomainName": "销售线索分析",
            "source": 0,
            "subjectDomainId": "BI_172628080530227200",
            "schemaId": "BI_5caea6dfe1adb40001f81c32",
            "chartType": "table"
          },
          {
            "templateID": "BI_5cdd13b037aa1b9ff04a49a0",
            "templateName": "本月转化率排行(按来源)",
            "subjectDomainName": "销售线索分析",
            "source": 0,
            "subjectDomainId": "BI_172628080530227200",
            "schemaId": "BI_5caea6dfe1adb40001f81c32",
            "chartType": "bar"
          },
          {
            "templateID": "BI_5cc572e937aa1b9ff04a454d",
            "templateName": "本月转化率排行(按线索池)",
            "subjectDomainName": "销售线索分析",
            "source": 0,
            "subjectDomainId": "BI_172628080530227200",
            "schemaId": "BI_5caea6dfe1adb40001f81c32",
            "chartType": "bar"
          },
          {
            "templateID": "BI_5cdb8bf337aa1b9ff04a48e6",
            "templateName": "本月转化率排行(按员工)",
            "subjectDomainName": "销售线索分析",
            "source": 0,
            "subjectDomainId": "BI_172628080530227200",
            "schemaId": "BI_5caea6dfe1adb40001f81c32",
            "chartType": "bar"
          },
          {
            "templateID": "BI_5cc5709f37aa1b9ff04a4518",
            "templateName": "员工待转换线索数量",
            "subjectDomainName": "销售线索分析",
            "source": 0,
            "subjectDomainId": "BI_172628080530227200",
            "schemaId": "BI_5caea6dfe1adb40001f81c32",
            "chartType": "bar"
          },
          {
            "templateID": "BI_5cc5750937aa1b9ff04a4597",
            "templateName": "线索状态分布",
            "subjectDomainName": "销售线索分析",
            "source": 0,
            "subjectDomainId": "BI_172628080530227200",
            "schemaId": "BI_5caea6dfe1adb40001f81c32",
            "chartType": "bar"
          },
          {
            "templateID": "BI_5cc575dc37aa1b9ff04a45ad",
            "templateName": "线索无效原因分析",
            "subjectDomainName": "销售线索分析",
            "source": 0,
            "subjectDomainId": "BI_172628080530227200",
            "schemaId": "BI_5caea6dfe1adb40001f81c32",
            "chartType": "pie"
          }
        ],
        "subjectDomainId": "BI_172628080530227200"
      },
      {
        "domainName": "产品分析",
        "templates": [
          {
            "templateID": "BI_5cc5134837aa1b9ff04a42da",
            "templateName": "产品销量统计",
            "subjectDomainName": "产品分析",
            "source": 0,
            "subjectDomainId": "BI_172822410553393154",
            "schemaId": "BI_5be1388756fc11448cdde3a7",
            "chartType": "table"
          },
          {
            "templateID": "BI_5cf11d9a37aa1b9ff04a4b59",
            "templateName": "产品销量Top10",
            "subjectDomainName": "产品分析",
            "source": 0,
            "subjectDomainId": "BI_172822410553393154",
            "schemaId": "BI_5be1388756fc11448cdde3a7",
            "chartType": "bar"
          },
          {
            "templateID": "BI_5f438ef45c7ef04bb2690028",
            "templateName": "各产品完成率增长趋势",
            "subjectDomainName": "产品分析",
            "source": 0,
            "subjectDomainId": "BI_172822410553393154",
            "schemaId": "BI_5be1388756fc11448cdde3a7",
            "chartType": "stackline"
          },
          {
            "templateID": "BI_5f438f0e5c7ef04bb2690058",
            "templateName": "产品目标完成率排行",
            "subjectDomainName": "产品分析",
            "source": 0,
            "subjectDomainId": "BI_172822410553393154",
            "schemaId": "BI_5be1388756fc11448cdde3a7",
            "chartType": "bar"
          },
          {
            "templateID": "BI_5f438f215c7ef04bb2690073",
            "templateName": "各月各产品目标完成情况",
            "subjectDomainName": "产品分析",
            "source": 0,
            "subjectDomainId": "BI_172822410553393154",
            "schemaId": "BI_5be1388756fc11448cdde3a7",
            "chartType": "pivottable"
          },
          {
            "templateID": "BI_5f438f355c7ef04bb26900a6",
            "templateName": "各分类目标完成情况",
            "subjectDomainName": "产品分析",
            "source": 0,
            "subjectDomainId": "BI_172822410553393154",
            "schemaId": "BI_5be1388756fc11448cdde3a7",
            "chartType": "doubley"
          },
          {
            "templateID": "BI_5f438f4d5c7ef04bb26900c3",
            "templateName": "目标完成情况",
            "subjectDomainName": "产品分析",
            "source": 0,
            "subjectDomainId": "BI_172822410553393154",
            "schemaId": "BI_5be1388756fc11448cdde3a7",
            "chartType": "gauge"
          }
        ],
        "subjectDomainId": "BI_172822410553393154"
      },
      {
        "domainName": "商机2.0分析",
        "templates": [
          {
            "templateID": "BI_5cc583ea37aa1b9ff04a4672",
            "templateName": "销售漏斗(商机金额)",
            "subjectDomainName": "商机2.0分析",
            "source": 0,
            "subjectDomainId": "BI_5beb93c437aa1b0cfbbc9b32",
            "schemaId": "BI_5bebdd6956fc110a303a9ac0",
            "chartType": "funnel"
          },
          {
            "templateID": "BI_5cd6708e37aa1b9ff04a4808",
            "templateName": "销售漏斗(预测金额)",
            "subjectDomainName": "商机2.0分析",
            "source": 0,
            "subjectDomainId": "BI_5beb93c437aa1b0cfbbc9b32",
            "schemaId": "BI_5bebdd6956fc110a303a9ac0",
            "chartType": "funnel"
          },
          {
            "templateID": "BI_5cc5919137aa1b9ff04a4687",
            "templateName": "销售漏斗(商机数)",
            "subjectDomainName": "商机2.0分析",
            "source": 0,
            "subjectDomainId": "BI_5beb93c437aa1b0cfbbc9b32",
            "schemaId": "BI_5bebdd6956fc110a303a9ac0",
            "chartType": "funnel"
          },
          {
            "templateID": "BI_5cc598d737aa1b9ff04a46b3",
            "templateName": "本季度预计成交的重点商机Top10",
            "subjectDomainName": "商机2.0分析",
            "source": 0,
            "subjectDomainId": "BI_5beb93c437aa1b0cfbbc9b32",
            "schemaId": "BI_5bebdd6956fc110a303a9ac0",
            "chartType": "bar"
          },
          {
            "templateID": "BI_5cdb849f37aa1b9ff04a4880",
            "templateName": "未来6个月预计成交商机金额",
            "subjectDomainName": "商机2.0分析",
            "source": 0,
            "subjectDomainId": "BI_5beb93c437aa1b0cfbbc9b32",
            "schemaId": "BI_5bebdd6956fc110a303a9ac0",
            "chartType": "bar"
          },
          {
            "templateID": "BI_5cc5a45e37aa1b9ff04a46df",
            "templateName": "过去6个月商机增长趋势",
            "subjectDomainName": "商机2.0分析",
            "source": 0,
            "subjectDomainId": "BI_5beb93c437aa1b0cfbbc9b32",
            "schemaId": "BI_5bebdd6956fc110a303a9ac0",
            "chartType": "doubley"
          },
          {
            "templateID": "BI_5cc5a62b37aa1b9ff04a470e",
            "templateName": "各部门商机统计",
            "subjectDomainName": "商机2.0分析",
            "source": 0,
            "subjectDomainId": "BI_5beb93c437aa1b0cfbbc9b32",
            "schemaId": "BI_5bebdd6956fc110a303a9ac0",
            "chartType": "doubley"
          },
          {
            "templateID": "BI_5cdb85bd37aa1b9ff04a4896",
            "templateName": "各部门结单周期统计",
            "subjectDomainName": "商机2.0分析",
            "source": 0,
            "subjectDomainId": "BI_5beb93c437aa1b0cfbbc9b32",
            "schemaId": "BI_5bebdd6956fc110a303a9ac0",
            "chartType": "line"
          },
          {
            "templateID": "BI_5cc5a6d837aa1b9ff04a4725",
            "templateName": "各部门商机赢单率排行",
            "subjectDomainName": "商机2.0分析",
            "source": 0,
            "subjectDomainId": "BI_5beb93c437aa1b0cfbbc9b32",
            "schemaId": "BI_5bebdd6956fc110a303a9ac0",
            "chartType": "doubley"
          },
          {
            "templateID": "BI_5cc5a4e937aa1b9ff04a46f6",
            "templateName": "员工商机赢单率排行",
            "subjectDomainName": "商机2.0分析",
            "source": 0,
            "subjectDomainId": "BI_5beb93c437aa1b0cfbbc9b32",
            "schemaId": "BI_5bebdd6956fc110a303a9ac0",
            "chartType": "table"
          },
          {
            "templateID": "BI_5cdb867737aa1b9ff04a48ac",
            "templateName": "商机来源分析",
            "subjectDomainName": "商机2.0分析",
            "source": 0,
            "subjectDomainId": "BI_5beb93c437aa1b0cfbbc9b32",
            "schemaId": "BI_5bebdd6956fc110a303a9ac0",
            "chartType": "bar"
          },
          {
            "templateID": "BI_5cde589d37aa1b9ff04a4ae6",
            "templateName": "阶段状态分布",
            "subjectDomainName": "商机2.0分析",
            "source": 0,
            "subjectDomainId": "BI_5beb93c437aa1b0cfbbc9b32",
            "schemaId": "BI_5bebdd6956fc110a303a9ac0",
            "chartType": "doubley"
          },
          {
            "templateID": "BI_5cd6721d37aa1b9ff04a481d",
            "templateName": "输单原因分布",
            "subjectDomainName": "商机2.0分析",
            "source": 0,
            "subjectDomainId": "BI_5beb93c437aa1b0cfbbc9b32",
            "schemaId": "BI_5bebdd6956fc110a303a9ac0",
            "chartType": "pie"
          },
          {
            "templateID": "BI_5d9d8dd237aa1b9ff04a4c3f",
            "templateName": "重点客户排行Top10(按商机金额)",
            "subjectDomainName": "商机2.0分析",
            "source": 0,
            "subjectDomainId": "BI_5beb93c437aa1b0cfbbc9b32",
            "schemaId": "BI_5bebdd6956fc110a303a9ac0",
            "chartType": "bar"
          }
        ],
        "subjectDomainId": "BI_5beb93c437aa1b0cfbbc9b32"
      },
      {
        "domainName": "目标分析",
        "templates": [
          {
            "templateID": "BI_5e4655d3551cf07f0ba1e74e",
            "templateName": "目标完成率",
            "subjectDomainName": "目标分析",
            "source": 0,
            "subjectDomainId": "BI_a1c2fcv12q1jasnacamixhyz",
            "schemaId": "BI_5d9ff333e9a0d3741c9f09fc",
            "chartType": "gauge"
          },
          {
            "templateID": "BI_5e46559b551cf07f0ba1e736",
            "templateName": "各部门目标完成情况",
            "subjectDomainName": "目标分析",
            "source": 0,
            "subjectDomainId": "BI_a1c2fcv12q1jasnacamixhyz",
            "schemaId": "BI_5d9ff333e9a0d3741c9f09fc",
            "chartType": "doubley"
          },
          {
            "templateID": "BI_5e4655f2551cf07f0ba1e75d",
            "templateName": "各月目标完成情况",
            "subjectDomainName": "目标分析",
            "source": 0,
            "subjectDomainId": "BI_a1c2fcv12q1jasnacamixhyz",
            "schemaId": "BI_5d9ff333e9a0d3741c9f09fc",
            "chartType": "doubley"
          },
          {
            "templateID": "BI_5e46560d551cf07f0ba1e775",
            "templateName": "员工目标完成率排行",
            "subjectDomainName": "目标分析",
            "source": 0,
            "subjectDomainId": "BI_a1c2fcv12q1jasnacamixhyz",
            "schemaId": "BI_5d9ff333e9a0d3741c9f09fc",
            "chartType": "bar"
          }
        ],
        "subjectDomainId": "BI_a1c2fcv12q1jasnacamixhyz"
      },
      {
        "domainName": "部门分析",
        "templates": [
          {
            "templateID": "BI_60371c30ee22db0001a73763",
            "templateName": "部门统计",
            "subjectDomainName": "部门分析",
            "source": 0,
            "subjectDomainId": "BI_1717576666524fj93a",
            "schemaId": "BI_60371c30ee22db0001a73763",
            "chartType": "line"
          }
        ],
        "subjectDomainId": "BI_1717576666524fj93a"
      }
    ]
  }
}
```

- 字段分析

|                   所属                    |    字段    | 说明                                                                                                                                                                                                                                         |
| :---------------------------------------: | :--------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      Value.subjectDomainAndTemplates      | domainName | 表示那些主题范围，如图所示：![主体范围](/fxiaoke/domain.png)                                                                                                                                                                                 |
|      Value.subjectDomainAndTemplates      | templates  | 表示模板，如图所示：![模板](/fxiaoke/template.png)                                                                                                                                                                                           |
| Value.subjectDomainAndTemplates.templates | chartType  | 图表类型：1. line(折线)2. card(卡片)3. doubley（双轴图）4. pie（饼状图）5. maphot（地图热力）6. mapbubble（热力气泡）7. stackline（堆叠折线图）8. gauge（仪表盘）9. pivottable（交叉表）10. table（表格）11. funnel（漏斗）12. bar（柱状图） |

---

## 五丶 获取模板的数据范围筛选

- [接口请求地址](https://www.fxiaoke.com/FHH/EM1HBISTAT/fs-bi-stat/stat/filters/getFiltersResult?_fs_token=OM5bPJGuE3ajD3LcD2qqOMOmBM8oEJGjOZ8nPM4rCZLXEJOv&traceId=E-E.pft12301.1171-1653552952597)

- 请求参数

|    字段    |  类型   |                   说明                   |
| :--------: | :-----: | :--------------------------------------: |
| \_fs_token | string  |         感觉上是一个 token 验证          |
|  traceId   | string  |                 主题 ID                  |
|     id     | string  | 模板的 ID："BI_5d9efdaf37aa1b9ff04a4ce8" |
|   isView   | boolean |                 是否展示                 |

- 返回结果

```json
{
  "Result": {
    "FailureCode": 0,
    "StatusCode": 0,
    "UserInfo": {
      "EmployeeID": 1171,
      "EnterpriseAccount": "pft12301"
    }
  },
  "Value": {
    "filterLists": [
      {
        "filters": [
          {
            "displayNumber": 1,
            "fieldID": "BI_5bcec12156fc11160c100443",
            "fieldId": "BI_5bcec12156fc11160c100443",
            "isLock": 0,
            "operator": 23,
            "value1": "",
            "dbFieldName": "action_date",
            "dbObjName": "agg_data",
            "fieldName": "日期",
            "operatorLabel": "时间段",
            "dateRangeID": "4",
            "fieldType": "Date",
            "value2": "",
            "parentID": "",
            "filterId": "BI_5d9efdaf37aa1b9ff04a4cee",
            "ui": {
              "type": "UI_Time",
              "group": "Date",
              "justLeafNodeSelect": 0
            },
            "fieldLocation": "action_date",
            "realFieldId": "BI_5bcec12156fc11160c100443",
            "status": 1,
            "objectDescribeApiName": "org_employee_user",
            "objShowName": "人员",
            "isContainStopEmployeeOption": 0,
            "isSupportStopEmployeeOption": 0,
            "type": "date",
            "formatStr": "yyyy-MM-dd",
            "isLeakage": 0
          },
          {
            "displayNumber": 2,
            "fieldID": "BI_5bcec12156fc11160c100417",
            "fieldId": "BI_5bcec12156fc11160c100417",
            "isLock": 0,
            "operator": 26,
            "value1": "[]",
            "dbFieldName": "main_department",
            "dbObjName": "dim_data",
            "fieldName": "主属部门",
            "operatorLabel": "属于",
            "fieldType": "String",
            "refObjName": "org_dept",
            "filterId": "BI_5d9efdaf37aa1b9ff04a4ced",
            "subFieldType": "Circle",
            "ui": {
              "type": "UI_Selection",
              "justLeafNodeSelect": 0,
              "tabList": [],
              "myOrg": {
                "myOwnCircle": [],
                "lowerEmployee": []
              }
            },
            "fieldLocation": "value11",
            "refKeyField": "dept_id",
            "refTargetField": "name",
            "udfFieldId": "BI_8a2913469ae02bfdb627d12673557264",
            "realFieldId": "BI_5bcec12156fc11160c100417",
            "status": 1,
            "objectDescribeApiName": "org_employee_user",
            "objShowName": "人员",
            "isContainStopEmployeeOption": 0,
            "isSupportStopEmployeeOption": 1,
            "type": "department",
            "formatStr": "",
            "crmObjName": "PersonnelObj",
            "isLeakage": 0
          }
        ]
      }
    ],
    "filtersLogic": "(1and2)",
    "labelAndOptions": [
      {
        "defaultFilterOptionType": "org_employee_user",
        "label": "场景",
        "defaultFilterOptions": [
          {
            "optionName": "全部",
            "isDefault": 1,
            "optionID": "BI_59a3e59333b39e09b44e9db1"
          },
          {
            "optionName": "我自己",
            "isDefault": 0,
            "optionID": "BI_59a3e59333b39e09b44e9db2"
          },
          {
            "optionName": "我负责部门的",
            "isDefault": 0,
            "optionID": "BI_59a3e59333b39e09b44e9db4"
          },
          {
            "optionName": "我下属的",
            "isDefault": 0,
            "optionID": "BI_59a3e59333b39e09b44e9db5"
          },
          {
            "optionName": "共享给我的",
            "isDefault": 0,
            "optionID": "BI_59a3e59333b39e09b44e9db7"
          }
        ]
      }
    ],
    "presetStatAsyncQuery": 0,
    "udfStatAsyncQuery": 1,
    "offlineFieldsTips": {}
  }
}
```

- 字段分析

|                    所属                    |      字段       | 说明                                                             |
| :----------------------------------------: | :-------------: | :--------------------------------------------------------------- |
|                   Value                    | labelAndOptions | 统计图里面的默认场景数据：![默认场景](/fxiaoke/labelOptions.png) |
|         Value.filterLists.filters          |     fieldID     | 这个就是 维度指标里面的 fieldId                                  |
|         Value.filterLists.filters          |     isLock      | 判断该字段在数据范围是否能被修改：![是否修改](/fxiaoke/lock.png) |
| Value.labelAndOptions.defaultFilterOptions |    isDefault    | select 下拉框中是否是默认选中的那个                              |

---

## 六丶图表配置

- [获取图表配置](https://www.fxiaoke.com/FHH/EM1HBISTAT/fs-bi-stat/stat/chartConfig/query?_fs_token=OM5bPJGuE3ajD3LcD2qqOMOmBM8oEJGjOZ8nPM4rCZLXEJOv&traceId=E-E.pft12301.1171-1653632236633)

- 请求参数

|   字段    |  类型   |                   说明                   |
| :-------: | :-----: | :--------------------------------------: |
| _fs_token | string  |         感觉上是一个 token 验证          |
|  traceId  | string  |                 主题 ID                  |
|    id     | string  | 模板的 ID："BI_5d9efdaf37aa1b9ff04a4ce8" |
|  isView   | boolean |                 是否展示                 |
|   type    | string  |   类型(add -> 意思是请求的类型是求和)    |

- 返回结果

```json
{
  "Result": {
    "FailureCode": 0,
    "StatusCode": 0,
    "UserInfo": {
      "EmployeeID": 1171,
      "EnterpriseAccount": "pft12301"
    }
  },
  "Value": {
    "topNum": 0,
    "chartType": "bar",
    "dimensionFields": [
      {
        "fieldID": "BI_213150709075050496",
        "fieldId": "BI_213150709075050496",
        "refObjName": "",
        "parentDbFieldName": "action_date",
        "fieldName": "日期（月）",
        "fieldType": "Date",
        "dbFieldName": "f_month",
        "dbObjName": "dim_sys_date",
        "isVisible": 1,
        "orderType": 0,
        "canDrillDown": 0,
        "parentID": "BI_5bcec12156fc11160c100443",
        "parentId": "BI_5bcec12156fc11160c100443",
        "hasChildren": 0,
        "sourObjName": "dim_sys_date",
        "sourFieldName": "f_month",
        "sourFieldId": "BI_213150709075050496",
        "fieldLocation": "",
        "isPre": 0,
        "udfFieldId": "",
        "objectDescribeApiName": "org_employee_user",
        "cellWidth": 0,
        "objShowName": "人员",
        "type": "",
        "hierarchyGroupFlag": 0,
        "fixAccountPathLevel": 0,
        "canLevelGroup": 0,
        "isMainAttribute": false,
        "fixed": 0,
        "calcStrategy": "COMMON"
      }
    ],
    "dimensionField": {
      "fieldID": "BI_213150709075050496",
      "fieldId": "BI_213150709075050496",
      "refObjName": "",
      "parentDbFieldName": "action_date",
      "fieldName": "日期（月）",
      "fieldType": "Date",
      "dbFieldName": "f_month",
      "dbObjName": "dim_sys_date",
      "isVisible": 1,
      "orderType": 0,
      "canDrillDown": 0,
      "parentID": "BI_5bcec12156fc11160c100443",
      "parentId": "BI_5bcec12156fc11160c100443",
      "hasChildren": 0,
      "sourObjName": "dim_sys_date",
      "sourFieldName": "f_month",
      "sourFieldId": "BI_213150709075050496",
      "fieldLocation": "",
      "isPre": 0,
      "udfFieldId": "",
      "objectDescribeApiName": "org_employee_user",
      "cellWidth": 0,
      "objShowName": "人员",
      "type": "",
      "hierarchyGroupFlag": 0,
      "fixAccountPathLevel": 0,
      "canLevelGroup": 0,
      "isMainAttribute": false,
      "fixed": 0,
      "calcStrategy": "COMMON"
    },
    "layout": {
      "aMeasure": "",
      "colorGroup": 0,
      "isDimensionShow": 0,
      "isLegendShow": 1,
      "isTableShow": 0,
      "isValueShow": 1,
      "itemShowStyle": 0,
      "valuePosition": "top",
      "valueShowStyle": "",
      "xAxisLabelDegree": 0,
      "xAxisName": "",
      "xAxisNameIsShow": 0,
      "yAxisList": [
        {
          "chartType": "bar",
          "isNameShow": 0,
          "labelDegree": 0,
          "name": "",
          "yAxisIndex": 1
        }
      ],
      "isHollowCircle": 0,
      "isSmoothLine": 0,
      "barDirect": "vertical",
      "isShowDimension": 0,
      "isAreaNameShow": 0,
      "visualType": 0,
      "showTotal": 1,
      "showSubTotal": 1,
      "notCardValueShow": 1,
      "notShowSplitLine": 0,
      "notShowLabels": 0,
      "isRowToColumn": 0,
      "lineShowStyle": 0,
      "isShowSerialNumber": 0,
      "isShowSubTitle": 0,
      "autoWordBreak": 0,
      "isStaggeredYAxis": 1,
      "tableOnlyInDetail": 1,
      "fontSize": 12,
      "showVerticalTotal": 1,
      "showVerticalSubTotal": 1,
      "isConfigSenior": 0,
      "isShowMarkLine": 0
    },
    "measureFields": [
      {
        "fieldID": "BI_5d9ff3331b9ad40001873791",
        "fieldName": "目标值",
        "fieldType": "Number",
        "dbFieldName": "month_value",
        "dbObjName": "agg_data",
        "isVisible": 1,
        "orderType": 0,
        "aggrType": "2",
        "yAxisIndex": 1,
        "legendName": "目标值",
        "isDetail": 1,
        "parentID": "",
        "formula": "",
        "formatStr": "#,##0.00",
        "ratioType": "0",
        "fieldLocation": "value0",
        "subFieldType": "",
        "refObjName": "",
        "isPredefined": 2,
        "status": 1,
        "udfFieldId": "BI_71eaff0a1cd11c780ef22615688a27a4",
        "isNullActionDate": false,
        "isShowLegend": 1,
        "cellWidth": 0,
        "objShowName": "目标值对象",
        "allowDetailExport": 0,
        "type": "number",
        "isShowValue": 1,
        "fixed": 0,
        "objectDescribeApiName": "goal_value_obj",
        "aggrTypeMap": {
          "2": "求和"
        },
        "ruleCreateTime": "Aug 20, 2021 7:42:14 PM",
        "ruleLastModifiedTime": "Aug 20, 2021 7:42:14 PM",
        "keyCountDistinctType": false
      },
      {
        "fieldID": "BI_nvv76jyhwg6qoojfw9ike31u",
        "fieldName": "完成值",
        "fieldType": "Number",
        "dbFieldName": "achieve_value",
        "dbObjName": "agg_data",
        "isVisible": 1,
        "orderType": 0,
        "aggrType": "2",
        "yAxisIndex": 1,
        "legendName": "完成值",
        "isDetail": 1,
        "formula": "",
        "formatStr": "0",
        "ratioType": "0",
        "fieldLocation": "achieve_value",
        "subFieldType": "",
        "refObjName": "",
        "isPredefined": 2,
        "status": 1,
        "udfFieldId": "BI_71eaff0a1cd11c780ef22615688a27a4",
        "isNullActionDate": false,
        "isShowLegend": 1,
        "cellWidth": 0,
        "objShowName": "目标值对象",
        "allowDetailExport": 0,
        "type": "number",
        "isShowValue": 1,
        "fixed": 0,
        "objectDescribeApiName": "goal_value_obj",
        "aggrTypeMap": {
          "2": "求和"
        },
        "keyCountDistinctType": false
      },
      {
        "fieldID": "BI_5cbad2afd5f64d0001152189",
        "fieldName": "商机2.0金额(不含输单)",
        "fieldType": "Number",
        "dbFieldName": "amount",
        "dbObjName": "agg_data",
        "isVisible": 1,
        "orderType": 0,
        "aggrType": "2",
        "yAxisIndex": 1,
        "legendName": "预计成交商机金额",
        "isDetail": 1,
        "formula": "",
        "formatStr": "#,##0.00",
        "ratioType": "0",
        "fieldLocation": "value4",
        "subFieldType": "",
        "isPredefined": 1,
        "status": 1,
        "udfFieldId": "BI_24505d9d03e62c8e9f7270e04e8256b9",
        "isNullActionDate": false,
        "isShowLegend": 1,
        "cellWidth": 0,
        "objShowName": "商机管理",
        "allowDetailExport": 0,
        "type": "currency",
        "isShowValue": 1,
        "fixed": 0,
        "objectDescribeApiName": "new_opportunity",
        "aggrTypeMap": {
          "2": "求和"
        },
        "ruleCreateTime": "Aug 20, 2021 7:42:14 PM",
        "ruleLastModifiedTime": "Aug 20, 2021 7:42:14 PM",
        "keyCountDistinctType": false
      },
      {
        "fieldID": "BI_5cbad35bd5f64d000115218f",
        "fieldName": "赢单商机金额(商机2.0)",
        "fieldType": "Number",
        "dbFieldName": "amount",
        "dbObjName": "agg_data",
        "isVisible": 1,
        "orderType": 0,
        "aggrType": "2",
        "yAxisIndex": 1,
        "legendName": "赢单商机金额",
        "isDetail": 1,
        "formula": "",
        "formatStr": "#,##0.00",
        "ratioType": "0",
        "fieldLocation": "value7",
        "subFieldType": "",
        "isPredefined": 1,
        "status": 1,
        "udfFieldId": "BI_24505d9d03e62c8e9f7270e04e8256b9",
        "isNullActionDate": false,
        "isShowLegend": 1,
        "cellWidth": 0,
        "objShowName": "商机管理",
        "allowDetailExport": 0,
        "type": "currency",
        "isShowValue": 1,
        "fixed": 0,
        "objectDescribeApiName": "new_opportunity",
        "aggrTypeMap": {
          "2": "求和"
        },
        "ruleCreateTime": "Aug 20, 2021 7:42:14 PM",
        "ruleLastModifiedTime": "Aug 20, 2021 7:42:14 PM",
        "keyCountDistinctType": false
      },
      {
        "fieldID": "BI_5bcee8b2b8e0e70001016199",
        "fieldName": "已确认的订单金额",
        "fieldType": "Number",
        "dbFieldName": "order_amount",
        "dbObjName": "agg_data",
        "isVisible": 1,
        "orderType": 0,
        "aggrType": "2",
        "yAxisIndex": 1,
        "legendName": "订单金额",
        "isDetail": 1,
        "formula": "",
        "formatStr": "#,##0.00",
        "ratioType": "0",
        "fieldLocation": "value24",
        "subFieldType": "",
        "refObjName": "",
        "isPredefined": 1,
        "status": 1,
        "udfFieldId": "BI_a222c307fa963c2d2ed18f51e17c3aad",
        "isNullActionDate": false,
        "isShowLegend": 1,
        "cellWidth": 0,
        "objShowName": "合同订单",
        "allowDetailExport": 0,
        "type": "currency",
        "isShowValue": 1,
        "fixed": 0,
        "objectDescribeApiName": "biz_sales_order",
        "aggrTypeMap": {
          "2": "求和"
        },
        "ruleCreateTime": "Aug 20, 2021 7:42:14 PM",
        "ruleLastModifiedTime": "May 7, 2022 7:19:57 PM",
        "keyCountDistinctType": false
      },
      {
        "fieldID": "BI_5ddbbbd6d7c5c40001c95fe2",
        "fieldName": "回款金额",
        "fieldType": "Number",
        "dbFieldName": "payment_amount",
        "dbObjName": "agg_data",
        "isVisible": 1,
        "orderType": 0,
        "aggrType": "2",
        "yAxisIndex": 1,
        "legendName": "回款金额",
        "isDetail": 1,
        "formula": "",
        "formatStr": "0.00",
        "ratioType": "0",
        "fieldLocation": "value65",
        "subFieldType": "Stat",
        "isPredefined": 1,
        "status": 1,
        "udfFieldId": "BI_0b1a65feefde7a0dae34e95d3372d901",
        "isNullActionDate": false,
        "isShowLegend": 1,
        "cellWidth": 0,
        "objShowName": "回款记录",
        "allowDetailExport": 0,
        "type": "count",
        "isShowValue": 1,
        "fixed": 0,
        "objectDescribeApiName": "payment_customer",
        "aggrTypeMap": {
          "2": "求和"
        },
        "ruleCreateTime": "Aug 20, 2021 7:42:13 PM",
        "ruleLastModifiedTime": "Aug 20, 2021 7:42:13 PM",
        "keyCountDistinctType": false
      }
    ],
    "userDefined": 1,
    "schemaId": "BI_5bcec11f56fc11160c8c8271",
    "currentTime": "2022-05-27 14:17:16",
    "isShowDimension": 1,
    "source": 1,
    "chartStatus": 0,
    "presetStatAsyncQuery": 0,
    "udfStatAsyncQuery": 1,
    "offlineFieldsTips": {},
    "reqId": "bi_stat_configcache_BI_5d9efd8537aa1b9ff04a4cd0_36eff0f3b6159db430a0945f13880898_ZH-CN",
    "hideGoalFilter": 0,
    "dataSource": 0,
    "disableEmpGlobalFilter": 0,
    "isPre": 0,
    "dimensionAttrFields": [],
    "needFreezeCol": 1
  }
}
```

- 字段分析

|         所属          |              字段               | 说明                                                              |
| :-------------------: | :-----------------------------: | :---------------------------------------------------------------- |
|         Value         |             topNum              | 取前几的数据                                                      |
|         Value         |            chartType            | 图表类型（bar -> 柱状图）                                         |
|         Value         | dimensionFields, dimensionField | 维度数据                                                          |
|         Value         |             layout              | 样式展示                                                          |
|         Value         |          measureFields          | 指标值                                                            |
|         Value         |         isShowDimension         | 是否展示维度值                                                    |
|         Value         |           chartStatus           | 图表状态（0表示正常，1-表示有问题）                               |
|         Value         |              reqId              | 这个是用于查数据的时候，加载数据的requestId                       |
| Value.dimensionFields |         fieldID,fieldId         | 字段id                                                            |
| Value.dimensionFields |        parentDbFieldName        | 父级数据库字段名称（上面的例子是日期月，腹父级字段是日期字段）    |
| Value.dimensionFields |       fieldName,fieldType       | 1: 字段名称（展示在页面上维度上名称）,2: 字段类型（date属于日期） |
| Value.dimensionFields |           dbFieldName           | 数据库字段名称                                                    |
| Value.dimensionFields |            dbObjName            | 数据库对象名称                                                    |
|  Value.measureFields  |            aggrType             | 聚合类型（2 - 求和）                                              |
|  Value.measureFields  |           aggrTypeMap           | 聚合类型Map，表示这个字段应该做数组下面的这几种聚合类型           |
|  Value.measureFields  |           isShowValue           | 是否展示value值                                                   |
|  Value.measureFields  |              type               | 指标类型（number，数字类型）                                      |


---