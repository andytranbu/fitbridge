// Achievements computed ONLY from the user's real logged workouts — nothing is
// pre-unlocked and nothing is fabricated. Each achievement carries a bilingual
// label and unlocks from verifiable conditions on the workout history.

const CLEAN_FORM = 8; // form score that counts as a clean, correct-form rep

export const ACHIEVEMENT_DEFS = [
  {
    id: "first-session",
    icon: "Sparkles",
    name: { en: "First session", vi: "Buổi tập đầu tiên" },
    desc: { en: "Complete your first tracked session.", vi: "Hoàn thành buổi tập đầu tiên." },
    test: ({ workouts }) => workouts.length > 0,
  },
  {
    id: "clean-pushup",
    icon: "BadgeCheck",
    name: { en: "Clean push-up", vi: "Chống đẩy chuẩn form" },
    desc: { en: `A push-up session with form ${CLEAN_FORM}+.`, vi: `Buổi chống đẩy đạt form ${CLEAN_FORM}+.` },
    test: ({ workouts }) => workouts.some((w) => w.exerciseId === "pushup" && w.formScore >= CLEAN_FORM),
  },
  {
    id: "clean-squat",
    icon: "BadgeCheck",
    name: { en: "Clean squat", vi: "Squat chuẩn form" },
    desc: { en: `A squat session with form ${CLEAN_FORM}+.`, vi: `Buổi squat đạt form ${CLEAN_FORM}+.` },
    test: ({ workouts }) => workouts.some((w) => w.exerciseId === "squat" && w.formScore >= CLEAN_FORM),
  },
  {
    id: "clean-curl",
    icon: "BadgeCheck",
    name: { en: "Clean curl", vi: "Cuốn tạ chuẩn form" },
    desc: { en: `A bicep-curl session with form ${CLEAN_FORM}+.`, vi: `Buổi cuốn tạ đạt form ${CLEAN_FORM}+.` },
    test: ({ workouts }) => workouts.some((w) => w.exerciseId === "bicep-curl" && w.formScore >= CLEAN_FORM),
  },
  {
    id: "streak-7",
    icon: "Flame",
    name: { en: "7-day streak", vi: "Chuỗi 7 ngày" },
    desc: { en: "Train seven days in a row.", vi: "Tập bảy ngày liên tiếp." },
    test: ({ stats }) => stats.streak >= 7,
  },
  {
    id: "hundred-reps",
    icon: "Trophy",
    name: { en: "100-rep day", vi: "100 rep một ngày" },
    desc: { en: "Log 100 reps in a single day.", vi: "Đạt 100 rep trong một ngày." },
    test: ({ workouts }) => {
      const byDay = {};
      for (const w of workouts) byDay[w.dateKey] = (byDay[w.dateKey] || 0) + (w.reps || 0);
      return Object.values(byDay).some((r) => r >= 100);
    },
  },
];

/** Returns [{...def, unlocked}] from real workout history. */
export function computeAchievements({ workouts, stats }) {
  return ACHIEVEMENT_DEFS.map((def) => ({
    ...def,
    unlocked: !!def.test({ workouts, stats }),
  }));
}
