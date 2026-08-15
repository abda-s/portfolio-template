---
sheet: '01'
tag: Team Project · Mechatronics
title: Velvet Vend
subtitle: Cloud-connected smart vending prototype
thumb: ''
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
      Team project, **Advanced Manufacturing Technology** unit, Al Hussein Technical University — 5-person team. Role: mechanical design lead — SolidWorks modeling, tolerance / DFM strategy, and mechanical assembly integration.

      **Tools:** SolidWorks · Orca Slicer · FDM 3D printing · Laser cutting · ESP32 firmware integration (supporting role).
    table: null
    callout: null
  - number: '02'
    heading: Engineering Problem
    body: Traditional vending machines operate as closed mechanical systems with no real-time inventory or performance feedback — leading to unmonitored stockouts and unplanned downtime. The objective was a low-cost, tabletop prototype that replaces this isolated architecture with an instrumented, cloud-connected dispensing system, without relying on injection-molded or CNC-machined production tooling.
    table: null
    callout: null
  - number: '03'
    heading: Requirements & Constraints
    body: |-
      - Reliable single-cycle product dispensing via spiral-drive mechanism
      - Fabrication limited to laser cutting and FDM 3D printing — no tooling budget
      - Modular lane design allowing maintenance without full teardown
      - Integrated coin-based payment with real-time cloud inventory sync
      - Target build cost under ~120 JD
    table: null
    callout: null
  - number: '04'
    heading: Concept Generation
    body: Evaluated gravity-drop vs. spiral-drive dispensing. **Spiral-drive was selected** for dosing precision and compatibility with stepper-motor step control — a deterministic single-item release, versus gravity-drop's jam-prone unguided fall.
    table: null
    callout: null
  - number: '05'
    heading: Design Process & CAD Development
    body: 'Full assembly modeled in SolidWorks as a digital-first process to validate mechanical interactions before fabrication. Key subassemblies: the spiral drive coupler, the dovetail linear guide and slider mechanism, and the laser-cut chassis with self-locking tab-and-slot panels. The **D-shaft coupler interface** was chosen over set-screw retention to eliminate slip under torque spikes without introducing a loosening failure mode.'
    table: null
    callout: null
  - number: '06'
    heading: Engineering Calculations
    body: |-
      - **Kerf compensation:** 0.156 mm offset applied in SolidWorks to guarantee interference-free, self-locking tab-and-slot panel assembly
      - **Dispense resolution:** NEMA 17 stepper at 800 steps / rotation, enabling precise partial-turn (180°–360°) product release control
    table: null
    callout: null
  - number: '07'
    heading: Material Selection
    body: |-
      **PLA** — standard structural and housing components (cost-effective, adequate stiffness for static loads).

      **PETG** — spiral drive coupler specifically, selected over PLA for its higher toughness and resistance to torque-induced fatigue at the motor interface. This was a decision tied directly to an observed functional failure mode — PLA proved insufficiently tough at this interface during early testing — not a default assumption.
    table: null
    callout: null
  - number: '08'
    heading: Simulation & Analysis
    body: This iteration was validated primarily through geometric / tolerance analysis and physical testing rather than formal FEA — reinforced with a **3-wall perimeter print configuration** on the coupler to increase load-bearing wall thickness at the highest-stress interface, based on observed early-iteration failures.
    table: null
    callout:
      title: Framing note
      text: This project demonstrates physical DFM iteration and failure-driven material selection rather than analytical depth — see the Airfoil Load Study for the FEA/CFD side of my process.
  - number: '09'
    heading: Manufacturing Considerations
    body: |-
      - Laser-cut panels: 0.156 mm kerf-compensated tab-and-slot joinery — adhesive-free, self-locking assembly
      - FDM parameters: 0.2 mm design clearance, 20% infill, 0.16–0.2 mm layer height, sliced in Orca Slicer
      - DFM features: hexagonal fastener pockets for M3 nut anti-rotation, snap-fit modular lanes for hot-swap maintenance, dovetail joints for self-aligning linear motion
    table: null
    callout: null
  - number: '10'
    heading: Build & Assembly
    body: Three-phase build. **Phase 1 — Hardware:** frame and dovetail rail installation, motor / coupler / spiral mounting with a secondary silicone bond at the coupler interface to absorb start-up torque spikes. **Phase 2 — Wiring & firmware:** shared ground architecture across ESP32, motor drivers, and coin acceptor to minimize signal noise. **Phase 3 — Software:** coin-pulse counting, dispense state machine, Wi-Fi cloud sync.
    table: null
    callout: null
  - number: '11'
    heading: Testing & Validation
    body: Functional testing of coin acceptance, dispense accuracy, and cloud inventory sync. A **hardware debounce circuit** (bypass capacitor low-pass filter) was added to the coin-acceptor signal line after false-positive triggers were observed on the microcontroller interrupt line during initial testing. Live machine status and sales analytics validated end-to-end through the web dashboard.
    table: null
    callout: null
  - number: '12'
    heading: Results Summary
    body: ''
    table:
      columnOneHeader: Metric
      columnTwoHeader: Result
      rows:
        - label: Total build cost
          value: '**117.7 JD**'
        - label: Dispense actuation resolution
          value: '**800 steps / rev** (NEMA 17)'
        - label: Chassis joinery
          value: Adhesive-free, kerf-compensated tab-and-slot
        - label: Control architecture
          value: ESP32 IoT gateway, live cloud telemetry
        - label: Manufacturing processes
          value: Laser cutting + FDM (PLA / PETG)
    callout: null
  - number: '13'
    heading: Challenges & Engineering Judgment
    body: |-
      The original control board (**MKS DLC32**) sustained thermal damage from an uncontrolled power-supply transient that exceeded its logic-circuit tolerance. Root cause was isolated through diagnostic review to the PSU rather than the board itself. Rather than a like-for-like replacement, the control system was **migrated to a standalone ESP32** — decoupling logic control from the vulnerable integrated power rail, a deliberate architectural fix.

      Separately, when the primary matrix keypad failed, the input system was re-engineered under time pressure into a **two-button multiplexed interface**, requiring new state-machine firmware logic (index iterator + execution trigger) rather than a direct swap.
    table: null
    callout: null
  - number: '14'
    heading: Lessons Learned
    body: Thermal / electrical margin needs to be designed in at the PSU-selection stage, not discovered through failure. PLA is unsuitable for any interface carrying repeated torque spikes without either wall-thickness reinforcement or a tougher material substitution.
    table: null
    callout: null
  - number: '15'
    heading: Future Improvements
    body: |-
      - Add optical / light-curtain sensing at the delivery chute for closed-loop dispense confirmation and automatic jam-clearing retry logic
      - Upgrade structural rails to ABS or carbon-fiber-reinforced PETG to eliminate thermal warping in the dovetail tolerance zone
      - Replace silicone-bonded coupler retention with a mechanical set-screw collar for serviceability
    table: null
    callout: null
---
