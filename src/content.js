export const profile = {
  name: "谢昭莹",
  englishName: "Zoey Xie",
  role: "UE5 PCG Technical Artist / Environment TA / Tools TA",
  email: "billdxie@foxmail.com",
  bilibili: "https://space.bilibili.com/28569775",
  githubPages: "https://zoey-billd.github.io",
  resumePdf: "https://github.com/zoey-billd/Portfolio/blob/main/Resume_Zoey_UE_TA.pdf",
  education: "广东外语外贸大学 · 计算机科学与技术 / 网络空间安全",
  summary:
    "计算机与网络安全背景转向技术美术，主攻 UE5.6 PCG 程序化环境、Houdini HDA 工具、Python 编辑器管线、材质与场景落地。擅长把美术目标拆成可验证的规则、Mask、Spline、点云过滤、资产筛选和参数面板，并用文档、版本管理和自动化脚本支撑迭代。",
};

export const stats = [
  { value: "PCG", label: "TA 方向项目", detail: "PCG / Houdini / Tools" },
  { value: "Graph", label: "PCG & HDA 节点整理", detail: "图结构分区与文档" },
  { value: "HDA", label: "HDA 参数封装", detail: "面向美术快速迭代" },
  { value: "Scene", label: "森林河谷展示切片", detail: "规则驱动环境生成" },
];

export const projects = [
  {
    title: "Procedural Forest Valley Tool",
    subtitle: "UE5.6 PCG 森林河谷生成切片",
    image: "/assets/project-forest.png",
    eyebrow: "PCG / Houdini HeightField / Material / Perforce",
    scope:
      "将开放世界环境目标收束为可验证的展示切片，用 Height、Slope、Wetness、Debris、Sediment、Flow 等 Mask 驱动生态分布。",
    tech: [
      "模块化 PCG Graph",
      "Spline / Difference 避让",
      "坡度与湿度密度过滤",
      "LayerType 植被规则",
    ],
    impact:
      "形成可回滚的 TA 迭代流程，清楚展示输入数据、生成规则、可控参数与最终画面之间的关系。",
  },
  {
    title: "CyberGlacier",
    subtitle: "UE5.6 PCG 冰川湖祭坛环境系统",
    image: "/assets/project-glacier.png",
    eyebrow: "PCG / Material / Render TA / Spline-driven Generation",
    scope:
      "围绕冰洞入口、浮冰裂缝、冰川层次、体积雾与镜头包装，构建写实奇幻环境的技术验证场景。",
    tech: [
      "分层 PCG 生成图",
      "可编辑 Spline 控形",
      "冰雪父材质与水 Shader",
      "资产成本与 Nanite 筛选",
    ],
    impact:
      "沉淀节点验证、材质 Override、软引用修复和高频资产控制文档，让视觉迭代更可追踪。",
  },
  {
    title: "FarmHouse Rect Prototype",
    subtitle: "PCG 建筑模块化生成原型",
    image: "/assets/project-farmhouse.png",
    eyebrow: "UE5 PCG / Blueprint / Procedural Building",
    scope:
      "制作矩形农舍 PCG 原型，用固定墙段、地基模块、屋顶、门窗与道具点验证建筑生成工具链。",
    tech: [
      "Create Points Grid",
      "外墙点掏空",
      "Pivot Offset 处理",
      "RandomSeed 参数化",
    ],
    impact:
      "按生成阶段整理节点并拆分功能分组，为道路、城镇、村庄类 PCG 工具打下可复用基础。",
  },
  {
    title: "Houdini Procedural Tools",
    subtitle: "藤蔓、枝蔓与地形 Mask 工具",
    image: "/assets/project-houdini.png",
    eyebrow: "Houdini / VEX / HDA / Solver / UE Bridge",
    scope:
      "开发 vine_generator HDA，并搭建 Houdini 到 UE5 的 Python TCP 桥接管线，实现资产导出、导入与关卡放置闭环。",
    tech: [
      "VDB / AO 遮罩",
      "Shortest Path 生长",
      "Ray 法线投射",
      "JSON 参数协议",
    ],
    impact:
      "把复杂 DCC 节点流封装为可调工具，降低维护成本，也更适合后续展示节点图、参数面板和录屏。",
  },
];

export const strengths = [
  {
    title: "规则到画面",
    text: "能把地形、Spline、Mask、点云过滤和资产规则拆成可验证的生成流程。",
  },
  {
    title: "工具产品意识",
    text: "关注参数暴露、默认值、动作白名单、版本回滚和面向美术的可读流程。",
  },
  {
    title: "DCC 到 UE 链路",
    text: "理解 Houdini HDA、Python 导入、UE Editor Utility、PCG Graph 与资产落地的连接点。",
  },
  {
    title: "技术文档与交付",
    text: "有安全与咨询背景，习惯保留证据、整理节点说明、沉淀问题复盘和交付记录。",
  },
];

export const skills = [
  "Unreal Engine 5.6",
  "PCG Graph",
  "Blueprint",
  "Editor Utility Widget",
  "Houdini HDA",
  "VEX / Solver",
  "HeightField Masks",
  "Python Automation",
  "JSON Tool Protocol",
  "Perforce / Git",
  "HLSL / GLSL",
  "Substance / Blender",
];
