export const projects = [
  {
    slug: "heightfield-terrain-hda",
    title: "Heightfield Terrain HDA",
    subtitle: "地形侵蚀与 UE Landscape 材质层",
    eyebrow: "Houdini 21 / HeightField / UE Landscape",
    category: "Terrain Tool",
    image: "/assets/houdini/heightfield-terrain.png",
    video: "/assets/houdini/videos/heightfield-terrain.mp4",
    noteHref: "/assets/houdini/notes/heightfield_terrain_h21_v1.md",
    visual: {
      label: "TERRAIN HDA",
      hero: "HEIGHTFIELD / MASK LAYERS",
      flow: "noise -> erosion -> slope masks -> UE paint layers",
      slots: ["HeightField", "Erosion", "Layer Masks", "UE Material"],
    },
    scope:
      "在 Houdini 21 商业环境中重建可复用地形 HDA，把高度场、侵蚀层、坡度遮罩和 UE Landscape 材质层整理成可调流程。",
    tech: ["HeightField Noise", "Hydraulic Erosion", "Slope Feature Mask", "Landscape Paint Layers"],
    impact:
      "适合作为开放世界环境的地形底座，后续可以继续接 PCG 植被、水线、道路与镜头展示。",
    deliverables: [
      "Houdini HIP terrain test scene",
      "Commercial HeightField terrain HDA",
      "Chinese technical breakdown note",
    ],
    article: {
      intro:
        "这个项目重点不是单张地形图，而是把地形生成、侵蚀信息和 UE 材质层打包成一个可以反复调参的 HDA。它适合在作品集中展示从地形规则到引擎落地的链路。",
      sections: [
        {
          heading: "设计目标",
          items: [
            "用干净的 Houdini 商业工程重建地形工具，避免依赖不可发布的源场景。",
            "把噪声、侵蚀、坡度和材质层控制暴露到 HDA 面板，方便后续快速改地貌。",
            "输出 UE Landscape 可识别的材质层，让地形视觉和生态散布可以继续向下游连接。",
          ],
        },
        {
          heading: "技术方案",
          items: [
            "使用 HeightField 生成基础高度层，再通过侵蚀节点得到 flow、debris、sediment 等可读层。",
            "通过坡度与遮罩规则区分草地、岩石、泥土等区域，减少手工刷层的成本。",
            "在 HDA 中写入 UE 材质路径和 Landscape paint layer，保证 Houdini 到 UE 的输出语义明确。",
          ],
        },
      ],
    },
  },
  {
    slug: "medieval-fantasy-town-generator",
    title: "Medieval Fantasy Town Generator",
    subtitle: "中世纪奇幻城镇的模块化生成",
    eyebrow: "Houdini HDA / Modular Buildings / UE Instance Points",
    category: "Environment Generator",
    image: "/assets/houdini/portfolio/medieval-town.png",
    video: "/assets/houdini/videos/medieval-town.mp4",
    noteHref: "/assets/houdini/notes/medieval_fantasy_town_generator_v1.md",
    visual: {
      label: "TOWN GENERATOR",
      hero: "MODULAR TOWN / UE POINTS",
      flow: "terrain -> houses -> walls -> cathedral -> instances",
      slots: ["Terrain", "House Modules", "Wall Towers", "UE Points"],
    },
    scope:
      "从台地山体开始生成房屋、屋顶、城墙、塔楼和山顶大教堂，并输出带模块语义的 UE 实例点。",
    tech: ["Terraced Terrain", "Modular Buildings", "Wall & Tower Layout", "UE Instance Points"],
    impact:
      "把完整城镇拆成可控的地形、建筑和资源路径模块，适合作为 UE 环境 PCG 的场景级案例。",
    deliverables: [
      "Houdini medieval town generator HIP",
      "Modular house, roof, wall and tower outputs",
      "UE instance-point technical breakdown",
    ],
    article: {
      intro:
        "这个项目把中世纪奇幻城镇拆成可复用的地形、房屋、屋顶、城墙、塔楼和教堂模块，再通过统一的参数和实例点输出形成完整场景。",
      sections: [
        {
          heading: "设计目标",
          items: [
            "从台地山体和城镇半径开始控制整体布局，保持建筑群的空间层级。",
            "把房屋、屋顶、城墙、塔楼和大教堂拆成独立模块，方便替换资产。",
            "输出 UE 可识别的模块实例点和资源路径，为后续引擎落地预留接口。",
          ],
        },
        {
          heading: "技术方案",
          items: [
            "用 seed、town radius、terrace count 和 house count 控制城镇规模与随机变化。",
            "按房屋、屋顶、城墙、塔楼、尖塔和植被模块组织生成网络。",
            "通过 OUT_UNREAL_COMBINED 和 OUT_MODULE_INSTANCE_POINTS 检查完整预览与 UE 属性。",
          ],
        },
      ],
    },
  },
  {
    slug: "container-habitat-generator",
    title: "Container Habitat Generator",
    subtitle: "模块化箱体居住空间生成",
    eyebrow: "Houdini HDA / Modular Containers / Layout Rules / Karma Preview",
    category: "Environment Generator",
    image: "/assets/houdini/portfolio/container-habitat.png",
    video: "/assets/houdini/videos/container-habitat-modules.mp4",
    noteHref: "/assets/houdini/notes/container_habitat_generator.md",
    galleryImages: [
      {
        src: "/assets/houdini/portfolio/container-habitat-front-karma.png",
        caption: "Karma front render / module silhouette",
        alt: "Container habitat front Karma render",
      },
      {
        src: "/assets/houdini/portfolio/container-habitat-three-quarter-software.png",
        caption: "Software viewport / structural module check",
        alt: "Container habitat software viewport three-quarter render",
      },
      {
        src: "/assets/houdini/portfolio/container-habitat-front-software.png",
        caption: "Software viewport / front structure check",
        alt: "Container habitat software viewport front render",
      },
    ],
    visual: {
      label: "CONTAINER HABITAT",
      hero: "STACKED MODULES / WALKWAYS",
      flow: "layout rules -> modules -> platforms -> stairs -> supports",
      slots: ["Containers", "Walkways", "Railings", "Props"],
    },
    scope:
      "用 Houdini 生成可堆叠的箱体居住空间，并把箱体主体、通行结构、支撑系统和场景装饰拆成可单独检查的结构分支。",
    tech: ["Structure Split", "Support Adjustment", "Access Modules", "HDA Delivery"],
    impact:
      "把复杂空间从单一合并模型整理成清晰的模块交付：既能看整体构图，也能单独检查箱体、平台栏杆、支撑杆和地面装饰，方便后续材质替换、调试和 UE 落地。",
    deliverables: [
      "Container habitat generator HDA and HIP scene",
      "Karma and software viewport renders",
      "Module-split demo recording",
      "Node structure and delivery breakdown note",
    ],
    article: {
      intro:
        "这个项目从早期“箱体空间生成”继续整理成可交付的 Houdini HDA：整体仍是模块化箱体居住空间，但重点已经推进到结构分支、调试出口、支撑修正和交付包规范。它适合作为环境 TA / 工具向 TA 的案例，展示如何把复杂场景从一个可看的结果拆成可检查、可维护、可继续落地的工具输出。",
      sections: [
        {
          heading: "设计目标",
          items: [
            "保留堆叠箱体、平台栏杆、支撑杆、地面装饰和灯光材质层次，让整体轮廓在正面与三分之四视角下都可读。",
            "将场景按 container、access、support、dressing 等结构系统拆分，避免所有几何只作为一个不可维护的合并结果。",
            "在合并前保留各分支检查出口，让模块可以单独显示、微调、清理和验证，再统一输出最终几何。",
          ],
        },
        {
          heading: "技术方案",
          items: [
            "基础生成阶段由 HDA 内部逻辑创建箱体主体、平台、栏杆、梯子、支撑、地面装饰和相机灯光；SOP 网络只保留关键的分类、清理、调整和输出组织，减少维护时需要翻找的节点层级。",
            "结构分类依赖 primitive 级别的组件属性，把箱体壳体、通行结构、支撑系统和装饰物拆入不同分支；每个分支在合并前都有独立调整入口，便于只检查平台栏杆、只看支撑杆或只清理小道具。",
            "支撑系统单独缓存杆件上下边界，再做轻量的长度和朝中心偏移修正；这样能处理悬挑箱体下方支撑看起来脱节的问题，同时不把完整求解逻辑暴露成难维护的黑箱。",
            "Dressing 清理使用精确标记而不是大范围空间删除，目标是移除影响画面和交付检查的小物件，同时保留桶、草、旗帜、告示牌等仍能强化尺度和生活感的装饰。",
            "最终输出统一经过法线整理和结构合并，保留模块、组件、楼层、路线、支撑和材质相关属性，为后续材质替换、分层调试和 UE 侧二次处理预留接口。",
          ],
        },
      ],
    },
  },
  {
    slug: "industrial-ivy-generator",
    title: "Industrial Ivy Generator",
    subtitle: "建筑表面藤蔓、叶片实例与风摆属性",
    eyebrow: "Houdini 21 / Surface Growth / Wind Attributes / UE Instances",
    category: "Vegetation Tool",
    image: "/assets/houdini/portfolio/industrial-ivy.png",
    video: "/assets/houdini/videos/industrial-ivy.mp4",
    noteHref: "/assets/houdini/notes/ivy_h21_industrial_generator_v2_wind.md",
    visual: {
      label: "VEGETATION HDA",
      hero: "SURFACE IVY / WIND DATA",
      flow: "surface mask -> vine curves -> leaf points -> wind attributes",
      slots: ["Surface Mask", "Curve Mesh", "Leaf Points", "Wind Data"],
    },
    scope:
      "输入建筑表面或测试墙面后生成贴附藤蔓、闭合藤条 mesh 和叶片实例点，并写出 UE 可读取的实例路径、分层输出和风摆属性。",
    tech: ["Surface Growth Mask", "Closed Vine Mesh", "Leaf Instancing", "Wind Sway Attributes"],
    impact:
      "把墙面绿化从手摆资产整理成可调 HDA，用密度、叶片大小、低模预览和风摆参数控制覆盖效果，并为 UE 材质风和实例风预留数据。",
    deliverables: [
      "Houdini ivy generator clean test scene",
      "Industrial ivy generator v2 HDA",
      "Wind-sway and UE handoff breakdown note",
    ],
    article: {
      intro:
        "藤蔓工具的亮点在于它同时考虑了表面生长、UE 实例替换和风摆数据。它不是只输出一团植物，而是把藤条、叶片、调试 mask、连接线和风属性分开，让下游美术可以更清楚地接管。",
      sections: [
        {
          heading: "设计目标",
          items: [
            "输入建筑表面即可生成附着生长的藤蔓结构，没有输入时保留内置测试墙面。",
            "将藤条 mesh、叶片实例点和调试输出分层，方便在 Houdini 和 UE 中检查。",
            "为藤条与叶片写出风摆强度、相位和角色属性，便于 UE 侧继续做材质动画。",
          ],
        },
        {
          heading: "技术方案",
          items: [
            "使用表面 mask 控制可生长区域，再生成藤蔓连接曲线。",
            "藤蔓曲线闭合为 mesh，叶片则输出带 orient、up、pscale 和 unreal_instance 的实例点。",
            "通过 Wind Controls 控制整体摆动、叶片摆动倍率、枝梢摆动倍率、速度和扰动。",
          ],
        },
      ],
    },
  },
  {
    slug: "gnarly-trunk-hda",
    title: "Gnarly Trunk HDA",
    subtitle: "崎岖树干、纵向沟槽与可控轮廓",
    eyebrow: "Houdini HDA / Trunk Surface / Branch Mesh / Leaf Density",
    category: "Vegetation Detail",
    image: "/assets/houdini/portfolio/gnarly-trunk.png",
    video: "/assets/houdini/videos/gnarly-trunk.mp4",
    noteHref: "/assets/houdini/notes/tree_labs_branch_mianbao_trunk_v5.md",
    visual: {
      label: "TREE DETAIL HDA",
      hero: "GNARLY TRUNK / SURFACE CONTROL",
      flow: "trunk wander -> lobes -> grooves -> visible branches",
      slots: ["Wander", "Lobes", "Grooves", "Branch Radius"],
    },
    scope:
      "针对树干过于圆滑的问题重做 HDA，用主干蜿蜒、轮廓鼓包、纵向沟槽和可见树枝半径控制更自然的树形轮廓。",
    tech: ["Trunk Wander", "Lobe Strength", "Groove Depth", "Visible Branch Radius"],
    impact:
      "把“看起来更自然”拆成可调参数，方便美术在不同树形之间快速迭代。",
    deliverables: [
      "Houdini gnarly trunk test scene",
      "Gnarly trunk HDA",
      "Trunk surface control technical note",
    ],
    article: {
      intro:
        "这个项目是树工具的局部深化：它不追求新物种，而是解决树干轮廓太圆滑、表面缺少体积变化的问题。对作品集来说，它展示了你如何把视觉反馈拆成可控参数。",
      sections: [
        {
          heading: "设计目标",
          items: [
            "减少球状树结带来的不自然感，把粗糙感转移到主干路径、外轮廓和纵向沟槽。",
            "默认关闭时间轴驱动，让 HDA 拖入空场景后直接看到完整树。",
            "保留可选生长动画，便于和 Tree Growth HDA Pack 组合展示。",
          ],
        },
        {
          heading: "技术方案",
          items: [
            "使用 Trunk Wander 控制主干整体蜿蜒。",
            "通过 Lobe Strength 和 Groove Depth 调整大块轮廓变化与纵向纹理感。",
            "增加 Visible Branch Radius，方便直接控制可见树枝粗细。",
          ],
        },
      ],
    },
  },
  {
    slug: "visible-trunk-hda",
    title: "Visible Trunk HDA",
    subtitle: "可见树干实体、分枝连接与叶片布局",
    eyebrow: "Houdini HDA / Visible Trunk / Branch Mesh / UE Bake",
    category: "Vegetation Tool",
    image: "/assets/houdini/portfolio/visible-trunk.png",
    video: "/assets/houdini/videos/visible-trunk.mp4",
    noteHref: "/assets/houdini/notes/tree_labs_branch_visible_trunk_v4.md",
    visual: {
      label: "VISIBLE TRUNK HDA",
      hero: "TREE SHELL / BRANCH OUTPUT",
      flow: "rugged trunk -> branch mesh -> leaf points -> UE bake",
      slots: ["Trunk Shell", "Branch Mesh", "Leaf Points", "Bake Output"],
    },
    scope:
      "以可见树干实体为核心，结合闭合树干 shell、曲线转 mesh 的枝条和 connected maple 叶片，输出完整树体。",
    tech: ["Rugged Trunk Shell", "Curve-to-Mesh Branches", "Connected Maple Leaves", "Static UE Bake"],
    impact:
      "解决程序化树干过薄或只剩线框的问题，让树干、枝条和叶片在视口与后续 UE 处理中都保持可读。",
    deliverables: [
      "Tree Labs visible trunk V4 HIP",
      "Visible trunk HDA output",
      "Branch and leaf attachment technical note",
    ],
    article: {
      intro:
        "这个项目关注程序化树的可见实体与连接关系：先生成有体积的 rugged trunk，再将枝条转为 mesh，并把叶片稳定地连接到枝条中段。",
      sections: [
        {
          heading: "设计目标",
          items: [
            "让主干在视口中保持完整实体，而不是只显示细线或开放曲面。",
            "将枝条曲线转为可控 mesh，并保留叶片连接所需的方向与偏移。",
            "默认关闭时间轴驱动，优先提供可直接检查和烘焙的静态树体。",
          ],
        },
        {
          heading: "技术方案",
          items: [
            "通过 trunk surface radius、roughness、sides 和 rings 控制树干 shell。",
            "按 branch count、upper branch height 和 branch spread 组织分枝层级。",
            "使用 leaf density、leaf count 和 attach padding 控制叶片数量与连接质量。",
          ],
        },
      ],
    },
  },
  {
    slug: "snow-coverage-hda",
    title: "Snow Coverage HDA",
    subtitle: "厚积雪覆盖、边缘堆积与 UE 材质属性",
    eyebrow: "Houdini 21 / UE5.6 / Snow Mask / Material Attributes",
    category: "Surface Treatment",
    image: "/assets/houdini/portfolio/snow-coverage.png",
    video: "/assets/houdini/videos/snow-coverage.mp4",
    noteHref: "/assets/houdini/notes/snow_coverage_h21_ue56_v2.md",
    visual: {
      label: "SURFACE COVERAGE",
      hero: "THICK SNOW / EDGE LIP",
      flow: "mesh input -> slope mask -> snow cap -> UE material",
      slots: ["Slope Mask", "Powder Noise", "Overhang", "Material"],
    },
    scope:
      "输入任意 mesh 后生成上表面厚积雪、边缘堆积、粉雪噪声和可选下垂，并写入 UE 友好的材质属性。",
    tech: ["Slope Coverage", "Edge Buildup", "Powder Noise", "UE Snow Attributes"],
    impact:
      "把季节化资产处理封装成 HDA，适合对岩石、建筑和环境道具快速添加雪层变化。",
    deliverables: [
      "Thick snow coverage HDA",
      "Snow coverage technical breakdown note",
    ],
    article: {
      intro:
        "积雪覆盖 HDA 的目标是让环境资产快速获得统一但可控的季节化处理。它保留输入模型，同时额外生成雪层 geometry 和材质属性，便于进入 UE 继续调材质。",
      sections: [
        {
          heading: "设计目标",
          items: [
            "根据表面朝向和风向感生成厚雪覆盖，而不是简单套一个白色材质。",
            "保留边缘堆积、粉雪起伏和可选下垂，让雪层和模型边界有体积关系。",
            "将 snow_mask、snow_thickness 等属性写出，方便 UE 材质继续使用。",
          ],
        },
        {
          heading: "技术方案",
          items: [
            "输入 mesh 后计算可覆盖区域，生成独立雪层并默认保留源模型。",
            "通过厚度、覆盖强度、坡度起点、边缘堆积和噪声参数控制视觉结果。",
            "使用 Output View 在覆盖调试、雪层单独输出和生成点之间切换检查。",
          ],
        },
      ],
    },
  },
  {
    slug: "building-damage-vat",
    title: "Building Damage VAT HDA",
    subtitle: "可控建筑破坏、碎块属性与 UE VAT 准备",
    eyebrow: "Houdini HDA / Impact Mask / VAT / UE Debris",
    category: "FX Tool",
    image: "/assets/houdini/portfolio/building-damage.png",
    video: "/assets/houdini/videos/building-damage.mp4",
    noteHref: "/assets/houdini/notes/procedural_damage_building_vat_v7.md",
    visual: {
      label: "FX HDA",
      hero: "BUILDING DAMAGE / VAT READY",
      flow: "impact mask -> fracture zones -> animated mesh -> UE VAT",
      slots: ["Impact", "Pieces", "Pivots", "VAT"],
    },
    scope:
      "以建筑立面局部坍塌为目标，生成可控破坏区域、稳定 piece id、VAT-ready 输出和 UE 碎块实例点。",
    tech: ["Impact Mask", "Fracture Zone Attributes", "VAT-ready Mesh", "UE Debris Points"],
    impact:
      "将破坏效果包装成可复用 HDA，比单次模拟更容易进入 UE 验证和后续美术迭代。",
    deliverables: [
      "Houdini building damage prototype scene",
      "Building damage VAT HDA",
      "VAT-ready damage technical breakdown note",
    ],
    article: {
      intro:
        "这个项目选择了“可控程序化破坏 + VAT-ready 属性”的路线，而不是单纯追求一次性的爆炸模拟。它更适合作为 TA 工具案例：稳定、可调、能交给 UE 继续验证。",
      sections: [
        {
          heading: "设计目标",
          items: [
            "围绕建筑立面局部坍塌建立可读的破坏区域，而不是无语义的大爆炸。",
            "保留静态建筑代理、动态碎块、调试 mask、速度向量和裂缝曲线等分层输出。",
            "为 Labs Vertex Animation Textures 流程准备稳定的 piece id、pivot 和动画属性。",
          ],
        },
        {
          heading: "技术方案",
          items: [
            "使用 impact mask 区分破坏核心、过渡区域和保留外壳。",
            "输出当前帧动画网格、rest pose、静态建筑代理和 VAT bake mesh。",
            "为 UE 预留 debris instance points，后续可以替换成 Nanite 小碎块或其他资产。",
          ],
        },
      ],
    },
  },
];
