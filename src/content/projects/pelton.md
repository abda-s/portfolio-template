---
sheet: '04'
tag: Fluid Mechanics · Energy
title: Pelton Turbine
subtitle: Hydro-electric generation rig
thumb: /images/uploads/1785749218608-1ry1rb.png
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
    body: <p>Fluid Mechanics course project — team of four (Ra'ad Alshawabkeh, Zain Aldeen Hussein, Oan Alassaf, Ahmad Alqaimary). <strong>Tools:</strong> 3D-printed turbine runner, NEMA 17 stepper as generator, rectifier/regulator circuit, multimeter instrumentation.</p>
  - number: '02'
    heading: Engineering Problem
    body: <p>Demonstrate and quantify hydraulic-to-electrical energy conversion using a mostly 3D-printed, low-cost turbine-generator system — and measure real efficiency rather than assuming it.</p>
  - number: '03'
    heading: System Design
    body: <p>3D-printed Pelton runner driven by a water jet. A <strong>NEMA 17 stepper motor used in reverse as a generator</strong> feeds a bridge rectifier + 2200 µF smoothing capacitor + 5V regulator for stable DC output.</p>
  - number: '04'
    heading: Governing Calculations
    body: |-
      <ul>
      <li>Flow rate measured volumetrically: 500 mL in 2.61 s → <strong>11.49 L/min</strong></li>
      <li>Head: <strong>2 m</strong></li>
      <li>Hydraulic power: P = ρgQH ≈ <strong>3.76 W</strong></li>
      </ul>
  - number: '05'
    heading: Construction & Testing
    body: '<p>Four-step build: turbine assembly and mounting, motor-to-shaft connection, circuit wiring, and load testing with an LED and multimeter to confirm live output before formal measurement.</p>'
  - number: '06'
    heading: Measured Results
    body: |-
      <p>Output measured directly under load: <strong>37 V, 26 mA → 0.962 W electrical power.</strong></p>
      <table class="datatable">
      <tr><th>Parameter</th><th>Value</th></tr>
      <tr><td>Flow rate (Q)</td><td><b>11.49 L/min</b></td></tr>
      <tr><td>Head (H)</td><td><b>2 m</b></td></tr>
      <tr><td>Hydraulic power (P<sub>in</sub>)</td><td><b>3.76 W</b></td></tr>
      <tr><td>Voltage (V)</td><td><b>37 V</b></td></tr>
      <tr><td>Current (I)</td><td><b>26 mA</b></td></tr>
      <tr><td>Electrical power (P<sub>out</sub>)</td><td><b>0.962 W</b></td></tr>
      <tr><td>Efficiency (η)</td><td><b>25.6%</b></td></tr>
      </table>
  - number: '07'
    heading: Engineering Interpretation
    body: <p>η = P<sub>electrical</sub> / P<sub>hydraulic</sub> = 0.962 W / 3.76 W = <strong>25.6%</strong>. Efficiency loss attributed to unoptimized bucket geometry, rectifier diode forward-voltage drop, and the absence of a gear stage to match turbine RPM against the generator's efficient induction range.</p>
  - number: '08'
    heading: Results Summary
    body: |-
      <table class="datatable">
      <tr><th>Metric</th><th>Result</th></tr>
      <tr><td>Overall conversion efficiency</td><td><b>25.6%</b></td></tr>
      <tr><td>Hydraulic power input</td><td><b>3.76 W</b></td></tr>
      <tr><td>Electrical power output</td><td><b>0.962 W</b></td></tr>
      </table>
  - number: '09'
    heading: Future Improvements
    body: |-
      <ul>
      <li>Increase available head / flow to raise hydraulic power input</li>
      <li>Replace basic bridge rectifier with a lower-forward-drop Schottky configuration</li>
      <li>Add a gear-up stage between turbine and generator shaft to raise induced EMF</li>
      </ul>
---
