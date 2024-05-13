var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import "../browser-polyfill.js";
import { r as requiredArgs, M as toDate, W as millisecondsInHour, a6 as MINUTE, b as Settings, S as StorageParams, o as isDomainEquals, a7 as log, i as injectStorage, a8 as convertLimitTimeToString, B as BLOCK_DEFERRAL_DEFAULT, g as _imports_0 } from "../general.js";
import { P as PromoClearYouTube } from "../PromoClearYouTube.js";
import { d as defineComponent, i as useI18n, r as ref, k as onMounted, c as createElementBlock, a as createBaseVNode, t as toDisplayString, u as unref, s as createCommentVNode, e as createVNode, o as openBlock, p as pushScopeId, h as popScopeId, _ as _export_sfc, x as createApp, y as i18n } from "../i18n.js";
function differenceInMilliseconds(dateLeft, dateRight) {
  requiredArgs(2, arguments);
  return toDate(dateLeft).getTime() - toDate(dateRight).getTime();
}
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function trunc(value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  }
  // Math.trunc is not supported by IE
};
var defaultRoundingMethod = "trunc";
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}
function differenceInHours(dateLeft, dateRight, options) {
  requiredArgs(2, arguments);
  var diff = differenceInMilliseconds(dateLeft, dateRight) / millisecondsInHour;
  return getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
class Deffering {
  constructor(domain, minutes) {
    __publicField(this, "domain");
    __publicField(this, "time");
    this.domain = domain;
    this.time = Date.now() + minutes * MINUTE;
  }
}
async function canDefering(url) {
  const deferList = await Settings.getInstance().getSetting(
    StorageParams.BLOCK_DEFERRAL_TIME
  );
  const array = Object.values(deferList);
  const item = array == null ? void 0 : array.find((x) => isDomainEquals(x.domain, url));
  if (item != void 0)
    log(
      `Deferring time ${url} ${new Date(item.time)} diff ${differenceInHours(
        new Date(item.time),
        /* @__PURE__ */ new Date()
      )}`
    );
  if (item == void 0)
    return true;
  return item != void 0 && differenceInHours(new Date(item.time), /* @__PURE__ */ new Date()) > 24;
}
async function defering(url, timeInMinutes) {
  const settingsStorage = injectStorage();
  const deferList = await Settings.getInstance().getSetting(
    StorageParams.BLOCK_DEFERRAL_TIME
  );
  const array = Object.values(deferList);
  const item = array == null ? void 0 : array.find((x) => isDomainEquals(x.domain, url));
  if (item != void 0)
    item.time = Date.now() + timeInMinutes * MINUTE;
  else
    array.push(new Deffering(url, 5));
  await settingsStorage.saveValue(StorageParams.BLOCK_DEFERRAL_TIME, array);
}
function getValueFromQuery(url) {
  const urlObj = new URL(url);
  const domain = urlObj.searchParams.get(
    "domain"
    /* Domain */
  );
  const sourceUrl = urlObj.searchParams.get(
    "url"
    /* URL */
  );
  const favicon = urlObj.searchParams.get(
    "favicon"
    /* Favicon */
  );
  const limitTime = Number(urlObj.searchParams.get(
    "summaryTime"
    /* LimitTime */
  ));
  const summaryCounter = Number(urlObj.searchParams.get(
    "summaryCounter"
    /* SummaryCounter */
  ));
  return {
    domain,
    url: sourceUrl,
    limitTime,
    summaryCounter,
    favicon
  };
}
const _withScopeId = (n) => (pushScopeId("data-v-75d4e01e"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "block-container" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "header" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "d-inline-block",
    height: "40",
    src: _imports_0
  }),
  /* @__PURE__ */ createBaseVNode("p", { class: "d-inline-block header" }, "Web Activity Time Tracker")
], -1));
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "source-url" };
const _hoisted_5 = { class: "title" };
const _hoisted_6 = { class: "value" };
const _hoisted_7 = { class: "title" };
const _hoisted_8 = { class: "value" };
const _hoisted_9 = ["value"];
const _hoisted_10 = { class: "desctiption" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Block",
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const webSite = ref();
    const sourceUrl = ref();
    const limitTime = ref();
    const favicon = ref();
    const limitTimeString = ref();
    const summaryCounter = ref();
    const allowDeferringBlock = ref();
    const haveToShowDeffering = ref();
    onMounted(async () => {
      const queryObj = getValueFromQuery(location.href);
      webSite.value = queryObj.domain ?? "";
      sourceUrl.value = queryObj.url ?? "";
      limitTime.value = queryObj.limitTime;
      favicon.value = queryObj.favicon ?? "";
      limitTimeString.value = convertLimitTimeToString(queryObj.limitTime);
      summaryCounter.value = queryObj.summaryCounter ?? 0;
      allowDeferringBlock.value = await settingsStorage.getValue(
        StorageParams.BLOCK_DEFERRAL,
        BLOCK_DEFERRAL_DEFAULT
      );
      haveToShowDeffering.value = await canDefering(webSite.value);
    });
    async function deferring() {
      if (webSite.value != void 0 && limitTime.value != void 0 && allowDeferringBlock.value && haveToShowDeffering.value) {
        await defering(webSite.value, 5);
        if (sourceUrl.value != "")
          window.open(sourceUrl.value);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("p", null, toDisplayString(unref(t)("block.message")), 1),
        createBaseVNode("div", null, [
          createBaseVNode("img", {
            class: "favicon",
            height: "35",
            src: favicon.value
          }, null, 8, _hoisted_3),
          createBaseVNode("span", null, toDisplayString(webSite.value), 1)
        ]),
        createBaseVNode("p", _hoisted_4, toDisplayString(sourceUrl.value), 1),
        createBaseVNode("table", null, [
          createBaseVNode("tr", null, [
            createBaseVNode("td", _hoisted_5, toDisplayString(unref(t)("limit.message")) + ":", 1),
            createBaseVNode("td", _hoisted_6, toDisplayString(limitTimeString.value), 1)
          ]),
          createBaseVNode("tr", null, [
            createBaseVNode("td", _hoisted_7, toDisplayString(unref(t)("sessions.message")) + ":", 1),
            createBaseVNode("td", _hoisted_8, toDisplayString(summaryCounter.value), 1)
          ])
        ]),
        allowDeferringBlock.value && haveToShowDeffering.value ? (openBlock(), createElementBlock("input", {
          key: 0,
          type: "button",
          class: "mt-20",
          value: unref(t)("5mins.message"),
          onClick: _cache[0] || (_cache[0] = ($event) => deferring())
        }, null, 8, _hoisted_9)) : createCommentVNode("", true),
        createBaseVNode("p", _hoisted_10, toDisplayString(unref(t)("deferringDescription.message")), 1),
        createVNode(PromoClearYouTube)
      ]);
    };
  }
});
const Block_vue_vue_type_style_index_0_scoped_75d4e01e_lang = "";
const Block = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-75d4e01e"]]);
const app = createApp(Block);
app.use(i18n);
app.mount("body");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluSG91cnMvaW5kZXguanMiLCIuLi8uLi9zcmMvZW50aXR5L2RlZmZlcmluZy50cyIsIi4uLy4uL3NyYy9mdW5jdGlvbnMvZGVmZXJMaXN0LnRzIiwiLi4vLi4vc3JjL3V0aWxzL2Jsb2NrLXBhZ2UudHMiLCIuLi8uLi9zcmMvcGFnZXMvQmxvY2sudnVlIiwiLi4vLi4vc3JjL2Jsb2NrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbGxpc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MjAuNjAwIGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMS43MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjEsIDcwMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDYwMClcbiAqIClcbiAqIC8vPT4gMTEwMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkYXRlTGVmdCkuZ2V0VGltZSgpIC0gdG9EYXRlKGRhdGVSaWdodCkuZ2V0VGltZSgpO1xufSIsInZhciByb3VuZGluZ01hcCA9IHtcbiAgY2VpbDogTWF0aC5jZWlsLFxuICByb3VuZDogTWF0aC5yb3VuZCxcbiAgZmxvb3I6IE1hdGguZmxvb3IsXG4gIHRydW5jOiBmdW5jdGlvbiB0cnVuYyh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA8IDAgPyBNYXRoLmNlaWwodmFsdWUpIDogTWF0aC5mbG9vcih2YWx1ZSk7XG4gIH0gLy8gTWF0aC50cnVuYyBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG59O1xuXG52YXIgZGVmYXVsdFJvdW5kaW5nTWV0aG9kID0gJ3RydW5jJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3VuZGluZ01ldGhvZChtZXRob2QpIHtcbiAgcmV0dXJuIG1ldGhvZCA/IHJvdW5kaW5nTWFwW21ldGhvZF0gOiByb3VuZGluZ01hcFtkZWZhdWx0Um91bmRpbmdNZXRob2RdO1xufSIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldFJvdW5kaW5nTWV0aG9kIH0gZnJvbSBcIi4uL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkhvdXJzXG4gKiBAY2F0ZWdvcnkgSG91ciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBob3VycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGhvdXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnJvdW5kaW5nTWV0aG9kPSd0cnVuYyddIC0gYSByb3VuZGluZyBtZXRob2QgKGBjZWlsYCwgYGZsb29yYCwgYHJvdW5kYCBvciBgdHJ1bmNgKVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBob3Vyc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBob3VycyBhcmUgYmV0d2VlbiAyIEp1bHkgMjAxNCAwNjo1MDowMCBhbmQgMiBKdWx5IDIwMTQgMTk6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5Ib3VycyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTksIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCA2LCA1MClcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluSG91cnMoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRpZmYgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkgLyBtaWxsaXNlY29uZHNJbkhvdXI7XG4gIHJldHVybiBnZXRSb3VuZGluZ01ldGhvZChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufSIsImltcG9ydCB7IE1JTlVURSB9IGZyb20gJy4uL3V0aWxzL3RpbWUnO1xyXG5pbXBvcnQgeyBCYXNlVGltZUxpc3QgfSBmcm9tICcuL2Jhc2VUaW1lTGlzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVmZmVyaW5nIGltcGxlbWVudHMgQmFzZVRpbWVMaXN0IHtcclxuICBkb21haW46IHN0cmluZztcclxuICB0aW1lOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRvbWFpbjogc3RyaW5nLCBtaW51dGVzOiBudW1iZXIpIHtcclxuICAgIHRoaXMuZG9tYWluID0gZG9tYWluO1xyXG4gICAgdGhpcy50aW1lID0gRGF0ZS5ub3coKSArIG1pbnV0ZXMgKiBNSU5VVEU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGRpZmZlcmVuY2VJbkhvdXJzIH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgeyBTdG9yYWdlUGFyYW1zIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XHJcbmltcG9ydCB7IGlzRG9tYWluRXF1YWxzIH0gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcclxuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuL3NldHRpbmdzJztcclxuaW1wb3J0IHsgRGVmZmVyaW5nIH0gZnJvbSAnLi4vZW50aXR5L2RlZmZlcmluZyc7XHJcbmltcG9ydCB7IGluamVjdFN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL2luamVjdC1zdG9yYWdlJztcclxuaW1wb3J0IHsgTUlOVVRFIH0gZnJvbSAnLi4vdXRpbHMvdGltZSc7XHJcbmltcG9ydCB7IGxvZyB9IGZyb20gJy4uL3V0aWxzL2xvZ2dlcic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNJbkRlZmVyTGlzdCh1cmw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIGNvbnN0IGRlZmVyTGlzdCA9IChhd2FpdCBTZXR0aW5ncy5nZXRJbnN0YW5jZSgpLmdldFNldHRpbmcoXHJcbiAgICBTdG9yYWdlUGFyYW1zLkJMT0NLX0RFRkVSUkFMX1RJTUUsXHJcbiAgKSkgYXMgRGVmZmVyaW5nW107XHJcbiAgY29uc3QgYXJyYXkgPSBPYmplY3QudmFsdWVzKGRlZmVyTGlzdCk7XHJcbiAgY29uc3QgaXRlbSA9IGFycmF5Py5maW5kKHggPT4gaXNEb21haW5FcXVhbHMoeC5kb21haW4sIHVybCkpO1xyXG4gIGlmIChpdGVtICE9IHVuZGVmaW5lZClcclxuICAgIGxvZyhcclxuICAgICAgYERlZmVycmluZyB0aW1lICR7dXJsfSAke25ldyBEYXRlKGl0ZW0udGltZSl9IGRpZmYgJHtkaWZmZXJlbmNlSW5Ib3VycyhcclxuICAgICAgICBuZXcgRGF0ZShpdGVtLnRpbWUpLFxyXG4gICAgICAgIG5ldyBEYXRlKCksXHJcbiAgICAgICl9YCxcclxuICAgICk7XHJcbiAgcmV0dXJuIGl0ZW0gIT0gdW5kZWZpbmVkICYmIGl0ZW0udGltZSA+IERhdGUubm93KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYW5EZWZlcmluZyh1cmw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIGNvbnN0IGRlZmVyTGlzdCA9IChhd2FpdCBTZXR0aW5ncy5nZXRJbnN0YW5jZSgpLmdldFNldHRpbmcoXHJcbiAgICBTdG9yYWdlUGFyYW1zLkJMT0NLX0RFRkVSUkFMX1RJTUUsXHJcbiAgKSkgYXMgRGVmZmVyaW5nW107XHJcbiAgY29uc3QgYXJyYXkgPSBPYmplY3QudmFsdWVzKGRlZmVyTGlzdCk7XHJcbiAgY29uc3QgaXRlbSA9IGFycmF5Py5maW5kKHggPT4gaXNEb21haW5FcXVhbHMoeC5kb21haW4sIHVybCkpO1xyXG4gIGlmIChpdGVtICE9IHVuZGVmaW5lZClcclxuICAgIGxvZyhcclxuICAgICAgYERlZmVycmluZyB0aW1lICR7dXJsfSAke25ldyBEYXRlKGl0ZW0udGltZSl9IGRpZmYgJHtkaWZmZXJlbmNlSW5Ib3VycyhcclxuICAgICAgICBuZXcgRGF0ZShpdGVtLnRpbWUpLFxyXG4gICAgICAgIG5ldyBEYXRlKCksXHJcbiAgICAgICl9YCxcclxuICAgICk7XHJcbiAgaWYgKGl0ZW0gPT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgcmV0dXJuIGl0ZW0gIT0gdW5kZWZpbmVkICYmIGRpZmZlcmVuY2VJbkhvdXJzKG5ldyBEYXRlKGl0ZW0udGltZSksIG5ldyBEYXRlKCkpID4gMjQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWZlcmluZyh1cmw6IHN0cmluZywgdGltZUluTWludXRlczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgY29uc3Qgc2V0dGluZ3NTdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xyXG5cclxuICBjb25zdCBkZWZlckxpc3QgPSAoYXdhaXQgU2V0dGluZ3MuZ2V0SW5zdGFuY2UoKS5nZXRTZXR0aW5nKFxyXG4gICAgU3RvcmFnZVBhcmFtcy5CTE9DS19ERUZFUlJBTF9USU1FLFxyXG4gICkpIGFzIERlZmZlcmluZ1tdO1xyXG4gIGNvbnN0IGFycmF5ID0gT2JqZWN0LnZhbHVlcyhkZWZlckxpc3QpO1xyXG4gIGNvbnN0IGl0ZW0gPSBhcnJheT8uZmluZCh4ID0+IGlzRG9tYWluRXF1YWxzKHguZG9tYWluLCB1cmwpKTtcclxuICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpIGl0ZW0udGltZSA9IERhdGUubm93KCkgKyB0aW1lSW5NaW51dGVzICogTUlOVVRFO1xyXG4gIGVsc2UgYXJyYXkucHVzaChuZXcgRGVmZmVyaW5nKHVybCwgNSkpO1xyXG5cclxuICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKFN0b3JhZ2VQYXJhbXMuQkxPQ0tfREVGRVJSQUxfVElNRSwgYXJyYXkpO1xyXG59XHJcbiIsImV4cG9ydCBlbnVtIEJsb2NrUGFyYW1zIHtcclxuICBEb21haW4gPSAnZG9tYWluJyxcclxuICBVUkwgPSAndXJsJyxcclxuICBMaW1pdFRpbWUgPSAnc3VtbWFyeVRpbWUnLFxyXG4gIFN1bW1hcnlDb3VudGVyID0gJ3N1bW1hcnlDb3VudGVyJyxcclxuICBGYXZpY29uID0gJ2Zhdmljb24nLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRCbG9ja1F1ZXJ5KFxyXG4gIGRvbWFpbjogc3RyaW5nLFxyXG4gIHVybDogc3RyaW5nLFxyXG4gIGxpbWl0VGltZTogbnVtYmVyLFxyXG4gIHN1bW1hcnlDb3VudGVyOiBudW1iZXIsXHJcbiAgZmF2aWNvbjogc3RyaW5nLFxyXG4pIHtcclxuICByZXR1cm4gYD9kb21haW49JHtkb21haW59JnVybD0ke3VybH0mc3VtbWFyeVRpbWU9JHtsaW1pdFRpbWV9JnN1bW1hcnlDb3VudGVyPSR7c3VtbWFyeUNvdW50ZXJ9JmZhdmljb249JHtmYXZpY29ufWA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZUZyb21RdWVyeSh1cmw6IHN0cmluZykge1xyXG4gIGNvbnN0IHVybE9iaiA9IG5ldyBVUkwodXJsKTtcclxuICBjb25zdCBkb21haW4gPSB1cmxPYmouc2VhcmNoUGFyYW1zLmdldChCbG9ja1BhcmFtcy5Eb21haW4pO1xyXG4gIGNvbnN0IHNvdXJjZVVybCA9IHVybE9iai5zZWFyY2hQYXJhbXMuZ2V0KEJsb2NrUGFyYW1zLlVSTCk7XHJcbiAgY29uc3QgZmF2aWNvbiA9IHVybE9iai5zZWFyY2hQYXJhbXMuZ2V0KEJsb2NrUGFyYW1zLkZhdmljb24pO1xyXG4gIGNvbnN0IGxpbWl0VGltZSA9IE51bWJlcih1cmxPYmouc2VhcmNoUGFyYW1zLmdldChCbG9ja1BhcmFtcy5MaW1pdFRpbWUpKTtcclxuICBjb25zdCBzdW1tYXJ5Q291bnRlciA9IE51bWJlcih1cmxPYmouc2VhcmNoUGFyYW1zLmdldChCbG9ja1BhcmFtcy5TdW1tYXJ5Q291bnRlcikpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZG9tYWluOiBkb21haW4sXHJcbiAgICB1cmw6IHNvdXJjZVVybCxcclxuICAgIGxpbWl0VGltZTogbGltaXRUaW1lLFxyXG4gICAgc3VtbWFyeUNvdW50ZXI6IHN1bW1hcnlDb3VudGVyLFxyXG4gICAgZmF2aWNvbjogZmF2aWNvbixcclxuICB9O1xyXG59XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiYmxvY2stY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJkLWlubGluZS1ibG9ja1wiIGhlaWdodD1cIjQwXCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zLzQ4eDQ4LnBuZ1wiIC8+XHJcbiAgICAgIDxwIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgaGVhZGVyXCI+V2ViIEFjdGl2aXR5IFRpbWUgVHJhY2tlcjwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPHA+XHJcbiAgICAgIHt7IHQoJ2Jsb2NrLm1lc3NhZ2UnKSB9fVxyXG4gICAgPC9wPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGltZyBjbGFzcz1cImZhdmljb25cIiBoZWlnaHQ9XCIzNVwiIDpzcmM9XCJmYXZpY29uXCIgLz5cclxuICAgICAgPHNwYW4+e3sgd2ViU2l0ZSB9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHAgY2xhc3M9XCJzb3VyY2UtdXJsXCI+e3sgc291cmNlVXJsIH19PC9wPlxyXG4gICAgPHRhYmxlPlxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwidGl0bGVcIj57eyB0KCdsaW1pdC5tZXNzYWdlJykgfX06PC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJ2YWx1ZVwiPnt7IGxpbWl0VGltZVN0cmluZyB9fTwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGQgY2xhc3M9XCJ0aXRsZVwiPnt7IHQoJ3Nlc3Npb25zLm1lc3NhZ2UnKSB9fTo8L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cInZhbHVlXCI+e3sgc3VtbWFyeUNvdW50ZXIgfX08L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90YWJsZT5cclxuICAgIDxpbnB1dFxyXG4gICAgICB2LWlmPVwiYWxsb3dEZWZlcnJpbmdCbG9jayAmJiBoYXZlVG9TaG93RGVmZmVyaW5nXCJcclxuICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIGNsYXNzPVwibXQtMjBcIlxyXG4gICAgICA6dmFsdWU9XCJ0KCc1bWlucy5tZXNzYWdlJylcIlxyXG4gICAgICBAY2xpY2s9XCJkZWZlcnJpbmcoKVwiXHJcbiAgICAvPlxyXG4gICAgPHAgY2xhc3M9XCJkZXNjdGlwdGlvblwiPnt7IHQoJ2RlZmVycmluZ0Rlc2NyaXB0aW9uLm1lc3NhZ2UnKSB9fTwvcD5cclxuICAgIDxQcm9tb0NsZWFyWW91VHViZSAvPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cclxuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xyXG5pbXBvcnQgeyBnZXRWYWx1ZUZyb21RdWVyeSB9IGZyb20gJy4uL3V0aWxzL2Jsb2NrLXBhZ2UnO1xyXG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XHJcbmltcG9ydCB7IEJMT0NLX0RFRkVSUkFMX0RFRkFVTFQsIFN0b3JhZ2VQYXJhbXMgfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcclxuaW1wb3J0IHsgY29udmVydExpbWl0VGltZVRvU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydGVyJztcclxuaW1wb3J0IFByb21vQ2xlYXJZb3VUdWJlIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvbW9DbGVhcllvdVR1YmUudnVlJztcclxuaW1wb3J0IHsgY2FuRGVmZXJpbmcsIGRlZmVyaW5nIH0gZnJvbSAnLi4vZnVuY3Rpb25zL2RlZmVyTGlzdCc7XHJcblxyXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcclxuXHJcbmNvbnN0IHNldHRpbmdzU3RvcmFnZSA9IGluamVjdFN0b3JhZ2UoKTtcclxuXHJcbmNvbnN0IHdlYlNpdGUgPSByZWY8c3RyaW5nPigpO1xyXG5jb25zdCBzb3VyY2VVcmwgPSByZWY8c3RyaW5nPigpO1xyXG5jb25zdCBsaW1pdFRpbWUgPSByZWY8bnVtYmVyPigpO1xyXG5jb25zdCBmYXZpY29uID0gcmVmPHN0cmluZz4oKTtcclxuY29uc3QgbGltaXRUaW1lU3RyaW5nID0gcmVmPHN0cmluZz4oKTtcclxuY29uc3Qgc3VtbWFyeUNvdW50ZXIgPSByZWY8bnVtYmVyPigpO1xyXG5jb25zdCBhbGxvd0RlZmVycmluZ0Jsb2NrID0gcmVmPGJvb2xlYW4+KCk7XHJcbmNvbnN0IGhhdmVUb1Nob3dEZWZmZXJpbmcgPSByZWY8Ym9vbGVhbj4oKTtcclxuXHJcbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcXVlcnlPYmogPSBnZXRWYWx1ZUZyb21RdWVyeShsb2NhdGlvbi5ocmVmKTtcclxuICB3ZWJTaXRlLnZhbHVlID0gcXVlcnlPYmouZG9tYWluID8/ICcnO1xyXG4gIHNvdXJjZVVybC52YWx1ZSA9IHF1ZXJ5T2JqLnVybCA/PyAnJztcclxuICBsaW1pdFRpbWUudmFsdWUgPSBxdWVyeU9iai5saW1pdFRpbWU7XHJcbiAgZmF2aWNvbi52YWx1ZSA9IHF1ZXJ5T2JqLmZhdmljb24gPz8gJyc7XHJcbiAgbGltaXRUaW1lU3RyaW5nLnZhbHVlID0gY29udmVydExpbWl0VGltZVRvU3RyaW5nKHF1ZXJ5T2JqLmxpbWl0VGltZSk7XHJcbiAgc3VtbWFyeUNvdW50ZXIudmFsdWUgPSBxdWVyeU9iai5zdW1tYXJ5Q291bnRlciA/PyAwO1xyXG5cclxuICBhbGxvd0RlZmVycmluZ0Jsb2NrLnZhbHVlID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxyXG4gICAgU3RvcmFnZVBhcmFtcy5CTE9DS19ERUZFUlJBTCxcclxuICAgIEJMT0NLX0RFRkVSUkFMX0RFRkFVTFQsXHJcbiAgKTtcclxuICBoYXZlVG9TaG93RGVmZmVyaW5nLnZhbHVlID0gYXdhaXQgY2FuRGVmZXJpbmcod2ViU2l0ZS52YWx1ZSk7XHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGVmZXJyaW5nKCkge1xyXG4gIGlmIChcclxuICAgIHdlYlNpdGUudmFsdWUgIT0gdW5kZWZpbmVkICYmXHJcbiAgICBsaW1pdFRpbWUudmFsdWUgIT0gdW5kZWZpbmVkICYmXHJcbiAgICBhbGxvd0RlZmVycmluZ0Jsb2NrLnZhbHVlICYmXHJcbiAgICBoYXZlVG9TaG93RGVmZmVyaW5nLnZhbHVlXHJcbiAgKSB7XHJcbiAgICBhd2FpdCBkZWZlcmluZyh3ZWJTaXRlLnZhbHVlLCA1KTtcclxuICAgIGlmIChzb3VyY2VVcmwudmFsdWUgIT0gJycpIHdpbmRvdy5vcGVuKHNvdXJjZVVybC52YWx1ZSk7XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuYm9keSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4uYmxvY2stY29udGFpbmVyIHtcclxuICBtYXJnaW46IGF1dG8gYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDUlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmJsb2NrLWNvbnRhaW5lciBwIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5ibG9jay1jb250YWluZXIgc3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzRhNGE0YTtcclxuICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnN0YXRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnN0YXRzIHAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxudGFibGUge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG50YWJsZSAudGl0bGUge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbnRhYmxlIC52YWx1ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uZGVzY3RpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNGE0YTRhO1xyXG59XHJcbi5mYXZpY29uIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG4uc291cmNlLXVybCB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGdyZXk7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IEJsb2NrIGZyb20gJy4vcGFnZXMvQmxvY2sudnVlJztcclxuaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IGkxOG4gZnJvbSAnLi9wbHVnaW5zL2kxOG4nO1xyXG5cclxuY29uc3QgYXBwID0gY3JlYXRlQXBwKEJsb2NrKTtcclxuYXBwLnVzZShpMThuKTtcclxuYXBwLm1vdW50KCdib2R5Jyk7XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBd0JlLFNBQVMseUJBQXlCLFVBQVUsV0FBVztBQUNwRSxlQUFhLEdBQUcsU0FBUztBQUN6QixTQUFPLE9BQU8sUUFBUSxFQUFFLFFBQU8sSUFBSyxPQUFPLFNBQVMsRUFBRTtBQUN4RDtBQzNCQSxJQUFJLGNBQWM7QUFBQSxFQUNoQixNQUFNLEtBQUs7QUFBQSxFQUNYLE9BQU8sS0FBSztBQUFBLEVBQ1osT0FBTyxLQUFLO0FBQUEsRUFDWixPQUFPLFNBQVMsTUFBTSxPQUFPO0FBQzNCLFdBQU8sUUFBUSxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksS0FBSyxNQUFNLEtBQUs7QUFBQSxFQUN2RDtBQUFBO0FBQ0g7QUFFQSxJQUFJLHdCQUF3QjtBQUNyQixTQUFTLGtCQUFrQixRQUFRO0FBQ3hDLFNBQU8sU0FBUyxZQUFZLE1BQU0sSUFBSSxZQUFZLHFCQUFxQjtBQUN6RTtBQ2VlLFNBQVMsa0JBQWtCLFVBQVUsV0FBVyxTQUFTO0FBQ3RFLGVBQWEsR0FBRyxTQUFTO0FBQ3pCLE1BQUks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
