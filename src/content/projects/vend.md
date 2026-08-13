---
sheet: '01'
tag: Team Project · Mechatronics
title: Velvet Vend
subtitle: Cloud-connected smart vending prototype
result: Designed and manufactured an IoT-connected vending mechanism; diagnosed and resolved a control-board thermal failure via architecture migration.
published: true
order: 1
metrics:
  - value: 117.7 JD
    label: Total BOM
    placement: card
  - value: '800'
    label: Steps / rev, dispense
    placement: card
  - value: 0.156 mm
    label: Kerf compensation
    placement: card
  - value: 117.7 JD
    label: Total build cost
    placement: detail
  - value: 800-step
    label: Dispense resolution
    placement: detail
  - value: 0.156 mm
    label: Laser kerf comp.
    placement: detail
  - value: 0.2 mm
    label: FDM design clearance
    placement: detail
sections:
  - number: '01'
    heading: Overview
    body: |-
      <p>Team project, <strong>Advanced Manufacturing Technology</strong> unit, Al Hussein Technical University — 5-person team. Role: mechanical design lead — SolidWorks modeling, tolerance / DFM strategy, and mechanical assembly integration.</p>
      <p><strong>Tools:</strong> SolidWorks · Orca Slicer · FDM 3D printing · Laser cutting · ESP32 firmware integration (supporting role).</p>
  - number: '02'
    heading: Engineering Problem
    body: <p>Traditional vending machines operate as closed mechanical systems with no real-time inventory or performance feedback — leading to unmonitored stockouts and unplanned downtime. The objective was a low-cost, tabletop prototype that replaces this isolated architecture with an instrumented, cloud-connected dispensing system, without relying on injection-molded or CNC-machined production tooling.</p>
  - number: '03'
    heading: Requirements & Constraints
    body: |-
      <ul>
      <li>Reliable single-cycle product dispensing via spiral-drive mechanism</li>
      <li>Fabrication limited to laser cutting and FDM 3D printing — no tooling budget</li>
      <li>Modular lane design allowing maintenance without full teardown</li>
      <li>Integrated coin-based payment with real-time cloud inventory sync</li>
      <li>Target build cost under ~120 JD</li>
      </ul>
  - number: '04'
    heading: Concept Generation
    body: <p>Evaluated gravity-drop vs. spiral-drive dispensing. <strong>Spiral-drive was selected</strong> for dosing precision and compatibility with stepper-motor step control — a deterministic single-item release, versus gravity-drop's jam-prone unguided fall.</p>
  - number: '05'
    heading: Design Process & CAD Development
    body: '<p>Full assembly modeled in SolidWorks as a digital-first process to validate mechanical interactions before fabrication. Key subassemblies: the spiral drive coupler, the dovetail linear guide and slider mechanism, and the laser-cut chassis with self-locking tab-and-slot panels. The <strong>D-shaft coupler interface</strong> was chosen over set-screw retention to eliminate slip under torque spikes without introducing a loosening failure mode.</p>'
  - number: '06'
    heading: Engineering Calculations
    body: |-
      <ul>
      <li><strong>Kerf compensation:</strong> 0.156 mm offset applied in SolidWorks to guarantee interference-free, self-locking tab-and-slot panel assembly</li>
      <li><strong>Dispense resolution:</strong> NEMA 17 stepper at 800 steps / rotation, enabling precise partial-turn (180°–360°) product release control</li>
      </ul>
  - number: '07'
    heading: Material Selection
    body: |-
      <p><strong>PLA</strong> — standard structural and housing components (cost-effective, adequate stiffness for static loads).</p>
      <p><strong>PETG</strong> — spiral drive coupler specifically, selected over PLA for its higher toughness and resistance to torque-induced fatigue at the motor interface. This was a decision tied directly to an observed functional failure mode — PLA proved insufficiently tough at this interface during early testing — not a default assumption.</p>
  - number: '08'
    heading: Simulation & Analysis
    body: |-
      <p>This iteration was validated primarily through geometric / tolerance analysis and physical testing rather than formal FEA — reinforced with a <strong>3-wall perimeter print configuration</strong> on the coupler to increase load-bearing wall thickness at the highest-stress interface, based on observed early-iteration failures.</p>
      <div class="callout-box"><b>Framing note</b>This project demonstrates physical DFM iteration and failure-driven material selection rather than analytical depth — see the Airfoil Load Study for the FEA/CFD side of my process.</div>
  - number: '09'
    heading: Manufacturing Considerations
    body: |-
      <ul>
      <li>Laser-cut panels: 0.156 mm kerf-compensated tab-and-slot joinery — adhesive-free, self-locking assembly</li>
      <li>FDM parameters: 0.2 mm design clearance, 20% infill, 0.16–0.2 mm layer height, sliced in Orca Slicer</li>
      <li>DFM features: hexagonal fastener pockets for M3 nut anti-rotation, snap-fit modular lanes for hot-swap maintenance, dovetail joints for self-aligning linear motion</li>
      </ul>
  - number: '10'
    heading: Build & Assembly
    body: <p>Three-phase build. <strong>Phase 1 — Hardware:</strong> frame and dovetail rail installation, motor / coupler / spiral mounting with a secondary silicone bond at the coupler interface to absorb start-up torque spikes. <strong>Phase 2 — Wiring & firmware:</strong> shared ground architecture across ESP32, motor drivers, and coin acceptor to minimize signal noise. <strong>Phase 3 — Software:</strong> coin-pulse counting, dispense state machine, Wi-Fi cloud sync.</p>
  - number: '11'
    heading: Testing & Validation
    body: <p>Functional testing of coin acceptance, dispense accuracy, and cloud inventory sync. A <strong>hardware debounce circuit</strong> (bypass capacitor low-pass filter) was added to the coin-acceptor signal line after false-positive triggers were observed on the microcontroller interrupt line during initial testing. Live machine status and sales analytics validated end-to-end through the web dashboard.</p>
  - number: '12'
    heading: Results Summary
    body: |-
      <table class="datatable">
      <tr><th>Metric</th><th>Result</th></tr>
      <tr><td>Total build cost</td><td><b>117.7 JD</b></td></tr>
      <tr><td>Dispense actuation resolution</td><td><b>800 steps / rev</b> (NEMA 17)</td></tr>
      <tr><td>Chassis joinery</td><td>Adhesive-free, kerf-compensated tab-and-slot</td></tr>
      <tr><td>Control architecture</td><td>ESP32 IoT gateway, live cloud telemetry</td></tr>
      <tr><td>Manufacturing processes</td><td>Laser cutting + FDM (PLA / PETG)</td></tr>
      </table>
  - number: '13'
    heading: Challenges & Engineering Judgment
    body: |-
      <p>The original control board (<strong>MKS DLC32</strong>) sustained thermal damage from an uncontrolled power-supply transient that exceeded its logic-circuit tolerance. Root cause was isolated through diagnostic review to the PSU rather than the board itself. Rather than a like-for-like replacement, the control system was <strong>migrated to a standalone ESP32</strong> — decoupling logic control from the vulnerable integrated power rail, a deliberate architectural fix.</p>
      <p>Separately, when the primary matrix keypad failed, the input system was re-engineered under time pressure into a <strong>two-button multiplexed interface</strong>, requiring new state-machine firmware logic (index iterator + execution trigger) rather than a direct swap.</p>
  - number: '14'
    heading: Lessons Learned
    body: <p>Thermal / electrical margin needs to be designed in at the PSU-selection stage, not discovered through failure. PLA is unsuitable for any interface carrying repeated torque spikes without either wall-thickness reinforcement or a tougher material substitution.</p>
  - number: '15'
    heading: Future Improvements
    body: |-
      <ul>
      <li>Add optical / light-curtain sensing at the delivery chute for closed-loop dispense confirmation and automatic jam-clearing retry logic</li>
      <li>Upgrade structural rails to ABS or carbon-fiber-reinforced PETG to eliminate thermal warping in the dovetail tolerance zone</li>
      <li>Replace silicone-bonded coupler retention with a mechanical set-screw collar for serviceability</li>
      </ul>
---
