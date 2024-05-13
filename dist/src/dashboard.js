var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { B as Browser } from "../browser-polyfill.js";
import { i as injectStorage, a as ranges, S as StorageParams, V as VIEW_TIME_IN_BADGE_DEFAULT, h as INTERVAL_INACTIVITY_DEFAULT, D as DARK_MODE_DEFAULT, B as BLOCK_DEFERRAL_DEFAULT, T as ThisWeekRange, j as SHOW_CHANGELOG_DEFAULT, k as InactivityInterval, m as todayLocalDate, n as TypeOfUrl, o as isDomainEquals, p as convertHHMMToSeconds, L as ListWithTime, q as convertSecondsToHHMM, s as DAILY_NOTIFICATION_DEFAULT, N as NOTIFICATION_MESSAGE_DEFAULT, u as DAILY_SUMMARY_NOTIFICATION_TIME_DEFAULT, P as PomodoroSounds, I as IS_POMODORO_ENABLED_DEFAULT, v as POMODORO_INTERVAL_WORK_DEFAULT, w as POMODORO_INTERVAL_REST_DEFAULT, x as POMODORO_FREQUENCY_DEFAULT, y as POMODORO_AUDIO_AFTER_WORK_DEFAULT, z as POMODORO_AUDIO_AFTER_REST_DEFAULT, A as POMODORO_AUDIO_AFTER_FINISHED_DEFAULT, l as logger, E as CHROME_STORE_CLEAR_YOUTUBE_URL, F as CHROME_STORE_SUPPORT_URL, C as CHROME_STORE_REVIEW_URL, c as convertSummaryTimeToString, e as SettingsTab, G as StorageDeserializeParam, H as convertStringTimeIntervalToSeconds, J as convertHoursToTime, f as TypeOfList, K as getEnumValueTab, g as _imports_0$5 } from "../general.js";
import { i as applyDarkMode, m as useImportToCsv, c as useFile, F as FileType, n as injectTabsRepository, p as Favicon, q as extractHostname, f as useBadge, g as BadgeColor, h as BadgeIcon, r as isSameDay, B as ByDaysChart, o as openPage, t as getTypeOfUrl, _ as _sfc_main$g, d as _imports_0$4, C as Chart, v as CategoryScale, L as LinearScale, w as BarElement, x as plugin_title, y as plugin_tooltip, z as plugin_legend, A as Bar, j as TabList, k as _imports_5, l as oa } from "../dark.js";
import { d as defineComponent, o as openBlock, c as createElementBlock, m as createBlock, w as withCtx, F as Fragment, q as renderList, z as normalizeStyle, g as renderSlot, n as normalizeClass, a as createBaseVNode, s as createCommentVNode, A as resolveDynamicComponent, B as TransitionGroup, i as useI18n, r as ref, k as onMounted, l as resolveComponent, f as withDirectives, C as vModelCheckbox, u as unref, t as toDisplayString, D as vModelSelect, e as createVNode, _ as _export_sfc, E as vModelText, j as computed, b as createTextVNode, p as pushScopeId, h as popScopeId, G as watch, x as createApp, y as i18n } from "../i18n.js";
import { M as Messages } from "../messages.js";
import { P as PromoClearYouTube, u as useExtensionPage } from "../PromoClearYouTube.js";
const _imports_1$4 = "/s-dashboard.svg";
const _imports_2$1 = "/s-whitelist.svg";
const _imports_3$1 = "/s-limits.svg";
const _imports_4 = "/s-notifications.svg";
const _imports_6 = "/s-settings.svg";
const _imports_7 = "/s-about.svg";
function M(t) {
  return { all: t = t || /* @__PURE__ */ new Map(), on: function(e, i) {
    var s = t.get(e);
    s ? s.push(i) : t.set(e, [i]);
  }, off: function(e, i) {
    var s = t.get(e);
    s && (i ? s.splice(s.indexOf(i) >>> 0, 1) : t.set(e, []));
  }, emit: function(e, i) {
    var s = t.get(e);
    s && s.slice().map(function(n) {
      n(i);
    }), (s = t.get("*")) && s.slice().map(function(n) {
      n(e, i);
    });
  } };
}
const d = M(), C = /* @__PURE__ */ new Map(), w = {
  x: ["left", "center", "right"],
  y: ["top", "bottom"]
}, R = ((t) => () => t++)(0), V = (t) => typeof t != "string" ? [] : t.split(/\s+/gi).filter((e) => e), W = (t) => {
  typeof t == "string" && (t = V(t));
  let e = null, i = null;
  return t.forEach((s) => {
    w.y.indexOf(s) !== -1 && (i = s), w.x.indexOf(s) !== -1 && (e = s);
  }), { x: e, y: i };
};
class Y {
  constructor(e, i, s) {
    this.remaining = i, this.callback = e, this.notifyItem = s, this.resume();
  }
  pause() {
    clearTimeout(this.notifyItem.timer), this.remaining -= Date.now() - this.start;
  }
  resume() {
    this.start = Date.now(), clearTimeout(this.notifyItem.timer), this.notifyItem.timer = setTimeout(this.callback, this.remaining);
  }
}
const m = {
  position: ["top", "right"],
  cssAnimation: "vn-fade",
  velocityAnimation: {
    enter: (t) => ({
      height: [t.clientHeight, 0],
      opacity: [1, 0]
    }),
    leave: {
      height: 0,
      opacity: [0, 1]
    }
  }
}, j = defineComponent({
  name: "velocity-group",
  emits: ["after-leave", "leave", "enter"],
  methods: {
    enter(t, e) {
      this.$emit("enter", t, e);
    },
    leave(t, e) {
      this.$emit("leave", t, e);
    },
    afterLeave() {
      this.$emit("after-leave");
    }
  }
}), v = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [s, n] of e)
    i[s] = n;
  return i;
};
function G(t, e, i, s, n, c) {
  return openBlock(), createBlock(TransitionGroup, {
    tag: "span",
    css: false,
    onEnter: t.enter,
    onLeave: t.leave,
    onAfterLeave: t.afterLeave
  }, {
    default: withCtx(() => [
      renderSlot(t.$slots, "default")
    ]),
    _: 3
  }, 8, ["onEnter", "onLeave", "onAfterLeave"]);
}
const z = /* @__PURE__ */ v(j, [["render", G]]), F = defineComponent({
  name: "css-group",
  inheritAttrs: false,
  props: {
    name: { type: String, required: true }
  }
});
function P(t, e, i, s, n, c) {
  return openBlock(), createBlock(TransitionGroup, {
    tag: "span",
    name: t.name
  }, {
    default: withCtx(() => [
      renderSlot(t.$slots, "default")
    ]),
    _: 3
  }, 8, ["name"]);
}
const q = /* @__PURE__ */ v(F, [["render", P]]), h = "[-+]?[0-9]*.?[0-9]+", L = [
  {
    name: "px",
    regexp: new RegExp(`^${h}px$`)
  },
  {
    name: "%",
    regexp: new RegExp(`^${h}%$`)
  },
  /**
   * Fallback option
   * If no suffix specified, assigning "px"
   */
  {
    name: "px",
    regexp: new RegExp(`^${h}$`)
  }
], J = (t) => {
  if (t === "auto")
    return {
      type: t,
      value: 0
    };
  for (let e = 0; e < L.length; e++) {
    const i = L[e];
    if (i.regexp.test(t))
      return {
        type: i.name,
        value: parseFloat(t)
      };
  }
  return {
    type: "",
    value: t
  };
}, K = (t) => {
  switch (typeof t) {
    case "number":
      return { type: "px", value: t };
    case "string":
      return J(t);
    default:
      return { type: "", value: t };
  }
}, f = {
  IDLE: 0,
  DESTROYED: 2
}, Q = defineComponent({
  name: "notifications",
  components: {
    VelocityGroup: z,
    CssGroup: q
  },
  props: {
    group: {
      type: String,
      default: ""
    },
    width: {
      type: [Number, String],
      default: 300
    },
    reverse: {
      type: Boolean,
      default: false
    },
    position: {
      type: [String, Array],
      default: m.position
    },
    classes: {
      type: String,
      default: "vue-notification"
    },
    animationType: {
      type: String,
      default: "css"
    },
    animation: {
      type: Object,
      default: m.velocityAnimation
    },
    animationName: {
      type: String,
      default: m.cssAnimation
    },
    speed: {
      type: Number,
      default: 300
    },
    /* Todo */
    cooldown: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 3e3
    },
    delay: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1 / 0
    },
    ignoreDuplicates: {
      type: Boolean,
      default: false
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    pauseOnHover: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click", "destroy", "start"],
  data() {
    return {
      list: [],
      velocity: C.get("velocity"),
      timerControl: null
    };
  },
  computed: {
    actualWidth() {
      return K(this.width);
    },
    isVA() {
      return this.animationType === "velocity";
    },
    componentName() {
      return this.isVA ? "velocity-group" : "css-group";
    },
    styles() {
      const { x: t, y: e } = W(this.position), i = this.actualWidth.value, s = this.actualWidth.type, n = {
        width: i + s
      };
      return e && (n[e] = "0px"), t && (t === "center" ? n.left = `calc(50% - ${+i / 2}${s})` : n[t] = "0px"), n;
    },
    active() {
      return this.list.filter((t) => t.state !== f.DESTROYED);
    },
    botToTop() {
      return this.styles.hasOwnProperty("bottom");
    }
  },
  mounted() {
    d.on("add", this.addItem), d.on("close", this.closeItem);
  },
  methods: {
    destroyIfNecessary(t) {
      this.$emit("click", t), this.closeOnClick && this.destroy(t);
    },
    pauseTimeout() {
      var t;
      this.pauseOnHover && ((t = this.timerControl) == null || t.pause());
    },
    resumeTimeout() {
      var t;
      this.pauseOnHover && ((t = this.timerControl) == null || t.resume());
    },
    addItem(t = {}) {
      if (t.group || (t.group = ""), t.data || (t.data = {}), this.group !== t.group)
        return;
      if (t.clean || t.clear) {
        this.destroyAll();
        return;
      }
      const e = typeof t.duration == "number" ? t.duration : this.duration, i = typeof t.speed == "number" ? t.speed : this.speed, s = typeof t.ignoreDuplicates == "boolean" ? t.ignoreDuplicates : this.ignoreDuplicates, { title: n, text: c, type: o, data: l, id: I } = t, r = {
        id: I || R(),
        title: n,
        text: c,
        type: o,
        state: f.IDLE,
        speed: i,
        length: e + 2 * i,
        data: l
      };
      e >= 0 && (this.timerControl = new Y(() => this.destroy(r), r.length, r));
      const O = this.reverse ? !this.botToTop : this.botToTop;
      let u = -1;
      const S = this.active.some((E) => E.title === t.title && E.text === t.text);
      (!s || !S) && (O ? (this.list.push(r), this.$emit("start", r), this.active.length > this.max && (u = 0)) : (this.list.unshift(r), this.$emit("start", r), this.active.length > this.max && (u = this.active.length - 1)), u !== -1 && this.destroy(this.active[u]));
    },
    closeItem(t) {
      this.destroyById(t);
    },
    notifyClass(t) {
      return [
        "vue-notification-template",
        this.classes,
        t.type || ""
      ];
    },
    notifyWrapperStyle(t) {
      return this.isVA ? void 0 : { transition: `all ${t.speed}ms` };
    },
    destroy(t) {
      clearTimeout(t.timer), t.state = f.DESTROYED, this.clean(), this.$emit("destroy", t);
    },
    destroyById(t) {
      const e = this.list.find((i) => i.id === t);
      e && this.destroy(e);
    },
    destroyAll() {
      this.active.forEach(this.destroy);
    },
    getAnimation(t, e) {
      var s;
      const i = (s = this.animation) == null ? void 0 : s[t];
      return typeof i == "function" ? i.call(this, e) : i;
    },
    enter(t, e) {
      if (!this.isVA)
        return;
      const i = this.getAnimation("enter", t);
      this.velocity(t, i, {
        duration: this.speed,
        complete: e
      });
    },
    leave(t, e) {
      if (!this.isVA)
        return;
      const i = this.getAnimation("leave", t);
      this.velocity(t, i, {
        duration: this.speed,
        complete: e
      });
    },
    clean() {
      this.list = this.list.filter((t) => t.state !== f.DESTROYED);
    }
  }
});
const U = ["data-id"], X = ["onClick"], Z = ["innerHTML"], tt = ["innerHTML"];
function et(t, e, i, s, n, c) {
  return openBlock(), createElementBlock("div", {
    class: "vue-notification-group",
    style: normalizeStyle(t.styles)
  }, [
    (openBlock(), createBlock(resolveDynamicComponent(t.componentName), {
      name: t.animationName,
      onEnter: t.enter,
      onLeave: t.leave,
      onAfterLeave: t.clean
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(t.active, (o) => (openBlock(), createElementBlock("div", {
          key: o.id,
          class: "vue-notification-wrapper",
          style: normalizeStyle(t.notifyWrapperStyle(o)),
          "data-id": o.id,
          onMouseenter: e[0] || (e[0] = (...l) => t.pauseTimeout && t.pauseTimeout(...l)),
          onMouseleave: e[1] || (e[1] = (...l) => t.resumeTimeout && t.resumeTimeout(...l))
        }, [
          renderSlot(t.$slots, "body", {
            class: normalizeClass([t.classes, o.type]),
            item: o,
            close: () => t.destroy(o)
          }, () => [
            createBaseVNode("div", {
              class: normalizeClass(t.notifyClass(o)),
              onClick: (l) => t.destroyIfNecessary(o)
            }, [
              o.title ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "notification-title",
                innerHTML: o.title
              }, null, 8, Z)) : createCommentVNode("", true),
              createBaseVNode("div", {
                class: "notification-content",
                innerHTML: o.text
              }, null, 8, tt)
            ], 10, X)
          ])
        ], 44, U))), 128))
      ]),
      _: 3
    }, 40, ["name", "onEnter", "onLeave", "onAfterLeave"]))
  ], 4);
}
const it = /* @__PURE__ */ v(Q, [["render", et]]), A = (t) => {
  typeof t == "string" && (t = { title: "", text: t }), typeof t == "object" && d.emit("add", t);
};
A.close = (t) => {
  d.emit("close", t);
};
const rt = () => ({ notify: A });
function st(t, e = {}) {
  Object.entries(e).forEach((s) => C.set(...s));
  const i = e.name || "notify";
  t.config.globalProperties["$" + i] = A, t.component(e.componentName || "Notifications", it);
}
const at = {
  install: st
};
(function() {
  var o;
  try {
    if (typeof document != "undefined") {
      var e = document.createElement("style");
      e.nonce = (o = document.head.querySelector("meta[property=csp-nonce]")) == null ? void 0 : o.content, e.appendChild(document.createTextNode(".vue-notification-group{display:block;position:fixed;z-index:5000}.vue-notification-wrapper{display:block;overflow:hidden;width:100%;margin:0;padding:0}.notification-title{font-weight:600}.vue-notification-template{display:block;box-sizing:border-box;background:white;text-align:left}.vue-notification{display:block;box-sizing:border-box;text-align:left;font-size:12px;padding:10px;margin:0 5px 5px;color:#fff;background:#44A4FC;border-left:5px solid #187FE7}.vue-notification.warn{background:#ffb648;border-left-color:#f48a06}.vue-notification.error{background:#E54D42;border-left-color:#b82e24}.vue-notification.success{background:#68CD86;border-left-color:#42a85f}.vn-fade-enter-active,.vn-fade-leave-active,.vn-fade-move{transition:all .5s}.vn-fade-enter-from,.vn-fade-leave-to{opacity:0}")), document.head.appendChild(e);
    }
  } catch (i) {
    console.error("vite-plugin-css-injected-by-js", i);
  }
})();
async function useRemoveAllData() {
  const storage = injectStorage();
  await storage.saveIntervalList([]);
  await Browser.runtime.sendMessage(Messages.ClearAllData);
}
async function useRestoreData(json) {
  if (json != null && json != void 0 && json != "") {
    const data = JSON.parse(json);
    await Browser.runtime.sendMessage({
      message: Messages.Restore,
      data
    });
  }
}
const _hoisted_1$f = { class: "settings-item" };
const _hoisted_2$d = { class: "setting-header" };
const _hoisted_3$d = { class: "description" };
const _hoisted_4$c = { class: "settings-item" };
const _hoisted_5$c = { class: "setting-header" };
const _hoisted_6$c = { class: "description" };
const _hoisted_7$b = { class: "settings-item" };
const _hoisted_8$9 = { class: "setting-header" };
const _hoisted_9$7 = { class: "settings-item" };
const _hoisted_10$7 = { class: "setting-header d-inline-block" };
const _hoisted_11$5 = { class: "d-inline-block ml-10" };
const _hoisted_12$5 = ["value"];
const _hoisted_13$5 = ["value"];
const _hoisted_14$3 = ["value"];
const _hoisted_15$3 = ["value"];
const _hoisted_16$2 = ["value"];
const _hoisted_17$2 = ["value"];
const _hoisted_18$2 = ["value"];
const _hoisted_19$2 = ["value"];
const _hoisted_20$1 = { class: "description" };
const _hoisted_21$1 = { class: "settings-item" };
const _hoisted_22$1 = { class: "setting-header d-inline-block" };
const _hoisted_23$1 = { class: "description" };
const _hoisted_24$1 = { class: "export-block" };
const _hoisted_25$1 = ["onClick"];
const _hoisted_26$1 = ["value"];
const _hoisted_27$1 = { class: "settings-item" };
const _hoisted_28$1 = { class: "setting-header d-inline-block" };
const _hoisted_29$1 = { class: "description" };
const _hoisted_30$1 = ["value"];
const _hoisted_31$1 = { class: "settings-item" };
const _hoisted_32$1 = { class: "setting-header d-inline-block" };
const _hoisted_33$1 = { class: "description" };
const _hoisted_34$1 = ["value"];
const _hoisted_35$1 = ["value"];
const _hoisted_36$1 = { class: "settings-item" };
const _hoisted_37$1 = { class: "setting-header" };
const _hoisted_38$1 = { class: "description" };
const _hoisted_39$1 = {
  key: 0,
  id: "removeAllConfirmModal",
  class: "modal"
};
const _hoisted_40$1 = { class: "modal-content" };
const _hoisted_41$1 = { class: "text-center" };
const _hoisted_42$1 = { class: "text-center" };
const _hoisted_43$1 = ["value"];
const _hoisted_44 = ["value"];
const __default__$e = {
  name: "GeneralSettings"
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  ...__default__$e,
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const notification = rt();
    const viewTimeInBadge = ref();
    const intervalInactivity = ref();
    const allowDeferringBlock = ref();
    const darkMode = ref();
    const selectedDate = ref();
    const presetRanges = ranges();
    const needToConfirmDeleteAllData = ref();
    const showChangelog = ref();
    const restoreFile = ref();
    onMounted(async () => {
      viewTimeInBadge.value = await settingsStorage.getValue(
        StorageParams.VIEW_TIME_IN_BADGE,
        VIEW_TIME_IN_BADGE_DEFAULT
      );
      intervalInactivity.value = await settingsStorage.getValue(
        StorageParams.INTERVAL_INACTIVITY,
        INTERVAL_INACTIVITY_DEFAULT
      );
      darkMode.value = await settingsStorage.getValue(StorageParams.DARK_MODE, DARK_MODE_DEFAULT);
      allowDeferringBlock.value = await settingsStorage.getValue(
        StorageParams.BLOCK_DEFERRAL,
        BLOCK_DEFERRAL_DEFAULT
      );
      selectedDate.value = ThisWeekRange;
      showChangelog.value = await settingsStorage.getValue(
        StorageParams.SHOW_CHANGELOG,
        SHOW_CHANGELOG_DEFAULT
      );
    });
    async function onChange(storageParam, target) {
      if (target != null)
        await save(
          storageParam,
          storageParam == StorageParams.INTERVAL_INACTIVITY ? Number(target.value) : target.checked
        );
      if (storageParam == StorageParams.DARK_MODE)
        applyDarkMode(target.checked);
    }
    async function save(storageParam, value) {
      if (value != void 0)
        await settingsStorage.saveValue(storageParam, value);
    }
    async function handleDate(modelData) {
      selectedDate.value = modelData;
    }
    async function exportToCsv() {
      var _a, _b;
      const dateFrom = (_a = selectedDate.value) == null ? void 0 : _a[0];
      const dateTo = (_b = selectedDate.value) == null ? void 0 : _b[1];
      if (dateFrom == void 0 || dateTo == void 0) {
        notification.notify({
          title: "No time period selected",
          type: "warn"
        });
      } else {
        const csv = await useImportToCsv(dateFrom, dateTo);
        useFile(
          csv,
          FileType.CSV,
          `websites_${dateFrom.toLocaleDateString()}-${dateTo.toLocaleDateString()}.csv`
        );
      }
    }
    async function removeAll() {
      needToConfirmDeleteAllData.value = true;
    }
    async function removeAllConfirm() {
      await useRemoveAllData();
      needToConfirmDeleteAllData.value = false;
    }
    function cancel() {
      needToConfirmDeleteAllData.value = false;
    }
    async function backup() {
      const repo = await injectTabsRepository();
      const tabs = repo.getTabs();
      const json = JSON.stringify(tabs);
      useFile(json, FileType.JSON, `backup-${todayLocalDate()}.json`);
    }
    function restore() {
      restoreFile.value.click();
    }
    function restoreFileUpload() {
      try {
        const file = restoreFile.value.files[0];
        if (file != null && file.type === FileType.JSON) {
          var reader = new FileReader();
          reader.readAsText(file, "UTF-8");
          reader.onload = async (readerEvent) => {
            var _a;
            if (readerEvent != null) {
              let content = (_a = readerEvent.target) == null ? void 0 : _a.result;
              if (content != null) {
                await useRestoreData(content);
              }
            }
          };
        } else {
          notification.notify({
            title: "Wrong restore file format",
            type: "warn"
          });
        }
      } catch {
        notification.notify({
          title: "Wrong restore file format",
          type: "warn"
        });
      }
    }
    return (_ctx, _cache) => {
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$f, [
          createBaseVNode("label", _hoisted_2$d, [
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              class: "filled-in",
              id: "viewTimeInBadge",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => viewTimeInBadge.value = $event),
              onChange: _cache[1] || (_cache[1] = ($event) => onChange(unref(StorageParams).VIEW_TIME_IN_BADGE, $event.target))
            }, null, 544), [
              [vModelCheckbox, viewTimeInBadge.value]
            ]),
            createBaseVNode("span", null, toDisplayString(unref(t)("viewTimeInBadge.message")), 1),
            createBaseVNode("p", _hoisted_3$d, toDisplayString(unref(t)("viewTimeInBadge.description")), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_4$c, [
          createBaseVNode("label", _hoisted_5$c, [
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              class: "filled-in",
              id: "blockDeferral",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => allowDeferringBlock.value = $event),
              onChange: _cache[3] || (_cache[3] = ($event) => onChange(unref(StorageParams).BLOCK_DEFERRAL, $event.target))
            }, null, 544), [
              [vModelCheckbox, allowDeferringBlock.value]
            ]),
            createBaseVNode("span", null, toDisplayString(unref(t)("allowDeferringBlock.message")), 1),
            createBaseVNode("p", _hoisted_6$c, toDisplayString(unref(t)("allowDeferringBlock.description")), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$b, [
          createBaseVNode("label", _hoisted_8$9, [
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              class: "filled-in",
              id: "darkMode",
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => darkMode.value = $event),
              onChange: _cache[5] || (_cache[5] = ($event) => onChange(unref(StorageParams).DARK_MODE, $event.target))
            }, null, 544), [
              [vModelCheckbox, darkMode.value]
            ]),
            createBaseVNode("span", null, toDisplayString(unref(t)("darkTheme.message")), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_9$7, [
          createBaseVNode("label", _hoisted_10$7, toDisplayString(unref(t)("intervalInactivity.message")), 1),
          createBaseVNode("div", _hoisted_11$5, [
            withDirectives(createBaseVNode("select", {
              class: "option",
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => intervalInactivity.value = $event),
              onChange: _cache[7] || (_cache[7] = ($event) => onChange(unref(StorageParams).INTERVAL_INACTIVITY, $event.target))
            }, [
              createBaseVNode("option", {
                value: unref(InactivityInterval).Seconds_30
              }, "30 " + toDisplayString(unref(t)("sec.message")), 9, _hoisted_12$5),
              createBaseVNode("option", {
                value: unref(InactivityInterval).Seconds_45
              }, "45 " + toDisplayString(unref(t)("sec.message")), 9, _hoisted_13$5),
              createBaseVNode("option", {
                value: unref(InactivityInterval).Min_1
              }, "1 " + toDisplayString(unref(t)("min.message")), 9, _hoisted_14$3),
              createBaseVNode("option", {
                value: unref(InactivityInterval).Min_2
              }, "2 " + toDisplayString(unref(t)("2min.message")), 9, _hoisted_15$3),
              createBaseVNode("option", {
                value: unref(InactivityInterval).Min_5
              }, "5 " + toDisplayString(unref(t)("mins.message")), 9, _hoisted_16$2),
              createBaseVNode("option", {
                value: unref(InactivityInterval).Min_10
              }, "10 " + toDisplayString(unref(t)("mins.message")), 9, _hoisted_17$2),
              createBaseVNode("option", {
                value: unref(InactivityInterval).Min_20
              }, "20 " + toDisplayString(unref(t)("mins.message")), 9, _hoisted_18$2),
              createBaseVNode("option", {
                value: unref(InactivityInterval).Min_30
              }, "30 " + toDisplayString(unref(t)("mins.message")), 9, _hoisted_19$2)
            ], 544), [
              [vModelSelect, intervalInactivity.value]
            ])
          ]),
          createBaseVNode("p", _hoisted_20$1, toDisplayString(unref(t)("intervalInactivity.description")), 1)
        ]),
        createBaseVNode("div", _hoisted_21$1, [
          createBaseVNode("label", _hoisted_22$1, toDisplayString(unref(t)("exportToCsvSetting.message")), 1),
          createBaseVNode("p", _hoisted_23$1, toDisplayString(unref(t)("exportToCsvSetting.description")), 1),
          createBaseVNode("div", _hoisted_24$1, [
            createVNode(_component_VueDatePicker, {
              range: "",
              "enable-time-picker": false,
              class: "date-picker",
              modelValue: selectedDate.value,
              "onUpdate:modelValue": [
                _cache[8] || (_cache[8] = ($event) => selectedDate.value = $event),
                handleDate
              ],
              "preset-ranges": unref(presetRanges)
            }, {
              yearly: withCtx(({ label, range, presetDateRange }) => [
                createBaseVNode("span", {
                  onClick: ($event) => presetDateRange(range)
                }, toDisplayString(label), 9, _hoisted_25$1)
              ]),
              _: 1
            }, 8, ["modelValue", "preset-ranges"]),
            createBaseVNode("input", {
              type: "button",
              value: unref(t)("exportToCsv.message"),
              onClick: _cache[9] || (_cache[9] = ($event) => exportToCsv())
            }, null, 8, _hoisted_26$1)
          ])
        ]),
        createBaseVNode("div", _hoisted_27$1, [
          createBaseVNode("label", _hoisted_28$1, toDisplayString(unref(t)("removeAllData.message")), 1),
          createBaseVNode("p", _hoisted_29$1, toDisplayString(unref(t)("removeAllData.description")), 1),
          createBaseVNode("input", {
            type: "button",
            value: unref(t)("remove.message"),
            onClick: _cache[10] || (_cache[10] = ($event) => removeAll())
          }, null, 8, _hoisted_30$1)
        ]),
        createBaseVNode("div", _hoisted_31$1, [
          createBaseVNode("label", _hoisted_32$1, toDisplayString(unref(t)("backupAndRestore.message")), 1),
          createBaseVNode("p", _hoisted_33$1, toDisplayString(unref(t)("backupAndRestore.description")), 1),
          createBaseVNode("input", {
            type: "button",
            value: unref(t)("backup.message"),
            onClick: _cache[11] || (_cache[11] = ($event) => backup())
          }, null, 8, _hoisted_34$1),
          createBaseVNode("input", {
            type: "file",
            ref_key: "restoreFile",
            ref: restoreFile,
            style: { "display": "none" },
            onChange: _cache[12] || (_cache[12] = ($event) => restoreFileUpload()),
            accept: "application/json"
          }, null, 544),
          createBaseVNode("input", {
            type: "button",
            class: "ml-10",
            value: unref(t)("restore.message"),
            onClick: _cache[13] || (_cache[13] = ($event) => restore())
          }, null, 8, _hoisted_35$1)
        ]),
        createBaseVNode("div", _hoisted_36$1, [
          createBaseVNode("label", _hoisted_37$1, [
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              class: "filled-in",
              id: "showChangelog",
              "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => showChangelog.value = $event),
              onChange: _cache[15] || (_cache[15] = ($event) => onChange(unref(StorageParams).SHOW_CHANGELOG, $event.target))
            }, null, 544), [
              [vModelCheckbox, showChangelog.value]
            ]),
            createBaseVNode("span", null, toDisplayString(unref(t)("showChangelog.message")), 1),
            createBaseVNode("p", _hoisted_38$1, toDisplayString(unref(t)("showChangelog.description")), 1)
          ])
        ]),
        needToConfirmDeleteAllData.value ? (openBlock(), createElementBlock("div", _hoisted_39$1, [
          createBaseVNode("div", _hoisted_40$1, [
            createBaseVNode("p", _hoisted_41$1, toDisplayString(unref(t)("removeAllDataConfirm.message")), 1),
            createBaseVNode("div", _hoisted_42$1, [
              createBaseVNode("input", {
                type: "button",
                class: "alert",
                value: unref(t)("remove.message"),
                onClick: _cache[16] || (_cache[16] = ($event) => removeAllConfirm())
              }, null, 8, _hoisted_43$1),
              createBaseVNode("input", {
                type: "button",
                class: "info ml-10",
                value: unref(t)("cancel.message"),
                onClick: _cache[17] || (_cache[17] = ($event) => cancel())
              }, null, 8, _hoisted_44)
            ])
          ])
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const GeneralSettings_vue_vue_type_style_index_0_scoped_b0c94db4_lang = "";
const GeneralSettings = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-b0c94db4"]]);
const _imports_0$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAigAAAIoBlCJR2wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFBSURBVDiNjZGxS0JRFIe/c68N2dhgWEFROji5lIQJahhB9Oe6aPgkiAJ3l0oSs62hUJf33j0tKvJ6zzzj4Xzf5f5+Mqmf3yPsitm63Wk/frLBTBvlrDq/ifJlEPaAojrfmzbK2Q1hDygCGWNCuRHhFcir87uz+sV+Ejy5KmXU+W0gDwytM3cCMKuWDjSlniqnwItRW0t3nsZRGLQDFIChDU11u/v8LouDdZIkGEBWX4mTOHFBEvxHEJUIDBSC5Z8jcKxgRfKgyvF89WFDU4nCAKk4gbP4KMFyoQRqxI+7NdHFSmA5YCzIEOHISejFVWwS4EVgl2JdReANyMVJZA28DGx2fXaooXgKJ0Qqlv/gxSRJZBN4ncSAtoCCwsBYja1qMelWbyRWawqDeSZNA3wDfWu1mm71RknwqsRarQJ94OcXgrPje7Q9MoQAAAAASUVORK5CYII=";
function getFavicon(url) {
  return `https://www.google.com/s2/favicons?domain=${url}&sz=64`;
}
const _hoisted_1$e = { class: "title mt-0" };
const _hoisted_2$c = {
  readonly: "",
  class: "url-list"
};
const _hoisted_3$c = ["onClick"];
const _hoisted_4$b = { class: "mt-20" };
const _hoisted_5$b = ["placeholder"];
const _hoisted_6$b = ["value", "disabled"];
const __default__$d = {
  name: "WhiteList"
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  ...__default__$d,
  setup(__props) {
    const { t } = useI18n();
    const notification = rt();
    const settingsStorage = injectStorage();
    const whiteList = ref();
    const newWebsiteForWhiteList = ref();
    onMounted(async () => {
      whiteList.value = Object.values(await settingsStorage.getValue(StorageParams.BLACK_LIST, []));
    });
    function addToWhiteList() {
      var _a, _b;
      const existingItem = (_a = whiteList.value) == null ? void 0 : _a.find(
        (x) => isDomainEquals(extractHostname(x), extractHostname(newWebsiteForWhiteList.value))
      );
      if (existingItem !== void 0) {
        notification.notify({
          title: "You have already added this site",
          type: "error"
        });
      } else {
        const newWebsite = extractHostname(newWebsiteForWhiteList.value);
        (_b = whiteList.value) == null ? void 0 : _b.push(newWebsite);
        save(whiteList.value);
        newWebsiteForWhiteList.value = "";
      }
    }
    function deleteFromWhiteList(url) {
      whiteList.value = whiteList.value.filter((x) => x != url);
      save(whiteList.value);
    }
    async function save(value) {
      if (value != void 0)
        await settingsStorage.saveValue(StorageParams.BLACK_LIST, value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("p", _hoisted_1$e, toDisplayString(unref(t)("whiteList.message")), 1),
        createBaseVNode("ul", _hoisted_2$c, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(whiteList.value, (url, i) => {
            return openBlock(), createElementBlock("li", { key: i }, [
              createBaseVNode("div", null, [
                createBaseVNode("img", {
                  src: _imports_0$3,
                  height: "16",
                  onClick: ($event) => deleteFromWhiteList(url)
                }, null, 8, _hoisted_3$c),
                createVNode(Favicon, {
                  type: unref(TypeOfUrl).WebSite,
                  favicon: unref(getFavicon)(url)
                }, null, 8, ["type", "favicon"]),
                createBaseVNode("span", null, toDisplayString(url), 1)
              ])
            ]);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_4$b, [
          withDirectives(createBaseVNode("input", {
            type: "text",
            class: "d-inline-block custom-width",
            placeholder: unref(t)("enterWebsite.message"),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newWebsiteForWhiteList.value = $event)
          }, null, 8, _hoisted_5$b), [
            [vModelText, newWebsiteForWhiteList.value]
          ]),
          createBaseVNode("input", {
            type: "button",
            class: "d-inline-block small-btn ml-10",
            value: unref(t)("addWebsite.message"),
            disabled: newWebsiteForWhiteList.value == null || newWebsiteForWhiteList.value == "",
            onClick: _cache[1] || (_cache[1] = ($event) => addToWhiteList())
          }, null, 8, _hoisted_6$b)
        ])
      ]);
    };
  }
});
const WhiteList_vue_vue_type_style_index_0_scoped_aa3dcfc2_lang = "";
const WhiteList = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-aa3dcfc2"]]);
const _imports_1$3 = "/edit.svg";
class Restriction {
  constructor(domain, hours, minutes) {
    __publicField(this, "domain");
    __publicField(this, "time");
    this.domain = domain;
    this.time = convertHHMMToSeconds(hours, minutes);
  }
}
const _hoisted_1$d = {
  readonly: "",
  class: "url-list"
};
const _hoisted_2$b = ["onClick"];
const _hoisted_3$b = ["onClick"];
const _hoisted_4$a = {
  key: 0,
  class: "time-value d-inline-block"
};
const _hoisted_5$a = {
  key: 1,
  class: "blocked"
};
const _hoisted_6$a = { class: "limits-time-block mt-20" };
const _hoisted_7$a = ["disabled", "placeholder"];
const _hoisted_8$8 = ["value", "disabled"];
const _hoisted_9$6 = {
  key: 0,
  class: "mt-10"
};
const _hoisted_10$6 = { class: "block-checkbox" };
const __default__$c = {
  name: "ListWithTime"
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  ...__default__$c,
  props: {
    type: {}
  },
  setup(__props) {
    const { t } = useI18n();
    const props = __props;
    const notification = rt();
    const settingsStorage = injectStorage();
    const list = ref();
    const isEdit = ref();
    const time = ref({
      hours: 0,
      minutes: 30
    });
    const newWebsiteForList = ref();
    const storageParam = ref();
    const isCheckedCompletelyBlocked = computed(
      () => time.value != void 0 && time.value.hours == 0 && time.value.minutes == 0
    );
    const showCompletelyBlockValue = computed(
      () => props.type == ListWithTime.Limits && newWebsiteForList.value != void 0 && newWebsiteForList.value != ""
    );
    onMounted(async () => {
      switch (props.type) {
        case ListWithTime.Limits:
          list.value = Object.values(
            await settingsStorage.getValue(StorageParams.RESTRICTION_LIST, [])
          );
          storageParam.value = StorageParams.RESTRICTION_LIST;
          break;
        case ListWithTime.Notifications:
          list.value = Object.values(
            await settingsStorage.getValue(StorageParams.NOTIFICATION_LIST, [])
          );
          storageParam.value = StorageParams.NOTIFICATION_LIST;
          break;
      }
    });
    function addToList() {
      var _a, _b;
      const existingItem = (_a = list.value) == null ? void 0 : _a.find(
        (x) => isDomainEquals(extractHostname(x.domain), extractHostname(newWebsiteForList.value))
      );
      if (existingItem !== void 0) {
        notification.notify({
          title: "You have already added this site",
          type: "error"
        });
      } else {
        const newLimit = new Restriction(
          extractHostname(newWebsiteForList.value),
          time.value.hours,
          time.value.minutes
        );
        (_b = list.value) == null ? void 0 : _b.push(newLimit);
        save(list.value);
        newWebsiteForList.value = "";
      }
    }
    function completelyBlock() {
      time.value.hours = 0;
      time.value.minutes = 0;
    }
    function completelyBlocked(time2) {
      return props.type == ListWithTime.Limits && time2 == 0;
    }
    function getTime(time2) {
      const timeObj = convertSecondsToHHMM(time2);
      return `${timeObj.hours}:${timeObj.minutes < 10 ? "0" + timeObj.minutes : timeObj.minutes}`;
    }
    const isDisabledSaving = computed(() => {
      var _a, _b;
      if (props.type == ListWithTime.Notifications && ((_a = time.value) == null ? void 0 : _a.hours) == 0 && ((_b = time.value) == null ? void 0 : _b.minutes) == 0)
        return true;
      return newWebsiteForList.value == "" || newWebsiteForList.value == void 0 || time.value == null;
    });
    function deleteFromList(url) {
      list.value = list.value.filter((x) => x.domain != url);
      save(list.value);
      newWebsiteForList.value = "";
      isEdit.value = false;
    }
    function editItemFromList(url, timeForUrl) {
      isEdit.value = true;
      newWebsiteForList.value = url;
      const timeObj = convertSecondsToHHMM(timeForUrl);
      time.value.hours = timeObj.hours;
      time.value.minutes = timeObj.minutes;
    }
    function editItem() {
      var _a;
      const existingItem = (_a = list.value) == null ? void 0 : _a.find(
        (x) => isDomainEquals(extractHostname(x.domain), extractHostname(newWebsiteForList.value))
      );
      if (existingItem != void 0) {
        existingItem.time = convertHHMMToSeconds(time.value.hours, time.value.minutes);
        save(list.value);
        newWebsiteForList.value = "";
        isEdit.value = false;
      }
    }
    async function save(value) {
      if (value != void 0)
        await settingsStorage.saveValue(storageParam.value, value);
    }
    return (_ctx, _cache) => {
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("ul", _hoisted_1$d, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(list.value, (limit, i) => {
            return openBlock(), createElementBlock("li", { key: i }, [
              createBaseVNode("div", null, [
                createBaseVNode("img", {
                  src: _imports_0$3,
                  height: "16",
                  onClick: ($event) => deleteFromList(limit.domain)
                }, null, 8, _hoisted_2$b),
                createBaseVNode("img", {
                  src: _imports_1$3,
                  height: "16",
                  onClick: ($event) => editItemFromList(limit.domain, limit.time)
                }, null, 8, _hoisted_3$b),
                createVNode(Favicon, {
                  type: unref(TypeOfUrl).WebSite,
                  favicon: unref(getFavicon)(limit.domain)
                }, null, 8, ["type", "favicon"]),
                createBaseVNode("span", null, toDisplayString(limit.domain), 1),
                createBaseVNode("div", null, [
                  !completelyBlocked(limit.time) ? (openBlock(), createElementBlock("p", _hoisted_4$a, toDisplayString(unref(t)("limit.message")) + " : " + toDisplayString(getTime(limit.time)), 1)) : createCommentVNode("", true),
                  completelyBlocked(limit.time) ? (openBlock(), createElementBlock("p", _hoisted_5$a, toDisplayString(unref(t)("completelyBlocked.message")), 1)) : createCommentVNode("", true)
                ])
              ])
            ]);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_6$a, [
          withDirectives(createBaseVNode("input", {
            type: "text",
            disabled: isEdit.value,
            class: "d-inline-block",
            placeholder: unref(t)("enterWebsite.message"),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newWebsiteForList.value = $event)
          }, null, 8, _hoisted_7$a), [
            [vModelText, newWebsiteForList.value]
          ]),
          createVNode(_component_VueDatePicker, {
            modelValue: time.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => time.value = $event),
            "time-picker": "",
            class: "date-picker height"
          }, null, 8, ["modelValue"]),
          createBaseVNode("input", {
            type: "button",
            class: "d-inline-block small-btn",
            value: !isEdit.value ? unref(t)("addWebsite.message") : unref(t)("save.message"),
            disabled: isDisabledSaving.value,
            onClick: _cache[2] || (_cache[2] = ($event) => isEdit.value ? editItem() : addToList())
          }, null, 8, _hoisted_8$8)
        ]),
        showCompletelyBlockValue.value ? (openBlock(), createElementBlock("div", _hoisted_9$6, [
          createBaseVNode("label", _hoisted_10$6, [
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              class: "filled-in",
              id: "viewTimeInBadge",
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isCheckedCompletelyBlocked.value = $event),
              onChange: completelyBlock
            }, null, 544), [
              [vModelCheckbox, isCheckedCompletelyBlocked.value]
            ]),
            createBaseVNode("span", null, toDisplayString(unref(t)("completelyBlocked.description")), 1)
          ])
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const ListWithTime_vue_vue_type_style_index_0_scoped_b239d4ec_lang = "";
const ListWithTimeComponent = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-b239d4ec"]]);
const _hoisted_1$c = { class: "title mt-0" };
const _hoisted_2$a = { class: "description" };
const _hoisted_3$a = { class: "description" };
const __default__$b = {
  name: "Limits"
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...__default__$b,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("p", _hoisted_1$c, toDisplayString(unref(t)("limits.message")), 1),
        createBaseVNode("p", _hoisted_2$a, toDisplayString(unref(t)("limits.description")), 1),
        createBaseVNode("p", _hoisted_3$a, toDisplayString(unref(t)("limitsTip.message")), 1),
        createVNode(ListWithTimeComponent, {
          type: unref(ListWithTime).Limits
        }, null, 8, ["type"]),
        createVNode(PromoClearYouTube)
      ]);
    };
  }
});
const Limits_vue_vue_type_style_index_0_scoped_05ed8f7c_lang = "";
const Limits = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-05ed8f7c"]]);
const _hoisted_1$b = { class: "settings-item" };
const _hoisted_2$9 = { class: "setting-header" };
const _hoisted_3$9 = { class: "description" };
const _hoisted_4$9 = { class: "settings-item" };
const _hoisted_5$9 = { class: "setting-header d-inline-block" };
const _hoisted_6$9 = { class: "settings-item" };
const _hoisted_7$9 = { class: "setting-header" };
const _hoisted_8$7 = { class: "description" };
const _hoisted_9$5 = { class: "settings-item" };
const _hoisted_10$5 = { class: "setting-header" };
const _hoisted_11$4 = { class: "description" };
const _hoisted_12$4 = ["placeholder"];
const _hoisted_13$4 = ["value", "disabled"];
const __default__$a = {
  name: "DailyNotifications"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...__default__$a,
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const showDailyNotifacation = ref();
    const dailyNotificationTime = ref();
    const notificationTime = ref();
    const notificationMessage = ref();
    onMounted(async () => {
      showDailyNotifacation.value = await settingsStorage.getValue(
        StorageParams.DAILY_NOTIFICATION,
        DAILY_NOTIFICATION_DEFAULT
      );
      notificationMessage.value = await settingsStorage.getValue(
        StorageParams.NOTIFICATION_MESSAGE,
        NOTIFICATION_MESSAGE_DEFAULT
      );
      dailyNotificationTime.value = await settingsStorage.getValue(
        StorageParams.DAILY_SUMMARY_NOTIFICATION_TIME,
        DAILY_SUMMARY_NOTIFICATION_TIME_DEFAULT
      );
      const timeObj = convertSecondsToHHMM(dailyNotificationTime.value);
      notificationTime.value = timeObj;
    });
    async function saveNotificationMessage() {
      save(StorageParams.NOTIFICATION_MESSAGE, notificationMessage.value);
    }
    async function handleDate(modelData) {
      if (modelData != null) {
        notificationTime.value = modelData;
        await save(
          StorageParams.DAILY_SUMMARY_NOTIFICATION_TIME,
          convertHHMMToSeconds(notificationTime.value.hours, notificationTime.value.minutes)
        );
        Browser.runtime.sendMessage(Messages.RescheduleJobs);
      }
    }
    async function onChange(storageParam, target) {
      if (target != null)
        await save(storageParam, target.checked);
    }
    async function save(storageParam, value) {
      if (value != void 0)
        await settingsStorage.saveValue(storageParam, value);
    }
    return (_ctx, _cache) => {
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$b, [
          createBaseVNode("label", _hoisted_2$9, [
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              class: "filled-in",
              id: "blockDeferral",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => showDailyNotifacation.value = $event),
              onChange: _cache[1] || (_cache[1] = ($event) => onChange(unref(StorageParams).DAILY_NOTIFICATION, $event.target))
            }, null, 544), [
              [vModelCheckbox, showDailyNotifacation.value]
            ]),
            createBaseVNode("span", null, toDisplayString(unref(t)("showDailyNotifacation.message")), 1),
            createBaseVNode("p", _hoisted_3$9, toDisplayString(unref(t)("showDailyNotifacation.description")), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_4$9, [
          createBaseVNode("p", _hoisted_5$9, toDisplayString(unref(t)("notificationTimeSetting.message")), 1),
          createVNode(_component_VueDatePicker, {
            modelValue: notificationTime.value,
            "onUpdate:modelValue": [
              _cache[2] || (_cache[2] = ($event) => notificationTime.value = $event),
              handleDate
            ],
            "time-picker": "",
            class: "date-picker d-inline-block"
          }, null, 8, ["modelValue"])
        ]),
        createBaseVNode("div", _hoisted_6$9, [
          createBaseVNode("label", _hoisted_7$9, toDisplayString(unref(t)("notificationTime.message")), 1),
          createBaseVNode("p", _hoisted_8$7, toDisplayString(unref(t)("notificationTime.description")), 1),
          createVNode(ListWithTimeComponent, {
            type: unref(ListWithTime).Notifications
          }, null, 8, ["type"])
        ]),
        createBaseVNode("div", _hoisted_9$5, [
          createBaseVNode("label", _hoisted_10$5, toDisplayString(unref(t)("notificationMessage.message")), 1),
          createBaseVNode("p", _hoisted_11$4, toDisplayString(unref(t)("notificationMessage.description")), 1),
          withDirectives(createBaseVNode("input", {
            type: "text",
            class: "",
            placeholder: unref(t)("enterNotification.message"),
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => notificationMessage.value = $event)
          }, null, 8, _hoisted_12$4), [
            [vModelText, notificationMessage.value]
          ]),
          createBaseVNode("input", {
            type: "button",
            class: "d-inline-block small-btn ml-10 width",
            value: unref(t)("save.message"),
            disabled: notificationMessage.value == "",
            onClick: _cache[4] || (_cache[4] = ($event) => saveNotificationMessage())
          }, null, 8, _hoisted_13$4)
        ])
      ]);
    };
  }
});
const Notifications_vue_vue_type_style_index_0_scoped_27c9e22d_lang = "";
const DailyNotifications = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-27c9e22d"]]);
const _imports_0$2 = "/pomodoro.png";
const _imports_1$2 = "/pomodoro-rest.png";
const _imports_2 = "/stop.svg";
const _imports_3 = "/start.svg";
function playSound(sound) {
  const myAudio = new Audio(Browser.runtime.getURL(`assets/pomodoro-sounds/${sound}`));
  myAudio.play();
}
const _hoisted_1$a = { class: "title-audio d-inline-block" };
const _hoisted_2$8 = ["value"];
const _hoisted_3$8 = ["value"];
const _hoisted_4$8 = ["value"];
const _hoisted_5$8 = ["value"];
const _hoisted_6$8 = ["value"];
const _hoisted_7$8 = ["value"];
const _hoisted_8$6 = ["value"];
const _hoisted_9$4 = ["value"];
const _hoisted_10$4 = ["value"];
const _hoisted_11$3 = ["value"];
const _hoisted_12$3 = ["value"];
const _hoisted_13$3 = ["value"];
const _hoisted_14$2 = ["value"];
const _hoisted_15$2 = { class: "preview" };
const __default__$9 = {
  name: "PomodoroSoundsSelector"
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  props: {
    option: {},
    value: {}
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const audioAfterPeriod = ref(props.value);
    function playAudio() {
      playSound(audioAfterPeriod.value);
    }
    async function onAudioChange(target) {
      await settingsStorage.saveValue(props.option, target.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("p", _hoisted_1$a, toDisplayString(unref(t)("pomodoroSoundAfter.message")), 1),
        withDirectives(createBaseVNode("select", {
          class: "option",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => audioAfterPeriod.value = $event),
          onChange: _cache[1] || (_cache[1] = ($event) => onAudioChange($event.target))
        }, [
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 1"]
          }, toDisplayString(unref(t)("sound.message")) + " 1", 9, _hoisted_2$8),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 2"]
          }, toDisplayString(unref(t)("sound.message")) + " 2", 9, _hoisted_3$8),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 3"]
          }, toDisplayString(unref(t)("sound.message")) + " 3", 9, _hoisted_4$8),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 4"]
          }, toDisplayString(unref(t)("sound.message")) + " 4", 9, _hoisted_5$8),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 5"]
          }, toDisplayString(unref(t)("sound.message")) + " 5", 9, _hoisted_6$8),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 6"]
          }, toDisplayString(unref(t)("sound.message")) + " 6", 9, _hoisted_7$8),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 7"]
          }, toDisplayString(unref(t)("sound.message")) + " 7", 9, _hoisted_8$6),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 8"]
          }, toDisplayString(unref(t)("sound.message")) + " 8", 9, _hoisted_9$4),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 9"]
          }, toDisplayString(unref(t)("sound.message")) + " 9", 9, _hoisted_10$4),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 10"]
          }, toDisplayString(unref(t)("sound.message")) + " 10", 9, _hoisted_11$3),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 11"]
          }, toDisplayString(unref(t)("sound.message")) + " 11", 9, _hoisted_12$3),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 12"]
          }, toDisplayString(unref(t)("sound.message")) + " 12", 9, _hoisted_13$3),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 13"]
          }, toDisplayString(unref(t)("sound.message")) + " 13", 9, _hoisted_14$2)
        ], 544), [
          [vModelSelect, audioAfterPeriod.value]
        ]),
        createBaseVNode("img", {
          src: _imports_3,
          height: "22",
          onClick: playAudio,
          class: "play"
        }),
        createBaseVNode("span", _hoisted_15$2, toDisplayString(unref(t)("clickToPreview.message")), 1)
      ], 64);
    };
  }
});
const PomodoroSoundsSelector_vue_vue_type_style_index_0_scoped_4951eca4_lang = "";
const PomodoroSoundsSelector = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-4951eca4"]]);
const _withScopeId$5 = (n) => (pushScopeId("data-v-641805ea"), n = n(), popScopeId(), n);
const _hoisted_1$9 = { class: "title mt-0" };
const _hoisted_2$7 = { class: "description" };
const _hoisted_3$7 = { class: "explanation-block" };
const _hoisted_4$7 = { class: "explanation" };
const _hoisted_5$7 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("span", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "ml-5",
    src: _imports_0$2,
    height: "30"
  })
], -1));
const _hoisted_6$7 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "ml-5",
  src: _imports_1$2,
  height: "30"
}, null, -1));
const _hoisted_7$7 = { class: "explanation" };
const _hoisted_8$5 = { class: "explanation" };
const _hoisted_9$3 = { class: "pomodoro-block mt-20" };
const _hoisted_10$3 = { class: "title" };
const _hoisted_11$2 = { class: "pomodoro-block" };
const _hoisted_12$2 = { class: "pomodoro-block" };
const _hoisted_13$2 = { class: "title" };
const _hoisted_14$1 = { class: "pomodoro-block" };
const _hoisted_15$1 = { class: "pomodoro-block" };
const _hoisted_16$1 = { class: "title" };
const _hoisted_17$1 = { class: "pomodoro-block" };
const _hoisted_18$1 = {
  key: 0,
  class: "ml-5",
  src: _imports_2,
  height: "20"
};
const _hoisted_19$1 = {
  key: 1,
  class: "ml-5",
  src: _imports_3,
  height: "22"
};
const __default__$8 = {
  name: "Pomodoro"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const workTime = ref({
      hours: 0,
      minutes: 25
    });
    const restTime = ref({
      hours: 0,
      minutes: 5
    });
    const frequency = ref(3);
    const isEnabled = ref();
    const audioAfterWork = ref();
    const audioAfterRest = ref();
    const audioAfterFinished = ref();
    const isDisabled = computed(
      () => frequency.value <= 0 || timeIsEmpty(workTime) || timeIsEmpty(restTime)
    );
    onMounted(async () => {
      isEnabled.value = await settingsStorage.getValue(
        StorageParams.IS_POMODORO_ENABLED,
        IS_POMODORO_ENABLED_DEFAULT
      );
      workTime.value = convertSecondsToHHMM(
        await settingsStorage.getValue(
          StorageParams.POMODORO_INTERVAL_WORK,
          POMODORO_INTERVAL_WORK_DEFAULT
        )
      );
      restTime.value = convertSecondsToHHMM(
        await settingsStorage.getValue(
          StorageParams.POMODORO_INTERVAL_REST,
          POMODORO_INTERVAL_REST_DEFAULT
        )
      );
      frequency.value = await settingsStorage.getValue(
        StorageParams.POMODORO_FREQUENCY,
        POMODORO_FREQUENCY_DEFAULT
      );
      audioAfterWork.value = await settingsStorage.getValue(
        StorageParams.POMODORO_AUDIO_AFTER_WORK,
        POMODORO_AUDIO_AFTER_WORK_DEFAULT
      );
      audioAfterRest.value = await settingsStorage.getValue(
        StorageParams.POMODORO_AUDIO_AFTER_REST,
        POMODORO_AUDIO_AFTER_REST_DEFAULT
      );
      audioAfterFinished.value = await settingsStorage.getValue(
        StorageParams.POMODORO_AUDIO_AFTER_FINISHED,
        POMODORO_AUDIO_AFTER_FINISHED_DEFAULT
      );
    });
    function timeIsEmpty(time) {
      return time.value == void 0 || time.value.hours == 0 && time.value.minutes == 0;
    }
    async function changeStatus() {
      await settingsStorage.saveValue(StorageParams.IS_POMODORO_ENABLED, !isEnabled.value);
      await settingsStorage.saveValue(
        StorageParams.POMODORO_INTERVAL_WORK,
        convertHHMMToSeconds(workTime.value.hours, workTime.value.minutes)
      );
      await settingsStorage.saveValue(
        StorageParams.POMODORO_INTERVAL_REST,
        convertHHMMToSeconds(restTime.value.hours, restTime.value.minutes)
      );
      await settingsStorage.saveValue(StorageParams.POMODORO_START_TIME, (/* @__PURE__ */ new Date()).toString());
      await settingsStorage.saveValue(StorageParams.POMODORO_FREQUENCY, frequency.value);
      isEnabled.value = !isEnabled.value;
      if (isEnabled.value)
        await useBadge({
          text: null,
          color: BadgeColor.none,
          icon: BadgeIcon.pomodoroWorkingTime
        });
      else {
        await settingsStorage.saveValue(StorageParams.POMODORO_START_TIME, null);
        await useBadge({
          text: null,
          color: BadgeColor.none,
          icon: BadgeIcon.default
        });
      }
      logger.log(`Change pomodoro status to ${String(isEnabled.value).toUpperCase()}`);
    }
    return (_ctx, _cache) => {
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("p", _hoisted_1$9, toDisplayString(unref(t)("pomodoro.message")), 1),
        createBaseVNode("p", _hoisted_2$7, toDisplayString(unref(t)("pomodoro.description")), 1),
        createBaseVNode("div", _hoisted_3$7, [
          createBaseVNode("p", _hoisted_4$7, [
            createTextVNode(toDisplayString(unref(t)("pomodoroExplanationIcon.message")) + " ", 1),
            _hoisted_5$7,
            createTextVNode(". " + toDisplayString(unref(t)("pomodoroExplanationIcon.description")) + " ", 1),
            _hoisted_6$7,
            createTextVNode(". ")
          ]),
          createBaseVNode("p", _hoisted_7$7, toDisplayString(unref(t)("pomodoroExplanationTime.message")), 1),
          createBaseVNode("p", _hoisted_8$5, toDisplayString(unref(t)("pomodoroExplanationStop.message")), 1)
        ]),
        createBaseVNode("div", {
          class: normalizeClass(isEnabled.value ? "disabled" : "")
        }, [
          createBaseVNode("div", _hoisted_9$3, [
            createBaseVNode("p", _hoisted_10$3, toDisplayString(unref(t)("pomodoroWork.message")), 1),
            createVNode(_component_VueDatePicker, {
              modelValue: workTime.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => workTime.value = $event),
              "time-picker": "",
              class: "date-picker"
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_11$2, [
            audioAfterWork.value ? (openBlock(), createBlock(PomodoroSoundsSelector, {
              key: 0,
              option: unref(StorageParams).POMODORO_AUDIO_AFTER_WORK,
              value: audioAfterWork.value
            }, null, 8, ["option", "value"])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_12$2, [
            createBaseVNode("p", _hoisted_13$2, toDisplayString(unref(t)("pomodoroRest.message")), 1),
            createVNode(_component_VueDatePicker, {
              modelValue: restTime.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => restTime.value = $event),
              "time-picker": "",
              class: "date-picker"
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_14$1, [
            audioAfterRest.value ? (openBlock(), createBlock(PomodoroSoundsSelector, {
              key: 0,
              option: unref(StorageParams).POMODORO_AUDIO_AFTER_REST,
              value: audioAfterRest.value
            }, null, 8, ["option", "value"])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_15$1, [
            createBaseVNode("p", _hoisted_16$1, toDisplayString(unref(t)("pomodoroFrequency.message")), 1),
            withDirectives(createBaseVNode("input", {
              type: "number",
              class: "frequency",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => frequency.value = $event)
            }, null, 512), [
              [vModelText, frequency.value]
            ])
          ]),
          createBaseVNode("div", _hoisted_17$1, [
            audioAfterFinished.value ? (openBlock(), createBlock(PomodoroSoundsSelector, {
              key: 0,
              option: unref(StorageParams).POMODORO_AUDIO_AFTER_FINISHED,
              value: audioAfterFinished.value
            }, null, 8, ["option", "value"])) : createCommentVNode("", true)
          ])
        ], 2),
        createBaseVNode("button", {
          class: normalizeClass(["d-inline-block mt-15", [isEnabled.value ? "stop" : "start", isDisabled.value ? "disabled" : ""]]),
          onClick: _cache[3] || (_cache[3] = ($event) => changeStatus())
        }, [
          isEnabled.value ? (openBlock(), createElementBlock("img", _hoisted_18$1)) : createCommentVNode("", true),
          !isEnabled.value ? (openBlock(), createElementBlock("img", _hoisted_19$1)) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(!isEnabled.value ? unref(t)("start.message") : unref(t)("stop.message")), 1)
        ], 2)
      ], 64);
    };
  }
});
const Pomodoro_vue_vue_type_style_index_0_scoped_641805ea_lang = "";
const Pomodoro = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-641805ea"]]);
const _imports_0$1 = "/clear-youtube-logo.svg";
const _imports_1$1 = "/trackerjam-logo.png";
const _withScopeId$4 = (n) => (pushScopeId("data-v-83680182"), n = n(), popScopeId(), n);
const _hoisted_1$8 = { class: "main" };
const _hoisted_2$6 = { class: "header" };
const _hoisted_3$6 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "img-block" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0$1,
    height: "45"
  })
], -1));
const _hoisted_4$6 = { class: "title" };
const _hoisted_5$6 = { class: "description" };
const _hoisted_6$6 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "img-block" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_1$1,
    height: "45"
  })
], -1));
const _hoisted_7$6 = { class: "title" };
const _hoisted_8$4 = { class: "description" };
const __default__$7 = {
  name: "MyApps"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  setup(__props) {
    const { t } = useI18n();
    let App;
    ((App2) => {
      App2[App2["ClearYoutube"] = 0] = "ClearYoutube";
      App2[App2["TrackerJam"] = 1] = "TrackerJam";
    })(App || (App = {}));
    function openAppLink(app2) {
      switch (app2) {
        case 0:
          window.open(CHROME_STORE_CLEAR_YOUTUBE_URL, "_blank");
          break;
        case 1:
          window.open("https://trackerjam.com/?utm_source=watt_extension", "_blank");
          break;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createBaseVNode("p", _hoisted_2$6, toDisplayString(unref(t)("tryMyOtherApps.message")), 1),
        createBaseVNode("div", {
          class: "app-block",
          onClick: _cache[0] || (_cache[0] = ($event) => openAppLink(
            0
            /* ClearYoutube */
          ))
        }, [
          _hoisted_3$6,
          createBaseVNode("div", null, [
            createBaseVNode("p", _hoisted_4$6, toDisplayString(unref(t)("clearYoutube.message")), 1),
            createBaseVNode("p", _hoisted_5$6, toDisplayString(unref(t)("clearYoutube.description")), 1)
          ])
        ]),
        createBaseVNode("div", {
          class: "app-block",
          onClick: _cache[1] || (_cache[1] = ($event) => openAppLink(
            1
            /* TrackerJam */
          ))
        }, [
          _hoisted_6$6,
          createBaseVNode("div", null, [
            createBaseVNode("p", _hoisted_7$6, toDisplayString(unref(t)("trackerjam.message")), 1),
            createBaseVNode("p", _hoisted_8$4, toDisplayString(unref(t)("trackerjam.description")), 1)
          ])
        ])
      ]);
    };
  }
});
const MyApps_vue_vue_type_style_index_0_scoped_83680182_lang = "";
const MyApps = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-83680182"]]);
const _withScopeId$3 = (n) => (pushScopeId("data-v-7691888e"), n = n(), popScopeId(), n);
const _hoisted_1$7 = { class: "about" };
const _hoisted_2$5 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("label", { class: "about-label" }, [
  /* @__PURE__ */ createTextVNode("GitHub: "),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://github.com/Stigmatoz/web-activity-time-tracker",
    target: "_blank"
  }, "github.com/Stigmatoz/web-activity-time-tracker")
], -1));
const _hoisted_3$5 = { class: "about-label" };
const _hoisted_4$5 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("a", {
  href: "https://github.com/Stigmatoz/web-activity-time-tracker/issues",
  target: "_blank"
}, "GitHub issues page", -1));
const _hoisted_5$5 = { class: "about-label" };
const _hoisted_6$5 = ["href"];
const _hoisted_7$5 = { class: "about-label" };
const _hoisted_8$3 = ["href"];
const __default__$6 = {
  name: "About"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$7, [
          _hoisted_2$5,
          createBaseVNode("label", _hoisted_3$5, [
            createTextVNode(toDisplayString(unref(t)("github.message")) + " ", 1),
            _hoisted_4$5
          ]),
          createBaseVNode("label", _hoisted_5$5, [
            createTextVNode(toDisplayString(unref(t)("question.message")) + " ", 1),
            createBaseVNode("a", {
              href: unref(CHROME_STORE_SUPPORT_URL),
              target: "_blank"
            }, toDisplayString(unref(t)("supportForm.message")), 9, _hoisted_6$5),
            createTextVNode(".")
          ]),
          createBaseVNode("label", _hoisted_7$5, [
            createTextVNode(toDisplayString(unref(t)("doYouEnjoy.message")) + " ", 1),
            createBaseVNode("a", {
              href: unref(CHROME_STORE_REVIEW_URL),
              target: "_blank"
            }, toDisplayString(unref(t)("review.message")), 9, _hoisted_8$3)
          ])
        ]),
        createVNode(MyApps)
      ], 64);
    };
  }
});
const About_vue_vue_type_style_index_0_scoped_7691888e_lang = "";
const About = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-7691888e"]]);
const _hoisted_1$6 = { class: "container" };
const _hoisted_2$4 = { class: "block" };
const _hoisted_3$4 = { class: "title" };
const _hoisted_4$4 = { class: "value" };
const _hoisted_5$4 = { class: "block" };
const _hoisted_6$4 = { class: "title" };
const _hoisted_7$4 = { class: "value" };
const _hoisted_8$2 = { class: "block" };
const _hoisted_9$2 = { class: "title" };
const _hoisted_10$2 = { class: "value" };
const __default__$5 = {
  name: "WebsiteStatsDetails"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: {
    details: {}
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$4, [
          createBaseVNode("p", _hoisted_3$4, toDisplayString(unref(t)("allTime.message")), 1),
          createBaseVNode("p", _hoisted_4$4, toDisplayString(unref(convertSummaryTimeToString)(_ctx.details.summaryTime)), 1)
        ]),
        createBaseVNode("div", _hoisted_5$4, [
          createBaseVNode("p", _hoisted_6$4, toDisplayString(unref(t)("sessions.message")), 1),
          createBaseVNode("p", _hoisted_7$4, toDisplayString(_ctx.details.sessions), 1)
        ]),
        createBaseVNode("div", _hoisted_8$2, [
          createBaseVNode("p", _hoisted_9$2, toDisplayString(unref(t)("averageDailyUsage.message")), 1),
          createBaseVNode("p", _hoisted_10$2, toDisplayString(unref(convertSummaryTimeToString)(_ctx.details.averageTime)), 1)
        ])
      ]);
    };
  }
});
const WebsiteStatsDetails_vue_vue_type_style_index_0_scoped_d1493cf0_lang = "";
const WebsiteStatsDetails = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-d1493cf0"]]);
async function useTabStatsByDays(dateFrom, dateTo, domain) {
  const repo = await injectTabsRepository();
  const tab = repo.getTab(domain);
  let daysTabs = [];
  if (tab == void 0)
    return null;
  const isTheSameDay = isSameDay(dateFrom, dateTo);
  const unSortedTabsByDays = isTheSameDay ? tab.days.filter((s) => isSameDay(new Date(s.date), dateFrom)) : tab.days.filter((s) => new Date(s.date) >= dateFrom && new Date(s.date) <= dateTo);
  if (unSortedTabsByDays.length == 0)
    return {
      days: [],
      averageTime: 0,
      summaryTime: 0,
      sessions: 0
    };
  unSortedTabsByDays.forEach((tabDay) => {
    if (new Date(tabDay.date) >= dateFrom && new Date(tabDay.date) <= dateTo || isTheSameDay && isSameDay(new Date(tabDay.date), dateFrom)) {
      let dayTab = daysTabs.find((x) => x.day == tabDay.date);
      if (dayTab == void 0) {
        dayTab = {
          day: tabDay.date,
          tabs: [],
          time: tabDay.summary,
          sessions: tabDay.counter
        };
        dayTab.tabs.push({
          favicon: tab.favicon,
          url: tab.url,
          sessions: tabDay.counter,
          summaryTime: tabDay.summary
        });
        daysTabs.push(dayTab);
      } else {
        dayTab.time += tabDay.summary;
        dayTab.sessions += tabDay.counter;
        dayTab.tabs.push({
          favicon: tab.favicon,
          url: tab.url,
          sessions: tabDay.counter,
          summaryTime: tabDay.summary
        });
      }
    }
  });
  daysTabs.sort(function(a, b) {
    return new Date(a.day).valueOf() - new Date(b.day).valueOf();
  });
  daysTabs.forEach((dayTab) => {
    dayTab.tabs.sort(function(a, b) {
      return b.summaryTime - a.summaryTime;
    });
  });
  const summaryTime = daysTabs.map((x) => x.time).reduce(function(a, b) {
    return a + b;
  });
  const totalSessions = daysTabs.map((x) => x.sessions).reduce(function(a, b) {
    return a + b;
  });
  const averageTime = Math.round(summaryTime / daysTabs.length);
  return {
    days: daysTabs,
    summaryTime,
    averageTime,
    sessions: totalSessions
  };
}
const _withScopeId$2 = (n) => (pushScopeId("data-v-02cd456d"), n = n(), popScopeId(), n);
const _hoisted_1$5 = { class: "settings-item" };
const _hoisted_2$3 = {
  key: 0,
  class: "no-data"
};
const _hoisted_3$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("img", {
  height: "55",
  src: _imports_0$4
}, null, -1));
const _hoisted_4$3 = [
  _hoisted_3$3
];
const _hoisted_5$3 = { key: 1 };
const _hoisted_6$3 = { key: 1 };
const _hoisted_7$3 = { class: "no-data" };
const _hoisted_8$1 = ["onClick"];
const _hoisted_9$1 = { key: 2 };
const _hoisted_10$1 = { class: "date-block" };
const _hoisted_11$1 = { class: "title" };
const _hoisted_12$1 = ["onClick"];
const _hoisted_13$1 = { class: "mt-20 ml-10 mr-10 by-days-chart" };
const __default__$4 = {
  name: "WebsiteStats"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: {
    domain: {}
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const presetRanges = ranges();
    const tabInfoByDays = ref();
    const isLoading = ref();
    const noData = ref(false);
    const selectedDate = ref();
    const tab = ref();
    const countOfDays = computed(
      () => tabInfoByDays.value != void 0 ? tabInfoByDays.value.days.length : 0
    );
    onMounted(async () => {
      var _a, _b;
      isLoading.value = true;
      selectedDate.value = ThisWeekRange;
      const dateFrom = (_a = selectedDate.value) == null ? void 0 : _a[0];
      const dateTo = (_b = selectedDate.value) == null ? void 0 : _b[1];
      const repo = await injectTabsRepository();
      tab.value = repo.getTab(props.domain);
      if (tab == void 0) {
        noData.value = true;
        return;
      }
      await loadList(dateFrom, dateTo);
    });
    async function loadList(dateFrom, dateTo) {
      var _a;
      const tabList = await useTabStatsByDays(dateFrom, dateTo, (_a = tab.value) == null ? void 0 : _a.url);
      if (tabList != null) {
        tabInfoByDays.value = tabList;
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
    return (_ctx, _cache) => {
      var _a, _b, _c;
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("label", {
          class: "title link",
          onClick: _cache[0] || (_cache[0] = ($event) => unref(openPage)(unref(SettingsTab).Dashboard))
        }, toDisplayString(unref(t)("dashboard.message")), 1),
        isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_2$3, _hoisted_4$3)) : (openBlock(), createElementBlock("div", _hoisted_5$3, [
          countOfDays.value == void 0 || countOfDays.value == 0 && !noData.value ? (openBlock(), createBlock(_sfc_main$g, { key: 0 })) : noData.value ? (openBlock(), createElementBlock("div", _hoisted_6$3, [
            createBaseVNode("div", _hoisted_7$3, [
              createTextVNode(toDisplayString(unref(t)("noDataForPeriod.message")) + " ", 1),
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
                  }, toDisplayString(label), 9, _hoisted_8$1)
                ]),
                _: 1
              }, 8, ["modelValue", "preset-ranges"])
            ])
          ])) : (openBlock(), createElementBlock("div", _hoisted_9$1, [
            createBaseVNode("div", _hoisted_10$1, [
              createBaseVNode("div", null, [
                createVNode(Favicon, {
                  favicon: (_a = tab.value) == null ? void 0 : _a.favicon,
                  type: unref(getTypeOfUrl)((_b = tab.value) == null ? void 0 : _b.url)
                }, null, 8, ["favicon", "type"]),
                createBaseVNode("span", _hoisted_11$1, toDisplayString((_c = tab.value) == null ? void 0 : _c.url), 1)
              ]),
              createVNode(_component_VueDatePicker, {
                range: "",
                "enable-time-picker": false,
                class: "date-picker mt-10",
                modelValue: selectedDate.value,
                "onUpdate:modelValue": [
                  _cache[2] || (_cache[2] = ($event) => selectedDate.value = $event),
                  handleDate
                ],
                "preset-ranges": unref(presetRanges)
              }, {
                yearly: withCtx(({ label, range, presetDateRange }) => [
                  createBaseVNode("span", {
                    onClick: ($event) => presetDateRange(range)
                  }, toDisplayString(label), 9, _hoisted_12$1)
                ]),
                _: 1
              }, 8, ["modelValue", "preset-ranges"])
            ]),
            createBaseVNode("div", _hoisted_13$1, [
              createVNode(ByDaysChart, {
                data: tabInfoByDays.value
              }, null, 8, ["data"])
            ]),
            createBaseVNode("div", null, [
              createVNode(WebsiteStatsDetails, {
                details: tabInfoByDays.value
              }, null, 8, ["details"])
            ])
          ]))
        ]))
      ]);
    };
  }
});
const WebsiteStats_vue_vue_type_style_index_0_scoped_02cd456d_lang = "";
const WebsiteStats = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-02cd456d"]]);
const _imports_0 = "/by-hours.svg";
const _imports_1 = "/by-intervals.svg";
function ascending$1(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function descending(a, b) {
  return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
function bisector(f2) {
  let compare1, compare2, delta;
  if (f2.length !== 2) {
    compare1 = ascending$1;
    compare2 = (d2, x) => ascending$1(f2(d2), x);
    delta = (d2, x) => f2(d2) - x;
  } else {
    compare1 = f2 === ascending$1 || f2 === descending ? f2 : zero$1;
    compare2 = f2;
    delta = f2;
  }
  function left2(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0)
        return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x) < 0)
          lo = mid + 1;
        else
          hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function right2(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0)
        return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x) <= 0)
          lo = mid + 1;
        else
          hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function center2(a, x, lo = 0, hi = a.length) {
    const i = left2(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }
  return { left: left2, center: center2, right: right2 };
}
function zero$1() {
  return 0;
}
function number$2(x) {
  return x === null ? NaN : +x;
}
const ascendingBisect = bisector(ascending$1);
const bisectRight = ascendingBisect.right;
bisector(number$2).center;
const bisect = bisectRight;
const e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
function tickSpec(start2, stop, count) {
  const step = (stop - start2) / Math.max(0, count), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start2 * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start2)
      ++i1;
    if (i2 / inc > stop)
      --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start2 / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start2)
      ++i1;
    if (i2 * inc > stop)
      --i2;
  }
  if (i2 < i1 && 0.5 <= count && count < 2)
    return tickSpec(start2, stop, count * 2);
  return [i1, i2, inc];
}
function ticks(start2, stop, count) {
  stop = +stop, start2 = +start2, count = +count;
  if (!(count > 0))
    return [];
  if (start2 === stop)
    return [start2];
  const reverse = stop < start2, [i1, i2, inc] = reverse ? tickSpec(stop, start2, count) : tickSpec(start2, stop, count);
  if (!(i2 >= i1))
    return [];
  const n = i2 - i1 + 1, ticks2 = new Array(n);
  if (reverse) {
    if (inc < 0)
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i2 - i) / -inc;
    else
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i2 - i) * inc;
  } else {
    if (inc < 0)
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i1 + i) / -inc;
    else
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i1 + i) * inc;
  }
  return ticks2;
}
function tickIncrement(start2, stop, count) {
  stop = +stop, start2 = +start2, count = +count;
  return tickSpec(start2, stop, count)[2];
}
function tickStep(start2, stop, count) {
  stop = +stop, start2 = +start2, count = +count;
  const reverse = stop < start2, inc = reverse ? tickIncrement(stop, start2, count) : tickIncrement(start2, stop, count);
  return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}
function identity$3(x) {
  return x;
}
var top = 1, right = 2, bottom = 3, left = 4, epsilon = 1e-6;
function translateX(x) {
  return "translate(" + x + ",0)";
}
function translateY(y) {
  return "translate(0," + y + ")";
}
function number$1(scale) {
  return (d2) => +scale(d2);
}
function center(scale, offset) {
  offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
  if (scale.round())
    offset = Math.round(offset);
  return (d2) => +scale(d2) + offset;
}
function entering() {
  return !this.__axis;
}
function axis(orient, scale) {
  var tickArguments = [], tickValues = null, tickFormat2 = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5, k = orient === top || orient === left ? -1 : 1, x = orient === left || orient === right ? "x" : "y", transform = orient === top || orient === bottom ? translateX : translateY;
  function axis2(context) {
    var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format2 = tickFormat2 == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity$3 : tickFormat2, spacing = Math.max(tickSizeInner, 0) + tickPadding, range = scale.range(), range0 = +range[0] + offset, range1 = +range[range.length - 1] + offset, position = (scale.bandwidth ? center : number$1)(scale.copy(), offset), selection2 = context.selection ? context.selection() : context, path = selection2.selectAll(".domain").data([null]), tick = selection2.selectAll(".tick").data(values, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
    path = path.merge(path.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
    tick = tick.merge(tickEnter);
    line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x + "2", k * tickSizeInner));
    text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x, k * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
    if (context !== selection2) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);
      tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function(d2) {
        return isFinite(d2 = position(d2)) ? transform(d2 + offset) : this.getAttribute("transform");
      });
      tickEnter.attr("opacity", epsilon).attr("transform", function(d2) {
        var p = this.parentNode.__axis;
        return transform((p && isFinite(p = p(d2)) ? p : position(d2)) + offset);
      });
    }
    tickExit.remove();
    path.attr("d", orient === left || orient === right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);
    tick.attr("opacity", 1).attr("transform", function(d2) {
      return transform(position(d2) + offset);
    });
    line.attr(x + "2", k * tickSizeInner);
    text.attr(x, k * spacing).text(format2);
    selection2.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
    selection2.each(function() {
      this.__axis = position;
    });
  }
  axis2.scale = function(_) {
    return arguments.length ? (scale = _, axis2) : scale;
  };
  axis2.ticks = function() {
    return tickArguments = Array.from(arguments), axis2;
  };
  axis2.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : Array.from(_), axis2) : tickArguments.slice();
  };
  axis2.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : Array.from(_), axis2) : tickValues && tickValues.slice();
  };
  axis2.tickFormat = function(_) {
    return arguments.length ? (tickFormat2 = _, axis2) : tickFormat2;
  };
  axis2.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis2) : tickSizeOuter;
  };
  axis2.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis2) : tickPadding;
  };
  axis2.offset = function(_) {
    return arguments.length ? (offset = +_, axis2) : offset;
  };
  return axis2;
}
function axisBottom(scale) {
  return axis(bottom, scale);
}
function axisLeft(scale) {
  return axis(left, scale);
}
var noop = { value: () => {
} };
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t))
      throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames$1(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._, T = parseTypenames$1(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n)
        if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name)))
          return t;
      return;
    }
    if (callback != null && typeof callback !== "function")
      throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type)
        _[t] = set$1(_[t], typename.name, callback);
      else if (callback == null)
        for (t in _)
          _[t] = set$1(_[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy2 = {}, _ = this._;
    for (var t in _)
      copy2[t] = _[t].slice();
    return new Dispatch(copy2);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0)
      for (var args = new Array(n), i = 0, n, t; i < n; ++i)
        args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type))
      throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type))
      throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  }
};
function get$1(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}
function set$1(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null)
    type.push({ name, value: callback });
  return type;
}
var xhtml = "http://www.w3.org/1999/xhtml";
const namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function namespace(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
    name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? { space: namespaces[prefix], local: name } : name;
}
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator(name) {
  var fullname = namespace(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}
function none() {
}
function selector(selector2) {
  return selector2 == null ? none : function() {
    return this.querySelector(selector2);
  };
}
function selection_select(select2) {
  if (typeof select2 !== "function")
    select2 = selector(select2);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, subgroup = subgroups[j2] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select2.call(node, node.__data__, i, group))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection$1(subgroups, this._parents);
}
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}
function empty() {
  return [];
}
function selectorAll(selector2) {
  return selector2 == null ? empty : function() {
    return this.querySelectorAll(selector2);
  };
}
function arrayAll(select2) {
  return function() {
    return array(select2.apply(this, arguments));
  };
}
function selection_selectAll(select2) {
  if (typeof select2 === "function")
    select2 = arrayAll(select2);
  else
    select2 = selectorAll(select2);
  for (var groups = this._groups, m2 = groups.length, subgroups = [], parents = [], j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select2.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }
  return new Selection$1(subgroups, parents);
}
function matcher(selector2) {
  return function() {
    return this.matches(selector2);
  };
}
function childMatcher(selector2) {
  return function(node) {
    return node.matches(selector2);
  };
}
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selection_selectChild(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}
var filter = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}
function selection_selectChildren(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}
function selection_filter(match) {
  if (typeof match !== "function")
    match = matcher(match);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, subgroup = subgroups[j2] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection$1(subgroups, this._parents);
}
function sparse(update) {
  return new Array(update.length);
}
function selection_enter() {
  return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector2) {
    return this._parent.querySelector(selector2);
  },
  querySelectorAll: function(selector2) {
    return this._parent.querySelectorAll(selector2);
  }
};
function constant$1(x) {
  return function() {
    return x;
  };
}
function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0, node, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}
function bindKey(parent, group, enter, update, exit, data, key) {
  var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function selection_data(value, key) {
  if (!arguments.length)
    return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function")
    value = constant$1(value);
  for (var m2 = groups.length, update = new Array(m2), enter = new Array(m2), exit = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    var parent = parents[j2], group = groups[j2], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j2, parents)), dataLength = data.length, enterGroup = enter[j2] = new Array(dataLength), updateGroup = update[j2] = new Array(dataLength), exitGroup = exit[j2] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1)
          i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength)
          ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection$1(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}
function selection_exit() {
  return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
}
function selection_join(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter)
      enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update)
      update = update.selection();
  }
  if (onexit == null)
    exit.remove();
  else
    onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}
function selection_merge(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m2 = Math.min(m0, m1), merges = new Array(m0), j2 = 0; j2 < m2; ++j2) {
    for (var group0 = groups0[j2], group1 = groups1[j2], n = group0.length, merge = merges[j2] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j2 < m0; ++j2) {
    merges[j2] = groups0[j2];
  }
  return new Selection$1(merges, this._parents);
}
function selection_order() {
  for (var groups = this._groups, j2 = -1, m2 = groups.length; ++j2 < m2; ) {
    for (var group = groups[j2], i = group.length - 1, next = group[i], node; --i >= 0; ) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4)
          next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}
function selection_sort(compare) {
  if (!compare)
    compare = ascending;
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }
  for (var groups = this._groups, m2 = groups.length, sortgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, sortgroup = sortgroups[j2] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection$1(sortgroups, this._parents).order();
}
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function selection_call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}
function selection_nodes() {
  return Array.from(this);
}
function selection_node() {
  for (var groups = this._groups, j2 = 0, m2 = groups.length; j2 < m2; ++j2) {
    for (var group = groups[j2], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node)
        return node;
    }
  }
  return null;
}
function selection_size() {
  let size = 0;
  for (const node of this)
    ++size;
  return size;
}
function selection_empty() {
  return !this.node();
}
function selection_each(callback) {
  for (var groups = this._groups, j2 = 0, m2 = groups.length; j2 < m2; ++j2) {
    for (var group = groups[j2], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i])
        callback.call(node, node.__data__, i, group);
    }
  }
  return this;
}
function attrRemove$1(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS$1(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant$1(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS$1(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction$1(name, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null)
      this.removeAttribute(name);
    else
      this.setAttribute(name, v2);
  };
}
function attrFunctionNS$1(fullname, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null)
      this.removeAttributeNS(fullname.space, fullname.local);
    else
      this.setAttributeNS(fullname.space, fullname.local, v2);
  };
}
function selection_attr(name, value) {
  var fullname = namespace(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS$1 : attrRemove$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1 : attrFunction$1 : fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, value));
}
function defaultView(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}
function styleRemove$1(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant$1(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction$1(name, value, priority) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null)
      this.style.removeProperty(name);
    else
      this.style.setProperty(name, v2, priority);
  };
}
function selection_style(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove$1 : typeof value === "function" ? styleFunction$1 : styleConstant$1)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null)
      delete this[name];
    else
      this[name] = v2;
  };
}
function selection_property(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n)
    list.add(names[i]);
}
function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n)
    list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function selection_classed(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n)
      if (!list.contains(names[i]))
        return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}
function textRemove() {
  this.textContent = "";
}
function textConstant$1(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction$1(value) {
  return function() {
    var v2 = value.apply(this, arguments);
    this.textContent = v2 == null ? "" : v2;
  };
}
function selection_text(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction$1 : textConstant$1)(value)) : this.node().textContent;
}
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v2 = value.apply(this, arguments);
    this.innerHTML = v2 == null ? "" : v2;
  };
}
function selection_html(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}
function raise() {
  if (this.nextSibling)
    this.parentNode.appendChild(this);
}
function selection_raise() {
  return this.each(raise);
}
function lower() {
  if (this.previousSibling)
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function selection_lower() {
  return this.each(lower);
}
function selection_append(name) {
  var create2 = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}
function constantNull() {
  return null;
}
function selection_insert(name, before) {
  var create2 = typeof name === "function" ? name : creator(name), select2 = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select2.apply(this, arguments) || null);
  });
}
function remove() {
  var parent = this.parentNode;
  if (parent)
    parent.removeChild(this);
}
function selection_remove() {
  return this.each(remove);
}
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}
function selection_datum(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on)
      return;
    for (var j2 = 0, i = -1, m2 = on.length, o; j2 < m2; ++j2) {
      if (o = on[j2], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i)
      on.length = i;
    else
      delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on)
      for (var j2 = 0, m2 = on.length; j2 < m2; ++j2) {
        if ((o = on[j2]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on)
      this.__on = [o];
    else
      on.push(o);
  };
}
function selection_on(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on)
      for (var j2 = 0, m2 = on.length, o; j2 < m2; ++j2) {
        for (i = 0, o = on[j2]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i)
    this.each(on(typenames[i], value, options));
  return this;
}
function dispatchEvent(node, type, params) {
  var window2 = defaultView(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params)
      event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else
      event.initEvent(type, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}
function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}
function selection_dispatch(type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}
function* selection_iterator() {
  for (var groups = this._groups, j2 = 0, m2 = groups.length; j2 < m2; ++j2) {
    for (var group = groups[j2], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i])
        yield node;
    }
  }
}
var root = [null];
function Selection$1(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection() {
  return new Selection$1([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection$1.prototype = selection.prototype = {
  constructor: Selection$1,
  select: selection_select,
  selectAll: selection_selectAll,
  selectChild: selection_selectChild,
  selectChildren: selection_selectChildren,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  join: selection_join,
  merge: selection_merge,
  selection: selection_selection,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  clone: selection_clone,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch,
  [Symbol.iterator]: selection_iterator
};
function select(selector2) {
  return typeof selector2 === "string" ? new Selection$1([[document.querySelector(selector2)]], [document.documentElement]) : new Selection$1([[selector2]], root);
}
function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m2, l;
  format2 = (format2 + "").trim().toLowerCase();
  return (m2 = reHex.exec(format2)) ? (l = m2[1].length, m2 = parseInt(m2[1], 16), l === 6 ? rgbn(m2) : l === 3 ? new Rgb(m2 >> 8 & 15 | m2 >> 4 & 240, m2 >> 4 & 15 | m2 & 240, (m2 & 15) << 4 | m2 & 15, 1) : l === 8 ? rgba(m2 >> 24 & 255, m2 >> 16 & 255, m2 >> 8 & 255, (m2 & 255) / 255) : l === 4 ? rgba(m2 >> 12 & 15 | m2 >> 8 & 240, m2 >> 8 & 15 | m2 >> 4 & 240, m2 >> 4 & 15 | m2 & 240, ((m2 & 15) << 4 | m2 & 15) / 255) : null) : (m2 = reRgbInteger.exec(format2)) ? new Rgb(m2[1], m2[2], m2[3], 1) : (m2 = reRgbPercent.exec(format2)) ? new Rgb(m2[1] * 255 / 100, m2[2] * 255 / 100, m2[3] * 255 / 100, 1) : (m2 = reRgbaInteger.exec(format2)) ? rgba(m2[1], m2[2], m2[3], m2[4]) : (m2 = reRgbaPercent.exec(format2)) ? rgba(m2[1] * 255 / 100, m2[2] * 255 / 100, m2[3] * 255 / 100, m2[4]) : (m2 = reHslPercent.exec(format2)) ? hsla(m2[1], m2[2] / 100, m2[3] / 100, 1) : (m2 = reHslaPercent.exec(format2)) ? hsla(m2[1], m2[2] / 100, m2[3] / 100, m2[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0)
    r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define(Rgb, rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h2, s, l, a) {
  if (a <= 0)
    h2 = s = l = NaN;
  else if (l <= 0 || l >= 1)
    h2 = s = NaN;
  else if (s <= 0)
    h2 = NaN;
  return new Hsl(h2, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl)
    return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Hsl();
  if (o instanceof Hsl)
    return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h2 = NaN, s = max - min, l = (max + min) / 2;
  if (s) {
    if (r === max)
      h2 = (g - b) / s + (g < b) * 6;
    else if (g === max)
      h2 = (b - r) / s + 2;
    else
      h2 = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h2 *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h2;
  }
  return new Hsl(h2, s, l, o.opacity);
}
function hsl(h2, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h2) : new Hsl(h2, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h2, s, l, opacity) {
  this.h = +h2;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h2 = this.h % 360 + (this.h < 0) * 360, s = isNaN(h2) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h2 >= 240 ? h2 - 240 : h2 + 120, m1, m2),
      hsl2rgb(h2, m1, m2),
      hsl2rgb(h2 < 120 ? h2 + 240 : h2 - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h2, m1, m2) {
  return (h2 < 60 ? m1 + (m2 - m1) * h2 / 60 : h2 < 180 ? m2 : h2 < 240 ? m1 + (m2 - m1) * (240 - h2) / 60 : m1) * 255;
}
const constant = (x) => () => x;
function linear$1(a, d2) {
  return function(t) {
    return a + t * d2;
  };
}
function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d2 = b - a;
  return d2 ? linear$1(a, d2) : constant(isNaN(a) ? b : a);
}
const interpolateRgb = function rgbGamma(y) {
  var color2 = gamma(y);
  function rgb$1(start2, end) {
    var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb$1.gamma = rgbGamma;
  return rgb$1;
}(1);
function numberArray(a, b) {
  if (!b)
    b = [];
  var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i)
      c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}
function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}
function genericArray(a, b) {
  var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
  for (i = 0; i < na; ++i)
    x[i] = interpolate$1(a[i], b[i]);
  for (; i < nb; ++i)
    c[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i)
      c[i] = x[i](t);
    return c;
  };
}
function date(a, b) {
  var d2 = /* @__PURE__ */ new Date();
  return a = +a, b = +b, function(t) {
    return d2.setTime(a * (1 - t) + b * t), d2;
  };
}
function interpolateNumber(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}
function object(a, b) {
  var i = {}, c = {}, k;
  if (a === null || typeof a !== "object")
    a = {};
  if (b === null || typeof b !== "object")
    b = {};
  for (k in b) {
    if (k in a) {
      i[k] = interpolate$1(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }
  return function(t) {
    for (k in i)
      c[k] = i[k](t);
    return c;
  };
}
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function interpolateString(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q2 = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i])
        s[i] += bs;
      else
        s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i])
        s[i] += bm;
      else
        s[++i] = bm;
    } else {
      s[++i] = null;
      q2.push({ i, x: interpolateNumber(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i])
      s[i] += bs;
    else
      s[++i] = bs;
  }
  return s.length < 2 ? q2[0] ? one(q2[0].x) : zero(b) : (b = q2.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2)
      s[(o = q2[i2]).i] = o.x(t);
    return s.join("");
  });
}
function interpolate$1(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant(b) : (t === "number" ? interpolateNumber : t === "string" ? (c = color(b)) ? (b = c, interpolateRgb) : interpolateString : b instanceof color ? interpolateRgb : b instanceof Date ? date : isNumberArray(b) ? numberArray : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object : interpolateNumber)(a, b);
}
function interpolateRound(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}
var degrees = 180 / Math.PI;
var identity$2 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose(a, b, c, d2, e, f2) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b))
    a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d2)
    c -= a * skewX, d2 -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d2 * d2))
    c /= scaleY, d2 /= scaleY, skewX /= scaleY;
  if (a * d2 < b * c)
    a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f2,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}
var svgNode;
function parseCss(value) {
  const m2 = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m2.isIdentity ? identity$2 : decompose(m2.a, m2.b, m2.c, m2.d, m2.e, m2.f);
}
function parseSvg(value) {
  if (value == null)
    return identity$2;
  if (!svgNode)
    svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate()))
    return identity$2;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q2) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q2.push({ i: i - 4, x: interpolateNumber(xa, xb) }, { i: i - 2, x: interpolateNumber(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a, b, s, q2) {
    if (a !== b) {
      if (a - b > 180)
        b += 360;
      else if (b - a > 180)
        a += 360;
      q2.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a, b, s, q2) {
    if (a !== b) {
      q2.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q2) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q2.push({ i: i - 4, x: interpolateNumber(xa, xb) }, { i: i - 2, x: interpolateNumber(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a, b) {
    var s = [], q2 = [];
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q2);
    rotate(a.rotate, b.rotate, s, q2);
    skewX(a.skewX, b.skewX, s, q2);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q2);
    a = b = null;
    return function(t) {
      var i = -1, n = q2.length, o;
      while (++i < n)
        s[(o = q2[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
var frame = 0, timeout$1 = 0, interval = 0, pokeDelay = 1e3, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f2) {
  setTimeout(f2, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail)
        taskTail._next = this;
      else
        taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0)
      t._call.call(void 0, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout$1 = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay)
    clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time)
        time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}
function sleep(time) {
  if (frame)
    return;
  if (timeout$1)
    timeout$1 = clearTimeout(timeout$1);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity)
      timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval)
      interval = clearInterval(interval);
  } else {
    if (!interval)
      clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}
function timeout(callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}
var emptyOn = dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule(node, name, id2, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules)
    node.__transition = {};
  else if (id2 in schedules)
    return;
  create(node, id2, {
    name,
    index,
    // For context during callback.
    group,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule2 = get(node, id2);
  if (schedule2.state > CREATED)
    throw new Error("too late; already scheduled");
  return schedule2;
}
function set(node, id2) {
  var schedule2 = get(node, id2);
  if (schedule2.state > STARTED)
    throw new Error("too late; already running");
  return schedule2;
}
function get(node, id2) {
  var schedule2 = node.__transition;
  if (!schedule2 || !(schedule2 = schedule2[id2]))
    throw new Error("transition not found");
  return schedule2;
}
function create(node, id2, self) {
  var schedules = node.__transition, tween;
  schedules[id2] = self;
  self.timer = timer(schedule2, 0, self.time);
  function schedule2(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start2, self.delay, self.time);
    if (self.delay <= elapsed)
      start2(elapsed - self.delay);
  }
  function start2(elapsed) {
    var i, j2, n, o;
    if (self.state !== SCHEDULED)
      return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name)
        continue;
      if (o.state === STARTED)
        return timeout(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING)
      return;
    self.state = STARTED;
    tween = new Array(n = self.tween.length);
    for (i = 0, j2 = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j2] = o;
      }
    }
    tween.length = j2 + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node, t);
    }
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }
  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id2];
    for (var i in schedules)
      return;
    delete node.__transition;
  }
}
function interrupt(node, name) {
  var schedules = node.__transition, schedule2, active, empty2 = true, i;
  if (!schedules)
    return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule2 = schedules[i]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule2.state > STARTING && schedule2.state < ENDING;
    schedule2.state = ENDED;
    schedule2.timer.stop();
    schedule2.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule2.index, schedule2.group);
    delete schedules[i];
  }
  if (empty2)
    delete node.__transition;
}
function selection_interrupt(name) {
  return this.each(function() {
    interrupt(this, name);
  });
}
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule2 = set(this, id2), tween = schedule2.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule2.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function")
    throw new Error();
  return function() {
    var schedule2 = set(this, id2), tween = schedule2.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n)
        tween1.push(t);
    }
    schedule2.tween = tween1;
  };
}
function transition_tween(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition, name, value) {
  var id2 = transition._id;
  transition.each(function() {
    var schedule2 = set(this, id2);
    (schedule2.value || (schedule2.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get(node, id2).value[name];
  };
}
function interpolate(a, b) {
  var c;
  return (typeof b === "number" ? interpolateNumber : b instanceof color ? interpolateRgb : (c = color(b)) ? (b = c, interpolateRgb) : interpolateString)(a, b);
}
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function attrConstantNS(fullname, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function attrFunction(name, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function attrFunctionNS(fullname, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function transition_attr(name, value) {
  var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function transition_attrTween(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  var fullname = namespace(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function transition_delay(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get(this.node(), id2).delay;
}
function durationFunction(id2, value) {
  return function() {
    set(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set(this, id2).duration = value;
  };
}
function transition_duration(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get(this.node(), id2).duration;
}
function easeConstant(id2, value) {
  if (typeof value !== "function")
    throw new Error();
  return function() {
    set(this, id2).ease = value;
  };
}
function transition_ease(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get(this.node(), id2).ease;
}
function easeVarying(id2, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (typeof v2 !== "function")
      throw new Error();
    set(this, id2).ease = v2;
  };
}
function transition_easeVarying(value) {
  if (typeof value !== "function")
    throw new Error();
  return this.each(easeVarying(this._id, value));
}
function transition_filter(match) {
  if (typeof match !== "function")
    match = matcher(match);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, subgroup = subgroups[j2] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}
function transition_merge(transition) {
  if (transition._id !== this._id)
    throw new Error();
  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m2 = Math.min(m0, m1), merges = new Array(m0), j2 = 0; j2 < m2; ++j2) {
    for (var group0 = groups0[j2], group1 = groups1[j2], n = group0.length, merge = merges[j2] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j2 < m0; ++j2) {
    merges[j2] = groups0[j2];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0)
      t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set;
  return function() {
    var schedule2 = sit(this, id2), on = schedule2.on;
    if (on !== on0)
      (on1 = (on0 = on).copy()).on(name, listener);
    schedule2.on = on1;
  };
}
function transition_on(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition)
      if (+i !== id2)
        return;
    if (parent)
      parent.removeChild(this);
  };
}
function transition_remove() {
  return this.on("end.remove", removeFunction(this._id));
}
function transition_select(select2) {
  var name = this._name, id2 = this._id;
  if (typeof select2 !== "function")
    select2 = selector(select2);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, subgroup = subgroups[j2] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select2.call(node, node.__data__, i, group))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id2, i, subgroup, get(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}
function transition_selectAll(select2) {
  var name = this._name, id2 = this._id;
  if (typeof select2 !== "function")
    select2 = selectorAll(select2);
  for (var groups = this._groups, m2 = groups.length, subgroups = [], parents = [], j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children2 = select2.call(node, node.__data__, i, group), child, inherit2 = get(node, id2), k = 0, l = children2.length; k < l; ++k) {
          if (child = children2[k]) {
            schedule(child, name, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}
var Selection = selection.prototype.constructor;
function transition_selection() {
  return new Selection(this._groups, this._parents);
}
function styleNull(name, interpolate2) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, string10 = string1);
  };
}
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function styleFunction(name, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null)
      string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule2 = set(this, id2), on = schedule2.on, listener = schedule2.value[key] == null ? remove2 || (remove2 = styleRemove(name)) : void 0;
    if (on !== on0 || listener0 !== listener)
      (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule2.on = on1;
  };
}
function transition_style(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
}
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function transition_styleTween(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function transition_text(value) {
  return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
}
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function transition_textTween(value) {
  var key = "text";
  if (arguments.length < 1)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, textTween(value));
}
function transition_transition() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m2 = groups.length, j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit2 = get(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name, id1);
}
function transition_end() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0)
        resolve();
    } };
    that.each(function() {
      var schedule2 = set(this, id2), on = schedule2.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule2.on = on1;
    });
    if (size === 0)
      resolve();
  });
}
var id = 0;
function Transition(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function newId() {
  return ++id;
}
var selection_prototype = selection.prototype;
Transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  textTween: transition_textTween,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: transition_ease,
  easeVarying: transition_easeVarying,
  end: transition_end,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function selection_transition(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m2 = groups.length, j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id2, i, group, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups, this._parents, name, id2);
}
selection.prototype.interrupt = selection_interrupt;
selection.prototype.transition = selection_transition;
function formatDecimal(x) {
  return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
}
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0)
    return null;
  var i, coefficient = x.slice(0, i);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}
function exponent(x) {
  return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}
function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length, t = [], j2 = 0, g = grouping[0], length = 0;
    while (i > 0 && g > 0) {
      if (length + g + 1 > width)
        g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width)
        break;
      g = grouping[j2 = (j2 + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}
function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function formatTrim(s) {
  out:
    for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s[i]) {
        case ".":
          i0 = i1 = i;
          break;
        case "0":
          if (i0 === 0)
            i0 = i;
          i1 = i;
          break;
        default:
          if (!+s[i])
            break out;
          if (i0 > 0)
            i0 = 0;
          break;
      }
    }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}
var prefixExponent;
function formatPrefixAuto(x, p) {
  var d2 = formatDecimalParts(x, p);
  if (!d2)
    return x + "";
  var coefficient = d2[0], exponent2 = d2[1], i = exponent2 - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0];
}
function formatRounded(x, p) {
  var d2 = formatDecimalParts(x, p);
  if (!d2)
    return x + "";
  var coefficient = d2[0], exponent2 = d2[1];
  return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
}
const formatTypes = {
  "%": (x, p) => (x * 100).toFixed(p),
  "b": (x) => Math.round(x).toString(2),
  "c": (x) => x + "",
  "d": formatDecimal,
  "e": (x, p) => x.toExponential(p),
  "f": (x, p) => x.toFixed(p),
  "g": (x, p) => x.toPrecision(p),
  "o": (x) => Math.round(x).toString(8),
  "p": (x, p) => formatRounded(x * 100, p),
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": (x) => Math.round(x).toString(16).toUpperCase(),
  "x": (x) => Math.round(x).toString(16)
};
function identity$1(x) {
  return x;
}
var map = Array.prototype.map, prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function formatLocale(locale2) {
  var group = locale2.grouping === void 0 || locale2.thousands === void 0 ? identity$1 : formatGroup(map.call(locale2.grouping, Number), locale2.thousands + ""), currencyPrefix = locale2.currency === void 0 ? "" : locale2.currency[0] + "", currencySuffix = locale2.currency === void 0 ? "" : locale2.currency[1] + "", decimal = locale2.decimal === void 0 ? "." : locale2.decimal + "", numerals = locale2.numerals === void 0 ? identity$1 : formatNumerals(map.call(locale2.numerals, String)), percent = locale2.percent === void 0 ? "%" : locale2.percent + "", minus = locale2.minus === void 0 ? "−" : locale2.minus + "", nan = locale2.nan === void 0 ? "NaN" : locale2.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero2 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
    if (type === "n")
      comma = true, type = "g";
    else if (!formatTypes[type])
      precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero2 || fill === "0" && align === "=")
      zero2 = true, fill = "0", align = "=";
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim)
          value = formatTrim(value);
        if (valueNegative && +value === 0 && sign !== "+")
          valueNegative = false;
        valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero2)
        value = group(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero2)
        value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f2 = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
    return function(value2) {
      return f2(k * value2) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}
var locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = formatLocale(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}
function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}
function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}
function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}
function initRange(domain, range) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range).domain(domain);
      break;
  }
  return this;
}
function constants(x) {
  return function() {
    return x;
  };
}
function number(x) {
  return +x;
}
var unit = [0, 1];
function identity(x) {
  return x;
}
function normalize(a, b) {
  return (b -= a = +a) ? function(x) {
    return (x - a) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
  var t;
  if (a > b)
    t = a, a = b, b = t;
  return function(x) {
    return Math.max(a, Math.min(b, x));
  };
}
function bimap(domain, range, interpolate2) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0)
    d0 = normalize(d1, d0), r0 = interpolate2(r1, r0);
  else
    d0 = normalize(d0, d1), r0 = interpolate2(r0, r1);
  return function(x) {
    return r0(d0(x));
  };
}
function polymap(domain, range, interpolate2) {
  var j2 = Math.min(domain.length, range.length) - 1, d2 = new Array(j2), r = new Array(j2), i = -1;
  if (domain[j2] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }
  while (++i < j2) {
    d2[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate2(range[i], range[i + 1]);
  }
  return function(x) {
    var i2 = bisect(domain, x, 1, j2) - 1;
    return r[i2](d2[i2](x));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain = unit, range = unit, interpolate2 = interpolate$1, transform, untransform, unknown, clamp = identity, piecewise, output, input;
  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity)
      clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate2)))(transform(clamp(x)));
  }
  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };
  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate2 = interpolateRound, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate2 = _, rescale()) : interpolate2;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}
function continuous() {
  return transformer()(identity, identity);
}
function tickFormat(start2, stop, count, specifier) {
  var step = tickStep(start2, stop, count), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start2), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value)))
        specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start2), Math.abs(stop)))))
        specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step)))
        specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count) {
    var d2 = domain();
    return ticks(d2[0], d2[d2.length - 1], count == null ? 10 : count);
  };
  scale.tickFormat = function(count, specifier) {
    var d2 = domain();
    return tickFormat(d2[0], d2[d2.length - 1], count == null ? 10 : count, specifier);
  };
  scale.nice = function(count) {
    if (count == null)
      count = 10;
    var d2 = domain();
    var i0 = 0;
    var i1 = d2.length - 1;
    var start2 = d2[i0];
    var stop = d2[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop < start2) {
      step = start2, start2 = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start2, stop, count);
      if (step === prestep) {
        d2[i0] = start2;
        d2[i1] = stop;
        return domain(d2);
      } else if (step > 0) {
        start2 = Math.floor(start2 / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start2 = Math.ceil(start2 * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear() {
  var scale = continuous();
  scale.copy = function() {
    return copy(scale, linear());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location2) {
    return [(location2[0] - this.x) / this.k, (location2[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Transform.prototype;
const _hoisted_1$4 = { class: "description d-inline-block" };
const _hoisted_2$2 = { class: "d-inline-block mr-10 ml-10" };
const _hoisted_3$2 = ["value"];
const _hoisted_4$2 = ["value"];
const _hoisted_5$2 = ["value"];
const _hoisted_6$2 = ["value"];
const _hoisted_7$2 = { class: "description d-inline-block" };
const __default__$3 = {
  name: "TimeIntervalChart"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  setup(__props) {
    let MinValue;
    ((MinValue2) => {
      MinValue2[MinValue2["Seconds_10"] = 10] = "Seconds_10";
      MinValue2[MinValue2["Min_1"] = 60] = "Min_1";
      MinValue2[MinValue2["Min_5"] = 300] = "Min_5";
      MinValue2[MinValue2["Min_10"] = 600] = "Min_10";
    })(MinValue || (MinValue = {}));
    const { t } = useI18n();
    const storage = injectStorage();
    const chart = ref();
    const minValue = ref();
    const todayIntervals = ref();
    onMounted(async () => {
      minValue.value = 10;
      const timeIntervalList = await storage.getDeserializeList(
        StorageDeserializeParam.TIMEINTERVAL_LIST
      );
      todayIntervals.value = timeIntervalList == null ? void 0 : timeIntervalList.filter((x) => x.day == todayLocalDate());
      renderChart();
    });
    function renderChart() {
      var _a;
      const dataForChart = [];
      (_a = todayIntervals.value) == null ? void 0 : _a.forEach((interval2) => {
        interval2.intervals.forEach((int) => {
          const from = int.split("-")[0];
          const to = int.split("-")[1];
          if (convertStringTimeIntervalToSeconds(to) - convertStringTimeIntervalToSeconds(from) > minValue.value) {
            dataForChart.push({ domain: interval2.domain, interval: convertInterval(int) });
          }
        });
      });
      drawIntervalChart(dataForChart);
    }
    function refreshChart() {
      chart.value.innerHTML = "";
      renderChart();
    }
    function convertInterval(interval2) {
      function convert(item) {
        item = item.map((x) => x.length == 1 ? `0${x}` : x);
        return item.join(":");
      }
      const sourceTimeFrom = interval2.split("-")[0].split(":");
      const sourceTimeTo = interval2.split("-")[1].split(":");
      return `${convert(sourceTimeFrom)}-${convert(sourceTimeTo)}`;
    }
    function drawIntervalChart(data) {
      data.forEach((item) => {
        const hFrom = getHourFrom(item.interval);
        const hTo = getHourTo(item.interval);
        if (hFrom != hTo) {
          const sourceTimeFrom = item.interval.split("-")[0].split(":");
          const sourceTimeTo = item.interval.split("-")[1].split(":");
          const timeTo = `${sourceTimeFrom[0]}:59:59`;
          const timeFrom = `${sourceTimeTo[0]}:00:00`;
          data.push({ domain: item.domain, interval: item.interval.split("-")[0] + "-" + timeTo });
          data.push({ domain: item.domain, interval: timeFrom + "-" + item.interval.split("-")[1] });
        }
      });
      const margin = { top: 10, right: 10, bottom: 20, left: 20 };
      const width = chart.value.offsetWidth;
      const height = 400;
      const tickDistance = 4.38;
      const tooltip = select("#timeIntervalChartD3").append("div").style("opacity", 0).style("display", "none").style("position", "absolute").style("background-color", "white").style("color", "black").style("border", "1px solid grey").attr("class", "tooltip").style("border-width", "1px").style("border-radius", "3px").style("padding", "5px");
      const mouseover = function(e) {
        tooltip.style("opacity", 1).style("display", "block");
        select(".tooltip").style("left", e.layerX + 15 + "px").style("top", e.layerY + 15 + "px");
      };
      const mousemove = function(event, data2) {
        tooltip.html(`<b>${data2.domain}</b><br>${data2.interval}`);
      };
      const mouseleave = function(e) {
        tooltip.style("opacity", 0).style("display", "none");
      };
      const svg = select("#timeIntervalChartD3").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", `translate(${margin.left},${margin.top})`);
      const y = linear([height, 0]).domain([0, 60]);
      const yAxis = axisLeft(y);
      const x = linear([0, width]).domain([0, 24]);
      const xAxis = axisBottom(x).ticks(24);
      svg.append("g").attr("class", "grid").style("color", "#e5e5e5").attr("transform", `translate(0, ${height})`).call(xAxis.tickSize(-height));
      svg.append("g").attr("class", "grid").style("color", "#e5e5e5").call(yAxis.tickSize(-width));
      svg.selectAll("text").style("fill", "black");
      svg.selectAll(".bar").data(data).enter().append("rect").style("fill", "#5668e2").style("cursor", "pointer").style("stroke-width", "1").attr("class", "bar").attr("x", (data2) => x(getHourFrom(data2.interval)) + 2).attr("width", chart.value.offsetWidth / 24 - 4).attr("y", (data2) => y(getMinutesTo(data2.interval)) - 1).attr("height", (data2) => {
        const offset = getMinutesTo(data2.interval) - getMinutesFrom(data2.interval);
        if (offset == 0) {
          const offsetSeconds = getSecondsTo(data2.interval) - getSecondsFrom(data2.interval);
          if (offsetSeconds <= 3)
            return 0;
          else
            return 1;
        } else
          return offset * tickDistance;
      }).on("mouseover", mouseover).on("mousemove", mousemove).on("mouseleave", mouseleave);
      function getHourFrom(interval2) {
        const time = interval2.split("-")[0];
        return Number(time.split(":")[0]);
      }
      function getHourTo(interval2) {
        var time = interval2.split("-")[1];
        return Number(time.split(":")[0]);
      }
      function getMinutesFrom(interval2) {
        var time = interval2.split("-")[0];
        return Number(time.split(":")[1]);
      }
      function getMinutesTo(interval2) {
        var time = interval2.split("-")[1];
        return Number(time.split(":")[1]);
      }
      function getSecondsFrom(interval2) {
        var time = interval2.split("-")[0];
        return Number(time.split(":")[2]);
      }
      function getSecondsTo(interval2) {
        var time = interval2.split("-")[1];
        return Number(time.split(":")[2]);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", null, [
          createBaseVNode("p", _hoisted_1$4, toDisplayString(unref(t)("intervalsChart.message")), 1),
          createBaseVNode("div", _hoisted_2$2, [
            withDirectives(createBaseVNode("select", {
              class: "option",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => minValue.value = $event),
              onChange: _cache[1] || (_cache[1] = ($event) => refreshChart())
            }, [
              createBaseVNode("option", {
                value: 10
                /* Seconds_10 */
              }, "10 " + toDisplayString(unref(t)("sec.message")), 9, _hoisted_3$2),
              createBaseVNode("option", {
                value: 60
                /* Min_1 */
              }, "1 " + toDisplayString(unref(t)("min.message")), 9, _hoisted_4$2),
              createBaseVNode("option", {
                value: 300
                /* Min_5 */
              }, "5 " + toDisplayString(unref(t)("2min.message")), 9, _hoisted_5$2),
              createBaseVNode("option", {
                value: 600
                /* Min_10 */
              }, "10 " + toDisplayString(unref(t)("mins.message")), 9, _hoisted_6$2)
            ], 544), [
              [vModelSelect, minValue.value]
            ])
          ]),
          createBaseVNode("p", _hoisted_7$2, toDisplayString(unref(t)("intervalsChart.description")), 1)
        ]),
        createBaseVNode("div", {
          ref_key: "chart",
          ref: chart,
          id: "timeIntervalChartD3"
        }, null, 512)
      ], 64);
    };
  }
});
const TimeIntervalChart_vue_vue_type_style_index_0_scoped_c7e81037_lang = "";
const TimeIntervalChart = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-c7e81037"]]);
const _hoisted_1$3 = { class: "description" };
const __default__$2 = {
  name: "HourlyChart"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  setup(__props) {
    const { t } = useI18n();
    const storage = injectStorage();
    Chart.register(CategoryScale, LinearScale, BarElement, plugin_title, plugin_tooltip, plugin_legend);
    const options = ref();
    const data = ref();
    const isLoaded = ref();
    const objects = [];
    const hours = [];
    isLoaded.value = false;
    function convertTimIntervalToObject(timeInterval, domain) {
      const array2 = timeInterval.split("-");
      const time1 = array2[0].split(":");
      const time2 = array2[1].split(":");
      if (time1[0] == time2[0]) {
        return [
          {
            hour: Number(time1[0]),
            summary: convertStringTimeIntervalToSeconds(array2[1]) - convertStringTimeIntervalToSeconds(array2[0]),
            domain
          }
        ];
      } else {
        const arr = [];
        const firstPart1 = array2[0];
        const firstPart2 = `${time1[0]}:59:59`;
        const hourForFirstPart = firstPart1.split(":");
        arr.push({
          hour: Number(hourForFirstPart[0]),
          summary: convertStringTimeIntervalToSeconds(firstPart2) - convertStringTimeIntervalToSeconds(firstPart1),
          domain
        });
        const secondPart1 = `${time2[0]}:00:00`;
        const secondPart2 = `${time2[0]}:${time2[1]}:${time2[2]}`;
        const hourForsecondPart = secondPart1.split(":");
        arr.push({
          hour: Number(hourForsecondPart[0]),
          summary: convertStringTimeIntervalToSeconds(secondPart2) - convertStringTimeIntervalToSeconds(secondPart1),
          domain
        });
        return arr;
      }
    }
    function fillData(timeIntervalList) {
      const items = timeIntervalList == null ? void 0 : timeIntervalList.filter((x) => x.day == todayLocalDate());
      const domains = items.map((x) => x.domain);
      const result = [];
      const intervalsObj = [];
      domains.forEach((domain) => {
        const intervals = items.filter((x) => x.domain == domain);
        intervals.forEach((array2) => {
          const i = array2.intervals;
          i.forEach((time) => {
            const objs = convertTimIntervalToObject(time, domain);
            if (objs != null && objs.length > 0) {
              objs.forEach((obj) => {
                const existDomain = intervalsObj.find((x) => x.domain == domain && x.hour == obj.hour);
                if (existDomain != void 0) {
                  existDomain.summary += obj.summary;
                } else
                  intervalsObj.push(obj);
              });
            }
          });
        });
      });
      const tempArray = [];
      for (let index = 0; index < 24; index++) {
        const obj = objects.find((x) => x.hour == index);
        const intervalObj = intervalsObj.filter((x) => x.hour == index);
        const summary = intervalObj.length == 0 ? 0 : intervalObj.map((x) => x.summary).reduce((a, b) => a + b);
        if (obj == void 0) {
          const newObj = {
            summary,
            hour: index,
            domains: intervalObj
          };
          objects.push(newObj);
        } else {
          obj.summary += summary;
          intervalObj.forEach((element) => {
            obj.domains.push(element);
          });
        }
        tempArray.push(0);
      }
      objects.forEach((obj) => {
        const emptyArray = Object.assign([], tempArray);
        emptyArray[obj.hour] = Number(obj.summary / 60);
        result.push({
          backgroundColor: ["#5668e2"],
          data: emptyArray
        });
      });
      return result;
    }
    async function buildChart() {
      const timeIntervalList = await storage.getDeserializeList(
        StorageDeserializeParam.TIMEINTERVAL_LIST
      );
      for (let index = 0; index <= 23; index++) {
        hours.push(index);
      }
      const dataForChart = fillData(timeIntervalList);
      data.value = {
        labels: hours,
        datasets: dataForChart
      };
      options.value = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "none"
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.label}:00-${Number(context.label) + 1}:00 ${convertHoursToTime(
                  context.raw
                )}`;
              }
            }
          }
        },
        scales: {
          y: {
            min: 0,
            max: 60,
            ticks: {
              stepSize: 5
            }
          },
          x: {
            stacked: true,
            min: 0,
            max: 23
          }
        }
      };
      isLoaded.value = true;
    }
    onMounted(async () => await buildChart());
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("p", _hoisted_1$3, toDisplayString(unref(t)("timeChartDescription.message")), 1),
        isLoaded.value ? (openBlock(), createBlock(unref(Bar), {
          key: 0,
          data: data.value,
          options: options.value
        }, null, 8, ["data", "options"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _withScopeId$1 = (n) => (pushScopeId("data-v-d69f67b5"), n = n(), popScopeId(), n);
const _hoisted_1$2 = { class: "settings-item" };
const _hoisted_2$1 = { class: "title" };
const _hoisted_3$1 = { class: "chart chartByHours" };
const _hoisted_4$1 = { class: "mt-10 mb-20" };
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "ml-5",
  src: _imports_0,
  height: "22"
}, null, -1));
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "ml-5",
  src: _imports_1,
  height: "22"
}, null, -1));
const _hoisted_7$1 = { class: "tab-items" };
const __default__$1 = {
  name: "Dashboard"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props) {
    const { t } = useI18n();
    const chart = ref();
    let TypeOfChart;
    ((TypeOfChart2) => {
      TypeOfChart2[TypeOfChart2["Horly"] = 0] = "Horly";
      TypeOfChart2[TypeOfChart2["Interval"] = 1] = "Interval";
    })(TypeOfChart || (TypeOfChart = {}));
    onMounted(() => {
      chart.value = 0;
    });
    function openChart(type) {
      chart.value = type;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("label", _hoisted_2$1, toDisplayString(unref(t)("dashboard.message")), 1)
        ]),
        createBaseVNode("div", _hoisted_3$1, [
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("button", {
              class: normalizeClass(["chart-btn", chart.value == 0 ? "active" : ""]),
              onClick: _cache[0] || (_cache[0] = ($event) => openChart(
                0
                /* Horly */
              ))
            }, [
              _hoisted_5$1,
              createTextVNode(" " + toDisplayString(unref(t)("byHours.message")), 1)
            ], 2),
            createBaseVNode("button", {
              class: normalizeClass(["ml-10", "chart-btn", chart.value == 1 ? "active" : ""]),
              onClick: _cache[1] || (_cache[1] = ($event) => openChart(
                1
                /* Interval */
              ))
            }, [
              _hoisted_6$1,
              createTextVNode(" " + toDisplayString(unref(t)("intervals.message")), 1)
            ], 2)
          ]),
          chart.value == 0 ? (openBlock(), createBlock(_sfc_main$3, { key: 0 })) : createCommentVNode("", true),
          chart.value == 1 ? (openBlock(), createBlock(TimeIntervalChart, { key: 1 })) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_7$1, [
          chart.value == 0 ? (openBlock(), createBlock(TabList, {
            key: 0,
            type: unref(TypeOfList).Dashboard,
            showAllStats: false
          }, null, 8, ["type"])) : createCommentVNode("", true)
        ])
      ], 64);
    };
  }
});
const Dashboad_vue_vue_type_style_index_0_scoped_d69f67b5_lang = "";
const Dashboad = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d69f67b5"]]);
const _hoisted_1$1 = { class: "main" };
const __default__ = {
  name: "DashboadContainer"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    type: {},
    domain: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _ctx.type == unref(SettingsTab).Dashboard ? (openBlock(), createBlock(Dashboad, { key: 0 })) : createCommentVNode("", true),
        _ctx.type == unref(SettingsTab).WebsiteStats ? (openBlock(), createBlock(WebsiteStats, {
          key: 1,
          domain: _ctx.domain
        }, null, 8, ["domain"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const DashboadContainer_vue_vue_type_style_index_0_scoped_8ef3e0ae_lang = "";
const DashboadContainer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8ef3e0ae"]]);
const _withScopeId = (n) => (pushScopeId("data-v-b52744fb"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "settings-tabs" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "header-block" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "d-inline-block logo",
    height: "30",
    src: _imports_0$5
  }),
  /* @__PURE__ */ createBaseVNode("p", { class: "d-inline-block title" }, "Web Activity Time Tracker")
], -1));
const _hoisted_3 = { class: "settings-tab mt-20" };
const _hoisted_4 = ["checked"];
const _hoisted_5 = {
  name: "tabName",
  for: "timeIntervalChart-tab"
};
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_1$4,
  height: "30"
}, null, -1));
const _hoisted_7 = { class: "settings-content" };
const _hoisted_8 = { class: "settings-tab" };
const _hoisted_9 = ["checked"];
const _hoisted_10 = {
  name: "tabName",
  for: "white-list-tab"
};
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_2$1,
  height: "30"
}, null, -1));
const _hoisted_12 = { class: "settings-content" };
const _hoisted_13 = { class: "main" };
const _hoisted_14 = { class: "settings-tab" };
const _hoisted_15 = ["checked"];
const _hoisted_16 = {
  name: "tabName",
  for: "limits-tab"
};
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_3$1,
  height: "30"
}, null, -1));
const _hoisted_18 = { class: "settings-content" };
const _hoisted_19 = { class: "main" };
const _hoisted_20 = { class: "settings-tab" };
const _hoisted_21 = ["checked"];
const _hoisted_22 = {
  name: "tabName",
  for: "notification-tab"
};
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_4,
  height: "30"
}, null, -1));
const _hoisted_24 = { class: "settings-content" };
const _hoisted_25 = { class: "main" };
const _hoisted_26 = { class: "settings-tab" };
const _hoisted_27 = ["checked"];
const _hoisted_28 = {
  name: "tabName",
  for: "pomodoro-tab"
};
const _hoisted_29 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_5,
  height: "30"
}, null, -1));
const _hoisted_30 = { class: "settings-content" };
const _hoisted_31 = { class: "main" };
const _hoisted_32 = { class: "settings-tab" };
const _hoisted_33 = ["checked"];
const _hoisted_34 = {
  name: "tabName",
  for: "general-tab"
};
const _hoisted_35 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_6,
  height: "30"
}, null, -1));
const _hoisted_36 = { class: "settings-content" };
const _hoisted_37 = { class: "main" };
const _hoisted_38 = { class: "settings-tab" };
const _hoisted_39 = ["checked"];
const _hoisted_40 = {
  class: "about",
  name: "tabName",
  for: "about-tab"
};
const _hoisted_41 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_7,
  height: "30"
}, null, -1));
const _hoisted_42 = { class: "settings-content" };
const _hoisted_43 = { class: "main" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dashboard",
  setup(__props) {
    const { t } = useI18n();
    const extensionPage = useExtensionPage();
    const settingsStorage = injectStorage();
    const selectedTab = ref();
    const currentUrl = ref(new URL(location.href));
    const selectedWebsite = ref();
    const darkMode = ref();
    watch(currentUrl, () => {
      getCurrentTab();
    });
    onMounted(async () => {
      darkMode.value = await settingsStorage.getValue(StorageParams.DARK_MODE, DARK_MODE_DEFAULT);
      applyDarkMode(darkMode.value);
      getCurrentTab();
    });
    function getCurrentTab() {
      const tabName = currentUrl.value.searchParams.get("tab");
      if (tabName != null && tabName != "") {
        selectedTab.value = getEnumValueTab(tabName);
        const domain = currentUrl.value.searchParams.get("website");
        if (selectedTab.value == SettingsTab.WebsiteStats) {
          if (domain != null && domain != "")
            selectedWebsite.value = domain;
          else
            selectedTab.value = SettingsTab.Dashboard;
        } else if (domain != null && domain != "") {
          window.history.replaceState(
            location.href,
            document.title,
            location.href.replace(`&website=${domain}`, "")
          );
        }
      }
    }
    function selectTab(value) {
      selectedTab.value = value;
      extensionPage.updateTab(value);
      currentUrl.value = new URL(location.href);
    }
    return (_ctx, _cache) => {
      const _component_notifications = resolveComponent("notifications");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_notifications, { position: "bottom right" }),
        createBaseVNode("div", _hoisted_1, [
          _hoisted_2,
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("input", {
              type: "radio",
              id: "timeIntervalChart-tab",
              name: "settings-group",
              checked: selectedTab.value == unref(SettingsTab).Dashboard || selectedTab.value == unref(SettingsTab).WebsiteStats,
              onChange: _cache[0] || (_cache[0] = ($event) => selectTab(unref(SettingsTab).Dashboard))
            }, null, 40, _hoisted_4),
            createBaseVNode("label", _hoisted_5, [
              _hoisted_6,
              createTextVNode(toDisplayString(unref(t)("dashboard.message")), 1)
            ]),
            createBaseVNode("div", _hoisted_7, [
              selectedTab.value == unref(SettingsTab).Dashboard || selectedTab.value == unref(SettingsTab).WebsiteStats ? (openBlock(), createBlock(DashboadContainer, {
                key: 0,
                type: selectedTab.value,
                domain: selectedWebsite.value
              }, null, 8, ["type", "domain"])) : createCommentVNode("", true)
            ])
          ]),
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("input", {
              type: "radio",
              id: "white-list-tab",
              name: "settings-group",
              checked: selectedTab.value == unref(SettingsTab).WhiteList,
              onChange: _cache[1] || (_cache[1] = ($event) => selectTab(unref(SettingsTab).WhiteList))
            }, null, 40, _hoisted_9),
            createBaseVNode("label", _hoisted_10, [
              _hoisted_11,
              createTextVNode(toDisplayString(unref(t)("whiteListSettings.message")), 1)
            ]),
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                selectedTab.value == unref(SettingsTab).WhiteList ? (openBlock(), createBlock(WhiteList, { key: 0 })) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_14, [
            createBaseVNode("input", {
              type: "radio",
              id: "limits-tab",
              name: "settings-group",
              checked: selectedTab.value == unref(SettingsTab).Limits,
              onChange: _cache[2] || (_cache[2] = ($event) => selectTab(unref(SettingsTab).Limits))
            }, null, 40, _hoisted_15),
            createBaseVNode("label", _hoisted_16, [
              _hoisted_17,
              createTextVNode(toDisplayString(unref(t)("limitsSettings.message")), 1)
            ]),
            createBaseVNode("div", _hoisted_18, [
              createBaseVNode("div", _hoisted_19, [
                selectedTab.value == unref(SettingsTab).Limits ? (openBlock(), createBlock(Limits, { key: 0 })) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_20, [
            createBaseVNode("input", {
              type: "radio",
              id: "notification-tab",
              name: "settings-group",
              checked: selectedTab.value == unref(SettingsTab).Notifications,
              onChange: _cache[3] || (_cache[3] = ($event) => selectTab(unref(SettingsTab).Notifications))
            }, null, 40, _hoisted_21),
            createBaseVNode("label", _hoisted_22, [
              _hoisted_23,
              createTextVNode(toDisplayString(unref(t)("notificationsSettings.message")), 1)
            ]),
            createBaseVNode("div", _hoisted_24, [
              createBaseVNode("div", _hoisted_25, [
                selectedTab.value == unref(SettingsTab).Notifications ? (openBlock(), createBlock(DailyNotifications, { key: 0 })) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_26, [
            createBaseVNode("input", {
              type: "radio",
              id: "pomodoro-tab",
              name: "settings-group",
              checked: selectedTab.value == unref(SettingsTab).Pomodoro,
              onChange: _cache[4] || (_cache[4] = ($event) => selectTab(unref(SettingsTab).Pomodoro))
            }, null, 40, _hoisted_27),
            createBaseVNode("label", _hoisted_28, [
              _hoisted_29,
              createTextVNode(toDisplayString(unref(t)("pomodoroMode.message")), 1)
            ]),
            createBaseVNode("div", _hoisted_30, [
              createBaseVNode("div", _hoisted_31, [
                selectedTab.value == unref(SettingsTab).Pomodoro ? (openBlock(), createBlock(Pomodoro, { key: 0 })) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_32, [
            createBaseVNode("input", {
              type: "radio",
              id: "general-tab",
              name: "settings-group",
              checked: selectedTab.value == unref(SettingsTab).GeneralSettings,
              onChange: _cache[5] || (_cache[5] = ($event) => selectTab(unref(SettingsTab).GeneralSettings))
            }, null, 40, _hoisted_33),
            createBaseVNode("label", _hoisted_34, [
              _hoisted_35,
              createTextVNode(toDisplayString(unref(t)("generalSettings.message")), 1)
            ]),
            createBaseVNode("div", _hoisted_36, [
              createBaseVNode("div", _hoisted_37, [
                selectedTab.value == unref(SettingsTab).GeneralSettings ? (openBlock(), createBlock(GeneralSettings, { key: 0 })) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_38, [
            createBaseVNode("input", {
              type: "radio",
              id: "about-tab",
              name: "settings-group",
              checked: selectedTab.value == unref(SettingsTab).About,
              onChange: _cache[6] || (_cache[6] = ($event) => selectTab(unref(SettingsTab).About))
            }, null, 40, _hoisted_39),
            createBaseVNode("label", _hoisted_40, [
              _hoisted_41,
              createTextVNode(toDisplayString(unref(t)("aboutSettings.message")), 1)
            ]),
            createBaseVNode("div", _hoisted_42, [
              createBaseVNode("div", _hoisted_43, [
                selectedTab.value == unref(SettingsTab).About ? (openBlock(), createBlock(About, { key: 0 })) : createCommentVNode("", true)
              ])
            ])
          ])
        ])
      ], 64);
    };
  }
});
const Dashboard_vue_vue_type_style_index_0_scoped_b52744fb_lang = "";
const Settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b52744fb"]]);
const app = createApp(Settings);
app.use(at);
app.use(i18n);
app.component("VueDatePicker", oa);
app.mount("body");
const dashboard = "";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3MtZGFzaGJvYXJkLnN2ZyIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvcy13aGl0ZWxpc3Quc3ZnIiwiLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9zLWxpbWl0cy5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3Mtbm90aWZpY2F0aW9ucy5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3Mtc2V0dGluZ3Muc3ZnIiwiLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9zLWFib3V0LnN2ZyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Aa3l2Zy92dWUzLW5vdGlmaWNhdGlvbi9kaXN0L2luZGV4LmVzLmpzIiwiLi4vLi4vc3JjL2Z1bmN0aW9ucy91c2VSZW1vdmVBbGxEYXRhLnRzIiwiLi4vLi4vc3JjL2Z1bmN0aW9ucy91c2VSZXN0b3JlRGF0YS50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0dlbmVyYWxTZXR0aW5ncy52dWUiLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2RlbGV0ZS5wbmciLCIuLi8uLi9zcmMvdXRpbHMvZmF2aWNvbi50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL1doaXRlTGlzdC52dWUiLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2VkaXQuc3ZnIiwiLi4vLi4vc3JjL2VudGl0eS9yZXN0cmljdGlvbi50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0xpc3RXaXRoVGltZS52dWUiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9MaW1pdHMudnVlIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy52dWUiLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3BvbW9kb3JvLnBuZyIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvcG9tb2Rvcm8tcmVzdC5wbmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3N0b3Auc3ZnIiwiLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9zdGFydC5zdmciLCIuLi8uLi9zcmMvZnVuY3Rpb25zL3BsYXlTb3VuZC50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL1BvbW9kb3JvU291bmRzU2VsZWN0b3IudnVlIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvUG9tb2Rvcm8udnVlIiwiLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9jbGVhci15b3V0dWJlLWxvZ28uc3ZnIiwiLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy90cmFja2VyamFtLWxvZ28ucG5nIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvTXlBcHBzLnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0Fib3V0LnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL1dlYnNpdGVTdGF0c0RldGFpbHMudnVlIiwiLi4vLi4vc3JjL2Z1bmN0aW9ucy91c2VUYWJTdGF0c0J5RGF5cy50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL1dlYnNpdGVTdGF0cy52dWUiLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2J5LWhvdXJzLnN2ZyIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvYnktaW50ZXJ2YWxzLnN2ZyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvYXNjZW5kaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9kZXNjZW5kaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9iaXNlY3Rvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbnVtYmVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9iaXNlY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3RpY2tzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWF4aXMvc3JjL2lkZW50aXR5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWF4aXMvc3JjL2F4aXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZGlzcGF0Y2gvc3JjL2Rpc3BhdGNoLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbmFtZXNwYWNlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL25hbWVzcGFjZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2NyZWF0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zZWxlY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9hcnJheS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdG9yQWxsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NlbGVjdEFsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL21hdGNoZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0Q2hpbGQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0Q2hpbGRyZW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZmlsdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NwYXJzZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lbnRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2NvbnN0YW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2RhdGEuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZXhpdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9qb2luLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL21lcmdlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL29yZGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NvcnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vY2FsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9ub2Rlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9ub2RlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NpemUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZW1wdHkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZWFjaC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9hdHRyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvd2luZG93LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3N0eWxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3Byb3BlcnR5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2NsYXNzZWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vdGV4dC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9odG1sLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3JhaXNlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2xvd2VyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2FwcGVuZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9pbnNlcnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vcmVtb3ZlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2Nsb25lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2RhdHVtLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL29uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2Rpc3BhdGNoLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2l0ZXJhdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWNvbG9yL3NyYy9kZWZpbmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2NvbG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9jb25zdGFudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvY29sb3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3JnYi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvbnVtYmVyQXJyYXkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2FycmF5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9kYXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9udW1iZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL29iamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvc3RyaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy92YWx1ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvcm91bmQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3RyYW5zZm9ybS9kZWNvbXBvc2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3RyYW5zZm9ybS9wYXJzZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvdHJhbnNmb3JtL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRpbWVyL3NyYy90aW1lci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvdGltZW91dC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NjaGVkdWxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL2ludGVycnVwdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy9zZWxlY3Rpb24vaW50ZXJydXB0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vdHdlZW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9pbnRlcnBvbGF0ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2F0dHIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9hdHRyVHdlZW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9kZWxheS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2R1cmF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZWFzZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2Vhc2VWYXJ5aW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZmlsdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vbWVyZ2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9vbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3JlbW92ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NlbGVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NlbGVjdEFsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NlbGVjdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3N0eWxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc3R5bGVUd2Vlbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3RleHQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi90ZXh0VHdlZW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi90cmFuc2l0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZW5kLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZWFzZS9zcmMvY3ViaWMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvc2VsZWN0aW9uL3RyYW5zaXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvc2VsZWN0aW9uL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0RGVjaW1hbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2V4cG9uZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0R3JvdXAuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXROdW1lcmFscy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdFNwZWNpZmllci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdFRyaW0uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXRQcmVmaXhBdXRvLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0Um91bmRlZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdFR5cGVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvaWRlbnRpdHkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9sb2NhbGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9kZWZhdWx0TG9jYWxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvcHJlY2lzaW9uRml4ZWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9wcmVjaXNpb25QcmVmaXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9wcmVjaXNpb25Sb3VuZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvaW5pdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvY29uc3RhbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL251bWJlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvY29udGludW91cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvdGlja0Zvcm1hdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvbGluZWFyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXpvb20vc3JjL3RyYW5zZm9ybS5qcyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL1RpbWVJbnRlcnZhbENoYXJ0LnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0hvdXJseUNoYXJ0LnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FkLnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FkQ29udGFpbmVyLnZ1ZSIsIi4uLy4uL3NyYy9wYWdlcy9EYXNoYm9hcmQudnVlIiwiLi4vLi4vc3JjL2Rhc2hib2FyZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fMWQ3N2Y4ZWJfX1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfX2I1MzY5Y2ZiX19cIiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX183ZjlhYzgzMV9fXCIiLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fZTBkNmUyNmJfX1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfXzZjMzZhOTRhX19cIiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX19lYTAzODYzY19fXCIiLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgeSwgb3BlbkJsb2NrIGFzIGEsIGNyZWF0ZUJsb2NrIGFzIGcsIFRyYW5zaXRpb25Hcm91cCBhcyB4LCB3aXRoQ3R4IGFzICQsIHJlbmRlclNsb3QgYXMgVCwgY3JlYXRlRWxlbWVudEJsb2NrIGFzIHAsIG5vcm1hbGl6ZVN0eWxlIGFzIGIsIHJlc29sdmVEeW5hbWljQ29tcG9uZW50IGFzIGssIEZyYWdtZW50IGFzIF8sIHJlbmRlckxpc3QgYXMgQiwgbm9ybWFsaXplQ2xhc3MgYXMgRCwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIE4sIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBIIH0gZnJvbSBcInZ1ZVwiO1xuZnVuY3Rpb24gTSh0KSB7XG4gIHJldHVybiB7IGFsbDogdCA9IHQgfHwgLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgb246IGZ1bmN0aW9uKGUsIGkpIHtcbiAgICB2YXIgcyA9IHQuZ2V0KGUpO1xuICAgIHMgPyBzLnB1c2goaSkgOiB0LnNldChlLCBbaV0pO1xuICB9LCBvZmY6IGZ1bmN0aW9uKGUsIGkpIHtcbiAgICB2YXIgcyA9IHQuZ2V0KGUpO1xuICAgIHMgJiYgKGkgPyBzLnNwbGljZShzLmluZGV4T2YoaSkgPj4+IDAsIDEpIDogdC5zZXQoZSwgW10pKTtcbiAgfSwgZW1pdDogZnVuY3Rpb24oZSwgaSkge1xuICAgIHZhciBzID0gdC5nZXQoZSk7XG4gICAgcyAmJiBzLnNsaWNlKCkubWFwKGZ1bmN0aW9uKG4pIHtcbiAgICAgIG4oaSk7XG4gICAgfSksIChzID0gdC5nZXQoXCIqXCIpKSAmJiBzLnNsaWNlKCkubWFwKGZ1bmN0aW9uKG4pIHtcbiAgICAgIG4oZSwgaSk7XG4gICAgfSk7XG4gIH0gfTtcbn1cbmNvbnN0IGQgPSBNKCksIEMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCB3ID0ge1xuICB4OiBbXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIl0sXG4gIHk6IFtcInRvcFwiLCBcImJvdHRvbVwiXVxufSwgUiA9ICgodCkgPT4gKCkgPT4gdCsrKSgwKSwgViA9ICh0KSA9PiB0eXBlb2YgdCAhPSBcInN0cmluZ1wiID8gW10gOiB0LnNwbGl0KC9cXHMrL2dpKS5maWx0ZXIoKGUpID0+IGUpLCBXID0gKHQpID0+IHtcbiAgdHlwZW9mIHQgPT0gXCJzdHJpbmdcIiAmJiAodCA9IFYodCkpO1xuICBsZXQgZSA9IG51bGwsIGkgPSBudWxsO1xuICByZXR1cm4gdC5mb3JFYWNoKChzKSA9PiB7XG4gICAgdy55LmluZGV4T2YocykgIT09IC0xICYmIChpID0gcyksIHcueC5pbmRleE9mKHMpICE9PSAtMSAmJiAoZSA9IHMpO1xuICB9KSwgeyB4OiBlLCB5OiBpIH07XG59O1xuY2xhc3MgWSB7XG4gIGNvbnN0cnVjdG9yKGUsIGksIHMpIHtcbiAgICB0aGlzLnJlbWFpbmluZyA9IGksIHRoaXMuY2FsbGJhY2sgPSBlLCB0aGlzLm5vdGlmeUl0ZW0gPSBzLCB0aGlzLnJlc3VtZSgpO1xuICB9XG4gIHBhdXNlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLm5vdGlmeUl0ZW0udGltZXIpLCB0aGlzLnJlbWFpbmluZyAtPSBEYXRlLm5vdygpIC0gdGhpcy5zdGFydDtcbiAgfVxuICByZXN1bWUoKSB7XG4gICAgdGhpcy5zdGFydCA9IERhdGUubm93KCksIGNsZWFyVGltZW91dCh0aGlzLm5vdGlmeUl0ZW0udGltZXIpLCB0aGlzLm5vdGlmeUl0ZW0udGltZXIgPSBzZXRUaW1lb3V0KHRoaXMuY2FsbGJhY2ssIHRoaXMucmVtYWluaW5nKTtcbiAgfVxufVxuY29uc3QgbSA9IHtcbiAgcG9zaXRpb246IFtcInRvcFwiLCBcInJpZ2h0XCJdLFxuICBjc3NBbmltYXRpb246IFwidm4tZmFkZVwiLFxuICB2ZWxvY2l0eUFuaW1hdGlvbjoge1xuICAgIGVudGVyOiAodCkgPT4gKHtcbiAgICAgIGhlaWdodDogW3QuY2xpZW50SGVpZ2h0LCAwXSxcbiAgICAgIG9wYWNpdHk6IFsxLCAwXVxuICAgIH0pLFxuICAgIGxlYXZlOiB7XG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBvcGFjaXR5OiBbMCwgMV1cbiAgICB9XG4gIH1cbn0sIGogPSB5KHtcbiAgbmFtZTogXCJ2ZWxvY2l0eS1ncm91cFwiLFxuICBlbWl0czogW1wiYWZ0ZXItbGVhdmVcIiwgXCJsZWF2ZVwiLCBcImVudGVyXCJdLFxuICBtZXRob2RzOiB7XG4gICAgZW50ZXIodCwgZSkge1xuICAgICAgdGhpcy4kZW1pdChcImVudGVyXCIsIHQsIGUpO1xuICAgIH0sXG4gICAgbGVhdmUodCwgZSkge1xuICAgICAgdGhpcy4kZW1pdChcImxlYXZlXCIsIHQsIGUpO1xuICAgIH0sXG4gICAgYWZ0ZXJMZWF2ZSgpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJhZnRlci1sZWF2ZVwiKTtcbiAgICB9XG4gIH1cbn0pLCB2ID0gKHQsIGUpID0+IHtcbiAgY29uc3QgaSA9IHQuX192Y2NPcHRzIHx8IHQ7XG4gIGZvciAoY29uc3QgW3MsIG5dIG9mIGUpXG4gICAgaVtzXSA9IG47XG4gIHJldHVybiBpO1xufTtcbmZ1bmN0aW9uIEcodCwgZSwgaSwgcywgbiwgYykge1xuICByZXR1cm4gYSgpLCBnKHgsIHtcbiAgICB0YWc6IFwic3BhblwiLFxuICAgIGNzczogITEsXG4gICAgb25FbnRlcjogdC5lbnRlcixcbiAgICBvbkxlYXZlOiB0LmxlYXZlLFxuICAgIG9uQWZ0ZXJMZWF2ZTogdC5hZnRlckxlYXZlXG4gIH0sIHtcbiAgICBkZWZhdWx0OiAkKCgpID0+IFtcbiAgICAgIFQodC4kc2xvdHMsIFwiZGVmYXVsdFwiKVxuICAgIF0pLFxuICAgIF86IDNcbiAgfSwgOCwgW1wib25FbnRlclwiLCBcIm9uTGVhdmVcIiwgXCJvbkFmdGVyTGVhdmVcIl0pO1xufVxuY29uc3QgeiA9IC8qIEBfX1BVUkVfXyAqLyB2KGosIFtbXCJyZW5kZXJcIiwgR11dKSwgRiA9IHkoe1xuICBuYW1lOiBcImNzcy1ncm91cFwiLFxuICBpbmhlcml0QXR0cnM6ICExLFxuICBwcm9wczoge1xuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogITAgfVxuICB9XG59KTtcbmZ1bmN0aW9uIFAodCwgZSwgaSwgcywgbiwgYykge1xuICByZXR1cm4gYSgpLCBnKHgsIHtcbiAgICB0YWc6IFwic3BhblwiLFxuICAgIG5hbWU6IHQubmFtZVxuICB9LCB7XG4gICAgZGVmYXVsdDogJCgoKSA9PiBbXG4gICAgICBUKHQuJHNsb3RzLCBcImRlZmF1bHRcIilcbiAgICBdKSxcbiAgICBfOiAzXG4gIH0sIDgsIFtcIm5hbWVcIl0pO1xufVxuY29uc3QgcSA9IC8qIEBfX1BVUkVfXyAqLyB2KEYsIFtbXCJyZW5kZXJcIiwgUF1dKSwgaCA9IFwiWy0rXT9bMC05XSouP1swLTldK1wiLCBMID0gW1xuICB7XG4gICAgbmFtZTogXCJweFwiLFxuICAgIHJlZ2V4cDogbmV3IFJlZ0V4cChgXiR7aH1weCRgKVxuICB9LFxuICB7XG4gICAgbmFtZTogXCIlXCIsXG4gICAgcmVnZXhwOiBuZXcgUmVnRXhwKGBeJHtofSUkYClcbiAgfSxcbiAgLyoqXG4gICAqIEZhbGxiYWNrIG9wdGlvblxuICAgKiBJZiBubyBzdWZmaXggc3BlY2lmaWVkLCBhc3NpZ25pbmcgXCJweFwiXG4gICAqL1xuICB7XG4gICAgbmFtZTogXCJweFwiLFxuICAgIHJlZ2V4cDogbmV3IFJlZ0V4cChgXiR7aH0kYClcbiAgfVxuXSwgSiA9ICh0KSA9PiB7XG4gIGlmICh0ID09PSBcImF1dG9cIilcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdCxcbiAgICAgIHZhbHVlOiAwXG4gICAgfTtcbiAgZm9yIChsZXQgZSA9IDA7IGUgPCBMLmxlbmd0aDsgZSsrKSB7XG4gICAgY29uc3QgaSA9IExbZV07XG4gICAgaWYgKGkucmVnZXhwLnRlc3QodCkpXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBpLm5hbWUsXG4gICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHQpXG4gICAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJcIixcbiAgICB2YWx1ZTogdFxuICB9O1xufSwgSyA9ICh0KSA9PiB7XG4gIHN3aXRjaCAodHlwZW9mIHQpIHtcbiAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICByZXR1cm4geyB0eXBlOiBcInB4XCIsIHZhbHVlOiB0IH07XG4gICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgcmV0dXJuIEoodCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IHR5cGU6IFwiXCIsIHZhbHVlOiB0IH07XG4gIH1cbn0sIGYgPSB7XG4gIElETEU6IDAsXG4gIERFU1RST1lFRDogMlxufSwgUSA9IHkoe1xuICBuYW1lOiBcIm5vdGlmaWNhdGlvbnNcIixcbiAgY29tcG9uZW50czoge1xuICAgIFZlbG9jaXR5R3JvdXA6IHosXG4gICAgQ3NzR3JvdXA6IHFcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBncm91cDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH0sXG4gICAgd2lkdGg6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAzMDBcbiAgICB9LFxuICAgIHJldmVyc2U6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiAhMVxuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5XSxcbiAgICAgIGRlZmF1bHQ6IG0ucG9zaXRpb25cbiAgICB9LFxuICAgIGNsYXNzZXM6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwidnVlLW5vdGlmaWNhdGlvblwiXG4gICAgfSxcbiAgICBhbmltYXRpb25UeXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcImNzc1wiXG4gICAgfSxcbiAgICBhbmltYXRpb246IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6IG0udmVsb2NpdHlBbmltYXRpb25cbiAgICB9LFxuICAgIGFuaW1hdGlvbk5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG0uY3NzQW5pbWF0aW9uXG4gICAgfSxcbiAgICBzcGVlZDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMzAwXG4gICAgfSxcbiAgICAvKiBUb2RvICovXG4gICAgY29vbGRvd246IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIGR1cmF0aW9uOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAzZTNcbiAgICB9LFxuICAgIGRlbGF5OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBtYXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDEgLyAwXG4gICAgfSxcbiAgICBpZ25vcmVEdXBsaWNhdGVzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogITFcbiAgICB9LFxuICAgIGNsb3NlT25DbGljazoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6ICEwXG4gICAgfSxcbiAgICBwYXVzZU9uSG92ZXI6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiAhMVxuICAgIH1cbiAgfSxcbiAgZW1pdHM6IFtcImNsaWNrXCIsIFwiZGVzdHJveVwiLCBcInN0YXJ0XCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaXN0OiBbXSxcbiAgICAgIHZlbG9jaXR5OiBDLmdldChcInZlbG9jaXR5XCIpLFxuICAgICAgdGltZXJDb250cm9sOiBudWxsXG4gICAgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBhY3R1YWxXaWR0aCgpIHtcbiAgICAgIHJldHVybiBLKHRoaXMud2lkdGgpO1xuICAgIH0sXG4gICAgaXNWQSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmFuaW1hdGlvblR5cGUgPT09IFwidmVsb2NpdHlcIjtcbiAgICB9LFxuICAgIGNvbXBvbmVudE5hbWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZBID8gXCJ2ZWxvY2l0eS1ncm91cFwiIDogXCJjc3MtZ3JvdXBcIjtcbiAgICB9LFxuICAgIHN0eWxlcygpIHtcbiAgICAgIGNvbnN0IHsgeDogdCwgeTogZSB9ID0gVyh0aGlzLnBvc2l0aW9uKSwgaSA9IHRoaXMuYWN0dWFsV2lkdGgudmFsdWUsIHMgPSB0aGlzLmFjdHVhbFdpZHRoLnR5cGUsIG4gPSB7XG4gICAgICAgIHdpZHRoOiBpICsgc1xuICAgICAgfTtcbiAgICAgIHJldHVybiBlICYmIChuW2VdID0gXCIwcHhcIiksIHQgJiYgKHQgPT09IFwiY2VudGVyXCIgPyBuLmxlZnQgPSBgY2FsYyg1MCUgLSAkeytpIC8gMn0ke3N9KWAgOiBuW3RdID0gXCIwcHhcIiksIG47XG4gICAgfSxcbiAgICBhY3RpdmUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5saXN0LmZpbHRlcigodCkgPT4gdC5zdGF0ZSAhPT0gZi5ERVNUUk9ZRUQpO1xuICAgIH0sXG4gICAgYm90VG9Ub3AoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHlsZXMuaGFzT3duUHJvcGVydHkoXCJib3R0b21cIik7XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGQub24oXCJhZGRcIiwgdGhpcy5hZGRJdGVtKSwgZC5vbihcImNsb3NlXCIsIHRoaXMuY2xvc2VJdGVtKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGRlc3Ryb3lJZk5lY2Vzc2FyeSh0KSB7XG4gICAgICB0aGlzLiRlbWl0KFwiY2xpY2tcIiwgdCksIHRoaXMuY2xvc2VPbkNsaWNrICYmIHRoaXMuZGVzdHJveSh0KTtcbiAgICB9LFxuICAgIHBhdXNlVGltZW91dCgpIHtcbiAgICAgIHZhciB0O1xuICAgICAgdGhpcy5wYXVzZU9uSG92ZXIgJiYgKCh0ID0gdGhpcy50aW1lckNvbnRyb2wpID09IG51bGwgfHwgdC5wYXVzZSgpKTtcbiAgICB9LFxuICAgIHJlc3VtZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdDtcbiAgICAgIHRoaXMucGF1c2VPbkhvdmVyICYmICgodCA9IHRoaXMudGltZXJDb250cm9sKSA9PSBudWxsIHx8IHQucmVzdW1lKCkpO1xuICAgIH0sXG4gICAgYWRkSXRlbSh0ID0ge30pIHtcbiAgICAgIGlmICh0Lmdyb3VwIHx8ICh0Lmdyb3VwID0gXCJcIiksIHQuZGF0YSB8fCAodC5kYXRhID0ge30pLCB0aGlzLmdyb3VwICE9PSB0Lmdyb3VwKVxuICAgICAgICByZXR1cm47XG4gICAgICBpZiAodC5jbGVhbiB8fCB0LmNsZWFyKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveUFsbCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBlID0gdHlwZW9mIHQuZHVyYXRpb24gPT0gXCJudW1iZXJcIiA/IHQuZHVyYXRpb24gOiB0aGlzLmR1cmF0aW9uLCBpID0gdHlwZW9mIHQuc3BlZWQgPT0gXCJudW1iZXJcIiA/IHQuc3BlZWQgOiB0aGlzLnNwZWVkLCBzID0gdHlwZW9mIHQuaWdub3JlRHVwbGljYXRlcyA9PSBcImJvb2xlYW5cIiA/IHQuaWdub3JlRHVwbGljYXRlcyA6IHRoaXMuaWdub3JlRHVwbGljYXRlcywgeyB0aXRsZTogbiwgdGV4dDogYywgdHlwZTogbywgZGF0YTogbCwgaWQ6IEkgfSA9IHQsIHIgPSB7XG4gICAgICAgIGlkOiBJIHx8IFIoKSxcbiAgICAgICAgdGl0bGU6IG4sXG4gICAgICAgIHRleHQ6IGMsXG4gICAgICAgIHR5cGU6IG8sXG4gICAgICAgIHN0YXRlOiBmLklETEUsXG4gICAgICAgIHNwZWVkOiBpLFxuICAgICAgICBsZW5ndGg6IGUgKyAyICogaSxcbiAgICAgICAgZGF0YTogbFxuICAgICAgfTtcbiAgICAgIGUgPj0gMCAmJiAodGhpcy50aW1lckNvbnRyb2wgPSBuZXcgWSgoKSA9PiB0aGlzLmRlc3Ryb3kociksIHIubGVuZ3RoLCByKSk7XG4gICAgICBjb25zdCBPID0gdGhpcy5yZXZlcnNlID8gIXRoaXMuYm90VG9Ub3AgOiB0aGlzLmJvdFRvVG9wO1xuICAgICAgbGV0IHUgPSAtMTtcbiAgICAgIGNvbnN0IFMgPSB0aGlzLmFjdGl2ZS5zb21lKChFKSA9PiBFLnRpdGxlID09PSB0LnRpdGxlICYmIEUudGV4dCA9PT0gdC50ZXh0KTtcbiAgICAgICghcyB8fCAhUykgJiYgKE8gPyAodGhpcy5saXN0LnB1c2gociksIHRoaXMuJGVtaXQoXCJzdGFydFwiLCByKSwgdGhpcy5hY3RpdmUubGVuZ3RoID4gdGhpcy5tYXggJiYgKHUgPSAwKSkgOiAodGhpcy5saXN0LnVuc2hpZnQociksIHRoaXMuJGVtaXQoXCJzdGFydFwiLCByKSwgdGhpcy5hY3RpdmUubGVuZ3RoID4gdGhpcy5tYXggJiYgKHUgPSB0aGlzLmFjdGl2ZS5sZW5ndGggLSAxKSksIHUgIT09IC0xICYmIHRoaXMuZGVzdHJveSh0aGlzLmFjdGl2ZVt1XSkpO1xuICAgIH0sXG4gICAgY2xvc2VJdGVtKHQpIHtcbiAgICAgIHRoaXMuZGVzdHJveUJ5SWQodCk7XG4gICAgfSxcbiAgICBub3RpZnlDbGFzcyh0KSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBcInZ1ZS1ub3RpZmljYXRpb24tdGVtcGxhdGVcIixcbiAgICAgICAgdGhpcy5jbGFzc2VzLFxuICAgICAgICB0LnR5cGUgfHwgXCJcIlxuICAgICAgXTtcbiAgICB9LFxuICAgIG5vdGlmeVdyYXBwZXJTdHlsZSh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZBID8gdm9pZCAwIDogeyB0cmFuc2l0aW9uOiBgYWxsICR7dC5zcGVlZH1tc2AgfTtcbiAgICB9LFxuICAgIGRlc3Ryb3kodCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHQudGltZXIpLCB0LnN0YXRlID0gZi5ERVNUUk9ZRUQsIHRoaXMuY2xlYW4oKSwgdGhpcy4kZW1pdChcImRlc3Ryb3lcIiwgdCk7XG4gICAgfSxcbiAgICBkZXN0cm95QnlJZCh0KSB7XG4gICAgICBjb25zdCBlID0gdGhpcy5saXN0LmZpbmQoKGkpID0+IGkuaWQgPT09IHQpO1xuICAgICAgZSAmJiB0aGlzLmRlc3Ryb3koZSk7XG4gICAgfSxcbiAgICBkZXN0cm95QWxsKCkge1xuICAgICAgdGhpcy5hY3RpdmUuZm9yRWFjaCh0aGlzLmRlc3Ryb3kpO1xuICAgIH0sXG4gICAgZ2V0QW5pbWF0aW9uKHQsIGUpIHtcbiAgICAgIHZhciBzO1xuICAgICAgY29uc3QgaSA9IChzID0gdGhpcy5hbmltYXRpb24pID09IG51bGwgPyB2b2lkIDAgOiBzW3RdO1xuICAgICAgcmV0dXJuIHR5cGVvZiBpID09IFwiZnVuY3Rpb25cIiA/IGkuY2FsbCh0aGlzLCBlKSA6IGk7XG4gICAgfSxcbiAgICBlbnRlcih0LCBlKSB7XG4gICAgICBpZiAoIXRoaXMuaXNWQSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY29uc3QgaSA9IHRoaXMuZ2V0QW5pbWF0aW9uKFwiZW50ZXJcIiwgdCk7XG4gICAgICB0aGlzLnZlbG9jaXR5KHQsIGksIHtcbiAgICAgICAgZHVyYXRpb246IHRoaXMuc3BlZWQsXG4gICAgICAgIGNvbXBsZXRlOiBlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGxlYXZlKHQsIGUpIHtcbiAgICAgIGlmICghdGhpcy5pc1ZBKVxuICAgICAgICByZXR1cm47XG4gICAgICBjb25zdCBpID0gdGhpcy5nZXRBbmltYXRpb24oXCJsZWF2ZVwiLCB0KTtcbiAgICAgIHRoaXMudmVsb2NpdHkodCwgaSwge1xuICAgICAgICBkdXJhdGlvbjogdGhpcy5zcGVlZCxcbiAgICAgICAgY29tcGxldGU6IGVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY2xlYW4oKSB7XG4gICAgICB0aGlzLmxpc3QgPSB0aGlzLmxpc3QuZmlsdGVyKCh0KSA9PiB0LnN0YXRlICE9PSBmLkRFU1RST1lFRCk7XG4gICAgfVxuICB9XG59KTtcbmNvbnN0IFUgPSBbXCJkYXRhLWlkXCJdLCBYID0gW1wib25DbGlja1wiXSwgWiA9IFtcImlubmVySFRNTFwiXSwgdHQgPSBbXCJpbm5lckhUTUxcIl07XG5mdW5jdGlvbiBldCh0LCBlLCBpLCBzLCBuLCBjKSB7XG4gIHJldHVybiBhKCksIHAoXCJkaXZcIiwge1xuICAgIGNsYXNzOiBcInZ1ZS1ub3RpZmljYXRpb24tZ3JvdXBcIixcbiAgICBzdHlsZTogYih0LnN0eWxlcylcbiAgfSwgW1xuICAgIChhKCksIGcoayh0LmNvbXBvbmVudE5hbWUpLCB7XG4gICAgICBuYW1lOiB0LmFuaW1hdGlvbk5hbWUsXG4gICAgICBvbkVudGVyOiB0LmVudGVyLFxuICAgICAgb25MZWF2ZTogdC5sZWF2ZSxcbiAgICAgIG9uQWZ0ZXJMZWF2ZTogdC5jbGVhblxuICAgIH0sIHtcbiAgICAgIGRlZmF1bHQ6ICQoKCkgPT4gW1xuICAgICAgICAoYSghMCksIHAoXywgbnVsbCwgQih0LmFjdGl2ZSwgKG8pID0+IChhKCksIHAoXCJkaXZcIiwge1xuICAgICAgICAgIGtleTogby5pZCxcbiAgICAgICAgICBjbGFzczogXCJ2dWUtbm90aWZpY2F0aW9uLXdyYXBwZXJcIixcbiAgICAgICAgICBzdHlsZTogYih0Lm5vdGlmeVdyYXBwZXJTdHlsZShvKSksXG4gICAgICAgICAgXCJkYXRhLWlkXCI6IG8uaWQsXG4gICAgICAgICAgb25Nb3VzZWVudGVyOiBlWzBdIHx8IChlWzBdID0gKC4uLmwpID0+IHQucGF1c2VUaW1lb3V0ICYmIHQucGF1c2VUaW1lb3V0KC4uLmwpKSxcbiAgICAgICAgICBvbk1vdXNlbGVhdmU6IGVbMV0gfHwgKGVbMV0gPSAoLi4ubCkgPT4gdC5yZXN1bWVUaW1lb3V0ICYmIHQucmVzdW1lVGltZW91dCguLi5sKSlcbiAgICAgICAgfSwgW1xuICAgICAgICAgIFQodC4kc2xvdHMsIFwiYm9keVwiLCB7XG4gICAgICAgICAgICBjbGFzczogRChbdC5jbGFzc2VzLCBvLnR5cGVdKSxcbiAgICAgICAgICAgIGl0ZW06IG8sXG4gICAgICAgICAgICBjbG9zZTogKCkgPT4gdC5kZXN0cm95KG8pXG4gICAgICAgICAgfSwgKCkgPT4gW1xuICAgICAgICAgICAgTihcImRpdlwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBEKHQubm90aWZ5Q2xhc3MobykpLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAobCkgPT4gdC5kZXN0cm95SWZOZWNlc3NhcnkobylcbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgby50aXRsZSA/IChhKCksIHAoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgICAgICBjbGFzczogXCJub3RpZmljYXRpb24tdGl0bGVcIixcbiAgICAgICAgICAgICAgICBpbm5lckhUTUw6IG8udGl0bGVcbiAgICAgICAgICAgICAgfSwgbnVsbCwgOCwgWikpIDogSChcIlwiLCAhMCksXG4gICAgICAgICAgICAgIE4oXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcIm5vdGlmaWNhdGlvbi1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBvLnRleHRcbiAgICAgICAgICAgICAgfSwgbnVsbCwgOCwgdHQpXG4gICAgICAgICAgICBdLCAxMCwgWClcbiAgICAgICAgICBdKVxuICAgICAgICBdLCA0NCwgVSkpKSwgMTI4KSlcbiAgICAgIF0pLFxuICAgICAgXzogM1xuICAgIH0sIDQwLCBbXCJuYW1lXCIsIFwib25FbnRlclwiLCBcIm9uTGVhdmVcIiwgXCJvbkFmdGVyTGVhdmVcIl0pKVxuICBdLCA0KTtcbn1cbmNvbnN0IGl0ID0gLyogQF9fUFVSRV9fICovIHYoUSwgW1tcInJlbmRlclwiLCBldF1dKSwgQSA9ICh0KSA9PiB7XG4gIHR5cGVvZiB0ID09IFwic3RyaW5nXCIgJiYgKHQgPSB7IHRpdGxlOiBcIlwiLCB0ZXh0OiB0IH0pLCB0eXBlb2YgdCA9PSBcIm9iamVjdFwiICYmIGQuZW1pdChcImFkZFwiLCB0KTtcbn07XG5BLmNsb3NlID0gKHQpID0+IHtcbiAgZC5lbWl0KFwiY2xvc2VcIiwgdCk7XG59O1xuY29uc3QgcnQgPSAoKSA9PiAoeyBub3RpZnk6IEEgfSk7XG5mdW5jdGlvbiBzdCh0LCBlID0ge30pIHtcbiAgT2JqZWN0LmVudHJpZXMoZSkuZm9yRWFjaCgocykgPT4gQy5zZXQoLi4ucykpO1xuICBjb25zdCBpID0gZS5uYW1lIHx8IFwibm90aWZ5XCI7XG4gIHQuY29uZmlnLmdsb2JhbFByb3BlcnRpZXNbXCIkXCIgKyBpXSA9IEEsIHQuY29tcG9uZW50KGUuY29tcG9uZW50TmFtZSB8fCBcIk5vdGlmaWNhdGlvbnNcIiwgaXQpO1xufVxuY29uc3QgYXQgPSB7XG4gIGluc3RhbGw6IHN0XG59O1xuZXhwb3J0IHtcbiAgYXQgYXMgZGVmYXVsdCxcbiAgQSBhcyBub3RpZnksXG4gIHJ0IGFzIHVzZU5vdGlmaWNhdGlvblxufTtcbihmdW5jdGlvbigpe3ZhciBvO1widXNlIHN0cmljdFwiO3RyeXtpZih0eXBlb2YgZG9jdW1lbnQhPVwidW5kZWZpbmVkXCIpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtlLm5vbmNlPShvPWRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIm1ldGFbcHJvcGVydHk9Y3NwLW5vbmNlXVwiKSk9PW51bGw/dm9pZCAwOm8uY29udGVudCxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiLnZ1ZS1ub3RpZmljYXRpb24tZ3JvdXB7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjUwMDB9LnZ1ZS1ub3RpZmljYXRpb24td3JhcHBlcntkaXNwbGF5OmJsb2NrO292ZXJmbG93OmhpZGRlbjt3aWR0aDoxMDAlO21hcmdpbjowO3BhZGRpbmc6MH0ubm90aWZpY2F0aW9uLXRpdGxle2ZvbnQtd2VpZ2h0OjYwMH0udnVlLW5vdGlmaWNhdGlvbi10ZW1wbGF0ZXtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDtiYWNrZ3JvdW5kOndoaXRlO3RleHQtYWxpZ246bGVmdH0udnVlLW5vdGlmaWNhdGlvbntkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDt0ZXh0LWFsaWduOmxlZnQ7Zm9udC1zaXplOjEycHg7cGFkZGluZzoxMHB4O21hcmdpbjowIDVweCA1cHg7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiM0NEE0RkM7Ym9yZGVyLWxlZnQ6NXB4IHNvbGlkICMxODdGRTd9LnZ1ZS1ub3RpZmljYXRpb24ud2FybntiYWNrZ3JvdW5kOiNmZmI2NDg7Ym9yZGVyLWxlZnQtY29sb3I6I2Y0OGEwNn0udnVlLW5vdGlmaWNhdGlvbi5lcnJvcntiYWNrZ3JvdW5kOiNFNTRENDI7Ym9yZGVyLWxlZnQtY29sb3I6I2I4MmUyNH0udnVlLW5vdGlmaWNhdGlvbi5zdWNjZXNze2JhY2tncm91bmQ6IzY4Q0Q4Njtib3JkZXItbGVmdC1jb2xvcjojNDJhODVmfS52bi1mYWRlLWVudGVyLWFjdGl2ZSwudm4tZmFkZS1sZWF2ZS1hY3RpdmUsLnZuLWZhZGUtbW92ZXt0cmFuc2l0aW9uOmFsbCAuNXN9LnZuLWZhZGUtZW50ZXItZnJvbSwudm4tZmFkZS1sZWF2ZS10b3tvcGFjaXR5OjB9XCIpKSxkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGUpfX1jYXRjaChpKXtjb25zb2xlLmVycm9yKFwidml0ZS1wbHVnaW4tY3NzLWluamVjdGVkLWJ5LWpzXCIsaSl9fSkoKTtcbiIsImltcG9ydCBCcm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XHJcbmltcG9ydCB7IGluamVjdFN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL2luamVjdC1zdG9yYWdlJztcclxuaW1wb3J0IHsgTWVzc2FnZXMgfSBmcm9tICcuLi91dGlscy9tZXNzYWdlcyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXNlUmVtb3ZlQWxsRGF0YSgpIHtcclxuICBjb25zdCBzdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xyXG4gIGF3YWl0IHN0b3JhZ2Uuc2F2ZUludGVydmFsTGlzdChbXSk7XHJcbiAgYXdhaXQgQnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKE1lc3NhZ2VzLkNsZWFyQWxsRGF0YSk7XHJcbn1cclxuIiwiaW1wb3J0IEJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcclxuaW1wb3J0IHsgTWVzc2FnZXMgfSBmcm9tICcuLi91dGlscy9tZXNzYWdlcyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXNlUmVzdG9yZURhdGEoanNvbjogc3RyaW5nKSB7XHJcbiAgaWYgKGpzb24gIT0gbnVsbCAmJiBqc29uICE9IHVuZGVmaW5lZCAmJiBqc29uICE9ICcnKSB7XHJcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uKTtcclxuICAgIGF3YWl0IEJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XHJcbiAgICAgIG1lc3NhZ2U6IE1lc3NhZ2VzLlJlc3RvcmUsXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1pdGVtXCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5nLWhlYWRlclwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgIGNsYXNzPVwiZmlsbGVkLWluXCJcclxuICAgICAgICBpZD1cInZpZXdUaW1lSW5CYWRnZVwiXHJcbiAgICAgICAgdi1tb2RlbD1cInZpZXdUaW1lSW5CYWRnZVwiXHJcbiAgICAgICAgQGNoYW5nZT1cIm9uQ2hhbmdlKFN0b3JhZ2VQYXJhbXMuVklFV19USU1FX0lOX0JBREdFLCAkZXZlbnQudGFyZ2V0KVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxzcGFuPnt7IHQoJ3ZpZXdUaW1lSW5CYWRnZS5tZXNzYWdlJykgfX08L3NwYW4+XHJcbiAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICB7eyB0KCd2aWV3VGltZUluQmFkZ2UuZGVzY3JpcHRpb24nKSB9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2xhYmVsPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1pdGVtXCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5nLWhlYWRlclwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgIGNsYXNzPVwiZmlsbGVkLWluXCJcclxuICAgICAgICBpZD1cImJsb2NrRGVmZXJyYWxcIlxyXG4gICAgICAgIHYtbW9kZWw9XCJhbGxvd0RlZmVycmluZ0Jsb2NrXCJcclxuICAgICAgICBAY2hhbmdlPVwib25DaGFuZ2UoU3RvcmFnZVBhcmFtcy5CTE9DS19ERUZFUlJBTCwgJGV2ZW50LnRhcmdldClcIlxyXG4gICAgICAvPlxyXG4gICAgICA8c3Bhbj57eyB0KCdhbGxvd0RlZmVycmluZ0Jsb2NrLm1lc3NhZ2UnKSB9fTwvc3Bhbj5cclxuICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIHt7IHQoJ2FsbG93RGVmZXJyaW5nQmxvY2suZGVzY3JpcHRpb24nKSB9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2xhYmVsPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1pdGVtXCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5nLWhlYWRlclwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgIGNsYXNzPVwiZmlsbGVkLWluXCJcclxuICAgICAgICBpZD1cImRhcmtNb2RlXCJcclxuICAgICAgICB2LW1vZGVsPVwiZGFya01vZGVcIlxyXG4gICAgICAgIEBjaGFuZ2U9XCJvbkNoYW5nZShTdG9yYWdlUGFyYW1zLkRBUktfTU9ERSwgJGV2ZW50LnRhcmdldClcIlxyXG4gICAgICAvPlxyXG4gICAgICA8c3Bhbj57eyB0KCdkYXJrVGhlbWUubWVzc2FnZScpIH19PC9zcGFuPlxyXG4gICAgPC9sYWJlbD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZy1oZWFkZXIgZC1pbmxpbmUtYmxvY2tcIj57eyB0KCdpbnRlcnZhbEluYWN0aXZpdHkubWVzc2FnZScpIH19IDwvbGFiZWw+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgbWwtMTBcIj5cclxuICAgICAgPHNlbGVjdFxyXG4gICAgICAgIGNsYXNzPVwib3B0aW9uXCJcclxuICAgICAgICB2LW1vZGVsPVwiaW50ZXJ2YWxJbmFjdGl2aXR5XCJcclxuICAgICAgICBAY2hhbmdlPVwib25DaGFuZ2UoU3RvcmFnZVBhcmFtcy5JTlRFUlZBTF9JTkFDVElWSVRZLCAkZXZlbnQudGFyZ2V0KVwiXHJcbiAgICAgID5cclxuICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cIkluYWN0aXZpdHlJbnRlcnZhbC5TZWNvbmRzXzMwXCI+MzAge3sgdCgnc2VjLm1lc3NhZ2UnKSB9fTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gOnZhbHVlPVwiSW5hY3Rpdml0eUludGVydmFsLlNlY29uZHNfNDVcIj40NSB7eyB0KCdzZWMubWVzc2FnZScpIH19PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiA6dmFsdWU9XCJJbmFjdGl2aXR5SW50ZXJ2YWwuTWluXzFcIj4xIHt7IHQoJ21pbi5tZXNzYWdlJykgfX08L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cIkluYWN0aXZpdHlJbnRlcnZhbC5NaW5fMlwiPjIge3sgdCgnMm1pbi5tZXNzYWdlJykgfX08L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cIkluYWN0aXZpdHlJbnRlcnZhbC5NaW5fNVwiPjUge3sgdCgnbWlucy5tZXNzYWdlJykgfX08L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cIkluYWN0aXZpdHlJbnRlcnZhbC5NaW5fMTBcIj4xMCB7eyB0KCdtaW5zLm1lc3NhZ2UnKSB9fTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gOnZhbHVlPVwiSW5hY3Rpdml0eUludGVydmFsLk1pbl8yMFwiPjIwIHt7IHQoJ21pbnMubWVzc2FnZScpIH19PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiA6dmFsdWU9XCJJbmFjdGl2aXR5SW50ZXJ2YWwuTWluXzMwXCI+MzAge3sgdCgnbWlucy5tZXNzYWdlJykgfX08L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyB0KCdpbnRlcnZhbEluYWN0aXZpdHkuZGVzY3JpcHRpb24nKSB9fTwvcD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZy1oZWFkZXIgZC1pbmxpbmUtYmxvY2tcIj57eyB0KCdleHBvcnRUb0NzdlNldHRpbmcubWVzc2FnZScpIH19PC9sYWJlbD5cclxuICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyB0KCdleHBvcnRUb0NzdlNldHRpbmcuZGVzY3JpcHRpb24nKSB9fTwvcD5cclxuICAgIDxkaXYgY2xhc3M9XCJleHBvcnQtYmxvY2tcIj5cclxuICAgICAgPFZ1ZURhdGVQaWNrZXJcclxuICAgICAgICByYW5nZVxyXG4gICAgICAgIDplbmFibGUtdGltZS1waWNrZXI9XCJmYWxzZVwiXHJcbiAgICAgICAgY2xhc3M9XCJkYXRlLXBpY2tlclwiXHJcbiAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkRGF0ZVwiXHJcbiAgICAgICAgOnByZXNldC1yYW5nZXM9XCJwcmVzZXRSYW5nZXNcIlxyXG4gICAgICAgIEB1cGRhdGU6bW9kZWwtdmFsdWU9XCJoYW5kbGVEYXRlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSAjeWVhcmx5PVwieyBsYWJlbCwgcmFuZ2UsIHByZXNldERhdGVSYW5nZSB9XCI+XHJcbiAgICAgICAgICA8c3BhbiBAY2xpY2s9XCJwcmVzZXREYXRlUmFuZ2UocmFuZ2UpXCI+e3sgbGFiZWwgfX08L3NwYW4+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9WdWVEYXRlUGlja2VyPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIDp2YWx1ZT1cInQoJ2V4cG9ydFRvQ3N2Lm1lc3NhZ2UnKVwiIEBjbGljaz1cImV4cG9ydFRvQ3N2KClcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWl0ZW1cIj5cclxuICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmctaGVhZGVyIGQtaW5saW5lLWJsb2NrXCI+e3sgdCgncmVtb3ZlQWxsRGF0YS5tZXNzYWdlJykgfX08L2xhYmVsPlxyXG4gICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7IHQoJ3JlbW92ZUFsbERhdGEuZGVzY3JpcHRpb24nKSB9fTwvcD5cclxuICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgOnZhbHVlPVwidCgncmVtb3ZlLm1lc3NhZ2UnKVwiIEBjbGljaz1cInJlbW92ZUFsbCgpXCIgLz5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZy1oZWFkZXIgZC1pbmxpbmUtYmxvY2tcIj57eyB0KCdiYWNrdXBBbmRSZXN0b3JlLm1lc3NhZ2UnKSB9fTwvbGFiZWw+XHJcbiAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+e3sgdCgnYmFja3VwQW5kUmVzdG9yZS5kZXNjcmlwdGlvbicpIH19PC9wPlxyXG4gICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiA6dmFsdWU9XCJ0KCdiYWNrdXAubWVzc2FnZScpXCIgQGNsaWNrPVwiYmFja3VwKClcIiAvPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgcmVmPVwicmVzdG9yZUZpbGVcIlxyXG4gICAgICBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIlxyXG4gICAgICBAY2hhbmdlPVwicmVzdG9yZUZpbGVVcGxvYWQoKVwiXHJcbiAgICAgIGFjY2VwdD1cImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgLz5cclxuICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtbC0xMFwiIDp2YWx1ZT1cInQoJ3Jlc3RvcmUubWVzc2FnZScpXCIgQGNsaWNrPVwicmVzdG9yZSgpXCIgLz5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZy1oZWFkZXJcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICBjbGFzcz1cImZpbGxlZC1pblwiXHJcbiAgICAgICAgaWQ9XCJzaG93Q2hhbmdlbG9nXCJcclxuICAgICAgICB2LW1vZGVsPVwic2hvd0NoYW5nZWxvZ1wiXHJcbiAgICAgICAgQGNoYW5nZT1cIm9uQ2hhbmdlKFN0b3JhZ2VQYXJhbXMuU0hPV19DSEFOR0VMT0csICRldmVudC50YXJnZXQpXCJcclxuICAgICAgLz5cclxuICAgICAgPHNwYW4+e3sgdCgnc2hvd0NoYW5nZWxvZy5tZXNzYWdlJykgfX08L3NwYW4+XHJcbiAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICB7eyB0KCdzaG93Q2hhbmdlbG9nLmRlc2NyaXB0aW9uJykgfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9sYWJlbD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGlkPVwicmVtb3ZlQWxsQ29uZmlybU1vZGFsXCIgY2xhc3M9XCJtb2RhbFwiIHYtaWY9XCJuZWVkVG9Db25maXJtRGVsZXRlQWxsRGF0YVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7IHQoJ3JlbW92ZUFsbERhdGFDb25maXJtLm1lc3NhZ2UnKSB9fTwvcD5cclxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzPVwiYWxlcnRcIlxyXG4gICAgICAgICAgOnZhbHVlPVwidCgncmVtb3ZlLm1lc3NhZ2UnKVwiXHJcbiAgICAgICAgICBAY2xpY2s9XCJyZW1vdmVBbGxDb25maXJtKClcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImluZm8gbWwtMTBcIiA6dmFsdWU9XCJ0KCdjYW5jZWwubWVzc2FnZScpXCIgQGNsaWNrPVwiY2FuY2VsKClcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdHZW5lcmFsU2V0dGluZ3MnLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcclxuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xyXG5pbXBvcnQgeyB1c2VOb3RpZmljYXRpb24gfSBmcm9tICdAa3l2Zy92dWUzLW5vdGlmaWNhdGlvbic7XHJcbmltcG9ydCB7XHJcbiAgQkxPQ0tfREVGRVJSQUxfREVGQVVMVCxcclxuICBEQVJLX01PREVfREVGQVVMVCxcclxuICBJTlRFUlZBTF9JTkFDVElWSVRZX0RFRkFVTFQsXHJcbiAgU3RvcmFnZVBhcmFtcyxcclxuICBWSUVXX1RJTUVfSU5fQkFER0VfREVGQVVMVCxcclxuICBJbmFjdGl2aXR5SW50ZXJ2YWwsXHJcbiAgU0hPV19DSEFOR0VMT0dfREVGQVVMVCxcclxufSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcclxuaW1wb3J0IHsgcmFuZ2VzLCBUaGlzV2Vla1JhbmdlLCB0b2RheUxvY2FsRGF0ZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUnO1xyXG5pbXBvcnQgeyB1c2VJbXBvcnRUb0NzdiB9IGZyb20gJy4uL2Z1bmN0aW9ucy91c2VJbXBvcnRUb0Nzdic7XHJcbmltcG9ydCB7IEZpbGVUeXBlLCB1c2VGaWxlIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VzZUZpbGUnO1xyXG5pbXBvcnQgeyB1c2VSZW1vdmVBbGxEYXRhIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VzZVJlbW92ZUFsbERhdGEnO1xyXG5pbXBvcnQgeyBpbmplY3RUYWJzUmVwb3NpdG9yeSB9IGZyb20gJy4uL3JlcG9zaXRvcnkvaW5qZWN0LXRhYnMtcmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IHVzZVJlc3RvcmVEYXRhIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VzZVJlc3RvcmVEYXRhJztcclxuaW1wb3J0IHsgYXBwbHlEYXJrTW9kZSB9IGZyb20gJy4uL3V0aWxzL2RhcmstbW9kZSc7XHJcblxyXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcclxuXHJcbmNvbnN0IHNldHRpbmdzU3RvcmFnZSA9IGluamVjdFN0b3JhZ2UoKTtcclxuY29uc3Qgbm90aWZpY2F0aW9uID0gdXNlTm90aWZpY2F0aW9uKCk7XHJcblxyXG5jb25zdCB2aWV3VGltZUluQmFkZ2UgPSByZWY8Ym9vbGVhbj4oKTtcclxuY29uc3QgaW50ZXJ2YWxJbmFjdGl2aXR5ID0gcmVmPEluYWN0aXZpdHlJbnRlcnZhbD4oKTtcclxuY29uc3QgYWxsb3dEZWZlcnJpbmdCbG9jayA9IHJlZjxib29sZWFuPigpO1xyXG5jb25zdCBkYXJrTW9kZSA9IHJlZjxib29sZWFuPigpO1xyXG5jb25zdCBzZWxlY3RlZERhdGUgPSByZWY8RGF0ZVtdPigpO1xyXG5cclxuY29uc3QgcHJlc2V0UmFuZ2VzID0gcmFuZ2VzKCk7XHJcblxyXG5jb25zdCBuZWVkVG9Db25maXJtRGVsZXRlQWxsRGF0YSA9IHJlZjxib29sZWFuPigpO1xyXG5jb25zdCBzaG93Q2hhbmdlbG9nID0gcmVmPGJvb2xlYW4+KCk7XHJcblxyXG5jb25zdCByZXN0b3JlRmlsZSA9IHJlZjxhbnk+KCk7XHJcblxyXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xyXG4gIHZpZXdUaW1lSW5CYWRnZS52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcclxuICAgIFN0b3JhZ2VQYXJhbXMuVklFV19USU1FX0lOX0JBREdFLFxyXG4gICAgVklFV19USU1FX0lOX0JBREdFX0RFRkFVTFQsXHJcbiAgKTtcclxuICBpbnRlcnZhbEluYWN0aXZpdHkudmFsdWUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXHJcbiAgICBTdG9yYWdlUGFyYW1zLklOVEVSVkFMX0lOQUNUSVZJVFksXHJcbiAgICBJTlRFUlZBTF9JTkFDVElWSVRZX0RFRkFVTFQsXHJcbiAgKTtcclxuICBkYXJrTW9kZS52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShTdG9yYWdlUGFyYW1zLkRBUktfTU9ERSwgREFSS19NT0RFX0RFRkFVTFQpO1xyXG4gIGFsbG93RGVmZXJyaW5nQmxvY2sudmFsdWUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXHJcbiAgICBTdG9yYWdlUGFyYW1zLkJMT0NLX0RFRkVSUkFMLFxyXG4gICAgQkxPQ0tfREVGRVJSQUxfREVGQVVMVCxcclxuICApO1xyXG4gIHNlbGVjdGVkRGF0ZS52YWx1ZSA9IFRoaXNXZWVrUmFuZ2U7XHJcbiAgc2hvd0NoYW5nZWxvZy52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcclxuICAgIFN0b3JhZ2VQYXJhbXMuU0hPV19DSEFOR0VMT0csXHJcbiAgICBTSE9XX0NIQU5HRUxPR19ERUZBVUxULFxyXG4gICk7XHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gb25DaGFuZ2Uoc3RvcmFnZVBhcmFtOiBTdG9yYWdlUGFyYW1zLCB0YXJnZXQ6IGFueSkge1xyXG4gIGlmICh0YXJnZXQgIT0gbnVsbClcclxuICAgIGF3YWl0IHNhdmUoXHJcbiAgICAgIHN0b3JhZ2VQYXJhbSxcclxuICAgICAgc3RvcmFnZVBhcmFtID09IFN0b3JhZ2VQYXJhbXMuSU5URVJWQUxfSU5BQ1RJVklUWSA/IE51bWJlcih0YXJnZXQudmFsdWUpIDogdGFyZ2V0LmNoZWNrZWQsXHJcbiAgICApO1xyXG5cclxuICBpZiAoc3RvcmFnZVBhcmFtID09IFN0b3JhZ2VQYXJhbXMuREFSS19NT0RFKSBhcHBseURhcmtNb2RlKHRhcmdldC5jaGVja2VkKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2F2ZShzdG9yYWdlUGFyYW06IFN0b3JhZ2VQYXJhbXMsIHZhbHVlOiBhbnkpIHtcclxuICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKHN0b3JhZ2VQYXJhbSwgdmFsdWUpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVEYXRlKG1vZGVsRGF0YTogRGF0ZVtdKSB7XHJcbiAgc2VsZWN0ZWREYXRlLnZhbHVlID0gbW9kZWxEYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBleHBvcnRUb0NzdigpIHtcclxuICBjb25zdCBkYXRlRnJvbSA9IHNlbGVjdGVkRGF0ZS52YWx1ZT8uWzBdIGFzIERhdGU7XHJcbiAgY29uc3QgZGF0ZVRvID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMV0gYXMgRGF0ZTtcclxuICBpZiAoZGF0ZUZyb20gPT0gdW5kZWZpbmVkIHx8IGRhdGVUbyA9PSB1bmRlZmluZWQpIHtcclxuICAgIG5vdGlmaWNhdGlvbi5ub3RpZnkoe1xyXG4gICAgICB0aXRsZTogJ05vIHRpbWUgcGVyaW9kIHNlbGVjdGVkJyxcclxuICAgICAgdHlwZTogJ3dhcm4nLFxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGNzdiA9IGF3YWl0IHVzZUltcG9ydFRvQ3N2KGRhdGVGcm9tLCBkYXRlVG8pO1xyXG4gICAgdXNlRmlsZShcclxuICAgICAgY3N2LFxyXG4gICAgICBGaWxlVHlwZS5DU1YsXHJcbiAgICAgIGB3ZWJzaXRlc18ke2RhdGVGcm9tLnRvTG9jYWxlRGF0ZVN0cmluZygpfS0ke2RhdGVUby50b0xvY2FsZURhdGVTdHJpbmcoKX0uY3N2YCxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZW1vdmVBbGwoKSB7XHJcbiAgbmVlZFRvQ29uZmlybURlbGV0ZUFsbERhdGEudmFsdWUgPSB0cnVlO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZW1vdmVBbGxDb25maXJtKCkge1xyXG4gIGF3YWl0IHVzZVJlbW92ZUFsbERhdGEoKTtcclxuICBuZWVkVG9Db25maXJtRGVsZXRlQWxsRGF0YS52YWx1ZSA9IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5jZWwoKSB7XHJcbiAgbmVlZFRvQ29uZmlybURlbGV0ZUFsbERhdGEudmFsdWUgPSBmYWxzZTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYmFja3VwKCkge1xyXG4gIGNvbnN0IHJlcG8gPSBhd2FpdCBpbmplY3RUYWJzUmVwb3NpdG9yeSgpO1xyXG4gIGNvbnN0IHRhYnMgPSByZXBvLmdldFRhYnMoKTtcclxuICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkodGFicyk7XHJcbiAgdXNlRmlsZShqc29uLCBGaWxlVHlwZS5KU09OLCBgYmFja3VwLSR7dG9kYXlMb2NhbERhdGUoKX0uanNvbmApO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXN0b3JlKCkge1xyXG4gIHJlc3RvcmVGaWxlLnZhbHVlLmNsaWNrKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc3RvcmVGaWxlVXBsb2FkKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmaWxlID0gcmVzdG9yZUZpbGUudmFsdWUuZmlsZXNbMF07XHJcbiAgICBpZiAoZmlsZSAhPSBudWxsICYmIGZpbGUudHlwZSA9PT0gRmlsZVR5cGUuSlNPTikge1xyXG4gICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSwgJ1VURi04Jyk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBhc3luYyByZWFkZXJFdmVudCA9PiB7XHJcbiAgICAgICAgaWYgKHJlYWRlckV2ZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgIGxldCBjb250ZW50ID0gcmVhZGVyRXZlbnQudGFyZ2V0Py5yZXN1bHQ7XHJcbiAgICAgICAgICBpZiAoY29udGVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHVzZVJlc3RvcmVEYXRhKGNvbnRlbnQgYXMgc3RyaW5nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBub3RpZmljYXRpb24ubm90aWZ5KHtcclxuICAgICAgICB0aXRsZTogJ1dyb25nIHJlc3RvcmUgZmlsZSBmb3JtYXQnLFxyXG4gICAgICAgIHR5cGU6ICd3YXJuJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCB7XHJcbiAgICBub3RpZmljYXRpb24ubm90aWZ5KHtcclxuICAgICAgdGl0bGU6ICdXcm9uZyByZXN0b3JlIGZpbGUgZm9ybWF0JyxcclxuICAgICAgdHlwZTogJ3dhcm4nLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmV4cG9ydC1ibG9jayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG59XHJcblxyXG4uZXhwb3J0LWJsb2NrIC5kYXRlLXBpY2tlciB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG48L3N0eWxlPlxyXG4iLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBWUFBQUFmOC85aEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBQWlnQUFBSW9CbENKUjJ3QUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQUZCU1VSQlZEaU5qWkd4UzBKUkZJZS9jNjhOMmRoZ1dFRlJPamk1bElRSmFoaEI5T2U2YVBna2lBSjNsMG9TczYyaFVKZjMzajB0S3ZKNnp6emo0WHpmNWY1K01xbWYzeVBzaXRtNjNXay9mckxCVEJ2bHJEcS9pZkpsRVBhQW9qcmZtemJLMlExaER5Z0NHV05DdVJIaEZjaXI4N3V6K3NWK0VqeTVLbVhVK1cwZ0R3eXRNM2NDTUt1V0RqU2xuaXFud0l0UlcwdDNuc1pSR0xRREZJQ2hEVTExdS92OExvdURkWklrR0VCV1g0bVRPSEZCRXZ4SEVKVUlEQlNDNVo4amNLeGdSZktneXZGODlXRkRVNG5DQUtrNGdiUDRLTUZ5b1FScXhJKzdOZEhGU21BNVlDeklFT0hJU2VqRlZXd1M0RVZnbDJKZFJlQU55TVZKWkEyOERHeDJmWGFvb1hnS0owUXFsdi9neFNSSlpCTjRuY1NBdG9DQ3dzQllqYTFxTWVsV2J5Uldhd3FEZVNaTkEzd0RmV3UxbW03MVJrbndxc1JhclFKOTRPY1hnclBqZTdROU1vUUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJleHBvcnQgZnVuY3Rpb24gZ2V0RmF2aWNvbih1cmw6IHN0cmluZykge1xyXG4gIHJldHVybiBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zMi9mYXZpY29ucz9kb21haW49JHt1cmx9JnN6PTY0YDtcclxufVxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxwIGNsYXNzPVwidGl0bGUgbXQtMFwiPnt7IHQoJ3doaXRlTGlzdC5tZXNzYWdlJykgfX08L3A+XHJcbiAgICA8dWwgcmVhZG9ubHkgY2xhc3M9XCJ1cmwtbGlzdFwiPlxyXG4gICAgICA8bGkgdi1mb3I9XCIodXJsLCBpKSBvZiB3aGl0ZUxpc3RcIiA6a2V5PVwiaVwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9kZWxldGUucG5nXCIgaGVpZ2h0PVwiMTZcIiBAY2xpY2s9XCJkZWxldGVGcm9tV2hpdGVMaXN0KHVybClcIiAvPlxyXG4gICAgICAgICAgPEZhdmljb24gOnR5cGU9XCJUeXBlT2ZVcmwuV2ViU2l0ZVwiIDpmYXZpY29uPVwiZ2V0RmF2aWNvbih1cmwpXCIgLz5cclxuICAgICAgICAgIDxzcGFuPnt7IHVybCB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXQtMjBcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgY3VzdG9tLXdpZHRoXCJcclxuICAgICAgICA6cGxhY2Vob2xkZXI9XCJ0KCdlbnRlcldlYnNpdGUubWVzc2FnZScpXCJcclxuICAgICAgICB2LW1vZGVsPVwibmV3V2Vic2l0ZUZvcldoaXRlTGlzdFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgc21hbGwtYnRuIG1sLTEwXCJcclxuICAgICAgICA6dmFsdWU9XCJ0KCdhZGRXZWJzaXRlLm1lc3NhZ2UnKVwiXHJcbiAgICAgICAgOmRpc2FibGVkPVwibmV3V2Vic2l0ZUZvcldoaXRlTGlzdCA9PSBudWxsIHx8IG5ld1dlYnNpdGVGb3JXaGl0ZUxpc3QgPT0gJydcIlxyXG4gICAgICAgIEBjbGljaz1cImFkZFRvV2hpdGVMaXN0KClcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ1doaXRlTGlzdCcsXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cclxuaW1wb3J0IEZhdmljb24gZnJvbSAnLi9GYXZpY29uLnZ1ZSc7XHJcbmltcG9ydCB7IGdldEZhdmljb24gfSBmcm9tICcuLi91dGlscy9mYXZpY29uJztcclxuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xyXG5pbXBvcnQgeyBUeXBlT2ZVcmwgfSBmcm9tICcuLi91dGlscy9lbnVtcyc7XHJcbmltcG9ydCB7IHVzZU5vdGlmaWNhdGlvbiB9IGZyb20gJ0BreXZnL3Z1ZTMtbm90aWZpY2F0aW9uJztcclxuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBTdG9yYWdlUGFyYW1zIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XHJcbmltcG9ydCB7IGlzRG9tYWluRXF1YWxzIH0gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcclxuaW1wb3J0IHsgZXh0cmFjdEhvc3RuYW1lIH0gZnJvbSAnLi4vdXRpbHMvZXh0cmFjdC1ob3N0bmFtZSc7XHJcblxyXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcclxuXHJcbmNvbnN0IG5vdGlmaWNhdGlvbiA9IHVzZU5vdGlmaWNhdGlvbigpO1xyXG5cclxuY29uc3Qgc2V0dGluZ3NTdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xyXG5cclxuY29uc3Qgd2hpdGVMaXN0ID0gcmVmPHN0cmluZ1tdPigpO1xyXG5jb25zdCBuZXdXZWJzaXRlRm9yV2hpdGVMaXN0ID0gcmVmPHN0cmluZz4oKTtcclxuXHJcbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XHJcbiAgd2hpdGVMaXN0LnZhbHVlID0gT2JqZWN0LnZhbHVlcyhhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoU3RvcmFnZVBhcmFtcy5CTEFDS19MSVNULCBbXSkpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGFkZFRvV2hpdGVMaXN0KCkge1xyXG4gIGNvbnN0IGV4aXN0aW5nSXRlbSA9IHdoaXRlTGlzdC52YWx1ZT8uZmluZCh4ID0+XHJcbiAgICBpc0RvbWFpbkVxdWFscyhleHRyYWN0SG9zdG5hbWUoeCksIGV4dHJhY3RIb3N0bmFtZShuZXdXZWJzaXRlRm9yV2hpdGVMaXN0LnZhbHVlISkpLFxyXG4gICk7XHJcbiAgaWYgKGV4aXN0aW5nSXRlbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBub3RpZmljYXRpb24ubm90aWZ5KHtcclxuICAgICAgdGl0bGU6ICdZb3UgaGF2ZSBhbHJlYWR5IGFkZGVkIHRoaXMgc2l0ZScsXHJcbiAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgbmV3V2Vic2l0ZSA9IGV4dHJhY3RIb3N0bmFtZShuZXdXZWJzaXRlRm9yV2hpdGVMaXN0LnZhbHVlISk7XHJcbiAgICB3aGl0ZUxpc3QudmFsdWU/LnB1c2gobmV3V2Vic2l0ZSk7XHJcbiAgICBzYXZlKHdoaXRlTGlzdC52YWx1ZSk7XHJcbiAgICBuZXdXZWJzaXRlRm9yV2hpdGVMaXN0LnZhbHVlID0gJyc7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVGcm9tV2hpdGVMaXN0KHVybDogc3RyaW5nKSB7XHJcbiAgd2hpdGVMaXN0LnZhbHVlID0gd2hpdGVMaXN0LnZhbHVlIS5maWx0ZXIoeCA9PiB4ICE9IHVybCk7XHJcbiAgc2F2ZSh3aGl0ZUxpc3QudmFsdWUpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzYXZlKHZhbHVlOiBhbnkpIHtcclxuICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKFN0b3JhZ2VQYXJhbXMuQkxBQ0tfTElTVCwgdmFsdWUpO1xyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmFib3V0IC5hYm91dC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jdXN0b20td2lkdGgge1xyXG4gIHdpZHRoOiA1MzhweDtcclxufVxyXG48L3N0eWxlPlxyXG4iLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fODFhNGFiNTFfX1wiIiwiaW1wb3J0IHsgY29udmVydEhITU1Ub1NlY29uZHMgfSBmcm9tICcuLi91dGlscy9jb252ZXJ0ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlc3RyaWN0aW9uIHtcclxuICBkb21haW46IHN0cmluZztcclxuICB0aW1lOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRvbWFpbjogc3RyaW5nLCBob3VyczogbnVtYmVyLCBtaW51dGVzOiBudW1iZXIpIHtcclxuICAgIHRoaXMuZG9tYWluID0gZG9tYWluO1xyXG4gICAgdGhpcy50aW1lID0gY29udmVydEhITU1Ub1NlY29uZHMoaG91cnMsIG1pbnV0ZXMpO1xyXG4gIH1cclxufVxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPHVsIHJlYWRvbmx5IGNsYXNzPVwidXJsLWxpc3RcIj5cclxuICAgIDxsaSB2LWZvcj1cIihsaW1pdCwgaSkgb2YgbGlzdFwiIDprZXk9XCJpXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvZGVsZXRlLnBuZ1wiIGhlaWdodD1cIjE2XCIgQGNsaWNrPVwiZGVsZXRlRnJvbUxpc3QobGltaXQuZG9tYWluKVwiIC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiLi4vYXNzZXRzL2ljb25zL2VkaXQuc3ZnXCJcclxuICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgIEBjbGljaz1cImVkaXRJdGVtRnJvbUxpc3QobGltaXQuZG9tYWluLCBsaW1pdC50aW1lKVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8RmF2aWNvbiA6dHlwZT1cIlR5cGVPZlVybC5XZWJTaXRlXCIgOmZhdmljb249XCJnZXRGYXZpY29uKGxpbWl0LmRvbWFpbilcIiAvPlxyXG4gICAgICAgIDxzcGFuPnt7IGxpbWl0LmRvbWFpbiB9fTwvc3Bhbj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJ0aW1lLXZhbHVlIGQtaW5saW5lLWJsb2NrXCIgdi1pZj1cIiFjb21wbGV0ZWx5QmxvY2tlZChsaW1pdC50aW1lKVwiPlxyXG4gICAgICAgICAgICB7eyB0KCdsaW1pdC5tZXNzYWdlJykgfX0gOiB7eyBnZXRUaW1lKGxpbWl0LnRpbWUpIH19XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImJsb2NrZWRcIiB2LWlmPVwiY29tcGxldGVseUJsb2NrZWQobGltaXQudGltZSlcIj5cclxuICAgICAgICAgICAge3sgdCgnY29tcGxldGVseUJsb2NrZWQubWVzc2FnZScpIH19XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG4gIDxkaXYgY2xhc3M9XCJsaW1pdHMtdGltZS1ibG9jayBtdC0yMFwiPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgOmRpc2FibGVkPVwiaXNFZGl0XCJcclxuICAgICAgY2xhc3M9XCJkLWlubGluZS1ibG9ja1wiXHJcbiAgICAgIDpwbGFjZWhvbGRlcj1cInQoJ2VudGVyV2Vic2l0ZS5tZXNzYWdlJylcIlxyXG4gICAgICB2LW1vZGVsPVwibmV3V2Vic2l0ZUZvckxpc3RcIlxyXG4gICAgLz5cclxuICAgIDxWdWVEYXRlUGlja2VyIHYtbW9kZWw9XCJ0aW1lXCIgdGltZS1waWNrZXIgY2xhc3M9XCJkYXRlLXBpY2tlciBoZWlnaHRcIiAvPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBjbGFzcz1cImQtaW5saW5lLWJsb2NrIHNtYWxsLWJ0blwiXHJcbiAgICAgIDp2YWx1ZT1cIiFpc0VkaXQgPyB0KCdhZGRXZWJzaXRlLm1lc3NhZ2UnKSA6IHQoJ3NhdmUubWVzc2FnZScpXCJcclxuICAgICAgOmRpc2FibGVkPVwiaXNEaXNhYmxlZFNhdmluZ1wiXHJcbiAgICAgIEBjbGljaz1cImlzRWRpdCA/IGVkaXRJdGVtKCkgOiBhZGRUb0xpc3QoKVwiXHJcbiAgICAvPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJtdC0xMFwiIHYtaWY9XCJzaG93Q29tcGxldGVseUJsb2NrVmFsdWVcIj5cclxuICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrLWNoZWNrYm94XCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgY2xhc3M9XCJmaWxsZWQtaW5cIlxyXG4gICAgICAgIGlkPVwidmlld1RpbWVJbkJhZGdlXCJcclxuICAgICAgICB2LW1vZGVsPVwiaXNDaGVja2VkQ29tcGxldGVseUJsb2NrZWRcIlxyXG4gICAgICAgIEBjaGFuZ2U9XCJjb21wbGV0ZWx5QmxvY2tcIlxyXG4gICAgICAvPlxyXG4gICAgICA8c3Bhbj57eyB0KCdjb21wbGV0ZWx5QmxvY2tlZC5kZXNjcmlwdGlvbicpIH19PC9zcGFuPlxyXG4gICAgPC9sYWJlbD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnTGlzdFdpdGhUaW1lJyxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxyXG5pbXBvcnQgRmF2aWNvbiBmcm9tICcuL0Zhdmljb24udnVlJztcclxuaW1wb3J0IHsgZ2V0RmF2aWNvbiB9IGZyb20gJy4uL3V0aWxzL2Zhdmljb24nO1xyXG5pbXBvcnQgeyB1c2VOb3RpZmljYXRpb24gfSBmcm9tICdAa3l2Zy92dWUzLW5vdGlmaWNhdGlvbic7XHJcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XHJcbmltcG9ydCB7IGluamVjdFN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL2luamVjdC1zdG9yYWdlJztcclxuaW1wb3J0IHsgVGltZSB9IGZyb20gJy4uL3V0aWxzL3RpbWUnO1xyXG5pbXBvcnQgeyBjb21wdXRlZCwgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyBMaXN0V2l0aFRpbWUsIFR5cGVPZlVybCB9IGZyb20gJy4uL3V0aWxzL2VudW1zJztcclxuaW1wb3J0IHsgU3RvcmFnZVBhcmFtcyB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xyXG5pbXBvcnQgeyBpc0RvbWFpbkVxdWFscyB9IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XHJcbmltcG9ydCB7IGV4dHJhY3RIb3N0bmFtZSB9IGZyb20gJy4uL3V0aWxzL2V4dHJhY3QtaG9zdG5hbWUnO1xyXG5pbXBvcnQgeyBjb252ZXJ0SEhNTVRvU2Vjb25kcywgY29udmVydFNlY29uZHNUb0hITU0gfSBmcm9tICcuLi91dGlscy9jb252ZXJ0ZXInO1xyXG5pbXBvcnQgeyBSZXN0cmljdGlvbiB9IGZyb20gJy4uL2VudGl0eS9yZXN0cmljdGlvbic7XHJcbmltcG9ydCB7IEJhc2VUaW1lTGlzdCB9IGZyb20gJy4uL2VudGl0eS9iYXNlVGltZUxpc3QnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zIH0gZnJvbSAnLi4vZW50aXR5L25vdGlmaWNhdGlvbic7XHJcblxyXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcclxuXHJcbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xyXG4gIHR5cGU6IExpc3RXaXRoVGltZTtcclxufT4oKTtcclxuXHJcbmNvbnN0IG5vdGlmaWNhdGlvbiA9IHVzZU5vdGlmaWNhdGlvbigpO1xyXG5jb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XHJcblxyXG5jb25zdCBsaXN0ID0gcmVmPEJhc2VUaW1lTGlzdFtdPigpO1xyXG5jb25zdCBpc0VkaXQgPSByZWY8Ym9vbGVhbj4oKTtcclxuY29uc3QgdGltZSA9IHJlZjxUaW1lPih7XHJcbiAgaG91cnM6IDAsXHJcbiAgbWludXRlczogMzAsXHJcbn0pO1xyXG5jb25zdCBuZXdXZWJzaXRlRm9yTGlzdCA9IHJlZjxzdHJpbmc+KCk7XHJcbmNvbnN0IHN0b3JhZ2VQYXJhbSA9IHJlZjxTdG9yYWdlUGFyYW1zPigpO1xyXG5jb25zdCBpc0NoZWNrZWRDb21wbGV0ZWx5QmxvY2tlZCA9IGNvbXB1dGVkKFxyXG4gICgpID0+IHRpbWUudmFsdWUgIT0gdW5kZWZpbmVkICYmIHRpbWUudmFsdWUuaG91cnMgPT0gMCAmJiB0aW1lLnZhbHVlLm1pbnV0ZXMgPT0gMCxcclxuKTtcclxuY29uc3Qgc2hvd0NvbXBsZXRlbHlCbG9ja1ZhbHVlID0gY29tcHV0ZWQoXHJcbiAgKCkgPT5cclxuICAgIHByb3BzLnR5cGUgPT0gTGlzdFdpdGhUaW1lLkxpbWl0cyAmJlxyXG4gICAgbmV3V2Vic2l0ZUZvckxpc3QudmFsdWUgIT0gdW5kZWZpbmVkICYmXHJcbiAgICBuZXdXZWJzaXRlRm9yTGlzdC52YWx1ZSAhPSAnJyxcclxuKTtcclxuXHJcbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XHJcbiAgc3dpdGNoIChwcm9wcy50eXBlKSB7XHJcbiAgICBjYXNlIExpc3RXaXRoVGltZS5MaW1pdHM6XHJcbiAgICAgIGxpc3QudmFsdWUgPSBPYmplY3QudmFsdWVzKFxyXG4gICAgICAgIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShTdG9yYWdlUGFyYW1zLlJFU1RSSUNUSU9OX0xJU1QsIFtdKSxcclxuICAgICAgKSBhcyBSZXN0cmljdGlvbltdO1xyXG4gICAgICBzdG9yYWdlUGFyYW0udmFsdWUgPSBTdG9yYWdlUGFyYW1zLlJFU1RSSUNUSU9OX0xJU1Q7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMaXN0V2l0aFRpbWUuTm90aWZpY2F0aW9uczpcclxuICAgICAgbGlzdC52YWx1ZSA9IE9iamVjdC52YWx1ZXMoXHJcbiAgICAgICAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFN0b3JhZ2VQYXJhbXMuTk9USUZJQ0FUSU9OX0xJU1QsIFtdKSxcclxuICAgICAgKSBhcyBOb3RpZmljYXRpb25zW107XHJcbiAgICAgIHN0b3JhZ2VQYXJhbS52YWx1ZSA9IFN0b3JhZ2VQYXJhbXMuTk9USUZJQ0FUSU9OX0xJU1Q7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBhZGRUb0xpc3QoKSB7XHJcbiAgY29uc3QgZXhpc3RpbmdJdGVtID0gbGlzdC52YWx1ZT8uZmluZCh4ID0+XHJcbiAgICBpc0RvbWFpbkVxdWFscyhleHRyYWN0SG9zdG5hbWUoeC5kb21haW4pLCBleHRyYWN0SG9zdG5hbWUobmV3V2Vic2l0ZUZvckxpc3QudmFsdWUhKSksXHJcbiAgKTtcclxuICBpZiAoZXhpc3RpbmdJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgIG5vdGlmaWNhdGlvbi5ub3RpZnkoe1xyXG4gICAgICB0aXRsZTogJ1lvdSBoYXZlIGFscmVhZHkgYWRkZWQgdGhpcyBzaXRlJyxcclxuICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBuZXdMaW1pdCA9IG5ldyBSZXN0cmljdGlvbihcclxuICAgICAgZXh0cmFjdEhvc3RuYW1lKG5ld1dlYnNpdGVGb3JMaXN0LnZhbHVlISksXHJcbiAgICAgIHRpbWUudmFsdWUuaG91cnMsXHJcbiAgICAgIHRpbWUudmFsdWUubWludXRlcyxcclxuICAgICk7XHJcbiAgICBsaXN0LnZhbHVlPy5wdXNoKG5ld0xpbWl0KTtcclxuICAgIHNhdmUobGlzdC52YWx1ZSk7XHJcbiAgICBuZXdXZWJzaXRlRm9yTGlzdC52YWx1ZSA9ICcnO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29tcGxldGVseUJsb2NrKCkge1xyXG4gIHRpbWUudmFsdWUuaG91cnMgPSAwO1xyXG4gIHRpbWUudmFsdWUubWludXRlcyA9IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXBsZXRlbHlCbG9ja2VkKHRpbWU6IG51bWJlcikge1xyXG4gIHJldHVybiBwcm9wcy50eXBlID09IExpc3RXaXRoVGltZS5MaW1pdHMgJiYgdGltZSA9PSAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaW1lKHRpbWU6IG51bWJlcikge1xyXG4gIGNvbnN0IHRpbWVPYmogPSBjb252ZXJ0U2Vjb25kc1RvSEhNTSh0aW1lKTtcclxuICByZXR1cm4gYCR7dGltZU9iai5ob3Vyc306JHt0aW1lT2JqLm1pbnV0ZXMgPCAxMCA/ICcwJyArIHRpbWVPYmoubWludXRlcyA6IHRpbWVPYmoubWludXRlc31gO1xyXG59XHJcblxyXG5jb25zdCBpc0Rpc2FibGVkU2F2aW5nID0gY29tcHV0ZWQoKCkgPT4ge1xyXG4gIGlmIChcclxuICAgIHByb3BzLnR5cGUgPT0gTGlzdFdpdGhUaW1lLk5vdGlmaWNhdGlvbnMgJiZcclxuICAgIHRpbWUudmFsdWU/LmhvdXJzID09IDAgJiZcclxuICAgIHRpbWUudmFsdWU/Lm1pbnV0ZXMgPT0gMFxyXG4gIClcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIHJldHVybiAoXHJcbiAgICBuZXdXZWJzaXRlRm9yTGlzdC52YWx1ZSA9PSAnJyB8fCBuZXdXZWJzaXRlRm9yTGlzdC52YWx1ZSA9PSB1bmRlZmluZWQgfHwgdGltZS52YWx1ZSA9PSBudWxsXHJcbiAgKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBkZWxldGVGcm9tTGlzdCh1cmw6IHN0cmluZykge1xyXG4gIGxpc3QudmFsdWUgPSBsaXN0LnZhbHVlIS5maWx0ZXIoeCA9PiB4LmRvbWFpbiAhPSB1cmwpO1xyXG4gIHNhdmUobGlzdC52YWx1ZSk7XHJcbiAgbmV3V2Vic2l0ZUZvckxpc3QudmFsdWUgPSAnJztcclxuICBpc0VkaXQudmFsdWUgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdEl0ZW1Gcm9tTGlzdCh1cmw6IHN0cmluZywgdGltZUZvclVybDogbnVtYmVyKSB7XHJcbiAgaXNFZGl0LnZhbHVlID0gdHJ1ZTtcclxuICBuZXdXZWJzaXRlRm9yTGlzdC52YWx1ZSA9IHVybDtcclxuICBjb25zdCB0aW1lT2JqID0gY29udmVydFNlY29uZHNUb0hITU0odGltZUZvclVybCk7XHJcbiAgdGltZS52YWx1ZS5ob3VycyA9IHRpbWVPYmouaG91cnM7XHJcbiAgdGltZS52YWx1ZS5taW51dGVzID0gdGltZU9iai5taW51dGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0SXRlbSgpIHtcclxuICBjb25zdCBleGlzdGluZ0l0ZW0gPSBsaXN0LnZhbHVlPy5maW5kKHggPT5cclxuICAgIGlzRG9tYWluRXF1YWxzKGV4dHJhY3RIb3N0bmFtZSh4LmRvbWFpbiksIGV4dHJhY3RIb3N0bmFtZShuZXdXZWJzaXRlRm9yTGlzdC52YWx1ZSEpKSxcclxuICApO1xyXG4gIGlmIChleGlzdGluZ0l0ZW0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICBleGlzdGluZ0l0ZW0udGltZSA9IGNvbnZlcnRISE1NVG9TZWNvbmRzKHRpbWUudmFsdWUuaG91cnMsIHRpbWUudmFsdWUubWludXRlcyk7XHJcbiAgICBzYXZlKGxpc3QudmFsdWUpO1xyXG4gICAgbmV3V2Vic2l0ZUZvckxpc3QudmFsdWUgPSAnJztcclxuICAgIGlzRWRpdC52YWx1ZSA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2F2ZSh2YWx1ZTogYW55KSB7XHJcbiAgaWYgKHZhbHVlICE9IHVuZGVmaW5lZCkgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLnNhdmVWYWx1ZShzdG9yYWdlUGFyYW0udmFsdWUhLCB2YWx1ZSk7XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4ubGltaXRzLXRpbWUtYmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxufVxyXG5cclxuLmxpbWl0cy10aW1lLWJsb2NrIC5kYXRlLXBpY2tlciB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIG1hcmdpbjogMCAxNXB4O1xyXG59XHJcbi5ibG9ja2VkIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIG1hcmdpbi1sZWZ0OiA1NXB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxwIGNsYXNzPVwidGl0bGUgbXQtMFwiPnt7IHQoJ2xpbWl0cy5tZXNzYWdlJykgfX08L3A+XHJcbiAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgIHt7IHQoJ2xpbWl0cy5kZXNjcmlwdGlvbicpIH19XHJcbiAgICA8L3A+XHJcbiAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgIHt7IHQoJ2xpbWl0c1RpcC5tZXNzYWdlJykgfX1cclxuICAgIDwvcD5cclxuICAgIDxMaXN0V2l0aFRpbWVDb21wb25lbnQgOnR5cGU9XCJMaXN0V2l0aFRpbWUuTGltaXRzXCIgLz5cclxuICAgIDxQcm9tb0NsZWFyWW91VHViZSAvPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdMaW1pdHMnLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCBMaXN0V2l0aFRpbWVDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0V2l0aFRpbWUudnVlJztcclxuaW1wb3J0IFByb21vQ2xlYXJZb3VUdWJlIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvbW9DbGVhcllvdVR1YmUudnVlJztcclxuaW1wb3J0IHsgTGlzdFdpdGhUaW1lIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xyXG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xyXG5cclxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmFib3V0IC5hYm91dC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxyXG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5nLWhlYWRlclwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgIGNsYXNzPVwiZmlsbGVkLWluXCJcclxuICAgICAgICAgIGlkPVwiYmxvY2tEZWZlcnJhbFwiXHJcbiAgICAgICAgICB2LW1vZGVsPVwic2hvd0RhaWx5Tm90aWZhY2F0aW9uXCJcclxuICAgICAgICAgIEBjaGFuZ2U9XCJvbkNoYW5nZShTdG9yYWdlUGFyYW1zLkRBSUxZX05PVElGSUNBVElPTiwgJGV2ZW50LnRhcmdldClcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4+e3sgdCgnc2hvd0RhaWx5Tm90aWZhY2F0aW9uLm1lc3NhZ2UnKSB9fTwvc3Bhbj5cclxuICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICB7eyB0KCdzaG93RGFpbHlOb3RpZmFjYXRpb24uZGVzY3JpcHRpb24nKSB9fVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWl0ZW1cIj5cclxuICAgICAgPHAgY2xhc3M9XCJzZXR0aW5nLWhlYWRlciBkLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgIHt7IHQoJ25vdGlmaWNhdGlvblRpbWVTZXR0aW5nLm1lc3NhZ2UnKSB9fVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxWdWVEYXRlUGlja2VyXHJcbiAgICAgICAgdi1tb2RlbD1cIm5vdGlmaWNhdGlvblRpbWVcIlxyXG4gICAgICAgIHRpbWUtcGlja2VyXHJcbiAgICAgICAgQHVwZGF0ZTptb2RlbC12YWx1ZT1cImhhbmRsZURhdGVcIlxyXG4gICAgICAgIGNsYXNzPVwiZGF0ZS1waWNrZXIgZC1pbmxpbmUtYmxvY2tcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxyXG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5nLWhlYWRlclwiPnt7IHQoJ25vdGlmaWNhdGlvblRpbWUubWVzc2FnZScpIH19PC9sYWJlbD5cclxuICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIHt7IHQoJ25vdGlmaWNhdGlvblRpbWUuZGVzY3JpcHRpb24nKSB9fVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxMaXN0V2l0aFRpbWVDb21wb25lbnQgOnR5cGU9XCJMaXN0V2l0aFRpbWUuTm90aWZpY2F0aW9uc1wiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1pdGVtXCI+XHJcbiAgICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmctaGVhZGVyXCI+e3sgdCgnbm90aWZpY2F0aW9uTWVzc2FnZS5tZXNzYWdlJykgfX08L2xhYmVsPlxyXG4gICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAge3sgdCgnbm90aWZpY2F0aW9uTWVzc2FnZS5kZXNjcmlwdGlvbicpIH19XHJcbiAgICAgIDwvcD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIGNsYXNzPVwiXCJcclxuICAgICAgICA6cGxhY2Vob2xkZXI9XCJ0KCdlbnRlck5vdGlmaWNhdGlvbi5tZXNzYWdlJylcIlxyXG4gICAgICAgIHYtbW9kZWw9XCJub3RpZmljYXRpb25NZXNzYWdlXCJcclxuICAgICAgLz5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgY2xhc3M9XCJkLWlubGluZS1ibG9jayBzbWFsbC1idG4gbWwtMTAgd2lkdGhcIlxyXG4gICAgICAgIDp2YWx1ZT1cInQoJ3NhdmUubWVzc2FnZScpXCJcclxuICAgICAgICA6ZGlzYWJsZWQ9XCJub3RpZmljYXRpb25NZXNzYWdlID09ICcnXCJcclxuICAgICAgICBAY2xpY2s9XCJzYXZlTm90aWZpY2F0aW9uTWVzc2FnZSgpXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdEYWlseU5vdGlmaWNhdGlvbnMnLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcclxuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBOT1RJRklDQVRJT05fTUVTU0FHRV9ERUZBVUxULCBTdG9yYWdlUGFyYW1zIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XHJcbmltcG9ydCB7XHJcbiAgREFJTFlfTk9USUZJQ0FUSU9OX0RFRkFVTFQsXHJcbiAgREFJTFlfU1VNTUFSWV9OT1RJRklDQVRJT05fVElNRV9ERUZBVUxULFxyXG59IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xyXG5pbXBvcnQgeyBjb252ZXJ0SEhNTVRvU2Vjb25kcywgY29udmVydFNlY29uZHNUb0hITU0gfSBmcm9tICcuLi91dGlscy9jb252ZXJ0ZXInO1xyXG5pbXBvcnQgeyBUaW1lIH0gZnJvbSAnLi4vdXRpbHMvdGltZSc7XHJcbmltcG9ydCBMaXN0V2l0aFRpbWVDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0V2l0aFRpbWUudnVlJztcclxuaW1wb3J0IFByb21vQ2xlYXJZb3VUdWJlIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvbW9DbGVhcllvdVR1YmUudnVlJztcclxuaW1wb3J0IHsgTGlzdFdpdGhUaW1lIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xyXG5pbXBvcnQgQnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xyXG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gJy4uL3V0aWxzL21lc3NhZ2VzJztcclxuXHJcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xyXG5cclxuY29uc3Qgc2V0dGluZ3NTdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xyXG5cclxuY29uc3Qgc2hvd0RhaWx5Tm90aWZhY2F0aW9uID0gcmVmPGJvb2xlYW4+KCk7XHJcbmNvbnN0IGRhaWx5Tm90aWZpY2F0aW9uVGltZSA9IHJlZjxudW1iZXI+KCk7XHJcbmNvbnN0IG5vdGlmaWNhdGlvblRpbWUgPSByZWY8VGltZT4oKTtcclxuY29uc3Qgbm90aWZpY2F0aW9uTWVzc2FnZSA9IHJlZjxzdHJpbmc+KCk7XHJcblxyXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xyXG4gIHNob3dEYWlseU5vdGlmYWNhdGlvbi52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcclxuICAgIFN0b3JhZ2VQYXJhbXMuREFJTFlfTk9USUZJQ0FUSU9OLFxyXG4gICAgREFJTFlfTk9USUZJQ0FUSU9OX0RFRkFVTFQsXHJcbiAgKTtcclxuXHJcbiAgbm90aWZpY2F0aW9uTWVzc2FnZS52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcclxuICAgIFN0b3JhZ2VQYXJhbXMuTk9USUZJQ0FUSU9OX01FU1NBR0UsXHJcbiAgICBOT1RJRklDQVRJT05fTUVTU0FHRV9ERUZBVUxULFxyXG4gICk7XHJcblxyXG4gIGRhaWx5Tm90aWZpY2F0aW9uVGltZS52YWx1ZSA9IChhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXHJcbiAgICBTdG9yYWdlUGFyYW1zLkRBSUxZX1NVTU1BUllfTk9USUZJQ0FUSU9OX1RJTUUsXHJcbiAgICBEQUlMWV9TVU1NQVJZX05PVElGSUNBVElPTl9USU1FX0RFRkFVTFQsXHJcbiAgKSkgYXMgbnVtYmVyO1xyXG5cclxuICBjb25zdCB0aW1lT2JqID0gY29udmVydFNlY29uZHNUb0hITU0oZGFpbHlOb3RpZmljYXRpb25UaW1lLnZhbHVlKTtcclxuICBub3RpZmljYXRpb25UaW1lLnZhbHVlID0gdGltZU9iajtcclxufSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzYXZlTm90aWZpY2F0aW9uTWVzc2FnZSgpIHtcclxuICBzYXZlKFN0b3JhZ2VQYXJhbXMuTk9USUZJQ0FUSU9OX01FU1NBR0UsIG5vdGlmaWNhdGlvbk1lc3NhZ2UudmFsdWUpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVEYXRlKG1vZGVsRGF0YTogVGltZSkge1xyXG4gIGlmIChtb2RlbERhdGEgIT0gbnVsbCkge1xyXG4gICAgbm90aWZpY2F0aW9uVGltZS52YWx1ZSA9IG1vZGVsRGF0YTtcclxuICAgIGF3YWl0IHNhdmUoXHJcbiAgICAgIFN0b3JhZ2VQYXJhbXMuREFJTFlfU1VNTUFSWV9OT1RJRklDQVRJT05fVElNRSxcclxuICAgICAgY29udmVydEhITU1Ub1NlY29uZHMobm90aWZpY2F0aW9uVGltZS52YWx1ZS5ob3Vycywgbm90aWZpY2F0aW9uVGltZS52YWx1ZS5taW51dGVzKSxcclxuICAgICk7XHJcbiAgICBCcm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoTWVzc2FnZXMuUmVzY2hlZHVsZUpvYnMpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gb25DaGFuZ2Uoc3RvcmFnZVBhcmFtOiBTdG9yYWdlUGFyYW1zLCB0YXJnZXQ6IGFueSkge1xyXG4gIGlmICh0YXJnZXQgIT0gbnVsbCkgYXdhaXQgc2F2ZShzdG9yYWdlUGFyYW0sIHRhcmdldC5jaGVja2VkKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2F2ZShzdG9yYWdlUGFyYW06IFN0b3JhZ2VQYXJhbXMsIHZhbHVlOiBhbnkpIHtcclxuICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKHN0b3JhZ2VQYXJhbSwgdmFsdWUpO1xyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmRhdGUtcGlja2VyIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgbWFyZ2luOiAwIDE1cHg7XHJcbn1cclxuLndpZHRoIHtcclxuICB3aWR0aDogNTQwcHg7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfX2ExNjZhNTUwX19cIiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX19mYTE2MjA0YV9fXCIiLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fOGI5NDNiOGZfX1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfXzI4NzcxMjYxX19cIiIsImltcG9ydCBCcm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XHJcbmltcG9ydCB7IFBvbW9kb3JvU291bmRzIH0gZnJvbSAnLi4vdXRpbHMvcG9tb2Rvcm8nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBsYXlTb3VuZChzb3VuZDogUG9tb2Rvcm9Tb3VuZHMpIHtcclxuICBjb25zdCBteUF1ZGlvID0gbmV3IEF1ZGlvKEJyb3dzZXIucnVudGltZS5nZXRVUkwoYGFzc2V0cy9wb21vZG9yby1zb3VuZHMvJHtzb3VuZH1gKSk7XHJcbiAgbXlBdWRpby5wbGF5KCk7XHJcbn1cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxwIGNsYXNzPVwidGl0bGUtYXVkaW8gZC1pbmxpbmUtYmxvY2tcIj57eyB0KCdwb21vZG9yb1NvdW5kQWZ0ZXIubWVzc2FnZScpIH19PC9wPlxyXG4gIDxzZWxlY3QgY2xhc3M9XCJvcHRpb25cIiB2LW1vZGVsPVwiYXVkaW9BZnRlclBlcmlvZFwiIEBjaGFuZ2U9XCJvbkF1ZGlvQ2hhbmdlKCRldmVudC50YXJnZXQpXCI+XHJcbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCAxJ11cIj57eyB0KCdzb3VuZC5tZXNzYWdlJykgfX0gMTwvb3B0aW9uPlxyXG4gICAgPG9wdGlvbiA6dmFsdWU9XCJQb21vZG9yb1NvdW5kc1snU291bmQgMiddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDI8L29wdGlvbj5cclxuICAgIDxvcHRpb24gOnZhbHVlPVwiUG9tb2Rvcm9Tb3VuZHNbJ1NvdW5kIDMnXVwiPnt7IHQoJ3NvdW5kLm1lc3NhZ2UnKSB9fSAzPC9vcHRpb24+XHJcbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCA0J11cIj57eyB0KCdzb3VuZC5tZXNzYWdlJykgfX0gNDwvb3B0aW9uPlxyXG4gICAgPG9wdGlvbiA6dmFsdWU9XCJQb21vZG9yb1NvdW5kc1snU291bmQgNSddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDU8L29wdGlvbj5cclxuICAgIDxvcHRpb24gOnZhbHVlPVwiUG9tb2Rvcm9Tb3VuZHNbJ1NvdW5kIDYnXVwiPnt7IHQoJ3NvdW5kLm1lc3NhZ2UnKSB9fSA2PC9vcHRpb24+XHJcbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCA3J11cIj57eyB0KCdzb3VuZC5tZXNzYWdlJykgfX0gNzwvb3B0aW9uPlxyXG4gICAgPG9wdGlvbiA6dmFsdWU9XCJQb21vZG9yb1NvdW5kc1snU291bmQgOCddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDg8L29wdGlvbj5cclxuICAgIDxvcHRpb24gOnZhbHVlPVwiUG9tb2Rvcm9Tb3VuZHNbJ1NvdW5kIDknXVwiPnt7IHQoJ3NvdW5kLm1lc3NhZ2UnKSB9fSA5PC9vcHRpb24+XHJcbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCAxMCddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDEwPC9vcHRpb24+XHJcbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCAxMSddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDExPC9vcHRpb24+XHJcbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCAxMiddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDEyPC9vcHRpb24+XHJcbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCAxMyddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDEzPC9vcHRpb24+XHJcbiAgPC9zZWxlY3Q+XHJcbiAgPGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvc3RhcnQuc3ZnXCIgaGVpZ2h0PVwiMjJcIiBAY2xpY2s9XCJwbGF5QXVkaW9cIiBjbGFzcz1cInBsYXlcIiAvPlxyXG4gIDxzcGFuIGNsYXNzPVwicHJldmlld1wiPnt7IHQoJ2NsaWNrVG9QcmV2aWV3Lm1lc3NhZ2UnKSB9fTwvc3Bhbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnUG9tb2Rvcm9Tb3VuZHNTZWxlY3RvcicsXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cclxuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcclxuaW1wb3J0IHsgUG9tb2Rvcm9BdWRpb1BhcmFtcywgUG9tb2Rvcm9Tb3VuZHMgfSBmcm9tICcuLi91dGlscy9wb21vZG9ybyc7XHJcbmltcG9ydCB7IGluamVjdFN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL2luamVjdC1zdG9yYWdlJztcclxuaW1wb3J0IHsgcGxheVNvdW5kIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3BsYXlTb3VuZCc7XHJcblxyXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcclxuICBvcHRpb246IFBvbW9kb3JvQXVkaW9QYXJhbXM7XHJcbiAgdmFsdWU6IFBvbW9kb3JvU291bmRzO1xyXG59PigpO1xyXG5cclxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XHJcbmNvbnN0IHNldHRpbmdzU3RvcmFnZSA9IGluamVjdFN0b3JhZ2UoKTtcclxuY29uc3QgYXVkaW9BZnRlclBlcmlvZCA9IHJlZjxQb21vZG9yb1NvdW5kcz4ocHJvcHMudmFsdWUpO1xyXG5cclxuZnVuY3Rpb24gcGxheUF1ZGlvKCkge1xyXG4gIHBsYXlTb3VuZChhdWRpb0FmdGVyUGVyaW9kLnZhbHVlKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gb25BdWRpb0NoYW5nZSh0YXJnZXQ6IGFueSkge1xyXG4gIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUocHJvcHMub3B0aW9uLCB0YXJnZXQudmFsdWUpO1xyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnBsYXkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnRpdGxlLWF1ZGlvIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLnByZXZpZXcge1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcbi5vcHRpb24ge1xyXG4gIGhlaWdodDogMzhweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPHAgY2xhc3M9XCJ0aXRsZSBtdC0wXCI+e3sgdCgncG9tb2Rvcm8ubWVzc2FnZScpIH19PC9wPlxyXG4gIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cclxuICAgIHt7IHQoJ3BvbW9kb3JvLmRlc2NyaXB0aW9uJykgfX1cclxuICA8L3A+XHJcbiAgPGRpdiBjbGFzcz1cImV4cGxhbmF0aW9uLWJsb2NrXCI+XHJcbiAgICA8cCBjbGFzcz1cImV4cGxhbmF0aW9uXCI+XHJcbiAgICAgIHt7IHQoJ3BvbW9kb3JvRXhwbGFuYXRpb25JY29uLm1lc3NhZ2UnKSB9fVxyXG4gICAgICA8c3Bhbj48aW1nIGNsYXNzPVwibWwtNVwiIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9wb21vZG9yby5wbmdcIiBoZWlnaHQ9XCIzMFwiIC8+PC9zcGFuPi5cclxuICAgICAge3sgdCgncG9tb2Rvcm9FeHBsYW5hdGlvbkljb24uZGVzY3JpcHRpb24nKSB9fVxyXG4gICAgICA8aW1nIGNsYXNzPVwibWwtNVwiIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9wb21vZG9yby1yZXN0LnBuZ1wiIGhlaWdodD1cIjMwXCIgLz4uXHJcbiAgICA8L3A+XHJcbiAgICA8cCBjbGFzcz1cImV4cGxhbmF0aW9uXCI+XHJcbiAgICAgIHt7IHQoJ3BvbW9kb3JvRXhwbGFuYXRpb25UaW1lLm1lc3NhZ2UnKSB9fVxyXG4gICAgPC9wPlxyXG4gICAgPHAgY2xhc3M9XCJleHBsYW5hdGlvblwiPnt7IHQoJ3BvbW9kb3JvRXhwbGFuYXRpb25TdG9wLm1lc3NhZ2UnKSB9fTwvcD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IDpjbGFzcz1cImlzRW5hYmxlZCA/ICdkaXNhYmxlZCcgOiAnJ1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvbW9kb3JvLWJsb2NrIG10LTIwXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj57eyB0KCdwb21vZG9yb1dvcmsubWVzc2FnZScpIH19PC9wPlxyXG4gICAgICA8VnVlRGF0ZVBpY2tlciB2LW1vZGVsPVwid29ya1RpbWVcIiB0aW1lLXBpY2tlciBjbGFzcz1cImRhdGUtcGlja2VyXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInBvbW9kb3JvLWJsb2NrXCI+XHJcbiAgICAgIDxQb21vZG9yb1NvdW5kc1NlbGVjdG9yXHJcbiAgICAgICAgdi1pZj1cImF1ZGlvQWZ0ZXJXb3JrXCJcclxuICAgICAgICA6b3B0aW9uPVwiU3RvcmFnZVBhcmFtcy5QT01PRE9ST19BVURJT19BRlRFUl9XT1JLXCJcclxuICAgICAgICA6dmFsdWU9XCJhdWRpb0FmdGVyV29ya1wiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwb21vZG9yby1ibG9ja1wiPlxyXG4gICAgICA8cCBjbGFzcz1cInRpdGxlXCI+e3sgdCgncG9tb2Rvcm9SZXN0Lm1lc3NhZ2UnKSB9fTwvcD5cclxuICAgICAgPFZ1ZURhdGVQaWNrZXIgdi1tb2RlbD1cInJlc3RUaW1lXCIgdGltZS1waWNrZXIgY2xhc3M9XCJkYXRlLXBpY2tlclwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwb21vZG9yby1ibG9ja1wiPlxyXG4gICAgICA8UG9tb2Rvcm9Tb3VuZHNTZWxlY3RvclxyXG4gICAgICAgIHYtaWY9XCJhdWRpb0FmdGVyUmVzdFwiXHJcbiAgICAgICAgOm9wdGlvbj1cIlN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fQVVESU9fQUZURVJfUkVTVFwiXHJcbiAgICAgICAgOnZhbHVlPVwiYXVkaW9BZnRlclJlc3RcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG9tb2Rvcm8tYmxvY2tcIj5cclxuICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPnt7IHQoJ3BvbW9kb3JvRnJlcXVlbmN5Lm1lc3NhZ2UnKSB9fTwvcD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImZyZXF1ZW5jeVwiIHYtbW9kZWw9XCJmcmVxdWVuY3lcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG9tb2Rvcm8tYmxvY2tcIj5cclxuICAgICAgPFBvbW9kb3JvU291bmRzU2VsZWN0b3JcclxuICAgICAgICB2LWlmPVwiYXVkaW9BZnRlckZpbmlzaGVkXCJcclxuICAgICAgICA6b3B0aW9uPVwiU3RvcmFnZVBhcmFtcy5QT01PRE9ST19BVURJT19BRlRFUl9GSU5JU0hFRFwiXHJcbiAgICAgICAgOnZhbHVlPVwiYXVkaW9BZnRlckZpbmlzaGVkXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxidXR0b25cclxuICAgIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgbXQtMTVcIlxyXG4gICAgOmNsYXNzPVwiW2lzRW5hYmxlZCA/ICdzdG9wJyA6ICdzdGFydCcsIGlzRGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJyddXCJcclxuICAgIEBjbGljaz1cImNoYW5nZVN0YXR1cygpXCJcclxuICA+XHJcbiAgICA8aW1nIHYtaWY9XCJpc0VuYWJsZWRcIiBjbGFzcz1cIm1sLTVcIiBzcmM9XCIuLi9hc3NldHMvaWNvbnMvc3RvcC5zdmdcIiBoZWlnaHQ9XCIyMFwiIC8+XHJcbiAgICA8aW1nIHYtaWY9XCIhaXNFbmFibGVkXCIgY2xhc3M9XCJtbC01XCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zL3N0YXJ0LnN2Z1wiIGhlaWdodD1cIjIyXCIgLz5cclxuICAgIHt7ICFpc0VuYWJsZWQgPyB0KCdzdGFydC5tZXNzYWdlJykgOiB0KCdzdG9wLm1lc3NhZ2UnKSB9fVxyXG4gIDwvYnV0dG9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdQb21vZG9ybycsXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cclxuaW1wb3J0IHsgUmVmLCBjb21wdXRlZCwgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyBjb252ZXJ0SEhNTVRvU2Vjb25kcywgY29udmVydFNlY29uZHNUb0hITU0gfSBmcm9tICcuLi91dGlscy9jb252ZXJ0ZXInO1xyXG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xyXG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XHJcbmltcG9ydCB7XHJcbiAgSVNfUE9NT0RPUk9fRU5BQkxFRF9ERUZBVUxULFxyXG4gIFBPTU9ET1JPX0FVRElPX0FGVEVSX0ZJTklTSEVEX0RFRkFVTFQsXHJcbiAgUE9NT0RPUk9fQVVESU9fQUZURVJfUkVTVF9ERUZBVUxULFxyXG4gIFBPTU9ET1JPX0FVRElPX0FGVEVSX1dPUktfREVGQVVMVCxcclxuICBQT01PRE9ST19GUkVRVUVOQ1lfREVGQVVMVCxcclxuICBQT01PRE9ST19JTlRFUlZBTF9SRVNUX0RFRkFVTFQsXHJcbiAgUE9NT0RPUk9fSU5URVJWQUxfV09SS19ERUZBVUxULFxyXG4gIFN0b3JhZ2VQYXJhbXMsXHJcbn0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XHJcbmltcG9ydCB7IFRpbWUgfSBmcm9tICcuLi91dGlscy90aW1lJztcclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi4vdXRpbHMvbG9nZ2VyJztcclxuaW1wb3J0IHsgdXNlQmFkZ2UsIEJhZGdlQ29sb3IsIEJhZGdlSWNvbiB9IGZyb20gJy4uL2Z1bmN0aW9ucy91c2VCYWRnZSc7XHJcbmltcG9ydCB7IFBvbW9kb3JvU291bmRzIH0gZnJvbSAnLi4vdXRpbHMvcG9tb2Rvcm8nO1xyXG5pbXBvcnQgUG9tb2Rvcm9Tb3VuZHNTZWxlY3RvciBmcm9tICcuLi9jb21wb25lbnRzL1BvbW9kb3JvU291bmRzU2VsZWN0b3IudnVlJztcclxuaW1wb3J0IEJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcclxuXHJcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xyXG5jb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XHJcblxyXG5jb25zdCB3b3JrVGltZSA9IHJlZjxUaW1lPih7XHJcbiAgaG91cnM6IDAsXHJcbiAgbWludXRlczogMjUsXHJcbn0pO1xyXG5jb25zdCByZXN0VGltZSA9IHJlZjxUaW1lPih7XHJcbiAgaG91cnM6IDAsXHJcbiAgbWludXRlczogNSxcclxufSk7XHJcbmNvbnN0IGZyZXF1ZW5jeSA9IHJlZjxudW1iZXI+KDMpO1xyXG5jb25zdCBpc0VuYWJsZWQgPSByZWY8Ym9vbGVhbj4oKTtcclxuY29uc3QgYXVkaW9BZnRlcldvcmsgPSByZWY8UG9tb2Rvcm9Tb3VuZHM+KCk7XHJcbmNvbnN0IGF1ZGlvQWZ0ZXJSZXN0ID0gcmVmPFBvbW9kb3JvU291bmRzPigpO1xyXG5jb25zdCBhdWRpb0FmdGVyRmluaXNoZWQgPSByZWY8UG9tb2Rvcm9Tb3VuZHM+KCk7XHJcbmNvbnN0IGlzRGlzYWJsZWQgPSBjb21wdXRlZChcclxuICAoKSA9PiBmcmVxdWVuY3kudmFsdWUgPD0gMCB8fCB0aW1lSXNFbXB0eSh3b3JrVGltZSkgfHwgdGltZUlzRW1wdHkocmVzdFRpbWUpLFxyXG4pO1xyXG5cclxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcclxuICBpc0VuYWJsZWQudmFsdWUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXHJcbiAgICBTdG9yYWdlUGFyYW1zLklTX1BPTU9ET1JPX0VOQUJMRUQsXHJcbiAgICBJU19QT01PRE9ST19FTkFCTEVEX0RFRkFVTFQsXHJcbiAgKTtcclxuICB3b3JrVGltZS52YWx1ZSA9IGNvbnZlcnRTZWNvbmRzVG9ISE1NKFxyXG4gICAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxyXG4gICAgICBTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0lOVEVSVkFMX1dPUkssXHJcbiAgICAgIFBPTU9ET1JPX0lOVEVSVkFMX1dPUktfREVGQVVMVCxcclxuICAgICksXHJcbiAgKTtcclxuICByZXN0VGltZS52YWx1ZSA9IGNvbnZlcnRTZWNvbmRzVG9ISE1NKFxyXG4gICAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxyXG4gICAgICBTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0lOVEVSVkFMX1JFU1QsXHJcbiAgICAgIFBPTU9ET1JPX0lOVEVSVkFMX1JFU1RfREVGQVVMVCxcclxuICAgICksXHJcbiAgKTtcclxuICBmcmVxdWVuY3kudmFsdWUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXHJcbiAgICBTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0ZSRVFVRU5DWSxcclxuICAgIFBPTU9ET1JPX0ZSRVFVRU5DWV9ERUZBVUxULFxyXG4gICk7XHJcblxyXG4gIGF1ZGlvQWZ0ZXJXb3JrLnZhbHVlID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxyXG4gICAgU3RvcmFnZVBhcmFtcy5QT01PRE9ST19BVURJT19BRlRFUl9XT1JLLFxyXG4gICAgUE9NT0RPUk9fQVVESU9fQUZURVJfV09SS19ERUZBVUxULFxyXG4gICk7XHJcblxyXG4gIGF1ZGlvQWZ0ZXJSZXN0LnZhbHVlID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxyXG4gICAgU3RvcmFnZVBhcmFtcy5QT01PRE9ST19BVURJT19BRlRFUl9SRVNULFxyXG4gICAgUE9NT0RPUk9fQVVESU9fQUZURVJfUkVTVF9ERUZBVUxULFxyXG4gICk7XHJcblxyXG4gIGF1ZGlvQWZ0ZXJGaW5pc2hlZC52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcclxuICAgIFN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fQVVESU9fQUZURVJfRklOSVNIRUQsXHJcbiAgICBQT01PRE9ST19BVURJT19BRlRFUl9GSU5JU0hFRF9ERUZBVUxULFxyXG4gICk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdGltZUlzRW1wdHkodGltZTogUmVmPFRpbWUgfCB1bmRlZmluZWQ+KSB7XHJcbiAgcmV0dXJuIHRpbWUudmFsdWUgPT0gdW5kZWZpbmVkIHx8ICh0aW1lLnZhbHVlLmhvdXJzID09IDAgJiYgdGltZS52YWx1ZS5taW51dGVzID09IDApO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjaGFuZ2VTdGF0dXMoKSB7XHJcbiAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLnNhdmVWYWx1ZShTdG9yYWdlUGFyYW1zLklTX1BPTU9ET1JPX0VOQUJMRUQsICFpc0VuYWJsZWQudmFsdWUpO1xyXG4gIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoXHJcbiAgICBTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0lOVEVSVkFMX1dPUkssXHJcbiAgICBjb252ZXJ0SEhNTVRvU2Vjb25kcyh3b3JrVGltZS52YWx1ZS5ob3Vycywgd29ya1RpbWUudmFsdWUubWludXRlcyksXHJcbiAgKTtcclxuICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKFxyXG4gICAgU3RvcmFnZVBhcmFtcy5QT01PRE9ST19JTlRFUlZBTF9SRVNULFxyXG4gICAgY29udmVydEhITU1Ub1NlY29uZHMocmVzdFRpbWUudmFsdWUuaG91cnMsIHJlc3RUaW1lLnZhbHVlLm1pbnV0ZXMpLFxyXG4gICk7XHJcbiAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLnNhdmVWYWx1ZShTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX1NUQVJUX1RJTUUsIG5ldyBEYXRlKCkudG9TdHJpbmcoKSk7XHJcbiAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLnNhdmVWYWx1ZShTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0ZSRVFVRU5DWSwgZnJlcXVlbmN5LnZhbHVlKTtcclxuXHJcbiAgaXNFbmFibGVkLnZhbHVlID0gIWlzRW5hYmxlZC52YWx1ZTtcclxuXHJcbiAgaWYgKGlzRW5hYmxlZC52YWx1ZSlcclxuICAgIGF3YWl0IHVzZUJhZGdlKHtcclxuICAgICAgdGV4dDogbnVsbCxcclxuICAgICAgY29sb3I6IEJhZGdlQ29sb3Iubm9uZSxcclxuICAgICAgaWNvbjogQmFkZ2VJY29uLnBvbW9kb3JvV29ya2luZ1RpbWUsXHJcbiAgICB9KTtcclxuICBlbHNlIHtcclxuICAgIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoU3RvcmFnZVBhcmFtcy5QT01PRE9ST19TVEFSVF9USU1FLCBudWxsKTtcclxuICAgIGF3YWl0IHVzZUJhZGdlKHtcclxuICAgICAgdGV4dDogbnVsbCxcclxuICAgICAgY29sb3I6IEJhZGdlQ29sb3Iubm9uZSxcclxuICAgICAgaWNvbjogQmFkZ2VJY29uLmRlZmF1bHQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvZ2dlci5sb2coYENoYW5nZSBwb21vZG9ybyBzdGF0dXMgdG8gJHtTdHJpbmcoaXNFbmFibGVkLnZhbHVlKS50b1VwcGVyQ2FzZSgpfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGF5QXVkaW8oc291bmQ6IFBvbW9kb3JvU291bmRzKSB7XHJcbiAgY29uc3QgbXlBdWRpbyA9IG5ldyBBdWRpbyhCcm93c2VyLnJ1bnRpbWUuZ2V0VVJMKGBhc3NldHMvcG9tb2Rvcm8tc291bmRzLyR7c291bmR9YCkpO1xyXG4gIG15QXVkaW8ucGxheSgpO1xyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnBvbW9kb3JvLWJsb2NrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZGF0ZS1waWNrZXIge1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBtYXJnaW46IDAgMTVweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG4uZnJlcXVlbmN5IHtcclxuICB3aWR0aDogNTBweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmJsb2NrZWQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgbWFyZ2luLWxlZnQ6IDU1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5idXR0b24uc3RhcnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTQ4LCA2MikgIWltcG9ydGFudDtcclxufVxyXG5idXR0b24uc3RvcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MSwgNTksIDU5KSAhaW1wb3J0YW50O1xyXG59XHJcbi5leHBsYW5hdGlvbi1ibG9jayB7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkN2ZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmV4cGxhbmF0aW9uLWJsb2NrIC5leHBsYW5hdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uZGlzYWJsZWQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX19hZjE1YjE1ZF9fXCIiLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fYzZlNTM1YTBfX1wiIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJtYWluXCI+XHJcbiAgICA8cCBjbGFzcz1cImhlYWRlclwiPnt7IHQoJ3RyeU15T3RoZXJBcHBzLm1lc3NhZ2UnKSB9fTwvcD5cclxuICAgIDxkaXYgY2xhc3M9XCJhcHAtYmxvY2tcIiBAY2xpY2s9XCJvcGVuQXBwTGluayhBcHAuQ2xlYXJZb3V0dWJlKVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW1nLWJsb2NrXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvY2xlYXIteW91dHViZS1sb2dvLnN2Z1wiIGhlaWdodD1cIjQ1XCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPnt7IHQoJ2NsZWFyWW91dHViZS5tZXNzYWdlJykgfX08L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAge3sgdCgnY2xlYXJZb3V0dWJlLmRlc2NyaXB0aW9uJykgfX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYXBwLWJsb2NrXCIgQGNsaWNrPVwib3BlbkFwcExpbmsoQXBwLlRyYWNrZXJKYW0pXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbWctYmxvY2tcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy90cmFja2VyamFtLWxvZ28ucG5nXCIgaGVpZ2h0PVwiNDVcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cCBjbGFzcz1cInRpdGxlXCI+e3sgdCgndHJhY2tlcmphbS5tZXNzYWdlJykgfX08L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAge3sgdCgndHJhY2tlcmphbS5kZXNjcmlwdGlvbicpIH19XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdNeUFwcHMnLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XHJcbmltcG9ydCB7IENIUk9NRV9TVE9SRV9DTEVBUl9ZT1VUVUJFX1VSTCB9IGZyb20gJy4uL3V0aWxzL2Nocm9tZS11cmwnO1xyXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcclxuXHJcbmVudW0gQXBwIHtcclxuICBDbGVhcllvdXR1YmUsXHJcbiAgVHJhY2tlckphbSxcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlbkFwcExpbmsoYXBwOiBBcHApIHtcclxuICBzd2l0Y2ggKGFwcCkge1xyXG4gICAgY2FzZSBBcHAuQ2xlYXJZb3V0dWJlOlxyXG4gICAgICB3aW5kb3cub3BlbihDSFJPTUVfU1RPUkVfQ0xFQVJfWU9VVFVCRV9VUkwsICdfYmxhbmsnKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFwcC5UcmFja2VySmFtOlxyXG4gICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly90cmFja2VyamFtLmNvbS8/dXRtX3NvdXJjZT13YXR0X2V4dGVuc2lvbicsICdfYmxhbmsnKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLm1haW4ge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uYXBwLWJsb2NrIHtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtaW4td2lkdGg6IDY1NXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBnYXA6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hcHAtYmxvY2sgLmltZy1ibG9jayB7XHJcbiAgbWFyZ2luOiBhdXRvIDA7XHJcbn1cclxuLnRpdGxlIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmltZyB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiYWJvdXRcIj5cclxuICAgIDxsYWJlbCBjbGFzcz1cImFib3V0LWxhYmVsXCJcclxuICAgICAgPkdpdEh1YjpcclxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9TdGlnbWF0b3ovd2ViLWFjdGl2aXR5LXRpbWUtdHJhY2tlclwiIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgPmdpdGh1Yi5jb20vU3RpZ21hdG96L3dlYi1hY3Rpdml0eS10aW1lLXRyYWNrZXI8L2FcclxuICAgICAgPjwvbGFiZWxcclxuICAgID5cclxuICAgIDxsYWJlbCBjbGFzcz1cImFib3V0LWxhYmVsXCJcclxuICAgICAgPnt7IHQoJ2dpdGh1Yi5tZXNzYWdlJykgfX1cclxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9TdGlnbWF0b3ovd2ViLWFjdGl2aXR5LXRpbWUtdHJhY2tlci9pc3N1ZXNcIiB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgID5HaXRIdWIgaXNzdWVzIHBhZ2U8L2FcclxuICAgICAgPjwvbGFiZWxcclxuICAgID5cclxuICAgIDxsYWJlbCBjbGFzcz1cImFib3V0LWxhYmVsXCJcclxuICAgICAgPnt7IHQoJ3F1ZXN0aW9uLm1lc3NhZ2UnKSB9fVxyXG4gICAgICA8YSA6aHJlZj1cIkNIUk9NRV9TVE9SRV9TVVBQT1JUX1VSTFwiIHRhcmdldD1cIl9ibGFua1wiPnt7IHQoJ3N1cHBvcnRGb3JtLm1lc3NhZ2UnKSB9fTwvYVxyXG4gICAgICA+LjwvbGFiZWxcclxuICAgID5cclxuICAgIDxsYWJlbCBjbGFzcz1cImFib3V0LWxhYmVsXCJcclxuICAgICAgPnt7IHQoJ2RvWW91RW5qb3kubWVzc2FnZScpIH19XHJcbiAgICAgIDxhIDpocmVmPVwiQ0hST01FX1NUT1JFX1JFVklFV19VUkxcIiB0YXJnZXQ9XCJfYmxhbmtcIj57eyB0KCdyZXZpZXcubWVzc2FnZScpIH19PC9hPjwvbGFiZWxcclxuICAgID5cclxuICA8L2Rpdj5cclxuICA8TXlBcHBzIC8+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ0Fib3V0JyxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxyXG5pbXBvcnQgTXlBcHBzIGZyb20gJy4vTXlBcHBzLnZ1ZSc7XHJcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XHJcbmltcG9ydCB7IENIUk9NRV9TVE9SRV9TVVBQT1JUX1VSTCwgQ0hST01FX1NUT1JFX1JFVklFV19VUkwgfSBmcm9tICcuLi91dGlscy9jaHJvbWUtdXJsJztcclxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmFib3V0IC5hYm91dC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja1wiPlxyXG4gICAgICA8cCBjbGFzcz1cInRpdGxlXCI+e3sgdCgnYWxsVGltZS5tZXNzYWdlJykgfX08L3A+XHJcbiAgICAgIDxwIGNsYXNzPVwidmFsdWVcIj5cclxuICAgICAgICB7eyBjb252ZXJ0U3VtbWFyeVRpbWVUb1N0cmluZyhkZXRhaWxzLnN1bW1hcnlUaW1lKSB9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja1wiPlxyXG4gICAgICA8cCBjbGFzcz1cInRpdGxlXCI+e3sgdCgnc2Vzc2lvbnMubWVzc2FnZScpIH19PC9wPlxyXG4gICAgICA8cCBjbGFzcz1cInZhbHVlXCI+XHJcbiAgICAgICAge3sgZGV0YWlscy5zZXNzaW9ucyB9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja1wiPlxyXG4gICAgICA8cCBjbGFzcz1cInRpdGxlXCI+e3sgdCgnYXZlcmFnZURhaWx5VXNhZ2UubWVzc2FnZScpIH19PC9wPlxyXG4gICAgICA8cCBjbGFzcz1cInZhbHVlXCI+XHJcbiAgICAgICAge3sgY29udmVydFN1bW1hcnlUaW1lVG9TdHJpbmcoZGV0YWlscy5hdmVyYWdlVGltZSkgfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ1dlYnNpdGVTdGF0c0RldGFpbHMnLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XHJcbmltcG9ydCB7IFRhYkxpc3RCeURheXMgfSBmcm9tICcuLi9kdG8vdGFiTGlzdFN1bW1hcnknO1xyXG5pbXBvcnQgeyBjb252ZXJ0U3VtbWFyeVRpbWVUb1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL2NvbnZlcnRlcic7XHJcblxyXG5kZWZpbmVQcm9wczx7XHJcbiAgZGV0YWlsczogVGFiTGlzdEJ5RGF5cztcclxufT4oKTtcclxuXHJcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi50aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG4uYmxvY2sge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNyAyMzcgMjM3KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxuICBib3gtc2hhZG93OiAxMnB4IDEycHggMnB4IDFweCByZ2IoMTg1IDI1NSAxNzEpO1xyXG59XHJcbi5ibG9jayBwLnRpdGxlIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IGdyZXk7XHJcbn1cclxuLmJsb2NrIHAudmFsdWUge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCB7IEN1cnJlbnRUYWJJdGVtIH0gZnJvbSAnLi4vZHRvL2N1cnJlbnRUYWJJdGVtJztcclxuaW1wb3J0IHsgRGF5VGFicywgVGFiTGlzdEJ5RGF5cyB9IGZyb20gJy4uL2R0by90YWJMaXN0U3VtbWFyeSc7XHJcbmltcG9ydCB7IGluamVjdFRhYnNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vcmVwb3NpdG9yeS9pbmplY3QtdGFicy1yZXBvc2l0b3J5JztcclxuaW1wb3J0IHsgaXNTYW1lRGF5IH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVzZVRhYlN0YXRzQnlEYXlzKFxyXG4gIGRhdGVGcm9tOiBEYXRlLFxyXG4gIGRhdGVUbzogRGF0ZSxcclxuICBkb21haW46IHN0cmluZyxcclxuKTogUHJvbWlzZTxUYWJMaXN0QnlEYXlzIHwgbnVsbD4ge1xyXG4gIGNvbnN0IHJlcG8gPSBhd2FpdCBpbmplY3RUYWJzUmVwb3NpdG9yeSgpO1xyXG4gIGNvbnN0IHRhYiA9IHJlcG8uZ2V0VGFiKGRvbWFpbik7XHJcbiAgbGV0IGRheXNUYWJzOiBEYXlUYWJzW10gPSBbXTtcclxuXHJcbiAgaWYgKHRhYiA9PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG5cclxuICBjb25zdCBpc1RoZVNhbWVEYXkgPSBpc1NhbWVEYXkoZGF0ZUZyb20sIGRhdGVUbyk7XHJcblxyXG4gIGNvbnN0IHVuU29ydGVkVGFic0J5RGF5cyA9IGlzVGhlU2FtZURheVxyXG4gICAgPyB0YWIuZGF5cy5maWx0ZXIocyA9PiBpc1NhbWVEYXkobmV3IERhdGUocy5kYXRlKSwgZGF0ZUZyb20pKVxyXG4gICAgOiB0YWIuZGF5cy5maWx0ZXIocyA9PiBuZXcgRGF0ZShzLmRhdGUpID49IGRhdGVGcm9tICYmIG5ldyBEYXRlKHMuZGF0ZSkgPD0gZGF0ZVRvKTtcclxuXHJcbiAgaWYgKHVuU29ydGVkVGFic0J5RGF5cy5sZW5ndGggPT0gMClcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRheXM6IFtdLFxyXG4gICAgICBhdmVyYWdlVGltZTogMCxcclxuICAgICAgc3VtbWFyeVRpbWU6IDAsXHJcbiAgICAgIHNlc3Npb25zOiAwLFxyXG4gICAgfTtcclxuXHJcbiAgdW5Tb3J0ZWRUYWJzQnlEYXlzLmZvckVhY2godGFiRGF5ID0+IHtcclxuICAgIGlmIChcclxuICAgICAgKG5ldyBEYXRlKHRhYkRheS5kYXRlKSA+PSBkYXRlRnJvbSAmJiBuZXcgRGF0ZSh0YWJEYXkuZGF0ZSkgPD0gZGF0ZVRvKSB8fFxyXG4gICAgICAoaXNUaGVTYW1lRGF5ICYmIGlzU2FtZURheShuZXcgRGF0ZSh0YWJEYXkuZGF0ZSksIGRhdGVGcm9tKSlcclxuICAgICkge1xyXG4gICAgICBsZXQgZGF5VGFiID0gZGF5c1RhYnMuZmluZCh4ID0+IHguZGF5ID09IHRhYkRheS5kYXRlKTtcclxuICAgICAgaWYgKGRheVRhYiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBkYXlUYWIgPSB7XHJcbiAgICAgICAgICBkYXk6IHRhYkRheS5kYXRlLFxyXG4gICAgICAgICAgdGFiczogW10sXHJcbiAgICAgICAgICB0aW1lOiB0YWJEYXkuc3VtbWFyeSxcclxuICAgICAgICAgIHNlc3Npb25zOiB0YWJEYXkuY291bnRlcixcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRheVRhYi50YWJzLnB1c2goe1xyXG4gICAgICAgICAgZmF2aWNvbjogdGFiLmZhdmljb24sXHJcbiAgICAgICAgICB1cmw6IHRhYi51cmwsXHJcbiAgICAgICAgICBzZXNzaW9uczogdGFiRGF5LmNvdW50ZXIsXHJcbiAgICAgICAgICBzdW1tYXJ5VGltZTogdGFiRGF5LnN1bW1hcnksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGF5c1RhYnMucHVzaChkYXlUYWIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRheVRhYi50aW1lICs9IHRhYkRheS5zdW1tYXJ5O1xyXG4gICAgICAgIGRheVRhYi5zZXNzaW9ucyArPSB0YWJEYXkuY291bnRlcjtcclxuICAgICAgICBkYXlUYWIudGFicy5wdXNoKHtcclxuICAgICAgICAgIGZhdmljb246IHRhYi5mYXZpY29uLFxyXG4gICAgICAgICAgdXJsOiB0YWIudXJsLFxyXG4gICAgICAgICAgc2Vzc2lvbnM6IHRhYkRheS5jb3VudGVyLFxyXG4gICAgICAgICAgc3VtbWFyeVRpbWU6IHRhYkRheS5zdW1tYXJ5LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGRheXNUYWJzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZShhLmRheSkudmFsdWVPZigpIC0gbmV3IERhdGUoYi5kYXkpLnZhbHVlT2YoKTtcclxuICB9KTtcclxuXHJcbiAgZGF5c1RhYnMuZm9yRWFjaChkYXlUYWIgPT4ge1xyXG4gICAgZGF5VGFiLnRhYnMuc29ydChmdW5jdGlvbiAoYTogQ3VycmVudFRhYkl0ZW0sIGI6IEN1cnJlbnRUYWJJdGVtKSB7XHJcbiAgICAgIHJldHVybiBiLnN1bW1hcnlUaW1lIC0gYS5zdW1tYXJ5VGltZTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzdW1tYXJ5VGltZSA9IGRheXNUYWJzXHJcbiAgICAubWFwKHggPT4geC50aW1lKVxyXG4gICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICByZXR1cm4gYSArIGI7XHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3QgdG90YWxTZXNzaW9ucyA9IGRheXNUYWJzXHJcbiAgICAubWFwKHggPT4geC5zZXNzaW9ucylcclxuICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgcmV0dXJuIGEgKyBiO1xyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IGF2ZXJhZ2VUaW1lID0gTWF0aC5yb3VuZChzdW1tYXJ5VGltZSAvIGRheXNUYWJzLmxlbmd0aCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBkYXlzOiBkYXlzVGFicyxcclxuICAgIHN1bW1hcnlUaW1lOiBzdW1tYXJ5VGltZSxcclxuICAgIGF2ZXJhZ2VUaW1lOiBhdmVyYWdlVGltZSxcclxuICAgIHNlc3Npb25zOiB0b3RhbFNlc3Npb25zLFxyXG4gIH07XHJcbn1cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1pdGVtXCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJ0aXRsZSBsaW5rXCIgQGNsaWNrPVwib3BlblBhZ2UoU2V0dGluZ3NUYWIuRGFzaGJvYXJkKVwiPlxyXG4gICAgICB7eyB0KCdkYXNoYm9hcmQubWVzc2FnZScpIH19XHJcbiAgICA8L2xhYmVsPlxyXG4gICAgPGRpdiBjbGFzcz1cIm5vLWRhdGFcIiB2LWlmPVwiaXNMb2FkaW5nXCI+XHJcbiAgICAgIDxpbWcgaGVpZ2h0PVwiNTVcIiBzcmM9XCIuLi9hc3NldHMvaWNvbnMvcHJlbG9hZGVyLmdpZlwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgdi1lbHNlPlxyXG4gICAgICA8bm8tZGF0YS1ieS1kYXlzIHYtaWY9XCJjb3VudE9mRGF5cyA9PSB1bmRlZmluZWQgfHwgKGNvdW50T2ZEYXlzID09IDAgJiYgIW5vRGF0YSlcIiAvPlxyXG4gICAgICA8ZGl2IHYtZWxzZS1pZj1cIm5vRGF0YVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuby1kYXRhXCI+XHJcbiAgICAgICAgICB7eyB0KCdub0RhdGFGb3JQZXJpb2QubWVzc2FnZScpIH19XHJcbiAgICAgICAgICA8VnVlRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICByYW5nZVxyXG4gICAgICAgICAgICA6ZW5hYmxlLXRpbWUtcGlja2VyPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImRhdGUtcGlja2VyXCJcclxuICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkRGF0ZVwiXHJcbiAgICAgICAgICAgIDpwcmVzZXQtcmFuZ2VzPVwicHJlc2V0UmFuZ2VzXCJcclxuICAgICAgICAgICAgQHVwZGF0ZTptb2RlbC12YWx1ZT1cImhhbmRsZURhdGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgI3llYXJseT1cInsgbGFiZWwsIHJhbmdlLCBwcmVzZXREYXRlUmFuZ2UgfVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cInByZXNldERhdGVSYW5nZShyYW5nZSlcIj57eyBsYWJlbCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT48L1Z1ZURhdGVQaWNrZXJcclxuICAgICAgICAgID5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgdi1lbHNlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLWJsb2NrXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RmF2aWNvbiA6ZmF2aWNvbj1cInRhYj8uZmF2aWNvblwiIDp0eXBlPVwiZ2V0VHlwZU9mVXJsKHRhYj8udXJsISlcIiAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+IHt7IHRhYj8udXJsIH19PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPFZ1ZURhdGVQaWNrZXJcclxuICAgICAgICAgICAgcmFuZ2VcclxuICAgICAgICAgICAgOmVuYWJsZS10aW1lLXBpY2tlcj1cImZhbHNlXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJkYXRlLXBpY2tlciBtdC0xMFwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZERhdGVcIlxyXG4gICAgICAgICAgICA6cHJlc2V0LXJhbmdlcz1cInByZXNldFJhbmdlc1wiXHJcbiAgICAgICAgICAgIEB1cGRhdGU6bW9kZWwtdmFsdWU9XCJoYW5kbGVEYXRlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHRlbXBsYXRlICN5ZWFybHk9XCJ7IGxhYmVsLCByYW5nZSwgcHJlc2V0RGF0ZVJhbmdlIH1cIj5cclxuICAgICAgICAgICAgICA8c3BhbiBAY2xpY2s9XCJwcmVzZXREYXRlUmFuZ2UocmFuZ2UpXCI+e3sgbGFiZWwgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+PC9WdWVEYXRlUGlja2VyXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm10LTIwIG1sLTEwIG1yLTEwIGJ5LWRheXMtY2hhcnRcIj5cclxuICAgICAgICAgIDxieS1kYXlzLWNoYXJ0IDpkYXRhPVwidGFiSW5mb0J5RGF5cyFcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8d2Vic2l0ZS1zdGF0cy1kZXRhaWxzIDpkZXRhaWxzPVwidGFiSW5mb0J5RGF5cyFcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdXZWJzaXRlU3RhdHMnLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XHJcbmltcG9ydCBGYXZpY29uIGZyb20gJy4vRmF2aWNvbi52dWUnO1xyXG5pbXBvcnQgTm9EYXRhQnlEYXlzIGZyb20gJy4vTm9EYXRhQnlEYXlzLnZ1ZSc7XHJcbmltcG9ydCBCeURheXNDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL0J5RGF5c0NoYXJ0LnZ1ZSc7XHJcbmltcG9ydCBXZWJzaXRlU3RhdHNEZXRhaWxzIGZyb20gJy4uL2NvbXBvbmVudHMvV2Vic2l0ZVN0YXRzRGV0YWlscy52dWUnO1xyXG5pbXBvcnQgeyBvcGVuUGFnZSB9IGZyb20gJy4uL3V0aWxzL29wZW4tcGFnZSc7XHJcbmltcG9ydCB7IGNvbXB1dGVkLCBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCB7IFNldHRpbmdzVGFiIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xyXG5pbXBvcnQgeyBUaGlzV2Vla1JhbmdlLCByYW5nZXMgfSBmcm9tICcuLi91dGlscy9kYXRlJztcclxuaW1wb3J0IHsgdXNlVGFiU3RhdHNCeURheXMgfSBmcm9tICcuLi9mdW5jdGlvbnMvdXNlVGFiU3RhdHNCeURheXMnO1xyXG5pbXBvcnQgeyBUYWJMaXN0QnlEYXlzIH0gZnJvbSAnLi4vZHRvL3RhYkxpc3RTdW1tYXJ5JztcclxuaW1wb3J0IHsgVGFiIH0gZnJvbSAnLi4vZW50aXR5L3RhYic7XHJcbmltcG9ydCB7IGdldFR5cGVPZlVybCB9IGZyb20gJy4uL3V0aWxzL2dldC10eXBlLW9mLXVybCc7XHJcbmltcG9ydCB7IGluamVjdFRhYnNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vcmVwb3NpdG9yeS9pbmplY3QtdGFicy1yZXBvc2l0b3J5JztcclxuXHJcbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xyXG4gIGRvbWFpbjogc3RyaW5nO1xyXG59PigpO1xyXG5cclxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XHJcbmNvbnN0IHByZXNldFJhbmdlcyA9IHJhbmdlcygpO1xyXG5cclxuY29uc3QgdGFiSW5mb0J5RGF5cyA9IHJlZjxUYWJMaXN0QnlEYXlzPigpO1xyXG5jb25zdCBpc0xvYWRpbmcgPSByZWY8Ym9vbGVhbj4oKTtcclxuY29uc3Qgbm9EYXRhID0gcmVmPGJvb2xlYW4+KGZhbHNlKTtcclxuY29uc3Qgc2VsZWN0ZWREYXRlID0gcmVmPERhdGVbXT4oKTtcclxuY29uc3QgdGFiID0gcmVmPFRhYj4oKTtcclxuXHJcbmNvbnN0IGNvdW50T2ZEYXlzID0gY29tcHV0ZWQoKCkgPT5cclxuICB0YWJJbmZvQnlEYXlzLnZhbHVlICE9IHVuZGVmaW5lZCA/IHRhYkluZm9CeURheXMudmFsdWUuZGF5cy5sZW5ndGggOiAwLFxyXG4pO1xyXG5cclxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcclxuICBpc0xvYWRpbmcudmFsdWUgPSB0cnVlO1xyXG4gIHNlbGVjdGVkRGF0ZS52YWx1ZSA9IFRoaXNXZWVrUmFuZ2U7XHJcbiAgY29uc3QgZGF0ZUZyb20gPSBzZWxlY3RlZERhdGUudmFsdWU/LlswXSBhcyBEYXRlO1xyXG4gIGNvbnN0IGRhdGVUbyA9IHNlbGVjdGVkRGF0ZS52YWx1ZT8uWzFdIGFzIERhdGU7XHJcbiAgY29uc3QgcmVwbyA9IGF3YWl0IGluamVjdFRhYnNSZXBvc2l0b3J5KCk7XHJcbiAgdGFiLnZhbHVlID0gcmVwby5nZXRUYWIocHJvcHMuZG9tYWluKTtcclxuICBpZiAodGFiID09IHVuZGVmaW5lZCkge1xyXG4gICAgbm9EYXRhLnZhbHVlID0gdHJ1ZTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGF3YWl0IGxvYWRMaXN0KGRhdGVGcm9tLCBkYXRlVG8pO1xyXG59KTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRMaXN0KGRhdGVGcm9tOiBEYXRlLCBkYXRlVG86IERhdGUpIHtcclxuICBjb25zdCB0YWJMaXN0ID0gYXdhaXQgdXNlVGFiU3RhdHNCeURheXMoZGF0ZUZyb20sIGRhdGVUbywgdGFiLnZhbHVlPy51cmwhKTtcclxuICBpZiAodGFiTGlzdCAhPSBudWxsKSB7XHJcbiAgICB0YWJJbmZvQnlEYXlzLnZhbHVlID0gdGFiTGlzdDtcclxuICAgIGlmICh0YWJMaXN0LmRheXMubGVuZ3RoID09IDAgJiYgdGFiTGlzdC5zdW1tYXJ5VGltZSA9PSAwKSBub0RhdGEudmFsdWUgPSB0cnVlO1xyXG4gICAgZWxzZSBub0RhdGEudmFsdWUgPSBmYWxzZTtcclxuICB9XHJcbiAgaXNMb2FkaW5nLnZhbHVlID0gZmFsc2U7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZURhdGUobW9kZWxEYXRhOiBEYXRlW10pIHtcclxuICBzZWxlY3RlZERhdGUudmFsdWUgPSBtb2RlbERhdGE7XHJcbiAgY29uc3QgZGF0ZUZyb20gPSBzZWxlY3RlZERhdGUudmFsdWU/LlswXSBhcyBEYXRlO1xyXG4gIGNvbnN0IGRhdGVUbyA9IHNlbGVjdGVkRGF0ZS52YWx1ZT8uWzFdIGFzIERhdGU7XHJcbiAgYXdhaXQgbG9hZExpc3QoZGF0ZUZyb20sIGRhdGVUbyk7XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4ubGluayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5kYXRlLWJsb2NrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uYnktZGF5cy1jaGFydCB7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG48L3N0eWxlPlxyXG4iLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fMzU3NjFjODFfX1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfXzlkY2M4ZTM4X19cIiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzY2VuZGluZyhhLCBiKSB7XG4gIHJldHVybiBhID09IG51bGwgfHwgYiA9PSBudWxsID8gTmFOIDogYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IGEgPj0gYiA/IDAgOiBOYU47XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXNjZW5kaW5nKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT0gbnVsbCB8fCBiID09IG51bGwgPyBOYU5cbiAgICA6IGIgPCBhID8gLTFcbiAgICA6IGIgPiBhID8gMVxuICAgIDogYiA+PSBhID8gMFxuICAgIDogTmFOO1xufVxuIiwiaW1wb3J0IGFzY2VuZGluZyBmcm9tIFwiLi9hc2NlbmRpbmcuanNcIjtcbmltcG9ydCBkZXNjZW5kaW5nIGZyb20gXCIuL2Rlc2NlbmRpbmcuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmlzZWN0b3IoZikge1xuICBsZXQgY29tcGFyZTEsIGNvbXBhcmUyLCBkZWx0YTtcblxuICAvLyBJZiBhbiBhY2Nlc3NvciBpcyBzcGVjaWZpZWQsIHByb21vdGUgaXQgdG8gYSBjb21wYXJhdG9yLiBJbiB0aGlzIGNhc2Ugd2VcbiAgLy8gY2FuIHRlc3Qgd2hldGhlciB0aGUgc2VhcmNoIHZhbHVlIGlzIChzZWxmLSkgY29tcGFyYWJsZS4gV2UgY2Fu4oCZdCBkbyB0aGlzXG4gIC8vIGZvciBhIGNvbXBhcmF0b3IgKGV4Y2VwdCBmb3Igc3BlY2lmaWMsIGtub3duIGNvbXBhcmF0b3JzKSBiZWNhdXNlIHdlIGNhbuKAmXRcbiAgLy8gdGVsbCBpZiB0aGUgY29tcGFyYXRvciBpcyBzeW1tZXRyaWMsIGFuZCBhbiBhc3ltbWV0cmljIGNvbXBhcmF0b3IgY2Fu4oCZdCBiZVxuICAvLyB1c2VkIHRvIHRlc3Qgd2hldGhlciBhIHNpbmdsZSB2YWx1ZSBpcyBjb21wYXJhYmxlLlxuICBpZiAoZi5sZW5ndGggIT09IDIpIHtcbiAgICBjb21wYXJlMSA9IGFzY2VuZGluZztcbiAgICBjb21wYXJlMiA9IChkLCB4KSA9PiBhc2NlbmRpbmcoZihkKSwgeCk7XG4gICAgZGVsdGEgPSAoZCwgeCkgPT4gZihkKSAtIHg7XG4gIH0gZWxzZSB7XG4gICAgY29tcGFyZTEgPSBmID09PSBhc2NlbmRpbmcgfHwgZiA9PT0gZGVzY2VuZGluZyA/IGYgOiB6ZXJvO1xuICAgIGNvbXBhcmUyID0gZjtcbiAgICBkZWx0YSA9IGY7XG4gIH1cblxuICBmdW5jdGlvbiBsZWZ0KGEsIHgsIGxvID0gMCwgaGkgPSBhLmxlbmd0aCkge1xuICAgIGlmIChsbyA8IGhpKSB7XG4gICAgICBpZiAoY29tcGFyZTEoeCwgeCkgIT09IDApIHJldHVybiBoaTtcbiAgICAgIGRvIHtcbiAgICAgICAgY29uc3QgbWlkID0gKGxvICsgaGkpID4+PiAxO1xuICAgICAgICBpZiAoY29tcGFyZTIoYVttaWRdLCB4KSA8IDApIGxvID0gbWlkICsgMTtcbiAgICAgICAgZWxzZSBoaSA9IG1pZDtcbiAgICAgIH0gd2hpbGUgKGxvIDwgaGkpO1xuICAgIH1cbiAgICByZXR1cm4gbG87XG4gIH1cblxuICBmdW5jdGlvbiByaWdodChhLCB4LCBsbyA9IDAsIGhpID0gYS5sZW5ndGgpIHtcbiAgICBpZiAobG8gPCBoaSkge1xuICAgICAgaWYgKGNvbXBhcmUxKHgsIHgpICE9PSAwKSByZXR1cm4gaGk7XG4gICAgICBkbyB7XG4gICAgICAgIGNvbnN0IG1pZCA9IChsbyArIGhpKSA+Pj4gMTtcbiAgICAgICAgaWYgKGNvbXBhcmUyKGFbbWlkXSwgeCkgPD0gMCkgbG8gPSBtaWQgKyAxO1xuICAgICAgICBlbHNlIGhpID0gbWlkO1xuICAgICAgfSB3aGlsZSAobG8gPCBoaSk7XG4gICAgfVxuICAgIHJldHVybiBsbztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNlbnRlcihhLCB4LCBsbyA9IDAsIGhpID0gYS5sZW5ndGgpIHtcbiAgICBjb25zdCBpID0gbGVmdChhLCB4LCBsbywgaGkgLSAxKTtcbiAgICByZXR1cm4gaSA+IGxvICYmIGRlbHRhKGFbaSAtIDFdLCB4KSA+IC1kZWx0YShhW2ldLCB4KSA/IGkgLSAxIDogaTtcbiAgfVxuXG4gIHJldHVybiB7bGVmdCwgY2VudGVyLCByaWdodH07XG59XG5cbmZ1bmN0aW9uIHplcm8oKSB7XG4gIHJldHVybiAwO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbnVtYmVyKHgpIHtcbiAgcmV0dXJuIHggPT09IG51bGwgPyBOYU4gOiAreDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBudW1iZXJzKHZhbHVlcywgdmFsdWVvZikge1xuICBpZiAodmFsdWVvZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiAodmFsdWUgPSArdmFsdWUpID49IHZhbHVlKSB7XG4gICAgICAgIHlpZWxkIHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICgodmFsdWUgPSB2YWx1ZW9mKHZhbHVlLCArK2luZGV4LCB2YWx1ZXMpKSAhPSBudWxsICYmICh2YWx1ZSA9ICt2YWx1ZSkgPj0gdmFsdWUpIHtcbiAgICAgICAgeWllbGQgdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgYXNjZW5kaW5nIGZyb20gXCIuL2FzY2VuZGluZy5qc1wiO1xuaW1wb3J0IGJpc2VjdG9yIGZyb20gXCIuL2Jpc2VjdG9yLmpzXCI7XG5pbXBvcnQgbnVtYmVyIGZyb20gXCIuL251bWJlci5qc1wiO1xuXG5jb25zdCBhc2NlbmRpbmdCaXNlY3QgPSBiaXNlY3Rvcihhc2NlbmRpbmcpO1xuZXhwb3J0IGNvbnN0IGJpc2VjdFJpZ2h0ID0gYXNjZW5kaW5nQmlzZWN0LnJpZ2h0O1xuZXhwb3J0IGNvbnN0IGJpc2VjdExlZnQgPSBhc2NlbmRpbmdCaXNlY3QubGVmdDtcbmV4cG9ydCBjb25zdCBiaXNlY3RDZW50ZXIgPSBiaXNlY3RvcihudW1iZXIpLmNlbnRlcjtcbmV4cG9ydCBkZWZhdWx0IGJpc2VjdFJpZ2h0O1xuIiwiY29uc3QgZTEwID0gTWF0aC5zcXJ0KDUwKSxcbiAgICBlNSA9IE1hdGguc3FydCgxMCksXG4gICAgZTIgPSBNYXRoLnNxcnQoMik7XG5cbmZ1bmN0aW9uIHRpY2tTcGVjKHN0YXJ0LCBzdG9wLCBjb3VudCkge1xuICBjb25zdCBzdGVwID0gKHN0b3AgLSBzdGFydCkgLyBNYXRoLm1heCgwLCBjb3VudCksXG4gICAgICBwb3dlciA9IE1hdGguZmxvb3IoTWF0aC5sb2cxMChzdGVwKSksXG4gICAgICBlcnJvciA9IHN0ZXAgLyBNYXRoLnBvdygxMCwgcG93ZXIpLFxuICAgICAgZmFjdG9yID0gZXJyb3IgPj0gZTEwID8gMTAgOiBlcnJvciA+PSBlNSA/IDUgOiBlcnJvciA+PSBlMiA/IDIgOiAxO1xuICBsZXQgaTEsIGkyLCBpbmM7XG4gIGlmIChwb3dlciA8IDApIHtcbiAgICBpbmMgPSBNYXRoLnBvdygxMCwgLXBvd2VyKSAvIGZhY3RvcjtcbiAgICBpMSA9IE1hdGgucm91bmQoc3RhcnQgKiBpbmMpO1xuICAgIGkyID0gTWF0aC5yb3VuZChzdG9wICogaW5jKTtcbiAgICBpZiAoaTEgLyBpbmMgPCBzdGFydCkgKytpMTtcbiAgICBpZiAoaTIgLyBpbmMgPiBzdG9wKSAtLWkyO1xuICAgIGluYyA9IC1pbmM7XG4gIH0gZWxzZSB7XG4gICAgaW5jID0gTWF0aC5wb3coMTAsIHBvd2VyKSAqIGZhY3RvcjtcbiAgICBpMSA9IE1hdGgucm91bmQoc3RhcnQgLyBpbmMpO1xuICAgIGkyID0gTWF0aC5yb3VuZChzdG9wIC8gaW5jKTtcbiAgICBpZiAoaTEgKiBpbmMgPCBzdGFydCkgKytpMTtcbiAgICBpZiAoaTIgKiBpbmMgPiBzdG9wKSAtLWkyO1xuICB9XG4gIGlmIChpMiA8IGkxICYmIDAuNSA8PSBjb3VudCAmJiBjb3VudCA8IDIpIHJldHVybiB0aWNrU3BlYyhzdGFydCwgc3RvcCwgY291bnQgKiAyKTtcbiAgcmV0dXJuIFtpMSwgaTIsIGluY107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpY2tzKHN0YXJ0LCBzdG9wLCBjb3VudCkge1xuICBzdG9wID0gK3N0b3AsIHN0YXJ0ID0gK3N0YXJ0LCBjb3VudCA9ICtjb3VudDtcbiAgaWYgKCEoY291bnQgPiAwKSkgcmV0dXJuIFtdO1xuICBpZiAoc3RhcnQgPT09IHN0b3ApIHJldHVybiBbc3RhcnRdO1xuICBjb25zdCByZXZlcnNlID0gc3RvcCA8IHN0YXJ0LCBbaTEsIGkyLCBpbmNdID0gcmV2ZXJzZSA/IHRpY2tTcGVjKHN0b3AsIHN0YXJ0LCBjb3VudCkgOiB0aWNrU3BlYyhzdGFydCwgc3RvcCwgY291bnQpO1xuICBpZiAoIShpMiA+PSBpMSkpIHJldHVybiBbXTtcbiAgY29uc3QgbiA9IGkyIC0gaTEgKyAxLCB0aWNrcyA9IG5ldyBBcnJheShuKTtcbiAgaWYgKHJldmVyc2UpIHtcbiAgICBpZiAoaW5jIDwgMCkgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHRpY2tzW2ldID0gKGkyIC0gaSkgLyAtaW5jO1xuICAgIGVsc2UgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHRpY2tzW2ldID0gKGkyIC0gaSkgKiBpbmM7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGluYyA8IDApIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB0aWNrc1tpXSA9IChpMSArIGkpIC8gLWluYztcbiAgICBlbHNlIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB0aWNrc1tpXSA9IChpMSArIGkpICogaW5jO1xuICB9XG4gIHJldHVybiB0aWNrcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpY2tJbmNyZW1lbnQoc3RhcnQsIHN0b3AsIGNvdW50KSB7XG4gIHN0b3AgPSArc3RvcCwgc3RhcnQgPSArc3RhcnQsIGNvdW50ID0gK2NvdW50O1xuICByZXR1cm4gdGlja1NwZWMoc3RhcnQsIHN0b3AsIGNvdW50KVsyXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpY2tTdGVwKHN0YXJ0LCBzdG9wLCBjb3VudCkge1xuICBzdG9wID0gK3N0b3AsIHN0YXJ0ID0gK3N0YXJ0LCBjb3VudCA9ICtjb3VudDtcbiAgY29uc3QgcmV2ZXJzZSA9IHN0b3AgPCBzdGFydCwgaW5jID0gcmV2ZXJzZSA/IHRpY2tJbmNyZW1lbnQoc3RvcCwgc3RhcnQsIGNvdW50KSA6IHRpY2tJbmNyZW1lbnQoc3RhcnQsIHN0b3AsIGNvdW50KTtcbiAgcmV0dXJuIChyZXZlcnNlID8gLTEgOiAxKSAqIChpbmMgPCAwID8gMSAvIC1pbmMgOiBpbmMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4geDtcbn1cbiIsImltcG9ydCBpZGVudGl0eSBmcm9tIFwiLi9pZGVudGl0eS5qc1wiO1xuXG52YXIgdG9wID0gMSxcbiAgICByaWdodCA9IDIsXG4gICAgYm90dG9tID0gMyxcbiAgICBsZWZ0ID0gNCxcbiAgICBlcHNpbG9uID0gMWUtNjtcblxuZnVuY3Rpb24gdHJhbnNsYXRlWCh4KSB7XG4gIHJldHVybiBcInRyYW5zbGF0ZShcIiArIHggKyBcIiwwKVwiO1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVZKHkpIHtcbiAgcmV0dXJuIFwidHJhbnNsYXRlKDAsXCIgKyB5ICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIG51bWJlcihzY2FsZSkge1xuICByZXR1cm4gZCA9PiArc2NhbGUoZCk7XG59XG5cbmZ1bmN0aW9uIGNlbnRlcihzY2FsZSwgb2Zmc2V0KSB7XG4gIG9mZnNldCA9IE1hdGgubWF4KDAsIHNjYWxlLmJhbmR3aWR0aCgpIC0gb2Zmc2V0ICogMikgLyAyO1xuICBpZiAoc2NhbGUucm91bmQoKSkgb2Zmc2V0ID0gTWF0aC5yb3VuZChvZmZzZXQpO1xuICByZXR1cm4gZCA9PiArc2NhbGUoZCkgKyBvZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIGVudGVyaW5nKCkge1xuICByZXR1cm4gIXRoaXMuX19heGlzO1xufVxuXG5mdW5jdGlvbiBheGlzKG9yaWVudCwgc2NhbGUpIHtcbiAgdmFyIHRpY2tBcmd1bWVudHMgPSBbXSxcbiAgICAgIHRpY2tWYWx1ZXMgPSBudWxsLFxuICAgICAgdGlja0Zvcm1hdCA9IG51bGwsXG4gICAgICB0aWNrU2l6ZUlubmVyID0gNixcbiAgICAgIHRpY2tTaXplT3V0ZXIgPSA2LFxuICAgICAgdGlja1BhZGRpbmcgPSAzLFxuICAgICAgb2Zmc2V0ID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEgPyAwIDogMC41LFxuICAgICAgayA9IG9yaWVudCA9PT0gdG9wIHx8IG9yaWVudCA9PT0gbGVmdCA/IC0xIDogMSxcbiAgICAgIHggPSBvcmllbnQgPT09IGxlZnQgfHwgb3JpZW50ID09PSByaWdodCA/IFwieFwiIDogXCJ5XCIsXG4gICAgICB0cmFuc2Zvcm0gPSBvcmllbnQgPT09IHRvcCB8fCBvcmllbnQgPT09IGJvdHRvbSA/IHRyYW5zbGF0ZVggOiB0cmFuc2xhdGVZO1xuXG4gIGZ1bmN0aW9uIGF4aXMoY29udGV4dCkge1xuICAgIHZhciB2YWx1ZXMgPSB0aWNrVmFsdWVzID09IG51bGwgPyAoc2NhbGUudGlja3MgPyBzY2FsZS50aWNrcy5hcHBseShzY2FsZSwgdGlja0FyZ3VtZW50cykgOiBzY2FsZS5kb21haW4oKSkgOiB0aWNrVmFsdWVzLFxuICAgICAgICBmb3JtYXQgPSB0aWNrRm9ybWF0ID09IG51bGwgPyAoc2NhbGUudGlja0Zvcm1hdCA/IHNjYWxlLnRpY2tGb3JtYXQuYXBwbHkoc2NhbGUsIHRpY2tBcmd1bWVudHMpIDogaWRlbnRpdHkpIDogdGlja0Zvcm1hdCxcbiAgICAgICAgc3BhY2luZyA9IE1hdGgubWF4KHRpY2tTaXplSW5uZXIsIDApICsgdGlja1BhZGRpbmcsXG4gICAgICAgIHJhbmdlID0gc2NhbGUucmFuZ2UoKSxcbiAgICAgICAgcmFuZ2UwID0gK3JhbmdlWzBdICsgb2Zmc2V0LFxuICAgICAgICByYW5nZTEgPSArcmFuZ2VbcmFuZ2UubGVuZ3RoIC0gMV0gKyBvZmZzZXQsXG4gICAgICAgIHBvc2l0aW9uID0gKHNjYWxlLmJhbmR3aWR0aCA/IGNlbnRlciA6IG51bWJlcikoc2NhbGUuY29weSgpLCBvZmZzZXQpLFxuICAgICAgICBzZWxlY3Rpb24gPSBjb250ZXh0LnNlbGVjdGlvbiA/IGNvbnRleHQuc2VsZWN0aW9uKCkgOiBjb250ZXh0LFxuICAgICAgICBwYXRoID0gc2VsZWN0aW9uLnNlbGVjdEFsbChcIi5kb21haW5cIikuZGF0YShbbnVsbF0pLFxuICAgICAgICB0aWNrID0gc2VsZWN0aW9uLnNlbGVjdEFsbChcIi50aWNrXCIpLmRhdGEodmFsdWVzLCBzY2FsZSkub3JkZXIoKSxcbiAgICAgICAgdGlja0V4aXQgPSB0aWNrLmV4aXQoKSxcbiAgICAgICAgdGlja0VudGVyID0gdGljay5lbnRlcigpLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwidGlja1wiKSxcbiAgICAgICAgbGluZSA9IHRpY2suc2VsZWN0KFwibGluZVwiKSxcbiAgICAgICAgdGV4dCA9IHRpY2suc2VsZWN0KFwidGV4dFwiKTtcblxuICAgIHBhdGggPSBwYXRoLm1lcmdlKHBhdGguZW50ZXIoKS5pbnNlcnQoXCJwYXRoXCIsIFwiLnRpY2tcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImRvbWFpblwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcImN1cnJlbnRDb2xvclwiKSk7XG5cbiAgICB0aWNrID0gdGljay5tZXJnZSh0aWNrRW50ZXIpO1xuXG4gICAgbGluZSA9IGxpbmUubWVyZ2UodGlja0VudGVyLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJjdXJyZW50Q29sb3JcIilcbiAgICAgICAgLmF0dHIoeCArIFwiMlwiLCBrICogdGlja1NpemVJbm5lcikpO1xuXG4gICAgdGV4dCA9IHRleHQubWVyZ2UodGlja0VudGVyLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiY3VycmVudENvbG9yXCIpXG4gICAgICAgIC5hdHRyKHgsIGsgKiBzcGFjaW5nKVxuICAgICAgICAuYXR0cihcImR5XCIsIG9yaWVudCA9PT0gdG9wID8gXCIwZW1cIiA6IG9yaWVudCA9PT0gYm90dG9tID8gXCIwLjcxZW1cIiA6IFwiMC4zMmVtXCIpKTtcblxuICAgIGlmIChjb250ZXh0ICE9PSBzZWxlY3Rpb24pIHtcbiAgICAgIHBhdGggPSBwYXRoLnRyYW5zaXRpb24oY29udGV4dCk7XG4gICAgICB0aWNrID0gdGljay50cmFuc2l0aW9uKGNvbnRleHQpO1xuICAgICAgbGluZSA9IGxpbmUudHJhbnNpdGlvbihjb250ZXh0KTtcbiAgICAgIHRleHQgPSB0ZXh0LnRyYW5zaXRpb24oY29udGV4dCk7XG5cbiAgICAgIHRpY2tFeGl0ID0gdGlja0V4aXQudHJhbnNpdGlvbihjb250ZXh0KVxuICAgICAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCBlcHNpbG9uKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGlzRmluaXRlKGQgPSBwb3NpdGlvbihkKSkgPyB0cmFuc2Zvcm0oZCArIG9mZnNldCkgOiB0aGlzLmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTsgfSk7XG5cbiAgICAgIHRpY2tFbnRlclxuICAgICAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCBlcHNpbG9uKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgdmFyIHAgPSB0aGlzLnBhcmVudE5vZGUuX19heGlzOyByZXR1cm4gdHJhbnNmb3JtKChwICYmIGlzRmluaXRlKHAgPSBwKGQpKSA/IHAgOiBwb3NpdGlvbihkKSkgKyBvZmZzZXQpOyB9KTtcbiAgICB9XG5cbiAgICB0aWNrRXhpdC5yZW1vdmUoKTtcblxuICAgIHBhdGhcbiAgICAgICAgLmF0dHIoXCJkXCIsIG9yaWVudCA9PT0gbGVmdCB8fCBvcmllbnQgPT09IHJpZ2h0XG4gICAgICAgICAgICA/ICh0aWNrU2l6ZU91dGVyID8gXCJNXCIgKyBrICogdGlja1NpemVPdXRlciArIFwiLFwiICsgcmFuZ2UwICsgXCJIXCIgKyBvZmZzZXQgKyBcIlZcIiArIHJhbmdlMSArIFwiSFwiICsgayAqIHRpY2tTaXplT3V0ZXIgOiBcIk1cIiArIG9mZnNldCArIFwiLFwiICsgcmFuZ2UwICsgXCJWXCIgKyByYW5nZTEpXG4gICAgICAgICAgICA6ICh0aWNrU2l6ZU91dGVyID8gXCJNXCIgKyByYW5nZTAgKyBcIixcIiArIGsgKiB0aWNrU2l6ZU91dGVyICsgXCJWXCIgKyBvZmZzZXQgKyBcIkhcIiArIHJhbmdlMSArIFwiVlwiICsgayAqIHRpY2tTaXplT3V0ZXIgOiBcIk1cIiArIHJhbmdlMCArIFwiLFwiICsgb2Zmc2V0ICsgXCJIXCIgKyByYW5nZTEpKTtcblxuICAgIHRpY2tcbiAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIDEpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHRyYW5zZm9ybShwb3NpdGlvbihkKSArIG9mZnNldCk7IH0pO1xuXG4gICAgbGluZVxuICAgICAgICAuYXR0cih4ICsgXCIyXCIsIGsgKiB0aWNrU2l6ZUlubmVyKTtcblxuICAgIHRleHRcbiAgICAgICAgLmF0dHIoeCwgayAqIHNwYWNpbmcpXG4gICAgICAgIC50ZXh0KGZvcm1hdCk7XG5cbiAgICBzZWxlY3Rpb24uZmlsdGVyKGVudGVyaW5nKVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIDEwKVxuICAgICAgICAuYXR0cihcImZvbnQtZmFtaWx5XCIsIFwic2Fucy1zZXJpZlwiKVxuICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIG9yaWVudCA9PT0gcmlnaHQgPyBcInN0YXJ0XCIgOiBvcmllbnQgPT09IGxlZnQgPyBcImVuZFwiIDogXCJtaWRkbGVcIik7XG5cbiAgICBzZWxlY3Rpb25cbiAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7IHRoaXMuX19heGlzID0gcG9zaXRpb247IH0pO1xuICB9XG5cbiAgYXhpcy5zY2FsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzY2FsZSA9IF8sIGF4aXMpIDogc2NhbGU7XG4gIH07XG5cbiAgYXhpcy50aWNrcyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aWNrQXJndW1lbnRzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpLCBheGlzO1xuICB9O1xuXG4gIGF4aXMudGlja0FyZ3VtZW50cyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrQXJndW1lbnRzID0gXyA9PSBudWxsID8gW10gOiBBcnJheS5mcm9tKF8pLCBheGlzKSA6IHRpY2tBcmd1bWVudHMuc2xpY2UoKTtcbiAgfTtcblxuICBheGlzLnRpY2tWYWx1ZXMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGlja1ZhbHVlcyA9IF8gPT0gbnVsbCA/IG51bGwgOiBBcnJheS5mcm9tKF8pLCBheGlzKSA6IHRpY2tWYWx1ZXMgJiYgdGlja1ZhbHVlcy5zbGljZSgpO1xuICB9O1xuXG4gIGF4aXMudGlja0Zvcm1hdCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrRm9ybWF0ID0gXywgYXhpcykgOiB0aWNrRm9ybWF0O1xuICB9O1xuXG4gIGF4aXMudGlja1NpemUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGlja1NpemVJbm5lciA9IHRpY2tTaXplT3V0ZXIgPSArXywgYXhpcykgOiB0aWNrU2l6ZUlubmVyO1xuICB9O1xuXG4gIGF4aXMudGlja1NpemVJbm5lciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrU2l6ZUlubmVyID0gK18sIGF4aXMpIDogdGlja1NpemVJbm5lcjtcbiAgfTtcblxuICBheGlzLnRpY2tTaXplT3V0ZXIgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGlja1NpemVPdXRlciA9ICtfLCBheGlzKSA6IHRpY2tTaXplT3V0ZXI7XG4gIH07XG5cbiAgYXhpcy50aWNrUGFkZGluZyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrUGFkZGluZyA9ICtfLCBheGlzKSA6IHRpY2tQYWRkaW5nO1xuICB9O1xuXG4gIGF4aXMub2Zmc2V0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKG9mZnNldCA9ICtfLCBheGlzKSA6IG9mZnNldDtcbiAgfTtcblxuICByZXR1cm4gYXhpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aXNUb3Aoc2NhbGUpIHtcbiAgcmV0dXJuIGF4aXModG9wLCBzY2FsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlzUmlnaHQoc2NhbGUpIHtcbiAgcmV0dXJuIGF4aXMocmlnaHQsIHNjYWxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aXNCb3R0b20oc2NhbGUpIHtcbiAgcmV0dXJuIGF4aXMoYm90dG9tLCBzY2FsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlzTGVmdChzY2FsZSkge1xuICByZXR1cm4gYXhpcyhsZWZ0LCBzY2FsZSk7XG59XG4iLCJ2YXIgbm9vcCA9IHt2YWx1ZTogKCkgPT4ge319O1xuXG5mdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgZm9yICh2YXIgaSA9IDAsIG4gPSBhcmd1bWVudHMubGVuZ3RoLCBfID0ge30sIHQ7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAoISh0ID0gYXJndW1lbnRzW2ldICsgXCJcIikgfHwgKHQgaW4gXykgfHwgL1tcXHMuXS8udGVzdCh0KSkgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCB0eXBlOiBcIiArIHQpO1xuICAgIF9bdF0gPSBbXTtcbiAgfVxuICByZXR1cm4gbmV3IERpc3BhdGNoKF8pO1xufVxuXG5mdW5jdGlvbiBEaXNwYXRjaChfKSB7XG4gIHRoaXMuXyA9IF87XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lcywgdHlwZXMpIHtcbiAgcmV0dXJuIHR5cGVuYW1lcy50cmltKCkuc3BsaXQoL158XFxzKy8pLm1hcChmdW5jdGlvbih0KSB7XG4gICAgdmFyIG5hbWUgPSBcIlwiLCBpID0gdC5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoaSA+PSAwKSBuYW1lID0gdC5zbGljZShpICsgMSksIHQgPSB0LnNsaWNlKDAsIGkpO1xuICAgIGlmICh0ICYmICF0eXBlcy5oYXNPd25Qcm9wZXJ0eSh0KSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHQpO1xuICAgIHJldHVybiB7dHlwZTogdCwgbmFtZTogbmFtZX07XG4gIH0pO1xufVxuXG5EaXNwYXRjaC5wcm90b3R5cGUgPSBkaXNwYXRjaC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBEaXNwYXRjaCxcbiAgb246IGZ1bmN0aW9uKHR5cGVuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBfID0gdGhpcy5fLFxuICAgICAgICBUID0gcGFyc2VUeXBlbmFtZXModHlwZW5hbWUgKyBcIlwiLCBfKSxcbiAgICAgICAgdCxcbiAgICAgICAgaSA9IC0xLFxuICAgICAgICBuID0gVC5sZW5ndGg7XG5cbiAgICAvLyBJZiBubyBjYWxsYmFjayB3YXMgc3BlY2lmaWVkLCByZXR1cm4gdGhlIGNhbGxiYWNrIG9mIHRoZSBnaXZlbiB0eXBlIGFuZCBuYW1lLlxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGlmICgodCA9ICh0eXBlbmFtZSA9IFRbaV0pLnR5cGUpICYmICh0ID0gZ2V0KF9bdF0sIHR5cGVuYW1lLm5hbWUpKSkgcmV0dXJuIHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgYSB0eXBlIHdhcyBzcGVjaWZpZWQsIHNldCB0aGUgY2FsbGJhY2sgZm9yIHRoZSBnaXZlbiB0eXBlIGFuZCBuYW1lLlxuICAgIC8vIE90aGVyd2lzZSwgaWYgYSBudWxsIGNhbGxiYWNrIHdhcyBzcGVjaWZpZWQsIHJlbW92ZSBjYWxsYmFja3Mgb2YgdGhlIGdpdmVuIG5hbWUuXG4gICAgaWYgKGNhbGxiYWNrICE9IG51bGwgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgY2FsbGJhY2s6IFwiICsgY2FsbGJhY2spO1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAodCA9ICh0eXBlbmFtZSA9IFRbaV0pLnR5cGUpIF9bdF0gPSBzZXQoX1t0XSwgdHlwZW5hbWUubmFtZSwgY2FsbGJhY2spO1xuICAgICAgZWxzZSBpZiAoY2FsbGJhY2sgPT0gbnVsbCkgZm9yICh0IGluIF8pIF9bdF0gPSBzZXQoX1t0XSwgdHlwZW5hbWUubmFtZSwgbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGNvcHk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb3B5ID0ge30sIF8gPSB0aGlzLl87XG4gICAgZm9yICh2YXIgdCBpbiBfKSBjb3B5W3RdID0gX1t0XS5zbGljZSgpO1xuICAgIHJldHVybiBuZXcgRGlzcGF0Y2goY29weSk7XG4gIH0sXG4gIGNhbGw6IGZ1bmN0aW9uKHR5cGUsIHRoYXQpIHtcbiAgICBpZiAoKG4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMikgPiAwKSBmb3IgKHZhciBhcmdzID0gbmV3IEFycmF5KG4pLCBpID0gMCwgbiwgdDsgaSA8IG47ICsraSkgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgaWYgKCF0aGlzLl8uaGFzT3duUHJvcGVydHkodHlwZSkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0eXBlKTtcbiAgICBmb3IgKHQgPSB0aGlzLl9bdHlwZV0sIGkgPSAwLCBuID0gdC5sZW5ndGg7IGkgPCBuOyArK2kpIHRbaV0udmFsdWUuYXBwbHkodGhhdCwgYXJncyk7XG4gIH0sXG4gIGFwcGx5OiBmdW5jdGlvbih0eXBlLCB0aGF0LCBhcmdzKSB7XG4gICAgaWYgKCF0aGlzLl8uaGFzT3duUHJvcGVydHkodHlwZSkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0eXBlKTtcbiAgICBmb3IgKHZhciB0ID0gdGhpcy5fW3R5cGVdLCBpID0gMCwgbiA9IHQubGVuZ3RoOyBpIDwgbjsgKytpKSB0W2ldLnZhbHVlLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXQodHlwZSwgbmFtZSkge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IHR5cGUubGVuZ3RoLCBjOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKChjID0gdHlwZVtpXSkubmFtZSA9PT0gbmFtZSkge1xuICAgICAgcmV0dXJuIGMudmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldCh0eXBlLCBuYW1lLCBjYWxsYmFjaykge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IHR5cGUubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKHR5cGVbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgdHlwZVtpXSA9IG5vb3AsIHR5cGUgPSB0eXBlLnNsaWNlKDAsIGkpLmNvbmNhdCh0eXBlLnNsaWNlKGkgKyAxKSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaWYgKGNhbGxiYWNrICE9IG51bGwpIHR5cGUucHVzaCh7bmFtZTogbmFtZSwgdmFsdWU6IGNhbGxiYWNrfSk7XG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwYXRjaDtcbiIsImV4cG9ydCB2YXIgeGh0bWwgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdmc6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgeGh0bWw6IHhodG1sLFxuICB4bGluazogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXG4gIHhtbDogXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIlxufTtcbiIsImltcG9ydCBuYW1lc3BhY2VzIGZyb20gXCIuL25hbWVzcGFjZXMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgcHJlZml4ID0gbmFtZSArPSBcIlwiLCBpID0gcHJlZml4LmluZGV4T2YoXCI6XCIpO1xuICBpZiAoaSA+PSAwICYmIChwcmVmaXggPSBuYW1lLnNsaWNlKDAsIGkpKSAhPT0gXCJ4bWxuc1wiKSBuYW1lID0gbmFtZS5zbGljZShpICsgMSk7XG4gIHJldHVybiBuYW1lc3BhY2VzLmhhc093blByb3BlcnR5KHByZWZpeCkgPyB7c3BhY2U6IG5hbWVzcGFjZXNbcHJlZml4XSwgbG9jYWw6IG5hbWV9IDogbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbn1cbiIsImltcG9ydCBuYW1lc3BhY2UgZnJvbSBcIi4vbmFtZXNwYWNlLmpzXCI7XG5pbXBvcnQge3hodG1sfSBmcm9tIFwiLi9uYW1lc3BhY2VzLmpzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0b3JJbmhlcml0KG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBkb2N1bWVudCA9IHRoaXMub3duZXJEb2N1bWVudCxcbiAgICAgICAgdXJpID0gdGhpcy5uYW1lc3BhY2VVUkk7XG4gICAgcmV0dXJuIHVyaSA9PT0geGh0bWwgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0geGh0bWxcbiAgICAgICAgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpXG4gICAgICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHVyaSwgbmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0b3JGaXhlZChmdWxsbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSk7XG4gIHJldHVybiAoZnVsbG5hbWUubG9jYWxcbiAgICAgID8gY3JlYXRvckZpeGVkXG4gICAgICA6IGNyZWF0b3JJbmhlcml0KShmdWxsbmFtZSk7XG59XG4iLCJmdW5jdGlvbiBub25lKCkge31cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNlbGVjdG9yID09IG51bGwgPyBub25lIDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH07XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBzZWxlY3RvciBmcm9tIFwiLi4vc2VsZWN0b3IuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0KSB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0ICE9PSBcImZ1bmN0aW9uXCIpIHNlbGVjdCA9IHNlbGVjdG9yKHNlbGVjdCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzdWJncm91cCA9IHN1Ymdyb3Vwc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgc3Vibm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiAoc3Vibm9kZSA9IHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSkpIHtcbiAgICAgICAgaWYgKFwiX19kYXRhX19cIiBpbiBub2RlKSBzdWJub2RlLl9fZGF0YV9fID0gbm9kZS5fX2RhdGFfXztcbiAgICAgICAgc3ViZ3JvdXBbaV0gPSBzdWJub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHN1Ymdyb3VwcywgdGhpcy5fcGFyZW50cyk7XG59XG4iLCIvLyBHaXZlbiBzb21ldGhpbmcgYXJyYXkgbGlrZSAob3IgbnVsbCksIHJldHVybnMgc29tZXRoaW5nIHRoYXQgaXMgc3RyaWN0bHkgYW5cbi8vIGFycmF5LiBUaGlzIGlzIHVzZWQgdG8gZW5zdXJlIHRoYXQgYXJyYXktbGlrZSBvYmplY3RzIHBhc3NlZCB0byBkMy5zZWxlY3RBbGxcbi8vIG9yIHNlbGVjdGlvbi5zZWxlY3RBbGwgYXJlIGNvbnZlcnRlZCBpbnRvIHByb3BlciBhcnJheXMgd2hlbiBjcmVhdGluZyBhXG4vLyBzZWxlY3Rpb247IHdlIGRvbuKAmXQgZXZlciB3YW50IHRvIGNyZWF0ZSBhIHNlbGVjdGlvbiBiYWNrZWQgYnkgYSBsaXZlXG4vLyBIVE1MQ29sbGVjdGlvbiBvciBOb2RlTGlzdC4gSG93ZXZlciwgbm90ZSB0aGF0IHNlbGVjdGlvbi5zZWxlY3RBbGwgd2lsbCB1c2UgYVxuLy8gc3RhdGljIE5vZGVMaXN0IGFzIGEgZ3JvdXAsIHNpbmNlIGl0IHNhZmVseSBkZXJpdmVkIGZyb20gcXVlcnlTZWxlY3RvckFsbC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFycmF5KHgpIHtcbiAgcmV0dXJuIHggPT0gbnVsbCA/IFtdIDogQXJyYXkuaXNBcnJheSh4KSA/IHggOiBBcnJheS5mcm9tKHgpO1xufVxuIiwiZnVuY3Rpb24gZW1wdHkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNlbGVjdG9yID09IG51bGwgPyBlbXB0eSA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICB9O1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgYXJyYXkgZnJvbSBcIi4uL2FycmF5LmpzXCI7XG5pbXBvcnQgc2VsZWN0b3JBbGwgZnJvbSBcIi4uL3NlbGVjdG9yQWxsLmpzXCI7XG5cbmZ1bmN0aW9uIGFycmF5QWxsKHNlbGVjdCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGFycmF5KHNlbGVjdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0KSB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0ID09PSBcImZ1bmN0aW9uXCIpIHNlbGVjdCA9IGFycmF5QWxsKHNlbGVjdCk7XG4gIGVsc2Ugc2VsZWN0ID0gc2VsZWN0b3JBbGwoc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBbXSwgcGFyZW50cyA9IFtdLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBzdWJncm91cHMucHVzaChzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpO1xuICAgICAgICBwYXJlbnRzLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3ViZ3JvdXBzLCBwYXJlbnRzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoaWxkTWF0Y2hlcihzZWxlY3Rvcikge1xuICByZXR1cm4gZnVuY3Rpb24obm9kZSkge1xuICAgIHJldHVybiBub2RlLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9O1xufVxuXG4iLCJpbXBvcnQge2NoaWxkTWF0Y2hlcn0gZnJvbSBcIi4uL21hdGNoZXIuanNcIjtcblxudmFyIGZpbmQgPSBBcnJheS5wcm90b3R5cGUuZmluZDtcblxuZnVuY3Rpb24gY2hpbGRGaW5kKG1hdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZmluZC5jYWxsKHRoaXMuY2hpbGRyZW4sIG1hdGNoKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2hpbGRGaXJzdCgpIHtcbiAgcmV0dXJuIHRoaXMuZmlyc3RFbGVtZW50Q2hpbGQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIHJldHVybiB0aGlzLnNlbGVjdChtYXRjaCA9PSBudWxsID8gY2hpbGRGaXJzdFxuICAgICAgOiBjaGlsZEZpbmQodHlwZW9mIG1hdGNoID09PSBcImZ1bmN0aW9uXCIgPyBtYXRjaCA6IGNoaWxkTWF0Y2hlcihtYXRjaCkpKTtcbn1cbiIsImltcG9ydCB7Y2hpbGRNYXRjaGVyfSBmcm9tIFwiLi4vbWF0Y2hlci5qc1wiO1xuXG52YXIgZmlsdGVyID0gQXJyYXkucHJvdG90eXBlLmZpbHRlcjtcblxuZnVuY3Rpb24gY2hpbGRyZW4oKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKHRoaXMuY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBjaGlsZHJlbkZpbHRlcihtYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZpbHRlci5jYWxsKHRoaXMuY2hpbGRyZW4sIG1hdGNoKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWF0Y2gpIHtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0QWxsKG1hdGNoID09IG51bGwgPyBjaGlsZHJlblxuICAgICAgOiBjaGlsZHJlbkZpbHRlcih0eXBlb2YgbWF0Y2ggPT09IFwiZnVuY3Rpb25cIiA/IG1hdGNoIDogY2hpbGRNYXRjaGVyKG1hdGNoKSkpO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2hlciBmcm9tIFwiLi4vbWF0Y2hlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXRjaCkge1xuICBpZiAodHlwZW9mIG1hdGNoICE9PSBcImZ1bmN0aW9uXCIpIG1hdGNoID0gbWF0Y2hlcihtYXRjaCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzdWJncm91cCA9IHN1Ymdyb3Vwc1tqXSA9IFtdLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIG1hdGNoLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKSB7XG4gICAgICAgIHN1Ymdyb3VwLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICByZXR1cm4gbmV3IEFycmF5KHVwZGF0ZS5sZW5ndGgpO1xufVxuIiwiaW1wb3J0IHNwYXJzZSBmcm9tIFwiLi9zcGFyc2UuanNcIjtcbmltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24odGhpcy5fZW50ZXIgfHwgdGhpcy5fZ3JvdXBzLm1hcChzcGFyc2UpLCB0aGlzLl9wYXJlbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVudGVyTm9kZShwYXJlbnQsIGRhdHVtKSB7XG4gIHRoaXMub3duZXJEb2N1bWVudCA9IHBhcmVudC5vd25lckRvY3VtZW50O1xuICB0aGlzLm5hbWVzcGFjZVVSSSA9IHBhcmVudC5uYW1lc3BhY2VVUkk7XG4gIHRoaXMuX25leHQgPSBudWxsO1xuICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMuX19kYXRhX18gPSBkYXR1bTtcbn1cblxuRW50ZXJOb2RlLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IEVudGVyTm9kZSxcbiAgYXBwZW5kQ2hpbGQ6IGZ1bmN0aW9uKGNoaWxkKSB7IHJldHVybiB0aGlzLl9wYXJlbnQuaW5zZXJ0QmVmb3JlKGNoaWxkLCB0aGlzLl9uZXh0KTsgfSxcbiAgaW5zZXJ0QmVmb3JlOiBmdW5jdGlvbihjaGlsZCwgbmV4dCkgeyByZXR1cm4gdGhpcy5fcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgbmV4dCk7IH0sXG4gIHF1ZXJ5U2VsZWN0b3I6IGZ1bmN0aW9uKHNlbGVjdG9yKSB7IHJldHVybiB0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7IH0sXG4gIHF1ZXJ5U2VsZWN0b3JBbGw6IGZ1bmN0aW9uKHNlbGVjdG9yKSB7IHJldHVybiB0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7IH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHtFbnRlck5vZGV9IGZyb20gXCIuL2VudGVyLmpzXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4uL2NvbnN0YW50LmpzXCI7XG5cbmZ1bmN0aW9uIGJpbmRJbmRleChwYXJlbnQsIGdyb3VwLCBlbnRlciwgdXBkYXRlLCBleGl0LCBkYXRhKSB7XG4gIHZhciBpID0gMCxcbiAgICAgIG5vZGUsXG4gICAgICBncm91cExlbmd0aCA9IGdyb3VwLmxlbmd0aCxcbiAgICAgIGRhdGFMZW5ndGggPSBkYXRhLmxlbmd0aDtcblxuICAvLyBQdXQgYW55IG5vbi1udWxsIG5vZGVzIHRoYXQgZml0IGludG8gdXBkYXRlLlxuICAvLyBQdXQgYW55IG51bGwgbm9kZXMgaW50byBlbnRlci5cbiAgLy8gUHV0IGFueSByZW1haW5pbmcgZGF0YSBpbnRvIGVudGVyLlxuICBmb3IgKDsgaSA8IGRhdGFMZW5ndGg7ICsraSkge1xuICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgIG5vZGUuX19kYXRhX18gPSBkYXRhW2ldO1xuICAgICAgdXBkYXRlW2ldID0gbm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50ZXJbaV0gPSBuZXcgRW50ZXJOb2RlKHBhcmVudCwgZGF0YVtpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gUHV0IGFueSBub24tbnVsbCBub2RlcyB0aGF0IGRvbuKAmXQgZml0IGludG8gZXhpdC5cbiAgZm9yICg7IGkgPCBncm91cExlbmd0aDsgKytpKSB7XG4gICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgZXhpdFtpXSA9IG5vZGU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGJpbmRLZXkocGFyZW50LCBncm91cCwgZW50ZXIsIHVwZGF0ZSwgZXhpdCwgZGF0YSwga2V5KSB7XG4gIHZhciBpLFxuICAgICAgbm9kZSxcbiAgICAgIG5vZGVCeUtleVZhbHVlID0gbmV3IE1hcCxcbiAgICAgIGdyb3VwTGVuZ3RoID0gZ3JvdXAubGVuZ3RoLFxuICAgICAgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoLFxuICAgICAga2V5VmFsdWVzID0gbmV3IEFycmF5KGdyb3VwTGVuZ3RoKSxcbiAgICAgIGtleVZhbHVlO1xuXG4gIC8vIENvbXB1dGUgdGhlIGtleSBmb3IgZWFjaCBub2RlLlxuICAvLyBJZiBtdWx0aXBsZSBub2RlcyBoYXZlIHRoZSBzYW1lIGtleSwgdGhlIGR1cGxpY2F0ZXMgYXJlIGFkZGVkIHRvIGV4aXQuXG4gIGZvciAoaSA9IDA7IGkgPCBncm91cExlbmd0aDsgKytpKSB7XG4gICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAga2V5VmFsdWVzW2ldID0ga2V5VmFsdWUgPSBrZXkuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkgKyBcIlwiO1xuICAgICAgaWYgKG5vZGVCeUtleVZhbHVlLmhhcyhrZXlWYWx1ZSkpIHtcbiAgICAgICAgZXhpdFtpXSA9IG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlQnlLZXlWYWx1ZS5zZXQoa2V5VmFsdWUsIG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENvbXB1dGUgdGhlIGtleSBmb3IgZWFjaCBkYXR1bS5cbiAgLy8gSWYgdGhlcmUgYSBub2RlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGtleSwgam9pbiBhbmQgYWRkIGl0IHRvIHVwZGF0ZS5cbiAgLy8gSWYgdGhlcmUgaXMgbm90IChvciB0aGUga2V5IGlzIGEgZHVwbGljYXRlKSwgYWRkIGl0IHRvIGVudGVyLlxuICBmb3IgKGkgPSAwOyBpIDwgZGF0YUxlbmd0aDsgKytpKSB7XG4gICAga2V5VmFsdWUgPSBrZXkuY2FsbChwYXJlbnQsIGRhdGFbaV0sIGksIGRhdGEpICsgXCJcIjtcbiAgICBpZiAobm9kZSA9IG5vZGVCeUtleVZhbHVlLmdldChrZXlWYWx1ZSkpIHtcbiAgICAgIHVwZGF0ZVtpXSA9IG5vZGU7XG4gICAgICBub2RlLl9fZGF0YV9fID0gZGF0YVtpXTtcbiAgICAgIG5vZGVCeUtleVZhbHVlLmRlbGV0ZShrZXlWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGVyW2ldID0gbmV3IEVudGVyTm9kZShwYXJlbnQsIGRhdGFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBhbnkgcmVtYWluaW5nIG5vZGVzIHRoYXQgd2VyZSBub3QgYm91bmQgdG8gZGF0YSB0byBleGl0LlxuICBmb3IgKGkgPSAwOyBpIDwgZ3JvdXBMZW5ndGg7ICsraSkge1xuICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiAobm9kZUJ5S2V5VmFsdWUuZ2V0KGtleVZhbHVlc1tpXSkgPT09IG5vZGUpKSB7XG4gICAgICBleGl0W2ldID0gbm9kZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGF0dW0obm9kZSkge1xuICByZXR1cm4gbm9kZS5fX2RhdGFfXztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBBcnJheS5mcm9tKHRoaXMsIGRhdHVtKTtcblxuICB2YXIgYmluZCA9IGtleSA/IGJpbmRLZXkgOiBiaW5kSW5kZXgsXG4gICAgICBwYXJlbnRzID0gdGhpcy5fcGFyZW50cyxcbiAgICAgIGdyb3VwcyA9IHRoaXMuX2dyb3VwcztcblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHZhbHVlID0gY29uc3RhbnQodmFsdWUpO1xuXG4gIGZvciAodmFyIG0gPSBncm91cHMubGVuZ3RoLCB1cGRhdGUgPSBuZXcgQXJyYXkobSksIGVudGVyID0gbmV3IEFycmF5KG0pLCBleGl0ID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIHZhciBwYXJlbnQgPSBwYXJlbnRzW2pdLFxuICAgICAgICBncm91cCA9IGdyb3Vwc1tqXSxcbiAgICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICAgIGRhdGEgPSBhcnJheWxpa2UodmFsdWUuY2FsbChwYXJlbnQsIHBhcmVudCAmJiBwYXJlbnQuX19kYXRhX18sIGosIHBhcmVudHMpKSxcbiAgICAgICAgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoLFxuICAgICAgICBlbnRlckdyb3VwID0gZW50ZXJbal0gPSBuZXcgQXJyYXkoZGF0YUxlbmd0aCksXG4gICAgICAgIHVwZGF0ZUdyb3VwID0gdXBkYXRlW2pdID0gbmV3IEFycmF5KGRhdGFMZW5ndGgpLFxuICAgICAgICBleGl0R3JvdXAgPSBleGl0W2pdID0gbmV3IEFycmF5KGdyb3VwTGVuZ3RoKTtcblxuICAgIGJpbmQocGFyZW50LCBncm91cCwgZW50ZXJHcm91cCwgdXBkYXRlR3JvdXAsIGV4aXRHcm91cCwgZGF0YSwga2V5KTtcblxuICAgIC8vIE5vdyBjb25uZWN0IHRoZSBlbnRlciBub2RlcyB0byB0aGVpciBmb2xsb3dpbmcgdXBkYXRlIG5vZGUsIHN1Y2ggdGhhdFxuICAgIC8vIGFwcGVuZENoaWxkIGNhbiBpbnNlcnQgdGhlIG1hdGVyaWFsaXplZCBlbnRlciBub2RlIGJlZm9yZSB0aGlzIG5vZGUsXG4gICAgLy8gcmF0aGVyIHRoYW4gYXQgdGhlIGVuZCBvZiB0aGUgcGFyZW50IG5vZGUuXG4gICAgZm9yICh2YXIgaTAgPSAwLCBpMSA9IDAsIHByZXZpb3VzLCBuZXh0OyBpMCA8IGRhdGFMZW5ndGg7ICsraTApIHtcbiAgICAgIGlmIChwcmV2aW91cyA9IGVudGVyR3JvdXBbaTBdKSB7XG4gICAgICAgIGlmIChpMCA+PSBpMSkgaTEgPSBpMCArIDE7XG4gICAgICAgIHdoaWxlICghKG5leHQgPSB1cGRhdGVHcm91cFtpMV0pICYmICsraTEgPCBkYXRhTGVuZ3RoKTtcbiAgICAgICAgcHJldmlvdXMuX25leHQgPSBuZXh0IHx8IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlID0gbmV3IFNlbGVjdGlvbih1cGRhdGUsIHBhcmVudHMpO1xuICB1cGRhdGUuX2VudGVyID0gZW50ZXI7XG4gIHVwZGF0ZS5fZXhpdCA9IGV4aXQ7XG4gIHJldHVybiB1cGRhdGU7XG59XG5cbi8vIEdpdmVuIHNvbWUgZGF0YSwgdGhpcyByZXR1cm5zIGFuIGFycmF5LWxpa2UgdmlldyBvZiBpdDogYW4gb2JqZWN0IHRoYXRcbi8vIGV4cG9zZXMgYSBsZW5ndGggcHJvcGVydHkgYW5kIGFsbG93cyBudW1lcmljIGluZGV4aW5nLiBOb3RlIHRoYXQgdW5saWtlXG4vLyBzZWxlY3RBbGwsIHRoaXMgaXNu4oCZdCB3b3JyaWVkIGFib3V0IOKAnGxpdmXigJ0gY29sbGVjdGlvbnMgYmVjYXVzZSB0aGUgcmVzdWx0aW5nXG4vLyBhcnJheSB3aWxsIG9ubHkgYmUgdXNlZCBicmllZmx5IHdoaWxlIGRhdGEgaXMgYmVpbmcgYm91bmQuIChJdCBpcyBwb3NzaWJsZSB0b1xuLy8gY2F1c2UgdGhlIGRhdGEgdG8gY2hhbmdlIHdoaWxlIGl0ZXJhdGluZyBieSB1c2luZyBhIGtleSBmdW5jdGlvbiwgYnV0IHBsZWFzZVxuLy8gZG9u4oCZdDsgd2XigJlkIHJhdGhlciBhdm9pZCBhIGdyYXR1aXRvdXMgY29weS4pXG5mdW5jdGlvbiBhcnJheWxpa2UoZGF0YSkge1xuICByZXR1cm4gdHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIgJiYgXCJsZW5ndGhcIiBpbiBkYXRhXG4gICAgPyBkYXRhIC8vIEFycmF5LCBUeXBlZEFycmF5LCBOb2RlTGlzdCwgYXJyYXktbGlrZVxuICAgIDogQXJyYXkuZnJvbShkYXRhKTsgLy8gTWFwLCBTZXQsIGl0ZXJhYmxlLCBzdHJpbmcsIG9yIGFueXRoaW5nIGVsc2Vcbn1cbiIsImltcG9ydCBzcGFyc2UgZnJvbSBcIi4vc3BhcnNlLmpzXCI7XG5pbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHRoaXMuX2V4aXQgfHwgdGhpcy5fZ3JvdXBzLm1hcChzcGFyc2UpLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9uZW50ZXIsIG9udXBkYXRlLCBvbmV4aXQpIHtcbiAgdmFyIGVudGVyID0gdGhpcy5lbnRlcigpLCB1cGRhdGUgPSB0aGlzLCBleGl0ID0gdGhpcy5leGl0KCk7XG4gIGlmICh0eXBlb2Ygb25lbnRlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZW50ZXIgPSBvbmVudGVyKGVudGVyKTtcbiAgICBpZiAoZW50ZXIpIGVudGVyID0gZW50ZXIuc2VsZWN0aW9uKCk7XG4gIH0gZWxzZSB7XG4gICAgZW50ZXIgPSBlbnRlci5hcHBlbmQob25lbnRlciArIFwiXCIpO1xuICB9XG4gIGlmIChvbnVwZGF0ZSAhPSBudWxsKSB7XG4gICAgdXBkYXRlID0gb251cGRhdGUodXBkYXRlKTtcbiAgICBpZiAodXBkYXRlKSB1cGRhdGUgPSB1cGRhdGUuc2VsZWN0aW9uKCk7XG4gIH1cbiAgaWYgKG9uZXhpdCA9PSBudWxsKSBleGl0LnJlbW92ZSgpOyBlbHNlIG9uZXhpdChleGl0KTtcbiAgcmV0dXJuIGVudGVyICYmIHVwZGF0ZSA/IGVudGVyLm1lcmdlKHVwZGF0ZSkub3JkZXIoKSA6IHVwZGF0ZTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XG4gIHZhciBzZWxlY3Rpb24gPSBjb250ZXh0LnNlbGVjdGlvbiA/IGNvbnRleHQuc2VsZWN0aW9uKCkgOiBjb250ZXh0O1xuXG4gIGZvciAodmFyIGdyb3VwczAgPSB0aGlzLl9ncm91cHMsIGdyb3VwczEgPSBzZWxlY3Rpb24uX2dyb3VwcywgbTAgPSBncm91cHMwLmxlbmd0aCwgbTEgPSBncm91cHMxLmxlbmd0aCwgbSA9IE1hdGgubWluKG0wLCBtMSksIG1lcmdlcyA9IG5ldyBBcnJheShtMCksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAwID0gZ3JvdXBzMFtqXSwgZ3JvdXAxID0gZ3JvdXBzMVtqXSwgbiA9IGdyb3VwMC5sZW5ndGgsIG1lcmdlID0gbWVyZ2VzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cDBbaV0gfHwgZ3JvdXAxW2ldKSB7XG4gICAgICAgIG1lcmdlW2ldID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKDsgaiA8IG0wOyArK2opIHtcbiAgICBtZXJnZXNbal0gPSBncm91cHMwW2pdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24obWVyZ2VzLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgaiA9IC0xLCBtID0gZ3JvdXBzLmxlbmd0aDsgKytqIDwgbTspIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgaSA9IGdyb3VwLmxlbmd0aCAtIDEsIG5leHQgPSBncm91cFtpXSwgbm9kZTsgLS1pID49IDA7KSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIGlmIChuZXh0ICYmIG5vZGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24obmV4dCkgXiA0KSBuZXh0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIG5leHQpO1xuICAgICAgICBuZXh0ID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb21wYXJlKSB7XG4gIGlmICghY29tcGFyZSkgY29tcGFyZSA9IGFzY2VuZGluZztcblxuICBmdW5jdGlvbiBjb21wYXJlTm9kZShhLCBiKSB7XG4gICAgcmV0dXJuIGEgJiYgYiA/IGNvbXBhcmUoYS5fX2RhdGFfXywgYi5fX2RhdGFfXykgOiAhYSAtICFiO1xuICB9XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc29ydGdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc29ydGdyb3VwID0gc29ydGdyb3Vwc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgc29ydGdyb3VwW2ldID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgc29ydGdyb3VwLnNvcnQoY29tcGFyZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc29ydGdyb3VwcywgdGhpcy5fcGFyZW50cykub3JkZXIoKTtcbn1cblxuZnVuY3Rpb24gYXNjZW5kaW5nKGEsIGIpIHtcbiAgcmV0dXJuIGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiBhID49IGIgPyAwIDogTmFOO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1swXTtcbiAgYXJndW1lbnRzWzBdID0gdGhpcztcbiAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20odGhpcyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAwLCBtID0gZ3JvdXBzLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgdmFyIG5vZGUgPSBncm91cFtpXTtcbiAgICAgIGlmIChub2RlKSByZXR1cm4gbm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICBsZXQgc2l6ZSA9IDA7XG4gIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzKSArK3NpemU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuIHNpemU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICF0aGlzLm5vZGUoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gMCwgbSA9IGdyb3Vwcy5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgaSA9IDAsIG4gPSBncm91cC5sZW5ndGgsIG5vZGU7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIGNhbGxiYWNrLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuIiwiaW1wb3J0IG5hbWVzcGFjZSBmcm9tIFwiLi4vbmFtZXNwYWNlLmpzXCI7XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmVOUyhmdWxsbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyQ29uc3RhbnQobmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50TlMoZnVsbG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCwgdmFsdWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICBlbHNlIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb25OUyhmdWxsbmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgZWxzZSB0aGlzLnNldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCwgdik7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKTtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMubm9kZSgpO1xuICAgIHJldHVybiBmdWxsbmFtZS5sb2NhbFxuICAgICAgICA/IG5vZGUuZ2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKVxuICAgICAgICA6IG5vZGUuZ2V0QXR0cmlidXRlKGZ1bGxuYW1lKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVhY2goKHZhbHVlID09IG51bGxcbiAgICAgID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0clJlbW92ZU5TIDogYXR0clJlbW92ZSkgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0ckZ1bmN0aW9uTlMgOiBhdHRyRnVuY3Rpb24pXG4gICAgICA6IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJDb25zdGFudE5TIDogYXR0ckNvbnN0YW50KSkpKGZ1bGxuYW1lLCB2YWx1ZSkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSkge1xuICByZXR1cm4gKG5vZGUub3duZXJEb2N1bWVudCAmJiBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpIC8vIG5vZGUgaXMgYSBOb2RlXG4gICAgICB8fCAobm9kZS5kb2N1bWVudCAmJiBub2RlKSAvLyBub2RlIGlzIGEgV2luZG93XG4gICAgICB8fCBub2RlLmRlZmF1bHRWaWV3OyAvLyBub2RlIGlzIGEgRG9jdW1lbnRcbn1cbiIsImltcG9ydCBkZWZhdWx0VmlldyBmcm9tIFwiLi4vd2luZG93LmpzXCI7XG5cbmZ1bmN0aW9uIHN0eWxlUmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlQ29uc3RhbnQobmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHZhbHVlLCBwcmlvcml0eSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlRnVuY3Rpb24obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgICBlbHNlIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdiwgcHJpb3JpdHkpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAxXG4gICAgICA/IHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbFxuICAgICAgICAgICAgPyBzdHlsZVJlbW92ZSA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICA/IHN0eWxlRnVuY3Rpb25cbiAgICAgICAgICAgIDogc3R5bGVDb25zdGFudCkobmFtZSwgdmFsdWUsIHByaW9yaXR5ID09IG51bGwgPyBcIlwiIDogcHJpb3JpdHkpKVxuICAgICAgOiBzdHlsZVZhbHVlKHRoaXMubm9kZSgpLCBuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlVmFsdWUobm9kZSwgbmFtZSkge1xuICByZXR1cm4gbm9kZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpXG4gICAgICB8fCBkZWZhdWx0Vmlldyhub2RlKS5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUobmFtZSk7XG59XG4iLCJmdW5jdGlvbiBwcm9wZXJ0eVJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgdGhpc1tuYW1lXTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydHlDb25zdGFudChuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpc1tuYW1lXSA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eUZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgZGVsZXRlIHRoaXNbbmFtZV07XG4gICAgZWxzZSB0aGlzW25hbWVdID0gdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAxXG4gICAgICA/IHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbFxuICAgICAgICAgID8gcHJvcGVydHlSZW1vdmUgOiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gcHJvcGVydHlGdW5jdGlvblxuICAgICAgICAgIDogcHJvcGVydHlDb25zdGFudCkobmFtZSwgdmFsdWUpKVxuICAgICAgOiB0aGlzLm5vZGUoKVtuYW1lXTtcbn1cbiIsImZ1bmN0aW9uIGNsYXNzQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcudHJpbSgpLnNwbGl0KC9efFxccysvKTtcbn1cblxuZnVuY3Rpb24gY2xhc3NMaXN0KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuY2xhc3NMaXN0IHx8IG5ldyBDbGFzc0xpc3Qobm9kZSk7XG59XG5cbmZ1bmN0aW9uIENsYXNzTGlzdChub2RlKSB7XG4gIHRoaXMuX25vZGUgPSBub2RlO1xuICB0aGlzLl9uYW1lcyA9IGNsYXNzQXJyYXkobm9kZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiKTtcbn1cblxuQ2xhc3NMaXN0LnByb3RvdHlwZSA9IHtcbiAgYWRkOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIGkgPSB0aGlzLl9uYW1lcy5pbmRleE9mKG5hbWUpO1xuICAgIGlmIChpIDwgMCkge1xuICAgICAgdGhpcy5fbmFtZXMucHVzaChuYW1lKTtcbiAgICAgIHRoaXMuX25vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgdGhpcy5fbmFtZXMuam9pbihcIiBcIikpO1xuICAgIH1cbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIGkgPSB0aGlzLl9uYW1lcy5pbmRleE9mKG5hbWUpO1xuICAgIGlmIChpID49IDApIHtcbiAgICAgIHRoaXMuX25hbWVzLnNwbGljZShpLCAxKTtcbiAgICAgIHRoaXMuX25vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgdGhpcy5fbmFtZXMuam9pbihcIiBcIikpO1xuICAgIH1cbiAgfSxcbiAgY29udGFpbnM6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZXMuaW5kZXhPZihuYW1lKSA+PSAwO1xuICB9XG59O1xuXG5mdW5jdGlvbiBjbGFzc2VkQWRkKG5vZGUsIG5hbWVzKSB7XG4gIHZhciBsaXN0ID0gY2xhc3NMaXN0KG5vZGUpLCBpID0gLTEsIG4gPSBuYW1lcy5sZW5ndGg7XG4gIHdoaWxlICgrK2kgPCBuKSBsaXN0LmFkZChuYW1lc1tpXSk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRSZW1vdmUobm9kZSwgbmFtZXMpIHtcbiAgdmFyIGxpc3QgPSBjbGFzc0xpc3Qobm9kZSksIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgd2hpbGUgKCsraSA8IG4pIGxpc3QucmVtb3ZlKG5hbWVzW2ldKTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZFRydWUobmFtZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNsYXNzZWRBZGQodGhpcywgbmFtZXMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkRmFsc2UobmFtZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNsYXNzZWRSZW1vdmUodGhpcywgbmFtZXMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkRnVuY3Rpb24obmFtZXMsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAodmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKSA/IGNsYXNzZWRBZGQgOiBjbGFzc2VkUmVtb3ZlKSh0aGlzLCBuYW1lcyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBuYW1lcyA9IGNsYXNzQXJyYXkobmFtZSArIFwiXCIpO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHZhciBsaXN0ID0gY2xhc3NMaXN0KHRoaXMubm9kZSgpKSwgaSA9IC0xLCBuID0gbmFtZXMubGVuZ3RoO1xuICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoIWxpc3QuY29udGFpbnMobmFtZXNbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gdGhpcy5lYWNoKCh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyBjbGFzc2VkRnVuY3Rpb24gOiB2YWx1ZVxuICAgICAgPyBjbGFzc2VkVHJ1ZVxuICAgICAgOiBjbGFzc2VkRmFsc2UpKG5hbWVzLCB2YWx1ZSkpO1xufVxuIiwiZnVuY3Rpb24gdGV4dFJlbW92ZSgpIHtcbiAgdGhpcy50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIHRleHRDb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0ZXh0RnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdiA9PSBudWxsID8gXCJcIiA6IHY7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgPyB0ZXh0UmVtb3ZlIDogKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyB0ZXh0RnVuY3Rpb25cbiAgICAgICAgICA6IHRleHRDb25zdGFudCkodmFsdWUpKVxuICAgICAgOiB0aGlzLm5vZGUoKS50ZXh0Q29udGVudDtcbn1cbiIsImZ1bmN0aW9uIGh0bWxSZW1vdmUoKSB7XG4gIHRoaXMuaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gaHRtbENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlubmVySFRNTCA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBodG1sRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmlubmVySFRNTCA9IHYgPT0gbnVsbCA/IFwiXCIgOiB2O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2godmFsdWUgPT0gbnVsbFxuICAgICAgICAgID8gaHRtbFJlbW92ZSA6ICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gaHRtbEZ1bmN0aW9uXG4gICAgICAgICAgOiBodG1sQ29uc3RhbnQpKHZhbHVlKSlcbiAgICAgIDogdGhpcy5ub2RlKCkuaW5uZXJIVE1MO1xufVxuIiwiZnVuY3Rpb24gcmFpc2UoKSB7XG4gIGlmICh0aGlzLm5leHRTaWJsaW5nKSB0aGlzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoKHJhaXNlKTtcbn1cbiIsImZ1bmN0aW9uIGxvd2VyKCkge1xuICBpZiAodGhpcy5wcmV2aW91c1NpYmxpbmcpIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcywgdGhpcy5wYXJlbnROb2RlLmZpcnN0Q2hpbGQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChsb3dlcik7XG59XG4iLCJpbXBvcnQgY3JlYXRvciBmcm9tIFwiLi4vY3JlYXRvci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBjcmVhdGUgPSB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiID8gbmFtZSA6IGNyZWF0b3IobmFtZSk7XG4gIHJldHVybiB0aGlzLnNlbGVjdChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChjcmVhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGNyZWF0b3IgZnJvbSBcIi4uL2NyZWF0b3IuanNcIjtcbmltcG9ydCBzZWxlY3RvciBmcm9tIFwiLi4vc2VsZWN0b3IuanNcIjtcblxuZnVuY3Rpb24gY29uc3RhbnROdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgYmVmb3JlKSB7XG4gIHZhciBjcmVhdGUgPSB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiID8gbmFtZSA6IGNyZWF0b3IobmFtZSksXG4gICAgICBzZWxlY3QgPSBiZWZvcmUgPT0gbnVsbCA/IGNvbnN0YW50TnVsbCA6IHR5cGVvZiBiZWZvcmUgPT09IFwiZnVuY3Rpb25cIiA/IGJlZm9yZSA6IHNlbGVjdG9yKGJlZm9yZSk7XG4gIHJldHVybiB0aGlzLnNlbGVjdChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUoY3JlYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHNlbGVjdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IG51bGwpO1xuICB9KTtcbn1cbiIsImZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgaWYgKHBhcmVudCkgcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChyZW1vdmUpO1xufVxuIiwiZnVuY3Rpb24gc2VsZWN0aW9uX2Nsb25lU2hhbGxvdygpIHtcbiAgdmFyIGNsb25lID0gdGhpcy5jbG9uZU5vZGUoZmFsc2UpLCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gIHJldHVybiBwYXJlbnQgPyBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNsb25lLCB0aGlzLm5leHRTaWJsaW5nKSA6IGNsb25lO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rpb25fY2xvbmVEZWVwKCkge1xuICB2YXIgY2xvbmUgPSB0aGlzLmNsb25lTm9kZSh0cnVlKSwgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICByZXR1cm4gcGFyZW50ID8gcGFyZW50Lmluc2VydEJlZm9yZShjbG9uZSwgdGhpcy5uZXh0U2libGluZykgOiBjbG9uZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZGVlcCkge1xuICByZXR1cm4gdGhpcy5zZWxlY3QoZGVlcCA/IHNlbGVjdGlvbl9jbG9uZURlZXAgOiBzZWxlY3Rpb25fY2xvbmVTaGFsbG93KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMucHJvcGVydHkoXCJfX2RhdGFfX1wiLCB2YWx1ZSlcbiAgICAgIDogdGhpcy5ub2RlKCkuX19kYXRhX187XG59XG4iLCJmdW5jdGlvbiBjb250ZXh0TGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCwgdGhpcy5fX2RhdGFfXyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lcykge1xuICByZXR1cm4gdHlwZW5hbWVzLnRyaW0oKS5zcGxpdCgvXnxcXHMrLykubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgbmFtZSA9IFwiXCIsIGkgPSB0LmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChpID49IDApIG5hbWUgPSB0LnNsaWNlKGkgKyAxKSwgdCA9IHQuc2xpY2UoMCwgaSk7XG4gICAgcmV0dXJuIHt0eXBlOiB0LCBuYW1lOiBuYW1lfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uUmVtb3ZlKHR5cGVuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb24gPSB0aGlzLl9fb247XG4gICAgaWYgKCFvbikgcmV0dXJuO1xuICAgIGZvciAodmFyIGogPSAwLCBpID0gLTEsIG0gPSBvbi5sZW5ndGgsIG87IGogPCBtOyArK2opIHtcbiAgICAgIGlmIChvID0gb25bal0sICghdHlwZW5hbWUudHlwZSB8fCBvLnR5cGUgPT09IHR5cGVuYW1lLnR5cGUpICYmIG8ubmFtZSA9PT0gdHlwZW5hbWUubmFtZSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoby50eXBlLCBvLmxpc3RlbmVyLCBvLm9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25bKytpXSA9IG87XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgrK2kpIG9uLmxlbmd0aCA9IGk7XG4gICAgZWxzZSBkZWxldGUgdGhpcy5fX29uO1xuICB9O1xufVxuXG5mdW5jdGlvbiBvbkFkZCh0eXBlbmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBvbiA9IHRoaXMuX19vbiwgbywgbGlzdGVuZXIgPSBjb250ZXh0TGlzdGVuZXIodmFsdWUpO1xuICAgIGlmIChvbikgZm9yICh2YXIgaiA9IDAsIG0gPSBvbi5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICAgIGlmICgobyA9IG9uW2pdKS50eXBlID09PSB0eXBlbmFtZS50eXBlICYmIG8ubmFtZSA9PT0gdHlwZW5hbWUubmFtZSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoby50eXBlLCBvLmxpc3RlbmVyLCBvLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoby50eXBlLCBvLmxpc3RlbmVyID0gbGlzdGVuZXIsIG8ub3B0aW9ucyA9IG9wdGlvbnMpO1xuICAgICAgICBvLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHR5cGVuYW1lLnR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICBvID0ge3R5cGU6IHR5cGVuYW1lLnR5cGUsIG5hbWU6IHR5cGVuYW1lLm5hbWUsIHZhbHVlOiB2YWx1ZSwgbGlzdGVuZXI6IGxpc3RlbmVyLCBvcHRpb25zOiBvcHRpb25zfTtcbiAgICBpZiAoIW9uKSB0aGlzLl9fb24gPSBbb107XG4gICAgZWxzZSBvbi5wdXNoKG8pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0eXBlbmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIHR5cGVuYW1lcyA9IHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lICsgXCJcIiksIGksIG4gPSB0eXBlbmFtZXMubGVuZ3RoLCB0O1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHZhciBvbiA9IHRoaXMubm9kZSgpLl9fb247XG4gICAgaWYgKG9uKSBmb3IgKHZhciBqID0gMCwgbSA9IG9uLmxlbmd0aCwgbzsgaiA8IG07ICsraikge1xuICAgICAgZm9yIChpID0gMCwgbyA9IG9uW2pdOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmICgodCA9IHR5cGVuYW1lc1tpXSkudHlwZSA9PT0gby50eXBlICYmIHQubmFtZSA9PT0gby5uYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIG8udmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb24gPSB2YWx1ZSA/IG9uQWRkIDogb25SZW1vdmU7XG4gIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHRoaXMuZWFjaChvbih0eXBlbmFtZXNbaV0sIHZhbHVlLCBvcHRpb25zKSk7XG4gIHJldHVybiB0aGlzO1xufVxuIiwiaW1wb3J0IGRlZmF1bHRWaWV3IGZyb20gXCIuLi93aW5kb3cuanNcIjtcblxuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChub2RlLCB0eXBlLCBwYXJhbXMpIHtcbiAgdmFyIHdpbmRvdyA9IGRlZmF1bHRWaWV3KG5vZGUpLFxuICAgICAgZXZlbnQgPSB3aW5kb3cuQ3VzdG9tRXZlbnQ7XG5cbiAgaWYgKHR5cGVvZiBldmVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZXZlbnQgPSBuZXcgZXZlbnQodHlwZSwgcGFyYW1zKTtcbiAgfSBlbHNlIHtcbiAgICBldmVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO1xuICAgIGlmIChwYXJhbXMpIGV2ZW50LmluaXRFdmVudCh0eXBlLCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUpLCBldmVudC5kZXRhaWwgPSBwYXJhbXMuZGV0YWlsO1xuICAgIGVsc2UgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIGZhbHNlLCBmYWxzZSk7XG4gIH1cblxuICBub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaENvbnN0YW50KHR5cGUsIHBhcmFtcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoRXZlbnQodGhpcywgdHlwZSwgcGFyYW1zKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hGdW5jdGlvbih0eXBlLCBwYXJhbXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkaXNwYXRjaEV2ZW50KHRoaXMsIHR5cGUsIHBhcmFtcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odHlwZSwgcGFyYW1zKSB7XG4gIHJldHVybiB0aGlzLmVhY2goKHR5cGVvZiBwYXJhbXMgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyBkaXNwYXRjaEZ1bmN0aW9uXG4gICAgICA6IGRpc3BhdGNoQ29uc3RhbnQpKHR5cGUsIHBhcmFtcykpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qKCkge1xuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAwLCBtID0gZ3JvdXBzLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZTsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkgeWllbGQgbm9kZTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBzZWxlY3Rpb25fc2VsZWN0IGZyb20gXCIuL3NlbGVjdC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zZWxlY3RBbGwgZnJvbSBcIi4vc2VsZWN0QWxsLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NlbGVjdENoaWxkIGZyb20gXCIuL3NlbGVjdENoaWxkLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NlbGVjdENoaWxkcmVuIGZyb20gXCIuL3NlbGVjdENoaWxkcmVuLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2ZpbHRlciBmcm9tIFwiLi9maWx0ZXIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VudGVyIGZyb20gXCIuL2VudGVyLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2V4aXQgZnJvbSBcIi4vZXhpdC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9qb2luIGZyb20gXCIuL2pvaW4uanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fbWVyZ2UgZnJvbSBcIi4vbWVyZ2UuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fb3JkZXIgZnJvbSBcIi4vb3JkZXIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc29ydCBmcm9tIFwiLi9zb3J0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2NhbGwgZnJvbSBcIi4vY2FsbC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9ub2RlcyBmcm9tIFwiLi9ub2Rlcy5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9ub2RlIGZyb20gXCIuL25vZGUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2l6ZSBmcm9tIFwiLi9zaXplLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VtcHR5IGZyb20gXCIuL2VtcHR5LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VhY2ggZnJvbSBcIi4vZWFjaC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9hdHRyIGZyb20gXCIuL2F0dHIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc3R5bGUgZnJvbSBcIi4vc3R5bGUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fcHJvcGVydHkgZnJvbSBcIi4vcHJvcGVydHkuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2xhc3NlZCBmcm9tIFwiLi9jbGFzc2VkLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3RleHQgZnJvbSBcIi4vdGV4dC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9odG1sIGZyb20gXCIuL2h0bWwuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fcmFpc2UgZnJvbSBcIi4vcmFpc2UuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fbG93ZXIgZnJvbSBcIi4vbG93ZXIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fYXBwZW5kIGZyb20gXCIuL2FwcGVuZC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9pbnNlcnQgZnJvbSBcIi4vaW5zZXJ0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3JlbW92ZSBmcm9tIFwiLi9yZW1vdmUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2xvbmUgZnJvbSBcIi4vY2xvbmUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZGF0dW0gZnJvbSBcIi4vZGF0dW0uanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fb24gZnJvbSBcIi4vb24uanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZGlzcGF0Y2ggZnJvbSBcIi4vZGlzcGF0Y2guanNcIjtcbmltcG9ydCBzZWxlY3Rpb25faXRlcmF0b3IgZnJvbSBcIi4vaXRlcmF0b3IuanNcIjtcblxuZXhwb3J0IHZhciByb290ID0gW251bGxdO1xuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0aW9uKGdyb3VwcywgcGFyZW50cykge1xuICB0aGlzLl9ncm91cHMgPSBncm91cHM7XG4gIHRoaXMuX3BhcmVudHMgPSBwYXJlbnRzO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKFtbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XV0sIHJvb3QpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rpb25fc2VsZWN0aW9uKCkge1xuICByZXR1cm4gdGhpcztcbn1cblxuU2VsZWN0aW9uLnByb3RvdHlwZSA9IHNlbGVjdGlvbi5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBTZWxlY3Rpb24sXG4gIHNlbGVjdDogc2VsZWN0aW9uX3NlbGVjdCxcbiAgc2VsZWN0QWxsOiBzZWxlY3Rpb25fc2VsZWN0QWxsLFxuICBzZWxlY3RDaGlsZDogc2VsZWN0aW9uX3NlbGVjdENoaWxkLFxuICBzZWxlY3RDaGlsZHJlbjogc2VsZWN0aW9uX3NlbGVjdENoaWxkcmVuLFxuICBmaWx0ZXI6IHNlbGVjdGlvbl9maWx0ZXIsXG4gIGRhdGE6IHNlbGVjdGlvbl9kYXRhLFxuICBlbnRlcjogc2VsZWN0aW9uX2VudGVyLFxuICBleGl0OiBzZWxlY3Rpb25fZXhpdCxcbiAgam9pbjogc2VsZWN0aW9uX2pvaW4sXG4gIG1lcmdlOiBzZWxlY3Rpb25fbWVyZ2UsXG4gIHNlbGVjdGlvbjogc2VsZWN0aW9uX3NlbGVjdGlvbixcbiAgb3JkZXI6IHNlbGVjdGlvbl9vcmRlcixcbiAgc29ydDogc2VsZWN0aW9uX3NvcnQsXG4gIGNhbGw6IHNlbGVjdGlvbl9jYWxsLFxuICBub2Rlczogc2VsZWN0aW9uX25vZGVzLFxuICBub2RlOiBzZWxlY3Rpb25fbm9kZSxcbiAgc2l6ZTogc2VsZWN0aW9uX3NpemUsXG4gIGVtcHR5OiBzZWxlY3Rpb25fZW1wdHksXG4gIGVhY2g6IHNlbGVjdGlvbl9lYWNoLFxuICBhdHRyOiBzZWxlY3Rpb25fYXR0cixcbiAgc3R5bGU6IHNlbGVjdGlvbl9zdHlsZSxcbiAgcHJvcGVydHk6IHNlbGVjdGlvbl9wcm9wZXJ0eSxcbiAgY2xhc3NlZDogc2VsZWN0aW9uX2NsYXNzZWQsXG4gIHRleHQ6IHNlbGVjdGlvbl90ZXh0LFxuICBodG1sOiBzZWxlY3Rpb25faHRtbCxcbiAgcmFpc2U6IHNlbGVjdGlvbl9yYWlzZSxcbiAgbG93ZXI6IHNlbGVjdGlvbl9sb3dlcixcbiAgYXBwZW5kOiBzZWxlY3Rpb25fYXBwZW5kLFxuICBpbnNlcnQ6IHNlbGVjdGlvbl9pbnNlcnQsXG4gIHJlbW92ZTogc2VsZWN0aW9uX3JlbW92ZSxcbiAgY2xvbmU6IHNlbGVjdGlvbl9jbG9uZSxcbiAgZGF0dW06IHNlbGVjdGlvbl9kYXR1bSxcbiAgb246IHNlbGVjdGlvbl9vbixcbiAgZGlzcGF0Y2g6IHNlbGVjdGlvbl9kaXNwYXRjaCxcbiAgW1N5bWJvbC5pdGVyYXRvcl06IHNlbGVjdGlvbl9pdGVyYXRvclxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0aW9uO1xuIiwiaW1wb3J0IHtTZWxlY3Rpb24sIHJvb3R9IGZyb20gXCIuL3NlbGVjdGlvbi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiXG4gICAgICA/IG5ldyBTZWxlY3Rpb24oW1tkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKV1dLCBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XSlcbiAgICAgIDogbmV3IFNlbGVjdGlvbihbW3NlbGVjdG9yXV0sIHJvb3QpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29uc3RydWN0b3IsIGZhY3RvcnksIHByb3RvdHlwZSkge1xuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBmYWN0b3J5LnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbiAgcHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQocGFyZW50LCBkZWZpbml0aW9uKSB7XG4gIHZhciBwcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHBhcmVudC5wcm90b3R5cGUpO1xuICBmb3IgKHZhciBrZXkgaW4gZGVmaW5pdGlvbikgcHJvdG90eXBlW2tleV0gPSBkZWZpbml0aW9uW2tleV07XG4gIHJldHVybiBwcm90b3R5cGU7XG59XG4iLCJpbXBvcnQgZGVmaW5lLCB7ZXh0ZW5kfSBmcm9tIFwiLi9kZWZpbmUuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIENvbG9yKCkge31cblxuZXhwb3J0IHZhciBkYXJrZXIgPSAwLjc7XG5leHBvcnQgdmFyIGJyaWdodGVyID0gMSAvIGRhcmtlcjtcblxudmFyIHJlSSA9IFwiXFxcXHMqKFsrLV0/XFxcXGQrKVxcXFxzKlwiLFxuICAgIHJlTiA9IFwiXFxcXHMqKFsrLV0/KD86XFxcXGQqXFxcXC4pP1xcXFxkKyg/OltlRV1bKy1dP1xcXFxkKyk/KVxcXFxzKlwiLFxuICAgIHJlUCA9IFwiXFxcXHMqKFsrLV0/KD86XFxcXGQqXFxcXC4pP1xcXFxkKyg/OltlRV1bKy1dP1xcXFxkKyk/KSVcXFxccypcIixcbiAgICByZUhleCA9IC9eIyhbMC05YS1mXXszLDh9KSQvLFxuICAgIHJlUmdiSW50ZWdlciA9IG5ldyBSZWdFeHAoYF5yZ2JcXFxcKCR7cmVJfSwke3JlSX0sJHtyZUl9XFxcXCkkYCksXG4gICAgcmVSZ2JQZXJjZW50ID0gbmV3IFJlZ0V4cChgXnJnYlxcXFwoJHtyZVB9LCR7cmVQfSwke3JlUH1cXFxcKSRgKSxcbiAgICByZVJnYmFJbnRlZ2VyID0gbmV3IFJlZ0V4cChgXnJnYmFcXFxcKCR7cmVJfSwke3JlSX0sJHtyZUl9LCR7cmVOfVxcXFwpJGApLFxuICAgIHJlUmdiYVBlcmNlbnQgPSBuZXcgUmVnRXhwKGBecmdiYVxcXFwoJHtyZVB9LCR7cmVQfSwke3JlUH0sJHtyZU59XFxcXCkkYCksXG4gICAgcmVIc2xQZXJjZW50ID0gbmV3IFJlZ0V4cChgXmhzbFxcXFwoJHtyZU59LCR7cmVQfSwke3JlUH1cXFxcKSRgKSxcbiAgICByZUhzbGFQZXJjZW50ID0gbmV3IFJlZ0V4cChgXmhzbGFcXFxcKCR7cmVOfSwke3JlUH0sJHtyZVB9LCR7cmVOfVxcXFwpJGApO1xuXG52YXIgbmFtZWQgPSB7XG4gIGFsaWNlYmx1ZTogMHhmMGY4ZmYsXG4gIGFudGlxdWV3aGl0ZTogMHhmYWViZDcsXG4gIGFxdWE6IDB4MDBmZmZmLFxuICBhcXVhbWFyaW5lOiAweDdmZmZkNCxcbiAgYXp1cmU6IDB4ZjBmZmZmLFxuICBiZWlnZTogMHhmNWY1ZGMsXG4gIGJpc3F1ZTogMHhmZmU0YzQsXG4gIGJsYWNrOiAweDAwMDAwMCxcbiAgYmxhbmNoZWRhbG1vbmQ6IDB4ZmZlYmNkLFxuICBibHVlOiAweDAwMDBmZixcbiAgYmx1ZXZpb2xldDogMHg4YTJiZTIsXG4gIGJyb3duOiAweGE1MmEyYSxcbiAgYnVybHl3b29kOiAweGRlYjg4NyxcbiAgY2FkZXRibHVlOiAweDVmOWVhMCxcbiAgY2hhcnRyZXVzZTogMHg3ZmZmMDAsXG4gIGNob2NvbGF0ZTogMHhkMjY5MWUsXG4gIGNvcmFsOiAweGZmN2Y1MCxcbiAgY29ybmZsb3dlcmJsdWU6IDB4NjQ5NWVkLFxuICBjb3Juc2lsazogMHhmZmY4ZGMsXG4gIGNyaW1zb246IDB4ZGMxNDNjLFxuICBjeWFuOiAweDAwZmZmZixcbiAgZGFya2JsdWU6IDB4MDAwMDhiLFxuICBkYXJrY3lhbjogMHgwMDhiOGIsXG4gIGRhcmtnb2xkZW5yb2Q6IDB4Yjg4NjBiLFxuICBkYXJrZ3JheTogMHhhOWE5YTksXG4gIGRhcmtncmVlbjogMHgwMDY0MDAsXG4gIGRhcmtncmV5OiAweGE5YTlhOSxcbiAgZGFya2toYWtpOiAweGJkYjc2YixcbiAgZGFya21hZ2VudGE6IDB4OGIwMDhiLFxuICBkYXJrb2xpdmVncmVlbjogMHg1NTZiMmYsXG4gIGRhcmtvcmFuZ2U6IDB4ZmY4YzAwLFxuICBkYXJrb3JjaGlkOiAweDk5MzJjYyxcbiAgZGFya3JlZDogMHg4YjAwMDAsXG4gIGRhcmtzYWxtb246IDB4ZTk5NjdhLFxuICBkYXJrc2VhZ3JlZW46IDB4OGZiYzhmLFxuICBkYXJrc2xhdGVibHVlOiAweDQ4M2Q4YixcbiAgZGFya3NsYXRlZ3JheTogMHgyZjRmNGYsXG4gIGRhcmtzbGF0ZWdyZXk6IDB4MmY0ZjRmLFxuICBkYXJrdHVycXVvaXNlOiAweDAwY2VkMSxcbiAgZGFya3Zpb2xldDogMHg5NDAwZDMsXG4gIGRlZXBwaW5rOiAweGZmMTQ5MyxcbiAgZGVlcHNreWJsdWU6IDB4MDBiZmZmLFxuICBkaW1ncmF5OiAweDY5Njk2OSxcbiAgZGltZ3JleTogMHg2OTY5NjksXG4gIGRvZGdlcmJsdWU6IDB4MWU5MGZmLFxuICBmaXJlYnJpY2s6IDB4YjIyMjIyLFxuICBmbG9yYWx3aGl0ZTogMHhmZmZhZjAsXG4gIGZvcmVzdGdyZWVuOiAweDIyOGIyMixcbiAgZnVjaHNpYTogMHhmZjAwZmYsXG4gIGdhaW5zYm9ybzogMHhkY2RjZGMsXG4gIGdob3N0d2hpdGU6IDB4ZjhmOGZmLFxuICBnb2xkOiAweGZmZDcwMCxcbiAgZ29sZGVucm9kOiAweGRhYTUyMCxcbiAgZ3JheTogMHg4MDgwODAsXG4gIGdyZWVuOiAweDAwODAwMCxcbiAgZ3JlZW55ZWxsb3c6IDB4YWRmZjJmLFxuICBncmV5OiAweDgwODA4MCxcbiAgaG9uZXlkZXc6IDB4ZjBmZmYwLFxuICBob3RwaW5rOiAweGZmNjliNCxcbiAgaW5kaWFucmVkOiAweGNkNWM1YyxcbiAgaW5kaWdvOiAweDRiMDA4MixcbiAgaXZvcnk6IDB4ZmZmZmYwLFxuICBraGFraTogMHhmMGU2OGMsXG4gIGxhdmVuZGVyOiAweGU2ZTZmYSxcbiAgbGF2ZW5kZXJibHVzaDogMHhmZmYwZjUsXG4gIGxhd25ncmVlbjogMHg3Y2ZjMDAsXG4gIGxlbW9uY2hpZmZvbjogMHhmZmZhY2QsXG4gIGxpZ2h0Ymx1ZTogMHhhZGQ4ZTYsXG4gIGxpZ2h0Y29yYWw6IDB4ZjA4MDgwLFxuICBsaWdodGN5YW46IDB4ZTBmZmZmLFxuICBsaWdodGdvbGRlbnJvZHllbGxvdzogMHhmYWZhZDIsXG4gIGxpZ2h0Z3JheTogMHhkM2QzZDMsXG4gIGxpZ2h0Z3JlZW46IDB4OTBlZTkwLFxuICBsaWdodGdyZXk6IDB4ZDNkM2QzLFxuICBsaWdodHBpbms6IDB4ZmZiNmMxLFxuICBsaWdodHNhbG1vbjogMHhmZmEwN2EsXG4gIGxpZ2h0c2VhZ3JlZW46IDB4MjBiMmFhLFxuICBsaWdodHNreWJsdWU6IDB4ODdjZWZhLFxuICBsaWdodHNsYXRlZ3JheTogMHg3Nzg4OTksXG4gIGxpZ2h0c2xhdGVncmV5OiAweDc3ODg5OSxcbiAgbGlnaHRzdGVlbGJsdWU6IDB4YjBjNGRlLFxuICBsaWdodHllbGxvdzogMHhmZmZmZTAsXG4gIGxpbWU6IDB4MDBmZjAwLFxuICBsaW1lZ3JlZW46IDB4MzJjZDMyLFxuICBsaW5lbjogMHhmYWYwZTYsXG4gIG1hZ2VudGE6IDB4ZmYwMGZmLFxuICBtYXJvb246IDB4ODAwMDAwLFxuICBtZWRpdW1hcXVhbWFyaW5lOiAweDY2Y2RhYSxcbiAgbWVkaXVtYmx1ZTogMHgwMDAwY2QsXG4gIG1lZGl1bW9yY2hpZDogMHhiYTU1ZDMsXG4gIG1lZGl1bXB1cnBsZTogMHg5MzcwZGIsXG4gIG1lZGl1bXNlYWdyZWVuOiAweDNjYjM3MSxcbiAgbWVkaXVtc2xhdGVibHVlOiAweDdiNjhlZSxcbiAgbWVkaXVtc3ByaW5nZ3JlZW46IDB4MDBmYTlhLFxuICBtZWRpdW10dXJxdW9pc2U6IDB4NDhkMWNjLFxuICBtZWRpdW12aW9sZXRyZWQ6IDB4YzcxNTg1LFxuICBtaWRuaWdodGJsdWU6IDB4MTkxOTcwLFxuICBtaW50Y3JlYW06IDB4ZjVmZmZhLFxuICBtaXN0eXJvc2U6IDB4ZmZlNGUxLFxuICBtb2NjYXNpbjogMHhmZmU0YjUsXG4gIG5hdmFqb3doaXRlOiAweGZmZGVhZCxcbiAgbmF2eTogMHgwMDAwODAsXG4gIG9sZGxhY2U6IDB4ZmRmNWU2LFxuICBvbGl2ZTogMHg4MDgwMDAsXG4gIG9saXZlZHJhYjogMHg2YjhlMjMsXG4gIG9yYW5nZTogMHhmZmE1MDAsXG4gIG9yYW5nZXJlZDogMHhmZjQ1MDAsXG4gIG9yY2hpZDogMHhkYTcwZDYsXG4gIHBhbGVnb2xkZW5yb2Q6IDB4ZWVlOGFhLFxuICBwYWxlZ3JlZW46IDB4OThmYjk4LFxuICBwYWxldHVycXVvaXNlOiAweGFmZWVlZSxcbiAgcGFsZXZpb2xldHJlZDogMHhkYjcwOTMsXG4gIHBhcGF5YXdoaXA6IDB4ZmZlZmQ1LFxuICBwZWFjaHB1ZmY6IDB4ZmZkYWI5LFxuICBwZXJ1OiAweGNkODUzZixcbiAgcGluazogMHhmZmMwY2IsXG4gIHBsdW06IDB4ZGRhMGRkLFxuICBwb3dkZXJibHVlOiAweGIwZTBlNixcbiAgcHVycGxlOiAweDgwMDA4MCxcbiAgcmViZWNjYXB1cnBsZTogMHg2NjMzOTksXG4gIHJlZDogMHhmZjAwMDAsXG4gIHJvc3licm93bjogMHhiYzhmOGYsXG4gIHJveWFsYmx1ZTogMHg0MTY5ZTEsXG4gIHNhZGRsZWJyb3duOiAweDhiNDUxMyxcbiAgc2FsbW9uOiAweGZhODA3MixcbiAgc2FuZHlicm93bjogMHhmNGE0NjAsXG4gIHNlYWdyZWVuOiAweDJlOGI1NyxcbiAgc2Vhc2hlbGw6IDB4ZmZmNWVlLFxuICBzaWVubmE6IDB4YTA1MjJkLFxuICBzaWx2ZXI6IDB4YzBjMGMwLFxuICBza3libHVlOiAweDg3Y2VlYixcbiAgc2xhdGVibHVlOiAweDZhNWFjZCxcbiAgc2xhdGVncmF5OiAweDcwODA5MCxcbiAgc2xhdGVncmV5OiAweDcwODA5MCxcbiAgc25vdzogMHhmZmZhZmEsXG4gIHNwcmluZ2dyZWVuOiAweDAwZmY3ZixcbiAgc3RlZWxibHVlOiAweDQ2ODJiNCxcbiAgdGFuOiAweGQyYjQ4YyxcbiAgdGVhbDogMHgwMDgwODAsXG4gIHRoaXN0bGU6IDB4ZDhiZmQ4LFxuICB0b21hdG86IDB4ZmY2MzQ3LFxuICB0dXJxdW9pc2U6IDB4NDBlMGQwLFxuICB2aW9sZXQ6IDB4ZWU4MmVlLFxuICB3aGVhdDogMHhmNWRlYjMsXG4gIHdoaXRlOiAweGZmZmZmZixcbiAgd2hpdGVzbW9rZTogMHhmNWY1ZjUsXG4gIHllbGxvdzogMHhmZmZmMDAsXG4gIHllbGxvd2dyZWVuOiAweDlhY2QzMlxufTtcblxuZGVmaW5lKENvbG9yLCBjb2xvciwge1xuICBjb3B5KGNoYW5uZWxzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IHRoaXMuY29uc3RydWN0b3IsIHRoaXMsIGNoYW5uZWxzKTtcbiAgfSxcbiAgZGlzcGxheWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmdiKCkuZGlzcGxheWFibGUoKTtcbiAgfSxcbiAgaGV4OiBjb2xvcl9mb3JtYXRIZXgsIC8vIERlcHJlY2F0ZWQhIFVzZSBjb2xvci5mb3JtYXRIZXguXG4gIGZvcm1hdEhleDogY29sb3JfZm9ybWF0SGV4LFxuICBmb3JtYXRIZXg4OiBjb2xvcl9mb3JtYXRIZXg4LFxuICBmb3JtYXRIc2w6IGNvbG9yX2Zvcm1hdEhzbCxcbiAgZm9ybWF0UmdiOiBjb2xvcl9mb3JtYXRSZ2IsXG4gIHRvU3RyaW5nOiBjb2xvcl9mb3JtYXRSZ2Jcbn0pO1xuXG5mdW5jdGlvbiBjb2xvcl9mb3JtYXRIZXgoKSB7XG4gIHJldHVybiB0aGlzLnJnYigpLmZvcm1hdEhleCgpO1xufVxuXG5mdW5jdGlvbiBjb2xvcl9mb3JtYXRIZXg4KCkge1xuICByZXR1cm4gdGhpcy5yZ2IoKS5mb3JtYXRIZXg4KCk7XG59XG5cbmZ1bmN0aW9uIGNvbG9yX2Zvcm1hdEhzbCgpIHtcbiAgcmV0dXJuIGhzbENvbnZlcnQodGhpcykuZm9ybWF0SHNsKCk7XG59XG5cbmZ1bmN0aW9uIGNvbG9yX2Zvcm1hdFJnYigpIHtcbiAgcmV0dXJuIHRoaXMucmdiKCkuZm9ybWF0UmdiKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yKGZvcm1hdCkge1xuICB2YXIgbSwgbDtcbiAgZm9ybWF0ID0gKGZvcm1hdCArIFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gKG0gPSByZUhleC5leGVjKGZvcm1hdCkpID8gKGwgPSBtWzFdLmxlbmd0aCwgbSA9IHBhcnNlSW50KG1bMV0sIDE2KSwgbCA9PT0gNiA/IHJnYm4obSkgLy8gI2ZmMDAwMFxuICAgICAgOiBsID09PSAzID8gbmV3IFJnYigobSA+PiA4ICYgMHhmKSB8IChtID4+IDQgJiAweGYwKSwgKG0gPj4gNCAmIDB4ZikgfCAobSAmIDB4ZjApLCAoKG0gJiAweGYpIDw8IDQpIHwgKG0gJiAweGYpLCAxKSAvLyAjZjAwXG4gICAgICA6IGwgPT09IDggPyByZ2JhKG0gPj4gMjQgJiAweGZmLCBtID4+IDE2ICYgMHhmZiwgbSA+PiA4ICYgMHhmZiwgKG0gJiAweGZmKSAvIDB4ZmYpIC8vICNmZjAwMDAwMFxuICAgICAgOiBsID09PSA0ID8gcmdiYSgobSA+PiAxMiAmIDB4ZikgfCAobSA+PiA4ICYgMHhmMCksIChtID4+IDggJiAweGYpIHwgKG0gPj4gNCAmIDB4ZjApLCAobSA+PiA0ICYgMHhmKSB8IChtICYgMHhmMCksICgoKG0gJiAweGYpIDw8IDQpIHwgKG0gJiAweGYpKSAvIDB4ZmYpIC8vICNmMDAwXG4gICAgICA6IG51bGwpIC8vIGludmFsaWQgaGV4XG4gICAgICA6IChtID0gcmVSZ2JJbnRlZ2VyLmV4ZWMoZm9ybWF0KSkgPyBuZXcgUmdiKG1bMV0sIG1bMl0sIG1bM10sIDEpIC8vIHJnYigyNTUsIDAsIDApXG4gICAgICA6IChtID0gcmVSZ2JQZXJjZW50LmV4ZWMoZm9ybWF0KSkgPyBuZXcgUmdiKG1bMV0gKiAyNTUgLyAxMDAsIG1bMl0gKiAyNTUgLyAxMDAsIG1bM10gKiAyNTUgLyAxMDAsIDEpIC8vIHJnYigxMDAlLCAwJSwgMCUpXG4gICAgICA6IChtID0gcmVSZ2JhSW50ZWdlci5leGVjKGZvcm1hdCkpID8gcmdiYShtWzFdLCBtWzJdLCBtWzNdLCBtWzRdKSAvLyByZ2JhKDI1NSwgMCwgMCwgMSlcbiAgICAgIDogKG0gPSByZVJnYmFQZXJjZW50LmV4ZWMoZm9ybWF0KSkgPyByZ2JhKG1bMV0gKiAyNTUgLyAxMDAsIG1bMl0gKiAyNTUgLyAxMDAsIG1bM10gKiAyNTUgLyAxMDAsIG1bNF0pIC8vIHJnYigxMDAlLCAwJSwgMCUsIDEpXG4gICAgICA6IChtID0gcmVIc2xQZXJjZW50LmV4ZWMoZm9ybWF0KSkgPyBoc2xhKG1bMV0sIG1bMl0gLyAxMDAsIG1bM10gLyAxMDAsIDEpIC8vIGhzbCgxMjAsIDUwJSwgNTAlKVxuICAgICAgOiAobSA9IHJlSHNsYVBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IGhzbGEobVsxXSwgbVsyXSAvIDEwMCwgbVszXSAvIDEwMCwgbVs0XSkgLy8gaHNsYSgxMjAsIDUwJSwgNTAlLCAxKVxuICAgICAgOiBuYW1lZC5oYXNPd25Qcm9wZXJ0eShmb3JtYXQpID8gcmdibihuYW1lZFtmb3JtYXRdKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgICAgOiBmb3JtYXQgPT09IFwidHJhbnNwYXJlbnRcIiA/IG5ldyBSZ2IoTmFOLCBOYU4sIE5hTiwgMClcbiAgICAgIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gcmdibihuKSB7XG4gIHJldHVybiBuZXcgUmdiKG4gPj4gMTYgJiAweGZmLCBuID4+IDggJiAweGZmLCBuICYgMHhmZiwgMSk7XG59XG5cbmZ1bmN0aW9uIHJnYmEociwgZywgYiwgYSkge1xuICBpZiAoYSA8PSAwKSByID0gZyA9IGIgPSBOYU47XG4gIHJldHVybiBuZXcgUmdiKHIsIGcsIGIsIGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmdiQ29udmVydChvKSB7XG4gIGlmICghKG8gaW5zdGFuY2VvZiBDb2xvcikpIG8gPSBjb2xvcihvKTtcbiAgaWYgKCFvKSByZXR1cm4gbmV3IFJnYjtcbiAgbyA9IG8ucmdiKCk7XG4gIHJldHVybiBuZXcgUmdiKG8uciwgby5nLCBvLmIsIG8ub3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2IociwgZywgYiwgb3BhY2l0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IHJnYkNvbnZlcnQocikgOiBuZXcgUmdiKHIsIGcsIGIsIG9wYWNpdHkgPT0gbnVsbCA/IDEgOiBvcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJnYihyLCBnLCBiLCBvcGFjaXR5KSB7XG4gIHRoaXMuciA9ICtyO1xuICB0aGlzLmcgPSArZztcbiAgdGhpcy5iID0gK2I7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5kZWZpbmUoUmdiLCByZ2IsIGV4dGVuZChDb2xvciwge1xuICBicmlnaHRlcihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGJyaWdodGVyIDogTWF0aC5wb3coYnJpZ2h0ZXIsIGspO1xuICAgIHJldHVybiBuZXcgUmdiKHRoaXMuciAqIGssIHRoaXMuZyAqIGssIHRoaXMuYiAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGRhcmtlciA6IE1hdGgucG93KGRhcmtlciwgayk7XG4gICAgcmV0dXJuIG5ldyBSZ2IodGhpcy5yICogaywgdGhpcy5nICogaywgdGhpcy5iICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgcmdiKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBjbGFtcCgpIHtcbiAgICByZXR1cm4gbmV3IFJnYihjbGFtcGkodGhpcy5yKSwgY2xhbXBpKHRoaXMuZyksIGNsYW1waSh0aGlzLmIpLCBjbGFtcGEodGhpcy5vcGFjaXR5KSk7XG4gIH0sXG4gIGRpc3BsYXlhYmxlKCkge1xuICAgIHJldHVybiAoLTAuNSA8PSB0aGlzLnIgJiYgdGhpcy5yIDwgMjU1LjUpXG4gICAgICAgICYmICgtMC41IDw9IHRoaXMuZyAmJiB0aGlzLmcgPCAyNTUuNSlcbiAgICAgICAgJiYgKC0wLjUgPD0gdGhpcy5iICYmIHRoaXMuYiA8IDI1NS41KVxuICAgICAgICAmJiAoMCA8PSB0aGlzLm9wYWNpdHkgJiYgdGhpcy5vcGFjaXR5IDw9IDEpO1xuICB9LFxuICBoZXg6IHJnYl9mb3JtYXRIZXgsIC8vIERlcHJlY2F0ZWQhIFVzZSBjb2xvci5mb3JtYXRIZXguXG4gIGZvcm1hdEhleDogcmdiX2Zvcm1hdEhleCxcbiAgZm9ybWF0SGV4ODogcmdiX2Zvcm1hdEhleDgsXG4gIGZvcm1hdFJnYjogcmdiX2Zvcm1hdFJnYixcbiAgdG9TdHJpbmc6IHJnYl9mb3JtYXRSZ2Jcbn0pKTtcblxuZnVuY3Rpb24gcmdiX2Zvcm1hdEhleCgpIHtcbiAgcmV0dXJuIGAjJHtoZXgodGhpcy5yKX0ke2hleCh0aGlzLmcpfSR7aGV4KHRoaXMuYil9YDtcbn1cblxuZnVuY3Rpb24gcmdiX2Zvcm1hdEhleDgoKSB7XG4gIHJldHVybiBgIyR7aGV4KHRoaXMucil9JHtoZXgodGhpcy5nKX0ke2hleCh0aGlzLmIpfSR7aGV4KChpc05hTih0aGlzLm9wYWNpdHkpID8gMSA6IHRoaXMub3BhY2l0eSkgKiAyNTUpfWA7XG59XG5cbmZ1bmN0aW9uIHJnYl9mb3JtYXRSZ2IoKSB7XG4gIGNvbnN0IGEgPSBjbGFtcGEodGhpcy5vcGFjaXR5KTtcbiAgcmV0dXJuIGAke2EgPT09IDEgPyBcInJnYihcIiA6IFwicmdiYShcIn0ke2NsYW1waSh0aGlzLnIpfSwgJHtjbGFtcGkodGhpcy5nKX0sICR7Y2xhbXBpKHRoaXMuYil9JHthID09PSAxID8gXCIpXCIgOiBgLCAke2F9KWB9YDtcbn1cblxuZnVuY3Rpb24gY2xhbXBhKG9wYWNpdHkpIHtcbiAgcmV0dXJuIGlzTmFOKG9wYWNpdHkpID8gMSA6IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIG9wYWNpdHkpKTtcbn1cblxuZnVuY3Rpb24gY2xhbXBpKHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodmFsdWUpIHx8IDApKTtcbn1cblxuZnVuY3Rpb24gaGV4KHZhbHVlKSB7XG4gIHZhbHVlID0gY2xhbXBpKHZhbHVlKTtcbiAgcmV0dXJuICh2YWx1ZSA8IDE2ID8gXCIwXCIgOiBcIlwiKSArIHZhbHVlLnRvU3RyaW5nKDE2KTtcbn1cblxuZnVuY3Rpb24gaHNsYShoLCBzLCBsLCBhKSB7XG4gIGlmIChhIDw9IDApIGggPSBzID0gbCA9IE5hTjtcbiAgZWxzZSBpZiAobCA8PSAwIHx8IGwgPj0gMSkgaCA9IHMgPSBOYU47XG4gIGVsc2UgaWYgKHMgPD0gMCkgaCA9IE5hTjtcbiAgcmV0dXJuIG5ldyBIc2woaCwgcywgbCwgYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoc2xDb252ZXJ0KG8pIHtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIc2wpIHJldHVybiBuZXcgSHNsKG8uaCwgby5zLCBvLmwsIG8ub3BhY2l0eSk7XG4gIGlmICghKG8gaW5zdGFuY2VvZiBDb2xvcikpIG8gPSBjb2xvcihvKTtcbiAgaWYgKCFvKSByZXR1cm4gbmV3IEhzbDtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIc2wpIHJldHVybiBvO1xuICBvID0gby5yZ2IoKTtcbiAgdmFyIHIgPSBvLnIgLyAyNTUsXG4gICAgICBnID0gby5nIC8gMjU1LFxuICAgICAgYiA9IG8uYiAvIDI1NSxcbiAgICAgIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpLFxuICAgICAgbWF4ID0gTWF0aC5tYXgociwgZywgYiksXG4gICAgICBoID0gTmFOLFxuICAgICAgcyA9IG1heCAtIG1pbixcbiAgICAgIGwgPSAobWF4ICsgbWluKSAvIDI7XG4gIGlmIChzKSB7XG4gICAgaWYgKHIgPT09IG1heCkgaCA9IChnIC0gYikgLyBzICsgKGcgPCBiKSAqIDY7XG4gICAgZWxzZSBpZiAoZyA9PT0gbWF4KSBoID0gKGIgLSByKSAvIHMgKyAyO1xuICAgIGVsc2UgaCA9IChyIC0gZykgLyBzICsgNDtcbiAgICBzIC89IGwgPCAwLjUgPyBtYXggKyBtaW4gOiAyIC0gbWF4IC0gbWluO1xuICAgIGggKj0gNjA7XG4gIH0gZWxzZSB7XG4gICAgcyA9IGwgPiAwICYmIGwgPCAxID8gMCA6IGg7XG4gIH1cbiAgcmV0dXJuIG5ldyBIc2woaCwgcywgbCwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhzbChoLCBzLCBsLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gaHNsQ29udmVydChoKSA6IG5ldyBIc2woaCwgcywgbCwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5mdW5jdGlvbiBIc2woaCwgcywgbCwgb3BhY2l0eSkge1xuICB0aGlzLmggPSAraDtcbiAgdGhpcy5zID0gK3M7XG4gIHRoaXMubCA9ICtsO1xuICB0aGlzLm9wYWNpdHkgPSArb3BhY2l0eTtcbn1cblxuZGVmaW5lKEhzbCwgaHNsLCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXIoaykge1xuICAgIGsgPSBrID09IG51bGwgPyBicmlnaHRlciA6IE1hdGgucG93KGJyaWdodGVyLCBrKTtcbiAgICByZXR1cm4gbmV3IEhzbCh0aGlzLmgsIHRoaXMucywgdGhpcy5sICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgZGFya2VyKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gZGFya2VyIDogTWF0aC5wb3coZGFya2VyLCBrKTtcbiAgICByZXR1cm4gbmV3IEhzbCh0aGlzLmgsIHRoaXMucywgdGhpcy5sICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgcmdiKCkge1xuICAgIHZhciBoID0gdGhpcy5oICUgMzYwICsgKHRoaXMuaCA8IDApICogMzYwLFxuICAgICAgICBzID0gaXNOYU4oaCkgfHwgaXNOYU4odGhpcy5zKSA/IDAgOiB0aGlzLnMsXG4gICAgICAgIGwgPSB0aGlzLmwsXG4gICAgICAgIG0yID0gbCArIChsIDwgMC41ID8gbCA6IDEgLSBsKSAqIHMsXG4gICAgICAgIG0xID0gMiAqIGwgLSBtMjtcbiAgICByZXR1cm4gbmV3IFJnYihcbiAgICAgIGhzbDJyZ2IoaCA+PSAyNDAgPyBoIC0gMjQwIDogaCArIDEyMCwgbTEsIG0yKSxcbiAgICAgIGhzbDJyZ2IoaCwgbTEsIG0yKSxcbiAgICAgIGhzbDJyZ2IoaCA8IDEyMCA/IGggKyAyNDAgOiBoIC0gMTIwLCBtMSwgbTIpLFxuICAgICAgdGhpcy5vcGFjaXR5XG4gICAgKTtcbiAgfSxcbiAgY2xhbXAoKSB7XG4gICAgcmV0dXJuIG5ldyBIc2woY2xhbXBoKHRoaXMuaCksIGNsYW1wdCh0aGlzLnMpLCBjbGFtcHQodGhpcy5sKSwgY2xhbXBhKHRoaXMub3BhY2l0eSkpO1xuICB9LFxuICBkaXNwbGF5YWJsZSgpIHtcbiAgICByZXR1cm4gKDAgPD0gdGhpcy5zICYmIHRoaXMucyA8PSAxIHx8IGlzTmFOKHRoaXMucykpXG4gICAgICAgICYmICgwIDw9IHRoaXMubCAmJiB0aGlzLmwgPD0gMSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5vcGFjaXR5ICYmIHRoaXMub3BhY2l0eSA8PSAxKTtcbiAgfSxcbiAgZm9ybWF0SHNsKCkge1xuICAgIGNvbnN0IGEgPSBjbGFtcGEodGhpcy5vcGFjaXR5KTtcbiAgICByZXR1cm4gYCR7YSA9PT0gMSA/IFwiaHNsKFwiIDogXCJoc2xhKFwifSR7Y2xhbXBoKHRoaXMuaCl9LCAke2NsYW1wdCh0aGlzLnMpICogMTAwfSUsICR7Y2xhbXB0KHRoaXMubCkgKiAxMDB9JSR7YSA9PT0gMSA/IFwiKVwiIDogYCwgJHthfSlgfWA7XG4gIH1cbn0pKTtcblxuZnVuY3Rpb24gY2xhbXBoKHZhbHVlKSB7XG4gIHZhbHVlID0gKHZhbHVlIHx8IDApICUgMzYwO1xuICByZXR1cm4gdmFsdWUgPCAwID8gdmFsdWUgKyAzNjAgOiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gY2xhbXB0KHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWx1ZSB8fCAwKSk7XG59XG5cbi8qIEZyb20gRnZEIDEzLjM3LCBDU1MgQ29sb3IgTW9kdWxlIExldmVsIDMgKi9cbmZ1bmN0aW9uIGhzbDJyZ2IoaCwgbTEsIG0yKSB7XG4gIHJldHVybiAoaCA8IDYwID8gbTEgKyAobTIgLSBtMSkgKiBoIC8gNjBcbiAgICAgIDogaCA8IDE4MCA/IG0yXG4gICAgICA6IGggPCAyNDAgPyBtMSArIChtMiAtIG0xKSAqICgyNDAgLSBoKSAvIDYwXG4gICAgICA6IG0xKSAqIDI1NTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHggPT4gKCkgPT4geDtcbiIsImltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuXG5mdW5jdGlvbiBsaW5lYXIoYSwgZCkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBhICsgdCAqIGQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGV4cG9uZW50aWFsKGEsIGIsIHkpIHtcbiAgcmV0dXJuIGEgPSBNYXRoLnBvdyhhLCB5KSwgYiA9IE1hdGgucG93KGIsIHkpIC0gYSwgeSA9IDEgLyB5LCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIE1hdGgucG93KGEgKyB0ICogYiwgeSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodWUoYSwgYikge1xuICB2YXIgZCA9IGIgLSBhO1xuICByZXR1cm4gZCA/IGxpbmVhcihhLCBkID4gMTgwIHx8IGQgPCAtMTgwID8gZCAtIDM2MCAqIE1hdGgucm91bmQoZCAvIDM2MCkgOiBkKSA6IGNvbnN0YW50KGlzTmFOKGEpID8gYiA6IGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtbWEoeSkge1xuICByZXR1cm4gKHkgPSAreSkgPT09IDEgPyBub2dhbW1hIDogZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBiIC0gYSA/IGV4cG9uZW50aWFsKGEsIGIsIHkpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vZ2FtbWEoYSwgYikge1xuICB2YXIgZCA9IGIgLSBhO1xuICByZXR1cm4gZCA/IGxpbmVhcihhLCBkKSA6IGNvbnN0YW50KGlzTmFOKGEpID8gYiA6IGEpO1xufVxuIiwiaW1wb3J0IHtyZ2IgYXMgY29sb3JSZ2J9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IGJhc2lzIGZyb20gXCIuL2Jhc2lzLmpzXCI7XG5pbXBvcnQgYmFzaXNDbG9zZWQgZnJvbSBcIi4vYmFzaXNDbG9zZWQuanNcIjtcbmltcG9ydCBub2dhbW1hLCB7Z2FtbWF9IGZyb20gXCIuL2NvbG9yLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiByZ2JHYW1tYSh5KSB7XG4gIHZhciBjb2xvciA9IGdhbW1hKHkpO1xuXG4gIGZ1bmN0aW9uIHJnYihzdGFydCwgZW5kKSB7XG4gICAgdmFyIHIgPSBjb2xvcigoc3RhcnQgPSBjb2xvclJnYihzdGFydCkpLnIsIChlbmQgPSBjb2xvclJnYihlbmQpKS5yKSxcbiAgICAgICAgZyA9IGNvbG9yKHN0YXJ0LmcsIGVuZC5nKSxcbiAgICAgICAgYiA9IGNvbG9yKHN0YXJ0LmIsIGVuZC5iKSxcbiAgICAgICAgb3BhY2l0eSA9IG5vZ2FtbWEoc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICBzdGFydC5yID0gcih0KTtcbiAgICAgIHN0YXJ0LmcgPSBnKHQpO1xuICAgICAgc3RhcnQuYiA9IGIodCk7XG4gICAgICBzdGFydC5vcGFjaXR5ID0gb3BhY2l0eSh0KTtcbiAgICAgIHJldHVybiBzdGFydCArIFwiXCI7XG4gICAgfTtcbiAgfVxuXG4gIHJnYi5nYW1tYSA9IHJnYkdhbW1hO1xuXG4gIHJldHVybiByZ2I7XG59KSgxKTtcblxuZnVuY3Rpb24gcmdiU3BsaW5lKHNwbGluZSkge1xuICByZXR1cm4gZnVuY3Rpb24oY29sb3JzKSB7XG4gICAgdmFyIG4gPSBjb2xvcnMubGVuZ3RoLFxuICAgICAgICByID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBnID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBiID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBpLCBjb2xvcjtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBjb2xvciA9IGNvbG9yUmdiKGNvbG9yc1tpXSk7XG4gICAgICByW2ldID0gY29sb3IuciB8fCAwO1xuICAgICAgZ1tpXSA9IGNvbG9yLmcgfHwgMDtcbiAgICAgIGJbaV0gPSBjb2xvci5iIHx8IDA7XG4gICAgfVxuICAgIHIgPSBzcGxpbmUocik7XG4gICAgZyA9IHNwbGluZShnKTtcbiAgICBiID0gc3BsaW5lKGIpO1xuICAgIGNvbG9yLm9wYWNpdHkgPSAxO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICBjb2xvci5yID0gcih0KTtcbiAgICAgIGNvbG9yLmcgPSBnKHQpO1xuICAgICAgY29sb3IuYiA9IGIodCk7XG4gICAgICByZXR1cm4gY29sb3IgKyBcIlwiO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCB2YXIgcmdiQmFzaXMgPSByZ2JTcGxpbmUoYmFzaXMpO1xuZXhwb3J0IHZhciByZ2JCYXNpc0Nsb3NlZCA9IHJnYlNwbGluZShiYXNpc0Nsb3NlZCk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIGlmICghYikgYiA9IFtdO1xuICB2YXIgbiA9IGEgPyBNYXRoLm1pbihiLmxlbmd0aCwgYS5sZW5ndGgpIDogMCxcbiAgICAgIGMgPSBiLnNsaWNlKCksXG4gICAgICBpO1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIGNbaV0gPSBhW2ldICogKDEgLSB0KSArIGJbaV0gKiB0O1xuICAgIHJldHVybiBjO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXJBcnJheSh4KSB7XG4gIHJldHVybiBBcnJheUJ1ZmZlci5pc1ZpZXcoeCkgJiYgISh4IGluc3RhbmNlb2YgRGF0YVZpZXcpO1xufVxuIiwiaW1wb3J0IHZhbHVlIGZyb20gXCIuL3ZhbHVlLmpzXCI7XG5pbXBvcnQgbnVtYmVyQXJyYXksIHtpc051bWJlckFycmF5fSBmcm9tIFwiLi9udW1iZXJBcnJheS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiAoaXNOdW1iZXJBcnJheShiKSA/IG51bWJlckFycmF5IDogZ2VuZXJpY0FycmF5KShhLCBiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyaWNBcnJheShhLCBiKSB7XG4gIHZhciBuYiA9IGIgPyBiLmxlbmd0aCA6IDAsXG4gICAgICBuYSA9IGEgPyBNYXRoLm1pbihuYiwgYS5sZW5ndGgpIDogMCxcbiAgICAgIHggPSBuZXcgQXJyYXkobmEpLFxuICAgICAgYyA9IG5ldyBBcnJheShuYiksXG4gICAgICBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBuYTsgKytpKSB4W2ldID0gdmFsdWUoYVtpXSwgYltpXSk7XG4gIGZvciAoOyBpIDwgbmI7ICsraSkgY1tpXSA9IGJbaV07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbmE7ICsraSkgY1tpXSA9IHhbaV0odCk7XG4gICAgcmV0dXJuIGM7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBkID0gbmV3IERhdGU7XG4gIHJldHVybiBhID0gK2EsIGIgPSArYiwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBkLnNldFRpbWUoYSAqICgxIC0gdCkgKyBiICogdCksIGQ7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBhID0gK2EsIGIgPSArYiwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBhICogKDEgLSB0KSArIGIgKiB0O1xuICB9O1xufVxuIiwiaW1wb3J0IHZhbHVlIGZyb20gXCIuL3ZhbHVlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIGkgPSB7fSxcbiAgICAgIGMgPSB7fSxcbiAgICAgIGs7XG5cbiAgaWYgKGEgPT09IG51bGwgfHwgdHlwZW9mIGEgIT09IFwib2JqZWN0XCIpIGEgPSB7fTtcbiAgaWYgKGIgPT09IG51bGwgfHwgdHlwZW9mIGIgIT09IFwib2JqZWN0XCIpIGIgPSB7fTtcblxuICBmb3IgKGsgaW4gYikge1xuICAgIGlmIChrIGluIGEpIHtcbiAgICAgIGlba10gPSB2YWx1ZShhW2tdLCBiW2tdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY1trXSA9IGJba107XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICBmb3IgKGsgaW4gaSkgY1trXSA9IGlba10odCk7XG4gICAgcmV0dXJuIGM7XG4gIH07XG59XG4iLCJpbXBvcnQgbnVtYmVyIGZyb20gXCIuL251bWJlci5qc1wiO1xuXG52YXIgcmVBID0gL1stK10/KD86XFxkK1xcLj9cXGQqfFxcLj9cXGQrKSg/OltlRV1bLStdP1xcZCspPy9nLFxuICAgIHJlQiA9IG5ldyBSZWdFeHAocmVBLnNvdXJjZSwgXCJnXCIpO1xuXG5mdW5jdGlvbiB6ZXJvKGIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBiO1xuICB9O1xufVxuXG5mdW5jdGlvbiBvbmUoYikge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBiKHQpICsgXCJcIjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgYmkgPSByZUEubGFzdEluZGV4ID0gcmVCLmxhc3RJbmRleCA9IDAsIC8vIHNjYW4gaW5kZXggZm9yIG5leHQgbnVtYmVyIGluIGJcbiAgICAgIGFtLCAvLyBjdXJyZW50IG1hdGNoIGluIGFcbiAgICAgIGJtLCAvLyBjdXJyZW50IG1hdGNoIGluIGJcbiAgICAgIGJzLCAvLyBzdHJpbmcgcHJlY2VkaW5nIGN1cnJlbnQgbnVtYmVyIGluIGIsIGlmIGFueVxuICAgICAgaSA9IC0xLCAvLyBpbmRleCBpbiBzXG4gICAgICBzID0gW10sIC8vIHN0cmluZyBjb25zdGFudHMgYW5kIHBsYWNlaG9sZGVyc1xuICAgICAgcSA9IFtdOyAvLyBudW1iZXIgaW50ZXJwb2xhdG9yc1xuXG4gIC8vIENvZXJjZSBpbnB1dHMgdG8gc3RyaW5ncy5cbiAgYSA9IGEgKyBcIlwiLCBiID0gYiArIFwiXCI7XG5cbiAgLy8gSW50ZXJwb2xhdGUgcGFpcnMgb2YgbnVtYmVycyBpbiBhICYgYi5cbiAgd2hpbGUgKChhbSA9IHJlQS5leGVjKGEpKVxuICAgICAgJiYgKGJtID0gcmVCLmV4ZWMoYikpKSB7XG4gICAgaWYgKChicyA9IGJtLmluZGV4KSA+IGJpKSB7IC8vIGEgc3RyaW5nIHByZWNlZGVzIHRoZSBuZXh0IG51bWJlciBpbiBiXG4gICAgICBicyA9IGIuc2xpY2UoYmksIGJzKTtcbiAgICAgIGlmIChzW2ldKSBzW2ldICs9IGJzOyAvLyBjb2FsZXNjZSB3aXRoIHByZXZpb3VzIHN0cmluZ1xuICAgICAgZWxzZSBzWysraV0gPSBicztcbiAgICB9XG4gICAgaWYgKChhbSA9IGFtWzBdKSA9PT0gKGJtID0gYm1bMF0pKSB7IC8vIG51bWJlcnMgaW4gYSAmIGIgbWF0Y2hcbiAgICAgIGlmIChzW2ldKSBzW2ldICs9IGJtOyAvLyBjb2FsZXNjZSB3aXRoIHByZXZpb3VzIHN0cmluZ1xuICAgICAgZWxzZSBzWysraV0gPSBibTtcbiAgICB9IGVsc2UgeyAvLyBpbnRlcnBvbGF0ZSBub24tbWF0Y2hpbmcgbnVtYmVyc1xuICAgICAgc1srK2ldID0gbnVsbDtcbiAgICAgIHEucHVzaCh7aTogaSwgeDogbnVtYmVyKGFtLCBibSl9KTtcbiAgICB9XG4gICAgYmkgPSByZUIubGFzdEluZGV4O1xuICB9XG5cbiAgLy8gQWRkIHJlbWFpbnMgb2YgYi5cbiAgaWYgKGJpIDwgYi5sZW5ndGgpIHtcbiAgICBicyA9IGIuc2xpY2UoYmkpO1xuICAgIGlmIChzW2ldKSBzW2ldICs9IGJzOyAvLyBjb2FsZXNjZSB3aXRoIHByZXZpb3VzIHN0cmluZ1xuICAgIGVsc2Ugc1srK2ldID0gYnM7XG4gIH1cblxuICAvLyBTcGVjaWFsIG9wdGltaXphdGlvbiBmb3Igb25seSBhIHNpbmdsZSBtYXRjaC5cbiAgLy8gT3RoZXJ3aXNlLCBpbnRlcnBvbGF0ZSBlYWNoIG9mIHRoZSBudW1iZXJzIGFuZCByZWpvaW4gdGhlIHN0cmluZy5cbiAgcmV0dXJuIHMubGVuZ3RoIDwgMiA/IChxWzBdXG4gICAgICA/IG9uZShxWzBdLngpXG4gICAgICA6IHplcm8oYikpXG4gICAgICA6IChiID0gcS5sZW5ndGgsIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbzsgaSA8IGI7ICsraSkgc1sobyA9IHFbaV0pLmldID0gby54KHQpO1xuICAgICAgICAgIHJldHVybiBzLmpvaW4oXCJcIik7XG4gICAgICAgIH0pO1xufVxuIiwiaW1wb3J0IHtjb2xvcn0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgcmdiIGZyb20gXCIuL3JnYi5qc1wiO1xuaW1wb3J0IHtnZW5lcmljQXJyYXl9IGZyb20gXCIuL2FycmF5LmpzXCI7XG5pbXBvcnQgZGF0ZSBmcm9tIFwiLi9kYXRlLmpzXCI7XG5pbXBvcnQgbnVtYmVyIGZyb20gXCIuL251bWJlci5qc1wiO1xuaW1wb3J0IG9iamVjdCBmcm9tIFwiLi9vYmplY3QuanNcIjtcbmltcG9ydCBzdHJpbmcgZnJvbSBcIi4vc3RyaW5nLmpzXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBudW1iZXJBcnJheSwge2lzTnVtYmVyQXJyYXl9IGZyb20gXCIuL251bWJlckFycmF5LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIHQgPSB0eXBlb2YgYiwgYztcbiAgcmV0dXJuIGIgPT0gbnVsbCB8fCB0ID09PSBcImJvb2xlYW5cIiA/IGNvbnN0YW50KGIpXG4gICAgICA6ICh0ID09PSBcIm51bWJlclwiID8gbnVtYmVyXG4gICAgICA6IHQgPT09IFwic3RyaW5nXCIgPyAoKGMgPSBjb2xvcihiKSkgPyAoYiA9IGMsIHJnYikgOiBzdHJpbmcpXG4gICAgICA6IGIgaW5zdGFuY2VvZiBjb2xvciA/IHJnYlxuICAgICAgOiBiIGluc3RhbmNlb2YgRGF0ZSA/IGRhdGVcbiAgICAgIDogaXNOdW1iZXJBcnJheShiKSA/IG51bWJlckFycmF5XG4gICAgICA6IEFycmF5LmlzQXJyYXkoYikgPyBnZW5lcmljQXJyYXlcbiAgICAgIDogdHlwZW9mIGIudmFsdWVPZiAhPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBiLnRvU3RyaW5nICE9PSBcImZ1bmN0aW9uXCIgfHwgaXNOYU4oYikgPyBvYmplY3RcbiAgICAgIDogbnVtYmVyKShhLCBiKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgPSArYSwgYiA9ICtiLCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoYSAqICgxIC0gdCkgKyBiICogdCk7XG4gIH07XG59XG4iLCJ2YXIgZGVncmVlcyA9IDE4MCAvIE1hdGguUEk7XG5cbmV4cG9ydCB2YXIgaWRlbnRpdHkgPSB7XG4gIHRyYW5zbGF0ZVg6IDAsXG4gIHRyYW5zbGF0ZVk6IDAsXG4gIHJvdGF0ZTogMCxcbiAgc2tld1g6IDAsXG4gIHNjYWxlWDogMSxcbiAgc2NhbGVZOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhciBzY2FsZVgsIHNjYWxlWSwgc2tld1g7XG4gIGlmIChzY2FsZVggPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYikpIGEgLz0gc2NhbGVYLCBiIC89IHNjYWxlWDtcbiAgaWYgKHNrZXdYID0gYSAqIGMgKyBiICogZCkgYyAtPSBhICogc2tld1gsIGQgLT0gYiAqIHNrZXdYO1xuICBpZiAoc2NhbGVZID0gTWF0aC5zcXJ0KGMgKiBjICsgZCAqIGQpKSBjIC89IHNjYWxlWSwgZCAvPSBzY2FsZVksIHNrZXdYIC89IHNjYWxlWTtcbiAgaWYgKGEgKiBkIDwgYiAqIGMpIGEgPSAtYSwgYiA9IC1iLCBza2V3WCA9IC1za2V3WCwgc2NhbGVYID0gLXNjYWxlWDtcbiAgcmV0dXJuIHtcbiAgICB0cmFuc2xhdGVYOiBlLFxuICAgIHRyYW5zbGF0ZVk6IGYsXG4gICAgcm90YXRlOiBNYXRoLmF0YW4yKGIsIGEpICogZGVncmVlcyxcbiAgICBza2V3WDogTWF0aC5hdGFuKHNrZXdYKSAqIGRlZ3JlZXMsXG4gICAgc2NhbGVYOiBzY2FsZVgsXG4gICAgc2NhbGVZOiBzY2FsZVlcbiAgfTtcbn1cbiIsImltcG9ydCBkZWNvbXBvc2UsIHtpZGVudGl0eX0gZnJvbSBcIi4vZGVjb21wb3NlLmpzXCI7XG5cbnZhciBzdmdOb2RlO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ3NzKHZhbHVlKSB7XG4gIGNvbnN0IG0gPSBuZXcgKHR5cGVvZiBET01NYXRyaXggPT09IFwiZnVuY3Rpb25cIiA/IERPTU1hdHJpeCA6IFdlYktpdENTU01hdHJpeCkodmFsdWUgKyBcIlwiKTtcbiAgcmV0dXJuIG0uaXNJZGVudGl0eSA/IGlkZW50aXR5IDogZGVjb21wb3NlKG0uYSwgbS5iLCBtLmMsIG0uZCwgbS5lLCBtLmYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTdmcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBpZGVudGl0eTtcbiAgaWYgKCFzdmdOb2RlKSBzdmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJnXCIpO1xuICBzdmdOb2RlLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCB2YWx1ZSk7XG4gIGlmICghKHZhbHVlID0gc3ZnTm9kZS50cmFuc2Zvcm0uYmFzZVZhbC5jb25zb2xpZGF0ZSgpKSkgcmV0dXJuIGlkZW50aXR5O1xuICB2YWx1ZSA9IHZhbHVlLm1hdHJpeDtcbiAgcmV0dXJuIGRlY29tcG9zZSh2YWx1ZS5hLCB2YWx1ZS5iLCB2YWx1ZS5jLCB2YWx1ZS5kLCB2YWx1ZS5lLCB2YWx1ZS5mKTtcbn1cbiIsImltcG9ydCBudW1iZXIgZnJvbSBcIi4uL251bWJlci5qc1wiO1xuaW1wb3J0IHtwYXJzZUNzcywgcGFyc2VTdmd9IGZyb20gXCIuL3BhcnNlLmpzXCI7XG5cbmZ1bmN0aW9uIGludGVycG9sYXRlVHJhbnNmb3JtKHBhcnNlLCBweENvbW1hLCBweFBhcmVuLCBkZWdQYXJlbikge1xuXG4gIGZ1bmN0aW9uIHBvcChzKSB7XG4gICAgcmV0dXJuIHMubGVuZ3RoID8gcy5wb3AoKSArIFwiIFwiIDogXCJcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zbGF0ZSh4YSwgeWEsIHhiLCB5YiwgcywgcSkge1xuICAgIGlmICh4YSAhPT0geGIgfHwgeWEgIT09IHliKSB7XG4gICAgICB2YXIgaSA9IHMucHVzaChcInRyYW5zbGF0ZShcIiwgbnVsbCwgcHhDb21tYSwgbnVsbCwgcHhQYXJlbik7XG4gICAgICBxLnB1c2goe2k6IGkgLSA0LCB4OiBudW1iZXIoeGEsIHhiKX0sIHtpOiBpIC0gMiwgeDogbnVtYmVyKHlhLCB5Yil9KTtcbiAgICB9IGVsc2UgaWYgKHhiIHx8IHliKSB7XG4gICAgICBzLnB1c2goXCJ0cmFuc2xhdGUoXCIgKyB4YiArIHB4Q29tbWEgKyB5YiArIHB4UGFyZW4pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJvdGF0ZShhLCBiLCBzLCBxKSB7XG4gICAgaWYgKGEgIT09IGIpIHtcbiAgICAgIGlmIChhIC0gYiA+IDE4MCkgYiArPSAzNjA7IGVsc2UgaWYgKGIgLSBhID4gMTgwKSBhICs9IDM2MDsgLy8gc2hvcnRlc3QgcGF0aFxuICAgICAgcS5wdXNoKHtpOiBzLnB1c2gocG9wKHMpICsgXCJyb3RhdGUoXCIsIG51bGwsIGRlZ1BhcmVuKSAtIDIsIHg6IG51bWJlcihhLCBiKX0pO1xuICAgIH0gZWxzZSBpZiAoYikge1xuICAgICAgcy5wdXNoKHBvcChzKSArIFwicm90YXRlKFwiICsgYiArIGRlZ1BhcmVuKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBza2V3WChhLCBiLCBzLCBxKSB7XG4gICAgaWYgKGEgIT09IGIpIHtcbiAgICAgIHEucHVzaCh7aTogcy5wdXNoKHBvcChzKSArIFwic2tld1goXCIsIG51bGwsIGRlZ1BhcmVuKSAtIDIsIHg6IG51bWJlcihhLCBiKX0pO1xuICAgIH0gZWxzZSBpZiAoYikge1xuICAgICAgcy5wdXNoKHBvcChzKSArIFwic2tld1goXCIgKyBiICsgZGVnUGFyZW4pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNjYWxlKHhhLCB5YSwgeGIsIHliLCBzLCBxKSB7XG4gICAgaWYgKHhhICE9PSB4YiB8fCB5YSAhPT0geWIpIHtcbiAgICAgIHZhciBpID0gcy5wdXNoKHBvcChzKSArIFwic2NhbGUoXCIsIG51bGwsIFwiLFwiLCBudWxsLCBcIilcIik7XG4gICAgICBxLnB1c2goe2k6IGkgLSA0LCB4OiBudW1iZXIoeGEsIHhiKX0sIHtpOiBpIC0gMiwgeDogbnVtYmVyKHlhLCB5Yil9KTtcbiAgICB9IGVsc2UgaWYgKHhiICE9PSAxIHx8IHliICE9PSAxKSB7XG4gICAgICBzLnB1c2gocG9wKHMpICsgXCJzY2FsZShcIiArIHhiICsgXCIsXCIgKyB5YiArIFwiKVwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oYSwgYikge1xuICAgIHZhciBzID0gW10sIC8vIHN0cmluZyBjb25zdGFudHMgYW5kIHBsYWNlaG9sZGVyc1xuICAgICAgICBxID0gW107IC8vIG51bWJlciBpbnRlcnBvbGF0b3JzXG4gICAgYSA9IHBhcnNlKGEpLCBiID0gcGFyc2UoYik7XG4gICAgdHJhbnNsYXRlKGEudHJhbnNsYXRlWCwgYS50cmFuc2xhdGVZLCBiLnRyYW5zbGF0ZVgsIGIudHJhbnNsYXRlWSwgcywgcSk7XG4gICAgcm90YXRlKGEucm90YXRlLCBiLnJvdGF0ZSwgcywgcSk7XG4gICAgc2tld1goYS5za2V3WCwgYi5za2V3WCwgcywgcSk7XG4gICAgc2NhbGUoYS5zY2FsZVgsIGEuc2NhbGVZLCBiLnNjYWxlWCwgYi5zY2FsZVksIHMsIHEpO1xuICAgIGEgPSBiID0gbnVsbDsgLy8gZ2NcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgdmFyIGkgPSAtMSwgbiA9IHEubGVuZ3RoLCBvO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIHNbKG8gPSBxW2ldKS5pXSA9IG8ueCh0KTtcbiAgICAgIHJldHVybiBzLmpvaW4oXCJcIik7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IHZhciBpbnRlcnBvbGF0ZVRyYW5zZm9ybUNzcyA9IGludGVycG9sYXRlVHJhbnNmb3JtKHBhcnNlQ3NzLCBcInB4LCBcIiwgXCJweClcIiwgXCJkZWcpXCIpO1xuZXhwb3J0IHZhciBpbnRlcnBvbGF0ZVRyYW5zZm9ybVN2ZyA9IGludGVycG9sYXRlVHJhbnNmb3JtKHBhcnNlU3ZnLCBcIiwgXCIsIFwiKVwiLCBcIilcIik7XG4iLCJ2YXIgZnJhbWUgPSAwLCAvLyBpcyBhbiBhbmltYXRpb24gZnJhbWUgcGVuZGluZz9cbiAgICB0aW1lb3V0ID0gMCwgLy8gaXMgYSB0aW1lb3V0IHBlbmRpbmc/XG4gICAgaW50ZXJ2YWwgPSAwLCAvLyBhcmUgYW55IHRpbWVycyBhY3RpdmU/XG4gICAgcG9rZURlbGF5ID0gMTAwMCwgLy8gaG93IGZyZXF1ZW50bHkgd2UgY2hlY2sgZm9yIGNsb2NrIHNrZXdcbiAgICB0YXNrSGVhZCxcbiAgICB0YXNrVGFpbCxcbiAgICBjbG9ja0xhc3QgPSAwLFxuICAgIGNsb2NrTm93ID0gMCxcbiAgICBjbG9ja1NrZXcgPSAwLFxuICAgIGNsb2NrID0gdHlwZW9mIHBlcmZvcm1hbmNlID09PSBcIm9iamVjdFwiICYmIHBlcmZvcm1hbmNlLm5vdyA/IHBlcmZvcm1hbmNlIDogRGF0ZSxcbiAgICBzZXRGcmFtZSA9IHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpIDogZnVuY3Rpb24oZikgeyBzZXRUaW1lb3V0KGYsIDE3KTsgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIGNsb2NrTm93IHx8IChzZXRGcmFtZShjbGVhck5vdyksIGNsb2NrTm93ID0gY2xvY2subm93KCkgKyBjbG9ja1NrZXcpO1xufVxuXG5mdW5jdGlvbiBjbGVhck5vdygpIHtcbiAgY2xvY2tOb3cgPSAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGltZXIoKSB7XG4gIHRoaXMuX2NhbGwgPVxuICB0aGlzLl90aW1lID1cbiAgdGhpcy5fbmV4dCA9IG51bGw7XG59XG5cblRpbWVyLnByb3RvdHlwZSA9IHRpbWVyLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFRpbWVyLFxuICByZXN0YXJ0OiBmdW5jdGlvbihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJjYWxsYmFjayBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICB0aW1lID0gKHRpbWUgPT0gbnVsbCA/IG5vdygpIDogK3RpbWUpICsgKGRlbGF5ID09IG51bGwgPyAwIDogK2RlbGF5KTtcbiAgICBpZiAoIXRoaXMuX25leHQgJiYgdGFza1RhaWwgIT09IHRoaXMpIHtcbiAgICAgIGlmICh0YXNrVGFpbCkgdGFza1RhaWwuX25leHQgPSB0aGlzO1xuICAgICAgZWxzZSB0YXNrSGVhZCA9IHRoaXM7XG4gICAgICB0YXNrVGFpbCA9IHRoaXM7XG4gICAgfVxuICAgIHRoaXMuX2NhbGwgPSBjYWxsYmFjaztcbiAgICB0aGlzLl90aW1lID0gdGltZTtcbiAgICBzbGVlcCgpO1xuICB9LFxuICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fY2FsbCkge1xuICAgICAgdGhpcy5fY2FsbCA9IG51bGw7XG4gICAgICB0aGlzLl90aW1lID0gSW5maW5pdHk7XG4gICAgICBzbGVlcCgpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVyKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICB2YXIgdCA9IG5ldyBUaW1lcjtcbiAgdC5yZXN0YXJ0KGNhbGxiYWNrLCBkZWxheSwgdGltZSk7XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGltZXJGbHVzaCgpIHtcbiAgbm93KCk7IC8vIEdldCB0aGUgY3VycmVudCB0aW1lLCBpZiBub3QgYWxyZWFkeSBzZXQuXG4gICsrZnJhbWU7IC8vIFByZXRlbmQgd2XigJl2ZSBzZXQgYW4gYWxhcm0sIGlmIHdlIGhhdmVu4oCZdCBhbHJlYWR5LlxuICB2YXIgdCA9IHRhc2tIZWFkLCBlO1xuICB3aGlsZSAodCkge1xuICAgIGlmICgoZSA9IGNsb2NrTm93IC0gdC5fdGltZSkgPj0gMCkgdC5fY2FsbC5jYWxsKHVuZGVmaW5lZCwgZSk7XG4gICAgdCA9IHQuX25leHQ7XG4gIH1cbiAgLS1mcmFtZTtcbn1cblxuZnVuY3Rpb24gd2FrZSgpIHtcbiAgY2xvY2tOb3cgPSAoY2xvY2tMYXN0ID0gY2xvY2subm93KCkpICsgY2xvY2tTa2V3O1xuICBmcmFtZSA9IHRpbWVvdXQgPSAwO1xuICB0cnkge1xuICAgIHRpbWVyRmx1c2goKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBmcmFtZSA9IDA7XG4gICAgbmFwKCk7XG4gICAgY2xvY2tOb3cgPSAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBva2UoKSB7XG4gIHZhciBub3cgPSBjbG9jay5ub3coKSwgZGVsYXkgPSBub3cgLSBjbG9ja0xhc3Q7XG4gIGlmIChkZWxheSA+IHBva2VEZWxheSkgY2xvY2tTa2V3IC09IGRlbGF5LCBjbG9ja0xhc3QgPSBub3c7XG59XG5cbmZ1bmN0aW9uIG5hcCgpIHtcbiAgdmFyIHQwLCB0MSA9IHRhc2tIZWFkLCB0MiwgdGltZSA9IEluZmluaXR5O1xuICB3aGlsZSAodDEpIHtcbiAgICBpZiAodDEuX2NhbGwpIHtcbiAgICAgIGlmICh0aW1lID4gdDEuX3RpbWUpIHRpbWUgPSB0MS5fdGltZTtcbiAgICAgIHQwID0gdDEsIHQxID0gdDEuX25leHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQyID0gdDEuX25leHQsIHQxLl9uZXh0ID0gbnVsbDtcbiAgICAgIHQxID0gdDAgPyB0MC5fbmV4dCA9IHQyIDogdGFza0hlYWQgPSB0MjtcbiAgICB9XG4gIH1cbiAgdGFza1RhaWwgPSB0MDtcbiAgc2xlZXAodGltZSk7XG59XG5cbmZ1bmN0aW9uIHNsZWVwKHRpbWUpIHtcbiAgaWYgKGZyYW1lKSByZXR1cm47IC8vIFNvb25lc3QgYWxhcm0gYWxyZWFkeSBzZXQsIG9yIHdpbGwgYmUuXG4gIGlmICh0aW1lb3V0KSB0aW1lb3V0ID0gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICB2YXIgZGVsYXkgPSB0aW1lIC0gY2xvY2tOb3c7IC8vIFN0cmljdGx5IGxlc3MgdGhhbiBpZiB3ZSByZWNvbXB1dGVkIGNsb2NrTm93LlxuICBpZiAoZGVsYXkgPiAyNCkge1xuICAgIGlmICh0aW1lIDwgSW5maW5pdHkpIHRpbWVvdXQgPSBzZXRUaW1lb3V0KHdha2UsIHRpbWUgLSBjbG9jay5ub3coKSAtIGNsb2NrU2tldyk7XG4gICAgaWYgKGludGVydmFsKSBpbnRlcnZhbCA9IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9IGVsc2Uge1xuICAgIGlmICghaW50ZXJ2YWwpIGNsb2NrTGFzdCA9IGNsb2NrLm5vdygpLCBpbnRlcnZhbCA9IHNldEludGVydmFsKHBva2UsIHBva2VEZWxheSk7XG4gICAgZnJhbWUgPSAxLCBzZXRGcmFtZSh3YWtlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtUaW1lcn0gZnJvbSBcIi4vdGltZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gIHZhciB0ID0gbmV3IFRpbWVyO1xuICBkZWxheSA9IGRlbGF5ID09IG51bGwgPyAwIDogK2RlbGF5O1xuICB0LnJlc3RhcnQoZWxhcHNlZCA9PiB7XG4gICAgdC5zdG9wKCk7XG4gICAgY2FsbGJhY2soZWxhcHNlZCArIGRlbGF5KTtcbiAgfSwgZGVsYXksIHRpbWUpO1xuICByZXR1cm4gdDtcbn1cbiIsImltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gXCJkMy1kaXNwYXRjaFwiO1xuaW1wb3J0IHt0aW1lciwgdGltZW91dH0gZnJvbSBcImQzLXRpbWVyXCI7XG5cbnZhciBlbXB0eU9uID0gZGlzcGF0Y2goXCJzdGFydFwiLCBcImVuZFwiLCBcImNhbmNlbFwiLCBcImludGVycnVwdFwiKTtcbnZhciBlbXB0eVR3ZWVuID0gW107XG5cbmV4cG9ydCB2YXIgQ1JFQVRFRCA9IDA7XG5leHBvcnQgdmFyIFNDSEVEVUxFRCA9IDE7XG5leHBvcnQgdmFyIFNUQVJUSU5HID0gMjtcbmV4cG9ydCB2YXIgU1RBUlRFRCA9IDM7XG5leHBvcnQgdmFyIFJVTk5JTkcgPSA0O1xuZXhwb3J0IHZhciBFTkRJTkcgPSA1O1xuZXhwb3J0IHZhciBFTkRFRCA9IDY7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIG5hbWUsIGlkLCBpbmRleCwgZ3JvdXAsIHRpbWluZykge1xuICB2YXIgc2NoZWR1bGVzID0gbm9kZS5fX3RyYW5zaXRpb247XG4gIGlmICghc2NoZWR1bGVzKSBub2RlLl9fdHJhbnNpdGlvbiA9IHt9O1xuICBlbHNlIGlmIChpZCBpbiBzY2hlZHVsZXMpIHJldHVybjtcbiAgY3JlYXRlKG5vZGUsIGlkLCB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBpbmRleDogaW5kZXgsIC8vIEZvciBjb250ZXh0IGR1cmluZyBjYWxsYmFjay5cbiAgICBncm91cDogZ3JvdXAsIC8vIEZvciBjb250ZXh0IGR1cmluZyBjYWxsYmFjay5cbiAgICBvbjogZW1wdHlPbixcbiAgICB0d2VlbjogZW1wdHlUd2VlbixcbiAgICB0aW1lOiB0aW1pbmcudGltZSxcbiAgICBkZWxheTogdGltaW5nLmRlbGF5LFxuICAgIGR1cmF0aW9uOiB0aW1pbmcuZHVyYXRpb24sXG4gICAgZWFzZTogdGltaW5nLmVhc2UsXG4gICAgdGltZXI6IG51bGwsXG4gICAgc3RhdGU6IENSRUFURURcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KG5vZGUsIGlkKSB7XG4gIHZhciBzY2hlZHVsZSA9IGdldChub2RlLCBpZCk7XG4gIGlmIChzY2hlZHVsZS5zdGF0ZSA+IENSRUFURUQpIHRocm93IG5ldyBFcnJvcihcInRvbyBsYXRlOyBhbHJlYWR5IHNjaGVkdWxlZFwiKTtcbiAgcmV0dXJuIHNjaGVkdWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0KG5vZGUsIGlkKSB7XG4gIHZhciBzY2hlZHVsZSA9IGdldChub2RlLCBpZCk7XG4gIGlmIChzY2hlZHVsZS5zdGF0ZSA+IFNUQVJURUQpIHRocm93IG5ldyBFcnJvcihcInRvbyBsYXRlOyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gIHJldHVybiBzY2hlZHVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldChub2RlLCBpZCkge1xuICB2YXIgc2NoZWR1bGUgPSBub2RlLl9fdHJhbnNpdGlvbjtcbiAgaWYgKCFzY2hlZHVsZSB8fCAhKHNjaGVkdWxlID0gc2NoZWR1bGVbaWRdKSkgdGhyb3cgbmV3IEVycm9yKFwidHJhbnNpdGlvbiBub3QgZm91bmRcIik7XG4gIHJldHVybiBzY2hlZHVsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlKG5vZGUsIGlkLCBzZWxmKSB7XG4gIHZhciBzY2hlZHVsZXMgPSBub2RlLl9fdHJhbnNpdGlvbixcbiAgICAgIHR3ZWVuO1xuXG4gIC8vIEluaXRpYWxpemUgdGhlIHNlbGYgdGltZXIgd2hlbiB0aGUgdHJhbnNpdGlvbiBpcyBjcmVhdGVkLlxuICAvLyBOb3RlIHRoZSBhY3R1YWwgZGVsYXkgaXMgbm90IGtub3duIHVudGlsIHRoZSBmaXJzdCBjYWxsYmFjayFcbiAgc2NoZWR1bGVzW2lkXSA9IHNlbGY7XG4gIHNlbGYudGltZXIgPSB0aW1lcihzY2hlZHVsZSwgMCwgc2VsZi50aW1lKTtcblxuICBmdW5jdGlvbiBzY2hlZHVsZShlbGFwc2VkKSB7XG4gICAgc2VsZi5zdGF0ZSA9IFNDSEVEVUxFRDtcbiAgICBzZWxmLnRpbWVyLnJlc3RhcnQoc3RhcnQsIHNlbGYuZGVsYXksIHNlbGYudGltZSk7XG5cbiAgICAvLyBJZiB0aGUgZWxhcHNlZCBkZWxheSBpcyBsZXNzIHRoYW4gb3VyIGZpcnN0IHNsZWVwLCBzdGFydCBpbW1lZGlhdGVseS5cbiAgICBpZiAoc2VsZi5kZWxheSA8PSBlbGFwc2VkKSBzdGFydChlbGFwc2VkIC0gc2VsZi5kZWxheSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydChlbGFwc2VkKSB7XG4gICAgdmFyIGksIGosIG4sIG87XG5cbiAgICAvLyBJZiB0aGUgc3RhdGUgaXMgbm90IFNDSEVEVUxFRCwgdGhlbiB3ZSBwcmV2aW91c2x5IGVycm9yZWQgb24gc3RhcnQuXG4gICAgaWYgKHNlbGYuc3RhdGUgIT09IFNDSEVEVUxFRCkgcmV0dXJuIHN0b3AoKTtcblxuICAgIGZvciAoaSBpbiBzY2hlZHVsZXMpIHtcbiAgICAgIG8gPSBzY2hlZHVsZXNbaV07XG4gICAgICBpZiAoby5uYW1lICE9PSBzZWxmLm5hbWUpIGNvbnRpbnVlO1xuXG4gICAgICAvLyBXaGlsZSB0aGlzIGVsZW1lbnQgYWxyZWFkeSBoYXMgYSBzdGFydGluZyB0cmFuc2l0aW9uIGR1cmluZyB0aGlzIGZyYW1lLFxuICAgICAgLy8gZGVmZXIgc3RhcnRpbmcgYW4gaW50ZXJydXB0aW5nIHRyYW5zaXRpb24gdW50aWwgdGhhdCB0cmFuc2l0aW9uIGhhcyBhXG4gICAgICAvLyBjaGFuY2UgdG8gdGljayAoYW5kIHBvc3NpYmx5IGVuZCk7IHNlZSBkMy9kMy10cmFuc2l0aW9uIzU0IVxuICAgICAgaWYgKG8uc3RhdGUgPT09IFNUQVJURUQpIHJldHVybiB0aW1lb3V0KHN0YXJ0KTtcblxuICAgICAgLy8gSW50ZXJydXB0IHRoZSBhY3RpdmUgdHJhbnNpdGlvbiwgaWYgYW55LlxuICAgICAgaWYgKG8uc3RhdGUgPT09IFJVTk5JTkcpIHtcbiAgICAgICAgby5zdGF0ZSA9IEVOREVEO1xuICAgICAgICBvLnRpbWVyLnN0b3AoKTtcbiAgICAgICAgby5vbi5jYWxsKFwiaW50ZXJydXB0XCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIG8uaW5kZXgsIG8uZ3JvdXApO1xuICAgICAgICBkZWxldGUgc2NoZWR1bGVzW2ldO1xuICAgICAgfVxuXG4gICAgICAvLyBDYW5jZWwgYW55IHByZS1lbXB0ZWQgdHJhbnNpdGlvbnMuXG4gICAgICBlbHNlIGlmICgraSA8IGlkKSB7XG4gICAgICAgIG8uc3RhdGUgPSBFTkRFRDtcbiAgICAgICAgby50aW1lci5zdG9wKCk7XG4gICAgICAgIG8ub24uY2FsbChcImNhbmNlbFwiLCBub2RlLCBub2RlLl9fZGF0YV9fLCBvLmluZGV4LCBvLmdyb3VwKTtcbiAgICAgICAgZGVsZXRlIHNjaGVkdWxlc1tpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWZlciB0aGUgZmlyc3QgdGljayB0byBlbmQgb2YgdGhlIGN1cnJlbnQgZnJhbWU7IHNlZSBkMy9kMyMxNTc2LlxuICAgIC8vIE5vdGUgdGhlIHRyYW5zaXRpb24gbWF5IGJlIGNhbmNlbGVkIGFmdGVyIHN0YXJ0IGFuZCBiZWZvcmUgdGhlIGZpcnN0IHRpY2shXG4gICAgLy8gTm90ZSB0aGlzIG11c3QgYmUgc2NoZWR1bGVkIGJlZm9yZSB0aGUgc3RhcnQgZXZlbnQ7IHNlZSBkMy9kMy10cmFuc2l0aW9uIzE2IVxuICAgIC8vIEFzc3VtaW5nIHRoaXMgaXMgc3VjY2Vzc2Z1bCwgc3Vic2VxdWVudCBjYWxsYmFja3MgZ28gc3RyYWlnaHQgdG8gdGljay5cbiAgICB0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHNlbGYuc3RhdGUgPT09IFNUQVJURUQpIHtcbiAgICAgICAgc2VsZi5zdGF0ZSA9IFJVTk5JTkc7XG4gICAgICAgIHNlbGYudGltZXIucmVzdGFydCh0aWNrLCBzZWxmLmRlbGF5LCBzZWxmLnRpbWUpO1xuICAgICAgICB0aWNrKGVsYXBzZWQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRGlzcGF0Y2ggdGhlIHN0YXJ0IGV2ZW50LlxuICAgIC8vIE5vdGUgdGhpcyBtdXN0IGJlIGRvbmUgYmVmb3JlIHRoZSB0d2VlbiBhcmUgaW5pdGlhbGl6ZWQuXG4gICAgc2VsZi5zdGF0ZSA9IFNUQVJUSU5HO1xuICAgIHNlbGYub24uY2FsbChcInN0YXJ0XCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIHNlbGYuaW5kZXgsIHNlbGYuZ3JvdXApO1xuICAgIGlmIChzZWxmLnN0YXRlICE9PSBTVEFSVElORykgcmV0dXJuOyAvLyBpbnRlcnJ1cHRlZFxuICAgIHNlbGYuc3RhdGUgPSBTVEFSVEVEO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgdHdlZW4sIGRlbGV0aW5nIG51bGwgdHdlZW4uXG4gICAgdHdlZW4gPSBuZXcgQXJyYXkobiA9IHNlbGYudHdlZW4ubGVuZ3RoKTtcbiAgICBmb3IgKGkgPSAwLCBqID0gLTE7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChvID0gc2VsZi50d2VlbltpXS52YWx1ZS5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIHNlbGYuaW5kZXgsIHNlbGYuZ3JvdXApKSB7XG4gICAgICAgIHR3ZWVuWysral0gPSBvO1xuICAgICAgfVxuICAgIH1cbiAgICB0d2Vlbi5sZW5ndGggPSBqICsgMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpY2soZWxhcHNlZCkge1xuICAgIHZhciB0ID0gZWxhcHNlZCA8IHNlbGYuZHVyYXRpb24gPyBzZWxmLmVhc2UuY2FsbChudWxsLCBlbGFwc2VkIC8gc2VsZi5kdXJhdGlvbikgOiAoc2VsZi50aW1lci5yZXN0YXJ0KHN0b3ApLCBzZWxmLnN0YXRlID0gRU5ESU5HLCAxKSxcbiAgICAgICAgaSA9IC0xLFxuICAgICAgICBuID0gdHdlZW4ubGVuZ3RoO1xuXG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIHR3ZWVuW2ldLmNhbGwobm9kZSwgdCk7XG4gICAgfVxuXG4gICAgLy8gRGlzcGF0Y2ggdGhlIGVuZCBldmVudC5cbiAgICBpZiAoc2VsZi5zdGF0ZSA9PT0gRU5ESU5HKSB7XG4gICAgICBzZWxmLm9uLmNhbGwoXCJlbmRcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgc2VsZi5pbmRleCwgc2VsZi5ncm91cCk7XG4gICAgICBzdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBzZWxmLnN0YXRlID0gRU5ERUQ7XG4gICAgc2VsZi50aW1lci5zdG9wKCk7XG4gICAgZGVsZXRlIHNjaGVkdWxlc1tpZF07XG4gICAgZm9yICh2YXIgaSBpbiBzY2hlZHVsZXMpIHJldHVybjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIGRlbGV0ZSBub2RlLl9fdHJhbnNpdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHtTVEFSVElORywgRU5ESU5HLCBFTkRFRH0gZnJvbSBcIi4vdHJhbnNpdGlvbi9zY2hlZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlLCBuYW1lKSB7XG4gIHZhciBzY2hlZHVsZXMgPSBub2RlLl9fdHJhbnNpdGlvbixcbiAgICAgIHNjaGVkdWxlLFxuICAgICAgYWN0aXZlLFxuICAgICAgZW1wdHkgPSB0cnVlLFxuICAgICAgaTtcblxuICBpZiAoIXNjaGVkdWxlcykgcmV0dXJuO1xuXG4gIG5hbWUgPSBuYW1lID09IG51bGwgPyBudWxsIDogbmFtZSArIFwiXCI7XG5cbiAgZm9yIChpIGluIHNjaGVkdWxlcykge1xuICAgIGlmICgoc2NoZWR1bGUgPSBzY2hlZHVsZXNbaV0pLm5hbWUgIT09IG5hbWUpIHsgZW1wdHkgPSBmYWxzZTsgY29udGludWU7IH1cbiAgICBhY3RpdmUgPSBzY2hlZHVsZS5zdGF0ZSA+IFNUQVJUSU5HICYmIHNjaGVkdWxlLnN0YXRlIDwgRU5ESU5HO1xuICAgIHNjaGVkdWxlLnN0YXRlID0gRU5ERUQ7XG4gICAgc2NoZWR1bGUudGltZXIuc3RvcCgpO1xuICAgIHNjaGVkdWxlLm9uLmNhbGwoYWN0aXZlID8gXCJpbnRlcnJ1cHRcIiA6IFwiY2FuY2VsXCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIHNjaGVkdWxlLmluZGV4LCBzY2hlZHVsZS5ncm91cCk7XG4gICAgZGVsZXRlIHNjaGVkdWxlc1tpXTtcbiAgfVxuXG4gIGlmIChlbXB0eSkgZGVsZXRlIG5vZGUuX190cmFuc2l0aW9uO1xufVxuIiwiaW1wb3J0IGludGVycnVwdCBmcm9tIFwiLi4vaW50ZXJydXB0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICBpbnRlcnJ1cHQodGhpcywgbmFtZSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHtnZXQsIHNldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZnVuY3Rpb24gdHdlZW5SZW1vdmUoaWQsIG5hbWUpIHtcbiAgdmFyIHR3ZWVuMCwgdHdlZW4xO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKSxcbiAgICAgICAgdHdlZW4gPSBzY2hlZHVsZS50d2VlbjtcblxuICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgdHdlZW4gd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgdHdlZW4gYW5kIHdl4oCZcmUgZG9uZSFcbiAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgaWYgKHR3ZWVuICE9PSB0d2VlbjApIHtcbiAgICAgIHR3ZWVuMSA9IHR3ZWVuMCA9IHR3ZWVuO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIG4gPSB0d2VlbjEubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmICh0d2VlbjFbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIHR3ZWVuMSA9IHR3ZWVuMS5zbGljZSgpO1xuICAgICAgICAgIHR3ZWVuMS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzY2hlZHVsZS50d2VlbiA9IHR3ZWVuMTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdHdlZW5GdW5jdGlvbihpZCwgbmFtZSwgdmFsdWUpIHtcbiAgdmFyIHR3ZWVuMCwgdHdlZW4xO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCksXG4gICAgICAgIHR3ZWVuID0gc2NoZWR1bGUudHdlZW47XG5cbiAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIHR3ZWVuIHdpdGggdGhlIHByZXZpb3VzIG5vZGUsXG4gICAgLy8ganVzdCBhc3NpZ24gdGhlIHVwZGF0ZWQgc2hhcmVkIHR3ZWVuIGFuZCB3ZeKAmXJlIGRvbmUhXG4gICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgIGlmICh0d2VlbiAhPT0gdHdlZW4wKSB7XG4gICAgICB0d2VlbjEgPSAodHdlZW4wID0gdHdlZW4pLnNsaWNlKCk7XG4gICAgICBmb3IgKHZhciB0ID0ge25hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZX0sIGkgPSAwLCBuID0gdHdlZW4xLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAodHdlZW4xW2ldLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICB0d2VlbjFbaV0gPSB0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaSA9PT0gbikgdHdlZW4xLnB1c2godCk7XG4gICAgfVxuXG4gICAgc2NoZWR1bGUudHdlZW4gPSB0d2VlbjE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIG5hbWUgKz0gXCJcIjtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgdHdlZW4gPSBnZXQodGhpcy5ub2RlKCksIGlkKS50d2VlbjtcbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IHR3ZWVuLmxlbmd0aCwgdDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKCh0ID0gdHdlZW5baV0pLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHQudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbCA/IHR3ZWVuUmVtb3ZlIDogdHdlZW5GdW5jdGlvbikoaWQsIG5hbWUsIHZhbHVlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0d2VlblZhbHVlKHRyYW5zaXRpb24sIG5hbWUsIHZhbHVlKSB7XG4gIHZhciBpZCA9IHRyYW5zaXRpb24uX2lkO1xuXG4gIHRyYW5zaXRpb24uZWFjaChmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZWR1bGUgPSBzZXQodGhpcywgaWQpO1xuICAgIChzY2hlZHVsZS52YWx1ZSB8fCAoc2NoZWR1bGUudmFsdWUgPSB7fSkpW25hbWVdID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICByZXR1cm4gZ2V0KG5vZGUsIGlkKS52YWx1ZVtuYW1lXTtcbiAgfTtcbn1cbiIsImltcG9ydCB7Y29sb3J9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IHtpbnRlcnBvbGF0ZU51bWJlciwgaW50ZXJwb2xhdGVSZ2IsIGludGVycG9sYXRlU3RyaW5nfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgYztcbiAgcmV0dXJuICh0eXBlb2YgYiA9PT0gXCJudW1iZXJcIiA/IGludGVycG9sYXRlTnVtYmVyXG4gICAgICA6IGIgaW5zdGFuY2VvZiBjb2xvciA/IGludGVycG9sYXRlUmdiXG4gICAgICA6IChjID0gY29sb3IoYikpID8gKGIgPSBjLCBpbnRlcnBvbGF0ZVJnYilcbiAgICAgIDogaW50ZXJwb2xhdGVTdHJpbmcpKGEsIGIpO1xufVxuIiwiaW1wb3J0IHtpbnRlcnBvbGF0ZVRyYW5zZm9ybVN2ZyBhcyBpbnRlcnBvbGF0ZVRyYW5zZm9ybX0gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5pbXBvcnQge25hbWVzcGFjZX0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHt0d2VlblZhbHVlfSBmcm9tIFwiLi90d2Vlbi5qc1wiO1xuaW1wb3J0IGludGVycG9sYXRlIGZyb20gXCIuL2ludGVycG9sYXRlLmpzXCI7XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmVOUyhmdWxsbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyQ29uc3RhbnQobmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlMSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIixcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudE5TKGZ1bGxuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUxKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEgPSB2YWx1ZTEgKyBcIlwiLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAgPSB0aGlzLmdldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJGdW5jdGlvbihuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMTAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCwgdmFsdWUxID0gdmFsdWUodGhpcyksIHN0cmluZzE7XG4gICAgaWYgKHZhbHVlMSA9PSBudWxsKSByZXR1cm4gdm9pZCB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICBzdHJpbmcwID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCI7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgJiYgc3RyaW5nMSA9PT0gc3RyaW5nMTAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiAoc3RyaW5nMTAgPSBzdHJpbmcxLCBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb25OUyhmdWxsbmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEwLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAsIHZhbHVlMSA9IHZhbHVlKHRoaXMpLCBzdHJpbmcxO1xuICAgIGlmICh2YWx1ZTEgPT0gbnVsbCkgcmV0dXJuIHZvaWQgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICAgIHN0cmluZzAgPSB0aGlzLmdldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCI7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgJiYgc3RyaW5nMSA9PT0gc3RyaW5nMTAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiAoc3RyaW5nMTAgPSBzdHJpbmcxLCBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSkpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSksIGkgPSBmdWxsbmFtZSA9PT0gXCJ0cmFuc2Zvcm1cIiA/IGludGVycG9sYXRlVHJhbnNmb3JtIDogaW50ZXJwb2xhdGU7XG4gIHJldHVybiB0aGlzLmF0dHJUd2VlbihuYW1lLCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyAoZnVsbG5hbWUubG9jYWwgPyBhdHRyRnVuY3Rpb25OUyA6IGF0dHJGdW5jdGlvbikoZnVsbG5hbWUsIGksIHR3ZWVuVmFsdWUodGhpcywgXCJhdHRyLlwiICsgbmFtZSwgdmFsdWUpKVxuICAgICAgOiB2YWx1ZSA9PSBudWxsID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0clJlbW92ZU5TIDogYXR0clJlbW92ZSkoZnVsbG5hbWUpXG4gICAgICA6IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJDb25zdGFudE5TIDogYXR0ckNvbnN0YW50KShmdWxsbmFtZSwgaSwgdmFsdWUpKTtcbn1cbiIsImltcG9ydCB7bmFtZXNwYWNlfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5cbmZ1bmN0aW9uIGF0dHJJbnRlcnBvbGF0ZShuYW1lLCBpKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgaS5jYWxsKHRoaXMsIHQpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckludGVycG9sYXRlTlMoZnVsbG5hbWUsIGkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCwgaS5jYWxsKHRoaXMsIHQpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0clR3ZWVuTlMoZnVsbG5hbWUsIHZhbHVlKSB7XG4gIHZhciB0MCwgaTA7XG4gIGZ1bmN0aW9uIHR3ZWVuKCkge1xuICAgIHZhciBpID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoaSAhPT0gaTApIHQwID0gKGkwID0gaSkgJiYgYXR0ckludGVycG9sYXRlTlMoZnVsbG5hbWUsIGkpO1xuICAgIHJldHVybiB0MDtcbiAgfVxuICB0d2Vlbi5fdmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG5mdW5jdGlvbiBhdHRyVHdlZW4obmFtZSwgdmFsdWUpIHtcbiAgdmFyIHQwLCBpMDtcbiAgZnVuY3Rpb24gdHdlZW4oKSB7XG4gICAgdmFyIGkgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmIChpICE9PSBpMCkgdDAgPSAoaTAgPSBpKSAmJiBhdHRySW50ZXJwb2xhdGUobmFtZSwgaSk7XG4gICAgcmV0dXJuIHQwO1xuICB9XG4gIHR3ZWVuLl92YWx1ZSA9IHZhbHVlO1xuICByZXR1cm4gdHdlZW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBrZXkgPSBcImF0dHIuXCIgKyBuYW1lO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHJldHVybiAoa2V5ID0gdGhpcy50d2VlbihrZXkpKSAmJiBrZXkuX3ZhbHVlO1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCBudWxsKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKTtcbiAgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCAoZnVsbG5hbWUubG9jYWwgPyBhdHRyVHdlZW5OUyA6IGF0dHJUd2VlbikoZnVsbG5hbWUsIHZhbHVlKSk7XG59XG4iLCJpbXBvcnQge2dldCwgaW5pdH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZnVuY3Rpb24gZGVsYXlGdW5jdGlvbihpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGluaXQodGhpcywgaWQpLmRlbGF5ID0gK3ZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRlbGF5Q29uc3RhbnQoaWQsIHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9ICt2YWx1ZSwgZnVuY3Rpb24oKSB7XG4gICAgaW5pdCh0aGlzLCBpZCkuZGVsYXkgPSB2YWx1ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKCh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gZGVsYXlGdW5jdGlvblxuICAgICAgICAgIDogZGVsYXlDb25zdGFudCkoaWQsIHZhbHVlKSlcbiAgICAgIDogZ2V0KHRoaXMubm9kZSgpLCBpZCkuZGVsYXk7XG59XG4iLCJpbXBvcnQge2dldCwgc2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiBkdXJhdGlvbkZ1bmN0aW9uKGlkLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgc2V0KHRoaXMsIGlkKS5kdXJhdGlvbiA9ICt2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkdXJhdGlvbkNvbnN0YW50KGlkLCB2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPSArdmFsdWUsIGZ1bmN0aW9uKCkge1xuICAgIHNldCh0aGlzLCBpZCkuZHVyYXRpb24gPSB2YWx1ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKCh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gZHVyYXRpb25GdW5jdGlvblxuICAgICAgICAgIDogZHVyYXRpb25Db25zdGFudCkoaWQsIHZhbHVlKSlcbiAgICAgIDogZ2V0KHRoaXMubm9kZSgpLCBpZCkuZHVyYXRpb247XG59XG4iLCJpbXBvcnQge2dldCwgc2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiBlYXNlQ29uc3RhbnQoaWQsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgc2V0KHRoaXMsIGlkKS5lYXNlID0gdmFsdWU7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaChlYXNlQ29uc3RhbnQoaWQsIHZhbHVlKSlcbiAgICAgIDogZ2V0KHRoaXMubm9kZSgpLCBpZCkuZWFzZTtcbn1cbiIsImltcG9ydCB7c2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiBlYXNlVmFyeWluZyhpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodHlwZW9mIHYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICAgIHNldCh0aGlzLCBpZCkuZWFzZSA9IHY7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gdGhpcy5lYWNoKGVhc2VWYXJ5aW5nKHRoaXMuX2lkLCB2YWx1ZSkpO1xufVxuIiwiaW1wb3J0IHttYXRjaGVyfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge1RyYW5zaXRpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIGlmICh0eXBlb2YgbWF0Y2ggIT09IFwiZnVuY3Rpb25cIikgbWF0Y2ggPSBtYXRjaGVyKG1hdGNoKTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gW10sIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgbWF0Y2guY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpIHtcbiAgICAgICAgc3ViZ3JvdXAucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCB0aGlzLl9uYW1lLCB0aGlzLl9pZCk7XG59XG4iLCJpbXBvcnQge1RyYW5zaXRpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHRyYW5zaXRpb24pIHtcbiAgaWYgKHRyYW5zaXRpb24uX2lkICE9PSB0aGlzLl9pZCkgdGhyb3cgbmV3IEVycm9yO1xuXG4gIGZvciAodmFyIGdyb3VwczAgPSB0aGlzLl9ncm91cHMsIGdyb3VwczEgPSB0cmFuc2l0aW9uLl9ncm91cHMsIG0wID0gZ3JvdXBzMC5sZW5ndGgsIG0xID0gZ3JvdXBzMS5sZW5ndGgsIG0gPSBNYXRoLm1pbihtMCwgbTEpLCBtZXJnZXMgPSBuZXcgQXJyYXkobTApLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwMCA9IGdyb3VwczBbal0sIGdyb3VwMSA9IGdyb3VwczFbal0sIG4gPSBncm91cDAubGVuZ3RoLCBtZXJnZSA9IG1lcmdlc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXAwW2ldIHx8IGdyb3VwMVtpXSkge1xuICAgICAgICBtZXJnZVtpXSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IGogPCBtMDsgKytqKSB7XG4gICAgbWVyZ2VzW2pdID0gZ3JvdXBzMFtqXTtcbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihtZXJnZXMsIHRoaXMuX3BhcmVudHMsIHRoaXMuX25hbWUsIHRoaXMuX2lkKTtcbn1cbiIsImltcG9ydCB7Z2V0LCBzZXQsIGluaXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIHN0YXJ0KG5hbWUpIHtcbiAgcmV0dXJuIChuYW1lICsgXCJcIikudHJpbSgpLnNwbGl0KC9efFxccysvKS5ldmVyeShmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSB0LmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChpID49IDApIHQgPSB0LnNsaWNlKDAsIGkpO1xuICAgIHJldHVybiAhdCB8fCB0ID09PSBcInN0YXJ0XCI7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvbkZ1bmN0aW9uKGlkLCBuYW1lLCBsaXN0ZW5lcikge1xuICB2YXIgb24wLCBvbjEsIHNpdCA9IHN0YXJ0KG5hbWUpID8gaW5pdCA6IHNldDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNpdCh0aGlzLCBpZCksXG4gICAgICAgIG9uID0gc2NoZWR1bGUub247XG5cbiAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIGEgZGlzcGF0Y2ggd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgZGlzcGF0Y2ggYW5kIHdl4oCZcmUgZG9uZSFcbiAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgaWYgKG9uICE9PSBvbjApIChvbjEgPSAob24wID0gb24pLmNvcHkoKSkub24obmFtZSwgbGlzdGVuZXIpO1xuXG4gICAgc2NoZWR1bGUub24gPSBvbjE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIGxpc3RlbmVyKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMlxuICAgICAgPyBnZXQodGhpcy5ub2RlKCksIGlkKS5vbi5vbihuYW1lKVxuICAgICAgOiB0aGlzLmVhY2gob25GdW5jdGlvbihpZCwgbmFtZSwgbGlzdGVuZXIpKTtcbn1cbiIsImZ1bmN0aW9uIHJlbW92ZUZ1bmN0aW9uKGlkKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5fX3RyYW5zaXRpb24pIGlmICgraSAhPT0gaWQpIHJldHVybjtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5vbihcImVuZC5yZW1vdmVcIiwgcmVtb3ZlRnVuY3Rpb24odGhpcy5faWQpKTtcbn1cbiIsImltcG9ydCB7c2VsZWN0b3J9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBzY2hlZHVsZSwge2dldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0KSB7XG4gIHZhciBuYW1lID0gdGhpcy5fbmFtZSxcbiAgICAgIGlkID0gdGhpcy5faWQ7XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3QgIT09IFwiZnVuY3Rpb25cIikgc2VsZWN0ID0gc2VsZWN0b3Ioc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBzdWJub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIChzdWJub2RlID0gc2VsZWN0LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKSkge1xuICAgICAgICBpZiAoXCJfX2RhdGFfX1wiIGluIG5vZGUpIHN1Ym5vZGUuX19kYXRhX18gPSBub2RlLl9fZGF0YV9fO1xuICAgICAgICBzdWJncm91cFtpXSA9IHN1Ym5vZGU7XG4gICAgICAgIHNjaGVkdWxlKHN1Ymdyb3VwW2ldLCBuYW1lLCBpZCwgaSwgc3ViZ3JvdXAsIGdldChub2RlLCBpZCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMsIG5hbWUsIGlkKTtcbn1cbiIsImltcG9ydCB7c2VsZWN0b3JBbGx9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBzY2hlZHVsZSwge2dldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0KSB7XG4gIHZhciBuYW1lID0gdGhpcy5fbmFtZSxcbiAgICAgIGlkID0gdGhpcy5faWQ7XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3QgIT09IFwiZnVuY3Rpb25cIikgc2VsZWN0ID0gc2VsZWN0b3JBbGwoc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBbXSwgcGFyZW50cyA9IFtdLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBmb3IgKHZhciBjaGlsZHJlbiA9IHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSwgY2hpbGQsIGluaGVyaXQgPSBnZXQobm9kZSwgaWQpLCBrID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgayA8IGw7ICsraykge1xuICAgICAgICAgIGlmIChjaGlsZCA9IGNoaWxkcmVuW2tdKSB7XG4gICAgICAgICAgICBzY2hlZHVsZShjaGlsZCwgbmFtZSwgaWQsIGssIGNoaWxkcmVuLCBpbmhlcml0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3ViZ3JvdXBzLnB1c2goY2hpbGRyZW4pO1xuICAgICAgICBwYXJlbnRzLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKHN1Ymdyb3VwcywgcGFyZW50cywgbmFtZSwgaWQpO1xufVxuIiwiaW1wb3J0IHtzZWxlY3Rpb259IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcblxudmFyIFNlbGVjdGlvbiA9IHNlbGVjdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3I7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLl9ncm91cHMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiaW1wb3J0IHtpbnRlcnBvbGF0ZVRyYW5zZm9ybUNzcyBhcyBpbnRlcnBvbGF0ZVRyYW5zZm9ybX0gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5pbXBvcnQge3N0eWxlfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge3NldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcbmltcG9ydCB7dHdlZW5WYWx1ZX0gZnJvbSBcIi4vdHdlZW4uanNcIjtcbmltcG9ydCBpbnRlcnBvbGF0ZSBmcm9tIFwiLi9pbnRlcnBvbGF0ZS5qc1wiO1xuXG5mdW5jdGlvbiBzdHlsZU51bGwobmFtZSwgaW50ZXJwb2xhdGUpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMTAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCA9IHN0eWxlKHRoaXMsIG5hbWUpLFxuICAgICAgICBzdHJpbmcxID0gKHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSksIHN0eWxlKHRoaXMsIG5hbWUpKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCAmJiBzdHJpbmcxID09PSBzdHJpbmcxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgc3RyaW5nMTAgPSBzdHJpbmcxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVDb25zdGFudChuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUxKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEgPSB2YWx1ZTEgKyBcIlwiLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAgPSBzdHlsZSh0aGlzLCBuYW1lKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVGdW5jdGlvbihuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMTAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCA9IHN0eWxlKHRoaXMsIG5hbWUpLFxuICAgICAgICB2YWx1ZTEgPSB2YWx1ZSh0aGlzKSxcbiAgICAgICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCI7XG4gICAgaWYgKHZhbHVlMSA9PSBudWxsKSBzdHJpbmcxID0gdmFsdWUxID0gKHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSksIHN0eWxlKHRoaXMsIG5hbWUpKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCAmJiBzdHJpbmcxID09PSBzdHJpbmcxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IChzdHJpbmcxMCA9IHN0cmluZzEsIGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlTWF5YmVSZW1vdmUoaWQsIG5hbWUpIHtcbiAgdmFyIG9uMCwgb24xLCBsaXN0ZW5lcjAsIGtleSA9IFwic3R5bGUuXCIgKyBuYW1lLCBldmVudCA9IFwiZW5kLlwiICsga2V5LCByZW1vdmU7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZWR1bGUgPSBzZXQodGhpcywgaWQpLFxuICAgICAgICBvbiA9IHNjaGVkdWxlLm9uLFxuICAgICAgICBsaXN0ZW5lciA9IHNjaGVkdWxlLnZhbHVlW2tleV0gPT0gbnVsbCA/IHJlbW92ZSB8fCAocmVtb3ZlID0gc3R5bGVSZW1vdmUobmFtZSkpIDogdW5kZWZpbmVkO1xuXG4gICAgLy8gSWYgdGhpcyBub2RlIHNoYXJlZCBhIGRpc3BhdGNoIHdpdGggdGhlIHByZXZpb3VzIG5vZGUsXG4gICAgLy8ganVzdCBhc3NpZ24gdGhlIHVwZGF0ZWQgc2hhcmVkIGRpc3BhdGNoIGFuZCB3ZeKAmXJlIGRvbmUhXG4gICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgIGlmIChvbiAhPT0gb24wIHx8IGxpc3RlbmVyMCAhPT0gbGlzdGVuZXIpIChvbjEgPSAob24wID0gb24pLmNvcHkoKSkub24oZXZlbnQsIGxpc3RlbmVyMCA9IGxpc3RlbmVyKTtcblxuICAgIHNjaGVkdWxlLm9uID0gb24xO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgdmFyIGkgPSAobmFtZSArPSBcIlwiKSA9PT0gXCJ0cmFuc2Zvcm1cIiA/IGludGVycG9sYXRlVHJhbnNmb3JtIDogaW50ZXJwb2xhdGU7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gdGhpc1xuICAgICAgLnN0eWxlVHdlZW4obmFtZSwgc3R5bGVOdWxsKG5hbWUsIGkpKVxuICAgICAgLm9uKFwiZW5kLnN0eWxlLlwiICsgbmFtZSwgc3R5bGVSZW1vdmUobmFtZSkpXG4gICAgOiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IHRoaXNcbiAgICAgIC5zdHlsZVR3ZWVuKG5hbWUsIHN0eWxlRnVuY3Rpb24obmFtZSwgaSwgdHdlZW5WYWx1ZSh0aGlzLCBcInN0eWxlLlwiICsgbmFtZSwgdmFsdWUpKSlcbiAgICAgIC5lYWNoKHN0eWxlTWF5YmVSZW1vdmUodGhpcy5faWQsIG5hbWUpKVxuICAgIDogdGhpc1xuICAgICAgLnN0eWxlVHdlZW4obmFtZSwgc3R5bGVDb25zdGFudChuYW1lLCBpLCB2YWx1ZSksIHByaW9yaXR5KVxuICAgICAgLm9uKFwiZW5kLnN0eWxlLlwiICsgbmFtZSwgbnVsbCk7XG59XG4iLCJmdW5jdGlvbiBzdHlsZUludGVycG9sYXRlKG5hbWUsIGksIHByaW9yaXR5KSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCBpLmNhbGwodGhpcywgdCksIHByaW9yaXR5KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVUd2VlbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgdmFyIHQsIGkwO1xuICBmdW5jdGlvbiB0d2VlbigpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKGkgIT09IGkwKSB0ID0gKGkwID0gaSkgJiYgc3R5bGVJbnRlcnBvbGF0ZShuYW1lLCBpLCBwcmlvcml0eSk7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgdHdlZW4uX3ZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB0d2Vlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHZhciBrZXkgPSBcInN0eWxlLlwiICsgKG5hbWUgKz0gXCJcIik7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgcmV0dXJuIChrZXkgPSB0aGlzLnR3ZWVuKGtleSkpICYmIGtleS5fdmFsdWU7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdGhpcy50d2VlbihrZXksIG51bGwpO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCBzdHlsZVR3ZWVuKG5hbWUsIHZhbHVlLCBwcmlvcml0eSA9PSBudWxsID8gXCJcIiA6IHByaW9yaXR5KSk7XG59XG4iLCJpbXBvcnQge3R3ZWVuVmFsdWV9IGZyb20gXCIuL3R3ZWVuLmpzXCI7XG5cbmZ1bmN0aW9uIHRleHRDb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0ZXh0RnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZTEgPSB2YWx1ZSh0aGlzKTtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWUxID09IG51bGwgPyBcIlwiIDogdmFsdWUxO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdGhpcy50d2VlbihcInRleHRcIiwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gdGV4dEZ1bmN0aW9uKHR3ZWVuVmFsdWUodGhpcywgXCJ0ZXh0XCIsIHZhbHVlKSlcbiAgICAgIDogdGV4dENvbnN0YW50KHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKyBcIlwiKSk7XG59XG4iLCJmdW5jdGlvbiB0ZXh0SW50ZXJwb2xhdGUoaSkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSBpLmNhbGwodGhpcywgdCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRleHRUd2Vlbih2YWx1ZSkge1xuICB2YXIgdDAsIGkwO1xuICBmdW5jdGlvbiB0d2VlbigpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKGkgIT09IGkwKSB0MCA9IChpMCA9IGkpICYmIHRleHRJbnRlcnBvbGF0ZShpKTtcbiAgICByZXR1cm4gdDA7XG4gIH1cbiAgdHdlZW4uX3ZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB0d2Vlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgdmFyIGtleSA9IFwidGV4dFwiO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEpIHJldHVybiAoa2V5ID0gdGhpcy50d2VlbihrZXkpKSAmJiBrZXkuX3ZhbHVlO1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCBudWxsKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgdGV4dFR3ZWVuKHZhbHVlKSk7XG59XG4iLCJpbXBvcnQge1RyYW5zaXRpb24sIG5ld0lkfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHNjaGVkdWxlLCB7Z2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLl9uYW1lLFxuICAgICAgaWQwID0gdGhpcy5faWQsXG4gICAgICBpZDEgPSBuZXdJZCgpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHZhciBpbmhlcml0ID0gZ2V0KG5vZGUsIGlkMCk7XG4gICAgICAgIHNjaGVkdWxlKG5vZGUsIG5hbWUsIGlkMSwgaSwgZ3JvdXAsIHtcbiAgICAgICAgICB0aW1lOiBpbmhlcml0LnRpbWUgKyBpbmhlcml0LmRlbGF5ICsgaW5oZXJpdC5kdXJhdGlvbixcbiAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICBkdXJhdGlvbjogaW5oZXJpdC5kdXJhdGlvbixcbiAgICAgICAgICBlYXNlOiBpbmhlcml0LmVhc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKGdyb3VwcywgdGhpcy5fcGFyZW50cywgbmFtZSwgaWQxKTtcbn1cbiIsImltcG9ydCB7c2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIG9uMCwgb24xLCB0aGF0ID0gdGhpcywgaWQgPSB0aGF0Ll9pZCwgc2l6ZSA9IHRoYXQuc2l6ZSgpO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIGNhbmNlbCA9IHt2YWx1ZTogcmVqZWN0fSxcbiAgICAgICAgZW5kID0ge3ZhbHVlOiBmdW5jdGlvbigpIHsgaWYgKC0tc2l6ZSA9PT0gMCkgcmVzb2x2ZSgpOyB9fTtcblxuICAgIHRoYXQuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCksXG4gICAgICAgICAgb24gPSBzY2hlZHVsZS5vbjtcblxuICAgICAgLy8gSWYgdGhpcyBub2RlIHNoYXJlZCBhIGRpc3BhdGNoIHdpdGggdGhlIHByZXZpb3VzIG5vZGUsXG4gICAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgZGlzcGF0Y2ggYW5kIHdl4oCZcmUgZG9uZSFcbiAgICAgIC8vIE90aGVyd2lzZSwgY29weS1vbi13cml0ZS5cbiAgICAgIGlmIChvbiAhPT0gb24wKSB7XG4gICAgICAgIG9uMSA9IChvbjAgPSBvbikuY29weSgpO1xuICAgICAgICBvbjEuXy5jYW5jZWwucHVzaChjYW5jZWwpO1xuICAgICAgICBvbjEuXy5pbnRlcnJ1cHQucHVzaChjYW5jZWwpO1xuICAgICAgICBvbjEuXy5lbmQucHVzaChlbmQpO1xuICAgICAgfVxuXG4gICAgICBzY2hlZHVsZS5vbiA9IG9uMTtcbiAgICB9KTtcblxuICAgIC8vIFRoZSBzZWxlY3Rpb24gd2FzIGVtcHR5LCByZXNvbHZlIGVuZCBpbW1lZGlhdGVseVxuICAgIGlmIChzaXplID09PSAwKSByZXNvbHZlKCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHtzZWxlY3Rpb259IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB0cmFuc2l0aW9uX2F0dHIgZnJvbSBcIi4vYXR0ci5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fYXR0clR3ZWVuIGZyb20gXCIuL2F0dHJUd2Vlbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fZGVsYXkgZnJvbSBcIi4vZGVsYXkuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2R1cmF0aW9uIGZyb20gXCIuL2R1cmF0aW9uLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9lYXNlIGZyb20gXCIuL2Vhc2UuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2Vhc2VWYXJ5aW5nIGZyb20gXCIuL2Vhc2VWYXJ5aW5nLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9maWx0ZXIgZnJvbSBcIi4vZmlsdGVyLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9tZXJnZSBmcm9tIFwiLi9tZXJnZS5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fb24gZnJvbSBcIi4vb24uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3JlbW92ZSBmcm9tIFwiLi9yZW1vdmUuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3NlbGVjdCBmcm9tIFwiLi9zZWxlY3QuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3NlbGVjdEFsbCBmcm9tIFwiLi9zZWxlY3RBbGwuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3NlbGVjdGlvbiBmcm9tIFwiLi9zZWxlY3Rpb24uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3N0eWxlIGZyb20gXCIuL3N0eWxlLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9zdHlsZVR3ZWVuIGZyb20gXCIuL3N0eWxlVHdlZW4uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3RleHQgZnJvbSBcIi4vdGV4dC5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fdGV4dFR3ZWVuIGZyb20gXCIuL3RleHRUd2Vlbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fdHJhbnNpdGlvbiBmcm9tIFwiLi90cmFuc2l0aW9uLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl90d2VlbiBmcm9tIFwiLi90d2Vlbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fZW5kIGZyb20gXCIuL2VuZC5qc1wiO1xuXG52YXIgaWQgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNpdGlvbihncm91cHMsIHBhcmVudHMsIG5hbWUsIGlkKSB7XG4gIHRoaXMuX2dyb3VwcyA9IGdyb3VwcztcbiAgdGhpcy5fcGFyZW50cyA9IHBhcmVudHM7XG4gIHRoaXMuX25hbWUgPSBuYW1lO1xuICB0aGlzLl9pZCA9IGlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2l0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHNlbGVjdGlvbigpLnRyYW5zaXRpb24obmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdJZCgpIHtcbiAgcmV0dXJuICsraWQ7XG59XG5cbnZhciBzZWxlY3Rpb25fcHJvdG90eXBlID0gc2VsZWN0aW9uLnByb3RvdHlwZTtcblxuVHJhbnNpdGlvbi5wcm90b3R5cGUgPSB0cmFuc2l0aW9uLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFRyYW5zaXRpb24sXG4gIHNlbGVjdDogdHJhbnNpdGlvbl9zZWxlY3QsXG4gIHNlbGVjdEFsbDogdHJhbnNpdGlvbl9zZWxlY3RBbGwsXG4gIHNlbGVjdENoaWxkOiBzZWxlY3Rpb25fcHJvdG90eXBlLnNlbGVjdENoaWxkLFxuICBzZWxlY3RDaGlsZHJlbjogc2VsZWN0aW9uX3Byb3RvdHlwZS5zZWxlY3RDaGlsZHJlbixcbiAgZmlsdGVyOiB0cmFuc2l0aW9uX2ZpbHRlcixcbiAgbWVyZ2U6IHRyYW5zaXRpb25fbWVyZ2UsXG4gIHNlbGVjdGlvbjogdHJhbnNpdGlvbl9zZWxlY3Rpb24sXG4gIHRyYW5zaXRpb246IHRyYW5zaXRpb25fdHJhbnNpdGlvbixcbiAgY2FsbDogc2VsZWN0aW9uX3Byb3RvdHlwZS5jYWxsLFxuICBub2Rlczogc2VsZWN0aW9uX3Byb3RvdHlwZS5ub2RlcyxcbiAgbm9kZTogc2VsZWN0aW9uX3Byb3RvdHlwZS5ub2RlLFxuICBzaXplOiBzZWxlY3Rpb25fcHJvdG90eXBlLnNpemUsXG4gIGVtcHR5OiBzZWxlY3Rpb25fcHJvdG90eXBlLmVtcHR5LFxuICBlYWNoOiBzZWxlY3Rpb25fcHJvdG90eXBlLmVhY2gsXG4gIG9uOiB0cmFuc2l0aW9uX29uLFxuICBhdHRyOiB0cmFuc2l0aW9uX2F0dHIsXG4gIGF0dHJUd2VlbjogdHJhbnNpdGlvbl9hdHRyVHdlZW4sXG4gIHN0eWxlOiB0cmFuc2l0aW9uX3N0eWxlLFxuICBzdHlsZVR3ZWVuOiB0cmFuc2l0aW9uX3N0eWxlVHdlZW4sXG4gIHRleHQ6IHRyYW5zaXRpb25fdGV4dCxcbiAgdGV4dFR3ZWVuOiB0cmFuc2l0aW9uX3RleHRUd2VlbixcbiAgcmVtb3ZlOiB0cmFuc2l0aW9uX3JlbW92ZSxcbiAgdHdlZW46IHRyYW5zaXRpb25fdHdlZW4sXG4gIGRlbGF5OiB0cmFuc2l0aW9uX2RlbGF5LFxuICBkdXJhdGlvbjogdHJhbnNpdGlvbl9kdXJhdGlvbixcbiAgZWFzZTogdHJhbnNpdGlvbl9lYXNlLFxuICBlYXNlVmFyeWluZzogdHJhbnNpdGlvbl9lYXNlVmFyeWluZyxcbiAgZW5kOiB0cmFuc2l0aW9uX2VuZCxcbiAgW1N5bWJvbC5pdGVyYXRvcl06IHNlbGVjdGlvbl9wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXVxufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBjdWJpY0luKHQpIHtcbiAgcmV0dXJuIHQgKiB0ICogdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1YmljT3V0KHQpIHtcbiAgcmV0dXJuIC0tdCAqIHQgKiB0ICsgMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1YmljSW5PdXQodCkge1xuICByZXR1cm4gKCh0ICo9IDIpIDw9IDEgPyB0ICogdCAqIHQgOiAodCAtPSAyKSAqIHQgKiB0ICsgMikgLyAyO1xufVxuIiwiaW1wb3J0IHtUcmFuc2l0aW9uLCBuZXdJZH0gZnJvbSBcIi4uL3RyYW5zaXRpb24vaW5kZXguanNcIjtcbmltcG9ydCBzY2hlZHVsZSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9zY2hlZHVsZS5qc1wiO1xuaW1wb3J0IHtlYXNlQ3ViaWNJbk91dH0gZnJvbSBcImQzLWVhc2VcIjtcbmltcG9ydCB7bm93fSBmcm9tIFwiZDMtdGltZXJcIjtcblxudmFyIGRlZmF1bHRUaW1pbmcgPSB7XG4gIHRpbWU6IG51bGwsIC8vIFNldCBvbiB1c2UuXG4gIGRlbGF5OiAwLFxuICBkdXJhdGlvbjogMjUwLFxuICBlYXNlOiBlYXNlQ3ViaWNJbk91dFxufTtcblxuZnVuY3Rpb24gaW5oZXJpdChub2RlLCBpZCkge1xuICB2YXIgdGltaW5nO1xuICB3aGlsZSAoISh0aW1pbmcgPSBub2RlLl9fdHJhbnNpdGlvbikgfHwgISh0aW1pbmcgPSB0aW1pbmdbaWRdKSkge1xuICAgIGlmICghKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHRyYW5zaXRpb24gJHtpZH0gbm90IGZvdW5kYCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aW1pbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIGlkLFxuICAgICAgdGltaW5nO1xuXG4gIGlmIChuYW1lIGluc3RhbmNlb2YgVHJhbnNpdGlvbikge1xuICAgIGlkID0gbmFtZS5faWQsIG5hbWUgPSBuYW1lLl9uYW1lO1xuICB9IGVsc2Uge1xuICAgIGlkID0gbmV3SWQoKSwgKHRpbWluZyA9IGRlZmF1bHRUaW1pbmcpLnRpbWUgPSBub3coKSwgbmFtZSA9IG5hbWUgPT0gbnVsbCA/IG51bGwgOiBuYW1lICsgXCJcIjtcbiAgfVxuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHNjaGVkdWxlKG5vZGUsIG5hbWUsIGlkLCBpLCBncm91cCwgdGltaW5nIHx8IGluaGVyaXQobm9kZSwgaWQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCBuYW1lLCBpZCk7XG59XG4iLCJpbXBvcnQge3NlbGVjdGlvbn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHNlbGVjdGlvbl9pbnRlcnJ1cHQgZnJvbSBcIi4vaW50ZXJydXB0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3RyYW5zaXRpb24gZnJvbSBcIi4vdHJhbnNpdGlvbi5qc1wiO1xuXG5zZWxlY3Rpb24ucHJvdG90eXBlLmludGVycnVwdCA9IHNlbGVjdGlvbl9pbnRlcnJ1cHQ7XG5zZWxlY3Rpb24ucHJvdG90eXBlLnRyYW5zaXRpb24gPSBzZWxlY3Rpb25fdHJhbnNpdGlvbjtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHggPSBNYXRoLnJvdW5kKHgpKSA+PSAxZTIxXG4gICAgICA/IHgudG9Mb2NhbGVTdHJpbmcoXCJlblwiKS5yZXBsYWNlKC8sL2csIFwiXCIpXG4gICAgICA6IHgudG9TdHJpbmcoMTApO1xufVxuXG4vLyBDb21wdXRlcyB0aGUgZGVjaW1hbCBjb2VmZmljaWVudCBhbmQgZXhwb25lbnQgb2YgdGhlIHNwZWNpZmllZCBudW1iZXIgeCB3aXRoXG4vLyBzaWduaWZpY2FudCBkaWdpdHMgcCwgd2hlcmUgeCBpcyBwb3NpdGl2ZSBhbmQgcCBpcyBpbiBbMSwgMjFdIG9yIHVuZGVmaW5lZC5cbi8vIEZvciBleGFtcGxlLCBmb3JtYXREZWNpbWFsUGFydHMoMS4yMykgcmV0dXJucyBbXCIxMjNcIiwgMF0uXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGVjaW1hbFBhcnRzKHgsIHApIHtcbiAgaWYgKChpID0gKHggPSBwID8geC50b0V4cG9uZW50aWFsKHAgLSAxKSA6IHgudG9FeHBvbmVudGlhbCgpKS5pbmRleE9mKFwiZVwiKSkgPCAwKSByZXR1cm4gbnVsbDsgLy8gTmFOLCDCsUluZmluaXR5XG4gIHZhciBpLCBjb2VmZmljaWVudCA9IHguc2xpY2UoMCwgaSk7XG5cbiAgLy8gVGhlIHN0cmluZyByZXR1cm5lZCBieSB0b0V4cG9uZW50aWFsIGVpdGhlciBoYXMgdGhlIGZvcm0gXFxkXFwuXFxkK2VbLStdXFxkK1xuICAvLyAoZS5nLiwgMS4yZSszKSBvciB0aGUgZm9ybSBcXGRlWy0rXVxcZCsgKGUuZy4sIDFlKzMpLlxuICByZXR1cm4gW1xuICAgIGNvZWZmaWNpZW50Lmxlbmd0aCA+IDEgPyBjb2VmZmljaWVudFswXSArIGNvZWZmaWNpZW50LnNsaWNlKDIpIDogY29lZmZpY2llbnQsXG4gICAgK3guc2xpY2UoaSArIDEpXG4gIF07XG59XG4iLCJpbXBvcnQge2Zvcm1hdERlY2ltYWxQYXJ0c30gZnJvbSBcIi4vZm9ybWF0RGVjaW1hbC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiB4ID0gZm9ybWF0RGVjaW1hbFBhcnRzKE1hdGguYWJzKHgpKSwgeCA/IHhbMV0gOiBOYU47XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihncm91cGluZywgdGhvdXNhbmRzKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSwgd2lkdGgpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmxlbmd0aCxcbiAgICAgICAgdCA9IFtdLFxuICAgICAgICBqID0gMCxcbiAgICAgICAgZyA9IGdyb3VwaW5nWzBdLFxuICAgICAgICBsZW5ndGggPSAwO1xuXG4gICAgd2hpbGUgKGkgPiAwICYmIGcgPiAwKSB7XG4gICAgICBpZiAobGVuZ3RoICsgZyArIDEgPiB3aWR0aCkgZyA9IE1hdGgubWF4KDEsIHdpZHRoIC0gbGVuZ3RoKTtcbiAgICAgIHQucHVzaCh2YWx1ZS5zdWJzdHJpbmcoaSAtPSBnLCBpICsgZykpO1xuICAgICAgaWYgKChsZW5ndGggKz0gZyArIDEpID4gd2lkdGgpIGJyZWFrO1xuICAgICAgZyA9IGdyb3VwaW5nW2ogPSAoaiArIDEpICUgZ3JvdXBpbmcubGVuZ3RoXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdC5yZXZlcnNlKCkuam9pbih0aG91c2FuZHMpO1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obnVtZXJhbHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1swLTldL2csIGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBudW1lcmFsc1sraV07XG4gICAgfSk7XG4gIH07XG59XG4iLCIvLyBbW2ZpbGxdYWxpZ25dW3NpZ25dW3N5bWJvbF1bMF1bd2lkdGhdWyxdWy5wcmVjaXNpb25dW35dW3R5cGVdXG52YXIgcmUgPSAvXig/OiguKT8oWzw+PV5dKSk/KFsrXFwtKCBdKT8oWyQjXSk/KDApPyhcXGQrKT8oLCk/KFxcLlxcZCspPyh+KT8oW2EteiVdKT8kL2k7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpIHtcbiAgaWYgKCEobWF0Y2ggPSByZS5leGVjKHNwZWNpZmllcikpKSB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGZvcm1hdDogXCIgKyBzcGVjaWZpZXIpO1xuICB2YXIgbWF0Y2g7XG4gIHJldHVybiBuZXcgRm9ybWF0U3BlY2lmaWVyKHtcbiAgICBmaWxsOiBtYXRjaFsxXSxcbiAgICBhbGlnbjogbWF0Y2hbMl0sXG4gICAgc2lnbjogbWF0Y2hbM10sXG4gICAgc3ltYm9sOiBtYXRjaFs0XSxcbiAgICB6ZXJvOiBtYXRjaFs1XSxcbiAgICB3aWR0aDogbWF0Y2hbNl0sXG4gICAgY29tbWE6IG1hdGNoWzddLFxuICAgIHByZWNpc2lvbjogbWF0Y2hbOF0gJiYgbWF0Y2hbOF0uc2xpY2UoMSksXG4gICAgdHJpbTogbWF0Y2hbOV0sXG4gICAgdHlwZTogbWF0Y2hbMTBdXG4gIH0pO1xufVxuXG5mb3JtYXRTcGVjaWZpZXIucHJvdG90eXBlID0gRm9ybWF0U3BlY2lmaWVyLnByb3RvdHlwZTsgLy8gaW5zdGFuY2VvZlxuXG5leHBvcnQgZnVuY3Rpb24gRm9ybWF0U3BlY2lmaWVyKHNwZWNpZmllcikge1xuICB0aGlzLmZpbGwgPSBzcGVjaWZpZXIuZmlsbCA9PT0gdW5kZWZpbmVkID8gXCIgXCIgOiBzcGVjaWZpZXIuZmlsbCArIFwiXCI7XG4gIHRoaXMuYWxpZ24gPSBzcGVjaWZpZXIuYWxpZ24gPT09IHVuZGVmaW5lZCA/IFwiPlwiIDogc3BlY2lmaWVyLmFsaWduICsgXCJcIjtcbiAgdGhpcy5zaWduID0gc3BlY2lmaWVyLnNpZ24gPT09IHVuZGVmaW5lZCA/IFwiLVwiIDogc3BlY2lmaWVyLnNpZ24gKyBcIlwiO1xuICB0aGlzLnN5bWJvbCA9IHNwZWNpZmllci5zeW1ib2wgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBzcGVjaWZpZXIuc3ltYm9sICsgXCJcIjtcbiAgdGhpcy56ZXJvID0gISFzcGVjaWZpZXIuemVybztcbiAgdGhpcy53aWR0aCA9IHNwZWNpZmllci53aWR0aCA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogK3NwZWNpZmllci53aWR0aDtcbiAgdGhpcy5jb21tYSA9ICEhc3BlY2lmaWVyLmNvbW1hO1xuICB0aGlzLnByZWNpc2lvbiA9IHNwZWNpZmllci5wcmVjaXNpb24gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6ICtzcGVjaWZpZXIucHJlY2lzaW9uO1xuICB0aGlzLnRyaW0gPSAhIXNwZWNpZmllci50cmltO1xuICB0aGlzLnR5cGUgPSBzcGVjaWZpZXIudHlwZSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHNwZWNpZmllci50eXBlICsgXCJcIjtcbn1cblxuRm9ybWF0U3BlY2lmaWVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5maWxsXG4gICAgICArIHRoaXMuYWxpZ25cbiAgICAgICsgdGhpcy5zaWduXG4gICAgICArIHRoaXMuc3ltYm9sXG4gICAgICArICh0aGlzLnplcm8gPyBcIjBcIiA6IFwiXCIpXG4gICAgICArICh0aGlzLndpZHRoID09PSB1bmRlZmluZWQgPyBcIlwiIDogTWF0aC5tYXgoMSwgdGhpcy53aWR0aCB8IDApKVxuICAgICAgKyAodGhpcy5jb21tYSA/IFwiLFwiIDogXCJcIilcbiAgICAgICsgKHRoaXMucHJlY2lzaW9uID09PSB1bmRlZmluZWQgPyBcIlwiIDogXCIuXCIgKyBNYXRoLm1heCgwLCB0aGlzLnByZWNpc2lvbiB8IDApKVxuICAgICAgKyAodGhpcy50cmltID8gXCJ+XCIgOiBcIlwiKVxuICAgICAgKyB0aGlzLnR5cGU7XG59O1xuIiwiLy8gVHJpbXMgaW5zaWduaWZpY2FudCB6ZXJvcywgZS5nLiwgcmVwbGFjZXMgMS4yMDAwayB3aXRoIDEuMmsuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzKSB7XG4gIG91dDogZm9yICh2YXIgbiA9IHMubGVuZ3RoLCBpID0gMSwgaTAgPSAtMSwgaTE7IGkgPCBuOyArK2kpIHtcbiAgICBzd2l0Y2ggKHNbaV0pIHtcbiAgICAgIGNhc2UgXCIuXCI6IGkwID0gaTEgPSBpOyBicmVhaztcbiAgICAgIGNhc2UgXCIwXCI6IGlmIChpMCA9PT0gMCkgaTAgPSBpOyBpMSA9IGk7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogaWYgKCErc1tpXSkgYnJlYWsgb3V0OyBpZiAoaTAgPiAwKSBpMCA9IDA7IGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaTAgPiAwID8gcy5zbGljZSgwLCBpMCkgKyBzLnNsaWNlKGkxICsgMSkgOiBzO1xufVxuIiwiaW1wb3J0IHtmb3JtYXREZWNpbWFsUGFydHN9IGZyb20gXCIuL2Zvcm1hdERlY2ltYWwuanNcIjtcblxuZXhwb3J0IHZhciBwcmVmaXhFeHBvbmVudDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCwgcCkge1xuICB2YXIgZCA9IGZvcm1hdERlY2ltYWxQYXJ0cyh4LCBwKTtcbiAgaWYgKCFkKSByZXR1cm4geCArIFwiXCI7XG4gIHZhciBjb2VmZmljaWVudCA9IGRbMF0sXG4gICAgICBleHBvbmVudCA9IGRbMV0sXG4gICAgICBpID0gZXhwb25lbnQgLSAocHJlZml4RXhwb25lbnQgPSBNYXRoLm1heCgtOCwgTWF0aC5taW4oOCwgTWF0aC5mbG9vcihleHBvbmVudCAvIDMpKSkgKiAzKSArIDEsXG4gICAgICBuID0gY29lZmZpY2llbnQubGVuZ3RoO1xuICByZXR1cm4gaSA9PT0gbiA/IGNvZWZmaWNpZW50XG4gICAgICA6IGkgPiBuID8gY29lZmZpY2llbnQgKyBuZXcgQXJyYXkoaSAtIG4gKyAxKS5qb2luKFwiMFwiKVxuICAgICAgOiBpID4gMCA/IGNvZWZmaWNpZW50LnNsaWNlKDAsIGkpICsgXCIuXCIgKyBjb2VmZmljaWVudC5zbGljZShpKVxuICAgICAgOiBcIjAuXCIgKyBuZXcgQXJyYXkoMSAtIGkpLmpvaW4oXCIwXCIpICsgZm9ybWF0RGVjaW1hbFBhcnRzKHgsIE1hdGgubWF4KDAsIHAgKyBpIC0gMSkpWzBdOyAvLyBsZXNzIHRoYW4gMXkhXG59XG4iLCJpbXBvcnQge2Zvcm1hdERlY2ltYWxQYXJ0c30gZnJvbSBcIi4vZm9ybWF0RGVjaW1hbC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCBwKSB7XG4gIHZhciBkID0gZm9ybWF0RGVjaW1hbFBhcnRzKHgsIHApO1xuICBpZiAoIWQpIHJldHVybiB4ICsgXCJcIjtcbiAgdmFyIGNvZWZmaWNpZW50ID0gZFswXSxcbiAgICAgIGV4cG9uZW50ID0gZFsxXTtcbiAgcmV0dXJuIGV4cG9uZW50IDwgMCA/IFwiMC5cIiArIG5ldyBBcnJheSgtZXhwb25lbnQpLmpvaW4oXCIwXCIpICsgY29lZmZpY2llbnRcbiAgICAgIDogY29lZmZpY2llbnQubGVuZ3RoID4gZXhwb25lbnQgKyAxID8gY29lZmZpY2llbnQuc2xpY2UoMCwgZXhwb25lbnQgKyAxKSArIFwiLlwiICsgY29lZmZpY2llbnQuc2xpY2UoZXhwb25lbnQgKyAxKVxuICAgICAgOiBjb2VmZmljaWVudCArIG5ldyBBcnJheShleHBvbmVudCAtIGNvZWZmaWNpZW50Lmxlbmd0aCArIDIpLmpvaW4oXCIwXCIpO1xufVxuIiwiaW1wb3J0IGZvcm1hdERlY2ltYWwgZnJvbSBcIi4vZm9ybWF0RGVjaW1hbC5qc1wiO1xuaW1wb3J0IGZvcm1hdFByZWZpeEF1dG8gZnJvbSBcIi4vZm9ybWF0UHJlZml4QXV0by5qc1wiO1xuaW1wb3J0IGZvcm1hdFJvdW5kZWQgZnJvbSBcIi4vZm9ybWF0Um91bmRlZC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiJVwiOiAoeCwgcCkgPT4gKHggKiAxMDApLnRvRml4ZWQocCksXG4gIFwiYlwiOiAoeCkgPT4gTWF0aC5yb3VuZCh4KS50b1N0cmluZygyKSxcbiAgXCJjXCI6ICh4KSA9PiB4ICsgXCJcIixcbiAgXCJkXCI6IGZvcm1hdERlY2ltYWwsXG4gIFwiZVwiOiAoeCwgcCkgPT4geC50b0V4cG9uZW50aWFsKHApLFxuICBcImZcIjogKHgsIHApID0+IHgudG9GaXhlZChwKSxcbiAgXCJnXCI6ICh4LCBwKSA9PiB4LnRvUHJlY2lzaW9uKHApLFxuICBcIm9cIjogKHgpID0+IE1hdGgucm91bmQoeCkudG9TdHJpbmcoOCksXG4gIFwicFwiOiAoeCwgcCkgPT4gZm9ybWF0Um91bmRlZCh4ICogMTAwLCBwKSxcbiAgXCJyXCI6IGZvcm1hdFJvdW5kZWQsXG4gIFwic1wiOiBmb3JtYXRQcmVmaXhBdXRvLFxuICBcIlhcIjogKHgpID0+IE1hdGgucm91bmQoeCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCksXG4gIFwieFwiOiAoeCkgPT4gTWF0aC5yb3VuZCh4KS50b1N0cmluZygxNilcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiB4O1xufVxuIiwiaW1wb3J0IGV4cG9uZW50IGZyb20gXCIuL2V4cG9uZW50LmpzXCI7XG5pbXBvcnQgZm9ybWF0R3JvdXAgZnJvbSBcIi4vZm9ybWF0R3JvdXAuanNcIjtcbmltcG9ydCBmb3JtYXROdW1lcmFscyBmcm9tIFwiLi9mb3JtYXROdW1lcmFscy5qc1wiO1xuaW1wb3J0IGZvcm1hdFNwZWNpZmllciBmcm9tIFwiLi9mb3JtYXRTcGVjaWZpZXIuanNcIjtcbmltcG9ydCBmb3JtYXRUcmltIGZyb20gXCIuL2Zvcm1hdFRyaW0uanNcIjtcbmltcG9ydCBmb3JtYXRUeXBlcyBmcm9tIFwiLi9mb3JtYXRUeXBlcy5qc1wiO1xuaW1wb3J0IHtwcmVmaXhFeHBvbmVudH0gZnJvbSBcIi4vZm9ybWF0UHJlZml4QXV0by5qc1wiO1xuaW1wb3J0IGlkZW50aXR5IGZyb20gXCIuL2lkZW50aXR5LmpzXCI7XG5cbnZhciBtYXAgPSBBcnJheS5wcm90b3R5cGUubWFwLFxuICAgIHByZWZpeGVzID0gW1wieVwiLFwielwiLFwiYVwiLFwiZlwiLFwicFwiLFwiblwiLFwiwrVcIixcIm1cIixcIlwiLFwia1wiLFwiTVwiLFwiR1wiLFwiVFwiLFwiUFwiLFwiRVwiLFwiWlwiLFwiWVwiXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obG9jYWxlKSB7XG4gIHZhciBncm91cCA9IGxvY2FsZS5ncm91cGluZyA9PT0gdW5kZWZpbmVkIHx8IGxvY2FsZS50aG91c2FuZHMgPT09IHVuZGVmaW5lZCA/IGlkZW50aXR5IDogZm9ybWF0R3JvdXAobWFwLmNhbGwobG9jYWxlLmdyb3VwaW5nLCBOdW1iZXIpLCBsb2NhbGUudGhvdXNhbmRzICsgXCJcIiksXG4gICAgICBjdXJyZW5jeVByZWZpeCA9IGxvY2FsZS5jdXJyZW5jeSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGxvY2FsZS5jdXJyZW5jeVswXSArIFwiXCIsXG4gICAgICBjdXJyZW5jeVN1ZmZpeCA9IGxvY2FsZS5jdXJyZW5jeSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGxvY2FsZS5jdXJyZW5jeVsxXSArIFwiXCIsXG4gICAgICBkZWNpbWFsID0gbG9jYWxlLmRlY2ltYWwgPT09IHVuZGVmaW5lZCA/IFwiLlwiIDogbG9jYWxlLmRlY2ltYWwgKyBcIlwiLFxuICAgICAgbnVtZXJhbHMgPSBsb2NhbGUubnVtZXJhbHMgPT09IHVuZGVmaW5lZCA/IGlkZW50aXR5IDogZm9ybWF0TnVtZXJhbHMobWFwLmNhbGwobG9jYWxlLm51bWVyYWxzLCBTdHJpbmcpKSxcbiAgICAgIHBlcmNlbnQgPSBsb2NhbGUucGVyY2VudCA9PT0gdW5kZWZpbmVkID8gXCIlXCIgOiBsb2NhbGUucGVyY2VudCArIFwiXCIsXG4gICAgICBtaW51cyA9IGxvY2FsZS5taW51cyA9PT0gdW5kZWZpbmVkID8gXCLiiJJcIiA6IGxvY2FsZS5taW51cyArIFwiXCIsXG4gICAgICBuYW4gPSBsb2NhbGUubmFuID09PSB1bmRlZmluZWQgPyBcIk5hTlwiIDogbG9jYWxlLm5hbiArIFwiXCI7XG5cbiAgZnVuY3Rpb24gbmV3Rm9ybWF0KHNwZWNpZmllcikge1xuICAgIHNwZWNpZmllciA9IGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpO1xuXG4gICAgdmFyIGZpbGwgPSBzcGVjaWZpZXIuZmlsbCxcbiAgICAgICAgYWxpZ24gPSBzcGVjaWZpZXIuYWxpZ24sXG4gICAgICAgIHNpZ24gPSBzcGVjaWZpZXIuc2lnbixcbiAgICAgICAgc3ltYm9sID0gc3BlY2lmaWVyLnN5bWJvbCxcbiAgICAgICAgemVybyA9IHNwZWNpZmllci56ZXJvLFxuICAgICAgICB3aWR0aCA9IHNwZWNpZmllci53aWR0aCxcbiAgICAgICAgY29tbWEgPSBzcGVjaWZpZXIuY29tbWEsXG4gICAgICAgIHByZWNpc2lvbiA9IHNwZWNpZmllci5wcmVjaXNpb24sXG4gICAgICAgIHRyaW0gPSBzcGVjaWZpZXIudHJpbSxcbiAgICAgICAgdHlwZSA9IHNwZWNpZmllci50eXBlO1xuXG4gICAgLy8gVGhlIFwiblwiIHR5cGUgaXMgYW4gYWxpYXMgZm9yIFwiLGdcIi5cbiAgICBpZiAodHlwZSA9PT0gXCJuXCIpIGNvbW1hID0gdHJ1ZSwgdHlwZSA9IFwiZ1wiO1xuXG4gICAgLy8gVGhlIFwiXCIgdHlwZSwgYW5kIGFueSBpbnZhbGlkIHR5cGUsIGlzIGFuIGFsaWFzIGZvciBcIi4xMn5nXCIuXG4gICAgZWxzZSBpZiAoIWZvcm1hdFR5cGVzW3R5cGVdKSBwcmVjaXNpb24gPT09IHVuZGVmaW5lZCAmJiAocHJlY2lzaW9uID0gMTIpLCB0cmltID0gdHJ1ZSwgdHlwZSA9IFwiZ1wiO1xuXG4gICAgLy8gSWYgemVybyBmaWxsIGlzIHNwZWNpZmllZCwgcGFkZGluZyBnb2VzIGFmdGVyIHNpZ24gYW5kIGJlZm9yZSBkaWdpdHMuXG4gICAgaWYgKHplcm8gfHwgKGZpbGwgPT09IFwiMFwiICYmIGFsaWduID09PSBcIj1cIikpIHplcm8gPSB0cnVlLCBmaWxsID0gXCIwXCIsIGFsaWduID0gXCI9XCI7XG5cbiAgICAvLyBDb21wdXRlIHRoZSBwcmVmaXggYW5kIHN1ZmZpeC5cbiAgICAvLyBGb3IgU0ktcHJlZml4LCB0aGUgc3VmZml4IGlzIGxhemlseSBjb21wdXRlZC5cbiAgICB2YXIgcHJlZml4ID0gc3ltYm9sID09PSBcIiRcIiA/IGN1cnJlbmN5UHJlZml4IDogc3ltYm9sID09PSBcIiNcIiAmJiAvW2JveFhdLy50ZXN0KHR5cGUpID8gXCIwXCIgKyB0eXBlLnRvTG93ZXJDYXNlKCkgOiBcIlwiLFxuICAgICAgICBzdWZmaXggPSBzeW1ib2wgPT09IFwiJFwiID8gY3VycmVuY3lTdWZmaXggOiAvWyVwXS8udGVzdCh0eXBlKSA/IHBlcmNlbnQgOiBcIlwiO1xuXG4gICAgLy8gV2hhdCBmb3JtYXQgZnVuY3Rpb24gc2hvdWxkIHdlIHVzZT9cbiAgICAvLyBJcyB0aGlzIGFuIGludGVnZXIgdHlwZT9cbiAgICAvLyBDYW4gdGhpcyB0eXBlIGdlbmVyYXRlIGV4cG9uZW50aWFsIG5vdGF0aW9uP1xuICAgIHZhciBmb3JtYXRUeXBlID0gZm9ybWF0VHlwZXNbdHlwZV0sXG4gICAgICAgIG1heWJlU3VmZml4ID0gL1tkZWZncHJzJV0vLnRlc3QodHlwZSk7XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgcHJlY2lzaW9uIGlmIG5vdCBzcGVjaWZpZWQsXG4gICAgLy8gb3IgY2xhbXAgdGhlIHNwZWNpZmllZCBwcmVjaXNpb24gdG8gdGhlIHN1cHBvcnRlZCByYW5nZS5cbiAgICAvLyBGb3Igc2lnbmlmaWNhbnQgcHJlY2lzaW9uLCBpdCBtdXN0IGJlIGluIFsxLCAyMV0uXG4gICAgLy8gRm9yIGZpeGVkIHByZWNpc2lvbiwgaXQgbXVzdCBiZSBpbiBbMCwgMjBdLlxuICAgIHByZWNpc2lvbiA9IHByZWNpc2lvbiA9PT0gdW5kZWZpbmVkID8gNlxuICAgICAgICA6IC9bZ3Byc10vLnRlc3QodHlwZSkgPyBNYXRoLm1heCgxLCBNYXRoLm1pbigyMSwgcHJlY2lzaW9uKSlcbiAgICAgICAgOiBNYXRoLm1heCgwLCBNYXRoLm1pbigyMCwgcHJlY2lzaW9uKSk7XG5cbiAgICBmdW5jdGlvbiBmb3JtYXQodmFsdWUpIHtcbiAgICAgIHZhciB2YWx1ZVByZWZpeCA9IHByZWZpeCxcbiAgICAgICAgICB2YWx1ZVN1ZmZpeCA9IHN1ZmZpeCxcbiAgICAgICAgICBpLCBuLCBjO1xuXG4gICAgICBpZiAodHlwZSA9PT0gXCJjXCIpIHtcbiAgICAgICAgdmFsdWVTdWZmaXggPSBmb3JtYXRUeXBlKHZhbHVlKSArIHZhbHVlU3VmZml4O1xuICAgICAgICB2YWx1ZSA9IFwiXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9ICt2YWx1ZTtcblxuICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIHNpZ24uIC0wIGlzIG5vdCBsZXNzIHRoYW4gMCwgYnV0IDEgLyAtMCBpcyFcbiAgICAgICAgdmFyIHZhbHVlTmVnYXRpdmUgPSB2YWx1ZSA8IDAgfHwgMSAvIHZhbHVlIDwgMDtcblxuICAgICAgICAvLyBQZXJmb3JtIHRoZSBpbml0aWFsIGZvcm1hdHRpbmcuXG4gICAgICAgIHZhbHVlID0gaXNOYU4odmFsdWUpID8gbmFuIDogZm9ybWF0VHlwZShNYXRoLmFicyh2YWx1ZSksIHByZWNpc2lvbik7XG5cbiAgICAgICAgLy8gVHJpbSBpbnNpZ25pZmljYW50IHplcm9zLlxuICAgICAgICBpZiAodHJpbSkgdmFsdWUgPSBmb3JtYXRUcmltKHZhbHVlKTtcblxuICAgICAgICAvLyBJZiBhIG5lZ2F0aXZlIHZhbHVlIHJvdW5kcyB0byB6ZXJvIGFmdGVyIGZvcm1hdHRpbmcsIGFuZCBubyBleHBsaWNpdCBwb3NpdGl2ZSBzaWduIGlzIHJlcXVlc3RlZCwgaGlkZSB0aGUgc2lnbi5cbiAgICAgICAgaWYgKHZhbHVlTmVnYXRpdmUgJiYgK3ZhbHVlID09PSAwICYmIHNpZ24gIT09IFwiK1wiKSB2YWx1ZU5lZ2F0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ29tcHV0ZSB0aGUgcHJlZml4IGFuZCBzdWZmaXguXG4gICAgICAgIHZhbHVlUHJlZml4ID0gKHZhbHVlTmVnYXRpdmUgPyAoc2lnbiA9PT0gXCIoXCIgPyBzaWduIDogbWludXMpIDogc2lnbiA9PT0gXCItXCIgfHwgc2lnbiA9PT0gXCIoXCIgPyBcIlwiIDogc2lnbikgKyB2YWx1ZVByZWZpeDtcbiAgICAgICAgdmFsdWVTdWZmaXggPSAodHlwZSA9PT0gXCJzXCIgPyBwcmVmaXhlc1s4ICsgcHJlZml4RXhwb25lbnQgLyAzXSA6IFwiXCIpICsgdmFsdWVTdWZmaXggKyAodmFsdWVOZWdhdGl2ZSAmJiBzaWduID09PSBcIihcIiA/IFwiKVwiIDogXCJcIik7XG5cbiAgICAgICAgLy8gQnJlYWsgdGhlIGZvcm1hdHRlZCB2YWx1ZSBpbnRvIHRoZSBpbnRlZ2VyIOKAnHZhbHVl4oCdIHBhcnQgdGhhdCBjYW4gYmVcbiAgICAgICAgLy8gZ3JvdXBlZCwgYW5kIGZyYWN0aW9uYWwgb3IgZXhwb25lbnRpYWwg4oCcc3VmZml44oCdIHBhcnQgdGhhdCBpcyBub3QuXG4gICAgICAgIGlmIChtYXliZVN1ZmZpeCkge1xuICAgICAgICAgIGkgPSAtMSwgbiA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICAgICAgaWYgKGMgPSB2YWx1ZS5jaGFyQ29kZUF0KGkpLCA0OCA+IGMgfHwgYyA+IDU3KSB7XG4gICAgICAgICAgICAgIHZhbHVlU3VmZml4ID0gKGMgPT09IDQ2ID8gZGVjaW1hbCArIHZhbHVlLnNsaWNlKGkgKyAxKSA6IHZhbHVlLnNsaWNlKGkpKSArIHZhbHVlU3VmZml4O1xuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIGZpbGwgY2hhcmFjdGVyIGlzIG5vdCBcIjBcIiwgZ3JvdXBpbmcgaXMgYXBwbGllZCBiZWZvcmUgcGFkZGluZy5cbiAgICAgIGlmIChjb21tYSAmJiAhemVybykgdmFsdWUgPSBncm91cCh2YWx1ZSwgSW5maW5pdHkpO1xuXG4gICAgICAvLyBDb21wdXRlIHRoZSBwYWRkaW5nLlxuICAgICAgdmFyIGxlbmd0aCA9IHZhbHVlUHJlZml4Lmxlbmd0aCArIHZhbHVlLmxlbmd0aCArIHZhbHVlU3VmZml4Lmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gbGVuZ3RoIDwgd2lkdGggPyBuZXcgQXJyYXkod2lkdGggLSBsZW5ndGggKyAxKS5qb2luKGZpbGwpIDogXCJcIjtcblxuICAgICAgLy8gSWYgdGhlIGZpbGwgY2hhcmFjdGVyIGlzIFwiMFwiLCBncm91cGluZyBpcyBhcHBsaWVkIGFmdGVyIHBhZGRpbmcuXG4gICAgICBpZiAoY29tbWEgJiYgemVybykgdmFsdWUgPSBncm91cChwYWRkaW5nICsgdmFsdWUsIHBhZGRpbmcubGVuZ3RoID8gd2lkdGggLSB2YWx1ZVN1ZmZpeC5sZW5ndGggOiBJbmZpbml0eSksIHBhZGRpbmcgPSBcIlwiO1xuXG4gICAgICAvLyBSZWNvbnN0cnVjdCB0aGUgZmluYWwgb3V0cHV0IGJhc2VkIG9uIHRoZSBkZXNpcmVkIGFsaWdubWVudC5cbiAgICAgIHN3aXRjaCAoYWxpZ24pIHtcbiAgICAgICAgY2FzZSBcIjxcIjogdmFsdWUgPSB2YWx1ZVByZWZpeCArIHZhbHVlICsgdmFsdWVTdWZmaXggKyBwYWRkaW5nOyBicmVhaztcbiAgICAgICAgY2FzZSBcIj1cIjogdmFsdWUgPSB2YWx1ZVByZWZpeCArIHBhZGRpbmcgKyB2YWx1ZSArIHZhbHVlU3VmZml4OyBicmVhaztcbiAgICAgICAgY2FzZSBcIl5cIjogdmFsdWUgPSBwYWRkaW5nLnNsaWNlKDAsIGxlbmd0aCA9IHBhZGRpbmcubGVuZ3RoID4+IDEpICsgdmFsdWVQcmVmaXggKyB2YWx1ZSArIHZhbHVlU3VmZml4ICsgcGFkZGluZy5zbGljZShsZW5ndGgpOyBicmVhaztcbiAgICAgICAgZGVmYXVsdDogdmFsdWUgPSBwYWRkaW5nICsgdmFsdWVQcmVmaXggKyB2YWx1ZSArIHZhbHVlU3VmZml4OyBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bWVyYWxzKHZhbHVlKTtcbiAgICB9XG5cbiAgICBmb3JtYXQudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzcGVjaWZpZXIgKyBcIlwiO1xuICAgIH07XG5cbiAgICByZXR1cm4gZm9ybWF0O1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0UHJlZml4KHNwZWNpZmllciwgdmFsdWUpIHtcbiAgICB2YXIgZiA9IG5ld0Zvcm1hdCgoc3BlY2lmaWVyID0gZm9ybWF0U3BlY2lmaWVyKHNwZWNpZmllciksIHNwZWNpZmllci50eXBlID0gXCJmXCIsIHNwZWNpZmllcikpLFxuICAgICAgICBlID0gTWF0aC5tYXgoLTgsIE1hdGgubWluKDgsIE1hdGguZmxvb3IoZXhwb25lbnQodmFsdWUpIC8gMykpKSAqIDMsXG4gICAgICAgIGsgPSBNYXRoLnBvdygxMCwgLWUpLFxuICAgICAgICBwcmVmaXggPSBwcmVmaXhlc1s4ICsgZSAvIDNdO1xuICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIGYoayAqIHZhbHVlKSArIHByZWZpeDtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmb3JtYXQ6IG5ld0Zvcm1hdCxcbiAgICBmb3JtYXRQcmVmaXg6IGZvcm1hdFByZWZpeFxuICB9O1xufVxuIiwiaW1wb3J0IGZvcm1hdExvY2FsZSBmcm9tIFwiLi9sb2NhbGUuanNcIjtcblxudmFyIGxvY2FsZTtcbmV4cG9ydCB2YXIgZm9ybWF0O1xuZXhwb3J0IHZhciBmb3JtYXRQcmVmaXg7XG5cbmRlZmF1bHRMb2NhbGUoe1xuICB0aG91c2FuZHM6IFwiLFwiLFxuICBncm91cGluZzogWzNdLFxuICBjdXJyZW5jeTogW1wiJFwiLCBcIlwiXVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmF1bHRMb2NhbGUoZGVmaW5pdGlvbikge1xuICBsb2NhbGUgPSBmb3JtYXRMb2NhbGUoZGVmaW5pdGlvbik7XG4gIGZvcm1hdCA9IGxvY2FsZS5mb3JtYXQ7XG4gIGZvcm1hdFByZWZpeCA9IGxvY2FsZS5mb3JtYXRQcmVmaXg7XG4gIHJldHVybiBsb2NhbGU7XG59XG4iLCJpbXBvcnQgZXhwb25lbnQgZnJvbSBcIi4vZXhwb25lbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RlcCkge1xuICByZXR1cm4gTWF0aC5tYXgoMCwgLWV4cG9uZW50KE1hdGguYWJzKHN0ZXApKSk7XG59XG4iLCJpbXBvcnQgZXhwb25lbnQgZnJvbSBcIi4vZXhwb25lbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RlcCwgdmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWF4KC04LCBNYXRoLm1pbig4LCBNYXRoLmZsb29yKGV4cG9uZW50KHZhbHVlKSAvIDMpKSkgKiAzIC0gZXhwb25lbnQoTWF0aC5hYnMoc3RlcCkpKTtcbn1cbiIsImltcG9ydCBleHBvbmVudCBmcm9tIFwiLi9leHBvbmVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGVwLCBtYXgpIHtcbiAgc3RlcCA9IE1hdGguYWJzKHN0ZXApLCBtYXggPSBNYXRoLmFicyhtYXgpIC0gc3RlcDtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIGV4cG9uZW50KG1heCkgLSBleHBvbmVudChzdGVwKSkgKyAxO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGluaXRSYW5nZShkb21haW4sIHJhbmdlKSB7XG4gIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogYnJlYWs7XG4gICAgY2FzZSAxOiB0aGlzLnJhbmdlKGRvbWFpbik7IGJyZWFrO1xuICAgIGRlZmF1bHQ6IHRoaXMucmFuZ2UocmFuZ2UpLmRvbWFpbihkb21haW4pOyBicmVhaztcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRJbnRlcnBvbGF0b3IoZG9tYWluLCBpbnRlcnBvbGF0b3IpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiBicmVhaztcbiAgICBjYXNlIDE6IHtcbiAgICAgIGlmICh0eXBlb2YgZG9tYWluID09PSBcImZ1bmN0aW9uXCIpIHRoaXMuaW50ZXJwb2xhdG9yKGRvbWFpbik7XG4gICAgICBlbHNlIHRoaXMucmFuZ2UoZG9tYWluKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICB0aGlzLmRvbWFpbihkb21haW4pO1xuICAgICAgaWYgKHR5cGVvZiBpbnRlcnBvbGF0b3IgPT09IFwiZnVuY3Rpb25cIikgdGhpcy5pbnRlcnBvbGF0b3IoaW50ZXJwb2xhdG9yKTtcbiAgICAgIGVsc2UgdGhpcy5yYW5nZShpbnRlcnBvbGF0b3IpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uc3RhbnRzKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbnVtYmVyKHgpIHtcbiAgcmV0dXJuICt4O1xufVxuIiwiaW1wb3J0IHtiaXNlY3R9IGZyb20gXCJkMy1hcnJheVwiO1xuaW1wb3J0IHtpbnRlcnBvbGF0ZSBhcyBpbnRlcnBvbGF0ZVZhbHVlLCBpbnRlcnBvbGF0ZU51bWJlciwgaW50ZXJwb2xhdGVSb3VuZH0gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyLmpzXCI7XG5cbnZhciB1bml0ID0gWzAsIDFdO1xuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkoeCkge1xuICByZXR1cm4geDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplKGEsIGIpIHtcbiAgcmV0dXJuIChiIC09IChhID0gK2EpKVxuICAgICAgPyBmdW5jdGlvbih4KSB7IHJldHVybiAoeCAtIGEpIC8gYjsgfVxuICAgICAgOiBjb25zdGFudChpc05hTihiKSA/IE5hTiA6IDAuNSk7XG59XG5cbmZ1bmN0aW9uIGNsYW1wZXIoYSwgYikge1xuICB2YXIgdDtcbiAgaWYgKGEgPiBiKSB0ID0gYSwgYSA9IGIsIGIgPSB0O1xuICByZXR1cm4gZnVuY3Rpb24oeCkgeyByZXR1cm4gTWF0aC5tYXgoYSwgTWF0aC5taW4oYiwgeCkpOyB9O1xufVxuXG4vLyBub3JtYWxpemUoYSwgYikoeCkgdGFrZXMgYSBkb21haW4gdmFsdWUgeCBpbiBbYSxiXSBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBwYXJhbWV0ZXIgdCBpbiBbMCwxXS5cbi8vIGludGVycG9sYXRlKGEsIGIpKHQpIHRha2VzIGEgcGFyYW1ldGVyIHQgaW4gWzAsMV0gYW5kIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcmFuZ2UgdmFsdWUgeCBpbiBbYSxiXS5cbmZ1bmN0aW9uIGJpbWFwKGRvbWFpbiwgcmFuZ2UsIGludGVycG9sYXRlKSB7XG4gIHZhciBkMCA9IGRvbWFpblswXSwgZDEgPSBkb21haW5bMV0sIHIwID0gcmFuZ2VbMF0sIHIxID0gcmFuZ2VbMV07XG4gIGlmIChkMSA8IGQwKSBkMCA9IG5vcm1hbGl6ZShkMSwgZDApLCByMCA9IGludGVycG9sYXRlKHIxLCByMCk7XG4gIGVsc2UgZDAgPSBub3JtYWxpemUoZDAsIGQxKSwgcjAgPSBpbnRlcnBvbGF0ZShyMCwgcjEpO1xuICByZXR1cm4gZnVuY3Rpb24oeCkgeyByZXR1cm4gcjAoZDAoeCkpOyB9O1xufVxuXG5mdW5jdGlvbiBwb2x5bWFwKGRvbWFpbiwgcmFuZ2UsIGludGVycG9sYXRlKSB7XG4gIHZhciBqID0gTWF0aC5taW4oZG9tYWluLmxlbmd0aCwgcmFuZ2UubGVuZ3RoKSAtIDEsXG4gICAgICBkID0gbmV3IEFycmF5KGopLFxuICAgICAgciA9IG5ldyBBcnJheShqKSxcbiAgICAgIGkgPSAtMTtcblxuICAvLyBSZXZlcnNlIGRlc2NlbmRpbmcgZG9tYWlucy5cbiAgaWYgKGRvbWFpbltqXSA8IGRvbWFpblswXSkge1xuICAgIGRvbWFpbiA9IGRvbWFpbi5zbGljZSgpLnJldmVyc2UoKTtcbiAgICByYW5nZSA9IHJhbmdlLnNsaWNlKCkucmV2ZXJzZSgpO1xuICB9XG5cbiAgd2hpbGUgKCsraSA8IGopIHtcbiAgICBkW2ldID0gbm9ybWFsaXplKGRvbWFpbltpXSwgZG9tYWluW2kgKyAxXSk7XG4gICAgcltpXSA9IGludGVycG9sYXRlKHJhbmdlW2ldLCByYW5nZVtpICsgMV0pO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcbiAgICB2YXIgaSA9IGJpc2VjdChkb21haW4sIHgsIDEsIGopIC0gMTtcbiAgICByZXR1cm4gcltpXShkW2ldKHgpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkoc291cmNlLCB0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldFxuICAgICAgLmRvbWFpbihzb3VyY2UuZG9tYWluKCkpXG4gICAgICAucmFuZ2Uoc291cmNlLnJhbmdlKCkpXG4gICAgICAuaW50ZXJwb2xhdGUoc291cmNlLmludGVycG9sYXRlKCkpXG4gICAgICAuY2xhbXAoc291cmNlLmNsYW1wKCkpXG4gICAgICAudW5rbm93bihzb3VyY2UudW5rbm93bigpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVyKCkge1xuICB2YXIgZG9tYWluID0gdW5pdCxcbiAgICAgIHJhbmdlID0gdW5pdCxcbiAgICAgIGludGVycG9sYXRlID0gaW50ZXJwb2xhdGVWYWx1ZSxcbiAgICAgIHRyYW5zZm9ybSxcbiAgICAgIHVudHJhbnNmb3JtLFxuICAgICAgdW5rbm93bixcbiAgICAgIGNsYW1wID0gaWRlbnRpdHksXG4gICAgICBwaWVjZXdpc2UsXG4gICAgICBvdXRwdXQsXG4gICAgICBpbnB1dDtcblxuICBmdW5jdGlvbiByZXNjYWxlKCkge1xuICAgIHZhciBuID0gTWF0aC5taW4oZG9tYWluLmxlbmd0aCwgcmFuZ2UubGVuZ3RoKTtcbiAgICBpZiAoY2xhbXAgIT09IGlkZW50aXR5KSBjbGFtcCA9IGNsYW1wZXIoZG9tYWluWzBdLCBkb21haW5bbiAtIDFdKTtcbiAgICBwaWVjZXdpc2UgPSBuID4gMiA/IHBvbHltYXAgOiBiaW1hcDtcbiAgICBvdXRwdXQgPSBpbnB1dCA9IG51bGw7XG4gICAgcmV0dXJuIHNjYWxlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2NhbGUoeCkge1xuICAgIHJldHVybiB4ID09IG51bGwgfHwgaXNOYU4oeCA9ICt4KSA/IHVua25vd24gOiAob3V0cHV0IHx8IChvdXRwdXQgPSBwaWVjZXdpc2UoZG9tYWluLm1hcCh0cmFuc2Zvcm0pLCByYW5nZSwgaW50ZXJwb2xhdGUpKSkodHJhbnNmb3JtKGNsYW1wKHgpKSk7XG4gIH1cblxuICBzY2FsZS5pbnZlcnQgPSBmdW5jdGlvbih5KSB7XG4gICAgcmV0dXJuIGNsYW1wKHVudHJhbnNmb3JtKChpbnB1dCB8fCAoaW5wdXQgPSBwaWVjZXdpc2UocmFuZ2UsIGRvbWFpbi5tYXAodHJhbnNmb3JtKSwgaW50ZXJwb2xhdGVOdW1iZXIpKSkoeSkpKTtcbiAgfTtcblxuICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZG9tYWluID0gQXJyYXkuZnJvbShfLCBudW1iZXIpLCByZXNjYWxlKCkpIDogZG9tYWluLnNsaWNlKCk7XG4gIH07XG5cbiAgc2NhbGUucmFuZ2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocmFuZ2UgPSBBcnJheS5mcm9tKF8pLCByZXNjYWxlKCkpIDogcmFuZ2Uuc2xpY2UoKTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZVJvdW5kID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiByYW5nZSA9IEFycmF5LmZyb20oXyksIGludGVycG9sYXRlID0gaW50ZXJwb2xhdGVSb3VuZCwgcmVzY2FsZSgpO1xuICB9O1xuXG4gIHNjYWxlLmNsYW1wID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGNsYW1wID0gXyA/IHRydWUgOiBpZGVudGl0eSwgcmVzY2FsZSgpKSA6IGNsYW1wICE9PSBpZGVudGl0eTtcbiAgfTtcblxuICBzY2FsZS5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChpbnRlcnBvbGF0ZSA9IF8sIHJlc2NhbGUoKSkgOiBpbnRlcnBvbGF0ZTtcbiAgfTtcblxuICBzY2FsZS51bmtub3duID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHVua25vd24gPSBfLCBzY2FsZSkgOiB1bmtub3duO1xuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbih0LCB1KSB7XG4gICAgdHJhbnNmb3JtID0gdCwgdW50cmFuc2Zvcm0gPSB1O1xuICAgIHJldHVybiByZXNjYWxlKCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRpbnVvdXMoKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1lcigpKGlkZW50aXR5LCBpZGVudGl0eSk7XG59XG4iLCJpbXBvcnQge3RpY2tTdGVwfSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7Zm9ybWF0LCBmb3JtYXRQcmVmaXgsIGZvcm1hdFNwZWNpZmllciwgcHJlY2lzaW9uRml4ZWQsIHByZWNpc2lvblByZWZpeCwgcHJlY2lzaW9uUm91bmR9IGZyb20gXCJkMy1mb3JtYXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGlja0Zvcm1hdChzdGFydCwgc3RvcCwgY291bnQsIHNwZWNpZmllcikge1xuICB2YXIgc3RlcCA9IHRpY2tTdGVwKHN0YXJ0LCBzdG9wLCBjb3VudCksXG4gICAgICBwcmVjaXNpb247XG4gIHNwZWNpZmllciA9IGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIgPT0gbnVsbCA/IFwiLGZcIiA6IHNwZWNpZmllcik7XG4gIHN3aXRjaCAoc3BlY2lmaWVyLnR5cGUpIHtcbiAgICBjYXNlIFwic1wiOiB7XG4gICAgICB2YXIgdmFsdWUgPSBNYXRoLm1heChNYXRoLmFicyhzdGFydCksIE1hdGguYWJzKHN0b3ApKTtcbiAgICAgIGlmIChzcGVjaWZpZXIucHJlY2lzaW9uID09IG51bGwgJiYgIWlzTmFOKHByZWNpc2lvbiA9IHByZWNpc2lvblByZWZpeChzdGVwLCB2YWx1ZSkpKSBzcGVjaWZpZXIucHJlY2lzaW9uID0gcHJlY2lzaW9uO1xuICAgICAgcmV0dXJuIGZvcm1hdFByZWZpeChzcGVjaWZpZXIsIHZhbHVlKTtcbiAgICB9XG4gICAgY2FzZSBcIlwiOlxuICAgIGNhc2UgXCJlXCI6XG4gICAgY2FzZSBcImdcIjpcbiAgICBjYXNlIFwicFwiOlxuICAgIGNhc2UgXCJyXCI6IHtcbiAgICAgIGlmIChzcGVjaWZpZXIucHJlY2lzaW9uID09IG51bGwgJiYgIWlzTmFOKHByZWNpc2lvbiA9IHByZWNpc2lvblJvdW5kKHN0ZXAsIE1hdGgubWF4KE1hdGguYWJzKHN0YXJ0KSwgTWF0aC5hYnMoc3RvcCkpKSkpIHNwZWNpZmllci5wcmVjaXNpb24gPSBwcmVjaXNpb24gLSAoc3BlY2lmaWVyLnR5cGUgPT09IFwiZVwiKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwiZlwiOlxuICAgIGNhc2UgXCIlXCI6IHtcbiAgICAgIGlmIChzcGVjaWZpZXIucHJlY2lzaW9uID09IG51bGwgJiYgIWlzTmFOKHByZWNpc2lvbiA9IHByZWNpc2lvbkZpeGVkKHN0ZXApKSkgc3BlY2lmaWVyLnByZWNpc2lvbiA9IHByZWNpc2lvbiAtIChzcGVjaWZpZXIudHlwZSA9PT0gXCIlXCIpICogMjtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZm9ybWF0KHNwZWNpZmllcik7XG59XG4iLCJpbXBvcnQge3RpY2tzLCB0aWNrSW5jcmVtZW50fSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCBjb250aW51b3VzLCB7Y29weX0gZnJvbSBcIi4vY29udGludW91cy5qc1wiO1xuaW1wb3J0IHtpbml0UmFuZ2V9IGZyb20gXCIuL2luaXQuanNcIjtcbmltcG9ydCB0aWNrRm9ybWF0IGZyb20gXCIuL3RpY2tGb3JtYXQuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVhcmlzaChzY2FsZSkge1xuICB2YXIgZG9tYWluID0gc2NhbGUuZG9tYWluO1xuXG4gIHNjYWxlLnRpY2tzID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICB2YXIgZCA9IGRvbWFpbigpO1xuICAgIHJldHVybiB0aWNrcyhkWzBdLCBkW2QubGVuZ3RoIC0gMV0sIGNvdW50ID09IG51bGwgPyAxMCA6IGNvdW50KTtcbiAgfTtcblxuICBzY2FsZS50aWNrRm9ybWF0ID0gZnVuY3Rpb24oY291bnQsIHNwZWNpZmllcikge1xuICAgIHZhciBkID0gZG9tYWluKCk7XG4gICAgcmV0dXJuIHRpY2tGb3JtYXQoZFswXSwgZFtkLmxlbmd0aCAtIDFdLCBjb3VudCA9PSBudWxsID8gMTAgOiBjb3VudCwgc3BlY2lmaWVyKTtcbiAgfTtcblxuICBzY2FsZS5uaWNlID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICBpZiAoY291bnQgPT0gbnVsbCkgY291bnQgPSAxMDtcblxuICAgIHZhciBkID0gZG9tYWluKCk7XG4gICAgdmFyIGkwID0gMDtcbiAgICB2YXIgaTEgPSBkLmxlbmd0aCAtIDE7XG4gICAgdmFyIHN0YXJ0ID0gZFtpMF07XG4gICAgdmFyIHN0b3AgPSBkW2kxXTtcbiAgICB2YXIgcHJlc3RlcDtcbiAgICB2YXIgc3RlcDtcbiAgICB2YXIgbWF4SXRlciA9IDEwO1xuXG4gICAgaWYgKHN0b3AgPCBzdGFydCkge1xuICAgICAgc3RlcCA9IHN0YXJ0LCBzdGFydCA9IHN0b3AsIHN0b3AgPSBzdGVwO1xuICAgICAgc3RlcCA9IGkwLCBpMCA9IGkxLCBpMSA9IHN0ZXA7XG4gICAgfVxuICAgIFxuICAgIHdoaWxlIChtYXhJdGVyLS0gPiAwKSB7XG4gICAgICBzdGVwID0gdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpO1xuICAgICAgaWYgKHN0ZXAgPT09IHByZXN0ZXApIHtcbiAgICAgICAgZFtpMF0gPSBzdGFydFxuICAgICAgICBkW2kxXSA9IHN0b3BcbiAgICAgICAgcmV0dXJuIGRvbWFpbihkKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RlcCA+IDApIHtcbiAgICAgICAgc3RhcnQgPSBNYXRoLmZsb29yKHN0YXJ0IC8gc3RlcCkgKiBzdGVwO1xuICAgICAgICBzdG9wID0gTWF0aC5jZWlsKHN0b3AgLyBzdGVwKSAqIHN0ZXA7XG4gICAgICB9IGVsc2UgaWYgKHN0ZXAgPCAwKSB7XG4gICAgICAgIHN0YXJ0ID0gTWF0aC5jZWlsKHN0YXJ0ICogc3RlcCkgLyBzdGVwO1xuICAgICAgICBzdG9wID0gTWF0aC5mbG9vcihzdG9wICogc3RlcCkgLyBzdGVwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwcmVzdGVwID0gc3RlcDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2NhbGU7XG4gIH07XG5cbiAgcmV0dXJuIHNjYWxlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaW5lYXIoKSB7XG4gIHZhciBzY2FsZSA9IGNvbnRpbnVvdXMoKTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvcHkoc2NhbGUsIGxpbmVhcigpKTtcbiAgfTtcblxuICBpbml0UmFuZ2UuYXBwbHkoc2NhbGUsIGFyZ3VtZW50cyk7XG5cbiAgcmV0dXJuIGxpbmVhcmlzaChzY2FsZSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gVHJhbnNmb3JtKGssIHgsIHkpIHtcbiAgdGhpcy5rID0gaztcbiAgdGhpcy54ID0geDtcbiAgdGhpcy55ID0geTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFRyYW5zZm9ybSxcbiAgc2NhbGU6IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gayA9PT0gMSA/IHRoaXMgOiBuZXcgVHJhbnNmb3JtKHRoaXMuayAqIGssIHRoaXMueCwgdGhpcy55KTtcbiAgfSxcbiAgdHJhbnNsYXRlOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgcmV0dXJuIHggPT09IDAgJiB5ID09PSAwID8gdGhpcyA6IG5ldyBUcmFuc2Zvcm0odGhpcy5rLCB0aGlzLnggKyB0aGlzLmsgKiB4LCB0aGlzLnkgKyB0aGlzLmsgKiB5KTtcbiAgfSxcbiAgYXBwbHk6IGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgcmV0dXJuIFtwb2ludFswXSAqIHRoaXMuayArIHRoaXMueCwgcG9pbnRbMV0gKiB0aGlzLmsgKyB0aGlzLnldO1xuICB9LFxuICBhcHBseVg6IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4geCAqIHRoaXMuayArIHRoaXMueDtcbiAgfSxcbiAgYXBwbHlZOiBmdW5jdGlvbih5KSB7XG4gICAgcmV0dXJuIHkgKiB0aGlzLmsgKyB0aGlzLnk7XG4gIH0sXG4gIGludmVydDogZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICByZXR1cm4gWyhsb2NhdGlvblswXSAtIHRoaXMueCkgLyB0aGlzLmssIChsb2NhdGlvblsxXSAtIHRoaXMueSkgLyB0aGlzLmtdO1xuICB9LFxuICBpbnZlcnRYOiBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuICh4IC0gdGhpcy54KSAvIHRoaXMuaztcbiAgfSxcbiAgaW52ZXJ0WTogZnVuY3Rpb24oeSkge1xuICAgIHJldHVybiAoeSAtIHRoaXMueSkgLyB0aGlzLms7XG4gIH0sXG4gIHJlc2NhbGVYOiBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIHguY29weSgpLmRvbWFpbih4LnJhbmdlKCkubWFwKHRoaXMuaW52ZXJ0WCwgdGhpcykubWFwKHguaW52ZXJ0LCB4KSk7XG4gIH0sXG4gIHJlc2NhbGVZOiBmdW5jdGlvbih5KSB7XG4gICAgcmV0dXJuIHkuY29weSgpLmRvbWFpbih5LnJhbmdlKCkubWFwKHRoaXMuaW52ZXJ0WSwgdGhpcykubWFwKHkuaW52ZXJ0LCB5KSk7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLnggKyBcIixcIiArIHRoaXMueSArIFwiKSBzY2FsZShcIiArIHRoaXMuayArIFwiKVwiO1xuICB9XG59O1xuXG5leHBvcnQgdmFyIGlkZW50aXR5ID0gbmV3IFRyYW5zZm9ybSgxLCAwLCAwKTtcblxudHJhbnNmb3JtLnByb3RvdHlwZSA9IFRyYW5zZm9ybS5wcm90b3R5cGU7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zZm9ybShub2RlKSB7XG4gIHdoaWxlICghbm9kZS5fX3pvb20pIGlmICghKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKSByZXR1cm4gaWRlbnRpdHk7XG4gIHJldHVybiBub2RlLl9fem9vbTtcbn1cbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvbiBkLWlubGluZS1ibG9ja1wiPnt7IHQoJ2ludGVydmFsc0NoYXJ0Lm1lc3NhZ2UnKSB9fTwvcD5cclxuICAgIDxkaXYgY2xhc3M9XCJkLWlubGluZS1ibG9jayBtci0xMCBtbC0xMFwiPlxyXG4gICAgICA8c2VsZWN0IGNsYXNzPVwib3B0aW9uXCIgdi1tb2RlbD1cIm1pblZhbHVlXCIgQGNoYW5nZT1cInJlZnJlc2hDaGFydCgpXCI+XHJcbiAgICAgICAgPG9wdGlvbiA6dmFsdWU9XCJNaW5WYWx1ZS5TZWNvbmRzXzEwXCI+MTAge3sgdCgnc2VjLm1lc3NhZ2UnKSB9fTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gOnZhbHVlPVwiTWluVmFsdWUuTWluXzFcIj4xIHt7IHQoJ21pbi5tZXNzYWdlJykgfX08L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cIk1pblZhbHVlLk1pbl81XCI+NSB7eyB0KCcybWluLm1lc3NhZ2UnKSB9fTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gOnZhbHVlPVwiTWluVmFsdWUuTWluXzEwXCI+MTAge3sgdCgnbWlucy5tZXNzYWdlJykgfX08L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb24gZC1pbmxpbmUtYmxvY2tcIj57eyB0KCdpbnRlcnZhbHNDaGFydC5kZXNjcmlwdGlvbicpIH19PC9wPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgcmVmPVwiY2hhcnRcIiBpZD1cInRpbWVJbnRlcnZhbENoYXJ0RDNcIj48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnVGltZUludGVydmFsQ2hhcnQnLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBTdG9yYWdlRGVzZXJpYWxpemVQYXJhbSB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xyXG5pbXBvcnQgeyBUaW1lSW50ZXJ2YWwgfSBmcm9tICcuLi9lbnRpdHkvdGltZS1pbnRlcnZhbCc7XHJcbmltcG9ydCB7IHRvZGF5TG9jYWxEYXRlIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZSc7XHJcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcclxuaW1wb3J0IHsgY29udmVydFN0cmluZ1RpbWVJbnRlcnZhbFRvU2Vjb25kcyB9IGZyb20gJy4uL3V0aWxzL2NvbnZlcnRlcic7XHJcblxyXG5lbnVtIE1pblZhbHVlIHtcclxuICBTZWNvbmRzXzEwID0gMTAsXHJcbiAgTWluXzEgPSA2MCxcclxuICBNaW5fNSA9IDMwMCxcclxuICBNaW5fMTAgPSA2MDAsXHJcbn1cclxuXHJcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xyXG5jb25zdCBzdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xyXG5cclxuY29uc3QgY2hhcnQgPSByZWY8YW55PigpO1xyXG5jb25zdCBtaW5WYWx1ZSA9IHJlZjxudW1iZXI+KCk7XHJcbmNvbnN0IHRvZGF5SW50ZXJ2YWxzID0gcmVmPFRpbWVJbnRlcnZhbFtdPigpO1xyXG5cclxudHlwZSBEYXRhRm9yQ2hhcnQgPSB7XHJcbiAgZG9tYWluOiBzdHJpbmc7XHJcbiAgaW50ZXJ2YWw6IHN0cmluZztcclxufTtcclxuXHJcbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XHJcbiAgbWluVmFsdWUudmFsdWUgPSBNaW5WYWx1ZS5TZWNvbmRzXzEwO1xyXG4gIGNvbnN0IHRpbWVJbnRlcnZhbExpc3QgPSAoYXdhaXQgc3RvcmFnZS5nZXREZXNlcmlhbGl6ZUxpc3QoXHJcbiAgICBTdG9yYWdlRGVzZXJpYWxpemVQYXJhbS5USU1FSU5URVJWQUxfTElTVCxcclxuICApKSBhcyBUaW1lSW50ZXJ2YWxbXTtcclxuXHJcbiAgdG9kYXlJbnRlcnZhbHMudmFsdWUgPSB0aW1lSW50ZXJ2YWxMaXN0Py5maWx0ZXIoeCA9PiB4LmRheSA9PSB0b2RheUxvY2FsRGF0ZSgpKTtcclxuICByZW5kZXJDaGFydCgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNoYXJ0KCkge1xyXG4gIGNvbnN0IGRhdGFGb3JDaGFydDogRGF0YUZvckNoYXJ0W10gPSBbXTtcclxuICB0b2RheUludGVydmFscy52YWx1ZT8uZm9yRWFjaChpbnRlcnZhbCA9PiB7XHJcbiAgICBpbnRlcnZhbC5pbnRlcnZhbHMuZm9yRWFjaChpbnQgPT4ge1xyXG4gICAgICBjb25zdCBmcm9tID0gaW50LnNwbGl0KCctJylbMF07XHJcbiAgICAgIGNvbnN0IHRvID0gaW50LnNwbGl0KCctJylbMV07XHJcbiAgICAgIGlmIChcclxuICAgICAgICBjb252ZXJ0U3RyaW5nVGltZUludGVydmFsVG9TZWNvbmRzKHRvKSAtIGNvbnZlcnRTdHJpbmdUaW1lSW50ZXJ2YWxUb1NlY29uZHMoZnJvbSkgPlxyXG4gICAgICAgIG1pblZhbHVlLnZhbHVlIVxyXG4gICAgICApIHtcclxuICAgICAgICBkYXRhRm9yQ2hhcnQucHVzaCh7IGRvbWFpbjogaW50ZXJ2YWwuZG9tYWluLCBpbnRlcnZhbDogY29udmVydEludGVydmFsKGludCkgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGRyYXdJbnRlcnZhbENoYXJ0KGRhdGFGb3JDaGFydCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZnJlc2hDaGFydCgpIHtcclxuICBjaGFydC52YWx1ZS5pbm5lckhUTUwgPSAnJztcclxuICByZW5kZXJDaGFydCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0SW50ZXJ2YWwoaW50ZXJ2YWw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgZnVuY3Rpb24gY29udmVydChpdGVtOiBzdHJpbmdbXSkge1xyXG4gICAgaXRlbSA9IGl0ZW0ubWFwKHggPT4gKHgubGVuZ3RoID09IDEgPyBgMCR7eH1gIDogeCkpO1xyXG4gICAgcmV0dXJuIGl0ZW0uam9pbignOicpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc291cmNlVGltZUZyb20gPSBpbnRlcnZhbC5zcGxpdCgnLScpWzBdLnNwbGl0KCc6Jyk7XHJcbiAgY29uc3Qgc291cmNlVGltZVRvID0gaW50ZXJ2YWwuc3BsaXQoJy0nKVsxXS5zcGxpdCgnOicpO1xyXG4gIHJldHVybiBgJHtjb252ZXJ0KHNvdXJjZVRpbWVGcm9tKX0tJHtjb252ZXJ0KHNvdXJjZVRpbWVUbyl9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd0ludGVydmFsQ2hhcnQoZGF0YTogRGF0YUZvckNoYXJ0W10pIHtcclxuICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICBjb25zdCBoRnJvbSA9IGdldEhvdXJGcm9tKGl0ZW0uaW50ZXJ2YWwpO1xyXG4gICAgY29uc3QgaFRvID0gZ2V0SG91clRvKGl0ZW0uaW50ZXJ2YWwpO1xyXG4gICAgaWYgKGhGcm9tICE9IGhUbykge1xyXG4gICAgICBjb25zdCBzb3VyY2VUaW1lRnJvbSA9IGl0ZW0uaW50ZXJ2YWwuc3BsaXQoJy0nKVswXS5zcGxpdCgnOicpO1xyXG4gICAgICBjb25zdCBzb3VyY2VUaW1lVG8gPSBpdGVtLmludGVydmFsLnNwbGl0KCctJylbMV0uc3BsaXQoJzonKTtcclxuICAgICAgY29uc3QgdGltZVRvID0gYCR7c291cmNlVGltZUZyb21bMF19OjU5OjU5YDtcclxuICAgICAgY29uc3QgdGltZUZyb20gPSBgJHtzb3VyY2VUaW1lVG9bMF19OjAwOjAwYDtcclxuICAgICAgZGF0YS5wdXNoKHsgZG9tYWluOiBpdGVtLmRvbWFpbiwgaW50ZXJ2YWw6IGl0ZW0uaW50ZXJ2YWwuc3BsaXQoJy0nKVswXSArICctJyArIHRpbWVUbyB9KTtcclxuICAgICAgZGF0YS5wdXNoKHsgZG9tYWluOiBpdGVtLmRvbWFpbiwgaW50ZXJ2YWw6IHRpbWVGcm9tICsgJy0nICsgaXRlbS5pbnRlcnZhbC5zcGxpdCgnLScpWzFdIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBtYXJnaW4gPSB7IHRvcDogMTAsIHJpZ2h0OiAxMCwgYm90dG9tOiAyMCwgbGVmdDogMjAgfTtcclxuICBjb25zdCB3aWR0aCA9IGNoYXJ0LnZhbHVlLm9mZnNldFdpZHRoO1xyXG4gIGNvbnN0IGhlaWdodCA9IDQwMDtcclxuXHJcbiAgY29uc3QgdGlja0Rpc3RhbmNlID0gNC4zODtcclxuXHJcbiAgY29uc3QgdG9vbHRpcCA9IGQzXHJcbiAgICAuc2VsZWN0KCcjdGltZUludGVydmFsQ2hhcnREMycpXHJcbiAgICAuYXBwZW5kKCdkaXYnKVxyXG4gICAgLnN0eWxlKCdvcGFjaXR5JywgMClcclxuICAgIC5zdHlsZSgnZGlzcGxheScsICdub25lJylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKVxyXG4gICAgLnN0eWxlKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3doaXRlJylcclxuICAgIC5zdHlsZSgnY29sb3InLCAnYmxhY2snKVxyXG4gICAgLnN0eWxlKCdib3JkZXInLCAnMXB4IHNvbGlkIGdyZXknKVxyXG4gICAgLmF0dHIoJ2NsYXNzJywgJ3Rvb2x0aXAnKVxyXG4gICAgLnN0eWxlKCdib3JkZXItd2lkdGgnLCAnMXB4JylcclxuICAgIC5zdHlsZSgnYm9yZGVyLXJhZGl1cycsICczcHgnKVxyXG4gICAgLnN0eWxlKCdwYWRkaW5nJywgJzVweCcpO1xyXG5cclxuICBjb25zdCBtb3VzZW92ZXIgPSBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICB0b29sdGlwLnN0eWxlKCdvcGFjaXR5JywgMSkuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgIGQzLnNlbGVjdCgnLnRvb2x0aXAnKVxyXG4gICAgICAuc3R5bGUoJ2xlZnQnLCBlLmxheWVyWCArIDE1ICsgJ3B4JylcclxuICAgICAgLnN0eWxlKCd0b3AnLCBlLmxheWVyWSArIDE1ICsgJ3B4Jyk7XHJcbiAgfTtcclxuICBjb25zdCBtb3VzZW1vdmUgPSBmdW5jdGlvbiAoZXZlbnQ6IGFueSwgZGF0YTogYW55KSB7XHJcbiAgICB0b29sdGlwLmh0bWwoYDxiPiR7ZGF0YS5kb21haW59PC9iPjxicj4ke2RhdGEuaW50ZXJ2YWx9YCk7XHJcbiAgfTtcclxuICBjb25zdCBtb3VzZWxlYXZlID0gZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgdG9vbHRpcC5zdHlsZSgnb3BhY2l0eScsIDApLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICB9O1xyXG5cclxuICAvL2NyZWF0ZSB0aGUgc3ZnXHJcbiAgY29uc3Qgc3ZnID0gZDNcclxuICAgIC5zZWxlY3QoJyN0aW1lSW50ZXJ2YWxDaGFydEQzJylcclxuICAgIC5hcHBlbmQoJ3N2ZycpXHJcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxyXG4gICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxyXG4gICAgLmFwcGVuZCgnZycpXHJcbiAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xyXG5cclxuICBjb25zdCB5ID0gZDMuc2NhbGVMaW5lYXIoW2hlaWdodCwgMF0pLmRvbWFpbihbMCwgNjBdKTtcclxuICBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KHkpO1xyXG5cclxuICBjb25zdCB4ID0gZDMuc2NhbGVMaW5lYXIoWzAsIHdpZHRoXSkuZG9tYWluKFswLCAyNF0pO1xyXG4gIGNvbnN0IHhBeGlzID0gZDMuYXhpc0JvdHRvbSh4KS50aWNrcygyNCk7XHJcblxyXG4gIHN2Z1xyXG4gICAgLmFwcGVuZCgnZycpXHJcbiAgICAuYXR0cignY2xhc3MnLCAnZ3JpZCcpXHJcbiAgICAuc3R5bGUoJ2NvbG9yJywgJyNlNWU1ZTUnKVxyXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgJHtoZWlnaHR9KWApXHJcbiAgICAuY2FsbCh4QXhpcy50aWNrU2l6ZSgtaGVpZ2h0KSk7XHJcblxyXG4gIHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdncmlkJykuc3R5bGUoJ2NvbG9yJywgJyNlNWU1ZTUnKS5jYWxsKHlBeGlzLnRpY2tTaXplKC13aWR0aCkpO1xyXG4gIHN2Zy5zZWxlY3RBbGwoJ3RleHQnKS5zdHlsZSgnZmlsbCcsICdibGFjaycpO1xyXG5cclxuICAvL2RyYXcgdGhlIGJhcnMsIG9mZnNldCB5IGFuZCBiYXIgaGVpZ2h0IGJhc2VkIG9uIGRhdGFcclxuICBzdmdcclxuICAgIC5zZWxlY3RBbGwoJy5iYXInKVxyXG4gICAgLmRhdGEoZGF0YSlcclxuICAgIC5lbnRlcigpXHJcbiAgICAuYXBwZW5kKCdyZWN0JylcclxuICAgIC5zdHlsZSgnZmlsbCcsICcjNTY2OGUyJylcclxuICAgIC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKVxyXG4gICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMScpXHJcbiAgICAuYXR0cignY2xhc3MnLCAnYmFyJylcclxuICAgIC5hdHRyKCd4JywgKGRhdGE6IGFueSkgPT4geChnZXRIb3VyRnJvbShkYXRhLmludGVydmFsKSkgKyAyKVxyXG4gICAgLmF0dHIoJ3dpZHRoJywgY2hhcnQudmFsdWUub2Zmc2V0V2lkdGggLyAyNCAtIDQpXHJcbiAgICAuYXR0cigneScsIChkYXRhOiBhbnkpID0+IHkoZ2V0TWludXRlc1RvKGRhdGEuaW50ZXJ2YWwpKSAtIDEpXHJcbiAgICAuYXR0cignaGVpZ2h0JywgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICBjb25zdCBvZmZzZXQgPSBnZXRNaW51dGVzVG8oZGF0YS5pbnRlcnZhbCkgLSBnZXRNaW51dGVzRnJvbShkYXRhLmludGVydmFsKTtcclxuICAgICAgaWYgKG9mZnNldCA9PSAwKSB7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0U2Vjb25kcyA9IGdldFNlY29uZHNUbyhkYXRhLmludGVydmFsKSAtIGdldFNlY29uZHNGcm9tKGRhdGEuaW50ZXJ2YWwpO1xyXG4gICAgICAgIGlmIChvZmZzZXRTZWNvbmRzIDw9IDMpIHJldHVybiAwO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIDE7XHJcbiAgICAgIH0gZWxzZSByZXR1cm4gb2Zmc2V0ICogdGlja0Rpc3RhbmNlO1xyXG4gICAgfSlcclxuICAgIC5vbignbW91c2VvdmVyJywgbW91c2VvdmVyKVxyXG4gICAgLm9uKCdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpXHJcbiAgICAub24oJ21vdXNlbGVhdmUnLCBtb3VzZWxlYXZlKTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0SG91ckZyb20oaW50ZXJ2YWw6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICBjb25zdCB0aW1lID0gaW50ZXJ2YWwuc3BsaXQoJy0nKVswXTtcclxuICAgIHJldHVybiBOdW1iZXIodGltZS5zcGxpdCgnOicpWzBdKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEhvdXJUbyhpbnRlcnZhbDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIHZhciB0aW1lID0gaW50ZXJ2YWwuc3BsaXQoJy0nKVsxXTtcclxuICAgIHJldHVybiBOdW1iZXIodGltZS5zcGxpdCgnOicpWzBdKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldE1pbnV0ZXNGcm9tKGludGVydmFsOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgdmFyIHRpbWUgPSBpbnRlcnZhbC5zcGxpdCgnLScpWzBdO1xyXG4gICAgcmV0dXJuIE51bWJlcih0aW1lLnNwbGl0KCc6JylbMV0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0TWludXRlc1RvKGludGVydmFsOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgdmFyIHRpbWUgPSBpbnRlcnZhbC5zcGxpdCgnLScpWzFdO1xyXG4gICAgcmV0dXJuIE51bWJlcih0aW1lLnNwbGl0KCc6JylbMV0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0U2Vjb25kc0Zyb20oaW50ZXJ2YWw6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICB2YXIgdGltZSA9IGludGVydmFsLnNwbGl0KCctJylbMF07XHJcbiAgICByZXR1cm4gTnVtYmVyKHRpbWUuc3BsaXQoJzonKVsyXSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRTZWNvbmRzVG8oaW50ZXJ2YWw6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICB2YXIgdGltZSA9IGludGVydmFsLnNwbGl0KCctJylbMV07XHJcbiAgICByZXR1cm4gTnVtYmVyKHRpbWUuc3BsaXQoJzonKVsyXSk7XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmJsb2NrIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggcmdiKDE5NywgMTk3LCAxOTcpIHNvbGlkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuLmdyaWQgbGluZSB7XHJcbiAgc3Ryb2tlOiBncmF5O1xyXG4gIHN0cm9rZS1vcGFjaXR5OiAwLjI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+e3sgdCgndGltZUNoYXJ0RGVzY3JpcHRpb24ubWVzc2FnZScpIH19PC9wPlxyXG4gIDxCYXIgOmRhdGE9XCJkYXRhXCIgOm9wdGlvbnM9XCJvcHRpb25zXCIgdi1pZj1cImlzTG9hZGVkXCIgLz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnSG91cmx5Q2hhcnQnLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCB7IEJhciB9IGZyb20gJ3Z1ZS1jaGFydGpzJztcclxuaW1wb3J0IHtcclxuICBDaGFydCBhcyBDaGFydEpTLFxyXG4gIFRpdGxlLFxyXG4gIFRvb2x0aXAsXHJcbiAgTGVnZW5kLFxyXG4gIEJhckVsZW1lbnQsXHJcbiAgTGluZWFyU2NhbGUsXHJcbiAgQ2F0ZWdvcnlTY2FsZSxcclxufSBmcm9tICdjaGFydC5qcyc7XHJcbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBTdG9yYWdlRGVzZXJpYWxpemVQYXJhbSB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xyXG5pbXBvcnQgeyBUaW1lSW50ZXJ2YWwgfSBmcm9tICcuLi9lbnRpdHkvdGltZS1pbnRlcnZhbCc7XHJcbmltcG9ydCB7IHRvZGF5TG9jYWxEYXRlIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZSc7XHJcbmltcG9ydCB7IGNvbnZlcnRIb3Vyc1RvVGltZSwgY29udmVydFN0cmluZ1RpbWVJbnRlcnZhbFRvU2Vjb25kcyB9IGZyb20gJy4uL3V0aWxzL2NvbnZlcnRlcic7XHJcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XHJcblxyXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcclxuXHJcbnR5cGUgRGF0YUZvckNoYXJ0ID0ge1xyXG4gIHN1bW1hcnk6IG51bWJlcjtcclxuICBob3VyOiBudW1iZXI7XHJcbiAgZG9tYWluczogRG9tYWluc0ludGVydmFsW107XHJcbn07XHJcblxyXG50eXBlIERvbWFpbnNJbnRlcnZhbCA9IHtcclxuICBob3VyOiBudW1iZXI7XHJcbiAgc3VtbWFyeTogbnVtYmVyO1xyXG4gIGRvbWFpbjogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3Qgc3RvcmFnZSA9IGluamVjdFN0b3JhZ2UoKTtcclxuXHJcbkNoYXJ0SlMucmVnaXN0ZXIoQ2F0ZWdvcnlTY2FsZSwgTGluZWFyU2NhbGUsIEJhckVsZW1lbnQsIFRpdGxlLCBUb29sdGlwLCBMZWdlbmQpO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHJlZjxhbnk+KCk7XHJcbmNvbnN0IGRhdGEgPSByZWY8YW55PigpO1xyXG5jb25zdCBpc0xvYWRlZCA9IHJlZjxib29sZWFuPigpO1xyXG5cclxuY29uc3Qgb2JqZWN0czogRGF0YUZvckNoYXJ0W10gPSBbXTtcclxuY29uc3QgaG91cnM6IG51bWJlcltdID0gW107XHJcblxyXG5pc0xvYWRlZC52YWx1ZSA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gY29udmVydFRpbUludGVydmFsVG9PYmplY3QoXHJcbiAgdGltZUludGVydmFsOiBzdHJpbmcsXHJcbiAgZG9tYWluOiBzdHJpbmcsXHJcbik6IERvbWFpbnNJbnRlcnZhbFtdIHwgbnVsbCB7XHJcbiAgY29uc3QgYXJyYXkgPSB0aW1lSW50ZXJ2YWwuc3BsaXQoJy0nKTtcclxuICBjb25zdCB0aW1lMSA9IGFycmF5WzBdLnNwbGl0KCc6Jyk7XHJcbiAgY29uc3QgdGltZTIgPSBhcnJheVsxXS5zcGxpdCgnOicpO1xyXG4gIGlmICh0aW1lMVswXSA9PSB0aW1lMlswXSkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIGhvdXI6IE51bWJlcih0aW1lMVswXSksXHJcbiAgICAgICAgc3VtbWFyeTpcclxuICAgICAgICAgIGNvbnZlcnRTdHJpbmdUaW1lSW50ZXJ2YWxUb1NlY29uZHMoYXJyYXlbMV0pIC1cclxuICAgICAgICAgIGNvbnZlcnRTdHJpbmdUaW1lSW50ZXJ2YWxUb1NlY29uZHMoYXJyYXlbMF0pLFxyXG4gICAgICAgIGRvbWFpbjogZG9tYWluLFxyXG4gICAgICB9LFxyXG4gICAgXTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgYXJyID0gW107XHJcbiAgICBjb25zdCBmaXJzdFBhcnQxID0gYXJyYXlbMF07XHJcbiAgICBjb25zdCBmaXJzdFBhcnQyID0gYCR7dGltZTFbMF19OjU5OjU5YDtcclxuICAgIGNvbnN0IGhvdXJGb3JGaXJzdFBhcnQgPSBmaXJzdFBhcnQxLnNwbGl0KCc6Jyk7XHJcbiAgICBhcnIucHVzaCh7XHJcbiAgICAgIGhvdXI6IE51bWJlcihob3VyRm9yRmlyc3RQYXJ0WzBdKSxcclxuICAgICAgc3VtbWFyeTpcclxuICAgICAgICBjb252ZXJ0U3RyaW5nVGltZUludGVydmFsVG9TZWNvbmRzKGZpcnN0UGFydDIpIC1cclxuICAgICAgICBjb252ZXJ0U3RyaW5nVGltZUludGVydmFsVG9TZWNvbmRzKGZpcnN0UGFydDEpLFxyXG4gICAgICBkb21haW46IGRvbWFpbixcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc2Vjb25kUGFydDEgPSBgJHt0aW1lMlswXX06MDA6MDBgO1xyXG4gICAgY29uc3Qgc2Vjb25kUGFydDIgPSBgJHt0aW1lMlswXX06JHt0aW1lMlsxXX06JHt0aW1lMlsyXX1gO1xyXG4gICAgY29uc3QgaG91ckZvcnNlY29uZFBhcnQgPSBzZWNvbmRQYXJ0MS5zcGxpdCgnOicpO1xyXG4gICAgYXJyLnB1c2goe1xyXG4gICAgICBob3VyOiBOdW1iZXIoaG91ckZvcnNlY29uZFBhcnRbMF0pLFxyXG4gICAgICBzdW1tYXJ5OlxyXG4gICAgICAgIGNvbnZlcnRTdHJpbmdUaW1lSW50ZXJ2YWxUb1NlY29uZHMoc2Vjb25kUGFydDIpIC1cclxuICAgICAgICBjb252ZXJ0U3RyaW5nVGltZUludGVydmFsVG9TZWNvbmRzKHNlY29uZFBhcnQxKSxcclxuICAgICAgZG9tYWluOiBkb21haW4sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcnI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsRGF0YSh0aW1lSW50ZXJ2YWxMaXN0OiBUaW1lSW50ZXJ2YWxbXSkge1xyXG4gIGNvbnN0IGl0ZW1zID0gdGltZUludGVydmFsTGlzdD8uZmlsdGVyKHggPT4geC5kYXkgPT0gdG9kYXlMb2NhbERhdGUoKSk7XHJcbiAgY29uc3QgZG9tYWlucyA9IGl0ZW1zLm1hcCh4ID0+IHguZG9tYWluKTtcclxuICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XHJcbiAgY29uc3QgaW50ZXJ2YWxzT2JqOiBEb21haW5zSW50ZXJ2YWxbXSA9IFtdO1xyXG4gIGRvbWFpbnMuZm9yRWFjaChkb21haW4gPT4ge1xyXG4gICAgY29uc3QgaW50ZXJ2YWxzID0gaXRlbXMuZmlsdGVyKHggPT4geC5kb21haW4gPT0gZG9tYWluKTtcclxuICAgIGludGVydmFscy5mb3JFYWNoKGFycmF5ID0+IHtcclxuICAgICAgY29uc3QgaSA9IGFycmF5LmludGVydmFscztcclxuICAgICAgaS5mb3JFYWNoKHRpbWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9ianMgPSBjb252ZXJ0VGltSW50ZXJ2YWxUb09iamVjdCh0aW1lLCBkb21haW4pO1xyXG4gICAgICAgIGlmIChvYmpzICE9IG51bGwgJiYgb2Jqcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBvYmpzLmZvckVhY2gob2JqID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3REb21haW4gPSBpbnRlcnZhbHNPYmouZmluZCh4ID0+IHguZG9tYWluID09IGRvbWFpbiAmJiB4LmhvdXIgPT0gb2JqLmhvdXIpO1xyXG4gICAgICAgICAgICBpZiAoZXhpc3REb21haW4gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgZXhpc3REb21haW4uc3VtbWFyeSArPSBvYmouc3VtbWFyeTtcclxuICAgICAgICAgICAgfSBlbHNlIGludGVydmFsc09iai5wdXNoKG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRlbXBBcnJheTogbnVtYmVyW10gPSBbXTtcclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjQ7IGluZGV4KyspIHtcclxuICAgIGNvbnN0IG9iaiA9IG9iamVjdHMuZmluZCh4ID0+IHguaG91ciA9PSBpbmRleCk7XHJcbiAgICBjb25zdCBpbnRlcnZhbE9iaiA9IGludGVydmFsc09iai5maWx0ZXIoeCA9PiB4LmhvdXIgPT0gaW5kZXgpO1xyXG4gICAgY29uc3Qgc3VtbWFyeSA9XHJcbiAgICAgIGludGVydmFsT2JqLmxlbmd0aCA9PSAwID8gMCA6IGludGVydmFsT2JqLm1hcCh4ID0+IHguc3VtbWFyeSkucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XHJcbiAgICBpZiAob2JqID09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCBuZXdPYmogPSB7XHJcbiAgICAgICAgc3VtbWFyeTogc3VtbWFyeSxcclxuICAgICAgICBob3VyOiBpbmRleCxcclxuICAgICAgICBkb21haW5zOiBpbnRlcnZhbE9iaixcclxuICAgICAgfTtcclxuICAgICAgb2JqZWN0cy5wdXNoKG5ld09iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvYmouc3VtbWFyeSArPSBzdW1tYXJ5O1xyXG4gICAgICBpbnRlcnZhbE9iai5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIG9iai5kb21haW5zLnB1c2goZWxlbWVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRlbXBBcnJheS5wdXNoKDApO1xyXG4gIH1cclxuXHJcbiAgb2JqZWN0cy5mb3JFYWNoKG9iaiA9PiB7XHJcbiAgICBjb25zdCBlbXB0eUFycmF5OiBudW1iZXJbXSA9IE9iamVjdC5hc3NpZ24oW10sIHRlbXBBcnJheSk7XHJcbiAgICBlbXB0eUFycmF5W29iai5ob3VyXSA9IE51bWJlcihvYmouc3VtbWFyeSAvIDYwKTtcclxuICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBbJyM1NjY4ZTInXSxcclxuICAgICAgZGF0YTogZW1wdHlBcnJheSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBidWlsZENoYXJ0KCkge1xyXG4gIGNvbnN0IHRpbWVJbnRlcnZhbExpc3QgPSAoYXdhaXQgc3RvcmFnZS5nZXREZXNlcmlhbGl6ZUxpc3QoXHJcbiAgICBTdG9yYWdlRGVzZXJpYWxpemVQYXJhbS5USU1FSU5URVJWQUxfTElTVCxcclxuICApKSBhcyBUaW1lSW50ZXJ2YWxbXTtcclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDw9IDIzOyBpbmRleCsrKSB7XHJcbiAgICBob3Vycy5wdXNoKGluZGV4KTtcclxuICB9XHJcbiAgbGV0IG1pbnV0ZXM6IG51bWJlcltdID0gW107XHJcbiAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IDYwOyBpbmRleCsrKSB7XHJcbiAgICBtaW51dGVzLnB1c2goaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGF0YUZvckNoYXJ0ID0gZmlsbERhdGEodGltZUludGVydmFsTGlzdCk7XHJcbiAgZGF0YS52YWx1ZSA9IHtcclxuICAgIGxhYmVsczogaG91cnMsXHJcbiAgICBkYXRhc2V0czogZGF0YUZvckNoYXJ0LFxyXG4gIH07XHJcblxyXG4gIG9wdGlvbnMudmFsdWUgPSB7XHJcbiAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICBwbHVnaW5zOiB7XHJcbiAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnbm9uZScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbiAoY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtjb250ZXh0LmxhYmVsfTowMC0ke051bWJlcihjb250ZXh0LmxhYmVsKSArIDF9OjAwICR7Y29udmVydEhvdXJzVG9UaW1lKFxyXG4gICAgICAgICAgICAgIGNvbnRleHQucmF3LFxyXG4gICAgICAgICAgICApfWA7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHk6IHtcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgbWF4OiA2MCxcclxuICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgc3RlcFNpemU6IDUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgeDoge1xyXG4gICAgICAgIHN0YWNrZWQ6IHRydWUsXHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICAgIG1heDogMjMsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgaXNMb2FkZWQudmFsdWUgPSB0cnVlO1xyXG59XHJcblxyXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4gYXdhaXQgYnVpbGRDaGFydCgpKTtcclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwidGl0bGVcIj4ge3sgdCgnZGFzaGJvYXJkLm1lc3NhZ2UnKSB9fSA8L2xhYmVsPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjaGFydCBjaGFydEJ5SG91cnNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtdC0xMCBtYi0yMFwiPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgOmNsYXNzPVwiWydjaGFydC1idG4nLCBjaGFydCA9PSBUeXBlT2ZDaGFydC5Ib3JseSA/ICdhY3RpdmUnIDogJyddXCJcclxuICAgICAgICBAY2xpY2s9XCJvcGVuQ2hhcnQoVHlwZU9mQ2hhcnQuSG9ybHkpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpbWcgY2xhc3M9XCJtbC01XCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zL2J5LWhvdXJzLnN2Z1wiIGhlaWdodD1cIjIyXCIgLz5cclxuICAgICAgICB7eyB0KCdieUhvdXJzLm1lc3NhZ2UnKSB9fVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIDpjbGFzcz1cIlsnbWwtMTAnLCAnY2hhcnQtYnRuJywgY2hhcnQgPT0gVHlwZU9mQ2hhcnQuSW50ZXJ2YWwgPyAnYWN0aXZlJyA6ICcnXVwiXHJcbiAgICAgICAgQGNsaWNrPVwib3BlbkNoYXJ0KFR5cGVPZkNoYXJ0LkludGVydmFsKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8aW1nIGNsYXNzPVwibWwtNVwiIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9ieS1pbnRlcnZhbHMuc3ZnXCIgaGVpZ2h0PVwiMjJcIiAvPlxyXG4gICAgICAgIHt7IHQoJ2ludGVydmFscy5tZXNzYWdlJykgfX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxIb3VybHlDaGFydCB2LWlmPVwiY2hhcnQgPT0gVHlwZU9mQ2hhcnQuSG9ybHlcIiAvPlxyXG4gICAgPFRpbWVJbnRlcnZhbENoYXJ0IHYtaWY9XCJjaGFydCA9PSBUeXBlT2ZDaGFydC5JbnRlcnZhbFwiIC8+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInRhYi1pdGVtc1wiPlxyXG4gICAgPFRhYkxpc3QgOnR5cGU9XCJUeXBlT2ZMaXN0LkRhc2hib2FyZFwiIDpzaG93QWxsU3RhdHM9XCJmYWxzZVwiIHYtaWY9XCJjaGFydCA9PSBUeXBlT2ZDaGFydC5Ib3JseVwiIC8+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ0Rhc2hib2FyZCcsXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cclxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcclxuaW1wb3J0IFRpbWVJbnRlcnZhbENoYXJ0IGZyb20gJy4vVGltZUludGVydmFsQ2hhcnQudnVlJztcclxuaW1wb3J0IEhvdXJseUNoYXJ0IGZyb20gJy4vSG91cmx5Q2hhcnQudnVlJztcclxuaW1wb3J0IFRhYkxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJMaXN0LnZ1ZSc7XHJcbmltcG9ydCB7IFR5cGVPZkxpc3QgfSBmcm9tICcuLi91dGlscy9lbnVtcyc7XHJcbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcclxuXHJcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xyXG5jb25zdCBjaGFydCA9IHJlZjxUeXBlT2ZDaGFydD4oKTtcclxuXHJcbmVudW0gVHlwZU9mQ2hhcnQge1xyXG4gIEhvcmx5LFxyXG4gIEludGVydmFsLFxyXG59XHJcblxyXG5vbk1vdW50ZWQoKCkgPT4ge1xyXG4gIGNoYXJ0LnZhbHVlID0gVHlwZU9mQ2hhcnQuSG9ybHk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gb3BlbkNoYXJ0KHR5cGU6IFR5cGVPZkNoYXJ0KSB7XHJcbiAgY2hhcnQudmFsdWUgPSB0eXBlO1xyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmNoYXJ0IHtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICB3aWR0aDogODAlO1xyXG59XHJcbi50YWItaXRlbXMge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuLmNoYXJ0QnlIb3VycyB7XHJcbiAgaGVpZ2h0OiAzOTBweDtcclxufVxyXG4uY2hhcnQtYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAxOTIsIDE5Mik7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBsaW5lLWhlaWdodDogMzVweDtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmNoYXJ0LWJ0bi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjhiZmYgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJtYWluXCI+XHJcbiAgICA8RGFzaGJvYWQgdi1pZj1cInR5cGUgPT0gU2V0dGluZ3NUYWIuRGFzaGJvYXJkXCIgLz5cclxuICAgIDxXZWJzaXRlU3RhdHMgdi1pZj1cInR5cGUgPT0gU2V0dGluZ3NUYWIuV2Vic2l0ZVN0YXRzXCIgOmRvbWFpbj1cImRvbWFpbiFcIiAvPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdEYXNoYm9hZENvbnRhaW5lcicsXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cclxuaW1wb3J0IHsgU2V0dGluZ3NUYWIgfSBmcm9tICcuLi91dGlscy9lbnVtcyc7XHJcbmltcG9ydCBXZWJzaXRlU3RhdHMgZnJvbSAnLi9XZWJzaXRlU3RhdHMudnVlJztcclxuaW1wb3J0IERhc2hib2FkIGZyb20gJy4vRGFzaGJvYWQudnVlJztcclxuXHJcbmRlZmluZVByb3BzPHtcclxuICB0eXBlOiBTZXR0aW5nc1RhYjtcclxuICBkb21haW46IHN0cmluZyB8IHVuZGVmaW5lZDtcclxufT4oKTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4ubWFpbiB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxub3RpZmljYXRpb25zIHBvc2l0aW9uPVwiYm90dG9tIHJpZ2h0XCIgLz5cclxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtdGFic1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci1ibG9ja1wiPlxyXG4gICAgICA8aW1nIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgbG9nb1wiIGhlaWdodD1cIjMwXCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zLzQ4eDQ4LnBuZ1wiIC8+XHJcbiAgICAgIDxwIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgdGl0bGVcIj5XZWIgQWN0aXZpdHkgVGltZSBUcmFja2VyPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtdGFiIG10LTIwXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgaWQ9XCJ0aW1lSW50ZXJ2YWxDaGFydC10YWJcIlxyXG4gICAgICAgIG5hbWU9XCJzZXR0aW5ncy1ncm91cFwiXHJcbiAgICAgICAgOmNoZWNrZWQ9XCJzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5EYXNoYm9hcmQgfHwgc2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuV2Vic2l0ZVN0YXRzXCJcclxuICAgICAgICB2LW9uOmNoYW5nZT1cInNlbGVjdFRhYihTZXR0aW5nc1RhYi5EYXNoYm9hcmQpXCJcclxuICAgICAgLz5cclxuICAgICAgPGxhYmVsIG5hbWU9XCJ0YWJOYW1lXCIgZm9yPVwidGltZUludGVydmFsQ2hhcnQtdGFiXCJcclxuICAgICAgICA+PGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvcy1kYXNoYm9hcmQuc3ZnXCIgaGVpZ2h0PVwiMzBcIiAvPnt7XHJcbiAgICAgICAgICB0KCdkYXNoYm9hcmQubWVzc2FnZScpXHJcbiAgICAgICAgfX08L2xhYmVsXHJcbiAgICAgID5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1jb250ZW50XCI+XHJcbiAgICAgICAgPERhc2hib2FkQ29udGFpbmVyXHJcbiAgICAgICAgICB2LWlmPVwic2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuRGFzaGJvYXJkIHx8IHNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLldlYnNpdGVTdGF0c1wiXHJcbiAgICAgICAgICA6dHlwZT1cInNlbGVjdGVkVGFiXCJcclxuICAgICAgICAgIDpkb21haW49XCJzZWxlY3RlZFdlYnNpdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXRhYlwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgIGlkPVwid2hpdGUtbGlzdC10YWJcIlxyXG4gICAgICAgIG5hbWU9XCJzZXR0aW5ncy1ncm91cFwiXHJcbiAgICAgICAgOmNoZWNrZWQ9XCJzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5XaGl0ZUxpc3RcIlxyXG4gICAgICAgIHYtb246Y2hhbmdlPVwic2VsZWN0VGFiKFNldHRpbmdzVGFiLldoaXRlTGlzdClcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bGFiZWwgbmFtZT1cInRhYk5hbWVcIiBmb3I9XCJ3aGl0ZS1saXN0LXRhYlwiXHJcbiAgICAgICAgPjxpbWcgc3JjPVwiLi4vYXNzZXRzL2ljb25zL3Mtd2hpdGVsaXN0LnN2Z1wiIGhlaWdodD1cIjMwXCIgLz57e1xyXG4gICAgICAgICAgdCgnd2hpdGVMaXN0U2V0dGluZ3MubWVzc2FnZScpXHJcbiAgICAgICAgfX08L2xhYmVsXHJcbiAgICAgID5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cclxuICAgICAgICAgIDxXaGl0ZUxpc3Qgdi1pZj1cInNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLldoaXRlTGlzdFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXRhYlwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgIGlkPVwibGltaXRzLXRhYlwiXHJcbiAgICAgICAgbmFtZT1cInNldHRpbmdzLWdyb3VwXCJcclxuICAgICAgICA6Y2hlY2tlZD1cInNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLkxpbWl0c1wiXHJcbiAgICAgICAgdi1vbjpjaGFuZ2U9XCJzZWxlY3RUYWIoU2V0dGluZ3NUYWIuTGltaXRzKVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsYWJlbCBuYW1lPVwidGFiTmFtZVwiIGZvcj1cImxpbWl0cy10YWJcIlxyXG4gICAgICAgID48aW1nIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9zLWxpbWl0cy5zdmdcIiBoZWlnaHQ9XCIzMFwiIC8+e3tcclxuICAgICAgICAgIHQoJ2xpbWl0c1NldHRpbmdzLm1lc3NhZ2UnKVxyXG4gICAgICAgIH19PC9sYWJlbFxyXG4gICAgICA+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XHJcbiAgICAgICAgICA8TGltaXRzIHYtaWY9XCJzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5MaW1pdHNcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXRhYlwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgIGlkPVwibm90aWZpY2F0aW9uLXRhYlwiXHJcbiAgICAgICAgbmFtZT1cInNldHRpbmdzLWdyb3VwXCJcclxuICAgICAgICA6Y2hlY2tlZD1cInNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLk5vdGlmaWNhdGlvbnNcIlxyXG4gICAgICAgIHYtb246Y2hhbmdlPVwic2VsZWN0VGFiKFNldHRpbmdzVGFiLk5vdGlmaWNhdGlvbnMpXCJcclxuICAgICAgLz5cclxuICAgICAgPGxhYmVsIG5hbWU9XCJ0YWJOYW1lXCIgZm9yPVwibm90aWZpY2F0aW9uLXRhYlwiXHJcbiAgICAgICAgPjxpbWcgc3JjPVwiLi4vYXNzZXRzL2ljb25zL3Mtbm90aWZpY2F0aW9ucy5zdmdcIiBoZWlnaHQ9XCIzMFwiIC8+e3tcclxuICAgICAgICAgIHQoJ25vdGlmaWNhdGlvbnNTZXR0aW5ncy5tZXNzYWdlJylcclxuICAgICAgICB9fTwvbGFiZWxcclxuICAgICAgPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxyXG4gICAgICAgICAgPERhaWx5Tm90aWZpY2F0aW9ucyB2LWlmPVwic2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuTm90aWZpY2F0aW9uc1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXRhYlwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgIGlkPVwicG9tb2Rvcm8tdGFiXCJcclxuICAgICAgICBuYW1lPVwic2V0dGluZ3MtZ3JvdXBcIlxyXG4gICAgICAgIDpjaGVja2VkPVwic2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuUG9tb2Rvcm9cIlxyXG4gICAgICAgIHYtb246Y2hhbmdlPVwic2VsZWN0VGFiKFNldHRpbmdzVGFiLlBvbW9kb3JvKVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsYWJlbCBuYW1lPVwidGFiTmFtZVwiIGZvcj1cInBvbW9kb3JvLXRhYlwiXHJcbiAgICAgICAgPjxpbWcgc3JjPVwiLi4vYXNzZXRzL2ljb25zL3BvbW9kb3JvLnN2Z1wiIGhlaWdodD1cIjMwXCIgLz57e1xyXG4gICAgICAgICAgdCgncG9tb2Rvcm9Nb2RlLm1lc3NhZ2UnKVxyXG4gICAgICAgIH19PC9sYWJlbFxyXG4gICAgICA+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XHJcbiAgICAgICAgICA8UG9tb2Rvcm8gdi1pZj1cInNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLlBvbW9kb3JvXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtdGFiXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgaWQ9XCJnZW5lcmFsLXRhYlwiXHJcbiAgICAgICAgbmFtZT1cInNldHRpbmdzLWdyb3VwXCJcclxuICAgICAgICA6Y2hlY2tlZD1cInNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLkdlbmVyYWxTZXR0aW5nc1wiXHJcbiAgICAgICAgdi1vbjpjaGFuZ2U9XCJzZWxlY3RUYWIoU2V0dGluZ3NUYWIuR2VuZXJhbFNldHRpbmdzKVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsYWJlbCBuYW1lPVwidGFiTmFtZVwiIGZvcj1cImdlbmVyYWwtdGFiXCJcclxuICAgICAgICA+PGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvcy1zZXR0aW5ncy5zdmdcIiBoZWlnaHQ9XCIzMFwiIC8+e3tcclxuICAgICAgICAgIHQoJ2dlbmVyYWxTZXR0aW5ncy5tZXNzYWdlJylcclxuICAgICAgICB9fTwvbGFiZWxcclxuICAgICAgPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxyXG4gICAgICAgICAgPEdlbmVyYWxTZXR0aW5ncyB2LWlmPVwic2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuR2VuZXJhbFNldHRpbmdzXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtdGFiXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgaWQ9XCJhYm91dC10YWJcIlxyXG4gICAgICAgIG5hbWU9XCJzZXR0aW5ncy1ncm91cFwiXHJcbiAgICAgICAgOmNoZWNrZWQ9XCJzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5BYm91dFwiXHJcbiAgICAgICAgdi1vbjpjaGFuZ2U9XCJzZWxlY3RUYWIoU2V0dGluZ3NUYWIuQWJvdXQpXCJcclxuICAgICAgLz5cclxuICAgICAgPGxhYmVsIGNsYXNzPVwiYWJvdXRcIiBuYW1lPVwidGFiTmFtZVwiIGZvcj1cImFib3V0LXRhYlwiXHJcbiAgICAgICAgPjxpbWcgc3JjPVwiLi4vYXNzZXRzL2ljb25zL3MtYWJvdXQuc3ZnXCIgaGVpZ2h0PVwiMzBcIiAvPnt7XHJcbiAgICAgICAgICB0KCdhYm91dFNldHRpbmdzLm1lc3NhZ2UnKVxyXG4gICAgICAgIH19PC9sYWJlbFxyXG4gICAgICA+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XHJcbiAgICAgICAgICA8QWJvdXQgdi1pZj1cInNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLkFib3V0XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XHJcbmltcG9ydCBHZW5lcmFsU2V0dGluZ3MgZnJvbSAnLi4vY29tcG9uZW50cy9HZW5lcmFsU2V0dGluZ3MudnVlJztcclxuaW1wb3J0IFdoaXRlTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1doaXRlTGlzdC52dWUnO1xyXG5pbXBvcnQgTGltaXRzIGZyb20gJy4uL2NvbXBvbmVudHMvTGltaXRzLnZ1ZSc7XHJcbmltcG9ydCBEYWlseU5vdGlmaWNhdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25zLnZ1ZSc7XHJcbmltcG9ydCBQb21vZG9ybyBmcm9tICcuLi9jb21wb25lbnRzL1BvbW9kb3JvLnZ1ZSc7XHJcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0LnZ1ZSc7XHJcbmltcG9ydCB7IFNldHRpbmdzVGFiIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xyXG5pbXBvcnQgRGFzaGJvYWRDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9EYXNoYm9hZENvbnRhaW5lci52dWUnO1xyXG5pbXBvcnQgeyB1c2VFeHRlbnNpb25QYWdlIH0gZnJvbSAnLi4vY29tcG9zaXRpb25zL3VzZUV4dGVuc2lvblBhZ2UnO1xyXG5pbXBvcnQgeyBnZXRFbnVtVmFsdWVUYWIgfSBmcm9tICcuLi91dGlscy9leHRlbnNpb24tdGFicyc7XHJcbmltcG9ydCB7IGFwcGx5RGFya01vZGUgfSBmcm9tICcuLi91dGlscy9kYXJrLW1vZGUnO1xyXG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XHJcbmltcG9ydCB7IFN0b3JhZ2VQYXJhbXMsIERBUktfTU9ERV9ERUZBVUxUIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XHJcblxyXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcclxuY29uc3QgZXh0ZW5zaW9uUGFnZSA9IHVzZUV4dGVuc2lvblBhZ2UoKTtcclxuY29uc3Qgc2V0dGluZ3NTdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xyXG5cclxuY29uc3Qgc2VsZWN0ZWRUYWIgPSByZWY8U2V0dGluZ3NUYWI+KCk7XHJcbmNvbnN0IGN1cnJlbnRVcmwgPSByZWYobmV3IFVSTChsb2NhdGlvbi5ocmVmKSk7XHJcbmNvbnN0IHNlbGVjdGVkV2Vic2l0ZSA9IHJlZjxzdHJpbmc+KCk7XHJcbmNvbnN0IGRhcmtNb2RlID0gcmVmPGJvb2xlYW4+KCk7XHJcblxyXG53YXRjaChjdXJyZW50VXJsLCAoKSA9PiB7XHJcbiAgZ2V0Q3VycmVudFRhYigpO1xyXG59KTtcclxuXHJcbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XHJcbiAgZGFya01vZGUudmFsdWUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoU3RvcmFnZVBhcmFtcy5EQVJLX01PREUsIERBUktfTU9ERV9ERUZBVUxUKTtcclxuICBhcHBseURhcmtNb2RlKGRhcmtNb2RlLnZhbHVlISk7XHJcbiAgZ2V0Q3VycmVudFRhYigpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRUYWIoKSB7XHJcbiAgY29uc3QgdGFiTmFtZSA9IGN1cnJlbnRVcmwudmFsdWUuc2VhcmNoUGFyYW1zLmdldCgndGFiJyk7XHJcbiAgaWYgKHRhYk5hbWUgIT0gbnVsbCAmJiB0YWJOYW1lICE9ICcnKSB7XHJcbiAgICBzZWxlY3RlZFRhYi52YWx1ZSA9IGdldEVudW1WYWx1ZVRhYih0YWJOYW1lKTtcclxuICAgIGNvbnN0IGRvbWFpbiA9IGN1cnJlbnRVcmwudmFsdWUuc2VhcmNoUGFyYW1zLmdldCgnd2Vic2l0ZScpO1xyXG4gICAgaWYgKHNlbGVjdGVkVGFiLnZhbHVlID09IFNldHRpbmdzVGFiLldlYnNpdGVTdGF0cykge1xyXG4gICAgICBpZiAoZG9tYWluICE9IG51bGwgJiYgZG9tYWluICE9ICcnKSBzZWxlY3RlZFdlYnNpdGUudmFsdWUgPSBkb21haW47XHJcbiAgICAgIGVsc2Ugc2VsZWN0ZWRUYWIudmFsdWUgPSBTZXR0aW5nc1RhYi5EYXNoYm9hcmQ7XHJcbiAgICB9IGVsc2UgaWYgKGRvbWFpbiAhPSBudWxsICYmIGRvbWFpbiAhPSAnJykge1xyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoXHJcbiAgICAgICAgbG9jYXRpb24uaHJlZixcclxuICAgICAgICBkb2N1bWVudC50aXRsZSxcclxuICAgICAgICBsb2NhdGlvbi5ocmVmLnJlcGxhY2UoYCZ3ZWJzaXRlPSR7ZG9tYWlufWAsICcnKSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbGVjdFRhYih2YWx1ZTogU2V0dGluZ3NUYWIpIHtcclxuICBzZWxlY3RlZFRhYi52YWx1ZSA9IHZhbHVlO1xyXG4gIGV4dGVuc2lvblBhZ2UudXBkYXRlVGFiKHZhbHVlKTtcclxuICBjdXJyZW50VXJsLnZhbHVlID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKTtcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5tYWluIHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uaGVhZGVyLWJsb2NrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcbi5oZWFkZXItYmxvY2sgLnRpdGxlIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItYmxvY2sgLmxvZ28ge1xyXG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTVweDtcclxufVxyXG4udGFiLXNlcGFyYXRvciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmFib3V0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBTZXR0aW5ncyBmcm9tICcuL3BhZ2VzL0Rhc2hib2FyZC52dWUnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICdAa3l2Zy92dWUzLW5vdGlmaWNhdGlvbic7XHJcbmltcG9ydCBWdWVEYXRlUGlja2VyIGZyb20gJ0B2dWVwaWMvdnVlLWRhdGVwaWNrZXInO1xyXG5pbXBvcnQgJ0B2dWVwaWMvdnVlLWRhdGVwaWNrZXIvZGlzdC9tYWluLmNzcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBpMThuIGZyb20gJy4vcGx1Z2lucy9pMThuJztcclxuXHJcbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcChTZXR0aW5ncyk7XHJcbmFwcC51c2UoTm90aWZpY2F0aW9ucyk7XHJcbmFwcC51c2UoaTE4bik7XHJcbmFwcC5jb21wb25lbnQoJ1Z1ZURhdGVQaWNrZXInLCBWdWVEYXRlUGlja2VyKTtcclxuYXBwLm1vdW50KCdib2R5Jyk7XHJcbiJdLCJuYW1lcyI6WyJ5IiwiYSIsImciLCJ4IiwiJCIsIlQiLCJwIiwiYiIsImsiLCJfIiwiQiIsIkQiLCJOIiwiSCIsIl9fZGVmYXVsdF9fIiwidXNlTm90aWZpY2F0aW9uIiwidGltZSIsIkFwcCIsImFwcCIsImFzY2VuZGluZyIsImYiLCJkIiwiemVybyIsImxlZnQiLCJyaWdodCIsImNlbnRlciIsIm51bWJlciIsInN0YXJ0IiwidGlja3MiLCJ0aWNrRm9ybWF0IiwiYXhpcyIsImZvcm1hdCIsImlkZW50aXR5Iiwic2VsZWN0aW9uIiwicGFyc2VUeXBlbmFtZXMiLCJnZXQiLCJzZXQiLCJjb3B5IiwiZG9jdW1lbnQiLCJzZWxlY3RvciIsInNlbGVjdCIsIm0iLCJqIiwiU2VsZWN0aW9uIiwiZGF0dW0iLCJjb25zdGFudCIsImF0dHJSZW1vdmUiLCJhdHRyUmVtb3ZlTlMiLCJhdHRyQ29uc3RhbnQiLCJhdHRyQ29uc3RhbnROUyIsImF0dHJGdW5jdGlvbiIsInYiLCJhdHRyRnVuY3Rpb25OUyIsInN0eWxlUmVtb3ZlIiwic3R5bGVDb25zdGFudCIsInN0eWxlRnVuY3Rpb24iLCJ0ZXh0Q29uc3RhbnQiLCJ0ZXh0RnVuY3Rpb24iLCJjcmVhdGUiLCJ3aW5kb3ciLCJoIiwibGluZWFyIiwiY29sb3IiLCJyZ2IiLCJjb2xvclJnYiIsInZhbHVlIiwicSIsImkiLCJzdHJpbmciLCJ0aW1lb3V0Iiwibm93IiwiaWQiLCJzY2hlZHVsZSIsImVtcHR5IiwiaW50ZXJwb2xhdGUiLCJpbnRlcnBvbGF0ZVRyYW5zZm9ybSIsImNoaWxkcmVuIiwiaW5oZXJpdCIsInN0eWxlIiwicmVtb3ZlIiwiZWFzZUN1YmljSW5PdXQiLCJleHBvbmVudCIsImxvY2FsZSIsImZvcm1hdFByZWZpeCIsImludGVycG9sYXRlVmFsdWUiLCJsb2NhdGlvbiIsIk1pblZhbHVlIiwiaW50ZXJ2YWwiLCJkMy5zZWxlY3QiLCJkYXRhIiwiZDMuc2NhbGVMaW5lYXIiLCJkMy5heGlzTGVmdCIsImQzLmF4aXNCb3R0b20iLCJDaGFydEpTIiwiVGl0bGUiLCJUb29sdGlwIiwiTGVnZW5kIiwiYXJyYXkiLCJUeXBlT2ZDaGFydCIsIk5vdGlmaWNhdGlvbnMiLCJWdWVEYXRlUGlja2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxNQUFlLGVBQUE7QUNBZixNQUFlLGVBQUE7QUNBZixNQUFlLGVBQUE7QUNBZixNQUFlLGFBQUE7QUNBZixNQUFlLGFBQUE7QUNBZixNQUFlLGFBQUE7QUNDZixTQUFTLEVBQUUsR0FBRztBQUNaLFNBQU8s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RUFDZixVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixnQkFBZ0I7QUFBQSxFQUNoQixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixTQUFTO0FBQUEsRUFDVCxZQUFZO0FBQUEsRUFDWixjQUFjO0FBQUEsRUFDZCxlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixZQUFZO0FBQUEsRUFDWixVQUFVO0FBQUEsRUFDVixhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxTQUFTO0FBQUEsRUFDVCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixNQUFNO0FBQUEsRUFDTixXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixVQUFVO0FBQUEsRUFDVixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxVQUFVO0FBQUEsRUFDVixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxzQkFBc0I7QUFBQSxFQUN0QixXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCxnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsRUFDUCxTQUFTO0FBQUEsRUFDVCxRQUFRO0FBQUEsRUFDUixrQkFBa0I7QUFBQSxFQUNsQixZQUFZO0FBQUEsRUFDWixjQUFjO0FBQUEsRUFDZCxjQUFjO0FBQUEsRUFDZCxnQkFBZ0I7QUFBQSxFQUNoQixpQkFBaUI7QUFBQSxFQUNqQixtQkFBbUI7QUFBQSxFQUNuQixpQkFBaUI7QUFBQSxFQUNqQixpQkFBaUI7QUFBQSxFQUNqQixjQUFjO0FBQUEsRUFDZCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQUEsRUFDVixhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsRUFDWCxlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsRUFDWixRQUFRO0FBQUEsRUFDUixlQUFlO0FBQUEsRUFDZixLQUFLO0FBQUEsRUFDTCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixRQUFRO0FBQUEsRUFDUixZQUFZO0FBQUEsRUFDWixVQUFVO0FBQUEsRUFDVixVQUFVO0FBQUEsRUFDVixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixhQUFhO0FBQUEsRUFDYixXQUFXO0FBQUEsRUFDWCxLQUFLO0FBQUEsRUFDTCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsRUFDVCxRQUFRO0FBQUEsRUFDUixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxZQUFZO0FBQUEsRUFDWixRQUFRO0FBQUEsRUFDUixhQUFhO0FBQ2Y7QUFFQSxPQUFPLE9BQU8sT0FBTztBQUFBLEVBQ25CLEtBQUssVUFBVTtBQUNiLFdBQU8sT0FBTyxPQUFPLElBQUksS0FBSyxlQUFhLE1BQU0sUUFBUTtBQUFBLEVBQzFEO0FBQUEsRUFDRCxjQUFjO0FBQ1osV0FBTyxLQUFLLE1BQU07RUFDbkI7QUFBQSxFQUNELEtBQUs7QUFBQTtBQUFBLEVBQ0wsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsVUFBVTtBQUNaLENBQUM7QUFFRCxTQUFTLGtCQUFrQjtBQUN6QixTQUFPLEtBQUssTUFBTTtBQUNwQjtBQUVBLFNBQVMsbUJBQW1CO0FBQzFCLFNBQU8sS0FBSyxNQUFNO0FBQ3BCO0FBRUEsU0FBUyxrQkFBa0I7QUFDekIsU0FBTyxXQUFXLElBQUksRUFBRTtBQUMxQjtBQUVBLFNBQVMsa0JBQWtCO0FBQ3pCLFNBQU8sS0FBSyxNQUFNO0FBQ3BCO0FBRWUsU0FBUyxNQUFNUixTQUFRO0FBQ3BDLE1BQUlVLElBQUc7QUFDUCxFQUFBVixXQUFVQSxVQUFTLElBQUksS0FBTSxFQUFDLFlBQVc7QUFDekMsVUFBUVUsS0FBSSxNQUFNLEtBQUtWLE9BQU0sTUFBTSxJQUFJVSxHQUFFLENBQUMsRUFBRSxRQUFRQSxLQUFJLFNBQVNBLEdBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxNQUFNLElBQUksS0FBS0EsRUFBQyxJQUN0RixNQUFNLElBQUksSUFBSSxJQUFLQSxNQUFLLElBQUksS0FBUUEsTUFBSyxJQUFJLEtBQVFBLE1BQUssSUFBSSxLQUFRQSxLQUFJLE1BQVNBLEtBQUksT0FBUSxJQUFNQSxLQUFJLElBQU0sQ0FBQyxJQUNoSCxNQUFNLElBQUksS0FBS0EsTUFBSyxLQUFLLEtBQU1BLE1BQUssS0FBSyxLQUFNQSxNQUFLLElBQUksTUFBT0EsS0FBSSxPQUFRLEdBQUksSUFDL0UsTUFBTSxJQUFJLEtBQU1BLE1BQUssS0FBSyxLQUFRQSxNQUFLLElBQUksS0FBUUEsTUFBSyxJQUFJLEtBQVFBLE1BQUssSUFBSSxLQUFRQSxNQUFLLElBQUksS0FBUUEsS0FBSSxPQUFVQSxLQUFJLE9BQVEsSUFBTUEsS0FBSSxNQUFRLEdBQUksSUFDdEosU0FDQ0EsS0FBSSxhQUFhLEtBQUtWLE9BQU0sS0FBSyxJQUFJLElBQUlVLEdBQUUsQ0FBQyxHQUFHQSxHQUFFLENBQUMsR0FBR0EsR0FBRSxDQUFDLEdBQUcsQ0FBQyxLQUM1REEsS0FBSSxhQUFhLEtBQUtWLE9BQU0sS0FBSyxJQUFJLElBQUlVLEdBQUUsQ0FBQyxJQUFJLE1BQU0sS0FBS0EsR0FBRSxDQUFDLElBQUksTUFBTSxLQUFLQSxHQUFFLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxLQUNoR0EsS0FBSSxjQUFjLEtBQUtWLE9BQU0sS0FBSyxLQUFLVSxHQUFFLENBQUMsR0FBR0EsR0FBRSxDQUFDLEdBQUdBLEdBQUUsQ0FBQyxHQUFHQSxHQUFFLENBQUMsQ0FBQyxLQUM3REEsS0FBSSxjQUFjLEtBQUtWLE9BQU0sS0FBSyxLQUFLVSxHQUFFLENBQUMsSUFBSSxNQUFNLEtBQUtBLEdBQUUsQ0FBQyxJQUFJLE1BQU0sS0FBS0EsR0FBRSxDQUFDLElBQUksTUFBTSxLQUFLQSxHQUFFLENBQUMsQ0FBQyxLQUNqR0EsS0FBSSxhQUFhLEtBQUtWLE9BQU0sS0FBSyxLQUFLVSxHQUFFLENBQUMsR0FBR0EsR0FBRSxDQUFDLElBQUksS0FBS0EsR0FBRSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQ3JFQSxLQUFJLGNBQWMsS0FBS1YsT0FBTSxLQUFLLEtBQUtVLEdBQUUsQ0FBQyxHQUFHQSxHQUFFLENBQUMsSUFBSSxLQUFLQSxHQUFFLENBQUMsSUFBSSxLQUFLQSxHQUFFLENBQUMsQ0FBQyxJQUMxRSxNQUFNLGVBQWVWLE9BQU0sSUFBSSxLQUFLLE1BQU1BLE9BQU0sQ0FBQyxJQUNqREEsWUFBVyxn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QUEsSUFDMUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoTkEsTUFBTSxNQUFNLFVBQVUsUUFBUTtBQUM5QixJQUFJLElBQUlDLEVBQWE7QUFDckIsSUFBSSxJQUFJLElBQUk7QUFDWixJQUFJLFVBQVUsaUJBQWlCQyxFQUFhO0FBQzVDLElBQUksTUFBTSxNQUFNOzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbNiwzNCwzNSwzNiwzNywzOCwzOSw0MCw0MSw0Miw0Myw0NCw0NSw0Niw0Nyw0OCw0OSw1MCw1MSw1Miw1Myw1NCw1NSw1Niw1Nyw1OCw1OSw2MCw2MSw2Miw2Myw2NCw2NSw2Niw2Nyw2OCw2OSw3MCw3MSw3Miw3Myw3NCw3NSw3Niw3Nyw3OCw3OSw4MCw4MSw4Miw4Myw4NCw4NSw4Niw4Nyw4OCw4OSw5MCw5MSw5Miw5Myw5NCw5NSw5Niw5Nyw5OCw5OSwxMDAsMTAxLDEwMiwxMDMsMTA0LDEwNSwxMDYsMTA3LDEwOCwxMDksMTEwLDExMSwxMTIsMTEzLDExNCwxMTUsMTE2LDExNywxMTgsMTE5LDEyMCwxMjEsMTIyLDEyMywxMjQsMTI1LDEyNiwxMjcsMTI4LDEyOSwxMzAsMTMxLDEzMiwxMzMsMTM0LDEzNSwxMzYsMTM3LDEzOCwxMzksMTQwLDE0MSwxNDIsMTQzLDE0NCwxNDUsMTQ2LDE0NywxNDgsMTQ5LDE1MCwxNTEsMTUyLDE1MywxNTQsMTU1LDE1Nl19
