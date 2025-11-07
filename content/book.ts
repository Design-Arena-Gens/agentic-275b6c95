export type Section = {
  slug: string;
  title: string;
  body: string;
  takeaways: string[];
  exercise?: string;
};

export type Chapter = {
  slug: string;
  title: string;
  summary: string;
  sections: Section[];
};

export type Book = {
  title: string;
  subtitle: string;
  description: string;
  author: string;
  version: string;
  lastUpdated: string;
  chapters: Chapter[];
};

export const book: Book = {
  title: "Discipline & Focus",
  subtitle: "Rules and Pillars for Success",
  description:
    "A modern, concise self-help book on discipline, focus, systems, and the pillars of sustainable success.",
  author: "A. N. Architect",
  version: "1.0",
  lastUpdated: new Date().toISOString().slice(0, 10),
  chapters: [
    {
      slug: "foundations",
      title: "Foundations: What Success Is (and Isn?t)",
      summary:
        "Define success as repeatable progress toward meaningful aims, not sporadic wins or motivation spikes.",
      sections: [
        {
          slug: "define-success",
          title: "Define Success Precisely",
          body:
            "Success is the capacity to make consistent progress toward a clearly defined outcome that matters to you. It is a system, not a moment, and a process, not a personality trait.",
          takeaways: [
            "Clarity precedes control.",
            "Progress beats intensity.",
            "Aim > effort > feedback > iteration is the loop.",
          ],
          exercise:
            "Write one meaningful 12-month outcome and one 12-week milestone that directly ladders to it.",
        },
        {
          slug: "inputs-outputs",
          title: "Separate Inputs from Outputs",
          body:
            "You control inputs (time blocks, practice, outreach). You only influence outputs (revenue, followers). Judge yourself by inputs; use outputs as feedback.",
          takeaways: ["Inputs compound; outputs are noisy.", "Measure what you can own daily."],
          exercise: "List your top 3 input metrics you can perform daily for your goal.",
        },
        {
          slug: "identity-process",
          title: "Identity Follows Process",
          body:
            "Identity is earned by repeated action. Act like the person you want to become at a small, sustainable scale; identity will catch up.",
          takeaways: ["Do first, feel later.", "Consistency rewires self-image."],
        },
      ],
    },
    {
      slug: "discipline",
      title: "Discipline: Doing What Matters When It?s Hard",
      summary:
        "Discipline is environmental design plus precommitment. Make the right action the default, not a heroic act.",
      sections: [
        {
          slug: "reduce-friction",
          title: "Reduce Friction, Increase Defaults",
          body:
            "Most failures of discipline are failures of environment. Remove friction from the desired action and add friction to the distraction.",
          takeaways: [
            "Small friction differences decide behavior.",
            "Design beats willpower under fatigue.",
          ],
          exercise:
            "Pick one habit. Remove two clicks/steps from starting it. Add two steps to starting its competitor.",
        },
        {
          slug: "precommit",
          title: "Precommit with Constraints",
          body:
            "Precommitment (calendars, public stakes, tools that lock you in) converts intention into obligation. Constraints create freedom by narrowing options.",
          takeaways: ["Constraints reduce decision fatigue.", "Public stakes increase follow-through."],
        },
        {
          slug: "minimum-viable-effort",
          title: "Minimum Viable Effort",
          body:
            "On low-motivation days, do the smallest unit that keeps the chain alive. Ten minutes done beats two hours planned.",
          takeaways: ["Never miss twice.", "Shrink the task until it fits today."],
        },
      ],
    },
    {
      slug: "focus",
      title: "Focus: Protecting Attention in a Noisy World",
      summary:
        "Attention is a scarce asset. Guard it with structure, not slogans.",
      sections: [
        {
          slug: "single-task",
          title: "Single-Task by Default",
          body:
            "Context switching taxes cognition. Work in blocks where one task has exclusive rights to your attention.",
          takeaways: ["Tabs reflect attention; close them.", "Batch shallow work."],
        },
        {
          slug: "focus-ritual",
          title: "Create a Starting Ritual",
          body:
            "Use a consistent 60?90 second routine (desk clear, do not disturb, headphones, timer) to prime focus. The brain follows cues.",
          takeaways: ["Rituals reduce initiation friction.", "Cues anchor state."],
          exercise:
            "Design a 90-second focus ritual and attach it to your first deep work block.",
        },
        {
          slug: "offline-blocks",
          title: "Offline Blocks",
          body:
            "Airplane-mode blocks are the modern edge. Disconnect by default; reconnect by appointment.",
          takeaways: ["Offline is a productivity multiplier.", "Protect 2?4 deep blocks weekly."],
        },
      ],
    },
    {
      slug: "systems",
      title: "Systems Over Goals",
      summary:
        "Goals set direction; systems drive motion. Build loops that run without drama.",
      sections: [
        {
          slug: "weekly-loop",
          title: "The Weekly Operating Loop",
          body:
            "Plan on Friday, execute Monday?Thursday, review on Sunday. Keep a single source of truth for commitments.",
          takeaways: ["Cadence beats intensity.", "One list, not many."],
        },
        {
          slug: "input-dashboard",
          title: "Build an Input Dashboard",
          body:
            "Track the few inputs that move the system. Review weekly. If numbers slip, fix the loop?not your identity.",
          takeaways: ["Measure leading indicators.", "Health metrics prevent drift."],
        },
        {
          slug: "default-calendar",
          title: "Default Calendar",
          body:
            "Schedule what matters first (deep work, training, relationships). Let the rest fit around pillars, not the reverse.",
          takeaways: ["Protect pillars in the calendar.", "Everything else seeks the cracks."],
        },
      ],
    },
    {
      slug: "habits",
      title: "Habits that Compound",
      summary:
        "Tiny, high-leverage habits compound massively over time.",
      sections: [
        {
          slug: "habit-stack",
          title: "Habit Stack on Stable Anchors",
          body:
            "Attach new habits to stable daily anchors (wake, coffee, commute). Consistency loves predictability.",
          takeaways: ["Anchors > reminders.", "Make it obvious, easy, and rewarding."],
        },
        {
          slug: "review-cards",
          title: "Review Cards",
          body:
            "Keep 3?5 index cards (or digital equivalent) with rules, targets, and cues. Scan daily in 20 seconds.",
          takeaways: ["Externalize your rules.", "Short beats perfect."],
        },
        {
          slug: "habit-insurance",
          title: "Habit Insurance",
          body:
            "When travel or chaos hits, switch to a portable variant (bodyweight workout, 15-minute write). Never miss twice.",
          takeaways: ["Have a fallback for each pillar.", "Continuity > intensity."],
        },
      ],
    },
    {
      slug: "energy",
      title: "Energy: The Non-Negotiable",
      summary:
        "Energy is the multiplier on every input. Protect sleep, movement, and nutrition.",
      sections: [
        {
          slug: "sleep-first",
          title: "Sleep First",
          body:
            "Sleep is the base. Guard consistency of bedtime and wake time; treat it like an immovable meeting.",
          takeaways: ["Same window daily.", "Dark, cold, quiet room."],
        },
        {
          slug: "move-daily",
          title: "Move Daily",
          body:
            "Movement resets mood and sharpens focus. Aim for a mix: strength, zone-2 cardio, walking.",
          takeaways: ["Motion feeds emotion.", "Sweat solves staleness."],
        },
        {
          slug: "fuel-clean",
          title: "Fuel Clean",
          body:
            "Default to simple, minimally processed foods on workdays. Avoid heavy lunches if deep work follows.",
          takeaways: ["Eat to perform.", "Default meals remove decisions."],
        },
      ],
    },
    {
      slug: "attention",
      title: "Attention Management",
      summary:
        "Your tools shape your thoughts. Tame inputs to own your outputs.",
      sections: [
        {
          slug: "inbox-windows",
          title: "Inbox Windows",
          body:
            "Check communication windows 2?3 times daily. Outside windows, inboxes remain closed.",
          takeaways: ["Pull, don?t let it push.", "Batch responses."],
        },
        {
          slug: "notification-audit",
          title: "Notification Audit",
          body:
            "Turn off all non-critical alerts. Keep only alarms and direct human-to-human calls.",
          takeaways: ["Silence the machine.", "You decide when to look."],
        },
        {
          slug: "curate-info",
          title: "Curate Information Diet",
          body:
            "Follow fewer, higher-signal sources. Subscribe intentionally, unsubscribe aggressively.",
          takeaways: ["Garbage in, garbage out.", "Curate quarterly."],
        },
      ],
    },
    {
      slug: "time-blocking",
      title: "Time Blocking & Rhythm",
      summary:
        "Time is best budgeted in blocks, not crumbs.",
      sections: [
        {
          slug: "block-design",
          title: "Design Blocks Around Energy",
          body:
            "Schedule deep work when your energy peaks. Let shallow tasks settle into lower-energy valleys.",
          takeaways: ["Energy-aware scheduling.", "Protect the peaks."],
        },
        {
          slug: "shutdown-ritual",
          title: "Shutdown Ritual",
          body:
            "End the day by clearing the deck: inbox to zero-ish, plan tomorrow?s 3 priorities, close the laptop with intent.",
          takeaways: ["End well to start well.", "Peace of mind is a habit."],
        },
      ],
    },
    {
      slug: "rules",
      title: "Rules for Sustainable Success",
      summary:
        "Rules remove negotiation. Keep them short, memorable, and lived.",
      sections: [
        {
          slug: "rule-1",
          title: "Rule 1: Protect the First Two Hours",
          body:
            "The first two work hours go to high-leverage work. No meetings, no messages, no social.",
          takeaways: ["Start strong.", "Guard the golden hours."],
        },
        {
          slug: "rule-2",
          title: "Rule 2: Plan Weekly, Prioritize Daily",
          body:
            "Weekly plans set direction; daily priorities drive motion. Choose three, then execute.",
          takeaways: ["Plans guide, priorities move.", "Three is plenty."],
        },
        {
          slug: "rule-3",
          title: "Rule 3: Never Miss Twice",
          body:
            "Missing once happens. Missing twice is a decision. Reset immediately with the smallest viable step.",
          takeaways: ["Break failure streaks fast.", "Continuity compounds."],
        },
      ],
    },
    {
      slug: "pillars",
      title: "Pillars: The Few Things That Hold Everything Up",
      summary:
        "Identify the small set of behaviors that uphold your entire system.",
      sections: [
        {
          slug: "pillar-clarity",
          title: "Clarity",
          body:
            "Know what you?re doing and why it matters this week. Ambiguity is expensive.",
          takeaways: ["Define outcomes before action.", "Write it down."],
        },
        {
          slug: "pillar-energy",
          title: "Energy",
          body:
            "Sleep, movement, and food give you the bandwidth to be who you intend to be.",
          takeaways: ["Health is a force multiplier.", "Protect the basics."],
        },
        {
          slug: "pillar-focus",
          title: "Focus",
          body:
            "Reduce distractions, batch communication, and single-task deep work.",
          takeaways: ["Attention is a budget.", "Buy back your focus."],
        },
        {
          slug: "pillar-execution",
          title: "Execution",
          body:
            "Show up reliably with small, consistent wins. Daily momentum beats rare sprints.",
          takeaways: ["Default to action.", "Finish small, finish often."],
        },
      ],
    },
    {
      slug: "execution",
      title: "Execution in the Real World",
      summary:
        "Translate plans into finished work under constraints and noise.",
      sections: [
        {
          slug: "three-priorities",
          title: "Three Priorities a Day",
          body:
            "Choose three high-impact tasks daily. Put them on the calendar. Guard them with boundaries.",
          takeaways: ["Focus is choosing.", "Calendar is commitment."],
        },
        {
          slug: "friction-log",
          title: "Keep a Friction Log",
          body:
            "Note where you hesitate, stall, or get interrupted. Fix one source of friction weekly.",
          takeaways: ["Remove sand from the gears.", "One fix per week compounds."],
        },
        {
          slug: "fast-feedback",
          title: "Fast Feedback",
          body:
            "Ship in small slices and get feedback early. Reduce the cost of being wrong.",
          takeaways: ["Shorten the loop.", "Learn in public."],
        },
      ],
    },
    {
      slug: "review",
      title: "Review, Refine, Repeat",
      summary:
        "Review turns experience into improvement. Without it, effort is random.",
      sections: [
        {
          slug: "weekly-review",
          title: "Weekly Review",
          body:
            "On Sunday, review inputs, wins, misses, and lessons. Adjust systems, not goals.",
          takeaways: ["Reflect to improve.", "Fix loops, not identity."],
        },
        {
          slug: "quarterly-reset",
          title: "Quarterly Reset",
          body:
            "Every 12 weeks, reassess aims, prune commitments, and redesign your default calendar.",
          takeaways: ["Seasons, not forever.", "Prune to grow."],
        }
      ],
    },
  ],
};
