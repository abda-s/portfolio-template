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
    body: "<p><strong>SUMO2025</strong> competition entry — team of three (Hatem Al-Muweadea, Ra'ad Alshawabkeh, Yanal Mehar). Role: chassis structural design and FEA validation. <strong>Tools:</strong> SolidWorks, SolidWorks Static FEA, laser cutting.</p>"
  - number: '02'
    heading: Engineering Problem
    body: <p>Sumo competition rules reward maximum pushing force within a fixed mass and size limit — the chassis must be simultaneously light and structurally survive repeated impact loading against an opposing robot.</p>
  - number: '03'
    heading: Requirements
    body: |-
      <ul>
      <li>Lightweight, strong, compact — the three explicit design pillars</li>
      <li>Must integrate 4× drive motors and battery / electronics within a fixed footprint</li>
      <li>Must survive dynamic push loading without permanent deformation</li>
      </ul>
  - number: '04'
    heading: Concept & CAD Development
    body: <p>Ribbed / gusseted bracket geometry was selected over a solid plate to cut mass while retaining bending stiffness at the load-bearing interface — visible as a triangulated web pattern in the front bracket CAD.</p>
  - number: '05'
    heading: Weight Budget
    body: |-
      <table class="datatable">
      <tr><th>Component</th><th>Mass</th></tr>
      <tr><td>Drive motors (4×)</td><td><b>2000 g</b> (500 g each)</td></tr>
      <tr><td>Electronics & battery</td><td><b>832 g</b></td></tr>
      <tr><td>Chassis</td><td><b>150 g — only 5% of total robot mass</b></td></tr>
      </table>
      <p>Keeping the chassis to 5% of total mass freed budget for motor torque and battery capacity — the two parameters that most directly determine competition performance.</p>
  - number: '06'
    heading: Simulation & Analysis
    body: |-
      <p><strong>Case 1 — Static:</strong> max von Mises stress 51.04 MPa; max displacement 0.0717 mm.</p>
      <p><strong>Case 2 — 30 N dynamic push load:</strong> <strong>min FOS = 1.8</strong>, confirming structural margin under a competition-representative impact force.</p>
  - number: '07'
    heading: Manufacturing Considerations
    body: <p>Laser-cut sheet chassis with bolted assembly for rapid rebuild between competition rounds — no adhesive joints, allowing fast disassembly for motor or battery swaps.</p>
  - number: '08'
    heading: Cost Breakdown
    body: <p>Full robot bill of materials totaled <strong>110.6 JD</strong>, itemized across drive motors, LiPo battery, chassis, blade attachment, and control electronics.</p>
  - number: '09'
    heading: Results Summary
    body: |-
      <table class="datatable">
      <tr><th>Metric</th><th>Result</th></tr>
      <tr><td>Max stress, static case</td><td><b>51.04 MPa</b></td></tr>
      <tr><td>Max displacement, static case</td><td><b>0.0717 mm</b></td></tr>
      <tr><td>Min FOS, 30 N dynamic case</td><td><b>1.8</b></td></tr>
      <tr><td>Chassis mass share</td><td><b>5%</b> of total robot mass</td></tr>
      <tr><td>Total build cost</td><td><b>110.6 JD</b></td></tr>
      </table>
  - number: '10'
    heading: Future Improvements
    body: |-
      <ul>
      <li>Move from static to transient / impact dynamic simulation to better represent actual collision loading</li>
      <li>Explore topology optimization on the bracket web pattern for further mass reduction at equal FOS</li>
      </ul>
---
