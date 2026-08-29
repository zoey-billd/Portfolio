export const projects = [
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
