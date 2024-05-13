import { B as Browser } from "../browser-polyfill.js";
import { r as requiredArgs, t as toInteger, c as convertSummaryTimeToString, a as ranges, T as ThisWeekRange, S as StorageParams, _ as _imports_0$1, i as injectStorage, C as CHROME_STORE_REVIEW_URL, b as Settings, d as isDateEqual, l as logger, I as IS_POMODORO_ENABLED_DEFAULT, e as SettingsTab, f as TypeOfList, D as DARK_MODE_DEFAULT, g as _imports_0$2 } from "../general.js";
import { a as addMilliseconds, s as startOfDay, _ as _sfc_main$5, B as ByDaysChart, T as TabItem, u as useTabListByDays, b as useImportToCsvWithData, c as useFile, F as FileType, d as _imports_0, e as addDays, f as useBadge, g as BadgeColor, h as BadgeIcon, o as openPage, i as applyDarkMode, j as TabList, k as _imports_5$1, l as oa } from "../dark.js";
import { d as defineComponent, r as ref, o as openBlock, c as createElementBlock, a as createBaseVNode, n as normalizeClass, b as createTextVNode, t as toDisplayString, u as unref, e as createVNode, w as withCtx, f as withDirectives, g as renderSlot, v as vShow, T as Transition, p as pushScopeId, h as popScopeId, _ as _export_sfc, i as useI18n, j as computed, k as onMounted, l as resolveComponent, m as createBlock, F as Fragment, q as renderList, s as createCommentVNode, x as createApp, y as i18n } from "../i18n.js";
import { M as Messages } from "../messages.js";
const _imports_1 = "/light-mode.svg";
const _imports_2 = "/dark-mode.svg";
const _imports_4 = "/dashboard.svg";
const _imports_5 = "/settings.svg";
var MILLISECONDS_IN_HOUR = 36e5;
function addHours(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR);
}
function addSeconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * 1e3);
}
function startOfToday() {
  return startOfDay(Date.now());
}
const _withScopeId$2 = (n) => (pushScopeId("data-v-ce550e5a"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "expander" };
const _hoisted_2$4 = { class: "d-inline-block" };
const _hoisted_3$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("polyline", {
  points: "12,2 20,10 28,2",
  "stroke-width": "3",
  fill: "none"
}, null, -1));
const _hoisted_4$3 = [
  _hoisted_3$3
];
const _hoisted_5$2 = { class: "header" };
const _hoisted_6$2 = { class: "expander-body" };
const __default__$3 = {
  name: "Expander"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: {
    day: {},
    time: {}
  },
  setup(__props) {
    const open = ref();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", {
          class: normalizeClass(["expander-trigger", open.value ? "active" : "beforeBorder"]),
          onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
        }, [
          createBaseVNode("div", _hoisted_2$4, [
            (openBlock(), createElementBlock("svg", {
              class: normalizeClass(["expander-trigger-Icon", { open: open.value }]),
              width: "40",
              height: "12",
              stroke: "cornflowerblue"
            }, _hoisted_4$3, 2))
          ]),
          createBaseVNode("div", _hoisted_5$2, [
            createTextVNode(toDisplayString(_ctx.day) + " ", 1),
            createBaseVNode("span", null, toDisplayString(unref(convertSummaryTimeToString)(_ctx.time)), 1)
          ])
        ], 2),
        createVNode(Transition, { name: "leftToRight" }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", _hoisted_6$2, [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ], 512), [
              [vShow, open.value]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
});
const Expander_vue_vue_type_style_index_0_scoped_ce550e5a_lang = "";
const Expander = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ce550e5a"]]);
const _withScopeId$1 = (n) => (pushScopeId("data-v-fe0bbe25"), n = n(), popScopeId(), n);
const _hoisted_1$3 = {
  key: 0,
  class: "no-data"
};
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  height: "55",
  src: _imports_0
}, null, -1));
const _hoisted_3$2 = [
  _hoisted_2$3
];
const _hoisted_4$2 = { key: 1 };
const _hoisted_5$1 = { key: 1 };
const _hoisted_6$1 = { class: "no-data" };
const _hoisted_7$1 = ["onClick"];
const _hoisted_8$1 = { key: 2 };
const _hoisted_9$1 = { class: "date-block" };
const _hoisted_10$1 = ["onClick"];
const _hoisted_11$1 = ["value"];
const _hoisted_12$1 = { class: "stats-block block" };
const _hoisted_13$1 = { class: "header" };
const _hoisted_14$1 = { class: "ml-20 mr-20 by-days-chart" };
const __default__$2 = {
  name: "TabList"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  setup(__props) {
    const { t } = useI18n();
    const tabsByDays = ref();
    const isLoading = ref();
    const noData = ref();
    const selectedDate = ref();
    const presetRanges = ranges();
    const countOfDays = computed(
      () => tabsByDays.value != void 0 ? tabsByDays.value.days.length : 0
    );
    async function loadList(dateFrom, dateTo) {
      const tabList = await useTabListByDays(dateFrom, dateTo);
      if (tabList != null) {
        tabsByDays.value = tabList;
        if (tabList.days.length == 0 && tabList.summaryTime == 0)
          noData.value = true;
        else
          noData.value = false;
      }
      isLoading.value = false;
    }
    async function handleDate(modelData) {
      var _a, _b;
      selectedDate.value = modelData;
      const dateFrom = (_a = selectedDate.value) == null ? void 0 : _a[0];
      const dateTo = (_b = selectedDate.value) == null ? void 0 : _b[1];
      await loadList(dateFrom, dateTo);
    }
    onMounted(async () => {
      var _a, _b;
      isLoading.value = true;
      selectedDate.value = ThisWeekRange;
      const dateFrom = (_a = selectedDate.value) == null ? void 0 : _a[0];
      const dateTo = (_b = selectedDate.value) == null ? void 0 : _b[1];
      await loadList(dateFrom, dateTo);
    });
    async function exportToCsv() {
      var _a, _b, _c;
      const dateFrom = (_a = selectedDate.value) == null ? void 0 : _a[0];
      const dateTo = (_b = selectedDate.value) == null ? void 0 : _b[1];
      const csv = await useImportToCsvWithData((_c = tabsByDays.value) == null ? void 0 : _c.days);
      useFile(
        csv,
        FileType.CSV,
        `websites_${dateFrom.toLocaleDateString()}-${dateTo.toLocaleDateString()}.csv`
      );
    }
    return (_ctx, _cache) => {
      var _a;
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1$3, _hoisted_3$2)) : (openBlock(), createElementBlock("div", _hoisted_4$2, [
        countOfDays.value == void 0 || countOfDays.value == 0 && !noData.value ? (openBlock(), createBlock(_sfc_main$5, { key: 0 })) : noData.value ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
          createBaseVNode("div", _hoisted_6$1, [
            createTextVNode(toDisplayString(unref(t)("noDataForPeriod.message")) + " ", 1),
            createVNode(_component_VueDatePicker, {
              range: "",
              "enable-time-picker": false,
              class: "date-picker",
              modelValue: selectedDate.value,
              "onUpdate:modelValue": [
                _cache[0] || (_cache[0] = ($event) => selectedDate.value = $event),
                handleDate
              ],
              "preset-ranges": unref(presetRanges)
            }, {
              yearly: withCtx(({ label, range, presetDateRange }) => [
                createBaseVNode("span", {
                  onClick: ($event) => presetDateRange(range)
                }, toDisplayString(label), 9, _hoisted_7$1)
              ]),
              _: 1
            }, 8, ["modelValue", "preset-ranges"])
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_8$1, [
          createBaseVNode("div", _hoisted_9$1, [
            createVNode(_component_VueDatePicker, {
              range: "",
              "enable-time-picker": false,
              class: "date-picker",
              modelValue: selectedDate.value,
              "onUpdate:modelValue": [
                _cache[1] || (_cache[1] = ($event) => selectedDate.value = $event),
                handleDate
              ],
              "preset-ranges": unref(presetRanges)
            }, {
              yearly: withCtx(({ label, range, presetDateRange }) => [
                createBaseVNode("span", {
                  onClick: ($event) => presetDateRange(range)
                }, toDisplayString(label), 9, _hoisted_10$1)
              ]),
              _: 1
            }, 8, ["modelValue", "preset-ranges"]),
            createBaseVNode("input", {
              type: "button",
              value: unref(t)("exportToCsv.message"),
              onClick: _cache[2] || (_cache[2] = ($event) => exportToCsv())
            }, null, 8, _hoisted_11$1)
          ]),
          createBaseVNode("div", _hoisted_12$1, [
            createBaseVNode("div", _hoisted_13$1, toDisplayString(unref(t)("averageTimeByDays.message")), 1),
            createBaseVNode("p", null, toDisplayString(unref(convertSummaryTimeToString)(tabsByDays.value.averageTime)), 1)
          ]),
          createBaseVNode("div", _hoisted_14$1, [
            createVNode(ByDaysChart, {
              data: tabsByDays.value
            }, null, 8, ["data"])
          ]),
          createBaseVNode("div", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList((_a = tabsByDays.value) == null ? void 0 : _a.days, (tabDay, i) => {
              return openBlock(), createBlock(Expander, {
                key: i,
                day: tabDay.day,
                time: tabDay.time
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(tabDay.tabs, (tab, i2) => {
                    return openBlock(), createBlock(TabItem, {
                      key: i2,
                      item: tab,
                      summaryTimeForWholeDay: tabDay.time
                    }, null, 8, ["item", "summaryTimeForWholeDay"]);
                  }), 128))
                ]),
                _: 2
              }, 1032, ["day", "time"]);
            }), 128))
          ])
        ]))
      ]));
    };
  }
});
const ByDays_vue_vue_type_style_index_0_scoped_fe0bbe25_lang = "";
const ByDays = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-fe0bbe25"]]);
const _hoisted_1$2 = {
  key: 0,
  class: "review-block"
};
const _hoisted_2$2 = ["value"];
const __default__$1 = {
  name: "Review"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const PROMPT_AT_TIME_OF_DAY = 12;
    const ADD_DAYS_FIRST = 2;
    const ADD_DAYS_NEXT = 5;
    const showReview = ref();
    onMounted(async () => {
      showReview.value = false;
      {
        const reviewDate = await settingsStorage.getValue(StorageParams.REVIEW_DATE);
        if (reviewDate == void 0) {
          let nextTime = await settingsStorage.getValue(StorageParams.REVIEW_PROMPT_AT);
          if (nextTime == void 0) {
            await settingsStorage.saveValue(
              StorageParams.REVIEW_PROMPT_AT,
              addDays(addHours(startOfToday(), PROMPT_AT_TIME_OF_DAY), ADD_DAYS_FIRST).toString()
            );
          } else {
            nextTime = new Date(nextTime);
            if (nextTime < /* @__PURE__ */ new Date())
              showReview.value = true;
          }
        }
      }
    });
    async function closeBlock() {
      showReview.value = false;
      await settingsStorage.saveValue(
        StorageParams.REVIEW_PROMPT_AT,
        addDays(addHours(startOfToday(), PROMPT_AT_TIME_OF_DAY), ADD_DAYS_NEXT).toString()
      );
    }
    async function openStore() {
      window.open(CHROME_STORE_REVIEW_URL, "_blank");
      await settingsStorage.saveValue(StorageParams.REVIEW_DATE, (/* @__PURE__ */ new Date()).toString());
    }
    return (_ctx, _cache) => {
      return showReview.value ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("p", null, toDisplayString(unref(t)("enjoyAndReview.message")), 1),
        createBaseVNode("img", {
          height: "15",
          src: _imports_0$1,
          onClick: _cache[0] || (_cache[0] = ($event) => closeBlock())
        }),
        createBaseVNode("input", {
          type: "button",
          value: unref(t)("enjoyAndReview.description"),
          onClick: _cache[1] || (_cache[1] = ($event) => openStore())
        }, null, 8, _hoisted_2$2)
      ])) : createCommentVNode("", true);
    };
  }
});
const Review_vue_vue_type_style_index_0_scoped_79d5e2d8_lang = "";
const Review = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-79d5e2d8"]]);
async function createOffscreen() {
  const path = "src/offscreen.html";
  const offscreenUrl = Browser.runtime.getURL(path);
  if (await chrome.offscreen.hasDocument())
    return;
  await chrome.offscreen.createDocument({
    url: offscreenUrl,
    reasons: ["AUDIO_PLAYBACK"],
    justification: "Play audio sounds"
  });
}
async function checkPomodoro() {
  let Period;
  ((Period2) => {
    Period2["work"] = "WORK";
    Period2["rest"] = "REST";
    Period2["finished"] = "FINISH";
  })(Period || (Period = {}));
  function isTargetPeriod(period) {
    let isPomodoroTargetPeriodEnd;
    for (let index = 1; index <= frequency; index++) {
      let ind = period == "WORK" ? index - 1 : index;
      const plusWorkingTime = workTime * ind;
      const plusRestTime = (restTime + 1) * (index - 1);
      const isPomodoroTargetPeriodStart = addSeconds(startTime, plusWorkingTime + plusRestTime);
      isPomodoroTargetPeriodEnd = addSeconds(startTime, plusWorkingTime + plusRestTime + workTime);
      const isTargetPeriod2 = now >= isPomodoroTargetPeriodStart && (addSeconds(now, -1) <= isPomodoroTargetPeriodEnd || now <= isPomodoroTargetPeriodEnd);
      if (isTargetPeriod2) {
        return {
          period,
          isTargetPeriod: isTargetPeriod2,
          isTargetPeriodFinishedNow: isDateEqual(addSeconds(now, -1), isPomodoroTargetPeriodEnd) || isDateEqual(now, isPomodoroTargetPeriodEnd)
        };
      }
    }
    return {
      period: "FINISH",
      isTargetPeriod: false,
      isTargetPeriodFinishedNow: false
    };
  }
  async function play(period) {
    function getSound() {
      switch (period) {
        case "WORK":
          return StorageParams.POMODORO_AUDIO_AFTER_WORK;
        case "REST":
          return StorageParams.POMODORO_AUDIO_AFTER_REST;
        case "FINISH":
          return StorageParams.POMODORO_AUDIO_AFTER_FINISHED;
      }
    }
    logger.log(`[Pomodoro] ${period}`);
    const sound = await storage.getValue(getSound());
    await createOffscreen();
    await Browser.runtime.sendMessage({
      message: Messages.PlayAudio,
      sound,
      offscreen: true
    });
  }
  const storage = injectStorage();
  const isPomodoroEnabled = await Settings.getInstance().getSetting(
    StorageParams.IS_POMODORO_ENABLED
  );
  if (!isPomodoroEnabled)
    return;
  const startTime = new Date(
    await Settings.getInstance().getSetting(StorageParams.POMODORO_START_TIME)
  );
  const workTime = await Settings.getInstance().getSetting(
    StorageParams.POMODORO_INTERVAL_WORK
  );
  const restTime = await Settings.getInstance().getSetting(
    StorageParams.POMODORO_INTERVAL_REST
  );
  const frequency = await Settings.getInstance().getSetting(
    StorageParams.POMODORO_FREQUENCY
  );
  const now = /* @__PURE__ */ new Date();
  const pomodoroEndTime = addSeconds(startTime, workTime * frequency + restTime * frequency);
  const activeTab = await Browser.tabs.query({ active: true });
  if (now >= pomodoroEndTime) {
    if (isDateEqual(now, pomodoroEndTime)) {
      logger.log(`[Pomodoro] Pomodoro finished`);
      await play(
        "FINISH"
        /* finished */
      );
    }
    await storage.saveValue(StorageParams.IS_POMODORO_ENABLED, false);
    await storage.saveValue(StorageParams.POMODORO_START_TIME, null);
    await useBadge({
      tabId: activeTab[0].id,
      text: null,
      color: BadgeColor.none,
      icon: BadgeIcon.default
    });
    return;
  }
  let target = isTargetPeriod(
    "WORK"
    /* work */
  );
  const isWork = target.isTargetPeriod;
  if (isWork) {
    await useBadge({
      tabId: activeTab[0].id,
      text: null,
      color: BadgeColor.none,
      icon: BadgeIcon.pomodoroWorkingTime
    });
  } else {
    target = isTargetPeriod(
      "REST"
      /* rest */
    );
    if (target.isTargetPeriod) {
      await useBadge({
        tabId: activeTab[0].id,
        text: null,
        color: BadgeColor.none,
        icon: BadgeIcon.pomodoroRestTime
      });
    }
  }
  if (target.isTargetPeriodFinishedNow)
    await play(target.period);
  return {
    isWork
  };
}
const _hoisted_1$1 = {
  key: 0,
  class: "pomodoro-popup-block"
};
const _hoisted_2$1 = { key: 0 };
const _hoisted_3$1 = { key: 1 };
const _hoisted_4$1 = ["value"];
const __default__ = {
  name: "PomodoroInfo"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const isEnabled = ref();
    const isWorkingTime = ref();
    onMounted(async () => {
      var _a;
      isEnabled.value = await settingsStorage.getValue(
        StorageParams.IS_POMODORO_ENABLED,
        IS_POMODORO_ENABLED_DEFAULT
      );
      isWorkingTime.value = (_a = await checkPomodoro()) == null ? void 0 : _a.isWork;
    });
    return (_ctx, _cache) => {
      return isEnabled.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("p", null, toDisplayString(unref(t)("pomodoroIsEnabled.message")), 1),
        isWorkingTime.value ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(unref(t)("pomodoroWork.message")), 1)) : createCommentVNode("", true),
        !isWorkingTime.value ? (openBlock(), createElementBlock("span", _hoisted_3$1, toDisplayString(unref(t)("pomodoroRest.message")), 1)) : createCommentVNode("", true),
        createBaseVNode("input", {
          type: "button",
          value: unref(t)("pomodoroSettings.message"),
          onClick: _cache[0] || (_cache[0] = ($event) => unref(openPage)(unref(SettingsTab).Pomodoro))
        }, null, 8, _hoisted_4$1)
      ])) : createCommentVNode("", true);
    };
  }
});
const PomodoroInfo_vue_vue_type_style_index_0_scoped_588fc8aa_lang = "";
const PomodoroInfo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-588fc8aa"]]);
const _withScopeId = (n) => (pushScopeId("data-v-b7a2b06f"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "headerBlock" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "d-inline-block" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "logo",
    height: "30",
    src: _imports_0$2
  }),
  /* @__PURE__ */ createBaseVNode("p", { class: "header" }, "Web Activity Time Tracker")
], -1));
const _hoisted_3 = { class: "icons-block" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_5$1,
  height: "22"
}, null, -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  height: "22",
  src: _imports_4
}, null, -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  height: "22",
  src: _imports_5
}, null, -1));
const _hoisted_7 = { class: "tabs" };
const _hoisted_8 = { title: "Today" };
const _hoisted_9 = {
  for: "todayTab",
  role: "button"
};
const _hoisted_10 = { title: "All The Time" };
const _hoisted_11 = {
  for: "allTimeTab",
  role: "button"
};
const _hoisted_12 = { title: "By Days" };
const _hoisted_13 = {
  for: "byDaysTab",
  role: "button"
};
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "slider" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" })
], -1));
const _hoisted_15 = { class: "content" };
const _hoisted_16 = { id: "todayTabList" };
const _hoisted_17 = { id: "summary" };
const _hoisted_18 = { id: "byDaysTabList" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Popup",
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const activeTab = ref();
    const darkMode = ref();
    onMounted(async () => {
      activeTab.value = TypeOfList.Today;
      darkMode.value = await settingsStorage.getValue(StorageParams.DARK_MODE, DARK_MODE_DEFAULT);
      if (darkMode.value)
        applyDarkMode(darkMode.value);
    });
    function selectTab(type) {
      activeTab.value = type;
    }
    async function changeDarkMode(value) {
      await settingsStorage.saveValue(StorageParams.DARK_MODE, value);
      darkMode.value = value;
      applyDarkMode(value);
      updateTab();
    }
    function updateTab() {
      const tempValue = activeTab.value;
      activeTab.value = void 0;
      setTimeout(() => {
        activeTab.value = tempValue;
      }, 50);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _hoisted_2,
          createBaseVNode("div", _hoisted_3, [
            darkMode.value == true ? (openBlock(), createElementBlock("img", {
              key: 0,
              class: "dark-mode-icon",
              height: "25",
              src: _imports_1,
              title: "Disable Dark Mode",
              onClick: _cache[0] || (_cache[0] = ($event) => changeDarkMode(false))
            })) : createCommentVNode("", true),
            darkMode.value == false ? (openBlock(), createElementBlock("img", {
              key: 1,
              class: "dark-mode-icon",
              title: "Enable Dark Mode",
              height: "25",
              src: _imports_2,
              onClick: _cache[1] || (_cache[1] = ($event) => changeDarkMode(true))
            })) : createCommentVNode("", true),
            createBaseVNode("a", {
              onClick: _cache[2] || (_cache[2] = ($event) => unref(openPage)(unref(SettingsTab).Pomodoro))
            }, [
              createTextVNode(toDisplayString(unref(t)("pomodoroMode.message")), 1),
              _hoisted_4
            ]),
            createBaseVNode("a", {
              class: "filter",
              onClick: _cache[3] || (_cache[3] = ($event) => unref(openPage)(unref(SettingsTab).Dashboard))
            }, [
              createTextVNode(toDisplayString(unref(t)("dashboard.message")), 1),
              _hoisted_5
            ]),
            createBaseVNode("a", {
              class: "filter",
              onClick: _cache[4] || (_cache[4] = ($event) => unref(openPage)(unref(SettingsTab).GeneralSettings))
            }, [
              createTextVNode(toDisplayString(unref(t)("settings.message")), 1),
              _hoisted_6
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("input", {
            type: "radio",
            id: "todayTab",
            name: "tab-control",
            checked: "",
            onChange: _cache[5] || (_cache[5] = ($event) => selectTab(unref(TypeOfList).Today))
          }, null, 32),
          createBaseVNode("input", {
            type: "radio",
            id: "allTimeTab",
            name: "tab-control",
            onChange: _cache[6] || (_cache[6] = ($event) => selectTab(unref(TypeOfList).All))
          }, null, 32),
          createBaseVNode("input", {
            type: "radio",
            id: "byDaysTab",
            name: "tab-control",
            onChange: _cache[7] || (_cache[7] = ($event) => selectTab(unref(TypeOfList).ByDays))
          }, null, 32),
          createBaseVNode("ul", null, [
            createBaseVNode("li", _hoisted_8, [
              createBaseVNode("label", _hoisted_9, [
                createBaseVNode("span", null, toDisplayString(unref(t)("today.message")), 1)
              ])
            ]),
            createBaseVNode("li", _hoisted_10, [
              createBaseVNode("label", _hoisted_11, [
                createBaseVNode("span", null, toDisplayString(unref(t)("allTime.message")), 1)
              ])
            ]),
            createBaseVNode("li", _hoisted_12, [
              createBaseVNode("label", _hoisted_13, [
                createBaseVNode("span", null, toDisplayString(unref(t)("byDays.message")), 1)
              ])
            ])
          ]),
          _hoisted_14,
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("section", _hoisted_16, [
              activeTab.value == unref(TypeOfList).Today ? (openBlock(), createBlock(TabList, {
                key: 0,
                type: unref(TypeOfList).Today,
                showAllStats: false
              }, null, 8, ["type"])) : createCommentVNode("", true)
            ]),
            createBaseVNode("section", _hoisted_17, [
              activeTab.value == unref(TypeOfList).All ? (openBlock(), createBlock(TabList, {
                key: 0,
                type: unref(TypeOfList).All,
                showAllStats: true
              }, null, 8, ["type"])) : createCommentVNode("", true)
            ]),
            createBaseVNode("section", _hoisted_18, [
              activeTab.value == unref(TypeOfList).ByDays ? (openBlock(), createBlock(ByDays, { key: 0 })) : createCommentVNode("", true)
            ])
          ])
        ]),
        createVNode(PomodoroInfo),
        createVNode(Review)
      ], 64);
    };
  }
});
const Popup_vue_vue_type_style_index_0_scoped_b7a2b06f_lang = "";
const Popup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b7a2b06f"]]);
const app = createApp(Popup);
app.component("VueDatePicker", oa);
app.use(i18n);
app.mount("body");
const main = "";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvbGlnaHQtbW9kZS5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2RhcmstbW9kZS5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2Rhc2hib2FyZC5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3NldHRpbmdzLnN2ZyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkSG91cnMvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZFNlY29uZHMvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZUb2RheS9pbmRleC5qcyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0V4cGFuZGVyLnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0J5RGF5cy52dWUiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9SZXZpZXcudnVlIiwiLi4vLi4vc3JjL29mZnNjcmVlbi9pbmRleC50cyIsIi4uLy4uL3NyYy9mdW5jdGlvbnMvcG9tb2Rvcm8udHMiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9Qb21vZG9yb0luZm8udnVlIiwiLi4vLi4vc3JjL3BhZ2VzL1BvcHVwLnZ1ZSIsIi4uLy4uL3NyYy9wb3B1cC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fZWNlYjUzMWZfX1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfX2IzOTI0YWQ4X19cIiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX184YTM2ZDg0NF9fXCIiLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fODYyY2VlNGNfX1wiIiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fSE9VUiA9IDM2MDAwMDA7XG5cbi8qKlxuICogQG5hbWUgYWRkSG91cnNcbiAqIEBjYXRlZ29yeSBIb3VyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBob3VycyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBob3VycyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgaG91cnMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgaG91cnMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDIgaG91cnMgdG8gMTAgSnVseSAyMDE0IDIzOjAwOjAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkSG91cnMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDIzLCAwKSwgMilcbiAqIC8vPT4gRnJpIEp1bCAxMSAyMDE0IDAxOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEhvdXJzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgYW1vdW50ICogTUlMTElTRUNPTkRTX0lOX0hPVVIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZFNlY29uZHNcbiAqIEBjYXRlZ29yeSBTZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2Ygc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAzMCBzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZFNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMCksIDMwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGFtb3VudCAqIDEwMDApO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIHRvZGF5LlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgdG9kYXkuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mVG9kYXkoKVxuICogLy89PiBNb24gT2N0IDYgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVG9kYXkoKSB7XG4gIHJldHVybiBzdGFydE9mRGF5KERhdGUubm93KCkpO1xufSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZXhwYW5kZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJleHBhbmRlci10cmlnZ2VyXCIgQGNsaWNrPVwib3BlbiA9ICFvcGVuXCIgOmNsYXNzPVwib3BlbiA/ICdhY3RpdmUnIDogJ2JlZm9yZUJvcmRlcidcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgY2xhc3M9XCJleHBhbmRlci10cmlnZ2VyLUljb25cIlxyXG4gICAgICAgICAgOmNsYXNzPVwieyBvcGVuOiBvcGVuIH1cIlxyXG4gICAgICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMlwiXHJcbiAgICAgICAgICBzdHJva2U9XCJjb3JuZmxvd2VyYmx1ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjEyLDIgMjAsMTAgMjgsMlwiIHN0cm9rZS13aWR0aD1cIjNcIiBmaWxsPVwibm9uZVwiPjwvcG9seWxpbmU+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgICAge3sgZGF5IH19XHJcbiAgICAgICAgPHNwYW4+e3sgY29udmVydFN1bW1hcnlUaW1lVG9TdHJpbmcodGltZSkgfX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8dHJhbnNpdGlvbiBuYW1lPVwibGVmdFRvUmlnaHRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImV4cGFuZGVyLWJvZHlcIiB2LXNob3c9XCJvcGVuXCI+XHJcbiAgICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvdHJhbnNpdGlvbj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnRXhwYW5kZXInLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCB7IGNvbnZlcnRTdW1tYXJ5VGltZVRvU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydGVyJztcclxuXHJcbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xyXG4gIGRheTogc3RyaW5nO1xyXG4gIHRpbWU6IG51bWJlcjtcclxufT4oKTtcclxuXHJcbmNvbnN0IG9wZW4gPSByZWY8Ym9vbGVhbj4oKTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uaGVhZGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG4uaGVhZGVyIHNwYW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiByZ2IoNTksIDU5LCA1OSk7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5leHBhbmRlci10cmlnZ2VyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMC43cmVtIDAuNXJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZWZlZjtcclxufVxyXG4uZXhwYW5kZXItdHJpZ2dlcjpob3ZlciB7XHJcbiAgY29sb3I6ICM0NzdkY2E7XHJcbn1cclxuLmV4cGFuZGVyLXRyaWdnZXIuYWN0aXZlIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjNDc3ZGNhO1xyXG59XHJcbi5leHBhbmRlci10cmlnZ2VyLUljb24ge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcclxufVxyXG4uZXhwYW5kZXItdHJpZ2dlci1JY29uLm9wZW4ge1xyXG4gIHN0cm9rZTogI2ZmNjM0NztcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcbi5leHBhbmRlci1ib2R5IHtcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgYmFja2dyb3VuZDogI2VmZjBmMjtcclxufVxyXG4ubGVmdFRvUmlnaHQtZW50ZXItYWN0aXZlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbGVmdFRvUmlnaHQgMC41cztcclxuICBhbmltYXRpb246IGxlZnRUb1JpZ2h0IDAuNXM7XHJcbn1cclxuLmxlZnRUb1JpZ2h0LWxlYXZlLWFjdGl2ZSB7XHJcbiAgYW5pbWF0aW9uOiBsZWZ0VG9SaWdodCAwLjVzIHJldmVyc2U7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxlZnRUb1JpZ2h0IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHZ3KTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyZW0pO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBsZWZ0VG9SaWdodCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDB2dyk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMmVtKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibm8tZGF0YVwiIHYtaWY9XCJpc0xvYWRpbmdcIj5cclxuICAgIDxpbWcgaGVpZ2h0PVwiNTVcIiBzcmM9XCIuLi9hc3NldHMvaWNvbnMvcHJlbG9hZGVyLmdpZlwiIC8+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiB2LWVsc2U+XHJcbiAgICA8bm8tZGF0YS1ieS1kYXlzIHYtaWY9XCJjb3VudE9mRGF5cyA9PSB1bmRlZmluZWQgfHwgKGNvdW50T2ZEYXlzID09IDAgJiYgIW5vRGF0YSlcIiAvPlxyXG4gICAgPGRpdiB2LWVsc2UtaWY9XCJub0RhdGFcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5vLWRhdGFcIj5cclxuICAgICAgICB7eyB0KCdub0RhdGFGb3JQZXJpb2QubWVzc2FnZScpIH19XHJcbiAgICAgICAgPFZ1ZURhdGVQaWNrZXJcclxuICAgICAgICAgIHJhbmdlXHJcbiAgICAgICAgICA6ZW5hYmxlLXRpbWUtcGlja2VyPVwiZmFsc2VcIlxyXG4gICAgICAgICAgY2xhc3M9XCJkYXRlLXBpY2tlclwiXHJcbiAgICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWREYXRlXCJcclxuICAgICAgICAgIDpwcmVzZXQtcmFuZ2VzPVwicHJlc2V0UmFuZ2VzXCJcclxuICAgICAgICAgIEB1cGRhdGU6bW9kZWwtdmFsdWU9XCJoYW5kbGVEYXRlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8dGVtcGxhdGUgI3llYXJseT1cInsgbGFiZWwsIHJhbmdlLCBwcmVzZXREYXRlUmFuZ2UgfVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBAY2xpY2s9XCJwcmVzZXREYXRlUmFuZ2UocmFuZ2UpXCI+e3sgbGFiZWwgfX08L3NwYW4+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPjwvVnVlRGF0ZVBpY2tlclxyXG4gICAgICAgID5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgdi1lbHNlPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1ibG9ja1wiPlxyXG4gICAgICAgIDxWdWVEYXRlUGlja2VyXHJcbiAgICAgICAgICByYW5nZVxyXG4gICAgICAgICAgOmVuYWJsZS10aW1lLXBpY2tlcj1cImZhbHNlXCJcclxuICAgICAgICAgIGNsYXNzPVwiZGF0ZS1waWNrZXJcIlxyXG4gICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkRGF0ZVwiXHJcbiAgICAgICAgICA6cHJlc2V0LXJhbmdlcz1cInByZXNldFJhbmdlc1wiXHJcbiAgICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwiaGFuZGxlRGF0ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHRlbXBsYXRlICN5ZWFybHk9XCJ7IGxhYmVsLCByYW5nZSwgcHJlc2V0RGF0ZVJhbmdlIH1cIj5cclxuICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwicHJlc2V0RGF0ZVJhbmdlKHJhbmdlKVwiPnt7IGxhYmVsIH19PC9zcGFuPlxyXG4gICAgICAgICAgPC90ZW1wbGF0ZT48L1Z1ZURhdGVQaWNrZXJcclxuICAgICAgICA+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiA6dmFsdWU9XCJ0KCdleHBvcnRUb0Nzdi5tZXNzYWdlJylcIiBAY2xpY2s9XCJleHBvcnRUb0NzdigpXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1ibG9jayBibG9ja1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj57eyB0KCdhdmVyYWdlVGltZUJ5RGF5cy5tZXNzYWdlJykgfX08L2Rpdj5cclxuICAgICAgICA8cD57eyBjb252ZXJ0U3VtbWFyeVRpbWVUb1N0cmluZyh0YWJzQnlEYXlzIS5hdmVyYWdlVGltZSkgfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWwtMjAgbXItMjAgYnktZGF5cy1jaGFydFwiPlxyXG4gICAgICAgIDxCeURheXNDaGFydCA6ZGF0YT1cInRhYnNCeURheXMhXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEV4cGFuZGVyXHJcbiAgICAgICAgICB2LWZvcj1cIih0YWJEYXksIGkpIG9mIHRhYnNCeURheXM/LmRheXNcIlxyXG4gICAgICAgICAgOmtleT1cImlcIlxyXG4gICAgICAgICAgOmRheT1cInRhYkRheS5kYXlcIlxyXG4gICAgICAgICAgOnRpbWU9XCJ0YWJEYXkudGltZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRhYkl0ZW1cclxuICAgICAgICAgICAgdi1mb3I9XCIodGFiLCBpKSBvZiB0YWJEYXkudGFic1wiXHJcbiAgICAgICAgICAgIDprZXk9XCJpXCJcclxuICAgICAgICAgICAgOml0ZW09XCJ0YWJcIlxyXG4gICAgICAgICAgICA6c3VtbWFyeVRpbWVGb3JXaG9sZURheT1cInRhYkRheS50aW1lXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9FeHBhbmRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnVGFiTGlzdCcsXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cclxuaW1wb3J0IHsgY29tcHV0ZWQsIG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcclxuaW1wb3J0IFRhYkl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9UYWJJdGVtLnZ1ZSc7XHJcbmltcG9ydCBOb0RhdGFCeURheXMgZnJvbSAnLi9Ob0RhdGFCeURheXMudnVlJztcclxuaW1wb3J0IEJ5RGF5c0NoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQnlEYXlzQ2hhcnQudnVlJztcclxuaW1wb3J0IEV4cGFuZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRXhwYW5kZXIudnVlJztcclxuaW1wb3J0IHsgVGFiTGlzdEJ5RGF5cyB9IGZyb20gJy4uL2R0by90YWJMaXN0U3VtbWFyeSc7XHJcbmltcG9ydCB7IHVzZVRhYkxpc3RCeURheXMgfSBmcm9tICcuLi9mdW5jdGlvbnMvdXNlVGFiTGlzdEJ5RGF5cyc7XHJcbmltcG9ydCB7IGNvbnZlcnRTdW1tYXJ5VGltZVRvU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydGVyJztcclxuaW1wb3J0IHsgcmFuZ2VzLCBUaGlzV2Vla1JhbmdlIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZSc7XHJcbmltcG9ydCB7IHVzZUltcG9ydFRvQ3N2V2l0aERhdGEgfSBmcm9tICcuLi9mdW5jdGlvbnMvdXNlSW1wb3J0VG9Dc3YnO1xyXG5pbXBvcnQgeyB1c2VGaWxlLCBGaWxlVHlwZSB9IGZyb20gJy4uL2Z1bmN0aW9ucy91c2VGaWxlJztcclxuXHJcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xyXG5cclxuY29uc3QgdGFic0J5RGF5cyA9IHJlZjxUYWJMaXN0QnlEYXlzPigpO1xyXG5jb25zdCBpc0xvYWRpbmcgPSByZWY8Ym9vbGVhbj4oKTtcclxuY29uc3Qgbm9EYXRhID0gcmVmPGJvb2xlYW4+KCk7XHJcbmNvbnN0IHNlbGVjdGVkRGF0ZSA9IHJlZjxEYXRlW10+KCk7XHJcblxyXG5jb25zdCBwcmVzZXRSYW5nZXMgPSByYW5nZXMoKTtcclxuXHJcbmNvbnN0IGNvdW50T2ZEYXlzID0gY29tcHV0ZWQoKCkgPT5cclxuICB0YWJzQnlEYXlzLnZhbHVlICE9IHVuZGVmaW5lZCA/IHRhYnNCeURheXMudmFsdWUuZGF5cy5sZW5ndGggOiAwLFxyXG4pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZExpc3QoZGF0ZUZyb206IERhdGUsIGRhdGVUbzogRGF0ZSkge1xyXG4gIGNvbnN0IHRhYkxpc3QgPSBhd2FpdCB1c2VUYWJMaXN0QnlEYXlzKGRhdGVGcm9tLCBkYXRlVG8pO1xyXG4gIGlmICh0YWJMaXN0ICE9IG51bGwpIHtcclxuICAgIHRhYnNCeURheXMudmFsdWUgPSB0YWJMaXN0O1xyXG4gICAgaWYgKHRhYkxpc3QuZGF5cy5sZW5ndGggPT0gMCAmJiB0YWJMaXN0LnN1bW1hcnlUaW1lID09IDApIG5vRGF0YS52YWx1ZSA9IHRydWU7XHJcbiAgICBlbHNlIG5vRGF0YS52YWx1ZSA9IGZhbHNlO1xyXG4gIH1cclxuICBpc0xvYWRpbmcudmFsdWUgPSBmYWxzZTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlRGF0ZShtb2RlbERhdGE6IERhdGVbXSkge1xyXG4gIHNlbGVjdGVkRGF0ZS52YWx1ZSA9IG1vZGVsRGF0YTtcclxuICBjb25zdCBkYXRlRnJvbSA9IHNlbGVjdGVkRGF0ZS52YWx1ZT8uWzBdIGFzIERhdGU7XHJcbiAgY29uc3QgZGF0ZVRvID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMV0gYXMgRGF0ZTtcclxuICBhd2FpdCBsb2FkTGlzdChkYXRlRnJvbSwgZGF0ZVRvKTtcclxufVxyXG5cclxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcclxuICBpc0xvYWRpbmcudmFsdWUgPSB0cnVlO1xyXG4gIHNlbGVjdGVkRGF0ZS52YWx1ZSA9IFRoaXNXZWVrUmFuZ2U7XHJcbiAgY29uc3QgZGF0ZUZyb20gPSBzZWxlY3RlZERhdGUudmFsdWU/LlswXSBhcyBEYXRlO1xyXG4gIGNvbnN0IGRhdGVUbyA9IHNlbGVjdGVkRGF0ZS52YWx1ZT8uWzFdIGFzIERhdGU7XHJcbiAgYXdhaXQgbG9hZExpc3QoZGF0ZUZyb20sIGRhdGVUbyk7XHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZXhwb3J0VG9Dc3YoKSB7XHJcbiAgY29uc3QgZGF0ZUZyb20gPSBzZWxlY3RlZERhdGUudmFsdWU/LlswXSBhcyBEYXRlO1xyXG4gIGNvbnN0IGRhdGVUbyA9IHNlbGVjdGVkRGF0ZS52YWx1ZT8uWzFdIGFzIERhdGU7XHJcbiAgY29uc3QgY3N2ID0gYXdhaXQgdXNlSW1wb3J0VG9Dc3ZXaXRoRGF0YSh0YWJzQnlEYXlzLnZhbHVlPy5kYXlzKTtcclxuICB1c2VGaWxlKFxyXG4gICAgY3N2LFxyXG4gICAgRmlsZVR5cGUuQ1NWLFxyXG4gICAgYHdlYnNpdGVzXyR7ZGF0ZUZyb20udG9Mb2NhbGVEYXRlU3RyaW5nKCl9LSR7ZGF0ZVRvLnRvTG9jYWxlRGF0ZVN0cmluZygpfS5jc3ZgLFxyXG4gICk7XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uc3RhdHMtYmxvY2suYmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBtYXJnaW46IDEwcHggMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGF0cy1ibG9jay5ibG9jayAuaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3B1cC1oZWFkZXIpO1xyXG4gIGNvbG9yOiByZ2IoNjYsIDY2LCA2Nik7XHJcbiAgcGFkZGluZzogNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5zdGF0cy1ibG9jay5ibG9jayBwIHtcclxuICBtYXJnaW46IDJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6IHJnYig1OSwgNTksIDU5KTtcclxufVxyXG4uZGF0ZS1ibG9jayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luOiAwIDI1cHg7XHJcbn1cclxuLmJ5LWRheXMtY2hhcnQge1xyXG4gIGhlaWdodDogMjQwcHg7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJyZXZpZXctYmxvY2tcIiB2LWlmPVwic2hvd1Jldmlld1wiPlxyXG4gICAgPHA+e3sgdCgnZW5qb3lBbmRSZXZpZXcubWVzc2FnZScpIH19PC9wPlxyXG4gICAgPGltZyBoZWlnaHQ9XCIxNVwiIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9jbG9zZS5zdmdcIiBAY2xpY2s9XCJjbG9zZUJsb2NrKClcIiAvPlxyXG4gICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiA6dmFsdWU9XCJ0KCdlbmpveUFuZFJldmlldy5kZXNjcmlwdGlvbicpXCIgQGNsaWNrPVwib3BlblN0b3JlKClcIiAvPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdSZXZpZXcnLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcclxuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBTdG9yYWdlUGFyYW1zIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XHJcbmltcG9ydCB7IGFkZERheXMsIHN0YXJ0T2ZUb2RheSB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHsgYWRkSG91cnMgfSBmcm9tICdkYXRlLWZucy9lc20nO1xyXG5pbXBvcnQgeyBDSFJPTUVfU1RPUkVfUkVWSUVXX1VSTCB9IGZyb20gJy4uL3V0aWxzL2Nocm9tZS11cmwnO1xyXG5cclxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XHJcblxyXG5jb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XHJcbmNvbnN0IFBST01QVF9BVF9USU1FX09GX0RBWSA9IDEyO1xyXG5jb25zdCBBRERfREFZU19GSVJTVCA9IDI7XHJcbmNvbnN0IEFERF9EQVlTX05FWFQgPSA1O1xyXG5cclxuY29uc3Qgc2hvd1JldmlldyA9IHJlZjxib29sZWFuPigpO1xyXG5cclxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcclxuICBzaG93UmV2aWV3LnZhbHVlID0gZmFsc2U7XHJcbiAgaWYgKF9fQlJPV1NFUl9fID09ICdjaHJvbWUnKSB7XHJcbiAgICBjb25zdCByZXZpZXdEYXRlID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFN0b3JhZ2VQYXJhbXMuUkVWSUVXX0RBVEUpO1xyXG5cclxuICAgIGlmIChyZXZpZXdEYXRlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICBsZXQgbmV4dFRpbWUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoU3RvcmFnZVBhcmFtcy5SRVZJRVdfUFJPTVBUX0FUKTtcclxuICAgICAgaWYgKG5leHRUaW1lID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoXHJcbiAgICAgICAgICBTdG9yYWdlUGFyYW1zLlJFVklFV19QUk9NUFRfQVQsXHJcbiAgICAgICAgICBhZGREYXlzKGFkZEhvdXJzKHN0YXJ0T2ZUb2RheSgpLCBQUk9NUFRfQVRfVElNRV9PRl9EQVkpLCBBRERfREFZU19GSVJTVCkudG9TdHJpbmcoKSxcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5leHRUaW1lID0gbmV3IERhdGUobmV4dFRpbWUpO1xyXG4gICAgICAgIGlmIChuZXh0VGltZSA8IG5ldyBEYXRlKCkpIHNob3dSZXZpZXcudmFsdWUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNsb3NlQmxvY2soKSB7XHJcbiAgc2hvd1Jldmlldy52YWx1ZSA9IGZhbHNlO1xyXG4gIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoXHJcbiAgICBTdG9yYWdlUGFyYW1zLlJFVklFV19QUk9NUFRfQVQsXHJcbiAgICBhZGREYXlzKGFkZEhvdXJzKHN0YXJ0T2ZUb2RheSgpLCBQUk9NUFRfQVRfVElNRV9PRl9EQVkpLCBBRERfREFZU19ORVhUKS50b1N0cmluZygpLFxyXG4gICk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG9wZW5TdG9yZSgpIHtcclxuICB3aW5kb3cub3BlbihDSFJPTUVfU1RPUkVfUkVWSUVXX1VSTCwgJ19ibGFuaycpO1xyXG4gIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoU3RvcmFnZVBhcmFtcy5SRVZJRVdfREFURSwgbmV3IERhdGUoKS50b1N0cmluZygpKTtcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5yZXZpZXctYmxvY2sge1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbn1cclxuLnJldmlldy1ibG9jayBpbnB1dFt0eXBlPSdidXR0b24nXSB7XHJcbiAgbWFyZ2luOiAwIDIwcHggMCAwO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG4ucmV2aWV3LWJsb2NrIHAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDhweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ucmV2aWV3LWJsb2NrIGltZyB7XHJcbiAgcGFkZGluZzogOXB4IDAgMCAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IEJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVPZmZzY3JlZW4oKSB7XHJcbiAgY29uc3QgcGF0aCA9ICdzcmMvb2Zmc2NyZWVuLmh0bWwnO1xyXG4gIGNvbnN0IG9mZnNjcmVlblVybCA9IEJyb3dzZXIucnVudGltZS5nZXRVUkwocGF0aCk7XHJcbiAgaWYgKGF3YWl0IGNocm9tZS5vZmZzY3JlZW4uaGFzRG9jdW1lbnQoKSkgcmV0dXJuO1xyXG4gIGF3YWl0IGNocm9tZS5vZmZzY3JlZW4uY3JlYXRlRG9jdW1lbnQoe1xyXG4gICAgdXJsOiBvZmZzY3JlZW5VcmwsXHJcbiAgICByZWFzb25zOiBbJ0FVRElPX1BMQVlCQUNLJ10sXHJcbiAgICBqdXN0aWZpY2F0aW9uOiAnUGxheSBhdWRpbyBzb3VuZHMnLFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFkZFNlY29uZHMgfSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCB7IGluamVjdFN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL2luamVjdC1zdG9yYWdlJztcclxuaW1wb3J0IHsgU3RvcmFnZVBhcmFtcyB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xyXG5pbXBvcnQgeyB1c2VCYWRnZSwgQmFkZ2VJY29uLCBCYWRnZUNvbG9yIH0gZnJvbSAnLi91c2VCYWRnZSc7XHJcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi9zZXR0aW5ncyc7XHJcbmltcG9ydCBCcm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XHJcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2xvZ2dlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSAnLi4vdXRpbHMvbWVzc2FnZXMnO1xyXG5pbXBvcnQgeyBpc0RhdGVFcXVhbCB9IGZyb20gJy4uL3V0aWxzL2RhdGUnO1xyXG5pbXBvcnQgeyBjcmVhdGVPZmZzY3JlZW4gfSBmcm9tICcuLi9vZmZzY3JlZW4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrUG9tb2Rvcm8oKSB7XHJcbiAgdHlwZSBQb21vZG9yb1BlcmlvZCA9IHtcclxuICAgIHBlcmlvZDogUGVyaW9kO1xyXG4gICAgaXNUYXJnZXRQZXJpb2Q6IGJvb2xlYW47XHJcbiAgICBpc1RhcmdldFBlcmlvZEZpbmlzaGVkTm93OiBib29sZWFuO1xyXG4gIH07XHJcblxyXG4gIGVudW0gUGVyaW9kIHtcclxuICAgIHdvcmsgPSAnV09SSycsXHJcbiAgICByZXN0ID0gJ1JFU1QnLFxyXG4gICAgZmluaXNoZWQgPSAnRklOSVNIJyxcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzVGFyZ2V0UGVyaW9kKHBlcmlvZDogUGVyaW9kKTogUG9tb2Rvcm9QZXJpb2Qge1xyXG4gICAgbGV0IGlzUG9tb2Rvcm9UYXJnZXRQZXJpb2RFbmQ7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IGZyZXF1ZW5jeTsgaW5kZXgrKykge1xyXG4gICAgICBsZXQgaW5kID0gcGVyaW9kID09IFBlcmlvZC53b3JrID8gaW5kZXggLSAxIDogaW5kZXg7XHJcbiAgICAgIGNvbnN0IHBsdXNXb3JraW5nVGltZSA9IHdvcmtUaW1lICogaW5kO1xyXG4gICAgICBjb25zdCBwbHVzUmVzdFRpbWUgPSAocmVzdFRpbWUgKyAxKSAqIChpbmRleCAtIDEpO1xyXG4gICAgICBjb25zdCBpc1BvbW9kb3JvVGFyZ2V0UGVyaW9kU3RhcnQgPSBhZGRTZWNvbmRzKHN0YXJ0VGltZSwgcGx1c1dvcmtpbmdUaW1lICsgcGx1c1Jlc3RUaW1lKTtcclxuICAgICAgaXNQb21vZG9yb1RhcmdldFBlcmlvZEVuZCA9IGFkZFNlY29uZHMoc3RhcnRUaW1lLCBwbHVzV29ya2luZ1RpbWUgKyBwbHVzUmVzdFRpbWUgKyB3b3JrVGltZSk7XHJcbiAgICAgIGNvbnN0IGlzVGFyZ2V0UGVyaW9kID1cclxuICAgICAgICBub3cgPj0gaXNQb21vZG9yb1RhcmdldFBlcmlvZFN0YXJ0ICYmXHJcbiAgICAgICAgKGFkZFNlY29uZHMobm93LCAtMSkgPD0gaXNQb21vZG9yb1RhcmdldFBlcmlvZEVuZCB8fCBub3cgPD0gaXNQb21vZG9yb1RhcmdldFBlcmlvZEVuZCk7XHJcblxyXG4gICAgICBpZiAoaXNUYXJnZXRQZXJpb2QpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcGVyaW9kOiBwZXJpb2QsXHJcbiAgICAgICAgICBpc1RhcmdldFBlcmlvZDogaXNUYXJnZXRQZXJpb2QsXHJcbiAgICAgICAgICBpc1RhcmdldFBlcmlvZEZpbmlzaGVkTm93OlxyXG4gICAgICAgICAgICBpc0RhdGVFcXVhbChhZGRTZWNvbmRzKG5vdywgLTEpLCBpc1BvbW9kb3JvVGFyZ2V0UGVyaW9kRW5kKSB8fFxyXG4gICAgICAgICAgICBpc0RhdGVFcXVhbChub3csIGlzUG9tb2Rvcm9UYXJnZXRQZXJpb2RFbmQpLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBlcmlvZDogUGVyaW9kLmZpbmlzaGVkLFxyXG4gICAgICBpc1RhcmdldFBlcmlvZDogZmFsc2UsXHJcbiAgICAgIGlzVGFyZ2V0UGVyaW9kRmluaXNoZWROb3c6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHBsYXkocGVyaW9kOiBQZXJpb2QpIHtcclxuICAgIGZ1bmN0aW9uIGdldFNvdW5kKCkge1xyXG4gICAgICBzd2l0Y2ggKHBlcmlvZCkge1xyXG4gICAgICAgIGNhc2UgUGVyaW9kLndvcms6XHJcbiAgICAgICAgICByZXR1cm4gU3RvcmFnZVBhcmFtcy5QT01PRE9ST19BVURJT19BRlRFUl9XT1JLO1xyXG4gICAgICAgIGNhc2UgUGVyaW9kLnJlc3Q6XHJcbiAgICAgICAgICByZXR1cm4gU3RvcmFnZVBhcmFtcy5QT01PRE9ST19BVURJT19BRlRFUl9SRVNUO1xyXG4gICAgICAgIGNhc2UgUGVyaW9kLmZpbmlzaGVkOlxyXG4gICAgICAgICAgcmV0dXJuIFN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fQVVESU9fQUZURVJfRklOSVNIRUQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxvZ2dlci5sb2coYFtQb21vZG9yb10gJHtwZXJpb2R9YCk7XHJcbiAgICBjb25zdCBzb3VuZCA9IGF3YWl0IHN0b3JhZ2UuZ2V0VmFsdWUoZ2V0U291bmQoKSk7XHJcbiAgICBhd2FpdCBjcmVhdGVPZmZzY3JlZW4oKTtcclxuICAgIGF3YWl0IEJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XHJcbiAgICAgIG1lc3NhZ2U6IE1lc3NhZ2VzLlBsYXlBdWRpbyxcclxuICAgICAgc291bmQ6IHNvdW5kLFxyXG4gICAgICBvZmZzY3JlZW46IHRydWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XHJcbiAgY29uc3QgaXNQb21vZG9yb0VuYWJsZWQgPSAoYXdhaXQgU2V0dGluZ3MuZ2V0SW5zdGFuY2UoKS5nZXRTZXR0aW5nKFxyXG4gICAgU3RvcmFnZVBhcmFtcy5JU19QT01PRE9ST19FTkFCTEVELFxyXG4gICkpIGFzIGJvb2xlYW47XHJcblxyXG4gIGlmICghaXNQb21vZG9yb0VuYWJsZWQpIHJldHVybjtcclxuXHJcbiAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoXHJcbiAgICAoYXdhaXQgU2V0dGluZ3MuZ2V0SW5zdGFuY2UoKS5nZXRTZXR0aW5nKFN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fU1RBUlRfVElNRSkpIGFzIHN0cmluZyxcclxuICApO1xyXG4gIGNvbnN0IHdvcmtUaW1lID0gKGF3YWl0IFNldHRpbmdzLmdldEluc3RhbmNlKCkuZ2V0U2V0dGluZyhcclxuICAgIFN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fSU5URVJWQUxfV09SSyxcclxuICApKSBhcyBudW1iZXI7XHJcbiAgY29uc3QgcmVzdFRpbWUgPSAoYXdhaXQgU2V0dGluZ3MuZ2V0SW5zdGFuY2UoKS5nZXRTZXR0aW5nKFxyXG4gICAgU3RvcmFnZVBhcmFtcy5QT01PRE9ST19JTlRFUlZBTF9SRVNULFxyXG4gICkpIGFzIG51bWJlcjtcclxuICBjb25zdCBmcmVxdWVuY3kgPSAoYXdhaXQgU2V0dGluZ3MuZ2V0SW5zdGFuY2UoKS5nZXRTZXR0aW5nKFxyXG4gICAgU3RvcmFnZVBhcmFtcy5QT01PRE9ST19GUkVRVUVOQ1ksXHJcbiAgKSkgYXMgbnVtYmVyO1xyXG5cclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICBjb25zdCBwb21vZG9yb0VuZFRpbWUgPSBhZGRTZWNvbmRzKHN0YXJ0VGltZSwgd29ya1RpbWUgKiBmcmVxdWVuY3kgKyByZXN0VGltZSAqIGZyZXF1ZW5jeSk7XHJcblxyXG4gIGNvbnN0IGFjdGl2ZVRhYiA9IGF3YWl0IEJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KTtcclxuXHJcbiAgaWYgKG5vdyA+PSBwb21vZG9yb0VuZFRpbWUpIHtcclxuICAgIGlmIChpc0RhdGVFcXVhbChub3csIHBvbW9kb3JvRW5kVGltZSkpIHtcclxuICAgICAgbG9nZ2VyLmxvZyhgW1BvbW9kb3JvXSBQb21vZG9ybyBmaW5pc2hlZGApO1xyXG4gICAgICBhd2FpdCBwbGF5KFBlcmlvZC5maW5pc2hlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgc3RvcmFnZS5zYXZlVmFsdWUoU3RvcmFnZVBhcmFtcy5JU19QT01PRE9ST19FTkFCTEVELCBmYWxzZSk7XHJcbiAgICBhd2FpdCBzdG9yYWdlLnNhdmVWYWx1ZShTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX1NUQVJUX1RJTUUsIG51bGwpO1xyXG4gICAgYXdhaXQgdXNlQmFkZ2Uoe1xyXG4gICAgICB0YWJJZDogYWN0aXZlVGFiWzBdLmlkLFxyXG4gICAgICB0ZXh0OiBudWxsLFxyXG4gICAgICBjb2xvcjogQmFkZ2VDb2xvci5ub25lLFxyXG4gICAgICBpY29uOiBCYWRnZUljb24uZGVmYXVsdCxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGV0IHRhcmdldCA9IGlzVGFyZ2V0UGVyaW9kKFBlcmlvZC53b3JrKTtcclxuICBjb25zdCBpc1dvcmsgPSB0YXJnZXQuaXNUYXJnZXRQZXJpb2Q7XHJcblxyXG4gIGlmIChpc1dvcmspIHtcclxuICAgIGF3YWl0IHVzZUJhZGdlKHtcclxuICAgICAgdGFiSWQ6IGFjdGl2ZVRhYlswXS5pZCxcclxuICAgICAgdGV4dDogbnVsbCxcclxuICAgICAgY29sb3I6IEJhZGdlQ29sb3Iubm9uZSxcclxuICAgICAgaWNvbjogQmFkZ2VJY29uLnBvbW9kb3JvV29ya2luZ1RpbWUsXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGFyZ2V0ID0gaXNUYXJnZXRQZXJpb2QoUGVyaW9kLnJlc3QpO1xyXG4gICAgaWYgKHRhcmdldC5pc1RhcmdldFBlcmlvZCkge1xyXG4gICAgICBhd2FpdCB1c2VCYWRnZSh7XHJcbiAgICAgICAgdGFiSWQ6IGFjdGl2ZVRhYlswXS5pZCxcclxuICAgICAgICB0ZXh0OiBudWxsLFxyXG4gICAgICAgIGNvbG9yOiBCYWRnZUNvbG9yLm5vbmUsXHJcbiAgICAgICAgaWNvbjogQmFkZ2VJY29uLnBvbW9kb3JvUmVzdFRpbWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHRhcmdldC5pc1RhcmdldFBlcmlvZEZpbmlzaGVkTm93KSBhd2FpdCBwbGF5KHRhcmdldC5wZXJpb2QpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaXNXb3JrLFxyXG4gIH07XHJcbn1cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwb21vZG9yby1wb3B1cC1ibG9ja1wiIHYtaWY9XCJpc0VuYWJsZWRcIj5cclxuICAgIDxwPnt7IHQoJ3BvbW9kb3JvSXNFbmFibGVkLm1lc3NhZ2UnKSB9fTwvcD5cclxuICAgIDxzcGFuIHYtaWY9XCJpc1dvcmtpbmdUaW1lXCI+e3sgdCgncG9tb2Rvcm9Xb3JrLm1lc3NhZ2UnKSB9fTwvc3Bhbj5cclxuICAgIDxzcGFuIHYtaWY9XCIhaXNXb3JraW5nVGltZVwiPnt7IHQoJ3BvbW9kb3JvUmVzdC5tZXNzYWdlJykgfX08L3NwYW4+XHJcbiAgICA8aW5wdXRcclxuICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIDp2YWx1ZT1cInQoJ3BvbW9kb3JvU2V0dGluZ3MubWVzc2FnZScpXCJcclxuICAgICAgQGNsaWNrPVwib3BlblBhZ2UoU2V0dGluZ3NUYWIuUG9tb2Rvcm8pXCJcclxuICAgIC8+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ1BvbW9kb3JvSW5mbycsXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cclxuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyBTdG9yYWdlUGFyYW1zLCBJU19QT01PRE9ST19FTkFCTEVEX0RFRkFVTFQgfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcclxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcclxuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBvcGVuUGFnZSB9IGZyb20gJy4uL3V0aWxzL29wZW4tcGFnZSc7XHJcbmltcG9ydCB7IFNldHRpbmdzVGFiIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xyXG5pbXBvcnQgeyBjaGVja1BvbW9kb3JvIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3BvbW9kb3JvJztcclxuXHJcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xyXG5jb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XHJcblxyXG5jb25zdCBpc0VuYWJsZWQgPSByZWY8Ym9vbGVhbj4oKTtcclxuY29uc3QgaXNXb3JraW5nVGltZSA9IHJlZjxib29sZWFuPigpO1xyXG5cclxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcclxuICBpc0VuYWJsZWQudmFsdWUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXHJcbiAgICBTdG9yYWdlUGFyYW1zLklTX1BPTU9ET1JPX0VOQUJMRUQsXHJcbiAgICBJU19QT01PRE9ST19FTkFCTEVEX0RFRkFVTFQsXHJcbiAgKTtcclxuXHJcbiAgaXNXb3JraW5nVGltZS52YWx1ZSA9IChhd2FpdCBjaGVja1BvbW9kb3JvKCkpPy5pc1dvcms7XHJcbn0pO1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5wb21vZG9yby1wb3B1cC1ibG9jayB7XHJcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBwYWRkaW5nOiA4cHggMTBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxufVxyXG4ucG9tb2Rvcm8tcG9wdXAtYmxvY2sgcCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5wb21vZG9yby1wb3B1cC1ibG9jayBzcGFuIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMjAyLCAxMDUpO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4ucG9tb2Rvcm8tcG9wdXAtYmxvY2sgaW5wdXRbdHlwZT0nYnV0dG9uJ10ge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImhlYWRlckJsb2NrXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgPGltZyBjbGFzcz1cImxvZ29cIiBoZWlnaHQ9XCIzMFwiIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy80OHg0OC5wbmdcIiAvPlxyXG4gICAgICA8cCBjbGFzcz1cImhlYWRlclwiPldlYiBBY3Rpdml0eSBUaW1lIFRyYWNrZXI8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJpY29ucy1ibG9ja1wiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgY2xhc3M9XCJkYXJrLW1vZGUtaWNvblwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjVcIlxyXG4gICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9saWdodC1tb2RlLnN2Z1wiXHJcbiAgICAgICAgdGl0bGU9XCJEaXNhYmxlIERhcmsgTW9kZVwiXHJcbiAgICAgICAgdi1pZj1cImRhcmtNb2RlID09IHRydWVcIlxyXG4gICAgICAgIEBjbGljaz1cImNoYW5nZURhcmtNb2RlKGZhbHNlKVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzcz1cImRhcmstbW9kZS1pY29uXCJcclxuICAgICAgICB0aXRsZT1cIkVuYWJsZSBEYXJrIE1vZGVcIlxyXG4gICAgICAgIGhlaWdodD1cIjI1XCJcclxuICAgICAgICBzcmM9XCIuLi9hc3NldHMvaWNvbnMvZGFyay1tb2RlLnN2Z1wiXHJcbiAgICAgICAgdi1pZj1cImRhcmtNb2RlID09IGZhbHNlXCJcclxuICAgICAgICBAY2xpY2s9XCJjaGFuZ2VEYXJrTW9kZSh0cnVlKVwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8YSBAY2xpY2s9XCJvcGVuUGFnZShTZXR0aW5nc1RhYi5Qb21vZG9ybylcIlxyXG4gICAgICAgID57eyB0KCdwb21vZG9yb01vZGUubWVzc2FnZScpIH19PGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvcG9tb2Rvcm8uc3ZnXCIgaGVpZ2h0PVwiMjJcIlxyXG4gICAgICAvPjwvYT5cclxuICAgICAgPGEgY2xhc3M9XCJmaWx0ZXJcIiBAY2xpY2s9XCJvcGVuUGFnZShTZXR0aW5nc1RhYi5EYXNoYm9hcmQpXCJcclxuICAgICAgICA+e3sgdCgnZGFzaGJvYXJkLm1lc3NhZ2UnKSB9fTxpbWcgaGVpZ2h0PVwiMjJcIiBzcmM9XCIuLi9hc3NldHMvaWNvbnMvZGFzaGJvYXJkLnN2Z1wiXHJcbiAgICAgIC8+PC9hPlxyXG4gICAgICA8YSBjbGFzcz1cImZpbHRlclwiIEBjbGljaz1cIm9wZW5QYWdlKFNldHRpbmdzVGFiLkdlbmVyYWxTZXR0aW5ncylcIlxyXG4gICAgICAgID57eyB0KCdzZXR0aW5ncy5tZXNzYWdlJykgfX08aW1nIGhlaWdodD1cIjIyXCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zL3NldHRpbmdzLnN2Z1wiXHJcbiAgICAgIC8+PC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInRhYnNcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICBpZD1cInRvZGF5VGFiXCJcclxuICAgICAgbmFtZT1cInRhYi1jb250cm9sXCJcclxuICAgICAgY2hlY2tlZFxyXG4gICAgICB2LW9uOmNoYW5nZT1cInNlbGVjdFRhYihUeXBlT2ZMaXN0LlRvZGF5KVwiXHJcbiAgICAvPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgIGlkPVwiYWxsVGltZVRhYlwiXHJcbiAgICAgIG5hbWU9XCJ0YWItY29udHJvbFwiXHJcbiAgICAgIHYtb246Y2hhbmdlPVwic2VsZWN0VGFiKFR5cGVPZkxpc3QuQWxsKVwiXHJcbiAgICAvPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgIGlkPVwiYnlEYXlzVGFiXCJcclxuICAgICAgbmFtZT1cInRhYi1jb250cm9sXCJcclxuICAgICAgdi1vbjpjaGFuZ2U9XCJzZWxlY3RUYWIoVHlwZU9mTGlzdC5CeURheXMpXCJcclxuICAgIC8+XHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaSB0aXRsZT1cIlRvZGF5XCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInRvZGF5VGFiXCIgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICA+PHNwYW4+e3sgdCgndG9kYXkubWVzc2FnZScpIH19PC9zcGFuPjwvbGFiZWxcclxuICAgICAgICA+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSB0aXRsZT1cIkFsbCBUaGUgVGltZVwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJhbGxUaW1lVGFiXCIgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICA+PHNwYW4+e3sgdCgnYWxsVGltZS5tZXNzYWdlJykgfX08L3NwYW4+PC9sYWJlbFxyXG4gICAgICAgID5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIHRpdGxlPVwiQnkgRGF5c1wiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJieURheXNUYWJcIiByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgID48c3Bhbj57eyB0KCdieURheXMubWVzc2FnZScpIH19PC9zcGFuPjwvbGFiZWxcclxuICAgICAgICA+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJzbGlkZXJcIj48ZGl2IGNsYXNzPVwiaW5kaWNhdG9yXCI+PC9kaXY+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cInRvZGF5VGFiTGlzdFwiPlxyXG4gICAgICAgIDxUYWJMaXN0XHJcbiAgICAgICAgICB2LWlmPVwiYWN0aXZlVGFiID09IFR5cGVPZkxpc3QuVG9kYXlcIlxyXG4gICAgICAgICAgOnR5cGU9XCJUeXBlT2ZMaXN0LlRvZGF5XCJcclxuICAgICAgICAgIDpzaG93QWxsU3RhdHM9XCJmYWxzZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cInN1bW1hcnlcIj5cclxuICAgICAgICA8VGFiTGlzdCB2LWlmPVwiYWN0aXZlVGFiID09IFR5cGVPZkxpc3QuQWxsXCIgOnR5cGU9XCJUeXBlT2ZMaXN0LkFsbFwiIDpzaG93QWxsU3RhdHM9XCJ0cnVlXCIgLz5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cImJ5RGF5c1RhYkxpc3RcIj5cclxuICAgICAgICA8QnlEYXlzIHYtaWY9XCJhY3RpdmVUYWIgPT0gVHlwZU9mTGlzdC5CeURheXNcIiAvPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8UG9tb2Rvcm9JbmZvIC8+XHJcbiAgPFJldmlldyAvPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cclxuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xyXG5pbXBvcnQgVGFiTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1RhYkxpc3QudnVlJztcclxuaW1wb3J0IEJ5RGF5cyBmcm9tICcuLi9jb21wb25lbnRzL0J5RGF5cy52dWUnO1xyXG5pbXBvcnQgUmV2aWV3IGZyb20gJy4uL2NvbXBvbmVudHMvUmV2aWV3LnZ1ZSc7XHJcbmltcG9ydCBQb21vZG9yb0luZm8gZnJvbSAnLi4vY29tcG9uZW50cy9Qb21vZG9yb0luZm8udnVlJztcclxuaW1wb3J0IHsgb3BlblBhZ2UgfSBmcm9tICcuLi91dGlscy9vcGVuLXBhZ2UnO1xyXG5pbXBvcnQgeyBTZXR0aW5nc1RhYiwgVHlwZU9mTGlzdCB9IGZyb20gJy4uL3V0aWxzL2VudW1zJztcclxuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBEQVJLX01PREVfREVGQVVMVCwgU3RvcmFnZVBhcmFtcyB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xyXG5pbXBvcnQgeyBhcHBseURhcmtNb2RlIH0gZnJvbSAnLi4vdXRpbHMvZGFyay1tb2RlJztcclxuXHJcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xyXG5jb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XHJcblxyXG5jb25zdCBhY3RpdmVUYWIgPSByZWY8VHlwZU9mTGlzdD4oKTtcclxuY29uc3QgZGFya01vZGUgPSByZWY8Ym9vbGVhbj4oKTtcclxuXHJcbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XHJcbiAgYWN0aXZlVGFiLnZhbHVlID0gVHlwZU9mTGlzdC5Ub2RheTtcclxuICBkYXJrTW9kZS52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShTdG9yYWdlUGFyYW1zLkRBUktfTU9ERSwgREFSS19NT0RFX0RFRkFVTFQpO1xyXG4gIGlmIChkYXJrTW9kZS52YWx1ZSkgYXBwbHlEYXJrTW9kZShkYXJrTW9kZS52YWx1ZSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0VGFiKHR5cGU6IFR5cGVPZkxpc3QpIHtcclxuICBhY3RpdmVUYWIudmFsdWUgPSB0eXBlO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjaGFuZ2VEYXJrTW9kZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoU3RvcmFnZVBhcmFtcy5EQVJLX01PREUsIHZhbHVlKTtcclxuICBkYXJrTW9kZS52YWx1ZSA9IHZhbHVlO1xyXG4gIGFwcGx5RGFya01vZGUodmFsdWUpO1xyXG4gIHVwZGF0ZVRhYigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUYWIoKSB7XHJcbiAgY29uc3QgdGVtcFZhbHVlID0gYWN0aXZlVGFiLnZhbHVlO1xyXG4gIGFjdGl2ZVRhYi52YWx1ZSA9IHVuZGVmaW5lZDtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGFjdGl2ZVRhYi52YWx1ZSA9IHRlbXBWYWx1ZTtcclxuICB9LCA1MCk7XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uaGVhZGVyQmxvY2sge1xyXG4gIGhlaWdodDogNTJweDtcclxufVxyXG4uaGVhZGVyQmxvY2sgLmhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDAgMCAwIDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzRhNGE0YTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XHJcbn1cclxuXHJcbi5oZWFkZXJCbG9jayBpbWcge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5oZWFkZXJCbG9jayAubG9nbyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDdweDtcclxufVxyXG4uaGVhZGVyQmxvY2sgLmljb25zLWJsb2NrIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiA3cHggMCAwIDA7XHJcbn1cclxuXHJcbi5oZWFkZXJCbG9jayAuaWNvbnMtYmxvY2sgYTpob3ZlciB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoNDAlKSBzZXBpYSg5NCUpIHNhdHVyYXRlKDMzNzElKSBodWUtcm90YXRlKDIyN2RlZykgYnJpZ2h0bmVzcyg5OSUpIGNvbnRyYXN0KDkyJSk7XHJcbn1cclxuXHJcbi5oZWFkZXJCbG9jayAuaWNvbnMtYmxvY2sgYSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uaGVhZGVyQmxvY2sgLmljb25zLWJsb2NrIGEgaW1nIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhlYWRlckJsb2NrIC5pY29ucy1ibG9jayAuZGFyay1tb2RlLWljb24ge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vcGFnZXMvUG9wdXAudnVlJztcclxuaW1wb3J0IFZ1ZURhdGVQaWNrZXIgZnJvbSAnQHZ1ZXBpYy92dWUtZGF0ZXBpY2tlcic7XHJcbmltcG9ydCAnQHZ1ZXBpYy92dWUtZGF0ZXBpY2tlci9kaXN0L21haW4uY3NzJztcclxuaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IGkxOG4gZnJvbSAnLi9wbHVnaW5zL2kxOG4nO1xyXG5cclxuY29uc3QgYXBwID0gY3JlYXRlQXBwKFBvcHVwKTtcclxuYXBwLmNvbXBvbmVudCgnVnVlRGF0ZVBpY2tlcicsIFZ1ZURhdGVQaWNrZXIpO1xyXG5hcHAudXNlKGkxOG4pO1xyXG5hcHAubW91bnQoJ2JvZHknKTtcclxuIl0sIm5hbWVzIjpbIl9fZGVmYXVsdF9fIiwiUGVyaW9kIiwiaXNUYXJnZXRQZXJpb2QiLCJWdWVEYXRlUGlja2VyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQWUsYUFBQTtBQ0FmLE1BQWUsYUFBQTtBQ0FmLE1BQWUsYUFBQTtBQ0FmLE1BQWUsYUFBQTtBQ0dmLElBQUksdUJBQXVCO0FBb0JaLFNBQVMsU0FBUyxXQUFXLGFBQWE7QUFDdkQsZUFBYSxHQUFHLFNBQVM7QUFDekIsTUFBSSxTQUFTLFVBQVUsV0FBVztBQUNsQyxTQUFPLGdCQUFnQixXQUFXLFNBQVMsb0JBQW9CO0FBQ2pFO0FDTmUsU0FBUyxXQUFXLFdBQVcsYUFBYTtBQUN6RCxlQUFhLEdBQUcsU0FBUztBQUN6QixNQUFJLFNBQVMsVUFBVSxXQUFXO0FBQ2xDLFNBQU8sZ0JBQWdCLFdBQVcsU0FBUyxHQUFJO0FBQ2pEO0FDTGUsU0FBUyxlQUFlO0FBQ3JDLFNBQU8sV0FBVyxLQUFLLElBQUcsQ0FBRTtBQUM5Qjs7Ozs7Ozs7Ozs7Ozs7QUNNQSxNQUFBQSxnQkFBZTtBQUFBLEVBQ2IsTUFBTTtBQUNSOzs7Ozs7OztBQVlBLFVBQU0sT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
