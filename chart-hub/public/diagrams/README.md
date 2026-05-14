# Diagram Kit

46 editorial diagram types, each rebuilt as a **single-file React + Tailwind + TypeScript + SVG**
component, with an English README and a PNG preview per type.

## Layout

```
D:\diagram-kit
├─ architecture\   ArchitectureDiagram.tsx   README.md   preview.png
├─ bar\             BarDiagram.tsx             README.md   preview.png
├─ ...
└─ waterfall\       WaterfallChart.tsx         README.md   preview.png
```

Each folder is standalone: copy the `.tsx` into any React project, import it, and it renders.
No chart library, no data files, no external CSS. Fonts (Geist / Geist Mono / Instrument Serif)
are loaded automatically from Google Fonts, with safe fallbacks.

## The 46 types

| Diagram | File | What it is |
| ------- | ---- | ---------- |
| [Architecture Diagram](architecture/) | `ArchitectureDiagram.tsx` | System-level architecture: components, connections, and entry points at a glance. |
| [Bar Chart](bar/) | `BarDiagram.tsx` | Compare discrete quantities across categories or time intervals. |
| [Beeswarm Plot](beeswarm/) | `BeeswarmPlot.tsx` | Every data point sits on one shared axis; vertical spread is packing only. |
| [Bubble Chart](bubble/) | `BubbleChart.tsx` | Three numeric dimensions: x, y, and bubble area. |
| [Bump Chart](bump/) | `BumpChart.tsx` | Show rank changes over time. |
| [Data Flow Diagram](data-flow/) | `DataFlowDiagram.tsx` | Role-scoped analytics pipeline. |
| [Data Lake Architecture](datalake/) | `DataLakeArchitecture.tsx` | End-to-end open data lake stack. |
| [Database Schema Diagram](db-schema/) | `DbSchemaDiagram.tsx` | Tables, columns, foreign keys, and constraints. |
| [Dependency Graph](dependency/) | `DependencyGraph.tsx` | Module dependency ranking with fan-in and cycles. |
| [Deployment Diagram](deployment/) | `DeploymentDiagram.tsx` | Where each service runs: edge, cluster, and data zones. |
| [Data Platform Integration](dp-integration/) | `DataPlatformIntegration.tsx` | Integration topology for a generic data platform. |
| [Access / Permission Matrix](dp-security-matrix/) | `AccessMatrix.tsx` | Role x component access at a glance. |
| [Entity-Relationship Diagram](er/) | `ErDiagram.tsx` | Entities and their relationships. |
| [Fishbone (Ishikawa) Diagram](fishbone/) | `FishboneDiagram.tsx` | Root-cause analysis across cause categories. |
| [Flowchart](flowchart/) | `Flowchart.tsx` | Decisions, branches, and outcomes. |
| [Gantt Chart](gantt/) | `GanttChart.tsx` | Work items on a shared schedule. |
| [High-Level Architecture](high-level/) | `HighLevelArchitecture.tsx` | End-to-end stack overview in one banded diagram. |
| [IT Landscape / Current-State Map](it-state/) | `ItLandscapeDiagram.tsx` | What systems exist today, and how they hand off. |
| [User Journey Map](journey/) | `UserJourneyMap.tsx` | Stages, actions, touchpoints, and sentiment. |
| [Kanban Board](kanban/) | `KanbanBoard.tsx` | Work in progress across columns, with WIP limits. |
| [Layered Stack](layers/) | `LayeredStack.tsx` | Stack layers with one focal layer. |
| [Line Chart](line/) | `LineChart.tsx` | Trends over time across series. |
| [Loop / Cycle Diagram](loop/) | `LoopDiagram.tsx` | A cyclic process with a central shared state. |
| [Medallion Architecture](medallion/) | `MedallionArchitecture.tsx` | Raw to refined data tiers. |
| [Nested Containers](nested/) | `NestedContainers.tsx` | Hierarchy as nested boxes. |
| [Org Chart](org-chart/) | `OrgChart.tsx` | Reporting and routing structure. |
| [Polar Chart](polar/) | `PolarChart.tsx` | Radial categories on a percentage scale. |
| [Process Diagram](process/) | `ProcessDiagram.tsx` | A process across owning teams. |
| [Pyramid Diagram](pyramid/) | `PyramidDiagram.tsx` | Ordered by cadence and leverage. |
| [Quadrant Matrix](quadrant/) | `QuadrantMatrix.tsx` | 2x2 prioritization. |
| [Radar Chart](radar/) | `RadarChart.tsx` | Multi-dimensional capability comparison. |
| [Ridgeline Plot](ridgeline/) | `RidgelinePlot.tsx` | Distributions side by side on one shared amplitude scale. |
| [Sankey Diagram](sankey/) | `SankeyDiagram.tsx` | Flow volume splits and merges. |
| [Scatter Plot](scatter/) | `ScatterPlot.tsx` | Two metrics per entity, quadrant read. |
| [Sequence Diagram](sequence/) | `SequenceDiagram.tsx` | Message order between participants. |
| [Slopegraph](slopegraph/) | `Slopegraph.tsx` | Before / after per category on one shared scale. |
| [State Machine](state/) | `StateMachine.tsx` | States, transitions, rejection and revision. |
| [User Story Map](story-map/) | `UserStoryMap.tsx` | Activities, steps, and release slices. |
| [Swimlane Diagram](swimlane/) | `SwimlaneDiagram.tsx` | A workflow across roles. |
| [Timeline](timeline/) | `Timeline.tsx` | Milestones in chronological order. |
| [Tree Diagram](tree/) | `TreeDiagram.tsx` | A taxonomy that branches. |
| [Treemap](treemap/) | `Treemap.tsx` | Area is the value; hierarchy is the nesting. |
| [UML Class Diagram](uml-class/) | `UmlClassDiagram.tsx` | Classes, interfaces, and relations. |
| [Venn Diagram](venn/) | `VennDiagram.tsx` | Set intersections. |
| [Wardley Map](wardley/) | `WardleyMap.tsx` | Value chain vs. evolution. |
| [Waterfall Chart](waterfall/) | `WaterfallChart.tsx` | A running-total bridge between two numbers. |

## Source

Adapted from [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)
(MIT License). All diagrams are self-contained inline SVGs; only the packaging
(React component, props, docs) is added here.
