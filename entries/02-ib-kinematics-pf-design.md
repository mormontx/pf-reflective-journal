# PF Lesson Design: IB DP Physics (Year 12)
## Topic: Theme A.1 Kinematics (Lesson 1 — Instantaneous Velocity & Deriving SUVAT)

**Specification Reference:** IB DP Physics Guide (Theme A: Space, Time and Motion — A.1 Kinematics)  
**Core Target Concept:** Differentiating between Average Velocity ($\bar{v} = \frac{\Delta s}{\Delta t}$) and Instantaneous Velocity ($v = \lim_{\Delta t \to 0} \frac{\Delta s}{\Delta t}$), and deriving the canonical kinematic relationship $s = ut + \frac{1}{2}at^2$ geometrically rather than through rote algebraic substitution.

---

### 1. Pedagogical Architecture

| Parameter | Specification |
| :--- | :--- |
| **Duration** | 70–80 minutes (Double period) |
| **Grouping** | Pairs with scientific calculators, graph paper, and A3 wipe-boards |
| **Cognitive Conflict** | Students enter IB relying on the middle-school reflex $v = \frac{d}{t}$. When acceleration is present, this reflex yields contradictory answers depending on which time window is chosen. |

---

### 2. Phase 1: Exploration & Generation (35 minutes)

#### The Prompt: "The Hyperloop Telemetry Anomaly"
> *"An automated sensor array recorded the position ($s$) of a prototype maglev shuttle launched from rest ($u = 0$) along a test vacuum tube:*
>
> | Time $t$ (s) | Position $s$ (m) |
> | :---: | :---: |
> | 0.0 | 0.0 |
> | 1.0 | 3.0 |
> | 2.0 | 12.0 |
> | 3.0 | 27.0 |
> | 4.0 | 48.0 |
> | 5.0 | 75.0 |
>
> **Your Engineering Mission:**  
> 1. What would the shuttle's digital speedometer display **at the exact moment $t = 3.0\text{ s}$**? Provide numerical proof.  
> 2. What was the shuttle's rate of acceleration ($a$ in $\text{m/s}^2$)?  
> 3. Notice the mathematical pattern connecting $s$ and $t$. Why is the relationship between displacement, acceleration, and time **not** simply $s = a \times t^2$? Where does the missing factor come from?  
> 4. Devise at least **two distinctly different mathematical or graphical methods** to determine the speed at $t = 3.0\text{ s}$."

#### Expected Student Intuitive Representations (The "Failures")

1. **Model A: The Naive Global Quotient (The IGCSE Reflex)**
   - *Calculation:* $\text{Speed} = \frac{\text{Total Distance}}{\text{Total Time}} = \frac{27\text{ m}}{3\text{ s}} = 9\text{ m/s}$.
   - *The Failure Point:* If they calculate for $t = 4\text{ s}$, they get $\frac{48}{4} = 12\text{ m/s}$. Why would the average from the start represent the speed *at* 3 seconds?
2. **Model B: The Backward Difference**
   - *Calculation:* $\frac{\Delta s}{\Delta t} = \frac{27 - 12}{3 - 2} = 15\text{ m/s}$.
   - *The Failure Point:* This is the average speed between $t=2$ and $t=3$, not the speed *at* $t=3$.
3. **Model C: The Forward Difference**
   - *Calculation:* $\frac{\Delta s}{\Delta t} = \frac{48 - 27}{4 - 3} = 21\text{ m/s}$.
   - *The Conflict:* Why does Model B give $15\text{ m/s}$ while Model C gives $21\text{ m/s}$? Which one is right?
4. **Model D: The Symmetrical Secant (The Emerging Tangent)**
   - *Calculation:* $\frac{48 - 12}{4 - 2} = \frac{36}{2} = 18\text{ m/s}$.
   - *Observation:* $18\text{ m/s}$ is exactly halfway between $15$ and $21$.
5. **Model E: The Power Law Pattern Match**
   - *Observation:* $s = 3 t^2$.
   - *The Mystery:* If students calculate acceleration as $\frac{\Delta v}{\Delta t} = \frac{18 - 0}{3} = 6\text{ m/s}^2$, why does the equation have $3 t^2$ instead of $6 t^2$?

#### Teacher Role & Non-Evaluative Facilitation Prompts
- Observe whether students realize that Model B ($15\text{ m/s}$) and Model C ($21\text{ m/s}$) bracket the true speed.
- **Prompts to groups:**
  - *"Group 2 got 15 m/s using the previous second. Group 4 got 21 m/s using the next second. Can both be right? How could you get closer to the truth?"*
  - *"If you shrink the time window from 1.0 second to 0.1 seconds, what happens to the difference between the forward and backward estimate?"*
  - *"If the speed at $t=0$ is 0 and at $t=3$ is 18 m/s, sketch what the speed-time graph looks like. What does the area under that line represent?"*

---

### 3. Phase 2: Consolidation & Direct Instruction (35 minutes)

#### Step 1: The Squeeze to Instantaneous Velocity (12 mins)
1. Display the conflict: $9\text{ m/s}$ (average from start) vs. $15\text{ m/s}$ (backward interval) vs. $21\text{ m/s}$ (forward interval) vs. $18\text{ m/s}$ (symmetric interval).
2. **Introduce the Secant-to-Tangent Concept:**
   - Draw the curve $s$-$t$. Show the secant line between $t=2$ and $t=4$.
   - Show how as $\Delta t \to 0$, the chord rotates to become the **tangent line** at $t=3$.
   - **Canonical Definition:** Instantaneous velocity is the gradient of the tangent to the displacement-time graph:
     $$v = \lim_{\Delta t \to 0} \frac{\Delta s}{\Delta t} = \frac{ds}{dt}$$

#### Step 2: Demystifying the $\frac{1}{2}$ in $s = \frac{1}{2}at^2$ (13 mins)
1. Plot the velocities calculated ($t=0 \to 0$, $t=1 \to 6$, $t=2 \to 12$, $t=3 \to 18$).
2. Note that the $v$-$t$ graph is a straight line with slope $a = 6\text{ m/s}^2$.
3. Ask: *"What is the total displacement at $t = 3\text{ s}$ from the graph?"*
4. Calculate the area of the shape under the $v$-$t$ graph:
   $$\text{Area} = \text{Area of Triangle} = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times t \times v$$
5. Since $v = at$ (when starting from rest):
   $$s = \frac{1}{2} \times t \times (at) = \frac{1}{2} a t^2$$
6. **The Epiphany:** The coefficient in $s = 3t^2$ is 3 because $3 = \frac{1}{2} \times 6$! The missing factor of $1/2$ is the geometry of a triangle!
7. Extend to initial velocity $u \neq 0$: Rectangle ($ut$) + Triangle ($\frac{1}{2}at^2$):
   $$s = ut + \frac{1}{2}at^2$$

#### Step 3: Formalizing the IB SUVAT Framework & Transfer (10 mins)
- Formalize the 4 kinematic variables ($s, u, v, a, t$) and the 4 canonical equations from the IB Physics data booklet.
- **Transfer Challenge:**
  *"A driver traveling at $30\text{ m/s}$ sees a hazard and decelerates at $5.0\text{ m/s}^2$. A student calculates stopping distance as $d = 30 \times (30/5) = 180\text{ m}$. Explain the fundamental geometric error in this student's reasoning using a $v$-$t$ sketch, and determine the correct stopping distance."*
