---
sheet: '04'
tag: Fluid Mechanics · Energy
title: Pelton Turbine
subtitle: Hydro-electric generation rig
thumb: ''
result: Built and instrumented a small-scale Pelton turbine generator, quantifying real conversion efficiency against calculated hydraulic power input.
published: true
order: 4
metrics:
  - value: 25.6%
    label: Conversion efficiency
    placement: card
  - value: 3.76 W
    label: Hydraulic power in
    placement: card
  - value: 11.49 L/min
    label: Measured flow rate
    placement: card
  - value: 25.6%
    label: Overall efficiency
    placement: detail
  - value: 3.76 W
    label: Hydraulic power
    placement: detail
  - value: 0.962 W
    label: Electrical power out
    placement: detail
  - value: 2 m
    label: Head
    placement: detail
sections:
  - number: '01'
    heading: Overview
    body: Fluid Mechanics course project — team of four (Ra'ad Alshawabkeh, Zain Aldeen Hussein, Oan Alassaf, Ahmad Alqaimary). **Tools:** 3D-printed turbine runner, NEMA 17 stepper as generator, rectifier/regulator circuit, multimeter instrumentation.
    table: null
    callout: null
  - number: '02'
    heading: Engineering Problem
    body: Demonstrate and quantify hydraulic-to-electrical energy conversion using a mostly 3D-printed, low-cost turbine-generator system — and measure real efficiency rather than assuming it.
    table: null
    callout: null
  - number: '03'
    heading: System Design
    body: 3D-printed Pelton runner driven by a water jet. A **NEMA 17 stepper motor used in reverse as a generator** feeds a bridge rectifier + 2200 µF smoothing capacitor + 5V regulator for stable DC output.
    table: null
    callout: null
  - number: '04'
    heading: Governing Calculations
    body: |-
      - Flow rate measured volumetrically: 500 mL in 2.61 s → **11.49 L/min**
      - Head: **2 m**
      - Hydraulic power: P = ρgQH ≈ **3.76 W**
    table: null
    callout: null
  - number: '05'
    heading: Construction & Testing
    body: 'Four-step build: turbine assembly and mounting, motor-to-shaft connection, circuit wiring, and load testing with an LED and multimeter to confirm live output before formal measurement.'
    table: null
    callout: null
  - number: '06'
    heading: Measured Results
    body: 'Output measured directly under load: **37 V, 26 mA → 0.962 W electrical power.**'
    table:
      columnOneHeader: Parameter
      columnTwoHeader: Value
      rows:
        - label: Flow rate (Q)
          value: '**11.49 L/min**'
        - label: Head (H)
          value: '**2 m**'
        - label: Hydraulic power (P in)
          value: '**3.76 W**'
        - label: Voltage (V)
          value: '**37 V**'
        - label: Current (I)
          value: '**26 mA**'
        - label: Electrical power (P out)
          value: '**0.962 W**'
        - label: Efficiency (η)
          value: '**25.6%**'
    callout: null
  - number: '07'
    heading: Engineering Interpretation
    body: η = P electrical / P hydraulic = 0.962 W / 3.76 W = **25.6%**. Efficiency loss attributed to unoptimized bucket geometry, rectifier diode forward-voltage drop, and the absence of a gear stage to match turbine RPM against the generator's efficient induction range.
    table: null
    callout: null
  - number: '08'
    heading: Results Summary
    body: ''
    table:
      columnOneHeader: Metric
      columnTwoHeader: Result
      rows:
        - label: Overall conversion efficiency
          value: '**25.6%**'
        - label: Hydraulic power input
          value: '**3.76 W**'
        - label: Electrical power output
          value: '**0.962 W**'
    callout: null
  - number: '09'
    heading: Future Improvements
    body: |-
      - Increase available head / flow to raise hydraulic power input
      - Replace basic bridge rectifier with a lower-forward-drop Schottky configuration
      - Add a gear-up stage between turbine and generator shaft to raise induced EMF
    table: null
    callout: null
---
