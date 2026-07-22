const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector("#site-nav");
const publicSiteFooter = document.querySelector("body > .site-footer");

if (publicSiteFooter && !publicSiteFooter.querySelector(".site-version")) {
  const siteVersion = document.createElement("span");
  siteVersion.className = "site-version";
  siteVersion.textContent = "Version 5.7";
  publicSiteFooter.append(siteVersion);
}

if (menuButton && siteNav) {
  const closeMenu = () => {
    siteNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

const form = document.querySelector("#enquiry-form");
const status = document.querySelector("#form-status");
const enquiryEmail = "privacy@courtreadysupport.co.uk";

if (form && status) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get("name")?.toString().trim() || "";
    const email = data.get("email")?.toString().trim() || "";
    const phone = data.get("phone")?.toString().trim() || "";
    const deadline = data.get("deadline")?.toString().trim() || "Not provided";
    const message = data.get("message")?.toString().trim() || "";

    const subject = `CourtReadySupport.co.uk enquiry from ${name}`;
    const body = [
      "New website enquiry",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Hearing or deadline date: ${deadline}`,
      "",
      "What help is needed:",
      message,
      "",
      "Consent confirmed: Yes",
      "Relationship acknowledgement confirmed: Yes",
      "",
      "Please do not send original documents or highly sensitive information until requested.",
    ].join("\n");

    window.location.href = `mailto:${encodeURIComponent(enquiryEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = "Your email app should open with the enquiry drafted.";
  });
}

// Interactive Family Court Roadmap + Level 2 journey tools
const roadmapButtons = Array.from(document.querySelectorAll(".roadmap-stage"));
const roadmapPanels = Array.from(document.querySelectorAll(".roadmap-detail"));
const roadmapSelect = document.querySelector("#roadmap-stage-select");
const roadmapProgress = document.querySelector(".roadmap-progress-fill");
const roadmapPrev = document.querySelector("#roadmap-prev");
const roadmapNext = document.querySelector("#roadmap-next");
const journeySteps = Array.from(document.querySelectorAll("[data-journey]"));
const journeySummary = document.querySelector("#journey-summary");
const readinessStageName = document.querySelector("#readiness-stage-name");
const readinessChecklist = document.querySelector("#readiness-checklist");
const readinessScore = document.querySelector("#readiness-score");
const readinessFill = document.querySelector("#readiness-fill");
const judgePerspective = document.querySelector("#judge-perspective");
const aiCoachTip = document.querySelector("#ai-coach-tip");
const missionOverallScore = document.querySelector("#mission-overall-score");
const hearingDateInput = document.querySelector("#hearing-date");
const countdownDisplay = document.querySelector("#countdown-display");
const countdownFill = document.querySelector("#countdown-fill");
const priorityList = document.querySelector("#priority-list");
const bundleChecklist = document.querySelector("#bundle-checklist");
const bundleScore = document.querySelector("#bundle-score");
const bundleFill = document.querySelector("#bundle-fill");
const copyBundleIndex = document.querySelector("#copy-bundle-index");
const bundleCopyStatus = document.querySelector("#bundle-copy-status");
const judgeChecklist = document.querySelector("#judge-checklist");
const judgeScore = document.querySelector("#judge-score");
const judgeFill = document.querySelector("#judge-fill");
const confidenceChecklist = document.querySelector("#confidence-checklist");
const confidenceScore = document.querySelector("#confidence-score");
const confidenceFill = document.querySelector("#confidence-fill");

const roadmapLevelTwo = {
  "separation": {
    title: "Stage 01 — Separation",
    judge: "Clear dates, practical issues, and evidence that helps the court understand what genuinely needs deciding.",
    coach: "Create a clean chronology, save important documents in one place, and avoid sending reactive messages.",
    checks: ["Chronology started", "Key documents saved", "Urgent risks identified", "One-page issue summary drafted"]
  },
  "before-applying": {
    title: "Stage 02 — Before applying",
    judge: "Whether the issue is properly defined, whether alternatives have been considered, and what order is actually being sought.",
    coach: "Write the outcome you want in one sentence before drafting forms. If you cannot define it clearly, the application may be too vague.",
    checks: ["Correct application route identified", "MIAM or exemption checked", "Draft application reviewed", "Evidence list prepared"]
  },
  "application-issued": {
    title: "Stage 03 — Application issued",
    judge: "Whether the papers have been served, the response is clear, and the court can identify the real issues quickly.",
    coach: "Build a folder for the sealed application, hearing notice, response deadline and any service evidence.",
    checks: ["Sealed application saved", "Hearing date recorded", "Response deadline noted", "Service evidence saved"]
  },
  "first-hearing": {
    title: "Stage 04 — First hearing",
    judge: "What directions are needed, what is agreed, what is disputed, and whether urgent practical issues need early control.",
    coach: "Prepare a short position statement, a bullet-point issue list and a practical order you want the court to make.",
    checks: ["Position statement drafted", "Issues list prepared", "Draft directions considered", "Hearing notes ready"]
  },
  "directions": {
    title: "Stage 05 — Directions",
    judge: "Compliance with the court timetable and whether each direction is moving the case toward a fair decision.",
    coach: "Turn every paragraph of the order into a dated task. Missed directions are easier to explain if you have a clear audit trail.",
    checks: ["Deadline tracker created", "Order converted into tasks", "Proof of sending saved", "Missing compliance chased"]
  },
  "disclosure": {
    title: "Stage 06 — Disclosure",
    judge: "Whether disclosure is full, frank and usable, and whether allegations are supported by documents rather than assertion.",
    coach: "Create an evidence matrix: issue, document, date, bundle page, and why it matters.",
    checks: ["Disclosure indexed", "Missing documents listed", "Evidence matrix started", "Chronology updated"]
  },
  "negotiation": {
    title: "Stage 07 — Negotiation",
    judge: "Whether proposals are realistic, evidence-based, and capable of being implemented without further dispute.",
    coach: "Compare offers side-by-side using net outcomes, payment dates, mortgage liability, pension effect and costs risk.",
    checks: ["Settlement table prepared", "Open/WP letters separated", "Costs risk considered", "Minimum acceptable outcome defined"]
  },
  "fdr-review": {
    title: "Stage 08 — FDR / review hearing",
    judge: "Needs, assets, litigation risk, disclosure gaps, and whether each party is engaging realistically with settlement.",
    coach: "Make the judge’s task easy: position statement, asset schedule, chronology, costs schedule and a clear proposal.",
    checks: ["FDR position statement ready", "Asset schedule updated", "Costs schedule ready", "Speaking note prepared"]
  },
  "final-hearing": {
    title: "Stage 09 — Final hearing",
    judge: "The disputed issues, the evidence proving each point, witness credibility, and the final order that should be made.",
    coach: "Focus on the points the judge must decide. Link every key submission to a bundle page or witness answer.",
    checks: ["Evidence matrix finalised", "Cross-examination topics prepared", "Closing submission drafted", "Judge bundle guide ready"]
  },
  "final-order": {
    title: "Stage 10 — Final order",
    judge: "Whether the order is clear, enforceable, and capable of practical implementation.",
    coach: "Convert the sealed order into an action plan with dates, responsible person, proof needed and completion status.",
    checks: ["Sealed order saved", "Implementation checklist created", "Compliance proof folder ready", "Enforcement options understood"]
  }
};

if (roadmapButtons.length && roadmapPanels.length) {
  const stages = roadmapButtons.map((button) => button.dataset.stage);
  const storagePrefix = "crs-roadmap-readiness-";

  const getStoredChecks = (stage) => {
    try {
      return JSON.parse(localStorage.getItem(`${storagePrefix}${stage}`) || "[]");
    } catch {
      return [];
    }
  };

  const setStoredChecks = (stage, values) => {
    try {
      localStorage.setItem(`${storagePrefix}${stage}`, JSON.stringify(values));
    } catch {
      // Local storage can be unavailable in strict privacy contexts. The page still works without persistence.
    }
  };

  const renderReadiness = (stage) => {
    const data = roadmapLevelTwo[stage];
    if (!data || !readinessChecklist) return;

    const completed = getStoredChecks(stage);
    readinessStageName.textContent = `For ${data.title}`;
    judgePerspective.textContent = data.judge;
    aiCoachTip.textContent = data.coach;
    readinessChecklist.innerHTML = "";

    data.checks.forEach((item, index) => {
      const id = `readiness-${stage}-${index}`;
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      const text = document.createElement("span");
      checkbox.type = "checkbox";
      checkbox.id = id;
      checkbox.checked = completed.includes(index);
      text.textContent = item;
      label.setAttribute("for", id);
      label.append(checkbox, text);
      readinessChecklist.append(label);

      checkbox.addEventListener("change", () => {
        const next = Array.from(readinessChecklist.querySelectorAll("input"))
          .map((input, checkIndex) => input.checked ? checkIndex : null)
          .filter((value) => value !== null);
        setStoredChecks(stage, next);
        updateReadinessScore(stage);
        renderMission(stage);
      });
    });

    updateReadinessScore(stage);
  };

  const updateReadinessScore = (stage) => {
    const data = roadmapLevelTwo[stage];
    if (!data || !readinessScore || !readinessFill) return;
    const completedCount = getStoredChecks(stage).length;
    const percentage = Math.round((completedCount / data.checks.length) * 100);
    readinessScore.textContent = `${percentage}%`;
    readinessFill.style.width = `${percentage}%`;
  };

  const missionStoragePrefix = "crs-roadmap-v3-";
  const missionData = {
    "separation": {
      priorities: ["Start a clean chronology", "Save key messages and letters", "List immediate risks and practical problems"],
      bundle: ["Chronology", "Key correspondence", "Financial snapshot", "Children arrangements notes"],
      judge: ["Clear dates", "Practical issues", "Evidence rather than assertion", "Order or outcome needed"],
      confidence: ["I can explain the immediate problem in two minutes", "I know what evidence supports my position", "I know what help I need next", "My key documents are saved in one place"]
    },
    "before-applying": {
      priorities: ["Check the correct court route", "Confirm MIAM position or exemption", "Draft the order or outcome sought"],
      bundle: ["Draft application", "MIAM certificate or exemption evidence", "Issue summary", "Supporting documents"],
      judge: ["Correct application route", "Specific order sought", "Attempts to resolve", "Evidence of urgency if relevant"],
      confidence: ["I know which application is needed", "I can explain why court involvement is necessary", "I have checked alternatives", "My evidence list is organised"]
    },
    "application-issued": {
      priorities: ["Save sealed papers", "Record response and service deadlines", "Create a hearing folder"],
      bundle: ["Sealed application", "Hearing notice", "Response papers", "Service evidence"],
      judge: ["Proper service", "Clear response", "Identified issues", "Urgent directions if needed"],
      confidence: ["I know the next deadline", "I know what has been served", "I understand what I must respond to", "I have a copy of all court papers"]
    },
    "first-hearing": {
      priorities: ["Draft a short position statement", "Prepare proposed directions", "Create a one-page issue list"],
      bundle: ["Position statement", "Draft directions", "Chronology", "Key evidence index"],
      judge: ["Disputed issues", "Necessary directions", "Urgency", "What can be agreed"],
      confidence: ["I can state the issues clearly", "I know what directions I want", "I can find key documents quickly", "I have a concise speaking note"]
    },
    "directions": {
      priorities: ["Turn the order into dated tasks", "Chase missing disclosure", "Save proof of sending"],
      bundle: ["Directions order", "Deadline tracker", "Correspondence log", "Disclosure request list"],
      judge: ["Compliance", "Reason for any delay", "Proportionality", "Whether directions move the case forward"],
      confidence: ["Every court direction has a task", "I know what is overdue", "I have proof of sending", "I can explain any non-compliance factually"]
    },
    "disclosure": {
      priorities: ["Index disclosure", "List missing documents", "Update evidence matrix"],
      bundle: ["Form E", "Bank statements", "Property evidence", "Pension evidence", "Witness statements", "Bundle index"],
      judge: ["Full and frank disclosure", "Documentary proof", "Material gaps", "Relevance to disputed issues"],
      confidence: ["I know what disclosure is missing", "I can link evidence to issues", "My chronology is updated", "I can distinguish fact from opinion"]
    },
    "negotiation": {
      priorities: ["Prepare settlement comparison", "Separate open and without-prejudice material", "Define acceptable range"],
      bundle: ["Offer schedule", "Asset schedule", "Costs schedule", "Settlement comparison table"],
      judge: ["Realistic proposals", "Implementation", "Needs and fairness", "Costs risk"],
      confidence: ["I can explain my proposal", "I understand the other proposal", "I know my minimum acceptable outcome", "I have considered implementation"]
    },
    "fdr-review": {
      priorities: ["Finalise FDR position statement", "Update asset schedule", "Prepare speaking note"],
      bundle: ["FDR position statement", "Chronology", "Asset schedule", "Costs schedule", "Settlement options table"],
      judge: ["Assets", "Needs", "Settlement realism", "Disclosure gaps", "Litigation risk"],
      confidence: ["I can explain why my proposal is fair", "I know the settlement range", "I have key figures ready", "I can respond to likely judicial questions"]
    },
    "final-hearing": {
      priorities: ["Finalise evidence matrix", "Prepare cross-examination topics", "Draft closing submission"],
      bundle: ["Final position statement", "Evidence matrix", "Cross-examination plan", "Closing submission", "Judge bundle guide"],
      judge: ["Disputed issues", "Credibility", "Bundle references", "Final order sought"],
      confidence: ["I can explain each disputed issue", "I know where the evidence is", "My questions have a purpose", "My closing submission is structured"]
    },
    "final-order": {
      priorities: ["Convert order into action list", "Record compliance dates", "Save proof of implementation"],
      bundle: ["Sealed order", "Implementation checklist", "Payment proof", "Transfer records", "Correspondence log"],
      judge: ["Clarity", "Enforceability", "Compliance", "Practical implementation"],
      confidence: ["I understand each obligation", "I know the deadlines", "I know what proof to keep", "I know when enforcement advice may be needed"]
    }
  };

  const missionGet = (key) => {
    try { return JSON.parse(localStorage.getItem(`${missionStoragePrefix}${key}`) || "[]"); }
    catch { return []; }
  };

  const missionSet = (key, values) => {
    try { localStorage.setItem(`${missionStoragePrefix}${key}`, JSON.stringify(values)); }
    catch { /* dashboard remains usable without persistence */ }
  };

  const calculateListScore = (key, total) => {
    if (!total) return 0;
    return Math.round((missionGet(key).length / total) * 100);
  };

  const renderMissionChecklist = (container, stage, type, items, onUpdate) => {
    if (!container) return;
    const key = `${type}-${stage}`;
    const completed = missionGet(key);
    container.innerHTML = "";
    items.forEach((item, index) => {
      const id = `${type}-${stage}-${index}`;
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      const text = document.createElement("span");
      checkbox.type = "checkbox";
      checkbox.id = id;
      checkbox.checked = completed.includes(index);
      text.textContent = item;
      label.setAttribute("for", id);
      label.append(checkbox, text);
      container.append(label);
      checkbox.addEventListener("change", () => {
        const next = Array.from(container.querySelectorAll("input"))
          .map((input, checkIndex) => input.checked ? checkIndex : null)
          .filter((value) => value !== null);
        missionSet(key, next);
        onUpdate();
      });
    });
  };

  const updateCountdown = () => {
    if (!hearingDateInput || !countdownDisplay || !countdownFill) return;
    const value = hearingDateInput.value;
    if (!value) {
      countdownDisplay.textContent = "No hearing date set.";
      countdownFill.style.width = "0%";
      return;
    }
    try { localStorage.setItem(`${missionStoragePrefix}hearing-date`, JSON.stringify(value)); } catch {}
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const hearing = new Date(`${value}T00:00:00`);
    const days = Math.ceil((hearing - today) / 86400000);
    if (days < 0) {
      countdownDisplay.textContent = `Hearing date passed ${Math.abs(days)} day${Math.abs(days) === 1 ? "" : "s"} ago.`;
      countdownFill.style.width = "100%";
    } else if (days === 0) {
      countdownDisplay.textContent = "Hearing is today.";
      countdownFill.style.width = "100%";
    } else {
      countdownDisplay.textContent = `${days} day${days === 1 ? "" : "s"} remaining.`;
      countdownFill.style.width = `${Math.max(5, Math.min(100, 100 - Math.round((days / 180) * 100)))}%`;
    }
  };

  const updateMissionScores = (stage) => {
    const data = missionData[stage];
    if (!data) return;
    const bundlePct = calculateListScore(`bundle-${stage}`, data.bundle.length);
    const judgePct = calculateListScore(`judge-${stage}`, data.judge.length);
    const confidencePct = calculateListScore(`confidence-${stage}`, data.confidence.length);
    const readinessPct = roadmapLevelTwo[stage] ? Math.round((getStoredChecks(stage).length / roadmapLevelTwo[stage].checks.length) * 100) : 0;
    const overall = Math.round((bundlePct + judgePct + confidencePct + readinessPct) / 4);
    if (bundleScore) bundleScore.textContent = `${bundlePct}%`;
    if (bundleFill) bundleFill.style.width = `${bundlePct}%`;
    if (judgeScore) judgeScore.textContent = `${judgePct}%`;
    if (judgeFill) judgeFill.style.width = `${judgePct}%`;
    if (confidenceScore) confidenceScore.textContent = `${confidencePct}%`;
    if (confidenceFill) confidenceFill.style.width = `${confidencePct}%`;
    if (missionOverallScore) missionOverallScore.textContent = `${overall}%`;
  };

  const renderMission = (stage) => {
    const data = missionData[stage];
    if (!data) return;
    if (priorityList) {
      priorityList.innerHTML = "";
      data.priorities.forEach((priority, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${index === 0 ? "High" : index === 1 ? "Medium" : "Next"}</strong><span>${priority}</span>`;
        priorityList.append(li);
      });
    }
    renderMissionChecklist(bundleChecklist, stage, "bundle", data.bundle, () => updateMissionScores(stage));
    renderMissionChecklist(judgeChecklist, stage, "judge", data.judge, () => updateMissionScores(stage));
    renderMissionChecklist(confidenceChecklist, stage, "confidence", data.confidence, () => updateMissionScores(stage));
    updateMissionScores(stage);
  };

  if (hearingDateInput) {
    try {
      const savedDate = JSON.parse(localStorage.getItem(`${missionStoragePrefix}hearing-date`) || "null");
      if (savedDate) hearingDateInput.value = savedDate;
    } catch {}
    hearingDateInput.addEventListener("change", updateCountdown);
    updateCountdown();
  }

  if (copyBundleIndex) {
    copyBundleIndex.addEventListener("click", async () => {
      const stage = roadmapSelect?.value || stages[0];
      const data = missionData[stage];
      if (!data) {
        if (bundleCopyStatus) bundleCopyStatus.textContent = "Choose a roadmap stage first.";
        return;
      }

      const stageTitle = roadmapLevelTwo[stage]?.title || "Current stage";
      const selectedItems = missionGet(`bundle-${stage}`);
      const indexLines = data.bundle.map((item, index) => {
        const mark = selectedItems.includes(index) ? "[x]" : "[ ]";
        return `${index + 1}. ${mark} ${item}`;
      });

      const text = [
        "CourtReadySupport.co.uk - Bundle Index",
        stageTitle,
        "",
        "Documents",
        ...indexLines,
        "",
        "Generated from the Interactive Family Court Roadmap."
      ].join("\n");

      const setStatus = (message, ok = true) => {
        if (!bundleCopyStatus) return;
        bundleCopyStatus.textContent = message;
        bundleCopyStatus.classList.toggle("is-success", ok);
        bundleCopyStatus.classList.toggle("is-error", !ok);
      };

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          const temp = document.createElement("textarea");
          temp.value = text;
          temp.setAttribute("readonly", "");
          temp.style.position = "fixed";
          temp.style.left = "-9999px";
          document.body.appendChild(temp);
          temp.select();
          const copied = document.execCommand("copy");
          document.body.removeChild(temp);
          if (!copied) throw new Error("Copy command failed");
        }
        setStatus("Bundle index copied to clipboard.");
      } catch (error) {
        setStatus("Copy did not complete automatically. The generated index is shown below so you can copy it manually.", false);
        const pre = document.createElement("pre");
        pre.className = "bundle-index-output";
        pre.textContent = text;
        bundleCopyStatus.after(pre);
      }
    });
  }

  const setRoadmapStage = (stage) => {
    const stageIndex = Math.max(0, stages.indexOf(stage));
    const safeStage = stages[stageIndex] || stages[0];
    const data = roadmapLevelTwo[safeStage];

    roadmapButtons.forEach((button) => {
      const isActive = button.dataset.stage === safeStage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-current", isActive ? "step" : "false");
    });

    roadmapPanels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.stagePanel === safeStage);
    });

    journeySteps.forEach((item, index) => {
      item.classList.toggle("is-complete", index < stageIndex);
      item.classList.toggle("is-current", item.dataset.journey === safeStage);
    });

    if (journeySummary && data) {
      journeySummary.textContent = `You are at ${data.title}.`;
    }

    if (roadmapSelect) {
      roadmapSelect.value = safeStage;
    }

    if (roadmapProgress) {
      roadmapProgress.style.width = `${((stageIndex + 1) / stages.length) * 100}%`;
    }

    if (roadmapPrev) {
      roadmapPrev.disabled = stageIndex === 0;
    }

    if (roadmapNext) {
      roadmapNext.disabled = stageIndex === stages.length - 1;
      roadmapNext.textContent = stageIndex === stages.length - 1 ? "Roadmap complete" : "Next stage";
    }

    renderReadiness(safeStage);
    renderMission(safeStage);
    updateCountdown();
  };

  roadmapButtons.forEach((button) => {
    button.addEventListener("click", () => setRoadmapStage(button.dataset.stage));
  });

  journeySteps.forEach((item) => {
    item.addEventListener("click", () => setRoadmapStage(item.dataset.journey));
  });

  if (roadmapSelect) {
    roadmapSelect.addEventListener("change", () => setRoadmapStage(roadmapSelect.value));
  }

  if (roadmapPrev) {
    roadmapPrev.addEventListener("click", () => {
      const currentIndex = stages.indexOf(roadmapSelect?.value || stages[0]);
      setRoadmapStage(stages[Math.max(0, currentIndex - 1)]);
    });
  }

  if (roadmapNext) {
    roadmapNext.addEventListener("click", () => {
      const currentIndex = stages.indexOf(roadmapSelect?.value || stages[0]);
      setRoadmapStage(stages[Math.min(stages.length - 1, currentIndex + 1)]);
    });
  }

  setRoadmapStage(stages[0]);
}
