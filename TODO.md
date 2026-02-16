# ORB → UNIVERSE TRANSITION SYSTEM Implementation

## Information Gathered
- Hero.tsx already uses timers ref and clearTimers, has phase state and click logic, but needs timings object and phase className mapping.
- EnergyOrb.jsx has phase switch logic, but needs adjustments: lerp glow for charging, velocity multiply 2.5 for breaking, roam for universe, regroup for collapsing.
- index.css has some phase styles, but needs the starter CSS for clean phase mappings.

## Plan
1. Update Hero.tsx: Add timings object, update startEnterUniverse and startExitUniverse to use timings, ensure energy-orb-container has className={`energy-orb-container ${phase}`}.
2. Update EnergyOrb.jsx: Adjust switch case: charging - lerp glow, breaking - velocity *2.5, universe - roam, collapsing - regroup.
3. Update index.css: Add the provided CSS starter for phase classes.

## Dependent Files
- polished-portfolio-project-main/polished-portfolio-project-main/src/components/Hero.tsx
- polished-portfolio-project-main/polished-portfolio-project-main/src/components/EnergyOrb.jsx
- polished-portfolio-project-main/polished-portfolio-project-main/src/index.css

## Followup Steps
- Test phase transitions.
- Ensure particles behave correctly in each phase.
- Tune timings if needed.

## Progress
- [x] Update Hero.tsx with timings object and updated functions
- [x] Update EnergyOrb.jsx with adjusted switch logic and lerp/regroup functions
- [x] Update index.css with starter phase classes
