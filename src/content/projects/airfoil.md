---
sheet: '02'
tag: Simulation · Aerospace
title: Airfoil Load Study
subtitle: CFD-to-FEA structural analysis, NACA 2412
result: Extracted aerodynamic loads from CFD and applied them as boundary conditions to a structural FEA model — validated against analytical theory.
published: true
order: 2
metrics:
  - value: '2.38'
    label: Min. factor of safety
    placement: card
  - value: 24.5 kN
    label: CFD-derived lift load
    placement: card
  - value: 145 MPa
    label: Peak von Mises stress
    placement: card
  - value: '2.38'
    label: Min. FOS
    placement: detail
  - value: 24,555 N
    label: Resultant CFD force
    placement: detail
  - value: 145.0 MPa
    label: Peak von Mises stress
    placement: detail
  - value: 1.4%
    label: Deviation, E validation
    placement: detail
sections:
  - number: '01'
    heading: Overview
    body: <p>Independent simulation study connecting fluid loading to structural response — the workflow real wing design requires. <strong>Tools:</strong> SolidWorks Flow Simulation (CFD) and SolidWorks Static FEA.</p>
  - number: '02'
    heading: Engineering Problem
    body: <p>Wing structures must survive real aerodynamic loading, not simplified static point loads. This requires a workflow that links fluid-derived forces to a structural response model, rather than assuming an arbitrary design load.</p>
  - number: '03'
    heading: Requirements
    body: |-
      <ul>
      <li>NACA 2412 airfoil profile</li>
      <li>2024-T3 aluminum alloy structure</li>
      <li>Realistic angle-of-attack loading, not an assumed uniform pressure</li>
      <li>Factor of safety must be verified against material yield strength</li>
      </ul>
  - number: '04'
    heading: CFD Analysis — Load Extraction
    body: |-
      <p>SolidWorks Flow Simulation was used to extract force goals at a defined angle of attack:</p>
      <table class="datatable">
      <tr><th>Force component</th><th>Value</th><th>Averaged</th></tr>
      <tr><td>Total resultant force</td><td><b>24,555 N</b></td><td>24,532 N</td></tr>
      <tr><td>Lift (Y)</td><td><b>24,062 N</b></td><td>24,038 N</td></tr>
      <tr><td>Drag (X)</td><td><b>4,896 N</b></td><td>4,901 N</td></tr>
      </table>
  - number: '05'
    heading: Material Selection
    body: <p><strong>2024-T3 aluminum alloy</strong> — yield strength 345 MPa, tensile strength 485 MPa, E = 72.4 GPa. Selected for its established aerospace strength-to-weight profile.</p>
  - number: '06'
    heading: FEA Setup & Simulation
    body: |-
      <p>CFD-derived lift and drag forces applied as external loads on the wing static structural study, root fixed as a cantilever boundary condition.</p>
      <table class="datatable">
      <tr><th>Result</th><th>Value</th></tr>
      <tr><td>Max von Mises stress</td><td><b>145.0 MPa</b> vs. 345 MPa yield</td></tr>
      <tr><td>Factor of safety (min)</td><td><b>2.38</b></td></tr>
      <tr><td>Max principal strain</td><td><b>0.00967</b></td></tr>
      <tr><td>Max resultant displacement</td><td><b>≈10 mm</b> (tip)</td></tr>
      </table>
      <div class="badge ok">✓ FOS 2.38 — passes yield criterion</div>
  - number: '07'
    heading: Analytical Validation
    body: |-
      <p>Simulation output was independently cross-checked against closed-form theory on a companion pressure-vessel material study — a habit of validating solver output rather than trusting it blindly:</p>
      <div class="callout-box"><b>E = 2G(1 + ν)</b>G = 77.0 GPa, ν = 0.28 → E = 197.1 GPa, vs. input 200 GPa — <strong>1.4% deviation.</strong></div>
  - number: '08'
    heading: Engineering Judgment — a failing case, reported honestly
    body: |-
      <p>The same study included a pressure-vessel case under a 9 MPa / 200 °C load, which returned <strong>FOS = 0.16</strong> — an unsafe design condition. Reporting this alongside the passing wing result, rather than omitting it, reflects understanding the failure criterion rather than only publishing results that look good.</p>
      <div class="badge warn">⚠ Pressure vessel case — FOS 0.16, unsafe under stated load</div>
  - number: '09'
    heading: Results Summary
    body: |-
      <table class="datatable">
      <tr><th>Metric</th><th>Value</th></tr>
      <tr><td>Peak von Mises stress (wing)</td><td><b>145.0 MPa</b> / 345 MPa yield</td></tr>
      <tr><td>Min factor of safety (wing)</td><td><b>2.38</b></td></tr>
      <tr><td>Max strain</td><td><b>0.00967</b></td></tr>
      <tr><td>Elastic modulus validation error</td><td><b>1.4%</b></td></tr>
      </table>
  - number: '10'
    heading: Future Improvements
    body: |-
      <ul>
      <li>Extend the load case across a full angle-of-attack sweep rather than a single point</li>
      <li>Add a fatigue / cyclic loading study given fluctuating in-flight loads</li>
      <li>Redesign wall thickness on the pressure-vessel case to bring FOS above a safe threshold, then re-validate</li>
      </ul>
---
