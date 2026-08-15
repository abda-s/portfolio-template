---
sheet: '03'
tag: Structural Design · Competition
title: Push Me Maybe
subtitle: Structurally optimized sumo robot chassis
thumb: /images/uploads/1785790924711-w9jjqq.png
result: Designed a low-mass, high-strength chassis for competition impact loading — validated across two static FEA load cases.
published: true
order: 3
metrics:
  - value: '1.8'
    label: Min. FOS, 30N load case
    placement: card
  - value: 150 g
    label: Chassis — 5% of robot mass
    placement: card
  - value: 110.6 JD
    label: Full robot BOM
    placement: card
  - value: '1.8'
    label: Min. FOS, 30 N case
    placement: detail
  - value: 150 g
    label: Chassis mass
    placement: detail
  - value: 5%
    label: Of total robot mass
    placement: detail
  - value: 0.0717 mm
    label: Max static displacement
    placement: detail
sections:
  - number: '01'
    heading: Overview
    body: '**SUMO2025** competition entry — team of three (Hatem Al-Muweadea, Ra''ad Alshawabkeh, Yanal Mehar). Role: chassis structural design and FEA validation. **Tools:** SolidWorks, SolidWorks Static FEA, laser cutting.'
  - number: '02'
    heading: Engineering Problem
    body: Sumo competition rules reward maximum pushing force within a fixed mass and size limit — the chassis must be simultaneously light and structurally survive repeated impact loading against an opposing robot.
  - number: '03'
    heading: Requirements
    body: |-
      - Lightweight, strong, compact — the three explicit design pillars
      - Must integrate 4× drive motors and battery / electronics within a fixed footprint
      - Must survive dynamic push loading without permanent deformation
  - number: '04'
    heading: Concept & CAD Development
    body: Ribbed / gusseted bracket geometry was selected over a solid plate to cut mass while retaining bending stiffness at the load-bearing interface — visible as a triangulated web pattern in the front bracket CAD.
  - number: '05'
    heading: Weight Budget
    body: Keeping the chassis to 5% of total mass freed budget for motor torque and battery capacity — the two parameters that most directly determine competition performance.
    table:
      columnOneHeader: Component
      columnTwoHeader: Mass
      rows:
        - label: Drive motors (4×)
          value: '**2000 g** (500 g each)'
        - label: Electronics & battery
          value: '**832 g**'
        - label: Chassis
          value: '**150 g — only 5% of total robot mass**'
  - number: '06'
    heading: Simulation & Analysis
    body: |-
      **Case 1 — Static:** max von Mises stress 51.04 MPa; max displacement 0.0717 mm.

      **Case 2 — 30 N dynamic push load:** **min FOS = 1.8**, confirming structural margin under a competition-representative impact force.
  - number: '07'
    heading: Manufacturing Considerations
    body: Laser-cut sheet chassis with bolted assembly for rapid rebuild between competition rounds — no adhesive joints, allowing fast disassembly for motor or battery swaps.
  - number: '08'
    heading: Cost Breakdown
    body: Full robot bill of materials totaled **110.6 JD**, itemized across drive motors, LiPo battery, chassis, blade attachment, and control electronics.
  - number: '09'
    heading: Results Summary
    table:
      columnOneHeader: Metric
      columnTwoHeader: Result
      rows:
        - label: Max stress, static case
          value: '**51.04 MPa**'
        - label: Max displacement, static case
          value: '**0.0717 mm**'
        - label: Min FOS, 30 N dynamic case
          value: '**1.8**'
        - label: Chassis mass share
          value: '**5%** of total robot mass'
        - label: Total build cost
          value: '**110.6 JD**'
  - number: '10'
    heading: Future Improvements
    body: |-
      - Move from static to transient / impact dynamic simulation to better represent actual collision loading
      - Explore topology optimization on the bracket web pattern for further mass reduction at equal FOS
---
