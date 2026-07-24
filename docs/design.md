# Design — 个人网站设计说明

## 页面区块与浏览顺序
1. **导航栏** — 固定在顶部，含 5 个锚点链接
2. **Hero** — 首屏全屏，展示姓名、定位、行动按钮
3. **About** — 个人简介文字 + 信息卡片（姓名、城市、学校等）
4. **Skills** — 6 宫格技能卡片
5. **Projects** — 纵向排列的项目卡片列表
6. **Contact** — GitHub 和 Email 联系按钮
7. **Footer** — 版权信息

浏览顺序为自上而下的单页滚动。

## 颜色方案（简约学术风）
- 主色：`#2563eb`（蓝色）— 按钮、链接、强调元素
- 辅色：`#7c3aed`（紫色）— 渐变装饰、分割线
- 背景：`#f8f9fa`（浅灰）— 页面主背景；`#fff` — 内容卡片背景
- 文字：`#1e293b`（深灰）— 标题；`#475569`（中灰）— 正文；`#64748b`（浅灰）— 辅助文字
- Hero 背景：`linear-gradient(135deg, #eff6ff, #dbeafe)` — 淡蓝渐变

## 字体
- 字体族：`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`
- 字号层级：Hero 标题 2.8rem → 区块标题 2rem → 卡片标题 1.1rem → 正文 1rem → 辅助文字 0.8-0.9rem

## 桌面端要求
- 最大内容宽度 1100px，居中
- 导航水平排列
- About 区块左右两栏布局
- Skills 三列网格
- 足够的留白和呼吸感

## 移动端要求
- 导航折叠为汉堡菜单
- About 区块改为单列
- Skills 改为 2 列（平板）/ 1 列（手机）
- Project 卡片头部改为纵向堆叠
- Contact 按钮改为垂直排列
- 所有文字确保不溢出、不遮挡

## 关键文件负责内容
| 文件 | 职责 |
|------|------|
| index.html | 页面结构与内容 |
| css/style.css | 全部样式与响应式规则 |
| js/main.js | 移动端导航交互 |
| docs/prd.md | 产品需求定义 |
| docs/design.md | 设计规格说明 |
| docs/checklist.md | 可验证验收清单 |
| report/final-report.md | 最终项目报告 |
| README.md | 项目说明与使用指引 |

## 保留与修改
- 本项目不使用现成模板，从零构建静态站点
- 保留内容：所有区块均按个人真实信息填充
- 修改：可根据后续教师模板进行迁移

## 图片和外部素材
- 头像：使用首字母占位，后续可替换为真实照片
- 图标：Font Awesome 6.5（CDN 引用，免费使用）
- 无其他第三方素材依赖
