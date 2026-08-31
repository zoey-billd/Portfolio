export const projects = [
  {
    slug: "pcg-forest-framework",
    title: "PCG Forest Framework",
    subtitle: "UE5 PCG 森林框架",
    eyebrow: "UE5 PCG / Forest Layout / Biome Rules / Work in Progress",
    category: "Environment PCG",
    status: "Framework Placeholder",
    visual: {
      label: "PCG FOREST",
      hero: "BIOME FRAMEWORK / FOREST RULES",
      flow: "landscape input -> biome masks -> scatter rules -> validation",
      slots: ["PCG Graph", "Biome Mask", "Scatter Rules", "Validation"],
    },
    scope:
      "先展示森林 PCG 的作品框架占位，后续补充完整截图、录屏和技术文档。",
    tech: ["UE5 PCG", "Biome Rules", "Scatter Filters", "Landscape Masks"],
    impact:
      "作为主页第一优先级项目预留位置，后续集中展示森林生成、密度控制、生态分区和性能检查。",
    deliverables: [
      "PCG forest framework placeholder",
      "Screenshots and process recording to be added",
      "Technical breakdown to be added",
    ],
    article: {
      intro:
        "这个项目正在制作中，目前先作为 PCG 森林方向的框架占位。后续会补充最终截图、录屏、参数说明和技术方案。",
      sections: [
        {
          heading: "规划方向",
          items: [
            "围绕 UE5 PCG 搭建森林生态分区、地形适配和多层散布规则。",
            "重点展示可读的生成逻辑，而不是单纯堆叠植被资产数量。",
            "后续补充截图、录屏和文档后，再替换为完整项目展示。",
          ],
        },
      ],
    },
  },
  {
    slug: "container-habitat-generator",
    title: "Modular Cover & Traversal Generator",
    subtitle: "模块化掩体与攀爬结构生成",
    eyebrow: "Houdini HDA / Cover Layout / Traversal Routes / Modular Structure",
    category: "Environment Generator",
    image: "/assets/houdini/portfolio/container-habitat.png",
    video: "/assets/houdini/videos/container-habitat-modules.mp4",
    noteHref: "/assets/houdini/notes/container_habitat_generator.md",
    galleryImages: [
      {
        src: "/assets/houdini/portfolio/container-habitat-front-karma.png",
        caption: "Front render / cover and traversal silhouette",
        alt: "Modular cover and traversal structure front render",
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
      label: "COVER / TRAVERSAL",
      hero: "STACKED COVER / CLIMBABLE ROUTES",
      flow: "cover modules -> height tiers -> traversal access -> support pass",
      slots: ["Cover Modules", "Access Routes", "Height Tiers", "Supports"],
    },
    scope:
      "以模块化箱体为基础生成可进入、可攀爬、可作掩护的垂直场景结构，并将平台、梯子、栏杆和支撑组织成可检查的空间系统。",
    tech: ["Cover Layout", "Traversal Routes", "Height Tiers", "HDA Delivery"],
    impact:
      "把箱体堆叠从单纯造型转成具有遮挡关系和垂直通行逻辑的环境节点，同时保留模块化检查和后续 UE 落地空间。",
    deliverables: [
      "Modular cover and traversal HDA / HIP scene",
      "Hero and front structure renders",
      "Module-split demo recording",
      "Node structure and delivery breakdown note",
    ],
    article: {
      intro:
        "这个项目把标准箱体重新包装成可进入、可攀爬、可提供遮挡的垂直环境结构。重点不是堆出一个复杂外形，而是让不同高度的平台、梯子、栏杆和支撑之间形成可读的空间关系，并通过 Houdini HDA 保留后续迭代的入口。",
      sections: [
        {
          heading: "设计目标",
          items: [
            "让箱体错位、悬挑和层级变化同时服务于遮挡、观察和攀爬路线，避免结构只停留在装饰性的堆叠。",
            "让平台、梯子、栏杆和支撑形成连续的垂直通行线索，使镜头能快速读出可进入区域和高度变化。",
            "保留箱体、通行、支撑和装饰的独立检查入口，方便在不同构图和玩法需求之间继续迭代。",
          ],
        },
        {
          heading: "技术方案",
          items: [
            "基础生成阶段围绕箱体层级和可达区域组织平台、梯子、栏杆与支撑；HDA 内部保留参数入口，外部 SOP 主要负责分类、检查、清理和交付组织。",
            "结构分类依赖组件语义把箱体壳体、遮挡面、通行结构和支撑系统分开，让画面检查可以从整体轮廓切换到路线、节点或局部受力关系。",
            "通行结构会根据相邻高度和空间间距保留可读的连接线索，再结合局部错位控制路线的节奏；具体布局不固定为单一模板，便于适配不同场景构图。",
            "悬挑部分单独进入支撑检查，重点观察支撑是否落地、是否与箱体边界呼应，以及平台下方是否出现穿插或悬空的视觉断点。",
            "最终输出保留模块、楼层、路线、支撑和材质相关属性，为后续材质替换、分层调试与 UE 侧二次处理预留接口，但不把完整生成配方公开为照抄式步骤。",
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
  {
    slug: "industrial-ivy-generator",
    title: "Industrial Ivy Generator",
    subtitle: "建筑表面藤蔓、叶片实例与风摆属性",
    eyebrow: "Houdini 21 / Surface Growth / Wind Attributes / UE Instances",
    category: "Vegetation Tool",
    homeSection: "technical-study",
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
    homeSection: "technical-study",
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
    homeSection: "technical-study",
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
];
