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
          heading: "技术流程",
          items: [
            "使用 HeightField 生成基础高度层，再通过侵蚀节点得到 flow、debris、sediment 等可读层。",
            "通过坡度与遮罩规则区分草地、岩石、泥土等区域，减少手工刷层的成本。",
            "在 HDA 中写入 UE 材质路径和 Landscape paint layer，保证 Houdini 到 UE 的输出语义明确。",
          ],
        },
        {
          heading: "作品集展示方式",
          items: [
            "首页卡片展示地形预览图和技术栈摘要。",
            "文章页可以继续补充高度层、侵蚀层、材质层和 UE 结果的对照图。",
            "后续如果有录屏，可以展示参数变化如何影响地貌和材质分布。",
          ],
        },
      ],
    },
  },
  {
    slug: "spiral-landform-prototype",
    title: "PCG Spiral Landform Prototype",
    subtitle: "螺旋地貌、PBR 材质与体积雾场景",
    eyebrow: "Houdini SOP / Karma / PBR / Environment Prototype",
    category: "Environment Prototype",
    image: "/assets/houdini/portfolio/spiral-landform.png",
    video: "/assets/houdini/videos/spiral-landform.mp4",
    noteHref: "/assets/houdini/notes/youku_pcg_spiral_landform_prototype_v7_pbr_fog_house.md",
    visual: {
      label: "LANDSCAPE STUDY",
      hero: "SPIRAL LANDFORM / FOG PASS",
      flow: "terrain forms -> material slots -> fog volume -> house modules",
      slots: ["SOP Layout", "PBR Slots", "Karma Fog", "House Kit"],
    },
    scope:
      "以螺旋地貌为视觉中心，整合 PBR 占位材质、Karma 体积雾和程序化房屋模块，形成可继续替换资产的环境原型。",
    tech: ["Procedural Landform", "Karma Fog Box", "PBR Material Slots", "Modular House HDAs"],
    impact:
      "把场景构图、材质槽和模块化资产入口提前搭好，后续可以替换成 Fab/Megascans 资源并继续做镜头包装。",
    deliverables: [
      "Houdini spiral landform prototype scene",
      "Procedural landform component HDAs",
      "PBR/fog/house pass technical note",
    ],
    article: {
      intro:
        "这个项目更偏环境概念验证：它把地貌形态、材质槽、雾效和房屋细节先组合成一个可演进的场景框架。对 TA 作品集来说，它适合展示你如何把视觉目标拆成可替换、可扩展的系统。",
      sections: [
        {
          heading: "设计目标",
          items: [
            "围绕螺旋地貌建立一个有明确视觉中心的程序化场景。",
            "预留草地、岩石、道路、屋顶、木材等 PBR 材质槽，方便后续替换真实资源。",
            "加入体积雾和房屋细节，让技术原型更接近最终镜头，而不是单独节点测试。",
          ],
        },
        {
          heading: "技术流程",
          items: [
            "使用 SOP 组织地貌、道路、房屋、树和石墙等模块。",
            "在 Karma 中建立快速预览和高质量渲染入口，便于对比构图和气氛。",
            "将场景模块导出为 HDA，为后续 UE 或更复杂的 Houdini 场景复用做准备。",
          ],
        },
        {
          heading: "作品集展示方式",
          items: [
            "展示当前 Karma 预览图作为项目封面。",
            "文章中建议补充材质槽、雾效开关、房屋模块和地貌层级的局部截图。",
            "后续可把它升级为“从 Houdini 原型到 UE 场景”的完整案例。",
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
          heading: "技术流程",
          items: [
            "用 seed、town radius、terrace count 和 house count 控制城镇规模与随机变化。",
            "按房屋、屋顶、城墙、塔楼、尖塔和植被模块组织生成网络。",
            "通过 OUT_UNREAL_COMBINED 和 OUT_MODULE_INSTANCE_POINTS 检查完整预览与 UE 属性。",
          ],
        },
        {
          heading: "作品集展示方式",
          items: [
            "首页卡片展示城镇整体预览图，详情页用录屏补充参数化生成过程。",
            "文章中强调地形、建筑模块和 UE 实例点之间的层级关系。",
            "后续可以补充 UE Houdini Engine 实例化结果和资源替换前后对照。",
          ],
        },
      ],
    },
  },
  {
    slug: "industrial-ivy-generator",
    title: "Industrial Ivy Generator",
    subtitle: "建筑表面藤蔓、叶片实例与风摆属性",
    eyebrow: "Houdini HDA / Vines / Instancing / Wind Attributes",
    category: "Vegetation Tool",
    image: "/assets/houdini/portfolio/industrial-ivy.png",
    video: "/assets/houdini/videos/industrial-ivy.mp4",
    noteHref: "/assets/houdini/notes/ivy_h21_industrial_generator_v1.md",
    visual: {
      label: "VEGETATION HDA",
      hero: "IVY GENERATOR / WIND SWAY",
      flow: "surface input -> growth mask -> vine curves -> UE leaf points",
      slots: ["Surface Mask", "Curve Mesh", "Leaf Points", "Wind Data"],
    },
    scope:
      "输入建筑表面后生成藤蔓曲线、闭合藤蔓 mesh 和叶片实例点，并写出 UE 可读取的实例路径与风摆属性。",
    tech: ["Surface Growth Mask", "Curve-to-Mesh", "Leaf Instancing", "Wind Sway Attributes"],
    impact:
      "把植物覆盖从手摆资产整理成可控工具，并为 UE 材质风、实例风和分层输出预留数据。",
    deliverables: [
      "Houdini ivy generator test scene",
      "Industrial ivy generator HDA",
      "Wind-sway technical breakdown note",
    ],
    article: {
      intro:
        "藤蔓工具的亮点在于它同时考虑了生成形态、UE 实例替换和风摆数据。它不是只输出一团植物，而是把藤条、叶片和调试层分开，让下游美术可以更清楚地接管。",
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
          heading: "技术流程",
          items: [
            "使用表面 mask 控制可生长区域，再生成藤蔓连接曲线。",
            "藤蔓曲线闭合为 mesh，叶片则输出带 orient、up、pscale 和 unreal_instance 的实例点。",
            "通过 Wind Controls 控制整体摆动、叶片摆动倍率、枝梢摆动倍率、速度和扰动。",
          ],
        },
        {
          heading: "作品集展示方式",
          items: [
            "后续建议补藤蔓 mask、连接线调试、叶片点和 UE 替换实例的四连图。",
            "如果能录一段帧预览或 UE 材质风效果，会比单张截图更能体现工具价值。",
            "文章中保留输出节点说明，方便面试官理解这个 HDA 如何交付给引擎。",
          ],
        },
      ],
    },
  },
  {
    slug: "tree-growth-hda-pack",
    title: "Baobab Growth HDA",
    subtitle: "猴面包树生长、枝条展开与叶片延迟",
    eyebrow: "Houdini HDA / Tree Growth / Timeline / UE Bake",
    category: "Vegetation Toolset",
    image: "/assets/houdini/portfolio/baobab-growth.png",
    video: "/assets/houdini/videos/baobab-growth.mp4",
    noteHref: "/assets/houdini/notes/billd_tree_baobab_growth_v3_rebuilt.md",
    visual: {
      label: "BAOBAB GROWTH HDA",
      hero: "GROWTH TIMELINE / VISIBLE TREE",
      flow: "trunk -> branches -> leaves -> bake-ready mesh",
      slots: ["Growth", "Branches", "Leaves", "Bake"],
    },
    scope:
      "围绕猴面包树的瓶状树干、主枝、次枝和程序化叶片建立生长展示版本，并保留静态 bake 的使用方式。",
    tech: ["Growth Progress", "Timeline Driver", "Branch Delay", "Leaf Density Control"],
    impact:
      "让树木工具不只停留在最终模型，而是可以展示从树干、枝条到叶片的生成过程和面向 UE 的最终落地。",
    deliverables: [
      "Baobab growth HDA",
      "Growth timeline preview branch",
      "Static UE bake-ready tree output",
      "Tree growth technical breakdown note",
    ],
    article: {
      intro:
        "这组树工具适合用来展示程序化植被的“过程感”：树干先出现，枝条随后展开，最后生成叶片。它同时保留静态输出，便于在 UE 中 bake 成可用资产。",
      sections: [
        {
          heading: "设计目标",
          items: [
            "保留已有树形结构，同时加强上层枝条，让树冠轮廓更完整。",
            "加入时间轴驱动，让生成过程可以作为作品集动效展示。",
            "保持叶柄锚定在枝条表面，避免叶片像漂浮在树枝外侧。",
          ],
        },
        {
          heading: "技术流程",
          items: [
            "通过 Growth Progress 控制整体生长，必要时可切换为时间轴驱动。",
            "用 Branch Growth Delay 和 Leaf Growth Delay 控制树干、枝条、叶片的出现顺序。",
            "通过叶片密度和上限参数控制性能，并保留静态 bake 的工作流。",
          ],
        },
        {
          heading: "作品集展示方式",
          items: [
            "卡片使用树工具预览图，文章页说明三种 HDA 的定位。",
            "后续建议补帧序列 GIF 或短视频，展示从空场景到完整树的变化。",
            "可以把参数面板截图放在文章里，突出 TA 工具可控性。",
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
          heading: "技术流程",
          items: [
            "使用 Trunk Wander 控制主干整体蜿蜒。",
            "通过 Lobe Strength 和 Groove Depth 调整大块轮廓变化与纵向纹理感。",
            "增加 Visible Branch Radius，方便直接控制可见树枝粗细。",
          ],
        },
        {
          heading: "作品集展示方式",
          items: [
            "后续建议补一组参数对比图：圆滑树干、沟槽增强、枝条加粗。",
            "文章页可以继续加入 HDA 参数面板截图，说明每个参数对应的视觉变化。",
            "这个项目可以和树生长包互相链接，形成植被工具章节。",
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
          heading: "技术流程",
          items: [
            "通过 trunk surface radius、roughness、sides 和 rings 控制树干 shell。",
            "按 branch count、upper branch height 和 branch spread 组织分枝层级。",
            "使用 leaf density、leaf count 和 attach padding 控制叶片数量与连接质量。",
          ],
        },
        {
          heading: "作品集展示方式",
          items: [
            "卡片展示完整树体，录屏展示从树干到枝条和叶片输出的流程。",
            "详情页强调实体树干、枝条 mesh 和叶片实例点的分层检查。",
            "后续可补充参数对比图，展示粗糙度、分枝密度和叶片数量的变化。",
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
    noteHref: "/assets/houdini/notes/snow_coverage_h21_ue56_v1.md",
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
          heading: "技术流程",
          items: [
            "输入 mesh 后计算可覆盖区域，生成独立雪层并默认保留源模型。",
            "通过厚度、覆盖强度、坡度起点、边缘堆积和噪声参数控制视觉结果。",
            "使用 Output View 在覆盖调试、雪层单独输出和生成点之间切换检查。",
          ],
        },
        {
          heading: "作品集展示方式",
          items: [
            "卡片展示雪层预览图，文章强调从输入 mesh 到 UE 材质属性的链路。",
            "后续建议补充同一资产的原始状态、覆盖 debug、最终材质三张对比图。",
            "可以与苔藓覆盖 HDA 并列成一组“资产老化/环境覆盖工具”。",
          ],
        },
      ],
    },
  },
  {
    slug: "moss-coverage-hda",
    title: "Moss Coverage HDA",
    subtitle: "缝隙、阴影与潮湿区域的苔藓覆盖",
    eyebrow: "Houdini 21 / UE5.6 / Moss Mask / Instancing",
    category: "Surface Treatment",
    image: "/assets/houdini/portfolio/moss-coverage.png",
    video: "/assets/houdini/videos/moss-coverage.mp4",
    noteHref: "/assets/houdini/notes/moss_coverage_h21_ue56_v1.md",
    visual: {
      label: "SURFACE COVERAGE",
      hero: "MOSS MASK / FUZZ POINTS",
      flow: "mesh input -> cavity mask -> moss carpet -> UE instances",
      slots: ["Cavity", "Shade", "Fuzz", "Material"],
    },
    scope:
      "基于缝隙、边缘、阴影、竖向面和低湿区域生成薄苔藓层，并可输出苔藓实例点与 UE 材质属性。",
    tech: ["Cavity Mask", "Edge/Shade Boost", "Moss Carpet Geometry", "Instance Points"],
    impact:
      "让石头、墙面和道具可以快速获得局部老化与潮湿感，同时保留可调的 mask 与实例化入口。",
    deliverables: [
      "Houdini moss coverage test scene",
      "Moss coverage HDA",
      "Moss mask technical breakdown note",
    ],
    article: {
      intro:
        "苔藓 HDA 和积雪 HDA 是同一类思路：不是单纯改材质，而是让覆盖层具备几何厚度、mask 逻辑和 UE 可读属性。它适合展示资产老化和环境融合能力。",
      sections: [
        {
          heading: "设计目标",
          items: [
            "从输入 mesh 自动分析适合生长苔藓的位置，例如缝隙、边缘和阴影区域。",
            "保留源模型，同时输出苔藓层和可选实例点。",
            "写入 moss_mask、moss_height、moss_roughness 等属性，支持 UE 材质继续调控。",
          ],
        },
        {
          heading: "技术流程",
          items: [
            "通过 cavity、edge、shade、vertical surface 和 moisture 逻辑组合苔藓 mask。",
            "将苔藓作为薄 carpet geometry 输出，并可附加细节实例点。",
            "使用 UE Moss Material 和 UE Moss Instance Mesh 参数对接引擎资源。",
          ],
        },
        {
          heading: "作品集展示方式",
          items: [
            "卡片展示苔藓预览图，文章突出 mask 生成逻辑和 UE 属性。",
            "后续建议补一张 mask debug 图和一张材质最终效果图。",
            "和 Snow Coverage HDA 一起展示时，可以体现同一工具框架如何适配不同覆盖物。",
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
          heading: "技术流程",
          items: [
            "使用 impact mask 区分破坏核心、过渡区域和保留外壳。",
            "输出当前帧动画网格、rest pose、静态建筑代理和 VAT bake mesh。",
            "为 UE 预留 debris instance points，后续可以替换成 Nanite 小碎块或其他资产。",
          ],
        },
        {
          heading: "作品集展示方式",
          items: [
            "卡片展示破坏预览图，文章说明 HDA 输出层级和 VAT 接口。",
            "后续建议补充 rest mesh、impact mask、VAT ROP、UE 材质结果四个关键画面。",
            "可以作为 FX/环境破坏方向的独立项目，也可以接入更大的关卡场景。",
          ],
        },
      ],
    },
  },
];
