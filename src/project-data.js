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
      "先展示森林 PCG 的工程框架占位，后续补充环境输入、生态规则、验证截图和技术文档。",
    tech: ["UE5 PCG", "Input Contracts", "Scatter Filters", "Landscape Masks"],
    impact:
      "作为主页第一优先级项目预留位置，后续集中展示规则分层、密度控制、生态分区和性能验证。",
    deliverables: [
      "PCG forest framework placeholder",
      "Screenshots and process recording to be added",
      "Technical breakdown to be added",
    ],
    article: {
      intro:
        "这个项目正在制作中，目前先作为 PCG 森林方向的工程框架占位。后续将补充输入约束、规则分层、验证记录和交付说明。",
      sections: [
        {
          heading: "规划方向",
          items: [
            "围绕 UE5 PCG 搭建森林生态分区、地形适配和多层散布规则，并明确输入输出边界。",
            "重点展示规则如何被检查、调参和复用，而不是单纯堆叠植被资产数量。",
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
        "这个项目把标准箱体重新包装成可进入、可攀爬、可提供遮挡的垂直环境结构。重点不是堆出一个复杂外形，而是将空间需求拆成模块、连接关系和可检查输出，并通过 Houdini HDA 保留后续迭代的入口。",
      sections: [
        {
          heading: "设计目标",
          items: [
            "让箱体错位、悬挑和层级变化同时服务于遮挡、观察和攀爬路线，避免结构只停留在装饰性的堆叠。",
            "让平台、梯子、栏杆和支撑形成连续的垂直通行线索，使镜头能快速读出可进入区域和高度变化。",
            "保留箱体、通行、支撑和装饰的独立检查入口，方便在不同构图和关卡需求之间继续迭代。",
          ],
        },
        {
          heading: "技术方案",
          items: [
            "基础生成阶段围绕箱体层级和可达区域组织平台、梯子、栏杆与支撑；HDA 内部保留参数入口，外部 SOP 主要负责分类、检查、清理和交付组织。",
            "结构分类依赖组件语义把箱体壳体、遮挡面、通行结构和支撑系统分开，让画面检查可以从整体轮廓切换到路线、节点或局部受力关系。",
            "通行结构会根据相邻高度和空间间距保留可读的连接线索，再结合局部错位控制路线的节奏；布局参数保持开放，便于适配不同场景构图。",
            "悬挑部分单独进入支撑检查，重点观察支撑是否落地、是否与箱体边界呼应，以及平台下方是否出现穿插或悬空的视觉断点。",
            "最终输出保留模块、楼层、路线、支撑和材质相关属性，为后续材质替换、分层调试与 UE 侧二次处理预留接口；公开说明聚焦工程判断，不展开完整生成配方。",
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
      "围绕建筑立面局部破坏建立可控区域、稳定 piece id、VAT-ready 输出和 UE 碎块实例点，重点验证数据能否稳定交给下游。",
    tech: ["Impact Mask", "Fracture Zone Attributes", "VAT-ready Mesh", "UE Debris Points"],
    impact:
      "将一次性破坏模拟整理成有明确输出层级的 HDA，便于在 UE 验证、替换资产和复用同一套控制逻辑。",
    deliverables: [
      "Houdini building damage prototype scene",
      "Building damage VAT HDA",
      "VAT-ready damage technical breakdown note",
    ],
    article: {
      intro:
        "这个项目选择“可控程序化破坏 + VAT-ready 属性”的路线，关注的是破坏区域、碎块身份和下游输出是否稳定，而不是单次模拟的偶然效果。它更适合作为可复用 TA 工具案例。",
      sections: [
        {
          heading: "设计目标",
          items: [
            "围绕建筑立面局部坍塌建立可读的破坏区域，而不是无语义的大爆炸。",
            "保留静态建筑代理、动态碎块、调试 mask、速度向量和裂缝曲线等分层输出，便于定位问题。",
            "为 Labs Vertex Animation Textures 流程准备稳定的 piece id、pivot 和动画属性。",
          ],
        },
        {
          heading: "技术方案",
          items: [
            "使用 impact mask 区分破坏核心、过渡区域和保留外壳，并让区域变化可以被复查。",
            "按静态代理、动画网格、rest pose 和 VAT bake mesh 组织输出，减少下游重新整理的成本。",
            "为 UE 预留带语义的 debris instance points，后续可替换碎块资产而不改动上游结构。",
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
      "输入建筑表面或测试墙面后生成贴附藤蔓、闭合藤条 mesh 和叶片实例点，并输出 UE 可读取的实例路径、分层结果与风摆属性。",
    tech: ["Surface Growth Mask", "Closed Vine Mesh", "Leaf Instancing", "Wind Sway Attributes"],
    impact:
      "把墙面绿化从手摆资产整理成可调 HDA，以密度、叶片大小和风摆参数控制覆盖结果，并通过属性把变化交给 UE。",
    deliverables: [
      "Houdini ivy generator clean test scene",
      "Industrial ivy generator v2 HDA",
      "Wind-sway and UE handoff breakdown note",
    ],
    article: {
      intro:
        "藤蔓工具把表面生长、UE 实例替换和风摆数据放进同一个交付链路。输出不只是一团植物，而是将藤条、叶片、调试 mask、连接线和风属性分开，方便下游接管。",
      sections: [
        {
          heading: "设计目标",
          items: [
            "以建筑表面作为输入，生成附着生长的藤蔓结构；没有输入时使用内置测试墙面保持流程可验证。",
            "将藤条 mesh、叶片实例点和调试输出分层，分别服务几何检查、资产替换和问题定位。",
            "为藤条与叶片写出风摆强度、相位和角色属性，保留 UE 侧继续驱动材质动画的接口。",
          ],
        },
        {
          heading: "技术方案",
          items: [
            "使用表面 mask 控制可生长区域，再生成藤蔓连接曲线并保留检查依据。",
            "藤蔓曲线闭合为 mesh，叶片输出带 orient、up、pscale 和 unreal_instance 的实例点。",
            "通过 Wind Controls 管理整体摆动、叶片倍率、枝梢倍率、速度和扰动，避免将动画写死在模型里。",
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
      "针对树干轮廓过于圆滑的问题重做 HDA，把主干路径、体积变化、纵向沟槽和枝条半径拆成可复用控制项。",
    tech: ["Trunk Wander", "Lobe Strength", "Groove Depth", "Visible Branch Radius"],
    impact:
      "把“看起来更自然”拆成可观察、可调节的形体参数，方便美术在不同树形之间快速迭代。",
    deliverables: [
      "Houdini gnarly trunk test scene",
      "Gnarly trunk HDA",
      "Trunk surface control technical note",
    ],
    article: {
      intro:
        "这个项目是树工具的局部深化：它不追求新物种，而是把树干轮廓太圆滑、表面缺少体积变化的问题拆成可控参数和独立输出。",
      sections: [
        {
          heading: "设计目标",
          items: [
            "减少球状树结带来的不自然感，把形体变化分配到主干路径、外轮廓和纵向沟槽。",
            "默认关闭时间轴驱动，让 HDA 拖入空场景后直接得到稳定预览，降低检查成本。",
            "保留可选生长动画，为后续与其他树木工具组合时预留接口。",
          ],
        },
        {
          heading: "技术方案",
          items: [
            "使用 Trunk Wander 控制主干整体蜿蜒，并将路径变化独立于表面细节。",
            "通过 Lobe Strength 和 Groove Depth 调整大块轮廓变化与纵向纹理感。",
            "使用 Visible Branch Radius 管理可见树枝粗细，避免枝条输出只依赖随机结果。",
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
      "输入任意 mesh 后生成上表面厚积雪、边缘堆积、粉雪噪声和可选下垂，并将覆盖结果整理为 UE 可读取的材质属性。",
    tech: ["Slope Coverage", "Edge Buildup", "Powder Noise", "UE Snow Attributes"],
    impact:
      "把季节化资产处理封装成 HDA，让岩石、建筑和环境道具可以沿用同一套覆盖逻辑并独立调整。",
    deliverables: [
      "Thick snow coverage HDA",
      "Snow coverage technical breakdown note",
    ],
    article: {
      intro:
        "积雪覆盖 HDA 关注输入模型、雪层几何和材质属性之间的分工。它保留源模型，同时输出独立雪层与可交给 UE 的属性，便于批量处理不同资产。",
      sections: [
        {
          heading: "设计目标",
          items: [
            "根据表面朝向和风向感生成厚雪覆盖，将覆盖范围从材质表现前移到几何与属性层。",
            "保留边缘堆积、粉雪起伏和可选下垂，让雪层和模型边界保持可检查的体积关系。",
            "将 snow_mask、snow_thickness 等属性写出，为 UE 材质和后续筛选保留接口。",
          ],
        },
        {
          heading: "技术方案",
          items: [
            "输入 mesh 后计算可覆盖区域，生成独立雪层并默认保留源模型，便于对照验证。",
            "通过厚度、覆盖强度、坡度起点、边缘堆积和噪声参数控制结果，并保持源模型不被破坏。",
            "使用 Output View 在覆盖调试、雪层单独输出和生成点之间切换，缩短问题定位路径。",
          ],
        },
      ],
    },
  },
];
