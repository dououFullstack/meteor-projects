// ***************************************************************
// BIZPLANS COLLECTION
// ***************************************************************
// Create my collectionFS
Pictures = new FS.Collection("pictures", {
  stores: [new FS.Store.GridFS("pictures", {})]
});

Projects = new Meteor.Collection('projects');

ProjectSchema = new SimpleSchema({
  comName: {
    type: String,
    label: "公司名称",
    max: 100,
    optional: false
  },
  proName: {
    type: String,
    label: "项目名称",
    max: 100,
    optional: true,
  },
  logo: {
    type: String,
    optional: true,
    label: '上传logo',
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Pictures',
        previewTemplate: 'myFilePreviewForProject',
        // label: '选择照片',
      }
    }
  },
  desc: {
    type: String,
    label: "项目简介",
    max: 1000,
    optional: false,
    autoform: {
       rows: 5
    }
  },
  descPic: {
    type: String,
    optional: true,
    label: '上传项目简介相关图片',
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Pictures',
        previewTemplate: 'myFilePreviewForBizPlan',
        // label: '选择照片',
      }
    }
  },
  bizModel: {
    type: String,
    label: "商业模式",
    max: 1000,
    optional: true,
    autoform: {
       rows: 5
    }
  },
  competency: {
    type: String,
    label: "核心竞争力",
    max: 1000,
    optional: true,
    autoform: {
       rows: 5
    }
  },
  competencyPic: {
    type: String,
    optional: true,
    label: '上传核心竞争力相关图片',
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Pictures',
        previewTemplate: 'myFilePreviewForBizPlan',
        // label: '选择照片',
      }
    }
  },
  team: {
    type: String,
    label: "团队",
    max: 1000,
    optional: true,
    autoform: {
       rows: 5
    }
  },
  teamPic: {
    type: String,
    optional: true,
    label: '上传相关图片',
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Pictures',
        previewTemplate: 'myFilePreviewForBizPlan',
        // label: '选择照片',
      }
    }
  },
  fund: {
    type: String,
    label: "融资额度",
    max: 1000,
    optional: true,
  },
  email: {
    type: String,
    label: "邮箱地址",
    max: 120,
    optional: true
  },
  phone: {
    type: String,
    label: "联系电话",
    max: 120,
    optional: true
  },
  types: {
    type: [String],
    optional: false,
    label: "请选择项目类型",
    autoform: {
      type: "select-checkbox-inline",
      options: function () {
        return [
          {label: "互联网与信息技术", value: "互联网与信息技术"},
          {label: "科技产品", value: "科技产品"},
          {label: "智能硬件", value: "智能硬件"},
          {label: "穿戴设备", value: "穿戴设备"},
          {label: "快速消费", value: "快速消费"},
          {label: "SaaS/PaaS工具", value: "SaaS/PaaS工具"},
          {label: "医疗健康", value: "医疗健康"},
          {label: "人工智能（机器人、无人机）", value: '人工智能（机器人、无人机）'},
          {label: "智能家居、商业智能/BI", value: "智能家居、商业智能/BI"},
          {label: "互联网与信息技术", value: "互联网与信息技术"},
          {label: "消费电子", value: "消费电子"},
          {label: "新材料", value: "新材料"},
          {label: "教育", value: "教育"},
          {label: "文化创意", value: "文化创意"},
          {label: "新媒体", value: "新媒体"},
          {label: "体育", value: "体育"},
          {label: "其他", value: "其他"},
        ];
      }
    }
  },
  time: {
    type: Date,
    label: "时间",
    optional: true,
    autoform: {
      afFieldInput: {
        type: "datetime-local"
      }
    }
  },
  rounds: {
    type: String,
    label: "投资轮次",
    max: 1000,
    optional: true,
  },
  add: {
    type: String,
    label: "公司地址",
    max: 120,
    optional: true
  },
  teamSize: {
    type: String,
    label: "团队规模",
    max: 120,
    optional: true
  },
  createdAt: {
    type: Date,
    denyUpdate: false,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    }
  },
  updatedAt: {
    type: Date,
    optional: true,
    denyInsert: true,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    }
  }
});

// Must remember to attach the schema to the collection
Projects.attachSchema(ProjectSchema);

// Custom validation messages with SimpleSchema. Remove if not needed
Projects.simpleSchema().messages({
  required: "[label] is required",
  minString: "[label] must be at least [min] characters",
  maxString: "[label] cannot exceed [max] characters",
  minNumber: "[label] must be at least [min]",
  maxNumber: "[label] cannot exceed [max]",
  minDate: "[label] must be on or before [min]",
  maxDate: "[label] cannot be after [max]",
  minCount: "You must specify at least [minCount] values",
  maxCount: "You cannot specify more than [maxCount] values",
  noDecimal: "[label] must be an integer",
  notAllowed: "[value] is not an allowed value",
  expectedString: "[label] must be a string",
  expectedNumber: "[label] must be a number",
  expectedBoolean: "[label] must be a boolean",
  expectedArray: "[label] must be an array",
  expectedObject: "[label] must be an object",
  expectedConstructor: "[label] must be a [type]",
  regEx: [
  {msg: "[label] failed regular expression validation"},
  {exp: SimpleSchema.RegEx.Email, msg: "[label] must be a valid e-mail address"},
  {exp: SimpleSchema.RegEx.WeakEmail, msg: "[label] must be a valid e-mail address"},
  {exp: SimpleSchema.RegEx.Domain, msg: "[label] must be a valid domain"},
  {exp: SimpleSchema.RegEx.WeakDomain, msg: "[label] must be a valid domain"},
  {exp: SimpleSchema.RegEx.IP, msg: "[label] must be a valid IPv4 or IPv6 address"},
  {exp: SimpleSchema.RegEx.IPv4, msg: "[label] must be a valid IPv4 address"},
  {exp: SimpleSchema.RegEx.IPv6, msg: "[label] must be a valid IPv6 address"},
  {exp: SimpleSchema.RegEx.Url, msg: "[label] must be a valid URL"},
  {exp: SimpleSchema.RegEx.Id, msg: "[label] must be a valid alphanumeric ID"}
  ],
  keyNotInSchema: "[label] is not allowed by the schema"
});
